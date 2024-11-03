import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

import axios from 'axios';


const Register = () => {
  // function xemMK(){
  //   var x = document.getElementById("logpass");
  //   if(x.type === "password"){
  //     x.type = "text";
  //   } else {
  //     x.type = "password";
  //   }
  // }
  // const [showRegisterForm, setShowRegisterForm] = useState(true);
  // const [showLoginForm, setShowLoginForm] = useState(true);

  const [values, setValues] = useState({
    name: '',
    email: '',
    password: ''
  });
  const navigate = useNavigate();
  // useEffect(() => {
    
  //   if (isModalOpen) {
  //     document.body.style.overflow = 'hidden';
  //   } else {
  //     document.body.style.overflow = 'auto';
  //   }

  //   return () => {
  //     document.body.style.overflow = 'auto';
  //   };
  // }, [isModalOpen]);
  // const handleRegisterClick = ()=> {
  //   setShowRegisterForm(false);
  //   setShowLoginForm(true);
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8081/register/register', values)
      .then(res => {
        if(res.data.Status === "Success"){
          navigate('/login/login', {state: {username: values.name}});
          
        } else alert("Error");
        //handleRegisterClick();
      })
      .catch(err => {
        console.error("Error during registration:", err);
      });
  };
  

  return (
    <>

    <div id='registerForm' className="container d-flex justify-content-center align-items-center" style={{ height: '100vh', width: '100%' }}>
      <div className="p-4" style={{ border: '1px solid black', backgroundColor: '#f8f9fa' }}>
        <form onSubmit={handleSubmit} style={{ width: '350px' }}>
          <h3 className="text-center mb-4">Đăng ký</h3>

          <div className="form-group mb-3">
            <label className='mb-2'>Tên đăng nhập</label>
            <input type="text" id="resname" className="form-control" onChange={e => setValues({...values, name : e.target.value})} required/>
          </div>
          {/* Email Input */}
          <div className="form-group mb-3">
            <label className='mb-2'>Địa chỉ Email</label>
            <input type="email" id="resemail" className="form-control"  onChange={e => setValues({...values, email : e.target.value})} required/>
          </div>

          {/* Password Input */}
          <div className="form-group mb-3">
            <label className='mb-2'>Mật khẩu</label>
            <input type="password" id="respass" className="form-control"  onChange={e => setValues({...values, password : e.target.value})} required/>
          </div>

          <div className="form-group">
            <label className='mb-2'>Xác nhận lại mật khẩu</label>
            <input type="password" id="confirmrespass" className="form-control" required/>
          </div>

         
              <div className="form-check mb-4 mt-4">
                <input className="form-check-input" type="checkbox" id="form2Example32" required/>
                <label className="form-check-label"> Tôi đồng ý với các điều khoản người dùng </label>
              </div>
            

          {/* Sign In Button */}
            <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-primary mb-4" style={{ width: '100%' }}>
                    Đăng ký
                </button>
            </div>

          {/* Social Media Sign-In Options */}
          <div className="text-center">
            <p>Bạn đã có tài khoản? <Link to='/login/login'>Đăng nhập</Link></p>
            <p>hoặc đăng ký với:</p>
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
    
    </>
  )
}

export default Register
