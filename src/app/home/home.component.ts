import { Component } from '@angular/core';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { animate, keyframes, style, transition, trigger, state, AnimationEvent } from '@angular/animations';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { DividerComponent } from '../divider/divider.component';
import { IconSpanComponent } from "../icon-list/icon-list.component";



export const fadeDownAnimation = trigger('fadeDown', [
  transition(':enter', [
    style({  transform: 'translateY(-5%) scale(1)',opacity: 0 }),
    animate('1200ms ease-in', style({  transform: 'translateY(0%) scale(1)',opacity: 1 })),
  ]),
]);

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DividerComponent, NzFlexModule, NzGridModule, NzIconModule, NzDividerModule, IconSpanComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [fadeDownAnimation]
})
export class HomeComponent {
  frontendDevItems = ["ab", "aofkpaofkap", "word here"]

  frontendDevIcons = [
    { src: '../../assets/images/spring-icon.png', description: 'Spring' },
    { src: '../../assets/images/java-icon.png', description: 'Java' }
  ];

  backendDevIcons = [
    { src: '../../assets/images/spring-icon.png', description: 'Spring' },
    { src: '../../assets/images/java-icon.png', description: 'Java' }
  ];

  otherTechIcons  = [
    { src: '../../assets/images/spring-icon.png', description: 'Spring' },
    { src: '../../assets/images/java-icon.png', description: 'Java' }
  ];
}
