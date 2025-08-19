
type Props = {
    href: string;
    children: React.ReactNode;
    target: string;
}

export default function Link_Button({ href, children, target }: Props) {
    return (
        <a href={href} target={target} className="w-fit h-7 transition-all rounded-2xl bg-indigo-600 p-2 box-border active:bg-indigo-400 hover:bg-indigo-700">
            {children}
        </a>
    )
}