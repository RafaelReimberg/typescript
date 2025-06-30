abstract class Documento {
  abstract imiprimir(): void;

  parar(){
    console.log("Parando a impressão do documento.");
  }
}

class Relatorio extends Documento {
  imiprimir() {
    console.log("Imprimindo o relatório.");
  }
}

class Fatura extends Documento {
  imiprimir() {
    console.log("Imprimindo a fatura.");
  }
}

const documentos: Documento = new Relatorio();
documentos.imiprimir();
documentos.parar();

const documentos2: Documento = new Fatura();
documentos2.imiprimir();
documentos2.parar();


