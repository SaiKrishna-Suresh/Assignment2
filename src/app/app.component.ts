import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Players} from "./Shared/Models/Players";
import {JsonPipe, NgForOf} from "@angular/common";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls:[ './app.component.css']
})
export class AppComponent {
  title = 'Assignment2';
  player1:Players []=[{rank:1,firstName:"Virat",lastName:"kohli",country:"India",average:55},
  {rank:2,firstName:"Steve",lastName:"Smith",country:"Australia",average:49}];

}
