function cifrar() {
    var mensaje = document.getElementById('mensaje').value;
    var clave = parseInt(document.getElementById('clave').value);
    var resultado = '';

    for (var i = 0; i < mensaje.length; i++) {
        var charCode = mensaje.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            resultado += String.fromCharCode(((charCode - 65 + clave) % 26) + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            resultado += String.fromCharCode(((charCode - 97 + clave) % 26) + 97);
        } else {
            resultado += mensaje.charAt(i);
        }
    }

    document.getElementById('resultado').value = resultado;
}

function descifrar() {
    var mensaje = document.getElementById('mensaje').value;
    var clave = parseInt(document.getElementById('clave').value);
    clave = -clave;
    var resultado = '';

    for (var i = 0; i < mensaje.length; i++) {
        var charCode = mensaje.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            resultado += String.fromCharCode(((charCode - 65 + clave + 26) % 26) + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            resultado += String.fromCharCode(((charCode - 97 + clave + 26) % 26) + 97);
        } else {
            resultado += mensaje.charAt(i);
        }
    }

    document.getElementById('resultado').value = resultado;
}