import {initObject} from "../services/init-object";
import attributeDragEndReducer from "./attribute-drag-end-reducer";

const reducer = (state = initObject, action) => {
  switch (action.type) {
    case 'BASE_LOADED':
      const itemsObj = {};
      action.payload.forEach((item) => {
        item.id = item.id + item.name.split(' ').join('');
        itemsObj[item.id] = item;
      })
      const itemsId = action.payload.map(item => item.id);
      const column = {...state.columns['available'], itemsId: itemsId}
      return {
        ...state,
        columns: {
          ...state.columns,
          'available': column
        },
        items: itemsObj
      }
    case 'ATTRIBUTE_DRAG_END':
      return attributeDragEndReducer(state, action);
    default:
      return state;
  }
}

export default reducer;