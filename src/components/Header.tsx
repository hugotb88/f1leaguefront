import '../css/Header.css'
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';


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
        <>
            <header className='header'>
                <div >
                    <h2 className='header-title'>{title}</h2>
                    <h3 className='header-title'>Liga sin Chill 2025</h3>

                </div>
            </header>
            <Container fluid>
                <Row className='row-button-header'>
                    <nav>
                        {/* <Button className='button-header' onClick={() => handleNavigate('/home')}>Home</Button> */}
                        <Button className='button-header' onClick={() => handleNavigate('/generalStandings')}>General Standings</Button>
                        <Button className='button-header' onClick={() => handleNavigate('/races')}>Races</Button>
                    </nav>
                </Row>
            </Container>
        </>
    )
}

export default Header;