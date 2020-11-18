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


export {
  baseLoaded,
  attributeDragEnd,
  attributeRelocate
}