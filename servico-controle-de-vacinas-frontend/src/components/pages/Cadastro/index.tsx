function Cadastro() {
  return (
      <>
      <br></br>
      <br></br>
      <form className="row g-3">    
      <div className="col-md-4">
        <label htmlFor="validationServer01" className="form-label">Nome<br/></label>
        <input type="text" className="form-control is-valid" id="validationServer01"
        required></input>
        <div className="valid-feedback">
        </div>
      </div>
      <br></br>
      <div className="col-md-4">
        <label htmlFor="validationServer02" className="form-label">CPF<br/></label>
        <input type="text" className="form-control is-valid" id="validationServer02"
        aria-describedby="validationServer02Feedback" required></input>
        <div id="validationServer02Feedback" className="valid-feedback">
        </div>
      </div>  
      <br></br>
      <div className="col-md-4">
        <label htmlFor="validationServerUsername" className="form-label">Email<br/></label>
        <div className="input-group has-validation">        
          <input type="text" className="form-control is-invalid" id="validationServerUsername" 
          aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required></input>
          <div id="validationServerUsernameFeedback" className="invalid-feedback">
          </div>
        </div>
      </div>
      <br></br>
      <div className="col-md-6">
        <label htmlFor="validationServer03" className="form-label">Endereço<br/></label>
        <input type="text" className="form-control is-invalid" id="validationServer03" 
        aria-describedby="validationServer03Feedback" required></input>
        <div id="validationServer03Feedback" className="invalid-feedback">
        </div>
      </div>
      <br></br>
      <div className="col-md-3">
        <label htmlFor="validationServer05" className="form-label">Número<br/></label>
        <input type="text" className="form-control is-invalid" id="validationServer05" aria-describedby=
        "validationServer05Feedback" required></input>
        <div id="validationServer05Feedback" className="invalid-feedback">
        </div>
      </div>
      <br></br>
      <div className="col-md-3">
        <label htmlFor="validationServer05" className="form-label">CEP<br/></label>
        <input type="text" className="form-control is-invalid" id="validationServer05" aria-describedby=
        "validationServer05Feedback" required></input>
        <div id="validationServer05Feedback" className="invalid-feedback">
        </div>
      </div>
      <br></br>
      <div className="col-md-3">
        <label htmlFor="validationServer04" className="form-label">Cidade<br/></label>
        <select className="form-select is-invalid" id="validationServer04" aria-describedby=
        "validationServer04Feedback" required>
          <option selected disabled value="">Opção...</option>
          <option>Cabreúva</option>
          <option>Indaiatuba</option>
          <option>Itu</option>
          <option>Porto Feliz</option>
          <option>Salto</option>
          <option>Sorocaba</option>
          </select>
        <div id="validationServer04Feedback" className="invalid-feedback">
        </div>
      </div>
      <br></br>
      <div className="col-md-6">
        <label htmlFor="validationServer03" className="form-label">Complemento<br/></label>
        <input type="text" className="form-control is-invalid" id="validationServer03" 
        aria-describedby="validationServer03Feedback" required></input>
        <div id="validationServer03Feedback" className="invalid-feedback">
        </div>
      </div>
      <br></br>
      <div className="col-md-3">
        <label htmlFor="validationServer04" className="form-label">Sexo<br/></label>
        <select className="form-select is-invalid" id="validationServer04" aria-describedby=
        "validationServer04Feedback" required>
          <option selected disabled value="">Opção...</option>
          <option>Masculino</option>
          <option>Feminino</option>        
          </select>
        <div id="validationServer04Feedback" className="invalid-feedback">
        </div>
      </div>
      <br></br>
      <br></br>
      <div className="col-auto">
      <label htmlFor="inputPassword2" className="form-label">Cadastrar Senha</label>
      <input type="password" className="form-control" id="inputPassword2" 
      placeholder="Password"></input>
      </div>    
      <div className="col-12">
        <button className="btn btn-primary" type="submit">Enviar</button>
      </div>
      <br></br>
      <br></br>
      <br></br> 
      <br></br>
      <br></br>
    </form>  
    </>
  )
  }
  
  export default Cadastro