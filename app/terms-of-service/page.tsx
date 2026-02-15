import { generateSEO } from '@/lib/seo'
import Link from 'next/link'

export const metadata = generateSEO('Terms of Service')

export default function TermsOfServicePage() {
  return (
    <div className="pt-32 pb-20">
      <div className="  mx-auto px-4  ">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Terms of <span className="gradient-text">Service</span>
          </h1>
          <p className="text-xl text-gray-600">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-white rounded-2xl p-8 shadow-sm space-y-8">
            
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-600">
                By accessing or using the services provided by TechMintLab ("Company", "we", "our", or "us"), 
                you agree to be bound by these Terms of Service. If you disagree with any part of the terms, 
                you may not access our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Definitions</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>"Service"</strong> refers to the website and services provided by TechMintLab</li>
                <li><strong>"Client"</strong> refers to you, the person or entity using our services</li>
                <li><strong>"Agreement"</strong> refers to these Terms of Service</li>
                <li><strong>"Project"</strong> refers to any development work undertaken by TechMintLab for the Client</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Services</h2>
              <p className="text-gray-600 mb-4">
                TechMintLab provides IT consulting, web development, mobile app development, and related digital 
                services. We reserve the right to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Modify or discontinue any part of our services without notice</li>
                <li>Refuse service to anyone for any reason at any time</li>
                <li>Update service offerings and pricing at our discretion</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Project Terms</h2>
              <h3 className="text-xl font-semibold mb-2">4.1 Project Scope</h3>
              <p className="text-gray-600 mb-4">
                All projects will be defined by a detailed scope of work document that will be agreed upon by both 
                parties before work commences. Any changes to the scope may result in additional charges.
              </p>
              
              <h3 className="text-xl font-semibold mb-2">4.2 Timeline</h3>
              <p className="text-gray-600 mb-4">
                Project timelines are estimates and may be adjusted based on requirements, feedback, and other factors. 
                We will make reasonable efforts to meet agreed-upon deadlines.
              </p>
              
              <h3 className="text-xl font-semibold mb-2">4.3 Client Responsibilities</h3>
              <p className="text-gray-600 mb-4">
                The Client agrees to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Provide timely feedback and approvals</li>
                <li>Supply all necessary content and materials</li>
                <li>Make timely payments as agreed</li>
                <li>Cooperate in good faith throughout the project</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Payments and Fees</h2>
              <h3 className="text-xl font-semibold mb-2">5.1 Pricing</h3>
              <p className="text-gray-600 mb-4">
                All prices are in Indian Rupees (INR) unless otherwise specified. Prices do not include applicable taxes, 
                which will be added to the total amount due.
              </p>
              
              <h3 className="text-xl font-semibold mb-2">5.2 Payment Terms</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>For fixed-price projects: 50% upfront, 50% upon completion</li>
                <li>For hourly projects: Monthly invoicing with net-15 payment terms</li>
                <li>For maintenance packages: Monthly or annual subscription fees</li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-2">5.3 Late Payments</h3>
              <p className="text-gray-600">
                Late payments may incur a 1.5% monthly interest charge. We reserve the right to suspend work on 
                projects with overdue payments.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Intellectual Property</h2>
              <h3 className="text-xl font-semibold mb-2">6.1 Ownership</h3>
              <p className="text-gray-600 mb-4">
                Upon full payment, the Client owns the final deliverables. TechMintLab retains ownership of:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Pre-existing materials and intellectual property</li>
                <li>Reusable code libraries and frameworks</li>
                <li>Development methodologies and processes</li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-2">6.2 License</h3>
              <p className="text-gray-600">
                We grant the Client a non-exclusive, perpetual license to use the final deliverables for their intended purpose.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Confidentiality</h2>
              <p className="text-gray-600">
                Both parties agree to keep confidential all non-public information disclosed during the project. 
                This obligation survives the termination of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Limitation of Liability</h2>
              <p className="text-gray-600">
                To the maximum extent permitted by law, TechMintLab shall not be liable for any indirect, incidental, 
                special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly 
                or indirectly, or any loss of data, use, goodwill, or other intangible losses.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Warranty and Disclaimer</h2>
              <p className="text-gray-600">
                Our services are provided "as is" without any warranty of any kind. We do not warrant that:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>The service will meet your specific requirements</li>
                <li>The service will be uninterrupted, timely, secure, or error-free</li>
                <li>The results from using the service will be accurate or reliable</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. Termination</h2>
              <p className="text-gray-600">
                Either party may terminate a project with written notice. Upon termination:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Client pays for all work completed up to termination</li>
                <li>We deliver all work products created to date</li>
                <li>Confidentiality obligations continue</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">11. Governing Law</h2>
              <p className="text-gray-600">
                These Terms shall be governed by the laws of India. Any disputes arising under these Terms shall be 
                subject to the exclusive jurisdiction of the courts in Mumbai, India.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">12. Changes to Terms</h2>
              <p className="text-gray-600">
                We reserve the right to modify these terms at any time. We will notify clients of material changes 
                via email or website notice. Continued use of our services after changes constitutes acceptance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">13. Contact Information</h2>
              <p className="text-gray-600 mb-4">
                For questions about these Terms of Service, please contact us:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>By email: legal@techmintlab.com</li>
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