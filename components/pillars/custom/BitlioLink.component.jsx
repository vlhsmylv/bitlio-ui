import Link from "next/link";

const BitlioLink = ({href, children, className}) => {
    return (
        <Link href={href}>
            <span className={"cursor-pointer " + className}>
                {children}
            </span>
        </Link>
    )
}

export default BitlioLink;