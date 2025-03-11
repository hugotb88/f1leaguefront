import '../css/Header.css'

// HeaderProps
type HeaderProps = {
    title: string
}

function Header({ title }: HeaderProps) {
    return (
        <header className='header'>
            <div >
                <h2>Este es el pinshi Header mamalon culeros</h2>
                <h3>{title}</h3>
            </div>
        </header>
    )
}

export default Header;