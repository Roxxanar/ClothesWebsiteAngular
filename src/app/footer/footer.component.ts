import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogSubscribeComponent } from '../dialog-subscribe/dialog-subscribe.component';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  //@ViewChild('emailInput') emailInput: ElementRef | undefined; // Reference to the email input field
  emailInput: string = '';

  subscriptionMessage: string = '';
  isSubscriptionChecked: boolean = false; // Flag to track if subscription check is complete

  subscribe = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email])

    });


  constructor(private router: Router, private http: HttpClient, public dialog: MatDialog) {

  }

  ngOnInit(): void {

    localStorage.removeItem('subscriptionMessage');

 // Listen to route changes
 this.router.events.subscribe((event) => {
  if (event instanceof NavigationEnd) {
    this.subscribe.reset();// Reset the form on route change
  }
});

  }

// Getter for input validation
get isEmailInvalid(): boolean {
  const email = this.subscribe.get('email');

  return email ? email.invalid && email.touched : false;
}


  checkSubscription() {
    // Send POST request to backend for subscription check
    const emailInput = this.subscribe.value;

    this.http.post<any>('http://localhost:3000/usersubscribed', emailInput).subscribe({
      next: (response) => {
        // If the response contains a message, set it to subscriptionMessage
        if (response.message) {
          this.subscriptionMessage = response.message;
          localStorage.setItem('subscriptionMessage', this.subscriptionMessage);
        }
        this.isSubscriptionChecked = true; // Mark subscription check as complete
        this.openSubscribeDialog(); // Open the dialog after the response

      },
      error: (error) => {
        console.error('Error checking subscription:', error);
        this.subscriptionMessage = 'An error occurred, please try again later';
        localStorage.setItem('subscriptionMessage', this.subscriptionMessage);
        this.isSubscriptionChecked = true; // Mark subscription check as complete
        this.openSubscribeDialog(); // Open the dialog after the response
      }
    });
  }



  openSubscribeDialog(): void {

    this.subscribe.reset(); // Clear the form (and input)

    const token = localStorage.getItem('authToken');

    if (this.isSubscriptionChecked) { // Ensure dialog opens only after checking subscription
      if (token != null) {
        this.dialog.open(DialogSubscribeComponent, {
          panelClass: 'custom-dialog',
          width: '526.2px',
          height: '195px'
        });

      } else {
        this.dialog.open(DialogSubscribeComponent, {
          panelClass: 'custom-dialog',
          width: '526.2px',
          height: '195px'
        });

      }
    }
  }
}
