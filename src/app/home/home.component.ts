import { Component } from '@angular/core';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { animate, keyframes, style, transition, trigger, state, AnimationEvent } from '@angular/animations';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { DividerComponent } from '../divider/divider.component';
import { IconSpanComponent } from "../icon-list/icon-list.component";
import { ResumeButtonComponent } from "../resume-button/resume-button.component";

export const fadeDownAnimation = trigger('fadeDown', [
  transition(':enter', [
    style({  transform: 'translateY(-5%) scale(1)',opacity: 0 }),
    animate('1200ms ease-in', style({  transform: 'translateY(0%) scale(1)',opacity: 1 })),
  ]),
]);

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DividerComponent, NzFlexModule, NzGridModule, NzIconModule, NzDividerModule, IconSpanComponent, ResumeButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [fadeDownAnimation]
})
export class HomeComponent {
  frontendDevItems = ["ab", "aofkpaofkap", "word here"]

  frontendDevIcons = [
    { src: '../../assets/images/angular-icon.png', description: 'Angular' },
    { src: '../../assets/images/css3-icon.png', description: 'CSS3' },
    { src: '../../assets/images/html5-icon.png', description: 'HTML5' },
    { src: '../../assets/images/javascript-icon.png', description: 'Javascipt' },
    { src: '../../assets/images/typescript-icon.png', description: 'Typescript' }
  ];

  backendDevIcons = [
    { src: '../../assets/images/groovy-icon.png', description: 'Groovy' },
    { src: '../../assets/images/java-icon.png', description: 'Java' },
    { src: '../../assets/images/redis-icon.png', description: 'Redis' },
    { src: '../../assets/images/spring-icon.png', description: 'Spring' },
    { src: '../../assets/images/sqldeveloper-icon.png', description: 'SQL' }
  ];

  otherTechIcons  = [
    { src: '../../assets/images/dynatrace-icon.png', description: 'Dynatrace' },
    { src: '../../assets/images/git-icon.png', description: 'Git' },
    { src: '../../assets/images/gradle-icon.png', description: 'Gradle' },
    { src: '../../assets/images/jenkins-icon.png', description: 'Jenkins' },
    { src: '../../assets/images/ping-icon.png', description: 'Ping' },
    { src: '../../assets/images/openshift-icon.png', description: 'Openshift' }  ];
}
