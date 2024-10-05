import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ClothingService } from './clothing.service';

@Component({
  selector: 'app-clothing-page',
  templateUrl: './clothing-page.component.html',
  styleUrls: ['./clothing-page.component.scss']
})
export class ClothingPageComponent implements OnInit {
  clothingItems: any[] = [];

  constructor(private clothingService: ClothingService) {
    console.log('ClothingPageComponent initialized');
  }

  ngOnInit() {
    console.log('ngOnInit called');
    this.clothingService.getClothing().subscribe(data => {
      this.clothingItems = data;
    });
  }
}
