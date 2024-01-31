# Star Wars API Test App

Este repositório contém testes para a busca de personagens Star Wars utilizando a API [SWAPI](https://swapi.dev/). O objetivo desses testes é garantir que a função `getPeople` retorne os resultados esperados ao realizar uma busca por um personagem específico.

## Configuração

Antes de executar os testes, certifique-se de instalar as dependências necessárias utilizando o comando:

```bash
npm install

# Testes
Os testes são realizados utilizando o framework de testes Mocha em conjunto com a biblioteca Nock para simulação de requisições HTTP.

Os testes estão localizados no arquivo test.js e podem ser executados com o comando:

bash
Copy code
npm test
Descrição dos Testes

1. Busca do R2-D2
O teste Deve buscar o r2d2 com o formato correto verifica se a função getPeople retorna as informações corretas para o personagem R2-D2. Para garantir a consistência dos testes, é utilizado o Nock para simular a resposta da API SWAPI.

A configuração do Nock está presente no bloco beforeAll do arquivo test.js, onde é simulada uma resposta de sucesso da API para a busca do personagem R2-D2.

# Execução da Aplicação
Além dos testes, este repositório contém a implementação básica da função getPeople no arquivo service.js. Essa função utiliza a biblioteca Axios para realizar chamadas à API SWAPI e mapeia os resultados para um formato mais legível.

# Como Contribuir
Se você encontrar algum problema ou tiver sugestões de melhoria, sinta-se à vontade para abrir uma issue ou enviar um pull request. Agradeço sua contribuição!

Observação: Certifique-se de que os testes ainda passam após qualquer alteração no código.

Clone do repositório:
https://github.com/rodolphoreis/testes-automatizados--JS.git
