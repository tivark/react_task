const initState = {
  beers: []
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'BASE_LOADED':
      return {
        beers: action.payload
      }
    default:
      return state;
  }
}

export default reducer;