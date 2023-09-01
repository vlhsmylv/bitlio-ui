import Link from "next/link";

const BitlioLink = ({target, href, children, className}) => {
    return (
        <Link href={href}>
            <a target={target} className={"text-decoration-none cursor-pointer " + className}>
                {children}
            </a>
        </Link>
    )
}

export default BitlioLink;