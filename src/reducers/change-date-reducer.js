const changeDateReducer = (state, action) => {
  const { dateType, date } = action;
  return {
    ...state,
    datePeriod: {
      ...state.datePeriod,
      [dateType]: date
    }
  }
}

export default changeDateReducer;