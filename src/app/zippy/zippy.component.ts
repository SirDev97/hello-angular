import { Component, Input } from '@angular/core';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css'],
})
export class ZippyComponent {
  @Input('title') title!: string;
  isExpanded!: boolean;
  chevronUp = faChevronUp;
  chevronDown = faChevronDown;

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
