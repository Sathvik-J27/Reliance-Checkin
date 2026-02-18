import React, { useState } from 'react';

interface RevisitCheckInStep1Props {
  customerData: any;
  onNext: (updatedData: any) => void;
  onBack: () => void;
}

export function RevisitCheckInStep1({ customerData, onNext, onBack }: RevisitCheckInStep1Props) {
  const [formData, setFormData] = useState({
    firstName: customerData.firstName || '',
    lastName: customerData.lastName || '',
    street: customerData.street || '',
    suiteUnit: customerData.suiteUnit || '',
    city: customerData.city || '',
    state: customerData.state || '',
    zip: customerData.zip || '',
    country: customerData.country || 'USA',
    phones: customerData.phones || [''],
    emails: customerData.emails || [''],
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const capitalizeInput = (value: string) => {
    return value
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.street.trim()) newErrors.street = 'Street address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.state.trim()) newErrors.state = 'State is required';
    if (!formData.zip.trim()) newErrors.zip = 'ZIP code is required';

    // Validate phones
    const validPhones = formData.phones.filter(p => p.trim());
    if (validPhones.length === 0) {
      newErrors.phones = 'At least one phone number is required';
    } else {
      validPhones.forEach((phone, index) => {
        const cleaned = phone.replace(/\D/g, '');
        if (cleaned.length !== 10) {
          newErrors[`phone${index}`] = 'Phone must be 10 digits';
        }
      });
    }

    // Validate emails
    const validEmails = formData.emails.filter(e => e.trim());
    if (validEmails.length === 0) {
      newErrors.emails = 'At least one email is required';
    } else {
      validEmails.forEach((email, index) => {
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          newErrors[`email${index}`] = 'Invalid email format';
        }
      });
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onNext(formData);
    }
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

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="w-full max-w-2xl" style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)', borderRadius: '12px', padding: '24px' }}>
        <h1 className="text-center mb-2 text-2xl sm:text-3xl" style={{ color: 'var(--color-gold)' }}>
          Review Your Information
        </h1>
        <p className="text-center mb-6 sm:mb-8 text-base sm:text-lg" style={{ color: 'var(--color-text-gray)' }}>
          Please review and update your details if needed
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2" style={{ color: 'var(--color-text-gray)' }}>
                First Name *
              </label>
              <input
                type="text"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: capitalizeInput(e.target.value) })}
                className="w-full px-4 py-3 rounded-lg"
                style={{ 
                  backgroundColor: 'var(--color-background)', 
                  border: `1px solid ${errors.firstName ? '#EF4444' : 'var(--color-border)'}`, 
                  color: 'var(--color-text-white)' 
                }}
              />
              {errors.firstName && <p className="mt-1 text-sm" style={{ color: '#EF4444' }}>{errors.firstName}</p>}
            </div>

            <div>
              <label className="block mb-2" style={{ color: 'var(--color-text-gray)' }}>
                Last Name *
              </label>
              <input
                type="text"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: capitalizeInput(e.target.value) })}
                className="w-full px-4 py-3 rounded-lg"
                style={{ 
                  backgroundColor: 'var(--color-background)', 
                  border: `1px solid ${errors.lastName ? '#EF4444' : 'var(--color-border)'}`, 
                  color: 'var(--color-text-white)' 
                }}
              />
              {errors.lastName && <p className="mt-1 text-sm" style={{ color: '#EF4444' }}>{errors.lastName}</p>}
            </div>
          </div>

          <div>
            <label className="block mb-2" style={{ color: 'var(--color-text-gray)' }}>
              Street Address *
            </label>
            <input
              type="text"
              value={formData.street}
              onChange={(e) => setFormData({ ...formData, street: capitalizeInput(e.target.value) })}
              className="w-full px-4 py-3 rounded-lg"
              style={{ 
                backgroundColor: 'var(--color-background)', 
                border: `1px solid ${errors.street ? '#EF4444' : 'var(--color-border)'}`, 
                color: 'var(--color-text-white)' 
              }}
            />
            {errors.street && <p className="mt-1 text-sm" style={{ color: '#EF4444' }}>{errors.street}</p>}
          </div>

          <div>
            <label className="block mb-2" style={{ color: 'var(--color-text-gray)' }}>
              Suite/Unit
            </label>
            <input
              type="text"
              value={formData.suiteUnit}
              onChange={(e) => setFormData({ ...formData, suiteUnit: e.target.value })}
              className="w-full px-4 py-3 rounded-lg"
              style={{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)', color: 'var(--color-text-white)' }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block mb-2" style={{ color: 'var(--color-text-gray)' }}>
                City *
              </label>
              <input
                type="text"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: capitalizeInput(e.target.value) })}
                className="w-full px-4 py-3 rounded-lg"
                style={{ 
                  backgroundColor: 'var(--color-background)', 
                  border: `1px solid ${errors.city ? '#EF4444' : 'var(--color-border)'}`, 
                  color: 'var(--color-text-white)' 
                }}
              />
              {errors.city && <p className="mt-1 text-sm" style={{ color: '#EF4444' }}>{errors.city}</p>}
            </div>

            <div>
              <label className="block mb-2" style={{ color: 'var(--color-text-gray)' }}>
                State *
              </label>
              <input
                type="text"
                value={formData.state}
                onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                className="w-full px-4 py-3 rounded-lg"
                style={{ 
                  backgroundColor: 'var(--color-background)', 
                  border: `1px solid ${errors.state ? '#EF4444' : 'var(--color-border)'}`, 
                  color: 'var(--color-text-white)' 
                }}
              />
              {errors.state && <p className="mt-1 text-sm" style={{ color: '#EF4444' }}>{errors.state}</p>}
            </div>

            <div>
              <label className="block mb-2" style={{ color: 'var(--color-text-gray)' }}>
                ZIP Code *
              </label>
              <input
                type="text"
                value={formData.zip}
                onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                className="w-full px-4 py-3 rounded-lg"
                style={{ 
                  backgroundColor: 'var(--color-background)', 
                  border: `1px solid ${errors.zip ? '#EF4444' : 'var(--color-border)'}`, 
                  color: 'var(--color-text-white)' 
                }}
              />
              {errors.zip && <p className="mt-1 text-sm" style={{ color: '#EF4444' }}>{errors.zip}</p>}
            </div>
          </div>

          <div>
            <label className="block mb-2" style={{ color: 'var(--color-text-gray)' }}>
              Country *
            </label>
            <select
              value={formData.country}
              onChange={(e) => setFormData({ ...formData, country: e.target.value })}
              className="w-full px-4 py-3 rounded-lg"
              style={{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)', color: 'var(--color-text-white)' }}
            >
              <option value="USA">USA</option>
              <option value="CAN">CAN</option>
              <option value="MEX">MEX</option>
            </select>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label style={{ color: 'var(--color-text-gray)' }}>Phone Number(s) *</label>
              <button
                type="button"
                onClick={addPhone}
                className="text-sm px-3 py-1 rounded"
                style={{ backgroundColor: 'var(--color-gold)', color: 'var(--color-background)' }}
              >
                + Add Phone
              </button>
            </div>
            {formData.phones.map((phone, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => updatePhone(index, e.target.value)}
                  placeholder="(602) 555-1234"
                  className="flex-1 px-4 py-3 rounded-lg"
                  style={{ 
                    backgroundColor: 'var(--color-background)', 
                    border: `1px solid ${errors[`phone${index}`] ? '#EF4444' : 'var(--color-border)'}`, 
                    color: 'var(--color-text-white)' 
                  }}
                />
                {formData.phones.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removePhone(index)}
                    className="px-3 rounded"
                    style={{ backgroundColor: '#EF4444', color: 'white' }}
                  >
                    ×
                  </button>
                )}
              </div>
            ))}
            {errors.phones && <p className="mt-1 text-sm" style={{ color: '#EF4444' }}>{errors.phones}</p>}
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label style={{ color: 'var(--color-text-gray)' }}>Email Address(es) *</label>
              <button
                type="button"
                onClick={addEmail}
                className="text-sm px-3 py-1 rounded"
                style={{ backgroundColor: 'var(--color-gold)', color: 'var(--color-background)' }}
              >
                + Add Email
              </button>
            </div>
            {formData.emails.map((email, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => updateEmail(index, e.target.value)}
                  placeholder="email@example.com"
                  className="flex-1 px-4 py-3 rounded-lg"
                  style={{ 
                    backgroundColor: 'var(--color-background)', 
                    border: `1px solid ${errors[`email${index}`] ? '#EF4444' : 'var(--color-border)'}`, 
                    color: 'var(--color-text-white)' 
                  }}
                />
                {formData.emails.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeEmail(index)}
                    className="px-3 rounded"
                    style={{ backgroundColor: '#EF4444', color: 'white' }}
                  >
                    ×
                  </button>
                )}
              </div>
            ))}
            {errors.emails && <p className="mt-1 text-sm" style={{ color: '#EF4444' }}>{errors.emails}</p>}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
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
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
