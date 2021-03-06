import ShopActionTypes from "./shop.types";
const { default: SHOP_DATA } = require("./ShopData");

const INITIAL_STATE = {
    collections : SHOP_DATA
}

export const shopReducer = (state= INITIAL_STATE , action) => {
    switch (action.type) {
    case ShopActionTypes.UPDATE_COLLECTIONS:
        return {
            ...state,
            collections:action.payload
        }
        default:
            return state;
    }
}