import React from 'react';

interface ElectronicSignatureConsentProps {
  isOpen: boolean;
  onConsent: () => void;
}

export function ElectronicSignatureConsent({
  isOpen,
  onConsent
}: ElectronicSignatureConsentProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        backdropFilter: 'blur(4px)'
      }}
    >
      <div
        className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-lg"
        style={{
          backgroundColor: 'var(--color-card)',
          border: '2px solid var(--color-gold)',
          padding: '32px'
        }}
      >
        <h2
          className="text-2xl sm:text-3xl font-bold text-center mb-6"
          style={{ color: 'var(--color-gold)' }}
        >
          Electronic Signature Consent
        </h2>

        <div
          className="space-y-5 mb-8"
          style={{ color: 'var(--color-text-white)', fontSize: '15px', lineHeight: '1.7' }}
        >
          <p>
            Before proceeding with the electronic waiver, please read and understand the following:
          </p>

          <div
            className="p-5 rounded-lg space-y-4"
            style={{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)' }}
          >
            <p className="font-semibold mb-3" style={{ color: 'var(--color-gold)' }}>
              By clicking "I Consent" below, you agree to:
            </p>
            <ul className="space-y-3 pl-12" style={{ listStyleType: 'disc' }}>
              <li className="pl-3">Sign this waiver electronically using your mouse, touchscreen, or trackpad</li>
              <li className="pl-3">Your electronic signature having the <strong>same legal validity as a handwritten signature</strong></li>
              <li className="pl-3">This agreement being governed by New Jersey law and the federal Electronic Signatures in Global and National Commerce Act (ESIGN Act)</li>
            </ul>
          </div>

          <div
            className="p-5 rounded-lg space-y-4"
            style={{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)' }}
          >
            <p className="font-semibold mb-3" style={{ color: 'var(--color-gold)' }}>
              You have the right to:
            </p>
            <ul className="space-y-3 pl-12" style={{ listStyleType: 'disc' }}>
              <li className="pl-3">Print or save this document for your records after signing</li>
              <li className="pl-3">Contact our office at <strong>(908) 245-0888</strong> or <strong>info@reliancesurfaces.com</strong> for assistance</li>
            </ul>
          </div>

          <div
            className="p-5 rounded-lg space-y-4"
            style={{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)' }}
          >
            <p className="font-semibold mb-3" style={{ color: 'var(--color-gold)' }}>
              Technical Requirements:
            </p>
            <ul className="space-y-3 pl-12" style={{ listStyleType: 'disc' }}>
              <li className="pl-3">Modern web browser (Chrome, Firefox, Safari, Edge, or similar)</li>
              <li className="pl-3">Ability to view and save PDF documents</li>
              <li className="pl-3">For technical assistance, contact us at <strong>(908) 245-0888</strong></li>
            </ul>
          </div>

          <div
            className="p-4 rounded-lg text-center font-medium"
            style={{
              backgroundColor: 'rgba(212, 167, 54, 0.1)',
              border: '1px solid var(--color-gold)',
              color: 'var(--color-text-white)'
            }}
          >
            By clicking "I Consent," you acknowledge that you have read and understand this disclosure,
            and you agree to conduct this transaction electronically.
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <button
            onClick={onConsent}
            className="w-full sm:w-auto px-20 py-4 rounded-lg text-base font-medium transition-colors hover:opacity-90"
            style={{
              backgroundColor: 'var(--color-gold)',
              color: 'var(--color-background)'
            }}
          >
            I Consent to Electronic Signature
          </button>
        </div>

        <p
          className="mt-4 text-center text-xs"
          style={{ color: 'var(--color-text-gray)' }}
        >
          This consent is required by federal ESIGN Act and New Jersey UETA to ensure
          you understand the legal implications of signing electronically.
        </p>
      </div>
    </div>
  );
}
