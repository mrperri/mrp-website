import { Component } from '@angular/core';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { animate, keyframes, style, transition, trigger, state, AnimationEvent } from '@angular/animations';
import { NzDividerModule } from 'ng-zorro-antd/divider';


export const fadeDownAnimation = trigger('fadeDown', [
  transition(':enter', [
    style({  transform: 'translateY(-5%) scale(1)',opacity: 0 }),
    animate('800ms ease-in', style({  transform: 'translateY(0%) scale(1)',opacity: 1 })),
  ]),
]);

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NzFlexModule, NzGridModule, NzIconModule, NzDividerModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [fadeDownAnimation]
})
export class HomeComponent {

}
