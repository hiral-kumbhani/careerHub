import { Link, useNavigate } from 'react-router-dom';
import { jobsData, categories } from '../data/jobsData';
import AdPlaceholder from './AdPlaceholder';

function Sidebar() {
  const navigate = useNavigate();
  const recentJobs = jobsData.slice(0, 5);

  const handleJobClick = (id) => {
    navigate(`/job/${id}`);
  };

  return (
    <aside className="space-y-6">
      {/* Ad Space - Top of Sidebar */}
      <AdPlaceholder size="square" title="Advertisement" />

      {/* Recent Posts */}
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
        <div className="flex items-center mb-4 pb-3 border-b border-gray-200">
          <div className="bg-blue-600 p-2 rounded-lg mr-3">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-blue-800">Latest Government Jobs</h3>
        </div>
        <ul className="space-y-3">
          {recentJobs.map((job) => (
            <li
              key={job.id}
              onClick={() => handleJobClick(job.id)}
              className="cursor-pointer"
            >
              <div className="p-3 rounded-lg hover:bg-blue-50 hover:shadow-sm transition-all duration-200 border-l-4 border-transparent hover:border-blue-600">
                <p className="text-gray-700 hover:text-blue-700 transition text-sm font-medium line-clamp-2">
                  {job.title}
                </p>
                <p className="text-xs text-gray-500 mt-1">{job.date}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Ad Space - Middle of Sidebar */}
      <AdPlaceholder size="rectangle" title="Advertisement" />

      {/* Categories */}
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
        <div className="flex items-center mb-4 pb-3 border-b border-gray-200">
          <div className="bg-green-600 p-2 rounded-lg mr-3">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-green-700">Job Categories</h3>
        </div>
        <div className="max-h-96 overflow-y-auto custom-scrollbar">
          <ul className="space-y-2">
            {categories.map((category, index) => (
              <li key={index}>
                <Link
                  to={`/?category=${encodeURIComponent(category)}`}
                  className="text-gray-700 hover:text-blue-700 transition text-sm block py-2 px-3 rounded-lg hover:bg-blue-50 font-medium"
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Ad Space - Bottom of Sidebar */}
      <AdPlaceholder size="square" title="Advertisement" />
    </aside>
  );
}

export default Sidebar;
