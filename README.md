### Termos e acordos

Ao iniciar este projeto, você concorda com as diretrizes do Código de Ética e Conduta e do Manual da Pessoa Estudante da Trybe.

---

# Boas vindas ao repositório do projeto de Aggregations!

Você já usa o GitHub diariamente para desenvolver os exercícios, certo? Agora, para desenvolver os projetos, você deverá seguir as instruções a seguir. Fique atento a cada passo e, se tiver qualquer dúvida, nos envie por _Slack_! #vqv 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir deste repositório, utilizando uma branch específica e um _Pull Request_ para colocar seus códigos.

---

# Sumário

- [Habilidades](#habilidades)
- [Entregáveis](#entregáveis)
  - [O que deverá ser desenvolvido](#o-que-deverá-ser-desenvolvido)
  - [Desenvolvimento](#desenvolvimento)
  - [Data de entrega](#data-de-entrega)
- [Instruções para entregar seu projeto](#instruções-para-entregar-seu-projeto)
  - [Antes de começar a desenvolver](#antes-de-começar-a-desenvolver)
  - [Durante o desenvolvimento](#durante-o-desenvolvimento)
  - [Depois de terminar o desenvolvimento (opcional)](#depois-de-terminar-o-desenvolvimento-opcional)
- [Como desenvolver](#como-desenvolver)
  - [Linter](#linter)
  - [Instrução para estrutura dos arquivos](#Instrução-para-estrutura-dos-arquivos)
  - [Instruções para restaurar o banco de dados `aggregations`](#Instruções-para-restaurar-o-banco-de-dados-aggregations)
  - [Execução de testes unitários](#execução-de-testes-unitários)
- [Requisitos do projeto](#requisitos-do-projeto)
  - [Lista de requisitos](#lista-de-requisitos)
    - [Desafio 1](#Desafio-1)
    - [Desafio 2](#Desafio-2)
    - [Desafio 3](#Desafio-3)
    - [Desafio 4](#Desafio-4)
    - [Desafio 5](#Desafio-5)
    - [Desafio 6](#Desafio-6)
    - [Desafio 7](#Desafio-7)
    - [Desafio 8](#Desafio-8)
    - [Desafio 9](#Desafio-9)
    - [Desafio 10](#Desafio-10)
    - [Desafio 11](#Desafio-11)
    - [Desafio 12](#Desafio-12)
    - [Desafio 13](#Desafio-13)
    - [Desafio 14](#Desafio-14)
- [Avisos Finais](#avisos-finais)

---

# Habilidades
Neste projeto você será capaz de:
- Executar buscas complexas no banco mongoDB
- Usar os operadores de aggregation para fazer uma pipeline  

---

# Entregáveis

## O que deverá ser desenvolvido?

É isso aí, mais um bloco finalizado! Agora chegamos ao fim do último bloco do nosso módulo de NoSQL e MongoDB. Você viu vários métodos e operadores para executar operações de agregação de dados no **MongoDB**, e vai colocá-los em prática em mais um projeto.

Para esse projeto, diferentemente dos outros, você vai utilizar várias coleções, de forma que possa praticar em vários cenários os diversos operadores e estágios do `aggregation pipeline`.

Vamos trabalhar com dados do **IMDB**, dados sobre empresas aéreas e também dados que contenham registros de deslocamento de pessoas que utilizam bicicletas. Esperamos que você curta muito o projeto e fixe muito bem o que aprendeu até aqui!

Então vamos lá aplicar seu conhecimento nesses cenários muito legais! 😉

---

## Data de Entrega

    - Serão `2` dias de projeto.
    - Data de entrega para avaliação final do projeto: `26/10/2021 - 14:00h`.

---

# Instruções para entregar seu projeto:

## ANTES DE COMEÇAR A DESENVOLVER:

1. Clone o repositório
  * `git clone https://github.com/tryber/sd-012-mongodb-aggregations`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd sd-012-mongodb-aggregations`

2. Crie uma branch a partir da branch `master`
  * Verifique que você está na branch `master`
    * Exemplo: `git branch`
  * Se não estiver, mude para a branch `master`
    * Exemplo: `git checkout master`
  * Agora crie uma branch à qual você vai submeter os `commits` do seu projeto
    * Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-projeto`
    * Exemplo: `git checkout -b seu-nome-mongodb-aggregations`

3. Para cada exercício você deve criar um novo arquivo JS **dentro de uma pasta na raiz do seu projeto chamada `challenges`** seguindo a seguinte estrutura:
  * desafio1.js, desafio2.js, ..., desafioN.js

4. Adicione as mudanças ao _stage_ do Git e faça um `commit`
  * Verifique que as mudanças ainda não estão no _stage_
    * Exemplo: `git status` (deve aparecer o arquivo que você alterou como desafio1.js)
  * Adicione o novo arquivo ao _stage_ do Git
      * Exemplo:
        * `git add .` (adicionando arquivo de solução _challenges/desafio1.js_ para desafio 1)
        * `git status` (deve aparecer listado o arquivo _challenges/desafio1.js_ em verde)
  * Faça o `commit` inicial
      * Exemplo:
        * `git commit -m 'iniciando o projeto MongoDB aggregations'` (fazendo o primeiro commit)
        * `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

5. Adicione a sua branch com o novo `commit` ao repositório remoto
  * Usando o exemplo anterior: `git push -u origin seu-nome-mongodb-aggregations`

6. Crie um novo `Pull Request` _(PR)_
  * Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/sd-012-mongodb-aggregations/pulls)
  * Clique no botão verde _"New pull request"_
  * Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
  * Clique no botão verde _"Create pull request"_
  * Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_
  * **Não se preocupe em preencher mais nada por enquanto!**
  * Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/sd-012-mongodb-aggregations/pulls) e confira que o seu _Pull Request_ está criado

---

## DURANTE O DESENVOLVIMENTO

* ⚠ **LEMBRE-SE DE CRIAR TODOS OS ARQUIVOS DENTRO DA PASTA `challenges`** ⚠

* Faça `commits` das alterações que você fizer no código regularmente

* Lembre-se de sempre após um (ou alguns) `commits` atualizar o repositório remoto

* Os comandos que você utilizará com mais frequência são:
  1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_
  2. `git add` _(para adicionar arquivos ao stage do Git)_
  3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_
  4. `git push -u nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_
  5. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_

---

# Como desenvolver
Se atente a [Instrução para estrutura dos arquivos](#Instrução-para-estrutura-dos-arquivos), ela é essencial para a avaliação do projeto.

## Linter

Para garantir a qualidade do código, vamos utilizar neste projeto o linter ESLint. Assim o código estará alinhado com as boas práticas de desenvolvimento, sendo mais legível e de fácil manutenção! 

Para poder rodar os `ESLint` em um projeto basta executar o comando `npm install` dentro do projeto e depois `npm run lint`. Se a análise do `ESLint` encontrar problemas no seu código, tais problemas serão mostrados no seu terminal. Se não houver problema no seu código, nada será impresso no seu terminal.

⚠ PULL REQUESTS COM ISSUES DE LINTER NÃO SERÃO AVALIADAS. ATENTE-SE PARA RESOLVÊ-LAS ANTES DE FINALIZAR O DESENVOLVIMENTO! ⚠

Você pode também instalar o plugin do `ESLint` no `VSCode`, bastar ir em extensions e baixar o [plugin `ESLint`](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

---

## Instrução para estrutura dos arquivos 

Temos, neste projeto, uma série de desafios com diferentes níveis de complexidade. Cada desafio deve ser resolvido em seu arquivo próprio.

1. Leia a pergunta e crie no diretório `challenges` um arquivo chamado `desafioN.js`, em que N é o número do desafio.

2. O arquivo deve conter apenas o código MQL (_Mongo Query Language_) do desafio resolvido. **Não se esqueça de incluir o ponto e vírgula (";")** no final de suas queries, como no exemplo a seguir:
    ```js
    db.movies.count();
    ```
    ⚠️ **Restrições** ⚠️:

      - **Não se deve usar aspas simples** para especificar campos e/ou valores. Quando for necessário usar aspas, **use somente aspas duplas**;

      - **Não se deve usar o comando `use aggregations`**, haja visto que **os testes já se conectam automaticamente à base `aggregations`**.

3. Faça isso até finalizar todos os desafios e depois siga as instruções de como entregar o projeto em [**Instruções para entregar seu projeto**](#instruções-para-entregar-seu-projeto).

4. Para entregar o seu projeto você deverá criar um _Pull Request_ neste repositório. Este _Pull Request_ deverá conter no diretório `challenges` os arquivos `desafio1.js`, `desafio2.js` e assim por diante até o `desafio14.js`, que conterão seu código `MQL` de cada desafio, respectivamente.

### ⚠️ É importante que seus arquivos tenham exatamente estes nomes! ⚠️

Qualquer dúvida, procure a monitoria. Lembre-se que você pode consultar nosso conteúdo sobre [Git & GitHub](https://course.betrybe.com/intro/git/) sempre que precisar!

---

## Instruções para restaurar o banco de dados `aggregations`

1. Abra o terminal e conecte-se à sua instância local do **MongoDB**. Se você receber uma mensagem de erro com uma mensagem como ***Connection refused***, tente reiniciar sua instância ([veja como fazer isso aqui](https://app.betrybe.com/course/back-end/introducao-ao-mongodb/mongodb-introducao/d396e5a2-d5c9-4f3a-b723-1a1d3ea06b3d/conteudos/b9646f17-77fc-401e-bab5-421fdc37428e/conectando/f63aa7aa-ac8f-4253-bf76-7fc71e4eac5a?use_case=side_bar)).

2. Agora que você tem certeza de que a sua instância está no ar e que você está conectado a ela, digite `exit`. Você voltará ao terminal para iniciar a importação dos dados.

3. Na raiz do diretório do projeto, execute o seguinte comando que fará a restauração da base de dados `aggregations`:
    ```sh
    DBNAME=aggregations ./scripts/resetdb.sh assets
    ```

  * A execução desse script criará um banco de dados chamado `aggregations` e importará todas as suas coleções.

⚠️ Como tanto esse script quanto o script de execução local dos testes (mostrado na [seção seguinte](#execução-de-testes-unitários)), **restauram a base de dados `aggregations`**, se atente a salvar seu progresso nos arquivos de desafio! ⚠️

---

## Execução de testes unitários

Para executar localmente os testes, é preciso escrever o seguinte no seu terminal, estando na raiz do diretório do projeto:
```sh
./scripts/evaluate.sh
```

Esse script passará por **todos os desafios** e imprimirá um relatório indicando se passou ou não para cada desafio. Como a execução do script **envolve restauração da base de dados `aggregations`** de um teste para outro, recomenda-se esperar pela sua execução completa.

Para executar somente o teste de um desafio, execute o comando abaixo, substituindo N pelo númedo do desafio

```sh
./scripts/evaluate.sh desafioN
```

⚠️ Como na avaliação o banco de dados `aggregations` é restaurado de um teste para outro, **se atente a fazer uso do banco restaurado na hora de fazer um desafio**. ⚠️

---

# Requisitos do projeto
## Lista de requisitos

Monte queries para encontrar as informações dos desafios a seguir.

---
### Desafio 1

Ajude a Trybe a escolher um filme para a próxima noite! Baseado em uma pesquisa, decidimos que os filmes em potencial devem atender alguns critérios, vejamos:

#### Retorne todos os filmes que satisfaça, através de uma  _pipeline_, as condições abaixo

* `imdb.rating` deve ser maior ou igual a `7`;
* `genres` não deve conter `Crime` ou `Horror`;
* `rated` deve ser igual a `PG` ou `G`;
* `languages` contém `English` e `Spanish`.
* Utilize a coleção `movies`.

Sua query deve retornar `41` documentos.

### Desafio 2

A escolha do filme da noite foi um sucesso, mas infelizmente ficamos com nossa banda de internet quase esgotada, e ainda precisamos de uma nova recomendação de filme. Para diminuir o volume de dados trafegados:

#### Utilizando o mesmo _pipeline_ anterior, retorne apenas os campos `title`, `rated`, `imdb.rating`, `imdb.votes` e `year`, modificando seus nomes para `titulo`, `avaliado`, `notaIMDB`, `votosIMDB` e `ano`, respectivamente.


O resultado da sua query deve ter exatamente o seguinte formato (incluindo a ordem dos campos):

```javascript
{ "titulo" : "A Streetcar Named Desire", "avaliado" : "PG", "notaIMDB" : 8.1, "votosIMDB" : 72364, "ano" : 1951 }
// Demais documentos
```

### Desafio 3

Agora que você tem os campos essenciais, aplique mais um estágio na pipeline do desafio anterior que atenda a seguinte demanda:

#### Retorne esses filmes ordenados por ano e nota IMDB de forma decrescente e título por ordem alfabética.

O resultado da sua query deve ter exatamente o seguinte formato (incluindo a ordem dos campos):

```javascript
{ "titulo" : "McFarland, USA", "avaliado" : "PG", "notaIMDB" : 7.5, "votosIMDB" : 14091, "ano" : 2015 }
// Demais documentos
```

### Desafio 4

Nossa coleção de filmes tem muitos documentos diferentes, alguns com títulos "mais complexos" do que outros. Se quisermos analisar nossa coleção para encontrar títulos de filmes que têm uma só palavra no título, poderíamos buscar todos os filmes da coleção e processar isso na aplicação, mas o `Aggregation Framework` nos permite fazer isso diretamente no lado do banco de dados.

#### Crie uma _pipeline_ que retorna documentos  com o novo campo `title_split`, ela deve seguir as seguintes condições:

- `title_split` deve conter uma lista de palavras presentes em `title`.
- A pipeline deve retornar apenas filmes com o título composto apenas de uma palavra.
- A pipeline deve ser ordenada por `title` em ordem alfabética.
- A pipeline deve retornar apenas o campo `title_split`.

Por exemplo, `"Cinderela"` e `"3-25"` devem entrar nessa contagem, mas `"Cast Away"` não.

**Dica:** utilize os operadores `$split`, `$size` e `$sort` para te auxiliar.
[Documentação do $split](https://docs.mongodb.com/manual/reference/operator/aggregation/split/)

Sua query deve retornar `8068` documentos.

### Desafio 5

Temos outra noite de filme aqui na Trybe e, desta vez, nós perguntamos à equipe quais são suas pessoas preferidas como atores e/ou atrizes. Aqui está o resultado:

* Sandra Bullock
* Tom Hanks
* Julia Roberts
* Kevin Spacey
* George Clooney

#### Considerando esta lista, crie uma _pipeline_ que retorne o `title` do vigésimo quinto filme da agregação que satisfaz as seguintes condições:

- `countries` é Estados unidos no banco estará classificado como USA
- `tomatoes.viewer.rating` maior ou igual a `3`
-  Crie um novo campo chamado `num_favs`, que represente quantos atores ou atrizes da nossa lista de favoritos aparecem no elenco (informação do campo `cast` no banco) do filme, caso ele possua favoritos.
- Ordene os resultados por `num_favs`, `tomatoes.viewer.rating` e `title`, todos em ordem decrescente.

**Dica:** coloque a lista de atores e atrizes favoritos em uma variável e explore operadores como `$size` e [`$setIntersection`](https://docs.mongodb.com/manual/reference/operator/aggregation/setIntersection/index.html).

O resultado da sua query deve ter exatamente o seguinte formato (incluindo a ordem dos campos):

```javascript
{ "title" : <nome_do_filme> }
```

### Desafio 6

Vamos explorar mais operadores aritméticos!

#### Considerando todos os filmes que ganharam o Oscar pelo menos uma vez, calcule o **maior valor**, **menor valor**, **média** e o **desvio padrão** das avaliações (informação do campo `imdb.rating` no banco)

- Para a média e o desvio padrão arredonde os valores para uma casa decimal utilizando o [`$round`](https://docs.mongodb.com/manual/reference/operator/aggregation/round/index.html).

**Dica:** todos os filmes na coleção, que já ganharam um Oscar (informação do campo `awards` no banco), começam com uma sequência de string parecida com essas abaixo, portanto `$regex` é um operador bem-vindo:

```
Won 10 Oscars
Won 1 Oscar
```

Utilizem o [`$stdDevSamp`](https://docs.mongodb.com/manual/reference/operator/aggregation/stdDevSamp/index.html) para calcular o desvio padrão.

O resultado da sua query deve ter exatamente o seguinte formato (incluindo a ordem dos campos):

```javascript
{
  "maior_rating" : <maior_rating>,
  "menor_rating" : <menor_rating>,
  "media_rating" : <media_rating>,
  "desvio_padrao" : <desvio_padrao>
}
```

### Desafio 7

Vamos nos aprofundar um pouco mais em nossa coleção de filmes. 

#### Conte quantos filmes cada um dos atores e atrizes do elenco (`cast` no banco) já participou e obtenha uma média do campo `imdb.rating` para cada um desses atores e atrizes.

- Traga o nome do ator ou atriz;
- Número de filmes em que participou
- Média do imdb desses filmes arredondada para uma casa decimal usando o operador [`$round`](https://docs.mongodb.com/manual/reference/operator/aggregation/round/index.html).
- Considere somente os membros do elenco de filmes com o idioma inglês (`English`). 
- Exiba a lista em ordem decrescente de documentos pelo número de filmes e nome do ator ou atriz.

Sua query deve retornar `47055` documentos. Cada documento no resultado deve ter exatamente o seguinte formato (incluindo a ordem dos campos):

```javascript
{ "_id" : "John Wayne", "numeroFilmes" : 107, "mediaIMDB" : 6.4 }
```

### Desafio 8

Trocando de contexto, vamos utilizar nossa outra coleção que contém dados de empresas aéreas, suas rotas, seus voos e parcerias.

#### Liste todas as parcerias da coleção `air_alliances`, que voam rotas com um Boing 747 ou um Airbus A380 , para descobrir qual delas tem o maior número de rotas com esses aviões.

No campo `airplane`, na coleção `air_routes`: 
- Boing 747 está abreviado para `747`
- Airbus A380 está abreviado para `380`

O resultado da sua query deve ter exatamente o seguinte formato (incluindo a ordem dos campos):

```javascript
{ "_id" : <nome_da_alianca>, "totalRotas" : <total_de_rotas> }
```

### Desafio 9

#### A partir da coleção `trips`, determine o menor e o maior ano de nascimento. 

- Guarde essa informação, você precisará dela mais tarde.

- Não considere documentos com valores vazios (`""`) e em que o campo não existe!

- Para este desafio utilize o operador [`$toInt`](https://docs.mongodb.com/manual/reference/operator/aggregation/toInt/index.html) para converter de string para valor inteiro.

O resultado da sua query deve ter exatamente o seguinte formato (incluindo a ordem dos campos):

```javascript
{ "maiorAnoNascimento" : <ano>, "menorAnoNascimento" : <ano> }
```

### Desafio 10

#### Encontre a duração média de viagens por tipo de usuário. 

- Exiba o valor em horas com apenas duas casas decimais 
- Exiba a média de viagens ordenada de forma crescente. 

Para arredondar a média use o [`$round`](https://docs.mongodb.com/manual/reference/operator/aggregation/round/index.html).

O resultado da sua query deve ter exatamente o seguinte formato (incluindo a ordem dos campos):

```javascript
{ "tipo" : <tipo>, "duracaoMedia" : <duracaoMedia> }
// ...
```

### Desafio 11

#### Determine qual o dia da semana com maior número de viagens iniciadas.

**Dica:** Utilize o operador [`$dayOfWeek`](https://docs.mongodb.com/manual/reference/operator/aggregation/dayOfWeek/index.html) para extrair o dia da semana como um número de uma data.

O resultado da sua query deve ter exatamente o seguinte formato (incluindo a ordem dos campos):

```javascript
{ "diaDaSemana" : <dia_da_semana>, "total" : <total_de_viagens> }
```

### Desafio 12

#### Usando a pipeline anterior que retorna o dia com mais viagens, determine qual estação tem o maior número de viagens nesse dia da semana.

- Exiba apenas o nome da estação e o total de viagens.

**Dica:** Utilize o operador [`$dayOfWeek`](https://docs.mongodb.com/manual/reference/operator/aggregation/dayOfWeek/index.html) para extrair o dia da semana como um número de uma data.

O resultado da sua query deve ter exatamente o seguinte formato (incluindo a ordem dos campos):

```javascript
{ "nomeEstacao" : <nome_da_estacao>, "total" : <total_de_viagens> }
```

### Desafio 13

#### Determine a duração média das viagens iniciadas no dia `10/03/2016`, em minutos.

- Arredonde o resultado para cima.

O resultado da sua query deve ter exatamente o seguinte formato (incluindo a ordem dos campos):

```javascript
{ "duracaoMediaEmMinutos" : <duracao_media_em_minutos> }
```

### Desafio 14

#### Baseado na duração média das viagens, determine quais são as `5` bicicletas que foram mais utilizadas. 

- Exiba o resultado em minutos arredondados para cima e em ordem decrescente.

O resultado da sua query deve ter exatamente o seguinte formato (incluindo a ordem dos campos):

```javascript
{ "bikeId" : <bike_id>, "duracaoMedia" : <duracao_media> }
{ "bikeId" : <bike_id>, "duracaoMedia" : <duracao_media> }
{ "bikeId" : <bike_id>, "duracaoMedia" : <duracao_media> }
{ "bikeId" : <bike_id>, "duracaoMedia" : <duracao_media> }
{ "bikeId" : <bike_id>, "duracaoMedia" : <duracao_media> }
```


---
### Revisando um pull request

À medida que você e as outras pessoas que estudam na Trybe forem entregando os projetos, vocês receberão um alerta via Slack para também fazer a revisão dos Pull Requests dos seus colegas. Fiquem atentos às mensagens do "Pull Reminders" no Slack!

Use o material que você já viu sobre [Code Review](https://app.betrybe.com/course/real-life-engineer/code-review) para te ajudar a revisar os projetos que chegaram para você.

# Avisos Finais

Ao finalizar e submeter o projeto, não se esqueça de avaliar sua experiência preenchendo o formulário. Leva menos de 3 minutos!

Link: [FORMULÁRIO DE AVALIAÇÃO DE PROJETO](https://be-trybe.typeform.com/to/ZTeR4IbH#cohort_name=Turma%2012)

O avaliador automático não necessariamente avalia seu projeto na ordem em que os requisitos aparecem no readme. Isso acontece para deixar o processo de avaliação mais rápido. Então, não se assuste se isso acontecer, ok?

---
