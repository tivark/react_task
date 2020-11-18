const baseLoadedReducer = (state, action) => {
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
    items: itemsObj,
    baseUpdated: true
  }
}

export default baseLoadedReducer;