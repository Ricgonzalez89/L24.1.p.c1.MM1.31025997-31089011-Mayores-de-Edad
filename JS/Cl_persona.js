export default class Cl_persona{
    constructor(n, e){
        this.nombre = n;
        this.edad = +e;
    }

    set nombre(n){
        this._nombre = n;
    }

    set edad(e){
        this._edad = +e;
    }

    get nombre(){
        return this._nombre;
    }

    get edad(){
        return this._edad;
    }
}