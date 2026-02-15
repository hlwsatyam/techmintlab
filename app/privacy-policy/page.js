import { generateSEO } from '@/lib/seo'
import Link from 'next/link'

export const metadata = generateSEO('Privacy Policy')

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="  mx-auto px-4  ">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Privacy <span className="gradient-text">Policy</span>
          </h1>
          <p className="text-xl text-gray-600">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-white rounded-2xl p-8 shadow-sm space-y-8">
            
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
              <p className="text-gray-600">
                At TechMintLab, we take your privacy seriously. This Privacy Policy explains how we collect, 
                use, disclose, and safeguard your information when you visit our website or use our services. 
                Please read this privacy policy carefully. If you do not agree with the terms of this privacy 
                policy, please do not access the site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
              <h3 className="text-xl font-semibold mb-2">Personal Data</h3>
              <p className="text-gray-600 mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Fill out a contact form</li>
                <li>Subscribe to our newsletter</li>
                <li>Request a consultation</li>
                <li>Apply for a job position</li>
                <li>Use our services</li>
              </ul>
              <p className="text-gray-600">
                The personal information we may collect includes:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Name and contact information (email, phone number, address)</li>
                <li>Company information</li>
                <li>Project requirements and preferences</li>
                <li>Communication preferences</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Provide, operate, and maintain our services</li>
                <li>Improve, personalize, and expand our services</li>
                <li>Communicate with you about projects, updates, and offers</li>
                <li>Process your transactions and send related information</li>
                <li>Find and prevent fraud</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Cookies and Tracking Technologies</h2>
              <p className="text-gray-600 mb-4">
                We use cookies and similar tracking technologies to track activity on our website and hold certain 
                information. Cookies are files with small amount of data which may include an anonymous unique identifier.
              </p>
              <p className="text-gray-600">
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. 
                However, if you do not accept cookies, you may not be able to use some portions of our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Third-Party Services</h2>
              <p className="text-gray-600 mb-4">
                We may employ third-party companies and individuals due to the following reasons:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>To facilitate our service</li>
                <li>To provide the service on our behalf</li>
                <li>To perform service-related services</li>
                <li>To assist us in analyzing how our service is used</li>
              </ul>
              <p className="text-gray-600 mt-4">
                These third parties have access to your personal information only to perform these tasks on our 
                behalf and are obligated not to disclose or use it for any other purpose.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Data Security</h2>
              <p className="text-gray-600">
                The security of your data is important to us, but remember that no method of transmission over 
                the Internet or method of electronic storage is 100% secure. While we strive to use commercially 
                acceptable means to protect your personal information, we cannot guarantee its absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Your Data Protection Rights</h2>
              <p className="text-gray-600 mb-4">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>The right to access – You have the right to request copies of your personal data.</li>
                <li>The right to rectification – You have the right to request that we correct any information you believe is inaccurate.</li>
                <li>The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</li>
                <li>The right to restrict processing – You have the right to request that we restrict the processing of your personal data.</li>
                <li>The right to object to processing – You have the right to object to our processing of your personal data.</li>
                <li>The right to data portability – You have the right to request that we transfer the data to another organization.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Children's Privacy</h2>
              <p className="text-gray-600">
                Our services are not intended for use by children under the age of 13. We do not knowingly collect 
                personally identifiable information from children under 13. If you are a parent or guardian and you 
                are aware that your child has provided us with personal information, please contact us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Changes to This Privacy Policy</h2>
              <p className="text-gray-600">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting 
                the new Privacy Policy on this page and updating the "Last updated" date at the top of this policy. 
                You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. Contact Us</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>By email: privacy@techmintlab.com</li>
                <li>By phone: +91 (123) 456-7890</li>
                <li>By mail: TechMintLab, 123 Business Park, Mumbai, India 400001</li>
              </ul>
            </section>
          </div>
        </div>

      
        
      </div>
    </div>
  )
}