import '../css/Header.css'
import { useNavigate } from 'react-router-dom';

// HeaderProps
type HeaderProps = {
    title: string
}

function Header({ title }: HeaderProps) {
    const navigate = useNavigate();

    const handleNavigate = (path: string) => {
        navigate(path);
    };

    return (
        <header className='header'>
            <div >
                <h2 className='header-title'>{title}</h2>
                <h3 className='header-title'>Liga sin Chill 2025</h3>
            </div>
            <nav>
                <button onClick={() => handleNavigate('/home')}>Home</button>
                <button onClick={() => handleNavigate('/generalStandings')}>General Standings</button>
                <button onClick={() => handleNavigate('/races')}>Races</button>
            </nav>
        </header>
    )
}

export default Header;