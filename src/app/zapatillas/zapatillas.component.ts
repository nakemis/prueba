import { Component, OnInit }from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Component ({
    selector:'zapatillas',
    templateUrl : './zapatillas.component.html'

})
export class ZapatillasComponent implements OnInit{
    public titulo: string ="Componente de Zapatillas";
    public zapatillas :Array<Zapatilla>;
    public marcas:string[];


    constructor(){
        this.marcas= new Array();
        this.zapatillas= [
            new Zapatilla("reebok classic","reebook",38,"red",true),
            new Zapatilla("nike runner","nike",88,"blue",true),
            new Zapatilla("adidas all star","adidas",70,"green",true)
        ];
    }
    ngOnInit(){
        console.log(this.zapatillas);
        this.getMarcas();
    }
    getMarcas(){
        this.zapatillas.forEach((zapatilla,index)=>{
            
           if(this.marcas.indexOf(zapatilla.marca) < 0){
            this.marcas.push(zapatilla.marca);
           }
        });
        console.log(this.marcas);
    }
}