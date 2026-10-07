import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, CreditCard } from 'lucide-react';

export const ConsultationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    concern: '',
    location: 'Bangalore',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const concernsList = [
    'Skin Concern',
    'Acne / Acne Marks  ',
    'Pigmentation / Tanning',
    'Dull / Uneven-Looking Skin',
    'Facial / Glow Treatment',
    'Anti-Ageing / Skin Tightening',
    'Hair Fall / Scalp Concern',
    'Laser Hair Reduction',
    'Body Pigmentation',
    'Weight Management',
    'IV Wellness',
    'Mental / Emotional Wellness',
    'Not Sure – Need Guidance',

  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }
    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = 'Mobile Number is required';
    } else if (!/^\d{10}$/.test(formData.mobileNumber.trim())) {
      newErrors.mobileNumber = 'Enter a valid 10-digit mobile number';
    }
    if (!formData.concern) {
      newErrors.concern = 'Please select your concern';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitted(true);
  };

  return (
    <div id="consultation-form" className="bg-white p-5 lg:p-6 rounded-xl border border-[#EAD7C5] shadow-xl w-full max-w-[380px] md:max-w-none h-full flex flex-col justify-between relative text-[#271446]">
      <div>
        <h3 className="font-serif text-xl sm:text-[22px] lg:text-[24px] font-semibold text-[#271446] leading-tight mb-1 whitespace-nowrap">
          Book Your Consultation
        </h3>
        <p className="text-[11px] sm:text-xs text-[#52413E] mb-4 leading-snug">
          Get expert guidance for your skin, hair, body or wellness goals.
        </p>

        {isSubmitted ? (
          <div className="py-6 text-center space-y-3 bg-[#FBF8F3] rounded-xl p-4 border border-[#EAD7C5]">
            <CheckCircle2 className="w-10 h-10 text-[#271446] mx-auto" />
            <h4 className="font-serif text-lg font-semibold text-[#271446]">Thank You, {formData.fullName}!</h4>
            <p className="text-[11px] text-[#52413E]">
              Your consultation request for <span className="font-semibold text-[#271446]">{formData.concern}</span> in Bangalore has been received. Our expert care team will contact you shortly at {formData.mobileNumber}.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({ fullName: '', mobileNumber: '', concern: '', location: 'Bangalore' });
              }}
              className="mt-1 text-[11px] font-semibold text-[#271446] underline hover:text-[#341b5c]"
            >
              Book Another Consultation
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <input
                id="hero-full-name-input"
                type="text"
                name="fullName"
                placeholder="Full Name*"
                value={formData.fullName}
                onChange={handleChange}
                className={`w-full px-3.5 py-2.5 text-[12px] sm:text-[13px] rounded-lg border ${errors.fullName ? 'border-red-400 bg-red-50 text-[#271446]' : 'border-[#EAD7C5] bg-[#FBF8F3] text-[#271446]'
                  } focus:outline-none focus:border-[#271446] placeholder-[#52413E]/70 transition-colors`}
              />
              {errors.fullName && <span className="text-[10px] text-red-500 mt-0.5 block">{errors.fullName}</span>}
            </div>

            <div>
              <input
                type="tel"
                name="mobileNumber"
                placeholder="Mobile Number*"
                value={formData.mobileNumber}
                onChange={handleChange}
                className={`w-full px-3.5 py-2.5 text-[12px] sm:text-[13px] rounded-lg border ${errors.mobileNumber ? 'border-red-400 bg-red-50 text-[#271446]' : 'border-[#EAD7C5] bg-[#FBF8F3] text-[#271446]'
                  } focus:outline-none focus:border-[#271446] placeholder-[#52413E]/70 transition-colors`}
              />
              {errors.mobileNumber && <span className="text-[10px] text-red-500 mt-0.5 block">{errors.mobileNumber}</span>}
            </div>

            <div>
              <select
                name="concern"
                value={formData.concern}
                onChange={handleChange}
                className={`w-full px-3.5 py-2.5 text-[12px] sm:text-[13px] rounded-lg border ${errors.concern ? 'border-red-400 bg-red-50 text-[#271446]' : 'border-[#EAD7C5] bg-[#FBF8F3] text-[#271446]'
                  } focus:outline-none focus:border-[#271446] transition-colors ${!formData.concern ? 'text-[#52413E]/70' : 'text-[#271446]'
                  }`}
              >
                <option value="" className="bg-white text-[#271446]">Select Your Concern</option>
                {concernsList.map((item) => (
                  <option key={item} value={item} className="bg-white text-[#271446]">
                    {item}
                  </option>
                ))}
              </select>
              {errors.concern && <span className="text-[10px] text-red-500 mt-0.5 block">{errors.concern}</span>}
            </div>

            <div>
              <select
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 text-[12px] sm:text-[13px] rounded-lg border border-[#EAD7C5] bg-[#FBF8F3] focus:outline-none text-[#271446] font-medium"
              >
                <option value="Bangalore" className="bg-white text-[#271446]">Bangalore</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full mt-2 bg-[#271446] hover:bg-[#341b5c] text-[#F8DB66] font-semibold text-[13px] py-2.5 sm:py-3 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-sm cursor-pointer"
            >
              <span>Book Now</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#F8DB66]" />
            </button>

            <div className="pt-3 mt-2 border-t border-[#EAD7C5] space-y-2 text-[11px] text-[#52413E]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#271446] shrink-0" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#271446] shrink-0" />
                <span>Personalised Treatment Plan</span>
              </div>
              <div className="flex items-center gap-2">
                <CreditCard className="w-3.5 h-3.5 text-[#271446] shrink-0" />
                <span>No-Cost EMI Available*</span>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
