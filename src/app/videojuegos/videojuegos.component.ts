import { Component,OnInit, DoCheck,OnDestroy } from "@angular/core";

@Component({
  selector:"videojuegos",
  templateUrl:"./Videojuego.component.html"
})
export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy{
  public titulo : string;
  public listado: string;
constructor(){
  this.titulo = "Componentes de videojuegos";
  this.listado ="Listado de los personajes mas populares";
  //console.log("se ha cargado el component de videouego");
}
ngOnInit(){
 // console.log("OnInit ejecutado");
}
ngDoCheck(){
  //console.log("docheck ejecutado");
}
ngOnDestroy(){
  //console.log("destroy ejecutado");
}
CambiarTitulo(){
  this.titulo= " nuevo titulo del componente";
}
}
