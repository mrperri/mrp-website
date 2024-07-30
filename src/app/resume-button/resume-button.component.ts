import { Component } from '@angular/core';

@Component({
  selector: 'app-resume-button',
  standalone: true,
  imports: [],
  templateUrl: './resume-button.component.html',
  styleUrl: './resume-button.component.scss'
})
export class ResumeButtonComponent {
  openInNewTab() {
    window.open('www.google.com', '_blank')?.focus();
  }
}
