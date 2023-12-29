import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frist-component',
  templateUrl: './frist-component.component.html',
  styleUrls: ['./frist-component.component.css']
})
export class FristComponentComponent implements OnInit {
name: string = 'Priscila';

constructor(){}

ngOnInit(): void{}

}
