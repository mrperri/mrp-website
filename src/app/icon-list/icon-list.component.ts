import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-icon-list',
  standalone: true,
  imports: [],
  templateUrl: './icon-list.component.html',
  styleUrl: './icon-list.component.scss'
})
export class IconSpanComponent {
  @Input() icons: { src: string, description: string }[] = [];
}
