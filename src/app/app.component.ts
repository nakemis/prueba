import { Component } from '@angular/core';
import { Configuracion} from './models/configuracion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'curso-angular';
  public descripcion ="es hora de aprender";
  public config; 
  public mostrar_videojuegos : boolean = true;

constructor(){
  this.config= Configuracion;
  this.title= Configuracion.titulo;
  this.descripcion =Configuracion.descripcion;
}

ocultarvideojuegos(value){
  this.mostrar_videojuegos= value;
}
 
}
