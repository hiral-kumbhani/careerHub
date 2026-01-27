import Header from '../components/Header'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import AdPlaceholder from '../components/AdPlaceholder'

function Disclaimer() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8 border border-gray-200">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Disclaimer</h1>
              <p className="text-gray-600 mb-6">Last updated: December 01, 2024</p>
              
              {/* Table of Contents */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Table of Contents</h2>
                <ol className="space-y-2 text-sm text-gray-700">
                  <li className="font-semibold">Disclaimer</li>
                  <li className="ml-4">
                    <ol className="space-y-1 mt-1">
                      <li>Interpretation and Definitions</li>
                      <li className="ml-4">
                        <ol className="space-y-1">
                          <li>Interpretation</li>
                          <li>Definitions</li>
                        </ol>
                      </li>
                      <li>Disclaimer</li>
                      <li>External Links Disclaimer</li>
                      <li>Errors and Omissions Disclaimer</li>
                      <li>Fair Use Disclaimer</li>
                      <li>Views Expressed Disclaimer</li>
                      <li>No Responsibility Disclaimer</li>
                      <li>"Use at Your Own Risk" Disclaimer</li>
                      <li>Contact Us</li>
                    </ol>
                  </li>
                </ol>
              </div>

              {/* Content Sections */}
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Interpretation and Definitions</h2>
                  
                  <h3 className="text-xl font-semibold text-gray-700 mb-3">Interpretation</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-gray-700 mb-3">Definitions</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    For the purposes of this Disclaimer:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Disclaimer) refers to CareerHub.</li>
                    <li><strong>Service</strong> refers to the Website.</li>
                    <li><strong>You</strong> means the individual accessing the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
                    <li><strong>Website</strong> refers to CareerHub, accessible from https://careerhub.com</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Disclaimer</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The information contained on the Service is for general information purposes only.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The Company assumes no responsibility for errors or omissions in the contents of the Service.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    In no event shall the Company be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence or other tort, arising out of or in connection with the use of the Service or the contents of the Service. The Company reserves the right to make additions, deletions, or modifications to the contents on the Service at any time without prior notice.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The Company does not warrant that the Service is free of viruses or other harmful components.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">External Links Disclaimer</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The Service may contain links to external websites that are not provided or maintained by or in any way affiliated with the Company.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Please note that the Company does not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Errors and Omissions Disclaimer</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The information given by the Service is for general guidance on matters of interest only. Even if the Company takes every precaution to ensure that the content of the Service is both current and accurate, errors can occur. Plus, given the changing nature of laws, rules and regulations, there may be delays, omissions or inaccuracies in the information contained on the Service.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The Company is not responsible for any errors or omissions, or for the results obtained from the use of this information.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Fair Use Disclaimer</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The Company may use copyrighted material which has not always been specifically authorized by the copyright owner. The Company is making such material available for criticism, comment, news reporting, teaching, scholarship, or research.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The Company believes this constitutes a "fair use" of any such copyrighted material as provided for in section 107 of the United States Copyright law.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    If You wish to use copyrighted material from the Service for your own purposes that go beyond fair use, You must obtain permission from the copyright owner.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Views Expressed Disclaimer</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The Service may contain views and opinions which are those of the authors and do not necessarily reflect the official policy or position of any other author, agency, organization, employer or company, including the Company.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Comments published by users are their sole responsibility and the users will take full responsibility, liability and blame for any libel or litigation that results from something written in or as a direct result of something written in a comment. The Company is not liable for any comment published by users and reserves the right to delete any comment for any reason whatsoever.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">No Responsibility Disclaimer</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The information on the Service is provided with the understanding that the Company is not herein engaged in rendering legal, accounting, tax, or other professional advice and services. As such, it should not be used as a substitute for consultation with professional accounting, tax, legal or other competent advisers.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    In no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever arising out of or in connection with your access or use or inability to access or use the Service.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">"Use at Your Own Risk" Disclaimer</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    All information in the Service is provided "as is", with no guarantee of completeness, accuracy, timeliness or of the results obtained from the use of this information, and without warranty of any kind, express or implied, including, but not limited to warranties of performance, merchantability and fitness for a particular purpose.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The Company will not be liable to You or anyone else for any decision made or action taken in reliance on the information given by the Service or for any consequential, special or similar damages, even if advised of the possibility of such damages.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    If you have any questions about this Disclaimer, You can contact Us:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>By email: info@careerhub.com</li>
                    <li>By visiting this page on our website: <a href="/contact-us" className="text-blue-600 hover:text-blue-800 underline">https://careerhub.com/contact-us</a></li>
                  </ul>
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

export default Disclaimer;
