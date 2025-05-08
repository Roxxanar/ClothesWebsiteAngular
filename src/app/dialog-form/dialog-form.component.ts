import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dialog-form',
  templateUrl: './dialog-form.component.html',
  styleUrls: ['./dialog-form.component.scss']
})
export class DialogFormComponent {


   // Define the form group for login
   login = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  isLoading = false; // ⏳ true when loading, false when done


  constructor(private http: HttpClient, private dialogRef: MatDialogRef<DialogFormComponent>, private authService: AuthService, private router: Router) {}




  loginWithGoogle() {
    this.isLoading = true;

    this.authService.signInWithGoogle()
      .then(() => {
        // After successful sign-in, we don't navigate here.
        // The NewPageComponent will listen for the auth change and navigate to new-page.
        this.isLoading = false; // Stop the loading spinner
      })
      .catch(err => {
        this.isLoading = false; // Stop the loading spinner on error
        console.error('Google sign-in error:', err);
      });
  }




  closeDialog() {
    this.dialogRef.close();
  }

  // Getters for input validation
  get isEmailInvalid(): boolean {
    const email = this.login.get('email');
    return email ? email.invalid && email.touched : false;
  }

  get isPasswordInvalid(): boolean {
    const password = this.login.get('password');
    return password ? password.invalid && password.touched : false;
  }



// Handle Sign Up submission
onSignupSubmit(): void {
  if (this.login.invalid) {
    console.error('Form is invalid');
    return;
  }

  const { email, password } = this.login.value;

  this.http.post('http://localhost:3200/auth/signup', { email, password })
  .subscribe({
    next: (response) => {
      console.log('Signup successful', response);
      window.location.reload();
    },
    error: (error) => {
      console.error('Signup failed', error);
    },
    complete: () => {
      console.log('Signup request completed');
    }
  });
}

// Handle Login submission
onLoginSubmit(): void {
  if (this.login.invalid) {
    console.error('Form is invalid');
    return;
  }


  interface LoginResponse {
    token: string;
    message: string;
    username: string;
  }


  const { email, password } = this.login.value;

  this.http.post<LoginResponse>('http://localhost:3200/auth/login', { email, password })
  .subscribe({
    next: (response) => {
      console.log('Login successful', response);
      // Handle redirection, token storage, etc.
       // Safely access the token from the response
       const token = response?.token;
       const username = response?.username;

       if (token) {
         localStorage.setItem('authToken', token); // Store the token
         localStorage.setItem('userName', username); // Store the token
         window.location.reload(); // Reloads the current page
         console.log('Token saved to localStorage');
       } else {
         console.error('Token not found in response');
       }
    },
    error: (error) => {
      console.error('Login failed', error);
    },
    complete: () => {
      console.log('Login request completed');
    }
  });
}
}






