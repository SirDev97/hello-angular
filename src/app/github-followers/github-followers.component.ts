import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubFollowersService } from '../github-followers.service';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css'],
})
export class GithubFollowersComponent implements OnInit {
  followers: any = [];

  constructor(
    private service: GithubFollowersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {});

    this.route.queryParamMap.subscribe((params) => {});

    // let id = this.route.snapshot.paramMap.get('id');
    // this.route.queryParamMap.subscribe();
    // let page = this.route.snapshot.queryParamMap.get('page');

    this.service
      .getAll()
      .subscribe((followers) => (this.followers = followers));
  }
}
