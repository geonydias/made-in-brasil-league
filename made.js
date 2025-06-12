const jogadores = [
  { nome: 'Geony', th: 17 },
  { nome: 'LUAN', th: 17 },
  { nome: 'Bruno W', th: 17 },
  { nome: 'John Wick', th: 16 },
  { nome: 'Marquinho', th: 16 },
  { nome: 'Vando', th: 16 },
  { nome: 'WILLIAN', th: 15 },
  { nome: 'Rei thiago', th: 15 },
  { nome: 'Rc show', th: 15 },
  { nome: 'Kadrex', th: 15 },
  { nome: 'Cjsparrow', th: 15 },
  { nome: 'YuukiOhara', th: 15 },
  { nome: 'Paulinho', th: 15 },
  { nome: 'Rhyan', th: 15 },
  { nome: 'Erik', th: 14 },
  { nome: 'DeiNer', th: 13 },
  { nome: 'fé em deus', th: 13 },
  { nome: 'obito', th: 13 },
  { nome: 'Everson games', th: 13 },
  { nome: 'Phelipee', th: 13 },
  { nome: 'Jadson C.', th: 13 },
  { nome: 'super samu', th: 13 },
  { nome: 'Lucas', th: 13 },
  { nome: 'diego_fx', th: 13 },
  { nome: 'matheus_noah', th: 13 },
  { nome: 'Cattariny', th: 13 },
  { nome: 'mix', th: 12 },
  { nome: 'Leonardo', th: 8 }
];

// Inicializa estatísticas
jogadores.forEach(j => {
  j.vitorias = 0;
  j.empates = 0;
  j.derrotas = 0;
  j.porcentagem = 0;
  j.pontos = 0;
});

jogadores.sort((a, b) => b.pontos - a.pontos || b.porcentagem - a.porcentagem);

const tbody = document.querySelector('#rankingTable tbody');
tbody.innerHTML = '';

jogadores.forEach((jogador, index) => {
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td>${index + 1}</td>
    <td>${jogador.nome.toUpperCase()}</td>
    <td>TH ${jogador.th}</td>
    <td>${jogador.vitorias}</td>
    <td>${jogador.empates}</td>
    <td>${jogador.derrotas}</td>
    <td>${jogador.porcentagem}%</td>
    <td>${jogador.pontos}</td>
  `;
  tbody.appendChild(tr);
});