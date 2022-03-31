import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
})
export class AuthorsComponent implements OnInit {
  text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste non deserunt minima assumenda explicabo hic provident labore eligendi nesciunt. Itaque harum in iusto non provident officia rerum odit nemo cum impedit tenetur sapiente, nobis totam tempora exercitationem pariatur facere eveniet quas repellendus perspiciatis dolorem, voluptatem vitae nostrum. At, ipsam nulla.`;
  ngOnInit() {}
}
