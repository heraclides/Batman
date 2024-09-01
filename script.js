
function marcarLugar() {
    
    var linha = parseInt(document.getElementById('row').value);
    var coluna = parseInt(document.getElementById('col').value);

    // verifica se digitou um numero valido
    if (linha < 1 || linha > 10 || coluna < 1 || coluna > 10) {
        alert('Você digitou um valor Invalido! escolha a coluna e a fila de (1 a 10)');
        return;
    }

    // Selecionar a tabela
    var tabela = document.getElementById('tabela');
    
    // Ajusta para 0-based index
    var celula = tabela.rows[linha + 1].cells[coluna];

    // Verificar se o acento já está reservado
    if (celula.innerText === 'X') {
        alert('o acento já está reservado. Escolha outra acento.');
        return;
    }

    // faz a reserva do acendo marcando um X e mudando a cor de fundo do acento
    celula.innerText = 'X';
    celula.classList.add('marked');
}
        
    