// 1 .seleciona o elemento com o id "container"
const container = document.getElementById('container');

// 2. Cria a div interna -dentro da div id='container
const divInterna = document.createElement('div');

// 3. Cria dois elementos p com seus respectivos textos
const paragrafo1 = document.createElement('p');
paragrafo1.textContent = 'este é o primeiro paragrafo';

// const quebra = document.createElement('br');

const paragrafo2 = document.createElement('p');
paragrafo2.textContent = 'este é o segundo paragrafo';

// 4. Adiciona a classe CSS aps parágrafos - mètodo classList()
paragrafo1.classList.add('paragrafo-estilizado')
paragrafo2.classList.add('paragrafo-estilizado')

// 5. Adiciona os elementos a div interna - 'div'
divInterna.appendChild(paragrafo1);
// divInterna.appendChild(quebra)
divInterna.appendChild(paragrafo2);

// 6. Adiciona a variavel divInterna  a Variavel container que esta armazenando o conteudo html
container.appendChild(divInterna)