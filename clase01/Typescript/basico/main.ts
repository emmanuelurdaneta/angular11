let cadena:string = "hola";
let verdadero: boolean;

verdadero = true;

let numero : number;
numero = 100;

console.log(cadena);

let cualquiera: any = "hola como andan?"
console.log(cualquiera);
console.log(typeof(cualquiera));

cualquiera = 3;
console.log(cualquiera);
console.log(typeof(cualquiera));

let vector: Array<string> = ["hola", "a", "todos"];
// no se puede porque el array es de string
//vector.push(3);

let vectorNumeros : Array<number> = [2,3,4];
//no se puede
//vectorNumeros.push("asd");

function suma(operador1:number, operador2:number) : number {
    return 2;
}

console.log(suma(3, 5));

function saludar() : void {
    console.log("holo a todos");
}














