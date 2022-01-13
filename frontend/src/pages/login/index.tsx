import './styles.css';


function Login() {
    return (
        <div className='background-login'>
            <div>
                <section className='container border-container'>
                    <h2>Login</h2>

                    <form className="form-login">
                        <label >Usuario:</label> <br />
                        <input type="text" id="fname" name="fname" placeholder="Digite o seu login"></input><br />
                        <label >Senha:</label><br />
                        <input type="password" placeholder="Senha"></input><br />

                        <div className='button-space-login'>
                            <div className='item'> <button className='button-form' type="submit" value="Submit">Logar</button></div>
                            <div > <a href="/">Esqueci minha senha</a></div>
                        </div>
                    </form>

                </section>

                <div className="border-container container-login-inf">
                    <a href="/cadastrar">Cadastre-se agora</a>
                </div>

            </div>
            
        </div>
    )
}

export default Login;