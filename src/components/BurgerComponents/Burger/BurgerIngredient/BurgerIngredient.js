import React from 'react';
import propTypes from 'prop-types';
import css from './BurgerIngredient.css';

const BurgerIngredient = props => {
    let ingredient = null;

    switch (props.type) {
        case ('bread-bottom'):
            ingredient = <div className={css.BreadBottom}></div>;
            break;
        case ('bread-top'):
            ingredient = (
                <div className={css.BreadTop}>
                    <div className={css.Seeds1}></div>
                    <div className={css.Seeds2}></div>
                </div>
            );
            break;
        case ('meat'):
            ingredient = <div className={css.Meat}></div>;
            break;
        case ('cheese'):
            ingredient = <div className={css.Cheese}></div>;
            break;
        case ('salad'):
            ingredient = <div className={css.Salad}></div>;
            break;
        case ('bacon'):
            ingredient = <div className={css.Bacon}></div>;
            break;
        default:
            ingredient = null;
    }

    return ingredient;
};

BurgerIngredient.propTypes = {
    type: propTypes.string.isRequired
};

export default BurgerIngredient;