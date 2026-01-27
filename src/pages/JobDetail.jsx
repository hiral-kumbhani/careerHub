import { useParams } from 'react-router-dom';
import { jobsData } from '../data/jobsData';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import AdPlaceholder from '../components/AdPlaceholder';
import { useLayoutEffect } from 'react';

function JobDetail() {
    const { id } = useParams();
    const job = jobsData.find((j) => j.id === parseInt(id));

    // Scroll to top when component mounts
    useLayoutEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, []);

    if (!job) {
        return (
            <div className="min-h-screen bg-gray-50">
                <Header />
                <main className="container mx-auto px-4 py-8 text-center">
                    <h1 className="text-2xl font-bold text-red-600">Job Not Found</h1>
                    <p className="text-gray-600">The job you are looking for does not exist.</p>
                </main>
                <Footer />
            </div>
        );
    }

    // Generate random dates for display if not present
    const randomDate = (offset = 0) => {
        const date = new Date();
        date.setDate(date.getDate() + offset);
        return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
    };

    // Generate safe search URL to avoid redirecting to competitor sites
    const getSearchUrl = (query) => {
        return `https://www.google.com/search?q=${encodeURIComponent(query + " official website apply online notification")}`;
    };

    const applyLink = job ? getSearchUrl(job.title) : '#';

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />

            <main className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <article className="bg-white rounded-lg shadow-md p-6 md:p-8 border border-gray-200">
                            {/* Breadcrumb */}
                            <div className="text-sm text-gray-500 mb-4">
                                <span className="hover:text-blue-600 cursor-pointer">Home</span> &gt;{' '}
                                <span className="hover:text-blue-600 cursor-pointer">{job.category}</span> &gt;{' '}
                                <span className="text-gray-700 font-semibold">{job.title}</span>
                            </div>

                            {/* Title & Metadata */}
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                                {job.title}
                            </h1>
                            <div className="flex items-center text-sm text-gray-500 mb-6 pb-6 border-b border-gray-100">
                                <span className="mr-4">
                                    <span className="font-semibold text-gray-700">Date:</span> {job.date}
                                </span>
                                <span>
                                    <span className="font-semibold text-gray-700">By:</span> {job.author}
                                </span>
                            </div>

                            {/* Top Ad */}
                            <div className="mb-8">
                                <AdPlaceholder size="banner" title="Advertisement" />
                            </div>

                            {/* Intro Content */}
                            <div className="prose max-w-none text-gray-800 leading-relaxed mb-8">
                                <p className="text-lg mb-4">
                                    <strong>{job.title}</strong>: Excellent opportunity for job seekers looking for <strong>{job.category}</strong>. The board has released the official notification for the recruitment of various posts. Interested and eligible candidates can apply online after reading the full notification details.
                                </p>

                                <p className="mb-4">
                                    This page contains all the essential details regarding <strong>{job.title}</strong> including Age Limit, Educational Qualification, Selection Process, Application Fee, and How to Apply. We recommend all aspirants to check the official notification PDF carefully before submitting the online application.
                                </p>
                            </div>

                            {/* Featured Image */}
                            <div className="mb-8 rounded-xl overflow-hidden shadow-lg border border-gray-100">
                                <img
                                    src={job.image}
                                    alt={job.title}
                                    className="w-full h-auto object-cover"
                                    onError={(e) => {
                                        e.target.src = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=500&fit=crop';
                                    }}
                                />
                            </div>

                            {/* Middle Ad */}
                            <div className="mb-8">
                                <AdPlaceholder size="rectangle" title="Advertisement" />
                            </div>

                            {/* Job Summary Table */}
                            <div className="overflow-x-auto mb-8">
                                <table className="w-full border-collapse border border-gray-300">
                                    <tbody>
                                        <tr className="bg-blue-600 text-white">
                                            <th colSpan="2" className="p-3 text-left md:text-center text-xl font-bold">
                                                Recruitment Overview
                                            </th>
                                        </tr>
                                        <tr className="border-b border-gray-200 hover:bg-gray-50">
                                            <td className="p-3 border-r border-gray-200 font-semibold text-gray-700 w-1/3">Post Name</td>
                                            <td className="p-3 text-gray-800 font-bold">{job.title.split(':')[0]}</td>
                                        </tr>
                                        <tr className="border-b border-gray-200 hover:bg-gray-50">
                                            <td className="p-3 border-r border-gray-200 font-semibold text-gray-700">Category</td>
                                            <td className="p-3 text-gray-800">{job.category}</td>
                                        </tr>
                                        <tr className="border-b border-gray-200 hover:bg-gray-50">
                                            <td className="p-3 border-r border-gray-200 font-semibold text-gray-700">Application Mode</td>
                                            <td className="p-3 text-gray-800">Online</td>
                                        </tr>
                                        <tr className="border-b border-gray-200 hover:bg-gray-50">
                                            <td className="p-3 border-r border-gray-200 font-semibold text-gray-700">Official Website</td>
                                            <td className="p-3 text-blue-600 hover:underline break-all">
                                                <a href={`/apply/${job.id}`} className="cursor-pointer">Click Here to Visit</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            {/* Additional Content Mockup */}
                            <div className="space-y-6 mb-8">
                                <div>
                                    <h2 className="text-2xl font-bold text-red-600 mb-3 border-l-4 border-red-600 pl-3">
                                        Application Fee
                                    </h2>
                                    <ul className="list-disc list-inside text-gray-700 space-y-1 bg-gray-50 p-4 rounded-lg">
                                        <li>General / OBC / EWS: <strong>Check Notification</strong></li>
                                        <li>SC / ST / PH: <strong>Exempted (As per rules)</strong></li>
                                        <li>Payment Mode: Debit Card, Credit Card, Net Banking, UPI</li>
                                    </ul>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold text-green-700 mb-3 border-l-4 border-green-700 pl-3">
                                        Important Dates (2026)
                                    </h2>
                                    <ul className="list-disc list-inside text-gray-700 space-y-1 bg-gray-50 p-4 rounded-lg">
                                        <li>Application Begin: <strong>{job.date}</strong></li>
                                        <li>Last Date for Apply Online: <strong>{randomDate(30)}</strong></li>
                                        <li>Admit Card Release Date: <strong>Notify Soon</strong></li>
                                        <li>Examination Date: <strong>Notify Soon</strong></li>
                                    </ul>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold text-blue-800 mb-3 border-l-4 border-blue-800 pl-3">
                                        Age Limit Criteria
                                    </h2>
                                    <div className="bg-gray-50 p-4 rounded-lg text-gray-700">
                                        <p>Minimum Age: <strong>18 Years</strong></p>
                                        <p>Maximum Age: <strong>Check Notification</strong></p>
                                        <p className="text-sm italic mt-2 text-gray-500">Age relaxation is applicable as per government rules.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Before Links Ad */}
                            <div className="mb-8">
                                <AdPlaceholder size="banner" title="Advertisement" />
                            </div>

                            {/* Bottom Apply Button - Links to separate ApplyData page */}
                            <div className="text-center mb-8">
                                <a
                                    href={`/apply/${job.id}`}
                                    className="inline-block w-full md:w-auto bg-green-600 hover:bg-green-700 text-white text-xl font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 animate-pulse"
                                >
                                    Apply Online Now
                                </a>
                            </div>

                            {/* Bottom Ad */}
                            <div className="mt-8">
                                <AdPlaceholder size="banner" title="Advertisement" />
                            </div>

                        </article>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <Sidebar />
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default JobDetail;
