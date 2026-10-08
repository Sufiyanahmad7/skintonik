import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, CreditCard, MapPin } from 'lucide-react';

export const ConsultationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    concern: '',
    location: 'Kasavanahalli, Bengaluru',
    bestTimeToCall: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    const trimmedName = formData.fullName.trim();
    if (!trimmedName) {
      newErrors.fullName = 'Full Name is required';
    } else if (!/^[A-Za-z\s]{2,50}$/.test(trimmedName)) {
      newErrors.fullName = 'Please enter a valid full name (letters only)';
    }

    const trimmedMobile = formData.mobileNumber.trim();
    if (!trimmedMobile) {
      newErrors.mobileNumber = 'Mobile Number is required';
    } else if (!/^[6-9]\d{9}$/.test(trimmedMobile)) {
      newErrors.mobileNumber = 'Enter a valid 10-digit mobile number starting with 6, 7, 8, or 9';
    }

    if (!formData.concern) {
      newErrors.concern = 'Please select your concern';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    const now = new Date();
    const formattedDateTime = now.toLocaleString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    });

    const crmPayload = {
      name: formData.fullName.trim(),
      phone: formData.mobileNumber.trim(),
      opportunity: 'Skintonik Landing Page Consultation Lead',
      // salesperson_id: 54,
      company_id: 119,
      email_from: '',
      contact_name: formData.fullName.trim(),
      city: formData.location.trim(),
      description: `Concern: ${formData.concern.trim()}\nPreferred Call Time: ${formData.bestTimeToCall.trim()}\nLocation: ${formData.location.trim()}\nSource: Skintonik Landing Page\nSubmission Time: ${formattedDateTime}`,
    };

    try {
      const response = await fetch('https://mysamplewebsite.in/api/crm_leads/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(crmPayload),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          fullName: '',
          mobileNumber: '',
          concern: '',
          location: 'Kasavanahalli, Bengaluru',
          bestTimeToCall: '',
        });
        window.location.href = '/thank-you';
      } else {
        console.error('CRM API submission error:', response.status, response.statusText);
        setSubmitError('Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error('Network failure or CRM fetch error:', err);
      setSubmitError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
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
            <h4 className="font-serif text-base sm:text-lg font-bold text-[#271446]">
              Thank you! Your consultation request has been submitted successfully.
            </h4>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setSubmitError(null);
              }}
              className="mt-1 text-[11px] font-semibold text-[#271446] underline hover:text-[#341b5c]"
            >
              Book Another Consultation
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-3"
          >
            {submitError && (
              <div className="p-2.5 bg-red-50 border border-red-200 rounded-lg text-red-600 text-[11px] font-semibold text-center">
                {submitError}
              </div>
            )}

            <div>
              <input
                id="hero-full-name-input"
                type="text"
                name="name"
                placeholder="Full Name*"
                value={formData.fullName}
                onChange={(e) => {
                  const val = e.target.value.replace(/[^A-Za-z\s]/g, '');
                  setFormData({ ...formData, fullName: val });
                  if (errors.fullName) setErrors({ ...errors, fullName: '' });
                }}
                required
                className={`w-full px-3.5 py-2.5 text-[12px] sm:text-[13px] rounded-lg border ${errors.fullName ? 'border-red-400 bg-red-50 text-[#271446]' : 'border-[#EAD7C5] bg-[#FBF8F3] text-[#271446]'
                  } focus:outline-none focus:border-[#271446] placeholder-[#52413E]/70 transition-colors`}
              />
              {errors.fullName && <span className="text-[10px] text-red-500 mt-0.5 block">{errors.fullName}</span>}
            </div>

            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Mobile Number*"
                maxLength={10}
                value={formData.mobileNumber}
                onChange={(e) => {
                  const val = e.target.value.replace(/\D/g, '').slice(0, 10);
                  setFormData({ ...formData, mobileNumber: val });
                  if (errors.mobileNumber) setErrors({ ...errors, mobileNumber: '' });
                }}
                required
                className={`w-full px-3.5 py-2.5 text-[12px] sm:text-[13px] rounded-lg border ${errors.mobileNumber ? 'border-red-400 bg-red-50 text-[#271446]' : 'border-[#EAD7C5] bg-[#FBF8F3] text-[#271446]'
                  } focus:outline-none focus:border-[#271446] placeholder-[#52413E]/70 transition-colors`}
              />
              {errors.mobileNumber && <span className="text-[10px] text-red-500 mt-0.5 block">{errors.mobileNumber}</span>}
            </div>

            <div>
              <select
                name="concern"
                value={formData.concern}
                onChange={(e) => {
                  setFormData({ ...formData, concern: e.target.value });
                  if (errors.concern) setErrors({ ...errors, concern: '' });
                }}
                required
                className={`w-full px-3.5 py-2.5 text-[12px] sm:text-[13px] rounded-lg border ${errors.concern ? 'border-red-400 bg-red-50 text-[#271446]' : 'border-[#EAD7C5] bg-[#FBF8F3] text-[#271446]'
                  } focus:outline-none focus:border-[#271446] transition-colors ${!formData.concern ? 'text-[#52413E]/70' : 'text-[#271446]'
                  }`}
              >
                <option value="" className="bg-white text-[#271446]">Select Your Concern*</option>
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
                name="best_time_to_call"
                value={formData.bestTimeToCall}
                onChange={(e) => setFormData({ ...formData, bestTimeToCall: e.target.value })}
                className={`w-full px-3.5 py-2.5 text-[12px] sm:text-[13px] rounded-lg border border-[#EAD7C5] bg-[#FBF8F3] focus:outline-none focus:border-[#271446] transition-colors ${!formData.bestTimeToCall ? 'text-[#52413E]/70' : 'text-[#271446]'}`}
              >
                <option value="" className="bg-white text-[#271446]">Best Time to Call</option>
                <option value="Morning" className="bg-white text-[#271446]">Morning</option>
                <option value="Afternoon" className="bg-white text-[#271446]">Afternoon</option>
                <option value="Evening" className="bg-white text-[#271446]">Evening</option>
              </select>
            </div>

            <div>
              <div className="w-full px-3.5 py-2.5 text-[11px] sm:text-[11.5px] rounded-lg border border-[#EAD7C5] bg-[#FBF8F3] text-[#271446] font-medium flex items-center gap-1.5 select-none shadow-xs">
                <MapPin className="w-3.5 h-3.5 text-[#C59B27] shrink-0" />
                <span className="truncate">Kasavanahalli, Bengaluru</span>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-2 bg-[#271446] hover:bg-[#341b5c] text-[#F8DB66] font-semibold text-[13px] py-2.5 sm:py-3 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-sm cursor-pointer disabled:opacity-70"
            >
              <span>{isSubmitting ? 'Submitting...' : 'Book Now'}</span>
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
