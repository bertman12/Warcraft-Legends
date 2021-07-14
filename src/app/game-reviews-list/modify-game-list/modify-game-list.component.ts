import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-modify-game-list',
  templateUrl: './modify-game-list.component.html',
  styleUrls: ['./modify-game-list.component.css']
})
export class ModifyGameListComponent implements OnInit {

  constructor() { }

  game = new FormControl('');
  ngOnInit(): void {
  }


}
