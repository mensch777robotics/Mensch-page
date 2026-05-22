import React, { useEffect, useState } from 'react';
import { FORMSPREE_ENDPOINT } from '../constants/company';

interface CareerApplicationModalProps {
    isOpen: boolean;
    onClose: () => void;
    roleTitle: string;
}

export const CareerApplicationModal: React.FC<CareerApplicationModalProps> = ({
    isOpen,
    onClose,
    roleTitle,
}) => {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            setStatus('idle');
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) onClose();
        };
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [isOpen, onClose]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('submitting');

        const form = e.currentTarget;
        const data = new FormData(form);
        data.append('_subject', `Job Application: ${roleTitle}`);
        data.append('applicationType', 'Career Application');
        data.append('role', roleTitle);

        try {
            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: 'POST',
                body: data,
                headers: { Accept: 'application/json' },
            });

            if (response.ok) {
                setStatus('success');
                form.reset();
                setTimeout(() => {
                    onClose();
                    setStatus('idle');
                }, 2500);
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="application-modal-title"
        >
            <button
                type="button"
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={onClose}
                aria-label="Close application form"
            />

            <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl border border-slate-200">
                <div className="sticky top-0 bg-white border-b border-slate-200 px-6 py-5 flex items-start justify-between gap-4 rounded-t-2xl">
                    <div>
                        <h2 id="application-modal-title" className="text-xl font-bold text-slate-900 pr-4">
                            Apply for {roleTitle}
                        </h2>
                        <p className="text-slate-600 text-sm mt-1">
                            Fill out the form below to submit your application. Upload your resume to Google Drive or
                            similar and paste a shareable link below. We&apos;ll review it and get back to you.
                        </p>
                    </div>
                    <button
                        type="button"
                        onClick={onClose}
                        className="shrink-0 p-1 rounded-full text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                        aria-label="Close"
                    >
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>

                <form className="px-6 py-6 flex flex-col gap-4" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-slate-800">
                            Full Name <span className="text-primary">*</span>
                        </label>
                        <input
                            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                            type="text"
                            name="fullName"
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-slate-800">
                            Email <span className="text-primary">*</span>
                        </label>
                        <input
                            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                            type="email"
                            name="email"
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-slate-800">Phone Number</label>
                        <input
                            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                            type="tel"
                            name="phone"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-slate-800">LinkedIn Profile URL</label>
                        <input
                            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                            type="url"
                            name="linkedin"
                            placeholder="https://linkedin.com/in/..."
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-slate-800">Cover Letter</label>
                        <textarea
                            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-none"
                            rows={4}
                            name="coverLetter"
                            placeholder="Tell us why you're a great fit for this role..."
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-slate-800">
                            Resume link <span className="text-primary">*</span>
                        </label>
                        <input
                            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                            type="url"
                            name="resumeLink"
                            placeholder="Paste your Google Drive, Dropbox, or other resume link"
                            required
                        />
                        <p className="text-slate-500 text-xs">
                            Upload your resume to your own Drive and share a viewable link with us.
                        </p>
                    </div>

                    <div className="flex flex-col-reverse sm:flex-row gap-3 pt-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 h-12 rounded-xl border border-slate-200 text-slate-700 font-semibold hover:bg-slate-50 transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={status === 'submitting'}
                            className="flex-1 h-12 rounded-xl bg-primary text-white font-bold hover:bg-primary-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {status === 'submitting' ? 'Submitting...' : 'Submit Application'}
                        </button>
                    </div>

                    {status === 'success' && (
                        <p className="text-green-600 text-center text-sm font-semibold">
                            Application sent successfully! We&apos;ll be in touch soon.
                        </p>
                    )}
                    {status === 'error' && (
                        <p className="text-red-600 text-center text-sm font-semibold">
                            Failed to send application. Please try again.
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
};
