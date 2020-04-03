import { Observable } from "rxjs";
import { ModeService } from "./../mode.service";
import { Mode } from "./../mode";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-mode-list",
  templateUrl: "./mode-list.component.html",
  styleUrls: ["./mode-list.component.css"]
})
export class ModeListComponent implements OnInit {
  mode: Observable<Mode[]>;

  constructor(private modeService: ModeService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData1();
  }

  reloadData1() {
    this.mode = this.modeService.getModeList();
  }
}
