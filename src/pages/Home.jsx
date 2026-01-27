import { useState, useEffect, useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../components/Header'
import JobCard from '../components/JobCard'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import AdPlaceholder from '../components/AdPlaceholder'
import { jobsData } from '../data/jobsData'

function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const location = useLocation();

  // Reset to first page when location changes (search or category change)
  useEffect(() => {
    setCurrentPage(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname, location.search]);

  const filteredJobs = useMemo(() => {
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get('search')?.toLowerCase() || '';
    const categoryQuery = searchParams.get('category');
    const pathname = location.pathname;

    return jobsData.filter(job => {
      // Search Filter
      if (searchQuery) {
        const matchTitle = job.title.toLowerCase().includes(searchQuery);
        const matchExcerpt = job.excerpt.toLowerCase().includes(searchQuery);
        if (!matchTitle && !matchExcerpt) return false;
      }

      // Category Filter (from URL query)
      if (categoryQuery) {
        // Use includes to match multi-category strings (e.g., "Govt Jobs, 10th Pass Job")
        if (!job.category.includes(categoryQuery)) return false;
      }

      // Route-based Filters
      if (pathname === '/govt-jobs') {
        return job.category.includes('Govt');
      }
      if (pathname === '/railway-jobs') {
        return job.category.includes('Railway');
      }
      if (pathname === '/bank-jobs') {
        return job.category.includes('Bank');
      }

      return true;
    });
  }, [location.search, location.pathname]);

  const indexOfLastJob = currentPage * itemsPerPage;
  const indexOfFirstJob = indexOfLastJob - itemsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(filteredJobs.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPaginationButtons = () => {
    const pageNumbers = [];
    const maxVisibleButtons = 5;

    let startPage = Math.max(1, currentPage - Math.floor(maxVisibleButtons / 2));
    let endPage = Math.min(totalPages, startPage + maxVisibleButtons - 1);

    if (endPage - startPage + 1 < maxVisibleButtons) {
      startPage = Math.max(1, endPage - maxVisibleButtons + 1);
    }

    // First page button
    if (startPage > 1) {
      pageNumbers.push(
        <button key={1} onClick={() => handlePageChange(1)} className="px-3 py-2 bg-white rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50 text-gray-700">1</button>
      );
      if (startPage > 2) pageNumbers.push(<span key="dots1" className="px-2 text-gray-500">...</span>);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-4 py-2 rounded-lg shadow-sm border transition font-semibold ${currentPage === i
            ? 'bg-blue-600 text-white border-blue-600'
            : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
            }`}
        >
          {i}
        </button>
      );
    }

    // Last page button
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) pageNumbers.push(<span key="dots2" className="px-2 text-gray-500">...</span>);
      pageNumbers.push(
        <button key={totalPages} onClick={() => handlePageChange(totalPages)} className="px-3 py-2 bg-white rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50 text-gray-700">{totalPages}</button>
      );
    }

    return pageNumbers;
  };

  const getPageTitle = () => {
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get('search');
    const categoryQuery = searchParams.get('category');

    if (searchQuery) return `Search Results for "${searchQuery}"`;
    if (categoryQuery) return `${categoryQuery} Jobs`;
    if (location.pathname === '/govt-jobs') return 'Government Jobs';
    if (location.pathname === '/railway-jobs') return 'Railway Jobs';
    if (location.pathname === '/bank-jobs') return 'Bank Jobs';

    return 'Latest Government Jobs in India 2026';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section with SEO Keywords */}
        <div className="mb-12 text-center bg-white rounded-lg shadow-md p-6 md:p-8 border border-gray-200">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-800 mb-4">
            {getPageTitle()}
          </h1>
          <p className="text-gray-700 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Find <strong>Sarkari Naukri</strong>, <strong>Government Jobs</strong>, <strong>Railway Jobs</strong>, <strong>Bank Jobs</strong>, <strong>SSC Jobs</strong>, <strong>UPSC Jobs</strong>, and <strong>State Government Jobs</strong> from all over India. Apply online for latest government vacancies and recruitment notifications. Get daily job alerts for <strong>Central Government Jobs</strong> and <strong>State Government Jobs</strong> across all states.
          </p>
        </div>

        {/* Ad Space - Between Hero and Content */}
        <AdPlaceholder size="banner" title="Advertisement" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Ad Space - Top of Job Listings */}
            <AdPlaceholder size="rectangle" title="Advertisement" />

            {currentJobs.map((job, index) => (
              <div key={job.id}>
                <JobCard job={job} />
                {/* Ad Space - After every job */}
                <AdPlaceholder size="banner" title="Advertisement" />
              </div>
            ))}

            {/* Pagination */}
            <div className="flex flex-wrap justify-center items-center gap-2 pt-8">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-white rounded-lg shadow-md border border-gray-200 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition"
              >
                ← Prev
              </button>

              {renderPaginationButtons()}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-5 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-blue-800 transition font-bold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next →
              </button>
            </div>
            <div className="text-center text-gray-500 text-sm mt-4">
              Page {currentPage} of {totalPages}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Home
