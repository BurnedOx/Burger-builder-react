import * as actionTypes from './action';

const initialState = {
    ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
    },
    INGREDIENT_PRICES: {
        salad: 0.5,
        bacon: 0.7,
        cheese: 0.4,
        meat: 1.3
    },
    totalPrice: 4,
    purchasable: false
};

const reducer = (state = initialState, action) => {
    const updatePurchasableState = (ingredients) => {
        const sum = Object.keys(ingredients).map(
            igKey => ingredients[igKey]
        ).reduce(
            (sum, el) => sum + el, 0
        );
        return sum > 0;
    };
    let ingredients = {};

    switch (action.type) {
        case actionTypes.ADD_INGREDIENTS:
            ingredients = {
            ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
            };
            return {
                ...state,
                ingredients: ingredients,
                totalPrice: state.totalPrice + state.INGREDIENT_PRICES[action.ingredientName],
                purchasable: updatePurchasableState(ingredients)
            };
        case actionTypes.REMOVE_INGREDIENTS:
            ingredients = {
                ...state.ingredients,
                [action.ingredientName]: state.ingredients[action.ingredientName] - 1
            };
            return {
                ...state,
                ingredients: ingredients,
                totalPrice: state.totalPrice - state.INGREDIENT_PRICES[action.ingredientName],
                purchasable: updatePurchasableState(ingredients)
            };
        default:
            return state;
    }
};

export default reducer;