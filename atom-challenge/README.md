## 💻 Projeto RocketBlog

 Desafio consistiu em criar desenvolver uma homepage para um blog com animações com Next.Js e estilização com Styled Components

## 🚀 Tecnologias

<ul>
  <li>Next.Js</li>
  <li>Typescript</li>
  <li>Styled Components</li>
  <li>Phosphor React Icons</li>
  <li>Framer Motion</li>
</ul>

## Detalhamento do desafio

Gostaria de primeiramente agradecer pela oportunidade de estágio.

O rocketblog eu ja tinha desenvolvido no ínicio desse ano com HTML e CSS, de certa forma me ajudou a aproveitar código
e ver como dava para aprimorar. 

Porque utilizei Styled-Components?
Eu realmente gostaria de ter utilizado Tailwind, o pouco que vi dessa ferramenta gostei, certamente irei aprender a utiliza-la,pois achei interessante, mas o Styled Components é uma ferramenta que já tenho certa familiaridade e utilizar o Tailwind pela primeira vez sem ter nunca utilizado, poderia deixar o código ainda mais baguncado e confuso. 
Na versão 13 do Next.Js o mais recomendado é o Tailwind mesmo, tanto que se der um refresh no navegador, a estilização do Styled Components da página fica desfigurada, tentei resolver o problema mexendo na opções do transpilador (Babel), mas sem êxito, então caso ocorra esse bug, peço que reinicie o server do next usando yarn dev.

Começando pelo Header/Nav apresenta uma animação simples, aplicando uma borda a esquerda quando o usuário clica por exemplo
nas sessões Home | Posts | Categories | Contato, a Navegation é fixa e acompanha na tela do usuário em toda a página, não fiz mais
animações nessa sessão justamente para o usuário logo de cara ter ciência o que ele pode fazer no menu de navegação.

Logo abaixo, no header propriamente dito, adicionei animações tanto no h1 e paragráfo tanto e na imagem para entrar em tela lentamente e permanecer, obdecendo o layout o h1 tem a fonte Poppins e todos os outros textos da página segue com a fonte Roboto

Na sessão Posts apresenta animações semelhantes a do header, todas feitas pela lib framer motion, pensei nessa sessão utilizar
efeito do tipo skeleton, porém nao consegui empregar e também nao sei se seria interessante.

Criei um footer a mais, pois acho interessante e adicionei 3 redes sociais e coloquei efeitos de brilho e margem quando em destaque(hover).

