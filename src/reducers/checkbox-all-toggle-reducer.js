const checkboxAllToggleReducer = (state, action) => {
  const {optionId, groupId} = action;
  const groupOptions = state.options[groupId].options;
  const option = groupOptions.filter((option) => {
    return option.id === optionId;
  })[0]

  const selectedVariants = [...state.selectedOptions[optionId]]
  const allVariantsId = option.variants.map((variant) => {
    return variant.id;
  });

  const newSelectedVariants = selectedVariants.length !== allVariantsId.length
    ? allVariantsId
    : []

  return {
    ...state,
    selectedOptions: {
      ...state.selectedOptions,
      [optionId]: newSelectedVariants
    }
  }
}

export default checkboxAllToggleReducer;