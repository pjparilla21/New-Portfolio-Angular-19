import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-about-me',
  standalone: false,
 template: `
 <div class="pol bl-content h-screen bg-cover bg-center text-white font-sans" id="about-me" >
 <!-- Overlay -->
 <div class="relative h-full w-full bg-black/50">
   <!-- Top-right Home Button -->
   <button 
     (click)="navigateToHome()" 
     class="absolute top-4 right-4 flex items-center justify-center bg-gray-700 rounded-full shadow-md hover:bg-blue-500 transition duration-300"
     style="width: 48px; height: 48px;">
     <span class="material-icons text-white text-2xl">
       home
     </span>
   </button>

   <!-- Center Content -->
   <div class="flex flex-col justify-center items-center h-full text-center">
     <!-- Title -->
     <h1 class="text-4xl font-extrabold tracking-wide drop-shadow-lg">Paul Jhon Pitogo Parilla</h1>
     <!-- Subtitle -->
     <p class="mt-2 text-lg font-light opacity-90">Software Engineer</p>

     <!-- Social Media Icons -->
     <div class="flex space-x-8 mt-8">
       <!-- Facebook -->
    <!-- Font Awesome Icons -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">

<!-- Facebook -->
<a href="https://facebook.com" target="_blank" class="p-3 bg-gray-700 rounded-full shadow-md hover:bg-blue-500 transition duration-300">
 <i class="fab fa-facebook-f text-white text-2xl"></i>
</a>

<!-- LinkedIn -->
<a href="https://linkedin.com" target="_blank" class="p-3 bg-gray-700 rounded-full shadow-md hover:bg-blue-700 transition duration-300">
 <i class="fab fa-linkedin-in text-white text-2xl"></i>
</a>

<!-- GitHub -->
<a href="https://github.com" target="_blank" class="p-3 bg-gray-700 rounded-full shadow-md hover:bg-gray-800 transition duration-300">
 <i class="fab fa-github text-white text-2xl"></i>
</a>

<!-- Gmail -->
<a href="mailto:example@gmail.com" target="_blank" class="p-3 bg-gray-700 rounded-full shadow-md hover:bg-red-500 transition duration-300">
 <i class="fas fa-envelope text-white text-2xl"></i>
</a>

     </div>
   </div>
 </div>
</div>

<footer class="bg-black text-white py-6">
 <div class="container mx-auto flex flex-col items-center">
   <nav class="flex space-x-6">
     <a href="about-me" class="text-sm font-medium hover:text-gray-400">Home</a>
     <a href="/services" class="text-sm font-medium hover:text-gray-400">Services</a>
     <a href="/resume" class="text-sm font-medium hover:text-gray-400">Resume</a>
     <a href="#" class="text-sm font-medium hover:text-gray-400">Contact</a>
   </nav>
   <p class="mt-4 text-xs text-white-500">© 2024 PJ Parilla. All rights reserved.</p>
 </div>
</footer>
 <!-- Your About Me content here -->
 <router-outlet></router-outlet>
 `,
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {

  constructor(private router: Router) {}
// Navigate to Home page (called by back button)
navigateToHome(): void {
  this.router.navigate(['/home']);
}


}