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
    <div id="consultation-form" className="bg-white p-5 lg:p-6 rounded-xl border border-[#DEC9B0] shadow-md max-w-[280px] w-full relative">
      <h3 className="font-serif text-xl lg:text-[22px] font-semibold text-[#2C1B18] leading-tight mb-0.5">
        Book Your<br />Consultation
      </h3>
      <p className="text-[11px] text-[#66534E] mb-4 leading-snug">
        Get expert guidance for your skin, hair, body or wellness goals.
      </p>

      {isSubmitted ? (
        <div className="py-6 text-center space-y-3 bg-[#FBF8F3] rounded-xl p-4 border border-[#EAD7C5]">
          <CheckCircle2 className="w-10 h-10 text-[#4A151B] mx-auto" />
          <h4 className="font-serif text-lg font-semibold text-[#2C1B18]">Thank You, {formData.fullName}!</h4>
          <p className="text-[11px] text-[#66534E]">
            Your consultation request for <span className="font-semibold text-[#4A151B]">{formData.concern}</span> in Bangalore has been received. Our expert care team will contact you shortly at {formData.mobileNumber}.
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({ fullName: '', mobileNumber: '', concern: '', location: 'Bangalore' });
            }}
            className="mt-1 text-[11px] font-semibold text-[#4A151B] underline hover:text-[#3A0D12]"
          >
            Book Another Consultation
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-2.5">
          <div>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name*"
              value={formData.fullName}
              onChange={handleChange}
              className={`w-full px-3 py-2 text-[12px] rounded-lg border ${errors.fullName ? 'border-red-400 bg-red-50/30' : 'border-[#D9BEA7] bg-white'
                } focus:outline-none focus:border-[#4A151B] text-[#2C1B18] placeholder-[#9C8A85] transition-colors`}
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
              className={`w-full px-3 py-2 text-[12px] rounded-lg border ${errors.mobileNumber ? 'border-red-400 bg-red-50/30' : 'border-[#D9BEA7] bg-white'
                } focus:outline-none focus:border-[#4A151B] text-[#2C1B18] placeholder-[#9C8A85] transition-colors`}
            />
            {errors.mobileNumber && <span className="text-[10px] text-red-500 mt-0.5 block">{errors.mobileNumber}</span>}
          </div>

          <div>
            <select
              name="concern"
              value={formData.concern}
              onChange={handleChange}
              className={`w-full px-3 py-2 text-[12px] rounded-lg border ${errors.concern ? 'border-red-400 bg-red-50/30' : 'border-[#D9BEA7] bg-white'
                } focus:outline-none focus:border-[#4A151B] transition-colors ${!formData.concern ? 'text-[#9C8A85]' : 'text-[#2C1B18]'
                }`}
            >
              <option value="">Select Your Concern</option>
              {concernsList.map((item) => (
                <option key={item} value={item} className="text-[#2C1B18]">
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
              className="w-full px-3 py-2 text-[12px] rounded-lg border border-[#D9BEA7] bg-[#FBF8F3] focus:outline-none text-[#2C1B18] font-medium"
            >
              <option value="Bangalore">Bangalore</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full mt-1.5 bg-[#4A151B] hover:bg-[#3A0D12] text-white font-semibold text-[12px] py-2.5 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-sm"
          >
            <span>Book Now</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <div className="pt-2 border-t border-[#F0E8DE] space-y-1.5 text-[10px] text-[#66534E]">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3 h-3 text-[#4A151B] shrink-0" />
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3 h-3 text-[#4A151B] shrink-0" />
              <span>Personalised Treatment Plan</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CreditCard className="w-3 h-3 text-[#4A151B] shrink-0" />
              <span>No-Cost EMI Available*</span>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};
