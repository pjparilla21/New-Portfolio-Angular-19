import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { HomeComponent } from './home/home.component';  // Import your HomeComponent
import { ServicesComponent } from './services/services.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  { path: 'about-me', component: AboutMeComponent },
  { path: 'contact-me', component: ContactMeComponent },
  { path: 'home', component: HomeComponent },  // Define the /home route
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route if no path is given
  { path: 'services', component: ServicesComponent }, // Corrected the path here
  { path: 'resume', component: ResumeComponent }  // Corrected the path here

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Import the routing configuration
  exports: [RouterModule],  // Export the routing module for use in the application
})
export class AppRoutingModule {}
