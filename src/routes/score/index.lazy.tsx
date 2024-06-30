import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/score/')({
  component: () => <div>Hello /score/!</div>
})