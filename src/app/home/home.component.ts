import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  standalone: false,
  template: `
    <div class="swipe-content" style="overflow: hidden;" [ngClass]="{'swipe-left': currentSwipeState == 'swipeLeft', 'swipe-right': currentSwipeState == 'swipeRight'}">
    <div class="flex h-screen" style="overflow: hidden;">
      <!-- About Me Section -->
      <div class="pol sam1 w-full sm:w-1/2 flex justify-center items-center"
           style="width: 760px; overflow: hidden;">
        <button mat-button (click)="navigateToAboutMe()">
          About Me
        </button>
      </div>
      <!-- Contact Me Section -->
      <div class="sam2 w-full sm:w-1/2 flex justify-center items-center"
           style="background-color: black; width: 760px; overflow: hidden;">
        <h1 class="typing-text" style="color: whitesmoke;"><strong>Paul Jhon Pitogo</strong></h1>
        <button mat-button (click)="navigateToContactMe()">
          Contact Me
        </button>
      </div>
    </div>
  </div>
  
  <style>
  /* Mobile-Responsive Styling */
  @media screen and (max-width: 640px) {
    .flex {
      flex-direction: column; /* Stack the sections vertically */
      height: auto; /* Adjust height for better mobile fit */
    }
    .pol,
    .sam2 {
      width: 100%; /* Full width for mobile view */
      height: 55vh; /* Each section takes half the screen height */
      overflow-x: hidden; /* Prevent content overflow */
    }
    .pol button,
    .sam2 button {
      font-size: 1rem; /* Adjust button font size */
      padding: 0.5rem 1rem; /* Add padding for touch-friendly buttons */
      border-radius: 8px; /* Rounded button corners */
    }
    .typing-text {
      font-size: 1.25rem; /* Adjust text size for mobile readability */
      text-align: center; /* Center align text for aesthetics */
    }
  }
  </style>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  showNavigationButtons = true;
  currentSwipeState: 'swipeLeft' | 'swipeRight' | '' = '';

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(event => {
        this.showNavigationButtons = event.urlAfterRedirects !== '/about-me' && event.urlAfterRedirects !== '/contact-me';
      });
  }

  navigateToAboutMe() {
    this.currentSwipeState = 'swipeRight';
    this.performNavigation('/about-me');
  }

  navigateToContactMe() {
    this.currentSwipeState = 'swipeLeft';
    this.performNavigation('/contact-me');
  }

  private performNavigation(route: string) {
    // Wait for the animation to complete before navigating
    setTimeout(() => {
      this.router.navigate([route]);
      this.currentSwipeState = ''; // Reset the swipe state
    }, 300); // Match the duration of the animation
  }
}