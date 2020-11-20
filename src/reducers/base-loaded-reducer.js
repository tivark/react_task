const baseLoadedReducer = (state, action) => {
  const itemsObj = {};

  action.payload.forEach((item) => {
    item.id = item.id + item.name.split(' ').join('');
    itemsObj[item.id] = item;
  })

  if(state.columns['selected'].itemsId.length > 0) {
    const savedItems = {}

    for (let key in state.items) {
      if (state.columns['selected'].itemsId.includes(key)) {
        savedItems[key] = {...state.items[key]}
      }
    }

    Object.assign(itemsObj, savedItems);
  }

  const itemsId = action.payload.map(item => item.id);

  const itemsToAdd = itemsId.filter((itemId) => {
    return !state.columns['selected'].itemsId.includes(itemId);
  })

  const column = {
    ...state.columns['available'],
    itemsId: itemsToAdd
  }

  const updatedState = [];

  for (let key in state.selectedOptions){
    //Рабочий чекбокс только option-2, поэтому оставим только его
    key === 'option-2' && updatedState.push(...state.selectedOptions[key]);
  }
  console.log(updatedState)

  return {
    ...state,
    columns: {
      ...state.columns,
      'available': column
    },
    items:itemsObj,
    requestSend: false,
    baseUpdated: true,
    lastUpdate: updatedState
  }
}

export default baseLoadedReducer;