import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-logged',
  templateUrl: './dialog-logged.component.html',
  styleUrls: ['./dialog-logged.component.scss']
})
export class DialogLoggedComponent {

  constructor(private dialogRef: MatDialogRef<DialogLoggedComponent>) {}

  closeDialogLogOut() {
    this.dialogRef.close();
  }

}
