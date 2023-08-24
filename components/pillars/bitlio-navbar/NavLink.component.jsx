import Link from "next/link"

const NavLink = ({href, children}) => {
    return (
        <Link href={href}>
            <span className="nav-link text-light cursor-pointer">
                {children}
            </span>
        </Link>
    )
}

export default NavLink;