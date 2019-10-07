import { Router } from "@angular/router";
import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { IndexService } from "../index.service";
import { NavService } from "./../../../services/nav.service";

@Component({
  selector: "app-crumb",
  templateUrl: "./crumb.component.html",
  encapsulation: ViewEncapsulation.None
})
export class CrumbComponent implements OnInit {
  constructor(
    public indexService: IndexService,
    public router: Router,
    public nav: NavService
  ) {}

  ngOnInit() {}

  reload() {
    let url = this.nav.getUrl(this.router.url);
    url.param.timestamp = new Date().getTime();
    this.router.navigate([url.path, url.param]);
  }

  back() {}

  forward() {}
}