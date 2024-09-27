import { Component, Input } from '@angular/core';
import { Players } from '../Shared/Models/Players';
import { NgIf, NgForOf } from '@angular/common';

@Component({
  selector: 'app-player-list-item',
  templateUrl: './content-list-item.component.html',
  standalone: true,
  imports: [NgIf, NgForOf],
  styleUrls: ['./content-list-item.component.css']
})
export class ContentListItemComponent {
  @Input() content?: Players;


}
