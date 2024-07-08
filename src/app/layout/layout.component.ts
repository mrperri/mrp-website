import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterOutlet, RouterLink, RouterLinkActive } from "@angular/router";
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-site-layout',
  standalone: true,
  
  imports: [

    CommonModule, 
    NzLayoutModule, 
    NzMenuModule, 
    NzBreadCrumbModule, 
    RouterOutlet, 
    RouterLink, 
    RouterLinkActive,
    NzIconModule, 
    NzSpaceModule ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  animations: [
    trigger('openClose',[
      state('closed', style({ transform: 'translateY(-70%)' })),
      state('open', style({ transform: 'translateX(0)' })),
      transition('closed => open', [animate('2s ease-in')])
    ])
  ]
})
export class SiteLayoutComponent implements OnInit, AfterViewInit{

  protected nameState: 'open' | 'closed' = 'closed';

  ngOnInit() {

  }
  ngAfterViewInit() {
      this.nameState ='open'
  }

  items = [
		{
			label: "Home",
			icon: "home",
			route: "/home",
		},
		{
			label: "Education",
      icon: "book",
			route: "/education",
		},
		{
			label: "Experience",
      icon: "build",
			route: "/experience",
		},
    {
			label: "Projects",
      icon: "bulb",
			route: "/projects",
		},
    {
			label: "Contact Me",
      icon: "phone",
			route: "/contact-me",
		}
	];

}
