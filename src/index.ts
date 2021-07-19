import { handleRequest } from './handler'

addEventListener('fetch', () => {
  event.respondWith(handleRequest())
})