import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-subscribe',
  templateUrl: './dialog-subscribe.component.html',
  styleUrls: ['./dialog-subscribe.component.scss']
})
export class DialogSubscribeComponent implements OnInit {

  subscriptionMessage: string | null = null;

  ngOnInit() {
    // Retrieve the message from localStorage
    this.subscriptionMessage = localStorage.getItem('subscriptionMessage');
  }

  constructor(private dialogRef: MatDialogRef<DialogSubscribeComponent>) {}



  closeDialog() {
    this.dialogRef.close();
  }


}
