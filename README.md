# Endereço do projeto na rede

https://nave-luis-henrique-prado-llovet-git-main-kikollovet.vercel.app/

email: luish@teste.com
senha: testeteste

# Sobre o desenvolvimento do app

Conheci o React e o Next.js na Imersão React - Next.js 2a ediçao da Alura em Janeiro. Atualmente estou fazendo o Bootcamp JAM Stack da Alura onde estou aprofundando meus conhecimentos em React e no framework Next.js além de aprender muitas boas práticas.. Estou no módulo 3 de 6 módulos.

Vi uma pessoa em um vídeo que aconselha sempre que vc for fazer um teste para um emprego começar pela parte díficil e foi por onde comecei, pela parte que não fazia ideia como fazer por não ter conhecimento sobre. Meu primeiro desafio era salvar o token do usuario para usar nas requisições da API como inserir um Naver. Comecei a pesquisar e implantar em um outro projeto só para ver como fazer. Descobri a Context do React. Depois de muito tentar descobri como usar e também como salvar os dados no sessionStorage do navegador já que com refresh os dados salvos no Context eram perdidos.

O próximo desafio era implementar rotas protegidas. A solução que encontrei foi proteger as rotas usando o getServerSideProps. O problema era que através dele não conseguia usar o Hook do Context para acessar os dados guardado no sessionStorage já que descobri q o getServerSideProps roda do lado do servidor e por isso não tem acesso a janela do navegador.

Fiquei então buscando alguma lib que pudesse guardar o usuário. Foi quando descobri o next-iron-session. Ele trás um modelo de API para salvar a sessão do usuario. Como sou novo no front-end demorei um tempo para descobrir como usar uma API no próprio APP. Depois que aprendi, vi que não era necessário usar o Context pois poderia guardar o Token de login no usuário da sessão.

O passo seguinte foi protegar a API. A que já vem feita no next-iron-session não tem um esquema de proteção, ou seja, basta acessar o url da api/login para ter um usuário logado. Fiz um esquema de segurança bem amador onde era necessário em toda a requisição feita para a API local ter um TOKEN de segurança. O Token enviado pelo fetch é hard coded o que acho pode não ser uma boa prática, porem não sei como criar um token de maneira dinamica, onde o Token necessário pela API local conseguisse ser igual ao enviado no Fetch. Mas mesmo assim agora é impossivel logar acessando direto o endereço da API local pois ela está um pouquinho mais protegida.

O esquema de login implementado funciona assim. O usuário preeche o form de login e aperta enviar. Os dados são enviado por fetch para a API do navedex do heroku. Se o login é aprovado, outro fetch é feito para a API local com os dados recem adquiridos da API navedex. Este Fetch para API local também leva uma TOKEN hard coded. A API local recebe os dados do usuario e salva eles no lado do servidor. Depois disso vc é encaminhado para a rota segura do navers. Antes de carregar a rota segura é feito uma verificação na API local através do getServerSideProps onde é verificado se existe um usuário salvo no servidor. Se tem um usuário salvo a rota protegida é carregada. Se por um acaso o login falha por que a API do Navedex não tem o login com senha existente não é salvo nenhum usuario na API local, assim se vc tentar acessar uma rota segura vc é redirecionado para a página de login já que não há usuário salvo atravéz da API local. E se o login é feito com sucesso a rota para a pagina de login fica inacessivel pois ela só é acessivel se não tem usuario salvo na sessão.

Os campos de data tanto do formulario new como edit está no formato texto. De primeira pus type="date" já que vem um calendário bem bonitinho. Pra escolher a data ele preenche no formato certo porém o valor enviado no form vem com um formato diferente quando se pega o value para enviar para a api. Não descobri como mudar isso, então optei por tipo texto e pus no placeholder o formato desejado(correto).

Para o form de edição do Naver optei para que quando acessado os campos do formulário já viessem preenchidos com o naver selecionado para edição. O desafio dessa feature foi que para cadastrar um naver o formato da data é DD/MM/AAAA. Porém quando vc pega os dados do naver na api do heroku a data vem no formato AAAA/MM/DDTIME. Pra resolver esse problema optei por formatar as datas dos navers no getServerSideProps da view navers. Assim tanto na exibição em detalhes do Naver como na view edit a data já está formatada corretamente.

# Example app with styled-components

This example features how you use a different styling solution than [styled-jsx](https://github.com/zeit/styled-jsx) that also supports universal styles. That means we can serve the required styles for the first render within the HTML and then load the rest in the client. In this case we are using [styled-components](https://github.com/styled-components/styled-components).

For this purpose we are extending the `<Document />` and injecting the server side rendered styles into the `<head>`, and also adding the `babel-plugin-styled-components` (which is required for server side rendering). Additionally we set up a global [theme](https://www.styled-components.com/docs/advanced#theming) for styled-components using NextJS custom [`<App>`](https://nextjs.org/docs/advanced-features/custom-app) component.

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-styled-components&project-name=with-styled-components&repository-name=with-styled-components)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example with-styled-components with-styled-components-app
# or
yarn create next-app --example with-styled-components with-styled-components-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

### Try it on CodeSandbox

[Open this example on CodeSandbox](https://codesandbox.io/s/github/vercel/next.js/tree/canary/examples/with-styled-components)

### Notes

When wrapping a [Link](https://nextjs.org/docs/api-reference/next/link) from `next/link` within a styled-component, the [as](https://styled-components.com/docs/api#as-polymorphic-prop) prop provided by `styled` will collide with the Link's `as` prop and cause styled-components to throw an `Invalid tag` error. To avoid this, you can either use the recommended [forwardedAs](https://styled-components.com/docs/api#forwardedas-prop) prop from styled-components or use a different named prop to pass to a `styled` Link.

<details>
<summary>Click to expand workaround example</summary>
<br />

**components/StyledLink.js**

```javascript
import Link from 'next/link'
import styled from 'styled-components'

const StyledLink = ({ as, children, className, href }) => (
  <Link href={href} as={as} passHref>
    <a className={className}>{children}</a>
  </Link>
)

export default styled(StyledLink)`
  color: #0075e0;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #40a9ff;
  }

  &:focus {
    color: #40a9ff;
    outline: none;
    border: 0;
  }
`
```

**pages/index.js**

```javascript
import StyledLink from '../components/StyledLink'

export default () => (
  <StyledLink href="/post/[pid]" forwardedAs="/post/abc">
    First post
  </StyledLink>
)
```

</details>
