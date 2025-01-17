import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html",
  styleUrls: ["./slider.component.css"],
})
export class SliderComponent implements OnInit {
  @Input() nombre: String;
  @Input() size: String;
  constructor() {}

  ngOnInit() {}
}
