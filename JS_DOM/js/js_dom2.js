
const container = document.getElementById('container');

const divInterna = document.createElement('div')

const h3Nome = document.createElement('h3');
h3Nome.textContent = 'Nome: ';

const pPreco= document.createElement('p');
pPreco.textContent = 'Preço: ';

// 5. Cria o elemento p para Disponivel
const pDisponivel = document.createElement('p');
pDisponivel.textContent = 'Disponivel: ';

h3Nome.classList.add('paragrafo-estilizado');
pDisponivel.classList.add('paragrafo-estilizado');
pPreco.classList.add('paragrafo-estilizado');

divInterna.appendChild(h3Nome);
divInterna.appendChild(pPreco);
divInterna.appendChild(pDisponivel);

container.appendChild(divInterna);