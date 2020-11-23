const changeFilterInputReducer = (state, action) => {

  const selectedItems = state.columns['selected'].itemsId;
  const itemsId = Object.keys( state.items );

  const filteredId = itemsId.filter( (itemId) => {
    return state.items[itemId].name.toLowerCase().includes( action.value.toLowerCase() )
      && !selectedItems.includes( itemId )
  } )

  const newColumn = {
    ...state.columns['available'],
    itemsId: filteredId
  }

  return {
    ...state,
    filterByName: action.value,
    columns: {
      ...state.columns,
      [newColumn.id]: newColumn
    }
  }
}

export default changeFilterInputReducer;