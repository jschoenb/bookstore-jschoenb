import { Component, VERSION } from "@angular/core";

@Component({
  selector: "bs-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular KWM " + VERSION.major;
}
