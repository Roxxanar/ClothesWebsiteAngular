import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-bag',
  templateUrl: './dialog-bag.component.html',
  styleUrls: ['./dialog-bag.component.scss']
})
export class DialogBagComponent {

  constructor(private dialogRef: MatDialogRef<DialogBagComponent>) {}

  closeDialogLogOut() {
    this.dialogRef.close();
  }

}
