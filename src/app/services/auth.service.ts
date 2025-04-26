import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      'https://zyldhfgomockanyaptwi.supabase.co',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp5bGRoZmdvbW9ja2FueWFwdHdpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYxOTkyMDQsImV4cCI6MjA1MTc3NTIwNH0.2wKc4Ipzavh4yQptxm9aBrUHt4csiSx_czq_Rk1c0A4'
    );
  }

  signInWithGoogle() {
    return this.supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: 'http://localhost:4200/'
      }
    });
  }



  async getUser() {
    const { data, error } = await this.supabase.auth.getUser();
    if (error) {
      console.error('Error getting user:', error.message);
      return null;
    }
    return data.user;
  }
}
