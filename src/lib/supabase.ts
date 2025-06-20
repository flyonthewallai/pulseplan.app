import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

// Validate environment variables
if (!supabaseUrl) {
  console.error('Missing VITE_SUPABASE_URL environment variable')
}

if (!supabaseAnonKey) {
  console.error('Missing VITE_SUPABASE_ANON_KEY environment variable')
}

// Create Supabase client with fallback values to prevent errors
export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co', 
  supabaseAnonKey || 'placeholder-key'
)

// Check if Supabase is properly configured
const isSupabaseConfigured = () => {
  return supabaseUrl && supabaseAnonKey && 
         supabaseUrl !== 'https://placeholder.supabase.co' && 
         supabaseAnonKey !== 'placeholder-key'
}

// Auth helper functions
export const authHelpers = {
  signInWithProvider: (provider: 'google' | 'apple') => {
    if (!isSupabaseConfigured()) {
      return Promise.resolve({ error: { message: 'Supabase is not configured properly' } })
    }
    return supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${window.location.origin}/auth/callback`
      }
    })
  },

  signInWithEmail: (email: string) => {
    if (!isSupabaseConfigured()) {
      return Promise.resolve({ error: { message: 'Supabase is not configured properly' } })
    }
    return supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`
      }
    })
  },

  signOut: () => {
    if (!isSupabaseConfigured()) {
      return Promise.resolve({ error: null })
    }
    return supabase.auth.signOut()
  },

  getCurrentUser: () => {
    if (!isSupabaseConfigured()) {
      return Promise.resolve({ data: { user: null }, error: null })
    }
    return supabase.auth.getUser()
  },

  onAuthStateChange: (callback: (event: string, session: any) => void) => {
    if (!isSupabaseConfigured()) {
      return { data: { subscription: { unsubscribe: () => {} } } }
    }
    return supabase.auth.onAuthStateChange(callback)
  }
} 