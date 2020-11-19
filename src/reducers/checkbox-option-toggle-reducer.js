const checkboxOptionToggleReducer = (state, action) => {
  const {optionId, variantId} = action;
  const selOptions = {...state.selectedOptions};
  if (optionId in selOptions) {
    const newOptionList = [...selOptions[optionId]]
    const index = newOptionList.indexOf(variantId);
    index < 0
      ? newOptionList.push(variantId)
      : newOptionList.splice(index, 1);

    return {
      ...state,
      selectedOptions: {
        ...state.selectedOptions,
        [optionId]: newOptionList
      }
    }
  }
  return {
    ...state,
    selectedOptions: {
      [optionId]: [variantId]
    }
  }
}

export default checkboxOptionToggleReducer;