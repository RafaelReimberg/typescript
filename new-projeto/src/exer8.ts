class InstrumentoMusical {
  tocar(){
    console.log("Tocando um instrumento musical");
  }
}

class Guitarra extends InstrumentoMusical {
  tocar() {
    console.log("Tocando uma guitarra");
  }
}

class Bateria extends InstrumentoMusical {
  tocar() {
    console.log("Tocando uma batería");
  }
}

const instrumento: InstrumentoMusical[] = [new Guitarra(), new Bateria()];
instrumento.forEach(i => i.tocar());
