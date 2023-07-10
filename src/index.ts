import { Message, Whatsapp, create } from "venom-bot"
import { openai } from "./lib/openai"
import { ChatCompletionRequestMessage } from "openai"
import { initPrompt } from "./utils/initPrompt"

const storeName = "Los Italianos Pizzaria"
const orderCode = '#sk-123456'

const customerChat: ChatCompletionRequestMessage[] = [
  {
    role: "system",
    content: initPrompt(storeName, orderCode),
  },
]

async function completion(
  messages: ChatCompletionRequestMessage[]
): Promise<string | undefined> {
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    temperature: 0,
    max_tokens: 256,
    messages,
  })

  return completion.data.choices[0].message?.content
}

create({
  session: "food-gpt",
  disableWelcome: true,
})
  .then(async (client: Whatsapp) => await start(client))
  .catch((err) => {
    console.log(err)
  })

async function start(client: Whatsapp) {
  client.onMessage(async (message: Message) => {
    if (!message.body || message.isGroupMsg) return

    customerChat.push({
      role: "user",
      content: message.body
    })

    /* console.log("message:", message.body) */
    console.log("customerChat:", customerChat[0].content)
    
    const response = (await completion([{
      role: "user",
      content: message.body
    }])) || "Não entendi..."
    
    customerChat.push({
      role: "assistant",
      content: response
    })

    await client.sendText(message.from, response)
  })
}