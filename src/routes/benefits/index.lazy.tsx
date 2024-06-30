import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/benefits/')({
  component: () => <div>Hello /benefits/!</div>
})