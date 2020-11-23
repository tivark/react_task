const radioOptionToggleReducer = (state, action) => {
  const { optionId, variantId } = action;

  return {
    ...state,
    selectedOptions: {
      ...state.selectedOptions,
      [optionId]: variantId
    }
  }
}

export default radioOptionToggleReducer;