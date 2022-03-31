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

  email = 'angular@mail.com';

  onKeyUp() {
    console.log(this.email);
  }

  ngOnInit() {}
}
