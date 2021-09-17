class Persona {
    public nombre : string;
    public apellido : string;
    public edad : number;

    constructor(nombre: string, apellido : string, edad : number)
    {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }


    public mostrar ()
    {
        console.log("nombre:" + this.nombre);
        console.log("apellido:" + this.apellido);
        console.log("edad:" + this.edad);
    }
}

let persona = new Persona("Eduarod","Correa", 29);

//persona.nombre = "emmanuel";
//persona.apellido = "urdaneta";
//persona.edad = 28;
persona.mostrar();


let otrapersona = new Persona("Nazareth","Bermudez",28);

//otrapersona.nombre = "Marieys";
//otrapersona.apellido = "rengifo";
//otrapersona.edad = 29;
otrapersona.mostrar();






////////////////////////////////////
////////////////////////////////////
////////////////////////////////////



class serVivo{
    //public especie : string;

    constructor (protected especie: string){

        //this.especie = especie;

    }

    public mostrar() : void {
        console.log("ESPECIE:" + this.especie);
    }
}

class gato extends serVivo{

    constructor (private _raza: string, public nombre: string){
        super("gato");
    }

    public mostrar() : void {
        super.mostrar();
        console.log("raza:" + this._raza);
        console.log("nombre:" + this.nombre);
    }

}



class Canguro extends serVivo {

    constructor(private _edad: number) {
        super("CANGURO");
    }


    public mostrar() : void {
        super.mostrar();
        console.log("EDAD:" + this._edad);
        
    }

    public aumentarEdad() : void {
        this._edad += 1;
    }

}


let perro = new serVivo("canino");
perro.mostrar();

let gatos = new gato("siames", "michifus");
gatos.mostrar();

let canguro: serVivo;
let otroGato: serVivo;

canguro = new Canguro(200);
otroGato = new gato("AAAA","MIAOO");

canguro.mostrar();
otroGato.mostrar();