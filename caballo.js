function Caballo(nombre,raza) {
    //propiedades
    this.nombre=nombre;
    this.raza= raza;
    this.avance=[];
    //metodos
    this.avanzar=avanzar;
    this.totalRecorrido=totalRecorrido;
}
function avanzar(){
    console.log(this.nombre+ "corre");
    var recorrido = Math.floor(Math.random()*6)+1;
    this.avance.push(recorrido);
    return recorrido;
    //this.avance.push(Math.floor(Math.random()*6)+1);
    
}   
function totalRecorrido(){
    return this.avance.reduce(sumar);
    return this.avance
var correCorre=avance
}
function sumar(sumaTotal,avance) {
return sumaTotal+avance; 
}
