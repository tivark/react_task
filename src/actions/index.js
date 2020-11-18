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


export {
  baseLoaded,
  attributeDragEnd,
  attributeRelocate,
  relocateAllAttributes
}