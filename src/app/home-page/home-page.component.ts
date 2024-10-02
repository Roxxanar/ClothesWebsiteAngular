import { Component } from '@angular/core';
import { AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent implements AfterViewInit {

  itemWidth: number = 400;  // Change this according to the actual image width
  padding: number = 200;    // Adjust this value as needed
  sum: number = this.itemWidth + this.padding;

  // This lifecycle hook ensures the DOM is fully initialized
  ngAfterViewInit(): void {
    const prev = document.getElementById('prev-btn');
    const next = document.getElementById('next-btn');
    const list = document.getElementById('item-list');

    if (prev && next && list) {
      // Add event listeners only if elements are found
      prev.addEventListener('click', () => {
        list.scrollLeft = list.scrollLeft - this.sum;
      });

      next.addEventListener('click', () => {
        list.scrollLeft = list.scrollLeft + this.sum;
      });
    } else {
      console.error('One or more elements were not found in the DOM');
    }
  }

}

