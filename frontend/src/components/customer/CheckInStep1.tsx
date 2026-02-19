import React, { useState, useRef } from 'react';
import { Plus, X } from 'lucide-react';

interface CheckInStep1Props {
  onNext: (data: Step1Data) => void;
  initialData?: Partial<Step1Data>;
}

export interface Step1Data {
  firstName: string;
  lastName: string;
  street: string;
  suiteUnit: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  phones: string[];
  emails: string[];
}

export function CheckInStep1({ onNext, initialData }: CheckInStep1Props) {
  const [formData, setFormData] = useState<Step1Data>({
    firstName: initialData?.firstName || '',
    lastName: initialData?.lastName || '',
    street: initialData?.street || '',
    suiteUnit: initialData?.suiteUnit || '',
    city: initialData?.city || '',
    state: initialData?.state || '',
    zip: initialData?.zip || '',
    country: initialData?.country || 'USA',
    phones: initialData?.phones || [''],
    emails: initialData?.emails || [''],
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const streetInputRef = useRef<HTMLInputElement>(null);
  const phoneInputRefs = useRef<HTMLInputElement[]>([]);
  const emailInputRefs = useRef<HTMLInputElement[]>([]);

  // State to ZIP mapping (used when user manually picks a state)
  const stateZipMap: Record<string, string> = {
    'AL': '35004', 'AK': '99501', 'AZ': '85001', 'AR': '72201', 'CA': '90001',
    'CO': '80201', 'CT': '06101', 'DE': '19901', 'FL': '32301', 'GA': '30301',
    'HI': '96801', 'ID': '83701', 'IL': '60601', 'IN': '46201', 'IA': '50301',
    'KS': '66101', 'KY': '40201', 'LA': '70112', 'ME': '04101', 'MD': '21201',
    'MA': '02101', 'MI': '48201', 'MN': '55401', 'MS': '39201', 'MO': '63101',
    'MT': '59101', 'NE': '68101', 'NV': '89101', 'NH': '03101', 'NJ': '07101',
    'NM': '87101', 'NY': '10001', 'NC': '27601', 'ND': '58101', 'OH': '43201',
    'OK': '73101', 'OR': '97201', 'PA': '15201', 'RI': '02901', 'SC': '29201',
    'SD': '57101', 'TN': '37201', 'TX': '73301', 'UT': '84101', 'VT': '05601',
    'VA': '22201', 'WA': '98101', 'WV': '25301', 'WI': '53201', 'WY': '82001'
  };

  const usStates = [
    { code: 'AL', name: 'Alabama' }, { code: 'AK', name: 'Alaska' },
    { code: 'AZ', name: 'Arizona' }, { code: 'AR', name: 'Arkansas' },
    { code: 'CA', name: 'California' }, { code: 'CO', name: 'Colorado' },
    { code: 'CT', name: 'Connecticut' }, { code: 'DE', name: 'Delaware' },
    { code: 'FL', name: 'Florida' }, { code: 'GA', name: 'Georgia' },
    { code: 'HI', name: 'Hawaii' }, { code: 'ID', name: 'Idaho' },
    { code: 'IL', name: 'Illinois' }, { code: 'IN', name: 'Indiana' },
    { code: 'IA', name: 'Iowa' }, { code: 'KS', name: 'Kansas' },
    { code: 'KY', name: 'Kentucky' }, { code: 'LA', name: 'Louisiana' },
    { code: 'ME', name: 'Maine' }, { code: 'MD', name: 'Maryland' },
    { code: 'MA', name: 'Massachusetts' }, { code: 'MI', name: 'Michigan' },
    { code: 'MN', name: 'Minnesota' }, { code: 'MS', name: 'Mississippi' },
    { code: 'MO', name: 'Missouri' }, { code: 'MT', name: 'Montana' },
    { code: 'NE', name: 'Nebraska' }, { code: 'NV', name: 'Nevada' },
    { code: 'NH', name: 'New Hampshire' }, { code: 'NJ', name: 'New Jersey' },
    { code: 'NM', name: 'New Mexico' }, { code: 'NY', name: 'New York' },
    { code: 'NC', name: 'North Carolina' }, { code: 'ND', name: 'North Dakota' },
    { code: 'OH', name: 'Ohio' }, { code: 'OK', name: 'Oklahoma' },
    { code: 'OR', name: 'Oregon' }, { code: 'PA', name: 'Pennsylvania' },
    { code: 'RI', name: 'Rhode Island' }, { code: 'SC', name: 'South Carolina' },
    { code: 'SD', name: 'South Dakota' }, { code: 'TN', name: 'Tennessee' },
    { code: 'TX', name: 'Texas' }, { code: 'UT', name: 'Utah' },
    { code: 'VT', name: 'Vermont' }, { code: 'VA', name: 'Virginia' },
    { code: 'WA', name: 'Washington' }, { code: 'WV', name: 'West Virginia' },
    { code: 'WI', name: 'Wisconsin' }, { code: 'WY', name: 'Wyoming' }
  ];

  const handleStateChange = (stateCode: string) => {
    const zip = stateZipMap[stateCode] || '';
    setFormData(prev => ({ ...prev, state: stateCode, zip }));
  };

  const capitalizeInput = (value: string) =>
    value.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');

  const handleInputFocus = (element: HTMLElement) => {
    setTimeout(() => {
      element.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
    }, 300);
  };

  const validatePhone = (phone: string) => phone.replace(/\D/g, '').length === 10;

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim())  newErrors.lastName  = 'Last name is required';
    if (!formData.street.trim())    newErrors.street    = 'Street address is required';
    if (!formData.city.trim())      newErrors.city      = 'City is required';
    if (!formData.state.trim())     newErrors.state     = 'State is required';
    if (!formData.zip.trim())       newErrors.zip       = 'ZIP code is required';

    const validPhones = formData.phones.filter(p => p.trim());
    if (validPhones.length === 0) newErrors.phone = 'At least one phone number is required';
    else if (!validPhones.every(validatePhone)) newErrors.phone = 'Phone numbers must be 10 digits';

    const validEmails = formData.emails.filter(e => e.trim());
    if (validEmails.length === 0) newErrors.email = 'At least one email is required';
    else if (!validEmails.every(validateEmail)) newErrors.email = 'Email addresses must be valid';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onNext({
        ...formData,
        phones: formData.phones.filter(p => p.trim()),
        emails: formData.emails.filter(e => e.trim()),
      });
    }
  };

  const addPhone    = () => setFormData(prev => ({ ...prev, phones: [...prev.phones, ''] }));
  const removePhone = (i: number) => setFormData(prev => ({ ...prev, phones: prev.phones.filter((_, idx) => idx !== i) }));
  const updatePhone = (i: number, v: string) => setFormData(prev => { const p = [...prev.phones]; p[i] = v; return { ...prev, phones: p }; });

  const addEmail    = () => setFormData(prev => ({ ...prev, emails: [...prev.emails, ''] }));
  const removeEmail = (i: number) => setFormData(prev => ({ ...prev, emails: prev.emails.filter((_, idx) => idx !== i) }));
  const updateEmail = (i: number, v: string) => setFormData(prev => { const e = [...prev.emails]; e[i] = v; return { ...prev, emails: e }; });

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="w-full max-w-2xl" style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)', borderRadius: '12px', padding: '32px 20px' }}>
        <h1 className="text-center mb-1 text-2xl sm:text-3xl" style={{ color: 'var(--color-gold)' }}>Step 1: Your Details</h1>
        <p className="text-center mb-6 text-sm" style={{ color: 'var(--color-text-gray)' }}>Please provide your contact information</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* First Name */}
          <div>
            <label className="block mb-1.5 text-sm" style={{ color: 'var(--color-text-white)' }}>First Name *</label>
            <input
              type="text"
              value={formData.firstName}
              onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
              onBlur={(e) => setFormData(prev => ({ ...prev, firstName: capitalizeInput(e.target.value) }))}
              className="w-full px-3 py-2.5 rounded-lg text-sm"
              style={{ backgroundColor: 'var(--color-background)', border: `1px solid ${errors.firstName ? 'var(--color-error)' : 'var(--color-border)'}`, color: 'var(--color-text-white)' }}
              placeholder="First name"
            />
            {errors.firstName && <p className="text-xs mt-1" style={{ color: 'var(--color-error)' }}>{errors.firstName}</p>}
          </div>

          {/* Last Name */}
          <div>
            <label className="block mb-1.5 text-sm" style={{ color: 'var(--color-text-white)' }}>Last Name *</label>
            <input
              type="text"
              value={formData.lastName}
              onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
              onBlur={(e) => setFormData(prev => ({ ...prev, lastName: capitalizeInput(e.target.value) }))}
              className="w-full px-3 py-2.5 rounded-lg text-sm"
              style={{ backgroundColor: 'var(--color-background)', border: `1px solid ${errors.lastName ? 'var(--color-error)' : 'var(--color-border)'}`, color: 'var(--color-text-white)' }}
              placeholder="Last name"
            />
            {errors.lastName && <p className="text-xs mt-1" style={{ color: 'var(--color-error)' }}>{errors.lastName}</p>}
          </div>

          {/* Street Address */}
          <div>
            <label className="block mb-1.5 text-sm" style={{ color: 'var(--color-text-white)' }}>Street Address *</label>
            <input
              type="text"
              value={formData.street}
              onChange={(e) => setFormData(prev => ({ ...prev, street: e.target.value }))}
              onBlur={(e) => setFormData(prev => ({ ...prev, street: capitalizeInput(e.target.value) }))}
              className="w-full px-3 py-2.5 rounded-lg text-sm"
              style={{ backgroundColor: 'var(--color-background)', border: `1px solid ${errors.street ? 'var(--color-error)' : 'var(--color-border)'}`, color: 'var(--color-text-white)' }}
              placeholder="e.g. 123 Main St"
              ref={streetInputRef}
            />
            {errors.street && <p className="text-xs mt-1" style={{ color: 'var(--color-error)' }}>{errors.street}</p>}
          </div>

          {/* Suite/Unit */}
          <div>
            <label className="block mb-1.5 text-sm" style={{ color: 'var(--color-text-white)' }}>Suite/Unit</label>
            <input
              type="text"
              value={formData.suiteUnit}
              onChange={(e) => setFormData(prev => ({ ...prev, suiteUnit: e.target.value }))}
              className="w-full px-3 py-2.5 rounded-lg text-sm"
              style={{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)', color: 'var(--color-text-white)' }}
              placeholder="Suite/Unit"
            />
          </div>

          {/* City */}
          <div>
            <label className="block mb-1.5 text-sm" style={{ color: 'var(--color-text-white)' }}>City *</label>
            <input
              type="text"
              value={formData.city}
              onChange={(e) => setFormData(prev => ({ ...prev, city: e.target.value }))}
              onBlur={(e) => setFormData(prev => ({ ...prev, city: capitalizeInput(e.target.value) }))}
              className="w-full px-3 py-2.5 rounded-lg text-sm"
              style={{ backgroundColor: 'var(--color-background)', border: `1px solid ${errors.city ? 'var(--color-error)' : 'var(--color-border)'}`, color: 'var(--color-text-white)' }}
              placeholder="City"
            />
            {errors.city && <p className="text-xs mt-1" style={{ color: 'var(--color-error)' }}>{errors.city}</p>}
          </div>

          {/* State, ZIP, Country */}
          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="block mb-1.5 text-sm" style={{ color: 'var(--color-text-white)' }}>State *</label>
              <select
                value={formData.state}
                onChange={(e) => handleStateChange(e.target.value)}
                className="w-full px-3 py-2.5 rounded-lg text-sm"
                style={{ backgroundColor: 'var(--color-background)', border: `1px solid ${errors.state ? 'var(--color-error)' : 'var(--color-border)'}`, color: 'var(--color-text-white)' }}
              >
                <option value="">Select</option>
                {usStates.map(s => (
                  <option key={s.code} value={s.code}>{s.code}</option>
                ))}
              </select>
              {errors.state && <p className="text-xs mt-1" style={{ color: 'var(--color-error)' }}>{errors.state}</p>}
            </div>

            <div>
              <label className="block mb-1.5 text-sm" style={{ color: 'var(--color-text-white)' }}>ZIP *</label>
              <input
                type="text"
                value={formData.zip}
                onChange={(e) => setFormData(prev => ({ ...prev, zip: e.target.value }))}
                className="w-full px-3 py-2.5 rounded-lg text-sm"
                style={{ backgroundColor: 'var(--color-background)', border: `1px solid ${errors.zip ? 'var(--color-error)' : 'var(--color-border)'}`, color: 'var(--color-text-white)' }}
                placeholder="ZIP"
              />
              {errors.zip && <p className="text-xs mt-1" style={{ color: 'var(--color-error)' }}>{errors.zip}</p>}
            </div>

            <div>
              <label className="block mb-1.5 text-sm" style={{ color: 'var(--color-text-white)' }}>Country</label>
              <select
                value={formData.country}
                onChange={(e) => setFormData(prev => ({ ...prev, country: e.target.value }))}
                className="w-full px-3 py-2.5 rounded-lg text-sm"
                style={{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)', color: 'var(--color-text-white)' }}
              >
                <option value="USA">USA</option>
                <option value="CAN">CAN</option>
                <option value="MEX">MEX</option>
              </select>
            </div>
          </div>

          {/* Phone Numbers */}
          <div>
            <label className="block mb-1.5 text-sm" style={{ color: 'var(--color-text-white)' }}>Phone Number(s) *</label>
            {formData.phones.map((phone, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  ref={(el) => (phoneInputRefs.current[index] = el!)}
                  type="tel"
                  value={phone}
                  onChange={(e) => updatePhone(index, e.target.value)}
                  onFocus={(e) => handleInputFocus(e.target)}
                  className="flex-1 px-3 py-2.5 rounded-lg text-sm"
                  style={{ backgroundColor: 'var(--color-background)', border: `1px solid ${errors.phone && index === 0 ? 'var(--color-error)' : 'var(--color-border)'}`, color: 'var(--color-text-white)' }}
                  placeholder="Phone number"
                />
                {formData.phones.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removePhone(index)}
                    className="px-3 py-2.5 rounded-lg flex-shrink-0"
                    style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)', color: 'var(--color-text-gray)' }}
                  >
                    <X size={18} />
                  </button>
                )}
              </div>
            ))}
            {errors.phone && <p className="text-xs mb-2" style={{ color: 'var(--color-error)' }}>{errors.phone}</p>}
            <button
              type="button"
              onClick={addPhone}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm"
              style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)', color: 'var(--color-gold)' }}
            >
              <Plus size={18} />
              Add Another Phone
            </button>
          </div>

          {/* Email Addresses */}
          <div>
            <label className="block mb-1.5 text-sm" style={{ color: 'var(--color-text-white)' }}>Email Address(es) *</label>
            {formData.emails.map((email, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  ref={(el) => (emailInputRefs.current[index] = el!)}
                  type="email"
                  value={email}
                  onChange={(e) => updateEmail(index, e.target.value)}
                  onFocus={(e) => handleInputFocus(e.target)}
                  className="flex-1 px-3 py-2.5 rounded-lg text-sm"
                  style={{ backgroundColor: 'var(--color-background)', border: `1px solid ${errors.email && index === 0 ? 'var(--color-error)' : 'var(--color-border)'}`, color: 'var(--color-text-white)' }}
                  placeholder="Email address"
                />
                {formData.emails.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeEmail(index)}
                    className="px-3 py-2.5 rounded-lg flex-shrink-0"
                    style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)', color: 'var(--color-text-gray)' }}
                  >
                    <X size={18} />
                  </button>
                )}
              </div>
            ))}
            {errors.email && <p className="text-xs mb-2" style={{ color: 'var(--color-error)' }}>{errors.email}</p>}
            <button
              type="button"
              onClick={addEmail}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm"
              style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)', color: 'var(--color-gold)' }}
            >
              <Plus size={18} />
              Add Another Email
            </button>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-lg text-sm font-medium mt-6"
            style={{ backgroundColor: 'var(--color-gold)', color: 'var(--color-background)' }}
          >
            Continue to Step 2
          </button>
        </form>
      </div>
    </div>
  );
}
