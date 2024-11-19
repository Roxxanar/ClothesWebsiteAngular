import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogSubscribeComponent } from '../dialog-subscribe/dialog-subscribe.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(public dialog: MatDialog) {

  }



  openSubscribeDialog(): void {

    const token = localStorage.getItem('authToken');

    if(token!=null) {

      this.dialog.open(DialogSubscribeComponent, {
        panelClass: 'custom-dialog',
        width: '526.2px',
        height: '195px'

      });
    }
    else {

    this.dialog.open(DialogSubscribeComponent, {
      panelClass: 'custom-dialog',
      width: '526.2px',
      height: '195px'

    });

  }
  }


}
