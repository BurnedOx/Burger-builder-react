import React from 'react';
import css from './Burger.css';
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = props => {
    let transformedIngredients = Object.keys(props.ingredients).map(
        igKey => {
            let arr = [];
            for (let i=1; i<=props.ingredients[igKey]; i++) {
                arr.push(<BurgerIngredient key={igKey + i} type={igKey}/>)
            }
            return arr
        }
    ).reduce((arr, el) => {
        return arr.concat(el)
    }, []);

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please add ingredients!</p>;
    }

    return (
        <div className={css.Burger}>
            <BurgerIngredient type={'bread-top'}/>
            {transformedIngredients}
            <BurgerIngredient type={'bread-bottom'}/>
        </div>
    );
};

export default Burger;