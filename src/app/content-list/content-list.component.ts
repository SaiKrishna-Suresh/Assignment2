import { Component } from '@angular/core';

import { Players } from '../Shared/Models/Players';
import {ContentListItemComponent} from "../content-list-item/content-list-item.component";

@Component({
  selector: 'app-player-list',
  templateUrl: './content-list.component.html',
  standalone: true,
  imports: [
    ContentListItemComponent
  ],
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent {

  player: Players[] = [
    { rank: 1, firstName: "Virat", lastName: "Kohli", country: "India", average: 55 },
    { rank: 2, firstName: "Steve", lastName: "Smith", country: "Australia", average: 49 },
    { rank: 3, firstName: 'Rohit', lastName: 'Sharma', country: 'India', average: 45 },
    { rank: 4, firstName: 'Joe', lastName: 'Root', country: 'England', average: 44.3 },
    { rank: 5, firstName: 'Kane', lastName: 'Williamson', country: 'New Zealand', average: 42.2 }
    // More items here
  ];


}
