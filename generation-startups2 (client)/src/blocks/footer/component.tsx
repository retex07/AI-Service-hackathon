import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Logo from '../../static/icons/logo';
import Mail from '../../static/icons/mail';
import Phone from '../../static/icons/phone';
import './styles.scss';

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  return (
    <footer className="footer-container">
      <div onClick={() => setIsOpen(!isOpen)} className="footer">
        {isOpen ? (
          <img src={require('../../static/img/up.png')} alt="up" className="footer__open" />
        ) : (
          <img src={require('../../static/img/down.png')} alt="down" className="footer__open" />
        )}
      </div>
      {isOpen && (
        <div className="footer__drop">
          <div>
            <h3>Навигация</h3>
            <ul>
              <li onClick={() => navigate('/')}>Главная</li>
              <li onClick={() => navigate('/generation')}>Генерация</li>
              <li onClick={() => navigate('/')}>О технологии</li>
            </ul>
            <div className="footer__drop__logo1">
              <Logo />
            </div>
          </div>
          <div>
            <h3>Связаться с нами</h3>
            <ul>
              <li>
                <Mail />
                <a href="mailto:taushkanov.a.s@mail.ru">taushkanov.a.s@mail.ru</a>
              </li>
              <li>
                <Phone />
                <a href="tel:89234912064">+7(923)491-20-64</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Другое</h3>
            <ul>
              <li>Политика конфиденциальности</li>
              <li>Условия использования</li>
            </ul>
          </div>
          <div className="footer__drop__logo2">
            <Logo />
          </div>
        </div>
      )}
    </footer>
  );
}
