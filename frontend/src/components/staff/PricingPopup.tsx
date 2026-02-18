import React, { useState, useEffect } from 'react';
import { X, Mail } from 'lucide-react';
import { CheckIn } from './CustomerPopup';

interface PricingPopupProps {
  customer: CheckIn;
  onClose: () => void;
  onComplete: (id: string) => void;
}

interface MaterialPricing {
  material: string;
  quantity: number;
  finish: string;
  length: number;
  height: number;
  price: number;
  priceType: 'per SFT' | 'per Slab';
}

export function PricingPopup({ customer, onClose, onComplete }: PricingPopupProps) {
  const [materials, setMaterials] = useState<MaterialPricing[]>([]);
  const [isSending, setIsSending] = useState(false);
  const isPriced = customer.priced || false;

  useEffect(() => {
    // Initialize materials from customer draft
    if (customer.draft?.materials) {
      const initialMaterials = customer.draft.materials.map(m => {
        // Parse stored length/height or use defaults
        const storedLength = parseFloat(m.size?.l) || 0;
        const storedHeight = parseFloat(m.size?.h) || 0;
        const storedPrice = parseFloat(m.price || '0') || 0;
        const storedPriceType = (m.priceType as 'per SFT' | 'per Slab') || 'per SFT';

        return {
          material: m.soldAs || m.name, // Use soldAs if available, otherwise use name
          quantity: m.quantity,
          finish: m.finish || 'Polished',
          length: storedLength,
          height: storedHeight,
          price: storedPrice,
          priceType: storedPriceType,
        };
      });
      setMaterials(initialMaterials);
    }
  }, [customer]);

  const updateMaterial = (index: number, field: keyof MaterialPricing, value: number | string) => {
    if (isPriced) return; // Don't allow edits if already priced
    
    const updated = [...materials];
    updated[index] = { ...updated[index], [field]: value };
    setMaterials(updated);
  };

  const handleSendQuote = async () => {
    // Validate that all prices are entered
    const allPriced = materials.every(m => m.price > 0);
    if (!allPriced && !isPriced) {
      alert('Please enter prices for all materials');
      return;
    }

    setIsSending(true);

    // Simulate sending email with PDF
    setTimeout(() => {
      console.log('Sending quote to fabricator:', customer.draft?.selectedFabricator);
      console.log('Quote details:', {
        customer: `${customer.firstName} ${customer.lastName}`,
        selectionSheetNumber: customer.draft?.selectionSheetNumber,
        materials: materials.map(m => ({
          quantity: m.quantity,
          material: m.material,
          finish: m.finish,
          length: m.length,
          height: m.height,
          price: m.price,
          priceType: m.priceType
        }))
      });

      alert(`Quote ${isPriced ? 'resent' : 'sent'} successfully to ${customer.draft?.selectedFabricator?.companyName || 'fabricator'}!`);
      setIsSending(false);
      
      if (!isPriced) {
        onComplete(customer.id);
      }
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
      <div className="w-full max-w-5xl max-h-[90vh] overflow-y-auto" style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)', borderRadius: '12px' }}>
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-6 border-b" style={{ backgroundColor: 'var(--color-card)', borderColor: 'var(--color-border)' }}>
          <div>
            <h2 className="text-2xl mb-1" style={{ color: 'var(--color-gold)' }}>
              Quote
            </h2>
            <p className="text-sm" style={{ color: 'var(--color-text-gray)' }}>
              {customer.firstName} {customer.lastName} • Sheet #{customer.draft?.selectionSheetNumber}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-opacity-80"
            style={{ backgroundColor: 'var(--color-background)', color: 'var(--color-text-gray)' }}
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Customer Info */}
          <div className="grid grid-cols-2 gap-4 p-4 rounded-lg" style={{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)' }}>
            <div>
              <p className="text-sm mb-1" style={{ color: 'var(--color-text-gray)' }}>Customer</p>
              <p style={{ color: 'var(--color-text-white)' }}>{customer.firstName} {customer.lastName}</p>
            </div>
            <div>
              <p className="text-sm mb-1" style={{ color: 'var(--color-text-gray)' }}>Fabricator</p>
              <p style={{ color: 'var(--color-text-white)' }}>{customer.draft?.selectedFabricator?.companyName || 'Not assigned'}</p>
            </div>
          </div>

          {/* Materials Table */}
          <div>
            <h3 className="text-lg mb-3" style={{ color: 'var(--color-text-white)' }}>Materials & Pricing</h3>
            <div className="overflow-x-auto">
              <table className="w-full" style={{ borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--color-border)', backgroundColor: 'var(--color-background)' }}>
                    <th className="text-center p-3 text-sm font-semibold" style={{ color: 'var(--color-gold)', width: '80px' }}>Quantity</th>
                    <th className="text-left p-3 text-sm font-semibold" style={{ color: 'var(--color-gold)' }}>Material Name</th>
                    <th className="text-center p-3 text-sm font-semibold" style={{ color: 'var(--color-gold)', width: '120px' }}>Finish</th>
                    <th className="text-center p-3 text-sm font-semibold" style={{ color: 'var(--color-gold)', width: '110px' }}>Length (in)</th>
                    <th className="text-center p-3 text-sm font-semibold" style={{ color: 'var(--color-gold)', width: '110px' }}>Height (in)</th>
                    <th className="text-right p-3 text-sm font-semibold" style={{ color: 'var(--color-gold)', width: '140px' }}>Price</th>
                    <th className="text-center p-3 text-sm font-semibold" style={{ color: 'var(--color-gold)', width: '120px' }}>Type</th>
                  </tr>
                </thead>
                <tbody>
                  {materials.map((material, index) => (
                    <tr key={index} style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td className="p-3 text-center">
                        <input
                          type="number"
                          value={material.quantity}
                          onChange={(e) => updateMaterial(index, 'quantity', parseFloat(e.target.value) || 0)}
                          disabled={isPriced}
                          className="w-full px-2 py-2 rounded text-center"
                          style={{ 
                            backgroundColor: isPriced ? 'rgba(100, 100, 100, 0.2)' : 'var(--color-background)', 
                            border: '1px solid var(--color-border)', 
                            color: 'var(--color-text-white)',
                            cursor: isPriced ? 'not-allowed' : 'text'
                          }}
                          min="0"
                        />
                      </td>
                      <td className="p-3" style={{ color: 'var(--color-text-white)' }}>{material.material}</td>
                      <td className="p-3 text-center" style={{ color: 'var(--color-text-white)' }}>{material.finish}</td>
                      <td className="p-3 text-center">
                        <input
                          type="number"
                          value={material.length}
                          onChange={(e) => updateMaterial(index, 'length', parseFloat(e.target.value) || 0)}
                          disabled={isPriced}
                          className="w-full px-2 py-2 rounded text-center"
                          style={{ 
                            backgroundColor: isPriced ? 'rgba(100, 100, 100, 0.2)' : 'var(--color-background)', 
                            border: '1px solid var(--color-border)', 
                            color: 'var(--color-text-white)',
                            cursor: isPriced ? 'not-allowed' : 'text'
                          }}
                          min="0"
                          step="0.1"
                        />
                      </td>
                      <td className="p-3 text-center">
                        <input
                          type="number"
                          value={material.height}
                          onChange={(e) => updateMaterial(index, 'height', parseFloat(e.target.value) || 0)}
                          disabled={isPriced}
                          className="w-full px-2 py-2 rounded text-center"
                          style={{ 
                            backgroundColor: isPriced ? 'rgba(100, 100, 100, 0.2)' : 'var(--color-background)', 
                            border: '1px solid var(--color-border)', 
                            color: 'var(--color-text-white)',
                            cursor: isPriced ? 'not-allowed' : 'text'
                          }}
                          min="0"
                          step="0.1"
                        />
                      </td>
                      <td className="p-3 text-right">
                        <div className="flex items-center justify-end">
                          <span style={{ color: 'var(--color-gold)', marginRight: '4px', fontSize: '16px', fontWeight: '600' }}>$</span>
                          <input
                            type="number"
                            value={material.price}
                            onChange={(e) => updateMaterial(index, 'price', parseFloat(e.target.value) || 0)}
                            disabled={isPriced}
                            className="w-full px-2 py-2 rounded text-right"
                            style={{ 
                              backgroundColor: isPriced ? 'rgba(100, 100, 100, 0.2)' : 'var(--color-background)', 
                              border: '1px solid var(--color-border)', 
                              color: 'var(--color-text-white)',
                              cursor: isPriced ? 'not-allowed' : 'text'
                            }}
                            placeholder="0.00"
                            min="0"
                            step="0.01"
                          />
                        </div>
                      </td>
                      <td className="p-3 text-center">
                        <select
                          value={material.priceType}
                          onChange={(e) => updateMaterial(index, 'priceType', e.target.value)}
                          disabled={isPriced}
                          className="w-full px-2 py-2 rounded"
                          style={{ 
                            backgroundColor: isPriced ? 'rgba(100, 100, 100, 0.2)' : 'var(--color-background)', 
                            border: '1px solid var(--color-border)', 
                            color: 'var(--color-text-white)',
                            cursor: isPriced ? 'not-allowed' : 'pointer'
                          }}
                        >
                          <option value="per SFT">per SFT</option>
                          <option value="per Slab">per Slab</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Status Badge for Already Priced */}
          {isPriced && (
            <div className="p-4 rounded-lg" style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)', border: '1px solid #22c55e' }}>
              <p className="text-center" style={{ color: '#22c55e' }}>
                ✓ This quote has been priced and sent. You can resend the email if needed.
              </p>
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            <button
              onClick={onClose}
              className="flex-1 py-3 rounded-lg"
              style={{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)', color: 'var(--color-text-white)' }}
            >
              {isPriced ? 'Close' : 'Cancel'}
            </button>
            <button
              onClick={handleSendQuote}
              disabled={isSending}
              className="flex-1 py-3 rounded-lg flex items-center justify-center gap-2"
              style={{ backgroundColor: 'var(--color-gold)', color: 'var(--color-background)', opacity: isSending ? 0.6 : 1 }}
            >
              <Mail size={20} />
              {isSending ? 'Sending...' : (isPriced ? 'Resend Quote' : 'Send Quote to Fabricator')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}