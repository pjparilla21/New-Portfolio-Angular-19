import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  standalone: false,
  
template:`
<section id="resume" class="resume text-light bg-black py-16" style="margin-bottom: -100px;">
    <div class="container mx-auto px-6">
        <div class="section-title text-center mb-14">
            <h2 class="text-4xl font-bold text-white">Resume</h2>
            <p class="text-lg text-gray-400">Check My Resume</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
            <!-- Left Column: Education -->
            <div>
                <h3 class="text-2xl font-semibold text-white mb-8">Education</h3>
                <div class="resume-item border-l-4 border-gray-600 pl-8 mb-10">
                    <h4 class="text-xl font-semibold text-red-600">College</h4>
                    <h5 class="text-lg text-gray-400">2021-Present</h5>
                    <p class="text-lg text-gray-300">Bachelor of Science in Information System</p>
                    <p class="text-gray-400">Kolehiyo ng Lungsod ng Dasma - Dasma, Cavite</p>
                </div>
                <div class="resume-item border-l-4 border-gray-600 pl-8 mb-10">
                    <h4 class="text-xl font-semibold text-red-600">Senior High School</h4>
                    <h5 class="text-lg text-gray-400">2016-2018</h5>
                    <p class="text-lg text-gray-300">Senior High</p>
                    <p class="text-gray-400">New Era University Integrated School</p>
                </div>
                <div class="resume-item border-l-4 border-gray-600 pl-8 mb-10">
                    <h4 class="text-xl font-semibold text-red-600">Junior High School</h4>
                    <h5 class="text-lg text-gray-400">2012-2016</h5>
                    <p class="text-lg text-gray-300">Junior High</p>
                    <p class="text-gray-400">Bagong Silangan High School</p>
                </div>
            </div>

            <!-- Right Column: Professional Experience -->
            <div>
                <h3 class="text-2xl font-semibold text-white mb-8">Professional Experience</h3>
                <div class="resume-item border-l-4 border-gray-600 pl-8 mb-10">
                    <h4 class="text-xl font-semibold text-red-600">Freelance Web Development</h4>
                    <h5 class="text-lg text-gray-400">2021 - Present</h5>
                    <p class="text-lg text-gray-300">Work from Home</p>
                    <ul class="text-gray-400 list-disc pl-6 text-lg">
                        <li>Good at Maintainable Approach</li>
                        <li>Use Core PHP for Web Development</li>
                        <li>Fetch API / Ajax</li>
                        <li>MySQL Database - Relational Approach</li>
                    </ul>
                </div>
                <div class="resume-item border-l-4 border-gray-600 pl-8 mb-10">
                    <h4 class="text-xl font-semibold text-red-600">TESDA Computer Programming Java NCIII</h4>
                    <h5 class="text-lg text-gray-400">2022</h5>
                    <p class="text-lg text-gray-300">Malabon - Technical Education and Skills Development Authority</p>
                    <ul class="text-gray-400 list-disc pl-6 text-lg">
                        <li>Performed Object-Oriented Analysis and Design</li>
                        <li>Created a Fine-tuned Java Technology Application</li>
                        <li>Applied Quality Standards</li>
                        <li>Performed Computer Operations</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- End Resume Section -->

<!-- Footer -->
<footer class="bg-black text-white py-8">
    <div class="container mx-auto flex flex-col items-center">
      <nav class="flex space-x-8 mb-6">
        <a href="/about-me" class="text-sm font-medium hover:text-gray-400">Home</a>
        <a href="/services" class="text-sm font-medium hover:text-gray-400">Services</a>
        <a href="/about-me" class="text-sm font-medium hover:text-gray-400">About</a>
        <a href="/contact-me" class="text-sm font-medium hover:text-gray-400">Contact</a>
      </nav>
      <p class="text-xs opacity-60">© 2024 PJ Parilla. All rights reserved.</p>
    </div>
  </footer>
`,
  styleUrl: './resume.component.css'
})
export class ResumeComponent {

}
