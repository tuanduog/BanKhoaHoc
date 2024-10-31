import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh', width: '100%' }}>
      <div className="p-4" style={{ border: '1px solid black', backgroundColor: '#f8f9fa' }}>
        <form style={{ width: '350px' }}>
          <h3 className="text-center mb-4">Login</h3>

          {/* Email Input */}
          <div className="form-group mb-3">
            <label className='mb-2'>Email address</label>
            <input type="email" id="form2Example1" className="form-control" />
          </div>

          {/* Password Input */}
          <div className="form-group">
            <label className='mb-2'>Password</label>
            <input type="password" id="form2Example2" className="form-control" />
          </div>

          {/* Remember Me and Forgot Password */}
          <div className="row" style={{ backgroundColor: '#f8f9fa', border: 'none' , padding: '27px', marginTop: '7px'}}>
            <div className="col d-flex justify-content-center">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="form2Example31" defaultChecked />
                <label className="form-check-label"> Remember me </label>
              </div>
            </div>
            <div className="col text-right">
              <a href="#!">Forgot password?</a>
            </div>
          </div>

          {/* Sign In Button */}
            <div className="d-flex justify-content-center">
                <button type="button" className="btn btn-primary mb-4" style={{ width: '100%' }}>
                    Sign in
                </button>
            </div>

          {/* Social Media Sign-In Options */}
          <div className="text-center">
            <p>Not a member? <Link to="/register/register">Register</Link></p>
            <p>or sign up with:</p>
            <div>
              <button type="button" className="btn btn-link btn-floating mx-1" style={{ color: '#3b5998' }}>
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </button>
              <button type="button" className="btn btn-link btn-floating mx-1" style={{ color: '#db4a39' }}>
                <FontAwesomeIcon icon={faGoogle} size="lg" />
              </button>
              <button type="button" className="btn btn-link btn-floating mx-1" style={{ color: '#1da1f2' }}>
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </button>
              <button type="button" className="btn btn-link btn-floating mx-1" style={{ color: '#333' }}>
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
