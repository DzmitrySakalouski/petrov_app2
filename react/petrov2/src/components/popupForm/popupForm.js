import React from 'react';
import { Dropdown } from '../dropdown';

const items = {
    none: {
        value: "none",
        label: 'Выберите тип',
        selected: true
    },
    corporation: {
        value: "corpotation",
        label: 'Корпоратив',
        selected: false
    },
    banquet: {
        value: "banquet",
        label: "Банкет",
        selected: false
    },
    wedding: {
        value: "wedding",
        label: "Свадьба",
        selected: false
    }
}

export const PopupForm = props => {
    const { preselectedType } = props;
    const [dropItems, setDropItems] = React.useState(getSelectedType(items, preselectedType));

    const onTypeChange = e => {
        setDropItems(getSelectedType(dropItems, e.currentTarget.value));
    }

    function getSelectedType (typesObject, selectedValue) {
        const typesArray = [];

        for (let key in typesObject) {
            
            if (typesObject[key].value === selectedValue) {
                typesObject[key].selected = true;
            } else {
                typesObject[key].selected = false;
            }

            typesArray.push(typesObject[key]);
        }

        return typesArray; 
    }

    const onSubmit = () => {
        alert("Данные отправлены");
    }
    
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
                                <input id="email" type="text" className="form__input" placeholder="ПОЧТА/СТРАНИЦА В ВК" required/>
                                <label for="email" className="form__label">ПОЧТА/СТРАНИЦА В ВК</label>
                            </div>

                            <div className="form__group">
                                <Dropdown onTypeChange={onTypeChange} id="type" className="form__input" dropdownItems={dropItems} />
                                <label for="type" className="form__label">ТИП МЕРОПРИЯТИЯ</label>
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
                                <button onClick={onSubmit} type="submit" className="btn btn--green">Зарегестрироваться</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </React.Fragment>
    )
}