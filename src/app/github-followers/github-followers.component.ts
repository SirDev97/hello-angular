import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubFollowersService } from '../github-followers.service';
import { Observable, combineLatest } from 'rxjs';

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
    combineLatest([this.route.paramMap, this.route.queryParamMap]).subscribe(
      (combined) => {
        let id = combined[0].get('id');
        let page = combined[1].get('page');

        this.service
          .getAll()
          .subscribe((followers) => (this.followers = followers));

        // this.service.getAll({id: id, page: page})
      }
    );

    // this.route.paramMap.subscribe((params) => {});
    // this.route.queryParamMap.subscribe((params) => {});

    // let id = this.route.snapshot.paramMap.get('id');
    // this.route.queryParamMap.subscribe();
    // let page = this.route.snapshot.queryParamMap.get('page');
  }
}
