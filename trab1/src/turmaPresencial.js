const Turma = require('./turma');

class TurmaPresencial extends Turma {
  constructor(codigo, nota, frequencia) {
    super(codigo, nota);
    this.frequencia = frequencia;
  }

  aprovado() {
    return this.nota >= 6 && this.frequencia >= 70;
  }
}

module.exports = TurmaPresencial;
