import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var particlesJS: any; // Declare particlesJS

@Component({
  selector: 'app-services',
  standalone: false,
  template: `<div class="pol bl-content h-screen bg-black bg-center text-white font-sans" id="services">
    <div id="particles-js" class="absolute inset-0 z-0"></div>
    <div class="relative h-full w-full bg-black/80 z-10">
      <button 
        (click)="navigateToHome()" 
        class="absolute top-4 right-4 flex items-center justify-center bg-gray-700 rounded-full shadow-md hover:bg-blue-500 transition duration-300"
        style="width: 48px; height: 48px;">
        <span class="material-icons text-white text-2xl">home</span>
      </button>
      <div class="flex items-center justify-center h-full text-center px-6">
        <div class="max-w-4xl w-full">
          <h2 class="text-5xl font-extrabold mb-6 text-white opacity-90 leading-tight">Our Services</h2>
          <p class="text-lg sm:text -xl max-w-xl mx-auto mb-12 text-white opacity-75">Discover the range of services we offer to help you grow and succeed with a clean, efficient approach.</p>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <div class="service-wrap flex flex-col items-center text-center bg-gray-900/80 p-8 rounded-xl shadow-xl hover:bg-gray-700/60 transition ease-in-out duration-300">
              <i class="material-icons text-5xl mb-4 text-white">brush</i>
              <h4 class="text-xl font-semibold mb-3 text-white">Design</h4>
              <p class="main-text text-sm text-gray-300">Creative, clean, and visually stunning designs to bring your ideas to life.</p>
            </div>

            <div class="service-wrap flex flex-col items-center text-center bg-gray-900/80 p-8 rounded-xl shadow-xl hover:bg-gray-700/60 transition ease-in-out duration-300">
              <i class="material-icons text-5xl mb-4 text-white">laptop</i>
              <h4 class="text-xl font-semibold mb-3 text-white">Development</h4>
              <p class="main-text text-sm text-gray-300">Building reliable, fast, and scalable web applications for your business needs.</p>
            </div>

            <div class="service-wrap flex flex-col items-center text-center bg-gray-900/80 p-8 rounded-xl shadow-xl hover:bg-gray-700/60 transition ease-in-out duration-300">
              <i class="material-icons text-5xl mb-4 text-white">trending_up</i>
              <h4 class="text-xl font-semibold mb-3 text-white">Marketing</h4>
              <p class="main-text text-sm text-gray-300">Effective marketing strategies to grow your online presence and customer base.</p>
            </div>

            <div class="service-wrap flex flex-col items-center text-center bg-gray-900/80 p-8 rounded-xl shadow-xl hover:bg-gray-700/60 transition ease-in-out duration-300">
              <i class="material-icons text-5xl mb-4 text-white">videogame_asset</i>
              <h4 class="text-xl font-semibold mb-3 text-white">Gamification</h4>
              <p class="main-text text-sm text-gray-300">Engage and retain your audience with fun, interactive experiences and games.</p>
            </div>

            <div class="service-wrap flex flex-col items-center text-center bg-gray-900/80 p-8 rounded-xl shadow-xl hover:bg-gray-700/60 transition ease-in-out duration-300">
              <i class="material-icons text-5xl mb-4 text-white">bookmark</i>
              <h4 class="text-xl font-semibold mb-3 text-white">Branding</h4>
              <p class="main-text text-sm text-gray-300">Create a unique brand identity that resonates with your audience and stands out.</p>
            </div>

            <div class="service-wrap flex flex-col items-center text-center bg-gray-900/80 p-8 rounded-xl shadow-xl hover:bg-gray-700/60 transition ease-in-out duration-300">
              <i class="material-icons text-5xl mb-4 text-white">support_agent</i>
              <h4 class="text-xl font-semibold mb-3 text-white">Support</h4>
              <p class="main-text text-sm text-gray-300">Reliable customer support to resolve your issues swiftly and effectively.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <footer class="bg-black text-white py-8">
    <div class="container mx-auto flex flex-col items-center">
      <nav class="flex space-x-8 mb-6">
        <a href="/about-me" class="text-sm font-medium hover:text-gray-400">Home</a>
        <a href="/services" class="text-sm font-medium hover:text-gray-400">Services</a>
        <a href="/resume" class="text-sm font-medium hover:text-gray-400">Resume</a>
        <a href="/contact-me" class="text-sm font-medium hover:text-gray-400">Contact</a>
      </nav>
      <p class="text-xs opacity-60">© 2024 PJ Parilla. All rights reserved.</p>
    </div>
  </footer>

  <script>// src/assets/particles-config.js
{
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}</script>
`,
styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit (): void {
    this.loadParticles();
  }

  // Load particles.js
  private loadParticles(): void {
    particlesJS.load('particles-js', 'assets/particles-config.js', () => {
      console.log('callback - particles.js config loaded');
    });
  }

  // Navigate to Home page (called by back button)
  navigateToHome(): void {
    this.router.navigate(['/home']);
  }
}