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
  displayedGroups: any[][] = []; // Contains groups of items, each group is an array of 9 items
  itemsPerLoad = 9;
  currentIndex = 0;

  constructor(private clothingService: ClothingService) {
    console.log('ClothingPageComponent initialized');
  }

  ngOnInit() {
    console.log('ngOnInit called');
    this.clothingService.getClothing().subscribe(data => {
      this.clothingItems = data;

      this.loadMoreItems(); // Load the first batch initially
    });
  }

  loadMoreItems() {
    const nextItems = this.clothingItems.slice(this.currentIndex, this.currentIndex + this.itemsPerLoad);
    this.displayedGroups.push(nextItems); // Push a new group
    this.currentIndex = this.currentIndex + this.itemsPerLoad; // Update the index for the next load

    console.log(this.currentIndex);
    console.log(nextItems);


  }


}
