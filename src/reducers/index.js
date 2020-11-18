import {initObject} from "../services/init-object";
import attributeDragEndReducer from "./attribute-drag-end-reducer";
import baseLoadedReducer from "./base-loaded-reducer";
import relocateAttributeReducer from "./relocate-attribute-reducer";
import relocateAllAttributesReducer from "./relocate-all-attributes-reducer";

const reducer = (state = initObject, action) => {
  switch (action.type) {
    case 'BASE_LOADED':
      return baseLoadedReducer(state, action);
    case 'ATTRIBUTE_DRAG_END':
      return attributeDragEndReducer(state, action);
    case 'RELOCATE_ATTRIBUTE':
      return relocateAttributeReducer(state, action);
    case 'RELOCATE_ALL_ATTRIBUTES':
      return relocateAllAttributesReducer(state, action);
    default:
      return state;
  }
}

export default reducer;