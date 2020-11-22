import checkUpdatedOptions from "../utils/checkUpdatedOptions";

const checkboxOptionToggleReducer = (state, action) => {
  const {optionId, variantId} = action;
  const selOptions = {...state.selectedOptions};


  const newOptionList = [...selOptions[optionId]]
  const index = newOptionList.indexOf(variantId);
  index < 0
    ? newOptionList.push(variantId)
    : newOptionList.splice(index, 1);

  //Т.к. рабочий только option-2 чекбокс проверка на изменение опций для обновления только для него
  const updated = checkUpdatedOptions(newOptionList, state.lastUpdate);

  return {
    ...state,
    baseUpdated: optionId !== 'option-2' ? state.baseUpdated : updated,
    selectedOptions: {
      ...state.selectedOptions,
      [optionId]: newOptionList
    }
  }
}

export default checkboxOptionToggleReducer;