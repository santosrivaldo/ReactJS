import './f-login.css';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div class="content">
            <div id="login">
                <form method="post" action="">
                    <h1>Login</h1>
                    <p>
                        <label for="nome_login">Seu nome</label>
                        <input id="nome_login" name="nome_login" required="required" type="text" placeholder="ex. contato@htmlecsspro.com" />
                    </p>

                    <p>
                        <label for="email_login">Seu e-mail</label>
                        <input id="email_login" name="email_login" required="required" type="password" placeholder="ex. senha" />
                    </p>

                    <p>
                        <input type="checkbox" name="manterlogado" id="manterlogado" value="" />
                        <label for="manterlogado">Manter-me logado</label>
                    </p>

                    <p>
                        <input type="submit" value="Logar" />
                    </p>

                    <p  class="link" >Ainda não tem conta? <Link to="/register"  > Ir para Login </Link>
                    </p>
                </form>
            </div>
        </div>

    );
}

export default Login;