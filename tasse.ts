/*professionista: codice 78, irpef 5, inps 25.72
artigiano: codice 67, irpef 15, inps 35
commerciante: codice 40, irpef 15, inps 35
*/
abstract class Contribuente {
    taxInps:number;
    taxIrpef:number;
    codRed:number;
    redditoLordo:number;
    constructor(_reddito, _irpef,_codRed,_inps)
    {
        this.redditoLordo=_reddito;
        this.taxInps=_inps;
        this.taxIrpef=_irpef;
        this.codRed=_codRed;
    
        
    }
    getUtileTasse(): number{
        return (this.redditoLordo * this.codRed) / 100;
    }
    getTasseInps(): number{
        return (this.getUtileTasse() * this.taxInps) / 100;
    }
    getTasseIrpef(): number 
    {
        return (this.getUtileTasse() * this.taxIrpef) / 100;
    }
    getRedditoAnnuoNetto(): number 
    {
        return this.redditoLordo - (this.getTasseInps() + this.getTasseIrpef());
    }
    
}

class Professionista extends Contribuente 
{
    constructor(_reddito: number) 
    {
        super(_reddito,5,78,25.72);
    }
}

class Artigiano extends Contribuente {
    
    constructor(_reddito: number) 
    {
        super(_reddito,67,15,35);
    }
}
class Commerciante extends Contribuente{
    constructor(_reddito: number) 
    {
        super(_reddito,40,15,35);
    }
}
/*class Dipendente extends Contribuente
{
  constructor(_reddito:number)
  {
    super(_reddito)

    
  }
}*/

let angelo= new Professionista(30000);
let valeria= new Artigiano(33000);
let gerardo= new Commerciante(40000);

console.log(angelo.getRedditoAnnuoNetto());
console.log(valeria.getRedditoAnnuoNetto());
console.log(gerardo.getRedditoAnnuoNetto());