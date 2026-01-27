import { useParams } from 'react-router-dom';
import { jobsData } from '../data/jobsData';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AdPlaceholder from '../components/AdPlaceholder';

function ApplyData() {
    const { id } = useParams();
    const job = jobsData.find((j) => j.id === parseInt(id));

    // Use official link from data or fallback to a safe general government portal
    // strictly avoiding the competitor site or google search as per user request
    const applyLink = job && job.official_link ? job.official_link : 'https://www.ncs.gov.in/';

    if (!job) {
        return <div className="p-8 text-center text-red-600 font-bold">Job Not Found</div>;
    }

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header />

            <main className="flex-grow container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
                    <div className="bg-blue-700 text-white p-6 text-center">
                        <h1 className="text-2xl md:text-3xl font-bold mb-2">Important Links</h1>
                        <p className="text-blue-100">{job.title}</p>
                    </div>

                    <div className="p-6 md:p-8">
                        <div className="mb-8 text-center">
                            <AdPlaceholder size="rectangle" title="Advertisement" />
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                                <tbody>
                                    <tr className="border-b border-gray-200">
                                        <td className="p-4 font-bold text-gray-800 text-lg md:w-1/2 flex items-center">
                                            <span className="bg-green-100 text-green-800 p-2 rounded-full mr-3">
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                            </span>
                                            Apply Online
                                        </td>
                                        <td className="p-4 text-center">
                                            <a
                                                href={applyLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:-translate-y-1"
                                            >
                                                Click Here
                                            </a>
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-200 bg-gray-50">
                                        <td className="p-4 font-bold text-gray-800 text-lg flex items-center">
                                            <span className="bg-yellow-100 text-yellow-800 p-2 rounded-full mr-3">
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                            </span>
                                            Download Notification PDF
                                        </td>
                                        <td className="p-4 text-center">
                                            <a
                                                href={applyLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 hover:text-blue-800 font-bold hover:underline"
                                            >
                                                Click Here
                                            </a>
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <td className="p-4 font-bold text-gray-800 text-lg flex items-center">
                                            <span className="bg-purple-100 text-purple-800 p-2 rounded-full mr-3">
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                                            </span>
                                            Official Website
                                        </td>
                                        <td className="p-4 text-center">
                                            <a
                                                href={applyLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 hover:text-blue-800 font-bold hover:underline"
                                            >
                                                Click Here
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="mt-8 text-center">
                            <AdPlaceholder size="banner" title="Advertisement" />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default ApplyData;
