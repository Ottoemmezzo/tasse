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
/*professionista: codice 78, irpef 5, inps 25.72
artigiano: codice 67, irpef 15, inps 35
commerciante: codice 40, irpef 15, inps 35
*/
var Contribuente = /** @class */ (function () {
    function Contribuente(_reddito, _irpef, _codRed, _inps) {
        this.redditoLordo = _reddito;
        this.taxInps = _inps;
        this.taxIrpef = _irpef;
        this.codRed = _codRed;
    }
    Contribuente.prototype.getUtileTasse = function () {
        return (this.redditoLordo * this.codRed) / 100;
    };
    Contribuente.prototype.getTasseInps = function () {
        return (this.getUtileTasse() * this.taxInps) / 100;
    };
    Contribuente.prototype.getTasseIrpef = function () {
        return (this.getUtileTasse() * this.taxIrpef) / 100;
    };
    Contribuente.prototype.getRedditoAnnuoNetto = function () {
        return this.redditoLordo - (this.getTasseInps() + this.getTasseIrpef());
    };
    return Contribuente;
}());
var Professionista = /** @class */ (function (_super) {
    __extends(Professionista, _super);
    function Professionista(_reddito) {
        return _super.call(this, _reddito, 5, 78, 25.72) || this;
    }
    return Professionista;
}(Contribuente));
var Artigiano = /** @class */ (function (_super) {
    __extends(Artigiano, _super);
    function Artigiano(_reddito) {
        return _super.call(this, _reddito, 67, 15, 35) || this;
    }
    return Artigiano;
}(Contribuente));
var Commerciante = /** @class */ (function (_super) {
    __extends(Commerciante, _super);
    function Commerciante(_reddito) {
        return _super.call(this, _reddito, 40, 15, 35) || this;
    }
    return Commerciante;
}(Contribuente));
/*class Dipendente extends Contribuente
{
  constructor(_reddito:number)
  {
    super(_reddito)

    
  }
}*/
var angelo = new Professionista(30000);
var valeria = new Artigiano(33000);
var gerardo = new Commerciante(40000);
console.log(angelo.getRedditoAnnuoNetto());
console.log(valeria.getRedditoAnnuoNetto());
console.log(gerardo.getRedditoAnnuoNetto());
