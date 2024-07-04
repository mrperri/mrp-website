import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SiteLayoutComponent } from './layout/layout.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, SiteLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mrp-website';
}
