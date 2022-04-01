function suma() {
    var a;
    var b;
    var R;
    var t;



    t = parseInt(prompt("POR FAVOR INGRESAR LA OPERACION QUE DESEA : 1.suma/2.resta/3.multiplicacion/4.division"));
    a = parseInt(prompt("POR FAVOR INGRESE EL PRIMER VALOR"));
    b = parseInt(prompt("POR FAVOR INGRESE EL SEGUNDO VALOR"));

    switch (t) {
        case 1:
            R = a + b;
            alert("El resultado de la suma es: " + R);
            break;
        case 2:
            R = a - b;
            alert("El resultado de la resta es: " + R);
            break;
        case 3:

            R = a * b;
            alert("El resultado de la multiplicacion es: " + R);
            break;
        case 4:

            R = a / b;
            alert("El resultado de la divicion  es: " + R);
            break;
        default:
            alert("ERROR")
    }

}
function Area() {
    var b
    var h
    var a
    b = parseInt(prompt("INGRESAR LA BASE DEL TRIANGULO"))
    h = parseInt(prompt("INGRESAR LA ALTURA  DEL TRIANGULO"))
    a = (b * h) / 2
    alert("El area del trianguilo es: " + a)




}
function Calificaciones() {
    var N1
    var N2
    var N3
    var N4
    var N5
    var P
    N1 = parseInt(prompt("INGRESE EL PRIMER VALOR"))
    N2 = parseInt(prompt("INGRESE EL SEGUNDO VALOR"))
    N3 = parseInt(prompt("INGRESE EL TERCER VALOR"))
    N4 = parseInt(prompt("INGRESE EL CUARTO VALOR"))
    N5 = parseInt(prompt("INGRESE EL QUINTO VALOR"))
    P = (N1 + N2 + N3 + N4 + N5) / 5
    if (P > 1 && P <= 2.9) {
        alert("reprueba con: " + P)
    } else {
        alert("aprueba con: " + P)
    }


}
function Capital() {
    var i
    var g
    var a
    var t
    i = parseInt(prompt("INGRESE LA CANTIDAD INVERTIDA EN EL BANCO"))
    a = parseInt(prompt("INGRESE EL NUMERO DE ANOS DE INVERSION"))
    g = i * 0.002 * (a * 12)
    alert("La ganancia del total invertido es : " + g)
    t = g + i
    alert("La ganancia por su inversion es:  " + t)






}
function CmaM() {
    var cm
    var m
    m = parseInt(prompt("INGRESAR EL VALOR EN M PARA CONVERTIRLO EN CM"))
    cm = (m * 100) / 1
    alert("El valor de " + m + "m" + "  a centimetros es: " + cm + "cm")


}
function Cuadrado() {

    var a;
    var c;
    a = parseInt(prompt("cuadrado de un numero : INGRESE EL VALOR"))
    c = a * a
    alert("El cuadrado del numero: " + a + " es: " + c)






}
function Edad() {
    var e
    e = parseInt(prompt("INGRESE LA EDAD"))
    e = 2022 - e
    alert("su fecha de nacimiento es: " + e)



}
function Fruteria() {
    var Kg
    var T
    var D
    var R
    Kg = parseInt(prompt("INGRESE EL NUMERO DE KG DE MANZANAS QUE DESEA COMPRAR "))
    if (Kg < 2) {
        T = Kg * 4500
        alert("No hay descuento el total es: " + T)
    } else if (Kg >= 3 && Kg <= 5) {
        T = Kg * 4500
        R = T * 0.1
        D = T - R
        alert("El descuento fue del 10%, el total es: " + D)
    } else if (Kg >= 6 && Kg <= 10) {
        T = Kg * 4500
        R = T * 0.15
        D = T - R
        alert("El descuento fue del 15%, el total es: " + D)
    } else if (Kg >= 11) {
        T = Kg * 4500
        R = T * 0.2
        D = T - R
        alert("El descuento fue del 20%, el total es: " + D)
    }



}
function Mayordos() {
    var a;
    var b;


    a = parseInt(prompt("POR FAVOR INGRESE EL PRIMER VALOR"));
    b = parseInt(prompt("POR FAVOR INGRESE EL SEGUNDO VALOR"));
    if (a > b) {
        alert(a + " es mayor que " + b)
    } else if (a == b) {
        alert(a + "y" + b + "son iguales")
    } else {
        alert(b + " es mayor que " + a)
    }
}
function Menortres() {
    var a;
    var b;
    var c;

    a = parseInt(prompt("POR FAVOR INGRESE EL PRIMER VALOR"));
    b = parseInt(prompt("POR FAVOR INGRESE EL SEGUNDO VALOR"));
    c = parseInt(prompt("POR FAVOR INGRESE EL TERCER VALOR"));
    if (a < b && a < c) {
        alert(a + " es menor que : " + b + " y " + c)
    } else if (b < c && b < a) {
        alert(b + " es menor que : " + a + " y " + c)
    } else {
        alert(c + " es menor que : " + a + " y " + b)
    }
}
function ParImpar (){
    var a;
   

    a = parseInt(prompt("Determinar impar y par:  POR FAVOR INGRESE EL  VALOR"));
    
    if (a % 2 == 0){
alert("El numero:  "+a+" es par")
    }else {
        alert("El numero:  "+a+" no  es par")
    }





}


