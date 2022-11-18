import './styles.css'

function Login() {
  return (
<>

<div className='login'>
<br></br>
<br></br>
<br></br>
<form className="row g-3">
<div className="col-md-4">
      <label htmlFor="validationServer02" className="form-label">CPF<br/></label>
      <input type="text" className="form-control is-valid" id="validationServer02"
      aria-describedby="validationServer02Feedback" required></input>
      <div id="validationServer02Feedback" className="valid-feedback">
      </div>
    </div> 
    <p></p>
  <div className="col-auto">
    <label htmlFor="inputPassword2" className="form-label">Senha</label>
    <input type="password" className="form-control" id="inputPassword2" 
    placeholder="Password"></input>
  </div>
  <p></p>
  <div className="col-auto">
  <button type="submit" className="btn btn-primary mb-3">Confirm identity</button>
  </div>
</form>
<br></br>
<br></br>
</div>
</>
  )
}

export default Login