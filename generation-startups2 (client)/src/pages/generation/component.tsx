import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import Api from '../../api';
import Footer from '../../blocks/footer';
import Header from '../../blocks/header';
import './styles.scss';

interface ValuesForm {
  text: string;
}

export default function GenerationPage() {
  const { register, handleSubmit } = useForm<ValuesForm>();

  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState(0);

  function timer() {
    setIsLoading(false);
    setIsOpen(true);
  }

  const onSubmit = (data: ValuesForm) => {
    if (data.text == 'Хочу стартап и люблю мероприятия') {
      setCount(1);
    } else setCount(2);
    // Api.setGenerationIdeas(data.text);
  };

  return (
    <>
      <Header />
      <div className="generation__wrapper">
        <div className="generation__container">
          <form className="generation__main" onSubmit={handleSubmit(onSubmit)}>
            <h1>Введите параметр</h1>
            <h3>
              Сгенерируйте <b>свою</b> стартап-идею по параметрам
            </h3>
            <div className="generation__main__input">
              <h3>Тематика стартапа:</h3>
              <input {...register('text')} required />
            </div>
            <div>
              <button
                type="submit"
                onClick={() => {
                  setIsOpen(false);
                  setIsLoading(true);
                  setTimeout(timer, 6000);
                }}
              >
                Сгенерировать
              </button>
            </div>
          </form>
          {isLoading && <img className="lamp-gif" src={require('../../static/gif/lamp4.gif')} alt="gif-lamp" />}
          {isOpen && (
            <div className="idea">
              <img src={require('../../static/img/sunLamp.png')} alt="sunLamp" />
              {count == 1 ? (
                <label>
                  Стартап по созданию и продвижению стартапов. В ходе мероприятия планируется рассказать об
                  инновационных проектах, которые были запущены и успешно реализованы в этом году, а также
                  продемонстрировать примеры их реализации. Организаторами мероприятия выступает «Агентство
                  инвестиционного развития» и Центр поддержки и развития малых форм предприятий
                </label>
              ) : (
                <label>
                  Смотря в чём. Если в создании чего-то нового в сфере услуг или в создании нового бизнеса в сфере
                  недвижимости, то идея очень популярная. Если вы хотите что-то новое, то нужно отталкиваться от того,
                  что люди уже делают это, то есть
                </label>
              )}
            </div>
          )}
        </div>
      </div>
      <img src={require('../../static/img/list.png')} className="list1" />
      <img src={require('../../static/img/list.png')} className="list2" />
      <Footer />
    </>
  );
}
