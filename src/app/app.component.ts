import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PNLC';
  cont = 0;
  palabras: boolean = false;
  nombre: boolean = false;
  tituloForm: string = 'Ingresa 5 palabras';
  tituloFormNombre: string = 'Ingresa tu nombre';
  nombreUsuario: string = "";
  auxNombre: string = "";
  seleccionada: string = "";
  letra: string = "";
  mostrar: number = 0;
  match: number = 0;
  adivinar: string = "";
  mostrarArray: string[];
  resultado: string = '';
  mensaje: string = '';
  final: boolean = false;

  usadas: string[] = [];

  palabrasArray: any = {
    palabra1: 'local',
    palabra2: 'cplex',
    palabra3: 'convexo',
    palabra4: 'maximizar',
    palabra5: 'derivadas'
  }

  guardar(forma: NgForm) {

    var arrayPalabras = [this.palabrasArray.palabra1.toUpperCase(), this.palabrasArray.palabra2.toUpperCase(), this.palabrasArray.palabra3.toUpperCase(), this.palabrasArray.palabra4.toUpperCase(), this.palabrasArray.palabra5.toUpperCase()];

    var pos = Math.floor(Math.random() * 4)

    this.palabras = true;
    if(this.cont === 1){
      this.seleccionada = arrayPalabras[0];
    }else if(this.cont === 2){
      this.seleccionada = arrayPalabras[1];
    }else if(this.cont === 3){
      this.seleccionada = arrayPalabras[2];
    }else if(this.cont === 4){
      this.seleccionada = arrayPalabras[3];
    }else if(this.cont === 5){
      this.seleccionada = arrayPalabras[4];
    }

    /*console.log(this.seleccionada);*/
    forma.reset();
  }

  usuario(forma: NgForm) {
    /*console.log(this.nombreUsuario);*/
    console.log(this.seleccionada);
    this.adivinar = '_ '.repeat(this.seleccionada.length);
    this.nombre = true;
    this.auxNombre = this.nombreUsuario;
    forma.reset();
  }

  nuevoJuego() {

    this.palabras = false;
    this.nombre = false;
    this.mensaje = "";
    this.final = false;
    this.mostrar = 0;
    this.match = 0;
    this.letra = "";
    this.usadas = [];
  }

  enviarLetra(letra) {
    let letraUp = letra.toUpperCase();
    console.log(letraUp);
    if (this.usadas.indexOf(letraUp) >= 0) {
      console.log("hola");
      this.letra = "";
      alert("repetida");
    } else {
      this.usadas.push(letraUp);
      console.log(this.usadas);
      this.verificarLetra(letraUp);
    }
  }

  verificarLetra(letra) {
    if (this.final == false) {
      if (this.seleccionada.indexOf(letra) >= 0) {
        this.match++;
      } else {
        this.mostrar++;
      }

      this.mostrarArray = this.adivinar.split(' ');
      for (let i = 0; i < this.seleccionada.length; i++) {
        if (this.seleccionada[i] === letra) {
          this.mostrarArray[i] = letra;
        }
      }
      this.adivinar = this.mostrarArray.join(' ');
      this.letra = '';
      this.ganador();
    }
  }

  ganador() {
    var aux = this.adivinar.split(' ');
    this.resultado = aux.join('');

    if (this.resultado == this.seleccionada) {
      this.mensaje = "Ganaste ".concat(this.auxNombre).concat("!");
      console.log(this.auxNombre);
      this.final = true;
    }

    if (this.mostrar > 9) {
      this.mensaje = this.auxNombre.concat(", inténtalo de nuevo!");
      this.final = true;
    }
  }

  cambio(xd){
    this.cont =  xd;
  }

}
