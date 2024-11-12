import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';


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

  constructor(private http: HttpClient, private dialogRef: MatDialogRef<DialogFormComponent>) {}



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

  this.http.post('http://localhost:3000/signup', { email, password })
  .subscribe({
    next: (response) => {
      console.log('Signup successful', response);
      // Handle redirection or success message
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

  const { email, password } = this.login.value;

  this.http.post('http://localhost:3000/login', { email, password })
  .subscribe({
    next: (response) => {
      console.log('Login successful', response);
      // Handle redirection, token storage, etc.
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






