const Aluno = require('./src/aluno');
const Turma = require('./src/turma');
const TurmaPresencial = require('./src/turmaPresencial');

const aluno1 = new Aluno('Willian', 'will123', '2209624');

const turma1 = new Turma('AS64B', 7);
console.log(`Aprovado na turma online? ${turma1.aprovado()}`);

const turmaPresencial1 = new TurmaPresencial('AS64B', 7, 80);
console.log(`Aprovado na turma presencial? ${turmaPresencial1.aprovado()}`);

const turmaPresencial2 = new TurmaPresencial('AS64B', 7, 70);
console.log(`Aprovado na turma presencial? ${turmaPresencial2.aprovado()}`);
