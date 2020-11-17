const baseLoaded = (base) => {
  return {
    type: 'BASE_LOADED',
    payload: base
  }
}

const columnChanged = (column) => {
  return {
    type: 'COLUMN_CHANGED',
    column
  }
}

const attributeRelocated = (startColumn, finishColumn) => {
  return {
    type: 'ATTRIBUTE_RELOCATED',
    startColumn,
    finishColumn
  }
}

export {
  baseLoaded,
  columnChanged,
  attributeRelocated
}