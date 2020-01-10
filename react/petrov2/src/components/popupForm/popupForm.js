import React from 'react';

export const PopupForm = props => {
    return (
        <React.Fragment>
        <div className="popup__content">
            <div className="row">
                <div className="book">

                    <div className="book__form">
                        <form action="#" className="form">

                            <div className="u-margin-bottom-1">
                                <h2 className="heading-secondary">Регестрация</h2>
                            </div>
                            <div className="form__group">
                                <input id="name" type="text" className="form__input" placeholder="ИМЯ" required />
                                <label for="name" className="form__label">ИМЯ</label>
                            </div>

                            <div className="form__group">
                                <input id="email" type="text" className="form__input" placeholder="ПОЧТА/СТРАНИЦА В ВК" required pattern=""/>
                                <label for="email" className="form__label">ПОЧТА/СТРАНИЦА В ВК</label>
                            </div>

                            <div className="form__group">
                                <input id="phone" type="text" className="form__input" placeholder="НОМЕР ТЕЛЕФОНА" required/>
                                <label for="phone" className="form__label">НОМЕР ТЕЛЕФОНА</label>
                            </div>

                            <u-margin-bottom-1>
                                <div className="heading-tertiary">
                                    {}
                                </div>
                            </u-margin-bottom-1>

                            <div className="form__group u-margin-top-little">
                                <button type="submit" className="btn btn--green">Зарегестрироваться</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </React.Fragment>
    )
}