import React, { useState } from 'react';
import { FORMSPREE_ENDPOINT } from '../constants/company';

const inputClass =
    'w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all';

export const CareerGeneralApplication: React.FC = () => {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('submitting');

        const form = e.currentTarget;
        const data = new FormData(form);
        data.append('_subject', 'General Job Application');
        data.append('applicationType', 'Career Application');
        data.append('role', 'General Application');

        try {
            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: 'POST',
                body: data,
                headers: { Accept: 'application/json' },
            });

            if (response.ok) {
                setStatus('success');
                form.reset();
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    return (
        <section className="w-full px-4 sm:px-6 md:px-10 lg:px-16 pb-16 md:pb-24">
            <div className="mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-slate-50 px-6 py-10 md:px-12 md:py-14 shadow-sm">
                <div className="text-center mb-10 md:mb-12">
                    <p className="text-slate-600 text-sm md:text-base mb-3">
                        Couldn&apos;t find the perfect role? We&apos;re always interested in exceptional talent. Tell us about yourself and how you could contribute to Mensch Robotics.
                    </p>
                    <h2 className="text-slate-900 text-3xl md:text-4xl font-bold tracking-tight">
                        Open Application
                    </h2>
                </div>

                <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                                First Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                className={inputClass}
                                type="text"
                                name="firstName"
                                placeholder="Enter your first name"
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                                Last Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                className={inputClass}
                                type="text"
                                name="lastName"
                                placeholder="Enter your last name"
                                required
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                                Email <span className="text-red-500">*</span>
                            </label>
                            <input
                                className={inputClass}
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                                Phone <span className="text-red-500">*</span>
                            </label>
                            <input
                                className={inputClass}
                                type="tel"
                                name="phone"
                                placeholder="Enter your phone number"
                                required
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                            LinkedIn URL <span className="text-red-500">*</span>
                        </label>
                        <input
                            className={inputClass}
                            type="url"
                            name="linkedin"
                            placeholder="Enter your LinkedIn profile URL"
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                            Upload your CV <span className="text-red-500">*</span>
                        </label>
                        <input
                            className={inputClass}
                            type="url"
                            name="resumeLink"
                            placeholder="Upload your CV on Drive and paste the shareable link here"
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                            Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            className={`${inputClass} resize-none`}
                            rows={4}
                            name="message"
                            placeholder="Type your message..."
                            required
                        />
                    </div>

                    <div className="flex flex-col items-center gap-4 pt-4">
                        <button
                            type="submit"
                            disabled={status === 'submitting'}
                            className="relative h-12 px-10 rounded-xl bg-primary text-white font-bold text-sm tracking-[0.1em] uppercase hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
                        >
                            {status === 'submitting' ? 'Submitting...' : 'Submit Now'}
                        </button>
                        {status === 'success' && (
                            <p className="text-green-600 text-sm font-semibold text-center">
                                Application sent successfully! We&apos;ll be in touch soon.
                            </p>
                        )}
                        {status === 'error' && (
                            <p className="text-red-600 text-sm font-semibold text-center">
                                Failed to send application. Please try again.
                            </p>
                        )}
                    </div>
                </form>
            </div>
        </section>
    );
};
