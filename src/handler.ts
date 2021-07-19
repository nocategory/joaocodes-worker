import * as prismic from '@prismicio/client'

export async function handleRequest(): Promise<Response> {
  const client = prismic.createClient(PRISMIC_ENDPOINT, {
    accessToken: PRISMIC_TOKEN,
    fetch,
  })

  const ref = await client.getRefByLabel('Master')
  client.queryContentFromRef(ref.ref)

  const data = await client.getByID(PRISMIC_ID)
  return new Response(JSON.stringify(data.data), {
    headers: { 'content-type': 'application/json;charset=UTF-8' },
  })
}