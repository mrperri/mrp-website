import { Component } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from "@angular/router";
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';




@Component({
  selector: 'app-site-layout',
  standalone: true,
  imports: [CommonModule, NzLayoutModule, NzMenuModule, NzBreadCrumbModule, RouterOutlet, RouterLink, RouterLinkActive,NzIconModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class SiteLayoutComponent {

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
