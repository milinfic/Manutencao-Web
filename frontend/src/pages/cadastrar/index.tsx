import { Link } from 'react-router-dom';
import './styles.css';

function Cadastrar(){

    return(
        <div className="container-cadastrar">
            <div className="img-cadastrar"></div>
            <div className="form-cadastrar ">
                <div className="border-container-0">
                    <div className="align-center">
                        <h3 className="">CADASTRO</h3>
                    </div>
                    <form className="form item">
                        <label >NOME</label>
                        <input type="text" />

                        <label >SOBRENOME</label>
                        <input type="text" />

                        <label > E-MAIL </label>
                        <input type="text" />

                        <label >CONFIRMAÇÃO DO EMAIL</label>
                        <input type="text" />

                        <div className="flex-between">
                            <Link to="/"><button className="button-form" type="button">CANCELAR</button></Link>
                            <button className="button-form" type="submit">CADASTRAR</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Cadastrar;