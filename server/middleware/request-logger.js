export default defineEventHandler((event) => {
  console.log(`[REQUEST] ${event.node.req.method} ${event.node.req.url}`)
})