import { Routes } from '@angular/router';
import { SiteLayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { EducationComponent } from './education/education.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: HomeComponent },
  { path: 'education', component: EducationComponent },
  { path: 'experience', component: EducationComponent },  //TODO change component
  { path: 'contact-me', component: EducationComponent },  //TODO change component
  { path: '**', pathMatch: 'full', redirectTo: ''}
];
