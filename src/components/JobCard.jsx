import { useNavigate } from 'react-router-dom';

function JobCard({ job }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/job/${job.id}`);
  };

  return (
    <article
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer border border-gray-200"
      onClick={handleClick}
    >
      <div className="md:flex">
        {/* Image Section */}
        <div className="md:w-1/3 h-48 md:h-auto overflow-hidden bg-blue-50">
          <img
            src={job.image}
            alt={job.title}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=500&fit=crop';
            }}
          />
        </div>

        {/* Content Section */}
        <div className="md:w-2/3 p-4 md:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
            <div className="flex items-center text-xs sm:text-sm text-gray-600">
              <svg className="w-4 h-4 mr-1 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{job.date}</span>
            </div>
            <span className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold border border-blue-200 w-fit">
              {job.category}
            </span>
          </div>

          <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3 hover:text-blue-700 transition cursor-pointer line-clamp-2">
            {job.title}
          </h2>

          <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed text-sm">
            {job.excerpt}
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex items-center text-xs sm:text-sm text-gray-500">
              <svg className="w-4 h-4 mr-1 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>by {job.author}</span>
            </div>

            <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-4 sm:px-6 py-2 rounded-lg transition-all duration-300 inline-flex items-center justify-center shadow-md hover:shadow-lg text-sm sm:text-base">
              Apply Online
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default JobCard;
