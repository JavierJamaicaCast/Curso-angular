import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-formulario",
  templateUrl: "./formulario.component.html",
  styleUrls: ["./formulario.component.css"],
})
export class FormularioComponent implements OnInit {
  public user: any;
  public campo: String;

  constructor() {
    this.user = {
      nombre: "",
      apellidos: "",
      bio: "",
      genero: "",
    };
  }

  ngOnInit() {}
  onSubmit() {
    alert("Formulario enviado!");
  }
  hasDadoClick() {
    alert("Has dado click!");
  }
  hasSalido() {
    alert("Has salido del input");
  }
  keyUp() {
    alert("Has pulsado enter");
  }
}
