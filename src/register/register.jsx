import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';



const Register = () => {
  function xemMK(){
    var x = document.getElementById("matkhaulog");
    if(x.type === "password"){
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  const [showRegisterForm, setShowRegisterForm] = useState(true);
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [username, setUsername] = useState('');


  const handleRegisterClick = ()=> {
    
    setShowRegisterForm(false);
    setShowLoginForm(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegisterClick();
  };

  return (
    <>
    {showRegisterForm && (
    <div id='registerForm' className="container d-flex justify-content-center align-items-center" style={{ height: '100vh', width: '100%' }}>
      <div className="p-4" style={{ border: '1px solid black', backgroundColor: '#f8f9fa' }}>
        <form onSubmit={handleSubmit} style={{ width: '350px' }}>
          <h3 className="text-center mb-4">Register</h3>

          <div className="form-group mb-3">
            <label className='mb-2'>Tên đăng nhập</label>
            <input type="text" id="tendangnhapres" className="form-control" onChange={(e) => setUsername(e.target.value)} />
          </div>
          {/* Email Input */}
          <div className="form-group mb-3">
            <label className='mb-2'>Địa chỉ Email</label>
            <input type="email" id="emailres" className="form-control" />
          </div>

          {/* Password Input */}
          <div className="form-group mb-3">
            <label className='mb-2'>Mật khẩu</label>
            <input type="password" id="matkhaures" className="form-control" />
          </div>

          <div className="form-group">
            <label className='mb-2'>Xác nhận lại mật khẩu</label>
            <input type="password" id="form2Example2" className="form-control" />
          </div>

         
              <div className="form-check mb-4 mt-4">
                <input className="form-check-input" type="checkbox" id="form2Example31" />
                <label className="form-check-label"> Tôi đồng ý với các điều khoản người dùng </label>
              </div>
            

          {/* Sign In Button */}
            <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-primary mb-4" style={{ width: '100%' }}>
                    Sign up
                </button>
            </div>

          {/* Social Media Sign-In Options */}
          <div className="text-center">
            <p>You already have a account? <Link to='/login/login'>Login</Link></p>
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
    )}
    {showLoginForm && (
    <div id='loginForm' className="container d-flex justify-content-center align-items-center" style={{ height: '100vh', width: '100%' }}>
      <div className="p-4" style={{ border: '1px solid black', backgroundColor: '#f8f9fa' }}>
        <form style={{ width: '350px' }}>
          <h3 className="text-center mb-4">Login</h3>

          {/* Email Input */}
          <div className="form-group mb-3">
            <label className='mb-2'>Địa chỉ email hoặc tên đăng nhập</label>
            <input type="email" id="tendangnhaplog" className="form-control" value={username}/>
          </div>

          {/* Password Input */}
          <div className="form-group">
            <label className='mb-2'>Mật khẩu</label>
            <input type="password" id="matkhaulog" className="form-control" />
          </div>
          <div className='form-group'>
            <input type='checkbox' className='mt-2' onClick={xemMK}/> Xem mật khẩu
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
                <button type="submit" id='loginButton' className="btn btn-primary mb-4" style={{ width: '100%' }}>
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
    )}
    </>
  )
}

export default Register
