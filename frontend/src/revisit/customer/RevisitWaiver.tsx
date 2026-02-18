import React, { useState, useRef, useEffect } from 'react';

interface RevisitWaiverProps {
  customerName: string;
  onSubmit: (waiverData: {
    partySize: { adults: number; minors: number };
    signature: string;
    visitors: any[];
  }) => void;
  onBack: () => void;
}

export function RevisitWaiver({ customerName, onSubmit, onBack }: RevisitWaiverProps) {
  const [currentStep, setCurrentStep] = useState<'party' | 'main' | 'additional' | 'minors'>('party');
  const [partySize, setPartySize] = useState({ adults: 1, minors: 0 });
  const [agreed, setAgreed] = useState(false);
  const [mainSignature, setMainSignature] = useState('');
  const [additionalSignatures, setAdditionalSignatures] = useState<Array<{ name: string; signature: string }>>([]);
  const [currentAdultIndex, setCurrentAdultIndex] = useState(0);
  const [minorNames, setMinorNames] = useState<string[]>([]);
  const [currentMinorIndex, setCurrentMinorIndex] = useState(0);
  const [currentMinorName, setCurrentMinorName] = useState('');

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasDrawn, setHasDrawn] = useState(false);

  // Initialize canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.strokeStyle = '#D4A736'; // Gold color, same as check-in
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
      }
    }
  }, [currentStep, currentAdultIndex]);

  const getCanvasPos = (
    e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>,
    canvas: HTMLCanvasElement
  ) => {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    return {
      x: (clientX - rect.left) * scaleX,
      y: (clientY - rect.top) * scaleY,
    };
  };

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { x, y } = getCanvasPos(e, canvas);
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { x, y } = getCanvasPos(e, canvas);
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
    setHasDrawn(true);
  };

  const clearSignature = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setHasDrawn(false);
  };

  const captureSignature = () => {
    const canvas = canvasRef.current;
    if (!canvas) return '';

    return canvas.toDataURL('image/png');
  };

  const handlePartySizeNext = () => {
    setCurrentStep('main');
  };

  const handleMainWaiverNext = () => {
    if (!agreed) {
      alert('Please agree to the terms before continuing');
      return;
    }

    if (!hasDrawn) {
      alert('Please provide your signature');
      return;
    }

    const signature = captureSignature();
    setMainSignature(signature);
    clearSignature();

    // If more than 1 adult, go to additional signatures
    if (partySize.adults > 1) {
      setCurrentStep('additional');
      setCurrentAdultIndex(0);
    }
    // If only minors, go to minors
    else if (partySize.minors > 0) {
      setCurrentStep('minors');
      setCurrentMinorIndex(0);
    }
    // Otherwise, submit
    else {
      submitWaiver(signature, [], []);
    }
  };

  const handleAdditionalNext = () => {
    const name = (document.getElementById('additional-name') as HTMLInputElement)?.value;
    if (!name || !name.trim()) {
      alert('Please enter a name');
      return;
    }

    if (!hasDrawn) {
      alert('Please provide a signature');
      return;
    }

    const signature = captureSignature();
    const newSignatures = [...additionalSignatures];
    newSignatures[currentAdultIndex] = { name: name.trim(), signature };
    setAdditionalSignatures(newSignatures);
    clearSignature();

    // Check if more adults
    if (currentAdultIndex < partySize.adults - 2) {
      setCurrentAdultIndex(currentAdultIndex + 1);
    }
    // Move to minors if any
    else if (partySize.minors > 0) {
      setCurrentStep('minors');
      setCurrentMinorIndex(0);
    }
    // Otherwise submit
    else {
      submitWaiver(mainSignature, newSignatures, []);
    }
  };

  const handleMinorNext = () => {
    if (!currentMinorName.trim()) {
      alert('Please enter the minor\'s name');
      return;
    }

    const newNames = [...minorNames];
    newNames[currentMinorIndex] = currentMinorName.trim();
    setMinorNames(newNames);
    setCurrentMinorName('');

    // Check if more minors
    if (currentMinorIndex < partySize.minors - 1) {
      setCurrentMinorIndex(currentMinorIndex + 1);
    }
    // Otherwise submit
    else {
      submitWaiver(mainSignature, additionalSignatures, newNames);
    }
  };

  const submitWaiver = (mainSig: string, additionalSigs: Array<{ name: string; signature: string }>, minors: string[]) => {
    const allVisitors = [
      {
        name: customerName,
        signature: mainSig,
        isMain: true,
        isMinor: false,
      },
      ...additionalSigs.map(sig => ({
        name: sig.name,
        signature: sig.signature,
        isMain: false,
        isMinor: false,
      })),
      ...minors.map(name => ({
        name,
        signature: '',
        isMain: false,
        isMinor: true,
      })),
    ];

    onSubmit({
      partySize,
      signature: mainSig,
      visitors: allVisitors,
    });
  };

  const handleBack = () => {
    if (currentStep === 'party') {
      onBack();
    } else if (currentStep === 'main') {
      setCurrentStep('party');
    } else if (currentStep === 'additional') {
      if (currentAdultIndex === 0) {
        setCurrentStep('main');
      } else {
        setCurrentAdultIndex(currentAdultIndex - 1);
      }
    } else if (currentStep === 'minors') {
      if (currentMinorIndex === 0) {
        if (partySize.adults > 1) {
          setCurrentStep('additional');
          setCurrentAdultIndex(partySize.adults - 2);
        } else {
          setCurrentStep('main');
        }
      } else {
        setCurrentMinorIndex(currentMinorIndex - 1);
      }
    }
  };

  // Party Size Step
  if (currentStep === 'party') {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 sm:p-6" style={{ backgroundColor: 'var(--color-background)' }}>
        <div className="w-full max-w-md" style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)', borderRadius: '12px', padding: '24px' }}>
          <h1 className="text-center mb-2 text-2xl sm:text-3xl" style={{ color: 'var(--color-gold)' }}>
            Party Size
          </h1>
          <p className="text-center mb-6 sm:mb-8 text-base sm:text-lg" style={{ color: 'var(--color-text-gray)' }}>
            How many people are in your party?
          </p>

          <div className="space-y-6">
            <div>
              <label className="block mb-2" style={{ color: 'var(--color-text-gray)' }}>
                Number of Adults (including you)
              </label>
              <input
                type="number"
                min="1"
                max="20"
                value={partySize.adults}
                onChange={(e) => setPartySize({ ...partySize, adults: parseInt(e.target.value) || 1 })}
                className="w-full px-4 py-3 rounded-lg"
                style={{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)', color: 'var(--color-text-white)' }}
              />
            </div>

            <div>
              <label className="block mb-2" style={{ color: 'var(--color-text-gray)' }}>
                Number of Minors (under 18)
              </label>
              <input
                type="number"
                min="0"
                max="20"
                value={partySize.minors}
                onChange={(e) => setPartySize({ ...partySize, minors: parseInt(e.target.value) || 0 })}
                className="w-full px-4 py-3 rounded-lg"
                style={{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)', color: 'var(--color-text-white)' }}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="button"
                onClick={handleBack}
                className="w-full sm:flex-1 py-3 rounded-lg"
                style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)', color: 'var(--color-text-white)' }}
              >
                Back
              </button>
              <button
                onClick={handlePartySizeNext}
                className="w-full sm:flex-1 py-3 rounded-lg"
                style={{ backgroundColor: 'var(--color-gold)', color: 'var(--color-background)' }}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Main Waiver Step
  if (currentStep === 'main') {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 sm:p-6" style={{ backgroundColor: 'var(--color-background)', overflowY: 'auto' }}>
        <div className="w-full max-w-3xl" style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)', borderRadius: '12px', padding: '24px' }}>
          <h1 className="text-center mb-2 text-2xl sm:text-3xl" style={{ color: 'var(--color-gold)' }}>
            Liability Waiver
          </h1>
          <p className="text-center mb-6 text-base sm:text-lg" style={{ color: 'var(--color-text-gray)' }}>
            Please read and sign below
          </p>

          <div className="space-y-4 sm:space-y-6">
            <div
              className="rounded-lg"
              style={{
                backgroundColor: 'var(--color-background)',
                border: '1px solid var(--color-border)',
                maxHeight: '300px',
                overflowY: 'auto',
                padding: '16px',
                color: 'var(--color-text-white)',
                lineHeight: '1.6',
                fontSize: '13px',
              }}
            >
              <p style={{ whiteSpace: 'pre-wrap' }}>
                {`WAIVER AND RELEASE, INDEMNITY AGREEMENT, AND INFORMED CONSENT

I am signing this Waiver and Release, Indemnity Agreement, and Informed Consent (hereinafter "Waiver & Release") in anticipation of my entering the warehouse of Reliance Granite and Marble Corporation ("Reliance" or "we" or "our" or "us") located at 50 Boright Avenue, Kenilworth, NJ 07033 ("Premises").

I understand that Reliance is located in a commercial area, and that the Premises contain a wholesale warehouse. Reliance is involved in receiving, handling, dispatching, storing, and selling natural stone tiles and slabs in various shapes, sizes, weights, colors, and thicknesses, which necessarily involves heavy traffic and activities in movement of workers, materials, material-handling equipment, including but not limited to, forklifts, overhead cranes, pallet lift jacks, pickups, trailers, flatbed trucks and other heavy and dangerous equipment. Stones are heavy and may have sharp or jagged surfaces and edges. The nature of this business and scope of operations involve use of tools, including but not limited to, crowbars, hammers, wood-cutting saws and steel cables. As a result, debris such as wood bark, nails, plastic sheets, broken boxes, and various additional sharp, heavy, slippery, etc. objects may lie on the floor of the Premises between cleaning cycles. Other equipment, such as steel ropes, cables, ladders, etc. may be leaning, hanging, and/or on the Premises floor in the normal course of work. As result of the foregoing, customers entering the Premises are required to wear hard hats and to be aware of and vigilant with respect to their surroundings. By signing below, I acknowledge that Reliance personnel provided me with a hard hat and gloves. I acknowledge that if I am not wearing a hard hat and/or gloves, it is because I have read the terms of this document and assumed all risks associated with entering the Premises without them, including but not limited to the following provisions, all of which apply regardless of whether I am wearing a hard hat, gloves, or other protective gear, garments, footwear, or equipment.

I understand that my presence on the Premises poses unique risks of injury, and even death, of which I am fully aware. I agree: (1) not to move around the premises alone/unattended and to ask for help/assistance with materials/products and moving about the Premises; (2) to be vigilant, careful, alert, and aware of ongoing activities and tripping hazards while walking in the Premises and between aisles; (3) to not use any mobile electronic devices in the Premises, including but not limited to talking on a mobile device, texting, emailing, internet searching, etc., as I understand that doing so will prevent me from being fully aware of my surroundings at all times; (4) that children under the age of 15 are strictly prohibited in the warehouse and will have to wait in the office; if such children are brought into the warehouse without our permission, the child(ren)'s parents, guardians, and/or caretakers are solely responsible for their safety; (5) to avoid moving into confined areas and areas with insufficient or dim lighting; (6) not to attempt to lift or move any stones, tiles or objects; (7) not to touch any machines, equipment, materials, etc. in the Premises; (7) to keep a safe distance of at least fifty (50) feet from any moving materials and equipment in the Premises; (8) to obey all rules and instructions explained to me by Reliance staff; and (9) to ask us questions and for any additional safety information.

My signature on this document evidences my understanding and agreement that any bodily injury, death, or loss of personal property, damages and expenses are my sole responsibility.

I further agree and understand that I have read this Waiver & Release carefully and I am aware that, by signing it, I will be waiving and releasing all claims for personal injuries and property damage that I sustain while on the Premises. I acknowledge that Reliance has made no warranty, express or implied, regarding the condition of the Premises or the materials or equipment thereat, or the physical or mental condition, competency or skills of any other person at the Premises or elsewhere.

I have had ample opportunity to review this document and ask questions about all of the risks presented herein. Notwithstanding these risks, both disclosed and undisclosed, I fully assume these risks and the inherently dangerous nature of the Premises, and it is with my full and complete knowledge of these risks that, to the full extent permitted by New Jersey law, I agree to hold harmless, release, defend, and indemnify Reliance and to waive and relinquish all claims, demands, costs, losses, expenses or compensation of whatever nature for any loss, damage or injuries to persons and property sustained by me, any children in my care, my heirs, personal representatives, successors, assigns, and all other persons I may have or which in the future may accrue to the above referenced individuals or entities against Reliance, its owners, officers, principals, agents, successors, assigns, heirs, employees, volunteers, and independent contractors.

This Waiver & Release covers any and all liability, claims, demands, causes of action, or damages of any kind related to, arising from, or in any way connected with or believed to be caused by: (a) Reliance or its employees; (b) any other individuals merely present at Premises; or (c) me at the Premises. This Waiver & Release covers any and all activities connected to or associated with my presence at the Premises, all without limitation. I further agree not to sue, claim against, attach the property of, or prosecute Reliance for any such injury, death, damages or losses, whether or not such injury or death was caused in whole or in part by my negligence, the negligence of Reliance, or the act or omission of any party whatsoever.

This contract shall be legally binding upon me, my spouse, my heirs, my estate, assigns, legal guardians, and my personal representatives. I agree that this Waiver & Release is intended to be as broad and inclusive as permitted by the laws of the State of New Jersey, and that if any portion of this Waiver & Release is held invalid, the other provisions shall continue in full legal force and effect. This Waiver & Release is in effect from the date of signing and shall remain in force as long as I am on the Premises, including any future visits to the Premises. The terms and provisions of this Waiver & Release and any dispute arising in connection with it shall be governed by and construed in accordance with New Jersey law.

I, as a parent/guardian/supervisor/caretaker of an individual 15 years of age or older, sign this Waiver & Release on behalf of said minor, understanding that this Waiver & Release shall be deemed binding to the fullest extent permitted by law with respect to said minor. The consent of one parent or legal guardian shall be deemed the consent of all persons legally responsible for this individual, even if only one such person signs this Waiver & Release.

I am not under the influence of any medication, alcohol, or controlled substance that would impair my judgment to enter into this Waiver & Release or comply with its terms while on the Premises.

I HAVE READ THIS COVENANT NOT TO SUE, WAIVER, RELEASE, INFORMED CONSENT, ASSUMPTION OF RISK AND INDEMNITY AGREEMENT, FULLY UNDERSTAND ITS TERMS, UNDERSTAND THAT I HAVE GIVEN UP SUBSTANTIAL RIGHTS BY SIGNING IT, AND HAVE SIGNED IT FREELY AND VOLUNTARILY WITHOUT ANY INDUCEMENT, ASSURANCE OR GUARANTEE BEING MADE TO ME AND INTEND MY SIGNATURE TO BE A COMPLETE AND UNCONDITIONAL RELEASE OF RELIANCE AND ALL PARTIES MENTIONED HEREIN TO THE GREATEST EXTENT ALLOWED BY LAW. THIS IS A RELEASE OF LIABILITY; DO NOT SIGN THIS DOCUMENT IF YOU DO NOT UNDERSTAND OR DO NOT AGREE WITH ITS TERMS.`}
              </p>
            </div>

            <div>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="w-5 h-5"
                  style={{ accentColor: 'var(--color-gold)' }}
                />
                <span style={{ color: 'var(--color-text-white)' }}>
                  I have read and agree to the terms above
                </span>
              </label>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label style={{ color: 'var(--color-text-gray)' }}>Your Signature</label>
                <button
                  type="button"
                  onClick={clearSignature}
                  className="text-sm px-3 py-1 rounded"
                  style={{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)', color: 'var(--color-text-gray)' }}
                >
                  Clear
                </button>
              </div>
              <canvas
                ref={canvasRef}
                width={600}
                height={200}
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseLeave={stopDrawing}
                onTouchStart={startDrawing}
                onTouchMove={draw}
                onTouchEnd={stopDrawing}
                className="w-full border rounded-lg cursor-crosshair"
                style={{ backgroundColor: 'var(--color-background)', border: '2px solid var(--color-gold)' }}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="button"
                onClick={handleBack}
                className="w-full sm:flex-1 py-3 rounded-lg"
                style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)', color: 'var(--color-text-white)' }}
              >
                Back
              </button>
              <button
                onClick={handleMainWaiverNext}
                className="w-full sm:flex-1 py-3 rounded-lg"
                style={{ backgroundColor: 'var(--color-gold)', color: 'var(--color-background)' }}
              >
                {partySize.adults > 1 || partySize.minors > 0 ? 'Next' : 'Submit'}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Additional Adult Signatures
  if (currentStep === 'additional') {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 sm:p-6" style={{ backgroundColor: 'var(--color-background)' }}>
        <div className="w-full max-w-2xl" style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)', borderRadius: '12px', padding: '24px' }}>
          <h1 className="text-center mb-2 text-2xl sm:text-3xl" style={{ color: 'var(--color-gold)' }}>
            Visitor {currentAdultIndex + 2} of {partySize.adults}
          </h1>
          <p className="text-center mb-6 sm:mb-8 text-base sm:text-lg" style={{ color: 'var(--color-text-gray)' }}>
            Additional adult signature required
          </p>

          <div className="space-y-6">
            <div>
              <label className="block mb-2" style={{ color: 'var(--color-text-gray)' }}>
                Full Name
              </label>
              <input
                id="additional-name"
                type="text"
                defaultValue={additionalSignatures[currentAdultIndex]?.name || ''}
                className="w-full px-4 py-3 rounded-lg"
                style={{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)', color: 'var(--color-text-white)' }}
                placeholder="Enter full name"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label style={{ color: 'var(--color-text-gray)' }}>Signature</label>
                <button
                  type="button"
                  onClick={clearSignature}
                  className="text-sm px-3 py-1 rounded"
                  style={{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)', color: 'var(--color-text-gray)' }}
                >
                  Clear
                </button>
              </div>
              <canvas
                ref={canvasRef}
                width={600}
                height={200}
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseLeave={stopDrawing}
                onTouchStart={startDrawing}
                onTouchMove={draw}
                onTouchEnd={stopDrawing}
                className="w-full border rounded-lg cursor-crosshair"
                style={{ backgroundColor: 'var(--color-background)', border: '2px solid var(--color-gold)' }}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="button"
                onClick={handleBack}
                className="w-full sm:flex-1 py-3 rounded-lg"
                style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)', color: 'var(--color-text-white)' }}
              >
                Back
              </button>
              <button
                onClick={handleAdditionalNext}
                className="w-full sm:flex-1 py-3 rounded-lg"
                style={{ backgroundColor: 'var(--color-gold)', color: 'var(--color-background)' }}
              >
                {currentAdultIndex < partySize.adults - 2 || partySize.minors > 0 ? 'Next' : 'Submit'}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Minor Names
  if (currentStep === 'minors') {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 sm:p-6" style={{ backgroundColor: 'var(--color-background)' }}>
        <div className="w-full max-w-md" style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)', borderRadius: '12px', padding: '24px' }}>
          <h1 className="text-center mb-2 text-2xl sm:text-3xl" style={{ color: 'var(--color-gold)' }}>
            Minor {currentMinorIndex + 1} of {partySize.minors}
          </h1>
          <p className="text-center mb-6 sm:mb-8 text-base sm:text-lg" style={{ color: 'var(--color-text-gray)' }}>
            Please provide the minor's name
          </p>

          <div className="space-y-6">
            <div>
              <label className="block mb-2" style={{ color: 'var(--color-text-gray)' }}>
                Full Name
              </label>
              <input
                type="text"
                value={currentMinorName}
                onChange={(e) => setCurrentMinorName(e.target.value)}
                className="w-full px-4 py-3 rounded-lg"
                style={{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)', color: 'var(--color-text-white)' }}
                placeholder="Enter full name"
              />
            </div>

            <p className="text-sm text-center" style={{ color: 'var(--color-text-gray)' }}>
              No signature required (under 18)
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="button"
                onClick={handleBack}
                className="w-full sm:flex-1 py-3 rounded-lg"
                style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)', color: 'var(--color-text-white)' }}
              >
                Back
              </button>
              <button
                onClick={handleMinorNext}
                className="w-full sm:flex-1 py-3 rounded-lg"
                style={{ backgroundColor: 'var(--color-gold)', color: 'var(--color-background)' }}
              >
                {currentMinorIndex < partySize.minors - 1 ? 'Next' : 'Submit'}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}