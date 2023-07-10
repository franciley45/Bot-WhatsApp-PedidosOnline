# Bot-WhatsApp-PedidosOnline

# Food Commerce GPT

Bot de atendimento para o Food Commerce utilizando modelo GPT da OpenAI. Ele foi desenvolvido em Typescript.

## Como funciona?

O bot utiliza o modelo GPT da OpenAI para gerar respostas para as perguntas dos usuários simulando um atendimento humano. Este atendimento é feito através do WhatsApp utilizando o [Venom](https://github.com/orkestral/venom).

Com este prompt você poderá adaptar o bot para o seu negócio ou para outros nichos, como clinicas, etc.

![Demo](./docs/demo.png)

## Como executar?

Para executar o bot, você precisará de uma conta no WhatsApp, do [Node.js](https://nodejs.org/en/) e [Docker](https://www.docker.com/products/docker-desktop/) instalados.

Você irá precisar também de uma conta e API Key no [OpenAI](https://platform.openai.com/account/api-keys).

Com isso em mãos, você precisará criar um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
OPENAI_API_KEY=sk-xxx <- Sua API Key do OpenAI
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_DB=0
```

Após isso, você precisará instalar as dependências do projeto:

```bash
npm install
```

E então, executar o bot:

```bash
npm run dev
```

Para que você possa testar o bot, você precisará de um aplicativo do WhatsApp instalado no seu celular e escanear o QR Code que será gerado no terminal.

**Importante:** devido ao fato de utilizar uma API não autorizada do WhatsApp pode gerar bloqueios e banimentos de números, por isso, teste com um número que você não se importe em perder. Não se responsabilizamos por qualquer dano causado pelo uso deste código.
