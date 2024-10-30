import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-form',
  templateUrl: './dialog-form.component.html',
  styleUrls: ['./dialog-form.component.scss']
})
export class DialogFormComponent {

  constructor(private dialogRef: MatDialogRef<DialogFormComponent>) {}

  closeDialog() {
    this.dialogRef.close();
  }

}
