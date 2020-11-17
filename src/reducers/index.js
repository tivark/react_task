import {initObject} from "../services/init-object";

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
    case 'COLUMN_CHANGED':
      return {
        ...state,
        columns: {
          ...state.columns,
          [action.column.id]: action.column
        }
      }
    case 'ATTRIBUTE_RELOCATED':
      return {
        ...state,
        columns: {
          ...state.columns,
          [action.startColumn.id]: action.startColumn,
          [action.finishColumn.id]: action.finishColumn
        }
      }
    default:
      return state;
  }
}

export default reducer;