import initObject from "../services/test-object";

const reducer = (state = initObject, action) => {
  switch (action.type) {
    case 'BASE_LOADED':
      const itemsObj = {};
      action.payload.forEach((item) => {
        itemsObj[item.id] = item;
      })
      return {
        ...state,
        items: itemsObj
      }
    default:
      return state;
  }
}

export default reducer;