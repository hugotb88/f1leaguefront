import '../css/Header.css'

// HeaderProps
type HeaderProps = {
    title: string
}

function Header({ title }: HeaderProps) {
    return (
        <header className='header'>
            <div >
                <h2 className='header-title'>{title}</h2>
                <h3 className='header-title'>Liga sin Chill 2025</h3>
            </div>
        </header>
    )
}

export default Header;