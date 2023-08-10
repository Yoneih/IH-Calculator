document.addEventListener("DOMContentLoaded", function() {
    const calcularButton = document.getElementById("calcular-button");
    const puntosFuerzaSpan = document.getElementById("puntos-fuerza");
    const puntosInteligenciaSpan = document.getElementById("puntos-inteligencia");
    const danioMaximizadoSpan = document.getElementById("danio-maximizado");

    calcularButton.addEventListener("click", function() {
        const danioArma = parseFloat(document.getElementById("danio-arma").value);
        const danioAtaque = parseFloat(document.getElementById("danio-ataque").value);
        const danioHabilidad = parseFloat(document.getElementById("danio-habilidad").value);
        const puntosDisponibles = parseInt(document.getElementById("puntos-disponibles").value);

        let maxDanio = 0;
        let bestFuerza = 0;
        let bestInteligencia = 0;

        for (let fuerza = 0; fuerza <= puntosDisponibles; fuerza++) {
            const inteligencia = puntosDisponibles - fuerza;

            const danioCalculado = danioArma * (danioAtaque + fuerza * 10) / 100 * (danioHabilidad + inteligencia * 0.5) / 100;

            if (danioCalculado > maxDanio) {
                maxDanio = danioCalculado;
                bestFuerza = fuerza;
                bestInteligencia = inteligencia;
            }
        }

        puntosFuerzaSpan.textContent = bestFuerza;
        puntosInteligenciaSpan.textContent = bestInteligencia;
        danioMaximizadoSpan.textContent = maxDanio.toFixed(2);
    });
});
