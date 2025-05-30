import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <div className="bg-grid noise">
        <Navbar />
        
        <Section className="pt-32">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
                <p className="text-lg text-muted-foreground">Last Updated: May 17th, 2025</p>
              </div>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-lg mb-8">
                  Welcome to PulsePlan, a scheduling optimization application provided by Fly on the Wall LLC. 
                  These Terms of Service govern your use of the PulsePlan application and any related services 
                  provided by the Company.
                </p>

                <div className="space-y-8">
                  <section>
                    <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
                    <p>
                      By accessing or using the App, you agree to be bound by these Terms. If you do not 
                      agree to these Terms, you may not use the App.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold mb-4">2. Use of the App</h2>
                    <p className="mb-4">
                      PulsePlan is designed to extract your schedule from websites such as Canvas, Apple Calendar, 
                      and other supported platforms, and optimize your schedule and assignments using AI. 
                      By using the App, you agree to:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Provide accurate login information for the platforms you wish to connect.</li>
                      <li>
                        Grant the App permission to access, read, and optimize your schedule data. This applies 
                        to any and all allotted websites or applications.
                      </li>
                      <li>Use the App only for personal, non-commercial purposes.</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
                    <p>
                      To use PulsePlan, you may be required to create an account. You agree to provide accurate 
                      and complete information during registration and to maintain the confidentiality of your 
                      login credentials.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold mb-4">4. Privacy Policy</h2>
                    <p>
                      Our Privacy Policy explains how we collect, use, and protect your data. By using the App, 
                      you agree to our Privacy Policy.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold mb-4">5. Prohibited Activities</h2>
                    <p className="mb-4">You agree not to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Use the App for any illegal or unauthorized purpose.</li>
                      <li>Access or use the App in any manner that could harm the Company's systems or users.</li>
                      <li>Attempt to reverse engineer, modify, or otherwise tamper with the App.</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold mb-4">6. Intellectual Property</h2>
                    <p>
                      All content, features, and functionality of the App, including but not limited to text, 
                      graphics, logos, and software, are the exclusive property of FlyOnTheWall and are protected 
                      by copyright and other intellectual property laws.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold mb-4">7. Disclaimer of Warranties</h2>
                    <p>
                      The App is provided "as is" and "as available" without any warranties of any kind, either 
                      express or implied. We do not guarantee that the App will be error-free, secure, or operate 
                      without interruption.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold mb-4">8. Limitation of Liability</h2>
                    <p>
                      In no event shall FlyOnTheWall be liable for any direct, indirect, incidental, special, 
                      or consequential damages arising from your use of the App.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold mb-4">9. Termination</h2>
                    <p>
                      We may terminate your access to the App at any time without notice if we determine that 
                      you have violated these Terms.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold mb-4">10. Changes to Terms</h2>
                    <p>
                      We reserve the right to modify these Terms at any time. Any changes will be posted on this 
                      page, and your continued use of the App after such changes constitutes your acceptance of 
                      the new Terms.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold mb-4">11. Governing Law</h2>
                    <p>
                      These Terms are governed by and construed under the laws of Colorado.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold mb-4">12. Contact Information</h2>
                    <p>
                      If you have any questions about these Terms, please contact us at{" "}
                      <a 
                        href="mailto:flyonthewalldev@gmail.com" 
                        className="text-rhythm-blue hover:text-rhythm-blue/80 transition-colors"
                      >
                        flyonthewalldev@gmail.com
                      </a>
                      .
                    </p>
                  </section>
                </div>
              </div>
            </motion.div>
          </Container>
        </Section>

        <Footer />
      </div>
    </div>
  );
};

export default TermsOfService; 