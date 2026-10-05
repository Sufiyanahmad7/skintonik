import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Calendar, CreditCard } from 'lucide-react';

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
    'Skin Pigmentation & Acne',
    'Anti-Ageing & Wrinkles',
    'Hair Fall & Scalp Issues',
    'Laser Hair Reduction',
    'Body Contouring & Slimming',
    'IV Drips & Wellness',
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
    <div id="consultation-form" className="bg-[#FFFFFF] p-6 lg:p-7 rounded-2xl border border-[#EAD7C5] shadow-lg max-w-sm w-full relative">
      <h3 className="font-serif text-2xl lg:text-3xl font-semibold text-[#2C1B18] leading-tight mb-1">
        Book Your<br />Consultation
      </h3>
      <p className="text-xs text-[#66534E] mb-5">
        Get expert guidance for your skin, hair, body or wellness goals.
      </p>

      {isSubmitted ? (
        <div className="py-8 text-center space-y-3 bg-[#FBF8F3] rounded-xl p-4 border border-[#EAD7C5]">
          <CheckCircle2 className="w-12 h-12 text-[#4A151B] mx-auto" />
          <h4 className="font-serif text-xl font-semibold text-[#2C1B18]">Thank You, {formData.fullName}!</h4>
          <p className="text-xs text-[#66534E]">
            Your consultation request for <span className="font-semibold text-[#4A151B]">{formData.concern}</span> in Bangalore has been received. Our expert care team will contact you shortly at {formData.mobileNumber}.
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({ fullName: '', mobileNumber: '', concern: '', location: 'Bangalore' });
            }}
            className="mt-2 text-xs font-semibold text-[#4A151B] underline hover:text-[#3A0D12]"
          >
            Book Another Consultation
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3.5">
          <div>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name*"
              value={formData.fullName}
              onChange={handleChange}
              className={`w-full px-3.5 py-2.5 text-xs rounded-lg border ${
                errors.fullName ? 'border-red-500 bg-red-50/30' : 'border-[#D9BEA7] bg-white'
              } focus:outline-none focus:border-[#4A151B] text-[#2C1B18] placeholder-[#8C7A75] transition-colors`}
            />
            {errors.fullName && <span className="text-[10px] text-red-500 mt-1 block">{errors.fullName}</span>}
          </div>

          <div>
            <input
              type="tel"
              name="mobileNumber"
              placeholder="Mobile Number*"
              value={formData.mobileNumber}
              onChange={handleChange}
              className={`w-full px-3.5 py-2.5 text-xs rounded-lg border ${
                errors.mobileNumber ? 'border-red-500 bg-red-50/30' : 'border-[#D9BEA7] bg-white'
              } focus:outline-none focus:border-[#4A151B] text-[#2C1B18] placeholder-[#8C7A75] transition-colors`}
            />
            {errors.mobileNumber && <span className="text-[10px] text-red-500 mt-1 block">{errors.mobileNumber}</span>}
          </div>

          <div>
            <select
              name="concern"
              value={formData.concern}
              onChange={handleChange}
              className={`w-full px-3.5 py-2.5 text-xs rounded-lg border ${
                errors.concern ? 'border-red-500 bg-red-50/30' : 'border-[#D9BEA7] bg-white'
              } focus:outline-none focus:border-[#4A151B] text-[#2C1B18] transition-colors ${
                !formData.concern ? 'text-[#8C7A75]' : 'text-[#2C1B18]'
              }`}
            >
              <option value="">Select Your Concern</option>
              {concernsList.map((item) => (
                <option key={item} value={item} className="text-[#2C1B18]">
                  {item}
                </option>
              ))}
            </select>
            {errors.concern && <span className="text-[10px] text-red-500 mt-1 block">{errors.concern}</span>}
          </div>

          <div>
            <select
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-[#D9BEA7] bg-[#FBF8F3] focus:outline-none text-[#2C1B18] font-medium"
            >
              <option value="Bangalore">Bangalore</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full mt-2 bg-[#4A151B] hover:bg-[#3A0D12] text-white font-medium text-xs py-3 rounded-lg flex items-center justify-center space-x-2 transition-colors shadow-sm"
          >
            <span>Book Now</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <div className="pt-2 border-t border-[#F3EDE2] space-y-1.5 text-[11px] text-[#66534E]">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#4A151B]" />
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#4A151B]" />
              <span>Personalised Treatment Plan</span>
            </div>
            <div className="flex items-center space-x-2">
              <CreditCard className="w-3.5 h-3.5 text-[#4A151B]" />
              <span>No-Cost EMI Available*</span>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};
