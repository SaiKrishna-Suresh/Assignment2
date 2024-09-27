import { Component } from '@angular/core';

import { Players } from '../Shared/Models/Players';

@Component({
  selector: 'app-player-list',
  templateUrl: './content-list.component.html',
  standalone: true,
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent {
  chosenContent = 'Player';
  contentItems: Players[] = [
    { rank: 1, firstName: "Virat", lastName: "Kohli", country: "India", average: 55 },
    { rank: 2, firstName: "Steve", lastName: "Smith", country: "Australia", average: 49 }
    // More items here
  ];


}
