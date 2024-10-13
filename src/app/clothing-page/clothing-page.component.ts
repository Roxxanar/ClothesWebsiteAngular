import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ClothingService } from './clothing.service';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-clothing-page',
  templateUrl: './clothing-page.component.html',
  styleUrls: ['./clothing-page.component.scss']
})
export class ClothingPageComponent implements OnInit {

  clothingItems: any[] = [];  // Original full list of items
  filteredItems: any[] = [];  // Filtered list based on search
  displayedGroups: any[][] = []; // Contains groups of items, each group is an array of items
  itemsPerLoad = 9;
  currentIndex = 0;

  searchTerm: string = ''; // Holds the user's search input

  constructor(private clothingService: ClothingService) {
    console.log('ClothingPageComponent initialized');
  }

  ngOnInit() {
    console.log('ngOnInit called');

    this.updateItemsPerLoad();

    this.clothingService.getClothing().subscribe(data => {
      this.clothingItems = data;
      this.filteredItems = this.clothingItems;  // Initially, show all items

      this.loadMoreItems(); // Load the first batch initially
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.updateItemsPerLoad(); // Update itemsPerLoad based on the current screen size
    this.resetDisplayedGroups(); // Recalculate displayed items
  }

  updateItemsPerLoad() {
    const screenWidth = window.innerWidth;

    // Set the number of items based on screen width
    if (screenWidth > 700 && screenWidth < 1100) {
      this.itemsPerLoad = 10; // Load 10 items
    } else {
      this.itemsPerLoad = 9;  // Load 9 items
    }
  }

  resetDisplayedGroups() {
    // Reset the displayedGroups and recalculate based on new itemsPerLoad
    this.currentIndex = 0;
    this.displayedGroups = [];
    this.loadMoreItems();
  }

  loadMoreItems() {
    // Only operate on the filtered list of items (based on search)
    const nextItems = this.filteredItems.slice(this.currentIndex, this.currentIndex + this.itemsPerLoad);
    this.displayedGroups.push(nextItems); // Push a new group
    this.currentIndex = this.currentIndex + this.itemsPerLoad; // Update the index for the next load
  }

  // Method to handle the search input change
  onSearchChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchTerm = input.value.trim(); // Update the search term

    // If the search term is empty, reset to show all items
    if (this.searchTerm === '') {
      this.filteredItems = this.clothingItems;
    } else {
      // Otherwise, filter the items
      this.filteredItems = this.clothingItems.filter(item =>
        item.Name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }

    // Reset displayed groups and re-load filtered items
    this.resetDisplayedGroups();
  }
}
