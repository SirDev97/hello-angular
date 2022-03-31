import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
})
export class AuthorsComponent implements OnInit {
  // onKeyUp($event: KeyboardEvent) {
  //   if ($event.key === 'Enter') console.log('ENTER was pressed!');
  // }

  onKeyUp() {
    console.log('ENTER was pressed!');
  }

  ngOnInit() {}
}
