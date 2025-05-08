import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from 'src/app/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private supabase: SupabaseClient;

  constructor(private http: HttpClient) {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    );
  }

  // Getter method for Supabase client
  getSupabase() {
    return this.supabase;
  }


  signInWithGoogle() {
    return this.supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: 'http://localhost:4200/'

      }
    });
  }


  sendGoogleUser(email: string) {
    this.http.post('http://localhost:3200/auth/google', { email }).subscribe({
      next: (response) => {
        console.log('Backend response:', response);
      },
      error: (error) => {
        console.error('Error sending user to backend:', error);
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
