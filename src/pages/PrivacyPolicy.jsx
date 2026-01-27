import Header from '../components/Header'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import AdPlaceholder from '../components/AdPlaceholder'

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8 border border-gray-200">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Privacy Policy</h1>
              <p className="text-gray-600 mb-6">Last updated: February 20, 2025</p>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
              </p>

              {/* Table of Contents */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Table of Contents</h2>
                <ol className="space-y-2 text-sm text-gray-700">
                  <li className="font-semibold">1. Privacy Policy</li>
                  <li className="ml-4">
                    <ol className="space-y-1 mt-1">
                      <li>1.1. Interpretation and Definitions</li>
                      <li className="ml-4">
                        <ol className="space-y-1">
                          <li>1.1.1. Interpretation</li>
                          <li>1.1.2. Definitions</li>
                        </ol>
                      </li>
                      <li>1.2. Collecting and Using Your Personal Data</li>
                      <li className="ml-4">
                        <ol className="space-y-1">
                          <li>1.2.1. Types of Data Collected</li>
                          <li className="ml-4">
                            <ol className="space-y-1">
                              <li>1.2.1.1. Personal Data</li>
                              <li>1.2.1.2. Usage Data</li>
                              <li>1.2.1.3. Tracking Technologies and Cookies</li>
                            </ol>
                          </li>
                          <li>1.2.2. Use of Your Personal Data</li>
                          <li>1.2.3. Retention of Your Personal Data</li>
                          <li>1.2.4. Transfer of Your Personal Data</li>
                          <li>1.2.5. Delete Your Personal Data</li>
                          <li>1.2.6. Disclosure of Your Personal Data</li>
                          <li className="ml-4">
                            <ol className="space-y-1">
                              <li>1.2.6.1. Business Transactions</li>
                              <li>1.2.6.2. Law enforcement</li>
                              <li>1.2.6.3. Other legal requirements</li>
                            </ol>
                          </li>
                          <li>1.2.7. Security of Your Personal Data</li>
                        </ol>
                      </li>
                      <li>1.3. Children's Privacy</li>
                      <li>1.4. Links to Other Websites</li>
                      <li>1.5. Changes to this Privacy Policy</li>
                      <li>1.6. Contact Us</li>
                    </ol>
                  </li>
                </ol>
              </div>

              {/* Content Sections */}
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Privacy Policy</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">1.1. Interpretation and Definitions</h2>
                  <h3 className="text-xl font-semibold text-gray-700 mb-3">1.1.1. Interpretation</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-gray-700 mb-3">1.1.2. Definitions</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    For the purposes of this Privacy Policy:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li><strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.</li>
                    <li><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to CareerHub.</li>
                    <li><strong>Cookies</strong> are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.</li>
                    <li><strong>Country</strong> refers to: India</li>
                    <li><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</li>
                    <li><strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.</li>
                    <li><strong>Service</strong> refers to the Website.</li>
                    <li><strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company.</li>
                    <li><strong>Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself.</li>
                    <li><strong>Website</strong> refers to CareerHub, accessible from https://careerhub.com</li>
                    <li><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">1.2. Collecting and Using Your Personal Data</h2>
                  
                  <h3 className="text-xl font-semibold text-gray-700 mb-3">1.2.1. Types of Data Collected</h3>
                  
                  <h4 className="text-lg font-semibold text-gray-700 mb-2">1.2.1.1. Personal Data</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
                    <li>Email address</li>
                    <li>First name and last name</li>
                    <li>Phone number</li>
                    <li>Address, State, Province, ZIP/Postal code, City</li>
                    <li>Usage Data</li>
                  </ul>

                  <h4 className="text-lg font-semibold text-gray-700 mb-2">1.2.1.2. Usage Data</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Usage Data is collected automatically when using the Service. Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
                  </p>

                  <h4 className="text-lg font-semibold text-gray-700 mb-2">1.2.1.3. Tracking Technologies and Cookies</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-700 mb-3">1.2.2. Use of Your Personal Data</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The Company may use Personal Data for the following purposes:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
                    <li>To provide and maintain our Service</li>
                    <li>To manage Your Account</li>
                    <li>For the performance of a contract</li>
                    <li>To contact You</li>
                    <li>To provide You with news, special offers and general information about other goods, services and events</li>
                    <li>To manage Your requests</li>
                    <li>For business transfers</li>
                    <li>For other purposes</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-700 mb-3">1.2.3. Retention of Your Personal Data</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our legal agreements and policies.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-700 mb-3">1.2.4. Transfer of Your Personal Data</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-700 mb-3">1.2.5. Delete Your Personal Data</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You. You may contact Us to request access to, correct, or delete any personal information that You have provided to Us.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-700 mb-3">1.2.6. Disclosure of Your Personal Data</h3>
                  
                  <h4 className="text-lg font-semibold text-gray-700 mb-2">1.2.6.1. Business Transactions</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.
                  </p>

                  <h4 className="text-lg font-semibold text-gray-700 mb-2">1.2.6.2. Law enforcement</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).
                  </p>

                  <h4 className="text-lg font-semibold text-gray-700 mb-2">1.2.6.3. Other legal requirements</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
                    <li>Comply with a legal obligation</li>
                    <li>Protect and defend the rights or property of the Company</li>
                    <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
                    <li>Protect the personal safety of Users of the Service or the public</li>
                    <li>Protect against legal liability</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-700 mb-3">1.2.7. Security of Your Personal Data</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">1.3. Children's Privacy</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">1.4. Links to Other Websites</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">1.5. Changes to this Privacy Policy</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">1.6. Contact Us</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    If you have any questions about this Privacy Policy, You can contact us:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>By email: privacy@careerhub.com</li>
                    <li>By visiting this page on our website: https://careerhub.com/contact-us</li>
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

export default PrivacyPolicy;
