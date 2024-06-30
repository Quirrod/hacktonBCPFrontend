import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/about-us/')({
  component: () => <div>Hello /about-us/!</div>
})