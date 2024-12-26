import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-me',
  standalone: false,
  template: `
    <section class="bg-gradient-to-r from-black via-gray-900 to-black text-[#add8e6] py-16">
    <button (click)="navigateToHome()" class="p-4 bg-gray-700 text-white rounded-full shadow-lg hover:bg-blue-600"
      style="position: absolute; right: 2rem; top: 2rem; display: flex; align-items: center; justify-content: center; width: 50px; height: 50px; padding: 0;">
      <span class="material-icons" style="font-size: 30px;">
        home
      </span>
    </button>
    <div class="container mx-auto px-6 md:px-12 lg:px-20">
      <h1 class="text-4xl md:text-5xl font-extrabold text-center mb-8 text-white bg-clip-text bg-gradient-to-r from-indigo-500 to-teal-500">
        Contact
      </h1>
      <p class="text-center text-gray-300 mb-12 text-lg">
        We'd love to hear from you! Fill out the form below or reach out directly.
      </p>
  
      <!-- Alert Messages -->
      <div id="alert-container" class="hidden max-w-3xl mx-auto mb-6"></div>
  
      <div class="max-w-3xl mx-auto bg-gray-900 rounded-lg shadow-xl p-8">
        <div class="flex justify-center mb-6">
          <span class="material-icons text-white-600 text-6xl">
            mail_outline
          </span>
        </div>
  
        <!-- Contact Form -->
        <form id="my-form" action="https://formspree.io/f/mzzbnero" method="POST">
          <!-- Email -->
          <div class="mb-6">
            <label for="email" class="block text-sm font-medium text-gray-300 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              class="w-full border border-gray-700 rounded-lg px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500 bg-gray-800 text-gray-200 placeholder-gray-500"
              placeholder="Enter your email"
              required
            />
          </div>
  
          <!-- Message -->
          <div class="mb-6">
            <label for="message" class="block text-sm font-medium text-gray-300 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              class="w-full border border-gray-700 rounded-lg px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500 bg-gray-800 text-gray-200 placeholder-gray-500"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
  
          <!-- Submit Button -->
          <div class="text-center">
            <button
              type="submit"
              id="my-form-button"
              class="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
  
  <!-- Your Contact Me content here -->
  <router-outlet></router-outlet>
`,
  styleUrl: './contact-me.component.css'
})
export class ContactMeComponent {

  constructor(private router: Router) {}
// Navigate to Home page (called by back button)
navigateToHome(): void {
  this.router.navigate(['/home']);
}
}