declare module '*.vue' {
  import type { defineComponent } from 'vue'

  const Component: ReturnType<typeof defineComponent>
  export default Component
}

declare module 'virtual:message' {
  const message: string
  export { message }
}