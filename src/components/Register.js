import React from 'react';
import { Link } from 'react-router-dom';

function Register(props) {


  return (
    <div className="auth">
      <h2 className="auth__title">Регистрация</h2>
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
        <button type="submit" className="auth__save-btn btn">Зарегистрироваться</button>
        <p className="auth__text">Уже зарегистрированы? <Link className="auth__link" to="/sign-in">Войти</Link></p>
      </form>
    </div>
  )
}

export default Register;