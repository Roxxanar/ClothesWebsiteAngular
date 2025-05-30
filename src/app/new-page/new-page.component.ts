import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { NewService } from './new.service';
import { HostListener } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { DialogFormComponent } from '../dialog-form/dialog-form.component';
import { DialogBagComponent } from '../dialog-bag/dialog-bag.component';
import { DialogLoggedComponent } from '../dialog-logged/dialog-logged.component';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styleUrls: ['./new-page.component.scss']
})
export class NewPageComponent implements OnInit {

  newItems: any[] = [];  // Original full list of items
  filteredItems: any[] = [];  // Filtered list based on search
  displayedGroups: any[][] = []; // Contains groups of items, each group is an array of items
  itemsPerLoad = 9;
  currentIndex = 0;
  token: string = '';

  searchTerm: string = ''; // Holds the user's search input

  constructor(private newService: NewService, public dialog: MatDialog, private router: Router, private authService: AuthService) {
    console.log('NewPageComponent initialized');
  }

  ngOnInit() {
    console.log('ngOnInit called');


    this.authService.getUser().then(user => {
      if (user) {
        const email = user.email;
        if (email) {
          console.log('User email from Supabase:', email);

          //this.router.navigate(['new-page']);

          // Send email to backend
          this.authService.sendGoogleUser(email);

        } else {
          console.error('Email not found in Supabase user object.');
        }
      }
    }).catch(error => {
      console.error('Eroare la obținerea utilizatorului:', error);
    });





    this.updateItemsPerLoad();

    this.newService.getNew().subscribe(data => {
      this.newItems = data;
      this.filteredItems = this.newItems;  // Initially, show all items

      this.shuffleItems();
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

  shuffleItems() {
    this.filteredItems = this.newItems
      .map(item => ({ item, sort: Math.random() })) // Create a random sort value
      .sort((a, b) => a.sort - b.sort) // Sort based on the random value
      .map(({ item }) => item); // Return the original items only
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
console.log(this.filteredItems);


    // If the search term is empty, reset to show all items
    if (this.searchTerm === '') {
      this.filteredItems = this.newItems;
    } else {
      // Otherwise, filter the items
      this.filteredItems = this.newItems.filter(item => {
        const clothingName = item.ClothingName ? item.ClothingName.trim().toLowerCase() : '';
        const shoesName = item.ShoesName ? item.ShoesName.trim().toLowerCase() : '';
        const bagsName = item.BagsName ? item.BagsName.trim().toLowerCase() : '';
        const accessoriesName = item.AccessoriesName ? item.AccessoriesName.trim().toLowerCase() : '';

        const searchTerm = this.searchTerm.toLowerCase();

        // Check if the search term matches any of the names
        return clothingName.includes(searchTerm) ||
               shoesName.includes(searchTerm) ||
               bagsName.includes(searchTerm) ||
               accessoriesName.includes(searchTerm);

      });
    }

    // Reset displayed groups and re-load filtered items
    this.resetDisplayedGroups();
  }


  openDialog(): void {

    var token = localStorage.getItem('authToken');
    if(token===null)
      {
      token = localStorage.getItem('sb-zyldhfgomockanyaptwi-auth-token');
      }

    if(token!=null) {

      this.dialog.open(DialogLoggedComponent, {
        width: '503.2px',

      });
    }
    else {

    this.dialog.open(DialogFormComponent, {
      width: '503.2px',

    });

  }
  }

  openBag(): void {

    var token = localStorage.getItem('authToken');
    if(token===null)
      {
      token = localStorage.getItem('sb-zyldhfgomockanyaptwi-auth-token');
      }

    if(token!=null) {

      this.dialog.open(DialogBagComponent, {
        width: '503.2px',

      });
    }
    else {

    this.dialog.open(DialogFormComponent, {
      width: '503.2px',

    });

  }



  }



}



