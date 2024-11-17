import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-logged',
  templateUrl: './dialog-logged.component.html',
  styleUrls: ['./dialog-logged.component.scss']
})
export class DialogLoggedComponent implements OnInit {

  userName: string | null = '';

  constructor(private dialogRef: MatDialogRef<DialogLoggedComponent>) {}

  ngOnInit(): void {
    // Retrieve the username from localStorage (or any other source)
    this.userName = localStorage.getItem('userName');
  }


  closeDialogLogOut() {
    this.dialogRef.close();
  }


  dialogLogOut() {

    localStorage.removeItem('authToken');
    localStorage.removeItem('userName'); // Clear username if stored
    window.location.reload(); // Reloads the current page

  }


}
