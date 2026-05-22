import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { getCareerBySlug } from '../data/careerPositions';

export const CareerRole: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const position = slug ? getCareerBySlug(slug) : undefined;

    if (!position) {
        return <Navigate to="/careers" replace />;
    }

    return (
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-16 py-12 md:py-20">
            <div className="mx-auto max-w-4xl">
                <Link
                    to="/careers"
                    className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:text-primary-hover transition-colors mb-10"
                >
                    <span className="material-symbols-outlined text-lg">arrow_back</span>
                    Back to Current Openings
                </Link>

                <header className="border-b border-slate-200 pb-10 mb-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">
                        {position.title}
                    </h1>
                    <div className="flex flex-wrap gap-4 text-sm md:text-base">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-800 font-medium">
                            <span className="material-symbols-outlined text-lg text-primary">domain</span>
                            Department: {position.department}
                        </span>
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-800 font-medium">
                            <span className="material-symbols-outlined text-lg text-primary">schedule</span>
                            Type: {position.type}
                        </span>
                    </div>
                </header>

                <div className="flex flex-col gap-10 text-slate-700 leading-relaxed">
                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-3">Role Overview</h2>
                        <p className="text-lg">{position.overview}</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-4">Key Responsibilities</h2>
                        <ul className="list-disc pl-6 space-y-3 text-lg">
                            {position.responsibilities.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-4">What We Are Looking For</h2>
                        <ul className="list-disc pl-6 space-y-3 text-lg">
                            {position.requirements.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </section>
                </div>

                <div className="mt-14 pt-10 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <p className="text-slate-600 text-center sm:text-left">
                        Interested in this role? We&apos;d love to hear from you.
                    </p>
                    <Link
                        to="/contact"
                        className="h-12 px-8 rounded-full bg-primary text-white font-bold hover:bg-primary-hover transition-all flex items-center justify-center shrink-0"
                    >
                        Apply Now
                    </Link>
                </div>
            </div>
        </div>
    );
};
