var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Persona = /** @class */ (function () {
    function Persona(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    Persona.prototype.mostrar = function () {
        console.log("nombre:" + this.nombre);
        console.log("apellido:" + this.apellido);
        console.log("edad:" + this.edad);
    };
    return Persona;
}());
var persona = new Persona("Eduarod", "Correa", 29);
//persona.nombre = "emmanuel";
//persona.apellido = "urdaneta";
//persona.edad = 28;
persona.mostrar();
var otrapersona = new Persona("Nazareth", "Bermudez", 28);
//otrapersona.nombre = "Marieys";
//otrapersona.apellido = "rengifo";
//otrapersona.edad = 29;
otrapersona.mostrar();
////////////////////////////////////
////////////////////////////////////
////////////////////////////////////
var serVivo = /** @class */ (function () {
    //public especie : string;
    function serVivo(especie) {
        //this.especie = especie;
        this.especie = especie;
    }
    serVivo.prototype.mostrar = function () {
        console.log("ESPECIE:" + this.especie);
    };
    return serVivo;
}());
var gato = /** @class */ (function (_super) {
    __extends(gato, _super);
    function gato(_raza, nombre) {
        var _this = _super.call(this, "gato") || this;
        _this._raza = _raza;
        _this.nombre = nombre;
        return _this;
    }
    gato.prototype.mostrar = function () {
        _super.prototype.mostrar.call(this);
        console.log("raza:" + this._raza);
        console.log("nombre:" + this.nombre);
    };
    return gato;
}(serVivo));
var Canguro = /** @class */ (function (_super) {
    __extends(Canguro, _super);
    function Canguro(_edad) {
        var _this = _super.call(this, "CANGURO") || this;
        _this._edad = _edad;
        return _this;
    }
    Canguro.prototype.mostrar = function () {
        _super.prototype.mostrar.call(this);
        console.log("EDAD:" + this._edad);
    };
    Canguro.prototype.aumentarEdad = function () {
        this._edad += 1;
    };
    return Canguro;
}(serVivo));
var perro = new serVivo("canino");
perro.mostrar();
var gatos = new gato("siames", "michifus");
gatos.mostrar();
var canguro;
var otroGato;
canguro = new Canguro(200);
otroGato = new gato("AAAA", "MIAOO");
canguro.mostrar();
otroGato.mostrar();
