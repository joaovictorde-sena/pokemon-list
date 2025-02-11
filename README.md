# Pokemon List 

Descrição do Projeto
O Pokemon List App é uma aplicação web que permite aos usuários explorar uma lista de Pokémon, visualizar detalhes de cada um e alternar entre temas claro e escuro. O projeto foi desenvolvido como um desafio para demonstrar habilidades em React, consumo de APIs e gerenciamento de estado.

## Funcionalidades
### Listagem de Pokémon:

Exibe uma lista de Pokémon com nome e imagem.

Permite carregar mais Pokémon ao clicar no botão "Carregar mais Pokemons".

### Detalhes do Pokémon:

Ao clicar em um Pokémon, o usuário é redirecionado para uma página de detalhes, onde são exibidos: 

- Imagem do Pokémon.

- Tipos.

- Habilidades (com descrições em inglês).

- Movimentos.

## Tema Claro/Escuro:

- O usuário pode alternar entre os temas claro e escuro usando um botão fixo na tela.

- O tema é aplicado globalmente em toda a aplicação.


## Ferramentas Utilizadas
- React: Escolhido por sua eficiência e flexibilidade para criar interfaces de usuário interativas.

- React Router: Utilizado para gerenciar a navegação entre a lista de Pokémon e a página de detalhes.

- Styled Components: Adotado para estilizar componentes de forma modular e dinâmica, permitindo a aplicação de temas.

- Axios: Usado para fazer requisições à PokeAPI de forma simples e eficiente.

- Context API: Utilizado para gerenciar o estado do tema (claro/escuro) de forma global.

- PokeAPI: Fonte de dados para obter informações sobre Pokémon.

## Decisões Adotadas
### Uso de Context API para o Tema:

Decidi usar a Context API para gerenciar o tema porque ele precisa ser acessível em toda a aplicação. Isso evita a necessidade de passar props manualmente entre componentes.

## Carregamento Dinâmico de Pokémon:

A lista de Pokémon é carregada em lotes de 10 itens para melhorar a performance inicial da aplicação. O botão "Carregar mais Pokemons" permite ao usuário buscar mais itens conforme necessário.

## Estilização com Styled Components:

Escolhi o Styled Components para estilização porque ele permite criar estilos dinâmicos baseados no tema e mantém o código CSS organizado e modular.

## Como Executar o Projeto
### Siga os passos abaixo para rodar o projeto no seu computador:

#### Clone o repositório:

use o comando: *git clone https://github.com/seu-usuario/pokemon-list-app.git*


#### Instale as dependências: 

use o comando *npm install* para instalar as dependências.

#### Inicie o servidor de desenvolvimento:

utilize o comando: *npm run dev*   




