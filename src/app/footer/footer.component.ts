import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogSubscribeComponent } from '../dialog-subscribe/dialog-subscribe.component';
import { HttpClient } from '@angular/common/http';
import { ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @ViewChild('emailInput') emailInput: ElementRef | undefined; // Reference to the email input field
  subscriptionMessage: string = '';
  email: string = '';
  isSubscriptionChecked: boolean = false; // Flag to track if subscription check is complete

  subscribe = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email])

    });


  constructor(private http: HttpClient, public dialog: MatDialog) {

  }

  ngOnInit(): void {

    localStorage.removeItem('subscriptionMessage');
  }

// Getter for input validation
get isEmailInvalid(): boolean {
  const email = this.subscribe.get('email');
  return email ? email.invalid && email.touched : false;
}


  checkSubscription(email: string) {
    // Trimitem cererea POST către backend pentru a verifica abonamentul
    const subscriptionData = {
      email: email,
    };

    this.http.post<any>('http://localhost:3000/usersubscribed', subscriptionData).subscribe({
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

    if (this.emailInput) {
      this.emailInput.nativeElement.value = ''; // Clear the input field
    }
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
