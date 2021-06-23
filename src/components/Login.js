import React from 'react';
import { Link } from 'react-router-dom';

function Login(props) {


  return (
    <div className="auth">
      <h2 className="auth__title">Вход</h2>
      <form className="auth__form">
        <input
          type="email"
          name="registerEmail"
          id="register-email"
          className="auth__input"
          placeholder="Email"
          minLength="6" maxLength="30"
          // onChange={handleNameChange}
          // value={email || ''}
          required
        />
        <input
          type="password"
          name="registerPassword"
          id="register-password"
          className="auth__input"
          placeholder="Пароль"
          minLength="6" maxLength="30"
          // onChange={handleNameChange}
          // value={password || ''}
          required
        />
        <button type="submit" className="auth__save-btn btn">Войти</button>
      </form>
    </div>
  )
}

export default Login;