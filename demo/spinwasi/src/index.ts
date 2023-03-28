import { HandleRequest, HttpRequest, HttpResponse } from "@fermyon/spin-sdk"

const encoder = new TextEncoder()

export const handleRequest: HandleRequest = async function (request: HttpRequest): Promise<HttpResponse> {
  console.log('new request coming...')
  return {
    status: 200,
    headers: { "Content-Type": "application/json" },
    body: encoder.encode(JSON.stringify({ message: "Hello from TS-SDK" })).buffer
  }
}
