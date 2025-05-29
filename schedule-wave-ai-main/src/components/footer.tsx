
import React from 'react';
import { Container } from '@/components/ui/container';

export const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Rhythm</h3>
            <p className="text-muted-foreground">Let your schedule find its rhythm.</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a></li>
              <li><a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a></li>
              <li><a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">How It Works</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Fly on the Wall</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">GitHub</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Coming Soon</h4>
            <div className="flex gap-4">
              <a href="#" className="glass-card p-2 rounded-lg">
                <span className="sr-only">App Store</span>
                <div className="w-8 h-8 bg-white rounded-lg"></div>
              </a>
              <a href="#" className="glass-card p-2 rounded-lg">
                <span className="sr-only">Google Play</span>
                <div className="w-8 h-8 bg-white rounded-lg"></div>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Rhythm. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};
