import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
})
export class AuthorsComponent implements OnInit {
  // onKeyUp($event: Event) {
  //   console.log(
  //     'ENTER was pressed. Value is: ',
  //     ($event.target as HTMLInputElement).value
  //   );
  // }

  onKeyUp(email: HTMLInputElement) {
    console.log(email.value);
  }

  ngOnInit() {}
}
