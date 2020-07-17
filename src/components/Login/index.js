import React from 'react';

// import { Container } from './styles';

function Login(props) {
  setTimeout(() => {
    props.history.push('/about')
  }, 2000)

  return (
    <div className='container'>
      <h4 className='center'>Login</h4>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut in inventore exercitationem eligendi earum. Suscipit aut dolorum sit qui. Deleniti tenetur ducimus velit iusto architecto vitae facere. Repudiandae, eius molestiae!</p>
    </div>
  );
}

export default Login;