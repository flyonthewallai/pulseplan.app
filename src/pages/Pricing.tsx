import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual' | 'lifetime'>('annual');

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Section className="pt-24">
        <Container>
          <div className="max-w-6xl mx-auto px-8 py-16">
                         {/* Top Section - Pricing Banner */}
             <div className="text-center mb-4">
               <div className="glass-card p-6 rounded-2xl mb-4 inline-block relative overflow-hidden">
                {/* Blue accent line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-rhythm-blue"></div>
                <p className="text-muted-foreground text-sm mb-3">Pricing</p>
                <h1 className="text-3xl font-bold">7 days free. Cancel Anytime.</h1>
              </div>
            </div>

                         {/* Subscription Options */}
             <div className="flex justify-center mb-8">
              <div className="glass-card p-2 rounded-2xl flex relative overflow-hidden">
                {/* Blue accent line */}
                <div className="absolute top-0 left-0 w-full h-0.5 bg-rhythm-blue/50"></div>
                <button
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-6 py-3 rounded-xl text-sm font-medium transition-colors ${
                    billingCycle === 'monthly' 
                      ? 'text-white bg-[#2a2a2a]' 
                      : 'text-gray-400 hover:text-gray-300'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingCycle('annual')}
                  className={`px-6 py-3 rounded-xl text-sm font-medium transition-colors ${
                    billingCycle === 'annual' 
                      ? 'text-white bg-[#2a2a2a]' 
                      : 'text-gray-400 hover:text-gray-300'
                  }`}
                >
                  Annual <span className="text-gray-300 text-xs">(2 months free)</span>
                </button>
                <button
                  onClick={() => setBillingCycle('lifetime')}
                  className={`px-6 py-3 rounded-xl text-sm font-medium transition-colors ${
                    billingCycle === 'lifetime' 
                      ? 'text-white bg-[#2a2a2a]' 
                      : 'text-gray-400 hover:text-gray-300'
                  }`}
                >
                  Lifetime <span className="text-gray-300 text-xs">(limited time)</span>
                </button>
              </div>
            </div>

                                      {/* Pricing Cards */}
             <div className="flex justify-center">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-3xl">
                {/* Free Card */}
                <div className="glass-card p-7 rounded-2xl text-center h-full relative overflow-hidden">
                  <h2 className="text-3xl font-bold mb-3">Free</h2>
                  <div className="mb-4">
                    <span className="text-5xl font-bold">$0</span>
                    <span className="text-muted-foreground text-base">/ month</span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-6 font-mono">Free forever</p>
                 
                 <div className="text-left space-y-3 mb-6 flex-1">
                   <div className="flex items-center gap-3">
                     <Check className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                     <span className="text-sm">Basic task + deadline management</span>
                   </div>
                   <div className="flex items-center gap-3">
                     <Check className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                     <span className="text-sm">1 schedule per week</span>
                   </div>
                   <div className="flex items-center gap-3">
                     <Check className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                     <span className="text-sm">Google/Apple Calendar integration</span>
                   </div>
                   <div className="flex items-center gap-3">
                     <Check className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                     <span className="text-sm">Limited agent access</span>
                   </div>
                   <div className="flex items-center gap-3">
                     <Check className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                     <span className="text-sm">Limited canvas sync (1 course)</span>
                   </div>
                   <div className="flex items-center gap-3">
                     <Check className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                     <span className="text-sm">Limited task storage</span>
                   </div>
                 </div>
                 
                 <Button className="w-full bg-rhythm-blue text-white text-base font-semibold py-3 rounded-xl hover:bg-rhythm-blue/90 transition-colors duration-200">
                    Get Started Free
                  </Button>
               </div>

               {/* Premium Card */}
               <div className="glass-card p-7 rounded-2xl text-center h-full relative overflow-hidden">
                   <h2 className="text-3xl font-bold mb-3">Premium</h2>
                   <div className="mb-4">
                     <span className="text-5xl font-bold">
                       {billingCycle === 'monthly' ? '$7' : billingCycle === 'annual' ? '$70' : '$250'}
                     </span>
                     <span className="text-muted-foreground text-base">
                       {billingCycle === 'monthly' ? '/ month' : billingCycle === 'annual' ? '/ year' : ''}
                     </span>
                   </div>
                   <p className="text-muted-foreground text-sm mb-6 font-mono">
                     {billingCycle === 'monthly' ? 'Billed Monthly' : billingCycle === 'annual' ? 'Billed Annually (2 months free)' : 'One-time payment'}
                   </p>
                  
                  <div className="text-left space-y-3 mb-6 flex-1">
                    <div className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                      <span className="text-sm">AI task breakdown & automation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                      <span className="text-sm">Smart auto-scheduling & rescheduling</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                      <span className="text-sm">Unlimited Canvas sync (all courses)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                      <span className="text-sm">Long term memory of you</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                      <span className="text-sm">Auto-draft & summarize emails</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                      <span className="text-sm">Daily AI morning briefings</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                      <span className="text-sm">Custom AI preferences</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                      <span className="text-sm">Priority support & early access</span>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-rhythm-blue text-white text-base font-semibold py-3 rounded-xl hover:bg-rhythm-blue/90 transition-colors duration-200">
                       Try Premium for free
                  </Button>
               </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
      
      <Footer />
    </div>
  );
};

export default Pricing; 
