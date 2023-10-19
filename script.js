function cifrar() {
    let mensaje = document.getElementById('mensaje').value;
    let columnas = parseInt(document.getElementById('clave').value);
    let resultado = '';
    let matriz = [];

   
    for (let i = 0; i < Math.ceil(mensaje.length / columnas); i++) {
        matriz.push([]);
        for (let j = 0; j < columnas; j++) {
            matriz[i].push(' ');
        }
    }
    let cont = 0;


    for (let i = 0; i < Math.ceil(mensaje.length / columnas); i++) {
        for (let j = 0; j < columnas; j++) {
            matriz[i][j] = mensaje[cont] || ' ';
            cont++;
        }
    }


    for (let i = 0; i < columnas; i++) {
        for (let j = 0; j < Math.ceil(mensaje.length / columnas); j++) {
            if (matriz[j][i] !== ' ') {
                resultado += matriz[j][i];
            } else {
                resultado += ' ';
            }
        }
    }

    let matriz2= '';
    for (let i = 0; i < Math.ceil(mensaje.length / columnas); i++) {
        
        for (let j = 0; j < columnas; j++) {
            matriz2 +=matriz[i][j];
        }
        
    }
    
    document.getElementById('resultado').innerHTML = 'Cifrado: ' + resultado + '</p>';
}


function descifrar() {
    let mensaje = document.getElementById('mensaje').value;
    let columnas = parseInt(document.getElementById('clave').value);
    let resultado = '';
    let matriz = [];


    for (let i = 0; i < Math.ceil(mensaje.length / columnas); i++) {
        matriz.push([]);
        for (let j = 0; j < columnas; j++) {
            matriz[i].push(' ');
        }
    }

    let cont = 0;


    for (let i = 0; i < columnas; i++) {
        for (let j = 0; j < Math.ceil(mensaje.length / columnas); j++) {
            matriz[j][i] = mensaje[cont] || ' ';
            cont++;
        }
    }

    for (let i = 0; i < Math.ceil(mensaje.length / columnas); i++) {
        for (let j = 0; j < columnas; j++) {
            resultado += matriz[i][j];
        }
    }

    document.getElementById('resultado').innerHTML = '<p>Descifrado:' + resultado + '</p>';
}

