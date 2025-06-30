interface Calculavel {
    calcular(): void;
}

class Calculadora implements Calculavel {
    calcular(): void {
        console.log("Calculando...");
    }
}

const calc = new Calculadora();
calc.calcular();
