const container = document.getElementById('container');

const divInterna = document.createElement('div');

const p_senai = document.createElement('p');
p_senai.textContent = 'Esola Senai';

const p_suico = document.createElement('p');
p_suico.textContent = 'Suiço Brasileira';

const p_Escola = document.createElement('p');
p_Escola.textContent = p_senai.textContent + " " + p_suico.textContent

// p_Escola.textContent = 'Escola Senai Suiço Brasileira';



divInterna.appendChild(p_senai);
divInterna.appendChild(p_suico);
divInterna.appendChild(p_Escola);

container.appendChild(divInterna);