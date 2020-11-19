const baseLoaded = (base) => {
  return {
    type: 'BASE_LOADED',
    payload: base
  }
}

const sendBaseRequest = () => {
  return {
    type: 'SEND_BASE_REQUEST'
  }
}

const attributeDragEnd = (result) => {
  return {
    type: 'ATTRIBUTE_DRAG_END',
    result
  }
}

const attributeRelocate = (attributeId) => {
  return {
    type: 'RELOCATE_ATTRIBUTE',
    attributeId
  }
}

const relocateAllAttributes = (fromColumnId) => {
  return {
    type: 'RELOCATE_ALL_ATTRIBUTES',
    fromColumnId
  }
}

const changeDate = (dateType, date) => {
  return {
    type: 'CHANGE_DATE',
    dateType,
    date
  }
}

const changeFilterInput = (value) => {
  return {
    type: 'CHANGE_FILTER_INPUT',
    value
  }
}

const checkboxOptionToggle = (optionId, variantId) => {
  return {
    type: 'CHECKBOX_OPTION_TOGGLE',
    optionId,
    variantId
  }
}

const radioOptionToggle = (optionId, variantId) => {
  return {
    type: 'RADIO_OPTION_TOGGLE',
    optionId,
    variantId
  }
}


export {
  baseLoaded,
  attributeDragEnd,
  attributeRelocate,
  relocateAllAttributes,
  changeDate,
  changeFilterInput,
  sendBaseRequest,
  checkboxOptionToggle,
  radioOptionToggle
}