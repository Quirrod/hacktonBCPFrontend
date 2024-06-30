import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import NavBar from '../components/navigation/NavBar'
import Footer from '../components/navigation/Footer'

export const Route = createRootRoute({
    component: () => (
        <main className="dark text-foreground bg-night min-h-[100dvh] font-inter">
            <NavBar />
            <Outlet />
            <Footer />
            <TanStackRouterDevtools />
        </main>
    ),
})
