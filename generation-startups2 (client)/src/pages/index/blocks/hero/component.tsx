import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../../../components/Button';
import Effects from '../../../../static/icons/effects';
import Lampa from '../../../../static/icons/lampa';
import Screep from '../../../../static/icons/screep';
import Sun from '../../../../static/icons/sun';
import './styles.scss';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div className="hero">
      <img src={require('../../../../static/img/lamp.png')} alt="lamp" className="lamp" />
      <div className="hero__wrapper">
        <section className="hero__section-text">
          <h1>Ai-сервис генерации стартап-идеи</h1>
          <div className="screep">
            <Screep />
            <h3>
              Стартап — это <b>новый</b> финансовый проект, цель которого — быстро окупить вложенные инвестиции и
              получить прибыль.
            </h3>
          </div>
          <div className="screep">
            <Sun />
            <h3>
              У Вас есть шанс стать частью чего-то <b>нового</b>, для этого возпосльзуйтесь нашим сервисом, который сам
              подберет для вас <b>подходящую идею</b>
            </h3>
          </div>
          <div className="hero__effects">
            <Effects />
          </div>
          <h3>Давайте выберем, что для Вас интересно</h3>
          <div onClick={() => navigate('/generation')} className="hero__btn-small">
            <Button text="Перейти к генерации" color="gray" size="middle" />
          </div>
        </section>
        <div className="examples">
          <h1>примеры идей для вашего стартапа</h1>
          <div className="gridCards">
            <div className="card">
              <Lampa />
              <div className="card__text">Умный контрольный список вещей, который нужно сделать</div>
            </div>
            <div className="card">
              <Lampa />
              <div className="card__text">
                Стартап, соединяющий арендодателей с арендаторами, создавая форму страхования для арендодателей
              </div>
            </div>
            <div className="card">
              <Lampa />
              <div className="card__text">
                Место, где разработчики могут покупать и продавать свой код. Стартап хочет стать местом для
                разработчиков, чтобы продавать свой код глобальной аудитории
              </div>
            </div>
            <div className="card">
              <Lampa />
              <div className="card__text">
                Cоздание инновационных товаров для животных, чтобы воспользоваться тем фактом, что каждый
                третий-четвертый человек в мире имеет домашнее животное
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
