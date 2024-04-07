import { Component } from '@angular/core';

@Component({
  selector: 'app-filterpipe',
  templateUrl: './filterpipe.component.html',
  styleUrls: ['./filterpipe.component.css']
})
export class FilterpipeComponent {
  filteredString : string = "";
  users = [
    {name: 'Rahul', joinedDate: new Date(15,2, 2023)},
    {name: 'Manish', joinedDate: new Date(19,3, 2022)},
    {name: 'Junior', joinedDate: new Date(16,4, 2025)},
    {name: 'Karan', joinedDate: new Date(18,1, 2024)},
  ]

}
