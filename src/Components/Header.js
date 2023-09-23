export function Header(props) {
    const { heading, nav } = props
    const test = {
        ss: "ss",
        ee: "ss",
    }
    const ee = "21212"
    return (
        <header>
            <h1>{heading}</h1>
            <p>{nav[0]}</p>
            <div>{test}</div>
        </header>
    )
}
