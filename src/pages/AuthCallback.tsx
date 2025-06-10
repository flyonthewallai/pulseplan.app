import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { toast } from 'sonner';

const AuthCallback = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [message, setMessage] = useState('Processing authentication...');

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        // Get the auth code from URL parameters
        const { data, error } = await supabase.auth.getSession();
        
        if (error) {
          console.error('Auth callback error:', error);
          setStatus('error');
          setMessage(error.message || 'Authentication failed');
          toast.error('Authentication failed');
          return;
        }

        if (data.session) {
          // Authentication successful
          setStatus('success');
          setMessage('Authentication successful! Redirecting...');
          
          // Send token to extension via postMessage
          window.postMessage({
            type: 'PULSEPLAN_AUTH_SUCCESS',
            token: data.session.access_token,
            user: data.session.user,
            timestamp: Date.now()
          }, '*');

          toast.success('Successfully authenticated!');
          
          // Redirect to dashboard or home after a short delay
          setTimeout(() => {
            navigate('/', { replace: true });
          }, 2000);
        } else {
          // No session found
          setStatus('error');
          setMessage('No authentication session found');
          toast.error('Authentication failed - no session');
        }
      } catch (error: any) {
        console.error('Auth callback error:', error);
        setStatus('error');
        setMessage(error.message || 'An unexpected error occurred');
        toast.error('Authentication failed');
      }
    };

    handleAuthCallback();
  }, [navigate]);

  const getStatusIcon = () => {
    switch (status) {
      case 'loading':
        return <Loader2 className="w-12 h-12 text-rhythm-lavender animate-spin" />;
      case 'success':
        return <CheckCircle className="w-12 h-12 text-green-500" />;
      case 'error':
        return <AlertCircle className="w-12 h-12 text-red-500" />;
    }
  };

  const getStatusColor = () => {
    switch (status) {
      case 'loading':
        return 'text-rhythm-lavender';
      case 'success':
        return 'text-green-600';
      case 'error':
        return 'text-red-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center">
      <Container>
        <div className="max-w-md mx-auto">
          <Card className="border-0 shadow-xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
            <CardHeader className="text-center pb-4">
              <div className="flex justify-center mb-4">
                {getStatusIcon()}
              </div>
              <CardTitle className={`text-2xl ${getStatusColor()}`}>
                {status === 'loading' && 'Authenticating...'}
                {status === 'success' && 'Welcome to PulsePlan!'}
                {status === 'error' && 'Authentication Failed'}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                {message}
              </p>
              
              {status === 'success' && (
                <div className="space-y-3">
                  <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                    <div className="flex items-center justify-center gap-2 text-sm text-green-700 dark:text-green-300">
                      <CheckCircle className="w-4 h-4" />
                      <span>Extension sync completed</span>
                    </div>
                  </div>
                  <div className="text-sm text-slate-500">
                    Your browser extension is now connected and ready to sync your assignments.
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="space-y-3">
                  <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                    <div className="text-sm text-red-700 dark:text-red-300">
                      Please try again or contact support if the problem persists.
                    </div>
                  </div>
                  <button
                    onClick={() => navigate('/auth')}
                    className="text-rhythm-lavender hover:underline text-sm"
                  >
                    Try again
                  </button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default AuthCallback; 