import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
})
export class AuthorsComponent implements OnInit {
  authors;
  isActive = false;

  onDivClick() {
    console.log('div was clicked! This is event bubbling');
  }

  onSave($event: Event) {
    $event.stopPropagation(); // This stops event bubbling!

    console.log('button was clicked!', $event);
  }

  constructor(service: AuthorsService) {
    this.authors = service.getAuthors();
  }

  ngOnInit(): void {}
}
