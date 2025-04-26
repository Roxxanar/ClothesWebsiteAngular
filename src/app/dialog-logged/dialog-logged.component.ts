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



      const tokenKey = Object.keys(localStorage).find(key => key.includes('-auth-token'));
      // Dacă găsim cheia, luăm valoarea din localStorage
      if (tokenKey) {
        console.log('S-a gasit un token in localStorage.');
        localStorage.removeItem(tokenKey);
      } else {
        console.log('Nu s-a gasit un token in localStorage.');

      }



    window.location.reload(); // Reloads the current page



  }


}
