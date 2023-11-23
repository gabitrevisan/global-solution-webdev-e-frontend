import { useNavigate } from 'react-router-dom';
import icon from '../assets/menu-icon.jpg';

function Nav() {

    const navigate = useNavigate();

    const handleLogout = async () => {
        sessionStorage.removeItem('usuario');
        sessionStorage.removeItem('email')
        sessionStorage.removeItem('senha');
        alert('Sessão encerrada.')
        navigate('/')
    }

    const handleSobre = () => {
        const atualUser = sessionStorage.getItem('usuario');
        if (atualUser) {
            navigate('/sobre');
        } else {
            alert('Efetue o login.');
        }
    }

    const handleContato = () => {
        const atualUser = sessionStorage.getItem('usuario');
        if (atualUser) {
            navigate('/contato');
        } else {
            alert('Efetue o login.');
        }
    }

    const handleImpacto = () => {
        const atualUser = sessionStorage.getItem('usuario');
        if (atualUser) {
            navigate('/impacto');
        } else {
            alert('Efetue o login.');
        }
    }

    const handleProblema = () => {
        const atualUser = sessionStorage.getItem('usuario');
        if (atualUser) {
            navigate('/problema');
        } else {
            alert('Efetue o login.');
        }
    }

    const handleSolucao = () => {
        const atualUser = sessionStorage.getItem('usuario');
        if (atualUser) {
            navigate('/solucao');
        } else {
            alert('Efetue o login.');
        }
    }

    const handleHome = (e) => {
        e.preventDefault();
        const atualUser = sessionStorage.getItem('usuario');
        if (atualUser) {
            navigate('/home');
        } else {
            alert('Efetue o login.');
        }
    }

    const getUser = sessionStorage.getItem('usuario')
    const getEmail = sessionStorage.getItem('email')

    return (
        <>
        <nav className="navbar navbar-expand-lg mb-4">
            <div className="container-fluid">
                <button className="btn navbar-brand" onClick={handleHome}>SusTech</button>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src={icon} alt="menu" width="50" height="50" />
                            </a>
                            <ul className="dropdown-menu">
                                    <li><button className="dropdown-item" onClick={handleHome}>Home</button></li>
                                    <li><button className="dropdown-item" onClick={handleSobre}>Sobre</button></li>
                                    <li><button className="dropdown-item" onClick={handleProblema}>Problema</button></li>
                                    <li><button className="dropdown-item" onClick={handleSolucao}>Solução</button></li>
                                    <li><button className="dropdown-item" onClick={handleImpacto}>Impacto</button></li>
                                    <li><button className="dropdown-item" onClick={handleContato}>Contato</button></li>
                                    <li><button className="dropdown-item" onClick={handleLogout}>Logout</button></li>
                                    </ul>
                        </li>
                    </ul>
                    <span className="navbar-text">
                    {getEmail ? (
                                    <p className='user'>Nome: {getUser} | Email: {getEmail}</p>
                                ) : (
                                    <p></p>
                                )}
                    </span>
                </div>
            </div>
        </nav>
    </>
    )
}

export default Nav