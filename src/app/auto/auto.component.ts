import { Observable } from "rxjs";
import { AutoService } from "./../auto.service";
import { Auto } from "./../auto";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-auto-list",
  templateUrl: "./auto.component.html",
  styleUrls: ["./auto.component.css"]
})
export class AutoComponent implements OnInit {
  auto: Observable<Auto[]>;

  constructor(private autoService: AutoService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData2();
  }

  reloadData2() {
    this.auto = this.autoService.getAuto();
  }
}
