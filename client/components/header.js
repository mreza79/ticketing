import Link from "next/link"

const Header = ({ currentUser }) => {
    const links = [
        !currentUser && { label: "Sign up", href: "/auth/signup" },
        !currentUser && { label: "Sign in", href: "/auth/signin" },
        currentUser && { label: "Sell Tickets", href: "/tickets/new" },
        currentUser && { label: "My Orders", href: "/orders" },
        currentUser && { label: "Sign out", href: "/auth/signout" },
    ].filter(linkConfig => linkConfig).map(({ label, href }) => {
        return <li key={href} className="nav-item nav-link ">
            <Link className="text-decoration-none" href={href}>
                {label}
            </Link>
        </li>
    })

    return (
        <nav className="navbar navbar-dark bg-dark border-body" data-bs-theme="dark">
            <Link className="navbar-brand" href="/">
                GitTix
            </Link>

            <div className="d-flex justify-content-end">
                <ul className="nav d-flex align-items-center">
                    {links}
                </ul>
            </div>
        </nav>
    )
}

export default Header