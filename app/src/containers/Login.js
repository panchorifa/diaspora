import React from 'react'
import {withRouter} from 'react-router-dom'
import ReCAPTCHA from 'react-google-recaptcha'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {recaptcha: null}
  }

  handleLogin() {
    if(this.state.recaptcha) {
      this.props.history.push('/dashboard')
    }
  }

  onChange(value) {
    console.log(value)
    this.setState({recaptcha: value})
  }

  render() {
    return (
      <div className="container g-mt-80">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="card-group mb-0">
              <div className="card p-4">
                <div className="card-body">
                  <h1>Login</h1>
                  <p className="text-muted">Sign In to your account</p>
                  <form>
                    <div className="input-group mb-3">
                      <span className="input-group-addon"><i className="icon-user"></i>
                      </span>
                      <input type="text" className="form-control"
                          style={{maxWidth: '18.9em'}}
                          placeholder="Username"/>
                    </div>
                    <div className="input-group mb-4">
                      <span className="input-group-addon"><i className="icon-lock"></i>
                      </span>
                      <input type="password" className="form-control"
                          style={{maxWidth: '18.9em'}}
                        placeholder="Password"/>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <ReCAPTCHA ref="recaptcha"
                          sitekey="6LdtqTIUAAAAAGU6fL-YKdYnlZIOQN3eSS1yomSF"
                          onChange={this.onChange.bind(this)}/>
                        <button onClick={this.handleLogin.bind(this)} className="btn btn-primary px-4 g-mt-20">Login</button>
                      </div>
                    </div>

                  </form>
                </div>
              </div>
              <div className="card text-white bg-primary d-md-down-none" style={{width:"44%", paddingTop: '4em'}}>
                <div className="card-body text-center">
                  <div>
                    <img src="/images/spider.png"
                        style={{height: '14em'}}/>
                    <h2 style={{fontFamily: "'Audiowide', cursive"}}>CSPIDERS</h2>
                    <p>Crawling Spiders</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Login)

// <div className="col-6 text-right">
//     <button type="button" className="btn btn-link px-0">Forgot password?</button>
// </div>

// <button type="button" className="btn btn-primary active mt-3">Register Now!</button>
