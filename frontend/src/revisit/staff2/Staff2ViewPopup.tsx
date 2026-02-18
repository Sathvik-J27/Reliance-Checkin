import React, { useState } from 'react';
import { X } from 'lucide-react';

interface Staff2ViewPopupProps {
  customer: any;
  onClose: () => void;
  onSave: (customerId: string, updatedData: any) => void;
}

export function Staff2ViewPopup({ customer, onClose, onSave }: Staff2ViewPopupProps) {
  const [formData, setFormData] = useState({
    firstName: customer.firstName || '',
    lastName: customer.lastName || '',
    street: customer.street || '',
    suiteUnit: customer.suiteUnit || '',
    city: customer.city || '',
    state: customer.state || '',
    zip: customer.zip || '',
    country: customer.country || 'USA',
    phones: customer.phones || [''],
    emails: customer.emails || [''],
  });

  const capitalizeInput = (value: string) => {
    return value
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  };

  const addPhone = () => {
    setFormData({ ...formData, phones: [...formData.phones, ''] });
  };

  const removePhone = (index: number) => {
    if (formData.phones.length > 1) {
      setFormData({ ...formData, phones: formData.phones.filter((_, i) => i !== index) });
    }
  };

  const updatePhone = (index: number, value: string) => {
    const newPhones = [...formData.phones];
    newPhones[index] = value;
    setFormData({ ...formData, phones: newPhones });
  };

  const addEmail = () => {
    setFormData({ ...formData, emails: [...formData.emails, ''] });
  };

  const removeEmail = (index: number) => {
    if (formData.emails.length > 1) {
      setFormData({ ...formData, emails: formData.emails.filter((_, i) => i !== index) });
    }
  };

  const updateEmail = (index: number, value: string) => {
    const newEmails = [...formData.emails];
    newEmails[index] = value;
    setFormData({ ...formData, emails: newEmails });
  };

  const handleSave = () => {
    // Basic validation
    if (!formData.firstName.trim() || !formData.lastName.trim()) {
      alert('First name and last name are required');
      return;
    }

    onSave(customer.id, formData);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center p-6 z-50" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
      <div 
        className="w-full max-w-4xl max-h-[90vh] overflow-y-auto" 
        style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)', borderRadius: '12px', padding: '32px' }}
      >
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-2xl" style={{ color: 'var(--color-gold)' }}>
              {customer.firstName} {customer.lastName}
            </h2>
            <p className="text-sm mt-1" style={{ color: 'var(--color-text-gray)' }}>
              {customer.isRevisit ? 'Revisiting Customer' : 'First Time Customer'}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-opacity-50"
            style={{ backgroundColor: 'var(--color-background)', color: 'var(--color-text-gray)' }}
          >
            <X size={24} />
          </button>
        </div>

        {/* Customer Information */}
        <div className="mb-8">
          <h3 className="text-xl mb-4" style={{ color: 'var(--color-text-white)' }}>
            Customer Information
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block mb-2 text-sm" style={{ color: 'var(--color-text-gray)' }}>
                First Name *
              </label>
              <input
                type="text"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: capitalizeInput(e.target.value) })}
                className="w-full px-4 py-2 rounded-lg"
                style={{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)', color: 'var(--color-text-white)' }}
              />
            </div>

            <div>
              <label className="block mb-2 text-sm" style={{ color: 'var(--color-text-gray)' }}>
                Last Name *
              </label>
              <input
                type="text"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: capitalizeInput(e.target.value) })}
                className="w-full px-4 py-2 rounded-lg"
                style={{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)', color: 'var(--color-text-white)' }}
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-sm" style={{ color: 'var(--color-text-gray)' }}>
              Street Address
            </label>
            <input
              type="text"
              value={formData.street}
              onChange={(e) => setFormData({ ...formData, street: capitalizeInput(e.target.value) })}
              className="w-full px-4 py-2 rounded-lg"
              style={{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)', color: 'var(--color-text-white)' }}
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-sm" style={{ color: 'var(--color-text-gray)' }}>
              Suite/Unit
            </label>
            <input
              type="text"
              value={formData.suiteUnit}
              onChange={(e) => setFormData({ ...formData, suiteUnit: e.target.value })}
              className="w-full px-4 py-2 rounded-lg"
              style={{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)', color: 'var(--color-text-white)' }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block mb-2 text-sm" style={{ color: 'var(--color-text-gray)' }}>
                City
              </label>
              <input
                type="text"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: capitalizeInput(e.target.value) })}
                className="w-full px-4 py-2 rounded-lg"
                style={{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)', color: 'var(--color-text-white)' }}
              />
            </div>

            <div>
              <label className="block mb-2 text-sm" style={{ color: 'var(--color-text-gray)' }}>
                State
              </label>
              <input
                type="text"
                value={formData.state}
                onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                className="w-full px-4 py-2 rounded-lg"
                style={{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)', color: 'var(--color-text-white)' }}
              />
            </div>

            <div>
              <label className="block mb-2 text-sm" style={{ color: 'var(--color-text-gray)' }}>
                ZIP
              </label>
              <input
                type="text"
                value={formData.zip}
                onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                className="w-full px-4 py-2 rounded-lg"
                style={{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)', color: 'var(--color-text-white)' }}
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-sm" style={{ color: 'var(--color-text-gray)' }}>
              Phones
            </label>
            {formData.phones.map((phone, index) => (
              <div key={index} className="flex items-center gap-2">
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => updatePhone(index, e.target.value)}
                  className="w-full px-4 py-2 rounded-lg"
                  style={{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)', color: 'var(--color-text-white)' }}
                />
                <button
                  onClick={() => removePhone(index)}
                  className="p-2 rounded-lg hover:bg-opacity-50"
                  style={{ backgroundColor: 'var(--color-background)', color: 'var(--color-text-gray)' }}
                >
                  <X size={16} />
                </button>
              </div>
            ))}
            <button
              onClick={addPhone}
              className="py-2 px-4 rounded-lg"
              style={{ backgroundColor: 'var(--color-gold)', color: 'var(--color-background)' }}
            >
              Add Phone
            </button>
          </div>

          <div>
            <label className="block mb-2 text-sm" style={{ color: 'var(--color-text-gray)' }}>
              Emails
            </label>
            {formData.emails.map((email, index) => (
              <div key={index} className="flex items-center gap-2">
                <input
                  type="text"
                  value={email}
                  onChange={(e) => updateEmail(index, e.target.value)}
                  className="w-full px-4 py-2 rounded-lg"
                  style={{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)', color: 'var(--color-text-white)' }}
                />
                <button
                  onClick={() => removeEmail(index)}
                  className="p-2 rounded-lg hover:bg-opacity-50"
                  style={{ backgroundColor: 'var(--color-background)', color: 'var(--color-text-gray)' }}
                >
                  <X size={16} />
                </button>
              </div>
            ))}
            <button
              onClick={addEmail}
              className="py-2 px-4 rounded-lg"
              style={{ backgroundColor: 'var(--color-gold)', color: 'var(--color-background)' }}
            >
              Add Email
            </button>
          </div>
        </div>

        {/* Referral Information */}
        {customer.referralSources && customer.referralSources.length > 0 && (
          <div className="mb-8">
            <h3 className="text-xl mb-4" style={{ color: 'var(--color-text-white)' }}>
              Referral Information
            </h3>
            <div 
              className="p-4 rounded-lg"
              style={{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)' }}
            >
              {customer.referralSources.map((ref: any, index: number) => (
                <div key={index} className="mb-3 last:mb-0">
                  <p style={{ color: 'var(--color-gold)' }}>
                    • {ref.type}
                  </p>
                  {ref.name && (
                    <p className="ml-4 text-sm" style={{ color: 'var(--color-text-gray)' }}>
                      Name: {ref.name}
                    </p>
                  )}
                  {ref.phone && (
                    <p className="ml-4 text-sm" style={{ color: 'var(--color-text-gray)' }}>
                      Phone: {ref.phone}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Party Information */}
        {customer.partySize && (
          <div className="mb-8">
            <h3 className="text-xl mb-4" style={{ color: 'var(--color-text-white)' }}>
              Party Information
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div 
                className="p-4 rounded-lg"
                style={{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)' }}
              >
                <p className="text-sm mb-1" style={{ color: 'var(--color-text-gray)' }}>
                  Adults
                </p>
                <p className="text-2xl" style={{ color: 'var(--color-gold)' }}>
                  {customer.partySize.adults}
                </p>
              </div>
              <div 
                className="p-4 rounded-lg"
                style={{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)' }}
              >
                <p className="text-sm mb-1" style={{ color: 'var(--color-text-gray)' }}>
                  Minors
                </p>
                <p className="text-2xl" style={{ color: 'var(--color-gold)' }}>
                  {customer.partySize.minors}
                </p>
              </div>
            </div>

            {/* Visitors List with Signatures */}
            {customer.visitors && customer.visitors.length > 0 && (
              <div>
                <h4 className="text-lg mb-3" style={{ color: 'var(--color-text-white)' }}>
                  Visitors & Signatures
                </h4>
                <div className="space-y-4">
                  {customer.visitors.map((visitor: any, index: number) => (
                    <div 
                      key={index}
                      className="p-4 rounded-lg"
                      style={{ 
                        backgroundColor: 'var(--color-background)', 
                        border: visitor.isMain ? '2px solid var(--color-gold)' : '1px solid var(--color-border)' 
                      }}
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <span className="font-medium" style={{ color: 'var(--color-text-white)' }}>
                          {visitor.name}
                        </span>
                        {visitor.isMain && (
                          <span 
                            className="px-2 py-0.5 rounded text-xs"
                            style={{ backgroundColor: 'rgba(212, 167, 54, 0.2)', color: 'var(--color-gold)' }}
                          >
                            Main
                          </span>
                        )}
                        {visitor.isMinor && (
                          <span 
                            className="px-2 py-0.5 rounded text-xs"
                            style={{ backgroundColor: 'rgba(100, 100, 100, 0.2)', color: 'var(--color-text-gray)' }}
                          >
                            Minor (No signature required)
                          </span>
                        )}
                      </div>
                      {visitor.signature && !visitor.isMinor && (
                        <div>
                          <p className="text-xs mb-2" style={{ color: 'var(--color-text-gray)' }}>
                            Signature:
                          </p>
                          <div 
                            className="rounded-lg overflow-hidden"
                            style={{ 
                              backgroundColor: 'white', 
                              border: '1px solid var(--color-border)',
                              maxWidth: '400px'
                            }}
                          >
                            <img 
                              src={visitor.signature} 
                              alt={`${visitor.name} signature`}
                              style={{ 
                                width: '100%', 
                                height: 'auto',
                                maxHeight: '150px',
                                objectFit: 'contain'
                              }}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Save Button */}
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-3 rounded-lg"
            style={{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)', color: 'var(--color-text-white)' }}
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="flex-1 py-3 rounded-lg"
            style={{ backgroundColor: 'var(--color-gold)', color: 'var(--color-background)' }}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}