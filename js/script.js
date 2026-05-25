// Asegurar la inicialización correcta de los elementos al cargar la página por completo
document.addEventListener("DOMContentLoaded", () => {
    // Activar de manera automática las partículas de nieve decorativas de fondo
    crearEfectoNieve();
});

// ====== SIMULADOR 1: FIBONACCI (SIN VECTORES) ======
function simularAhorro() {
    // Uso obligatorio de document.getElementById()
    let mesesInput = document.getElementById("meses").value;
    let meses = parseInt(mesesInput);
    
    if (isNaN(meses) || meses < 1) {
        document.getElementById("resultado-fibo").innerHTML = "<span style='color: #ffb3ff;'>Por favor, introduce un número de meses válido (mayor a 0).</span>";
        return;
    }

    // Inicialización por rotación de variables simples (sin vectores)
    let a = 0;
    let b = 1;
    let c;
    let acumuladoTotal = 0;

    let tablaHTML = "<table><thead><tr><th>Mes</th><th>Ahorro</th><th>Total Acumulado</th></tr></thead><tbody>";

    for (let i = 1; i <= meses; i++) {
        let ahorroMes;

        if (i === 1) {
            ahorroMes = 1; 
        } else {
            c = a + b;
            a = b;
            b = c;
            ahorroMes = c;
        }

        acumuladoTotal += ahorroMes;
        tablaHTML += "<tr><td>Mes " + i + "</td><td>Bs. " + ahorroMes + "</td><td>Bs. " + acumuladoTotal + "</td></tr>";
    }

    tablaHTML += "<tr class='total-fila'><td>Total Final</td><td>-</td><td>Bs. " + acumuladoTotal + "</td></tr></tbody></table>";

    // Modificación directa del DOM en la página (No en consola)
    document.getElementById("resultado-fibo").innerHTML = tablaHTML;
}

// ====== SIMULADOR 2: NÚMEROS PRIMOS ======
function verificarCodigo() {
    let numeroInput = document.getElementById("numero").value;
    let numero = parseInt(numeroInput);

    if (isNaN(numero) || numero < 1) {
        document.getElementById("resultado-primo").innerHTML = "<span style='color: #ffb3ff;'>Por favor, introduce un código numérico válido (mayor a 0).</span>";
        return;
    }

    let contador = 0;

    // Algoritmo por conteo de residuos de división exacta
    for (let i = 1; i <= numero; i++) {
        if (numero % i == 0) {
            contador++;
        }
    }

    // Evaluación condicional e impresión en el contenedor correspondiente
    if (contador == 2) {
        document.getElementById("resultado-primo").innerHTML = "<span class='alerta-segura'>✔ El número " + numero + " es PRIMO.<br>Código de acceso altamente seguro.</span>";
    } else {
        document.getElementById("resultado-primo").innerHTML = "<span class='alerta-insegura'>❌ El número " + numero + " NO es primo.<br>Código vulnerable, intente con otro.</span>";
    }
}

// ====== LOGÍSTICA DE PARTICULAS: EFECTO NIEVE DE FONDO ======
function crearEfectoNieve() {
    const contenedor = document.getElementById("snowContainer");
    const cantidadCopos = 25; // Densidad controlada

    for (let i = 0; i < cantidadCopos; i++) {
        const copo = document.createElement("div");
        copo.classList.add("snowflake");
        copo.textContent = "❄";

        copo.style.left = `${Math.random() * 100}vw`;
        copo.style.animationDuration = `${Math.random() * 3 + 3}s`;
        copo.style.animationDelay = `${Math.random() * 5}s`;
        copo.style.fontSize = `${Math.random() * 0.4 + 0.8}rem`;

        contenedor.appendChild(copo);
    }
}