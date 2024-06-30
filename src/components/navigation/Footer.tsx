import { Link } from "@tanstack/react-router"
import { navBarLinks } from "../../data/shared"
import Logo from "../../assets/home/logo.svg"

function Footer() {
    return (
        <footer className="border-t-1 py-10 flex flex-col gap-10 items-center">
            <section className="flex w-[80%] justify-between">
                <span>
                    <h4>SUSTAIN SCORE</h4>
                    <ul>
                        {navBarLinks.map((link) => (
                            <Link key={link.url} className='hover:underline flex gap-1 items-center' to={link.url}>
                                {link?.decoration && link.decoration}
                                {link.title}
                            </Link>
                        ))}
                    </ul>
                </span>
                <Link to='/' className='font-questrial flex gap-1 items-center justify-center'>
                    <img className='size-[40px]' src={Logo} alt="Sustain Score Logo" />
                    <span className='font-bold text-lg'>SustainScore</span>
                </Link>
            </section>
            <p className="text-[0.75rem]">
                {`©2024 Hecho con amor <3 por Las Spice Girls`}
            </p>
        </footer>
    )
}

export default Footer
