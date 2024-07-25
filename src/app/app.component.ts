import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
  Renderer2,
  ViewChild,
  ElementRef,
  HostListener,
} from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
  state,
  AnimationEvent,
} from '@angular/animations';

import { TypewriterEffectService } from '../services/typerwritereffect.service';
import { map } from 'rxjs';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

const timing = '5s linear';

@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,

  imports: [
    CommonModule,
    NzLayoutModule,
    NzMenuModule,
    NzBreadCrumbModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    NzIconModule,
    NzSpaceModule,
    NzDropDownModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    trigger('openClose', [
      state('closed', style({ transform: 'translateY(-40%)' })),
      state('open', style({ transform: 'translateY(-4.5%)' })),
      transition('closed => open', [
        animate(
          timing,
          keyframes([
            style({ transform: 'translateY(-40%) scale(.4)', offset: 0 }), // initial
            style({ transform: 'translateY(40%) scale(.4)', offset: 0.1 }),
            style({ transform: 'translateY(-30%) scale(.5)', offset: 0.2 }), //1st
            style({ transform: 'translateY(30%) scale(.5)', offset: 0.25 }),
            style({ transform: 'translateY(-20%) scale(.6)', offset: 0.3 }), // 2nd
            style({ transform: 'translateY(20%) scale(0.6)', offset: 0.4 }),
            style({ transform: 'translateY(-15%) scale(.7) ', offset: 0.5 }), //3rd
            style({ transform: 'translateY(15%) scale(0.7)', offset: 0.6 }),
            style({ transform: 'translateY(-10%) scale(0.9) ', offset: 0.7 }), // 4th
            style({ transform: 'translateY(10%) scale(0.9)', offset: 0.8 }),
            style({ transform: 'translateY(4.5%) scale(0.95)', offset: 0.9 }),
            style({ transform: 'translateY(-4.5%) scale(1)', offset: 1 }), // last
          ])
        ),
      ]),
    ]),
  ],
})
export class AppComponent implements OnInit, AfterViewInit {
  private typewriterService = inject(TypewriterEffectService);

  protected nameState: 'open' | 'closed' = 'closed';

  @ViewChild('nameElement') nameElement: ElementRef | undefined;

  menuIsVisible = true;
  iconIsVisible = true;

  items = [
    {
      label: 'Home',
      icon: 'home',
      route: '/home',
    },
    {
      label: 'Education',
      icon: 'book',
      route: '/education',
    },
    {
      label: 'Experience',
      icon: 'build',
      route: '/experience',
    },
    {
      label: 'Projects',
      icon: 'bulb',
      route: '/projects',
    },
    {
      label: 'Contact Me',
      icon: 'phone',
      route: '/contact-me',
    },
  ];

  name$ = this.typewriterService
    .getTypewriterEffect('Mario Romildo Perri')
    .pipe(map((text) => text));

  ngOnInit() {}
  ngAfterViewInit() {
    setTimeout(() => {
      console.log('state is now open');
      this.nameState = 'open';
    }, 10);
  }
  constructor(private renderer: Renderer2) {
    this.checkWindowSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkWindowSize();
  }

  checkWindowSize() {
    const width = window.innerWidth;
    if (width <= 1280) {
      this.menuIsVisible = false;
      if (width <= 575) {
        this.iconIsVisible = false;
      } else {
        this.iconIsVisible = true;
      }
    } else {
      this.menuIsVisible = true;
      this.iconIsVisible = true;
    }
  }

  protected changeNameColor(event: AnimationEvent) {
    console.log(event);
    if (event.fromState !== 'void') {
      this.renderer.addClass(event.element, 'commented-out');
      if (this.nameElement != undefined) {
        console.log('element found');
        this.renderer.addClass(this.nameElement.nativeElement, 'commented-out');
      }
      setTimeout(() => {
        if (this.nameElement != undefined) {
          this.renderer.removeClass(
            this.nameElement.nativeElement,
            'commented-out'
          );
          this.renderer.addClass(event.element, 'hidden');
        }
      }, 3000);
    }
  }
}
