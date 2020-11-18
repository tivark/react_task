const baseLoaded = (base) => {
  return {
    type: 'BASE_LOADED',
    payload: base
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
    type:'CHANGE_DATE',
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


export {
  baseLoaded,
  attributeDragEnd,
  attributeRelocate,
  relocateAllAttributes,
  changeDate,
  changeFilterInput
}