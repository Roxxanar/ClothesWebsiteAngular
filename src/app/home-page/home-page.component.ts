import { Component, OnInit } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent implements AfterViewInit, OnInit {

 // Define the form group for login
 login = new FormGroup({
  email: new FormControl('', [Validators.required, Validators.email]),
  password: new FormControl('', [Validators.required, Validators.minLength(6)]),
});


token: string | null = null;


constructor(private http: HttpClient, private router: Router) {}

ngOnInit(): void {
  // Check localStorage for the token when the component initializes
  this.token = localStorage.getItem('authToken');
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

  this.http.post('http://localhost:3200/signup', { email, password })
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


  interface LoginResponse {
    token: string;
    message: string;
    username: string;
  }


  const { email, password } = this.login.value;

  this.http.post<LoginResponse>('http://localhost:3200/login', { email, password })
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
         this.router.navigate(['/new-page']);

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



  itemWidth: number = 400;  // Change this according to the actual image width
  padding: number = 200;    // Adjust this value as needed
  sum: number = this.itemWidth + this.padding;

  // This lifecycle hook ensures the DOM is fully initialized
  ngAfterViewInit(): void {
    const prev = document.getElementById('prev-btn');
    const next = document.getElementById('next-btn');
    const list = document.getElementById('item-list');

    if (prev && next && list) {
      // Add event listeners only if elements are found
      prev.addEventListener('click', () => {
        list.scrollLeft = list.scrollLeft - this.sum;
      });

      next.addEventListener('click', () => {
        list.scrollLeft = list.scrollLeft + this.sum;
      });
    } else {
      console.error('One or more elements were not found in the DOM');
    }
  }

}

