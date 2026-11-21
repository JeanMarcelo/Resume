
# Currículo digital

## Chat JeanBotIA (n8n)

O chat envia as perguntas diretamente do navegador para o webhook do n8n, usando Axios. Não há backend neste projeto.

1. O chat já aponta para o webhook de produção `https://programming-gsm-cut-referred.trycloudflare.com/webhook/portfolio-chat`.
2. Se precisar trocar o endereço, copie `.env.example` para `.env.local` e altere `REACT_APP_N8N_WEBHOOK_URL`.
3. O Webhook recebe `chatInput` e `sessionId` em `$json.body`. O chat espera que o nó Respond to Webhook retorne a resposta como texto ou num campo `output`, `response`, `text`, `answer` ou `message`.
4. Ative o workflow de produção e conecte o Webhook aos nós de RAG e Respond to Webhook.
5. Configure Allowed Origins (CORS) com a origem exata do site, sem barra no final. Para desenvolvimento, use `http://localhost:3000`; na publicação, adicione também o domínio do currículo. A lista aceita origens separadas por vírgula.
6. Reinicie o servidor React depois de alterar `.env.local`.

Variáveis `REACT_APP_*` são incluídas no JavaScript enviado ao navegador. Use uma URL pública do webhook e não coloque credenciais ou segredos nessa variável.

## Rodar localmente

```bash
npm install
npm start
```
