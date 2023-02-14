import React from 'react';
import { useNavigate } from 'react-router-dom';

import Logo from '../../static/icons/logo';
import './styles.scss';

export default function Header() {
  const navigate = useNavigate();

  return (
    <div className="header-wrapper" onClick={() => navigate('/')}>
      <Logo />
    </div>
  );
}
