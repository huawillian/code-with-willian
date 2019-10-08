import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { LoaderService, LoaderAction } from "./services/loader.service";
import {
  trigger,
  style,
  state,
  transition,
  animate,
  sequence,
  query,
  group
} from "@angular/animations";

@Component({
  selector: "app-loader",
  templateUrl: "./loader.component.html",
  styleUrls: ["./loader.component.scss"],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger("fadeAnimation", [
      state(
        "false",
        style({
          opacity: 1
        })
      ),
      state(
        "true",
        style({
          opacity: 0.98
        })
      ),
      transition("void => false", [
        style({
          opacity: 1
        })
      ]),
      transition(":enter", [
        style({
          opacity: 0
        }),
        animate(100)
      ]),
      transition(":leave", [
        sequence([
          animate(
            300,
            style({
              opacity: "*"
            })
          ),
          animate(
            700,
            style({
              opacity: 0
            })
          )
        ])
      ])
    ])
  ]
})
export class LoaderComponent implements OnInit {
  smil = false;
  hide = false;
  init = false;

  constructor(private loaderService: LoaderService) {}

  ngOnInit(): void {
    this.smil = window["Modernizr"].smil;

    this.loaderService.updates.subscribe(action => {
      switch (action) {
        case LoaderAction.Show:
          this.showLoader();
          break;
        case LoaderAction.Hide:
          this.hideLoader();
          break;
        default:
          this.hideLoader();
          break;
      }
    });
  }

  public hideLoader() {
    if (this.init) {
      this.hide = true;
      this.toggleScrollLock(false);
    }
  }

  public showLoader() {
    this.init = window.sessionStorage.getItem("hideSplash") ? true : false;

    if (this.init) {
      this.hide = false;
    } else {
      this.hide = false;

      if (this.smil) {
        setTimeout(() => {
          this.init = true;
          this.hideLoader();
          window.sessionStorage.setItem("hideSplash", "true");
        }, 4300);
      } else {
        this.init = true;
        this.hideLoader();
        window.sessionStorage.setItem("hideSplash", "true");
      }
    }
  }

  public toggleScrollLock(lock?: boolean) {
    if (lock !== undefined) {
      if (lock) {
        document.body.classList.remove("loaded");
      } else {
        document.body.classList.add("loaded");
      }
    } else {
      document.body.classList.toggle("loaded");
    }
  }
}
