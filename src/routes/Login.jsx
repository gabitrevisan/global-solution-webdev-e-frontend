import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {

    const navigate = useNavigate();
    const email = useRef();
    const senha = useRef();

    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/usuarios')
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                setUsuarios(res);
            })
    }, []);

    function validacao() {
        for (var i = 0; i < usuarios.length; i++) {
            if (usuarios[i].email === email.current.value && usuarios[i].senha === senha.current.value) {
                sessionStorage.setItem('usuario',usuarios[i].nome)
                return true
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validacao()) {
            let token =
                Math.random().toString(16).substring(2) +
                Math.random().toString(16).substring(2);
            sessionStorage.setItem('email', email.current.value);
            sessionStorage.setItem('senha', token);
            navigate('/home');
        } else {
            alert('Dados inválidos.');
        }
    };

    return (
        <>
            <section className="login">
                <div className='card'>
                    <form className='login-form' onSubmit={handleSubmit}>
                        
                        <div className="mb-3 input">
                            <label htmlFor="exampleFormControlInput1" className="form-label"><p>Usuário:</p></label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" required="required" ref={email}></input>
                        </div>
                        <div className="mb-3 input">
                            <label htmlFor="exampleFormControlInput1" className="form-label"><p>Senha:</p></label>
                            <input type="password" className="form-control" id="exampleFormControlInput1" required="required" ref={senha}></input>
                        </div>
                        <div className='areabutton'>
                            <button className='btn login-button' type='submit'>Login</button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Login