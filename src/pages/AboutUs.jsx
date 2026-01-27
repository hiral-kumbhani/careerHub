import Header from '../components/Header'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import AdPlaceholder from '../components/AdPlaceholder'

function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8 border border-gray-200">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">About Us</h1>
              
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-blue-800 mb-4">About Us – CareerHub.com</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Welcome to <strong>CareerHub.com</strong>, India's premier online job portal dedicated to connecting talented professionals with leading employers across the country. Whether you're looking for your next career opportunity or seeking top-tier talent to grow your business, we provide a seamless platform to meet all your hiring and job-seeking needs.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    At CareerHub.com, we understand the ever-evolving demands of the Indian job market. Our mission is to make the hiring process easier, faster, and more effective by leveraging cutting-edge technology, deep industry expertise, and a vast network of employers and job seekers.
                  </p>
                </div>

                {/* Table of Contents */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
                  <h2 className="text-xl font-bold text-gray-800 mb-4">Table of Contents</h2>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>Our Vision</li>
                    <li>What We Do</li>
                    <li>Why Choose Us?</li>
                    <li>Our Commitment</li>
                  </ul>
                </div>

                <section>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    To be the go-to platform for talent acquisition and career growth in India, empowering job seekers to find meaningful employment and enabling employers to build exceptional teams.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">What We Do</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We offer a comprehensive, user-friendly platform where job seekers can explore a wide range of job openings across various industries and locations. Our tools allow you to upload your resume, apply for jobs, and track your application progress, all while gaining access to career resources, job alerts, and tips for professional development.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We specialize in providing the latest information about:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
                    <li>Government Jobs (Sarkari Naukri) across all states and union territories</li>
                    <li>Railway Jobs (RRB, RRC recruitment notifications)</li>
                    <li>Bank Jobs (IBPS, SBI, RBI and other banking sector jobs)</li>
                    <li>SSC Jobs (Staff Selection Commission recruitment)</li>
                    <li>UPSC Jobs (Union Public Service Commission examinations)</li>
                    <li>State Government Jobs from all over India</li>
                    <li>Central Government Jobs</li>
                    <li>Public Sector Undertaking (PSU) Jobs</li>
                    <li>Defense Jobs (Army, Navy, Air Force)</li>
                    <li>And many more employment opportunities</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Us?</h2>
                  <ul className="list-disc list-inside text-gray-700 space-y-3 ml-4">
                    <li>
                      <strong>Comprehensive Job Listings:</strong> We feature job opportunities across a wide range of industries including Government, IT, engineering, finance, healthcare, education, marketing, and more. Our database covers jobs from all states and union territories of India.
                    </li>
                    <li>
                      <strong>Advanced Search Filters:</strong> With our easy-to-use search tools, job seekers can quickly find jobs that match their skills, qualifications, location preferences, and career goals.
                    </li>
                    <li>
                      <strong>Daily Job Alerts:</strong> Stay updated with the latest job openings through our email notification system. Never miss an opportunity that matches your profile.
                    </li>
                    <li>
                      <strong>Accurate Information:</strong> We ensure that all job listings are verified and up-to-date, providing you with reliable information about government vacancies and recruitment processes.
                    </li>
                    <li>
                      <strong>Free Access:</strong> Our platform is completely free for job seekers. Browse, search, and apply for jobs without any subscription fees.
                    </li>
                    <li>
                      <strong>User-Friendly Interface:</strong> Our website is designed to be intuitive and easy to navigate, making your job search experience smooth and efficient.
                    </li>
                    <li>
                      <strong>Career Resources:</strong> Access study materials, exam patterns, syllabus information, and tips to help you prepare for various government examinations.
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Commitment</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We are committed to providing a platform that is accessible, efficient, and trustworthy for both job seekers and employers. Whether you're taking your first step in the professional world or looking for your next big opportunity, CareerHub.com is here to support you at every stage of your career journey.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Our commitment extends to:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
                    <li>Providing accurate and timely job information</li>
                    <li>Maintaining the highest standards of data privacy and security</li>
                    <li>Continuously improving our platform based on user feedback</li>
                    <li>Supporting job seekers from all backgrounds and regions across India</li>
                    <li>Building a trusted community of professionals and employers</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Thank you for choosing <strong>CareerHub.com</strong> — where great careers and top talent meet!
                  </p>
                </section>
              </div>
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
  );
}

export default AboutUs;
