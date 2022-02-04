//codigo del cuadrado

function perimetroCuadrado(lado) {
    return lado * 4;
} 

function areaCuadrado(lado) {
    return lado * lado;
}  

// codigo triangulo

function perimetroTriangulo(lado1, lado2, base){
    return (lado1 + lado2 + base);
}

function areaTriangulo(base, altura) {
    return (base*altura) / 2;
}

// codigo del circulo

function diametroCirculo(radio) {
    return radio * 2;
}
//PI 
const PI = Math.PI;

// Perimetro
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
// Area
function areaCirculo(radio) {
    return (radio * radio) * PI;
}

//triangulo isosceles

function calcularTrianguloIsosceles(lado1, lado2, base) {
    if (lado1 == lado2 && lado1 != base){
        const altura = Math.sqrt((lado1*lado1)-((lado2*lado2)/4)); 
        return altura;
    }
}


// Aqui interactuamos con el HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value; //obtenemos el valor escrito en el HTML.
    const result = document.getElementById("resulCuadrado");

    const perimetro = perimetroCuadrado(value);
    result.innerText = `El perimetro es ${perimetro} cm`;
}

function calcularPerimetroArea() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value; //obtenemos el valor escrito en el HTML.
    const result = document.getElementById("resulCuadrado");

    const area = areaCuadrado(value);
    result.innerText = `El área es ${area} cm`;
}
 //Triangulo html
 function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("InputLado1");
    const lado1 = Number(input1.value);
    const input2 = document.getElementById("InputLado2");
    const lado2 = Number(input2.value);
    const input3 = document.getElementById("InputBase");
    const base = Number(input3.value);
    const result = document.getElementById("resulTriangulo");
    
    const perimetro = perimetroTriangulo(lado1,lado2, base);
    result.innerText = `El área es ${perimetro} cm`;
 }

 function calcularAreaTriangulo() {
    const input1 = document.getElementById("InputBase");
    const base = input1.value;
    const input2 = document.getElementById("InputAltura");
    const altura = input2.value;
    const result = document.getElementById("resulTriangulo");

    const area = areaTriangulo(base, altura);
    result.innerText = `El área es ${area} cm`;
 }

 //Circulo HTML
 function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculo");
    const radio = input.value; 
    const result = document.getElementById("resulCirculo");

    const radioTotal = (2 * PI * radio);
    result.innerText = `El perimetro es ${radioTotal} cm`;
 }
 
 function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo");
    const radio = input.value;
    const result = document.getElementById("resulCirculo");

    const area = areaCirculo(radio);
    result.innerText = `El área es ${area} cm`;
 }

function calcularAlturaTrianguloIsosceles(){
    const input1 = document.getElementById("Lado1");
    const lado1 = Number(input1.value);
    const input2 = document.getElementById("Lado2");
    const lado2 = Number(input2.value);
    const input3 = document.getElementById("Base");
    const base = Number(input3.value);
    const result = document.getElementById("resulTrianguloIsosceles");

    const altura = calcularTrianguloIsosceles(lado1, lado2, base);

    if(altura == undefined){
        result.innerText = `No es un triangulo Isosceles`;
    }else {
        result.innerText = `El la altura es: ${altura} cm`;
    }

}