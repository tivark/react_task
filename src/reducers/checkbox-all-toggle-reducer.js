const checkboxAllToggleReducer = (state, action) => {
  const {optionId, groupId} = action;
  const groupOptions = state.requestOptions[groupId].options;
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

  //Т.к. рабочий только option-2 чекбокс проверка на изменение опций для обновления только для него
  const updated = (newSelectedVariants.length === 0)
  || newSelectedVariants.length === state.lastUpdate.length
    && newSelectedVariants.every((el) => {
      return state.lastUpdate.includes(el);
    });

  return {
    ...state,
    baseUpdated: optionId !== 'option-2' ? state.baseUpdated : updated,
    selectedOptions: {
      ...state.selectedOptions,
      [optionId]: newSelectedVariants
    }
  }
}

export default checkboxAllToggleReducer;