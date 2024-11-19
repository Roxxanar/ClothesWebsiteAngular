import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-subscribe',
  templateUrl: './dialog-subscribe.component.html',
  styleUrls: ['./dialog-subscribe.component.scss']
})
export class DialogSubscribeComponent {

  constructor(private dialogRef: MatDialogRef<DialogSubscribeComponent>) {}

  closeDialog() {
    this.dialogRef.close();
  }


}
