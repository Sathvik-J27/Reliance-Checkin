import React, { useState, useRef, useEffect } from 'react';
import { UserPlus } from 'lucide-react';

interface CheckInStep3cProps {
  onNext: (data: { name: string; signature: string }) => void;
  onBack: () => void;
  visitorNumber: number;
  totalAdults: number;
  initialData?: { name: string; signature: string };
}

export function CheckInStep3c({ onNext, onBack, visitorNumber, totalAdults, initialData }: CheckInStep3cProps) {
  const [name, setName] = useState('');
  const [signatureData, setSignatureData] = useState<string>('');
  const [isDrawing, setIsDrawing] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Initialize canvas and load data based on visitorNumber and initialData
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = canvas.offsetWidth * 2;
    canvas.height = canvas.offsetHeight * 2;
    ctx.scale(2, 2);

    // Set drawing style - matching main waiver (gold on dark background)
    ctx.strokeStyle = '#D4A736';
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    // Clear canvas first
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Load data for this specific visitor
    if (initialData) {
      setName(initialData.name);
      setSignatureData(initialData.signature);
      
      if (initialData.signature) {
        const img = new Image();
        img.onload = () => {
          ctx.drawImage(img, 0, 0, canvas.offsetWidth, canvas.offsetHeight);
        };
        img.src = initialData.signature;
      }
    } else {
      // New visitor - clear everything
      setName('');
      setSignatureData('');
    }
  }, [visitorNumber, initialData]);

  // Capitalize first letter of each word
  const capitalizeInput = (value: string) => {
    return value
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  };

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    
    const clientX = ('touches' in e) ? e.touches[0].clientX : e.clientX;
    const clientY = ('touches' in e) ? e.touches[0].clientY : e.clientY;
    
    const x = (clientX - rect.left) * scaleX / 2;
    const y = (clientY - rect.top) * scaleY / 2;

    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    
    const clientX = ('touches' in e) ? e.touches[0].clientX : e.clientX;
    const clientY = ('touches' in e) ? e.touches[0].clientY : e.clientY;
    
    const x = (clientX - rect.left) * scaleX / 2;
    const y = (clientY - rect.top) * scaleY / 2;

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
    const canvas = canvasRef.current;
    if (canvas) {
      setSignatureData(canvas.toDataURL());
    }
  };

  const clearSignature = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setSignatureData('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim()) {
      alert('Please enter the visitor\'s name');
      return;
    }
    
    if (!signatureData) {
      alert('Please provide a signature');
      return;
    }

    onNext({ name: name.trim(), signature: signatureData });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="w-full max-w-2xl" style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)', borderRadius: '12px', padding: '24px' }}>
        <div className="flex items-center justify-center gap-3 mb-3">
          <UserPlus size={32} style={{ color: 'var(--color-gold)' }} />
          <h1 className="text-center text-2xl sm:text-3xl" style={{ color: 'var(--color-gold)' }}>
            Additional Visitor {visitorNumber} of {totalAdults}
          </h1>
        </div>
        
        <p className="text-center mb-6 text-base sm:text-lg" style={{ color: 'var(--color-text-gray)' }}>
          Please provide name and signature
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <div className="space-y-2">
            <label className="block text-base" style={{ color: 'var(--color-text-white)' }}>
              Visitor's Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(capitalizeInput(e.target.value))}
              placeholder="Enter full name"
              required
              className="w-full px-4 py-3 rounded-lg text-base"
              style={{ 
                backgroundColor: 'var(--color-background)', 
                border: '1px solid var(--color-border)', 
                color: 'var(--color-text-white)' 
              }}
            />
          </div>

          {/* Signature Pad */}
          <div className="space-y-3">
            <label className="block text-base" style={{ color: 'var(--color-text-white)' }}>
              Signature
            </label>
            <div 
              className="relative rounded-lg overflow-hidden"
              style={{ 
                backgroundColor: 'var(--color-background)',
                border: '1px solid var(--color-border)',
                height: '180px'
              }}
            >
              <canvas
                ref={canvasRef}
                className="w-full h-full cursor-crosshair"
                style={{ touchAction: 'none' }}
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseLeave={stopDrawing}
                onTouchStart={startDrawing}
                onTouchMove={draw}
                onTouchEnd={stopDrawing}
                onTouchCancel={stopDrawing}
              />
              
              {!signatureData && (
                <div 
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  style={{ color: 'var(--color-text-gray)', fontSize: '16px' }}
                >
                  Sign here with your finger or mouse
                </div>
              )}
            </div>
            
            <button
              type="button"
              onClick={clearSignature}
              className="w-full py-2 rounded-lg text-sm transition-colors"
              style={{ 
                backgroundColor: 'var(--color-background)', 
                border: '1px solid var(--color-border)', 
                color: 'var(--color-text-white)' 
              }}
            >
              Clear Signature
            </button>
          </div>

          {/* Progress Indicator */}
          <div className="text-center p-3 rounded-lg" style={{ backgroundColor: 'rgba(212, 167, 54, 0.1)' }}>
            <p className="text-sm" style={{ color: 'var(--color-text-gray)' }}>
              Collecting signatures: {visitorNumber} of {totalAdults} adults
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button
              type="button"
              onClick={onBack}
              className="w-full sm:flex-1 py-3 sm:py-4 rounded-lg text-sm sm:text-base"
              style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)', color: 'var(--color-text-white)' }}
            >
              Back
            </button>
            <button
              type="submit"
              className="w-full sm:flex-1 py-3 sm:py-4 rounded-lg text-sm sm:text-base"
              style={{ backgroundColor: 'var(--color-gold)', color: 'var(--color-background)' }}
            >
              {visitorNumber < totalAdults ? 'Next Visitor' : 'Continue'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}