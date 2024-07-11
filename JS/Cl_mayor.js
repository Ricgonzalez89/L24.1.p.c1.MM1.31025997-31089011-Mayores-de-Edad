export default class Cl_mayor{
    constructor(){
        this.contPersona = 0;
        this.contPersonaMayor = 0;
    }

    procesarPersona(p){
        //Contar personas en general
        this.contPersona++;

        //Contar personas mayores de edad
        if (p.edad >= 18){
            this.contPersonaMayor++;
        }
    }

    calcPorcPersonaMayor(){
        if (this.contPersona > 0)
            return (this.contPersonaMayor / this.contPersona) * 100;
        else
            return 0;
    }

    mostrarCantPersona(){
        return this.contPersona;
    }

    mostrarCantPersonaMayor(){
        return this.contPersonaMayor;
    }
}