import { Component } from '@angular/core';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzWaterMarkComponent } from 'ng-zorro-antd/water-mark';
import { FontType } from 'ng-zorro-antd/water-mark';






@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [NzFlexModule, NzGridModule, NzIconModule, NzWaterMarkComponent],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {

  font: FontType = {
    color: 'rgba(25, 25, 156, 0.40)',
    fontSize: 16
  };
  waterMarkContent: String = "724-991-5214"

}
