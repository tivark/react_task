import {initObject} from "../services/init-object";
import attributeDragEndReducer from "./attribute-drag-end-reducer";
import baseLoadedReducer from "./base-loaded-reducer";
import relocateAttributeReducer from "./relocate-attribute-reducer";
import relocateAllAttributesReducer from "./relocate-all-attributes-reducer";
import changeDateReducer from "./change-date-reducer";
import changeFilterInputReducer from './change-filter-input-reducer';
import checkboxOptionToggleReducer from './checkbox-option-toggle-reducer';
import radioOptionToggleReducer from './radio-option-toggle-reducer';
import checkboxAllToggleReducer from './checkbox-all-toggle-reducer';


const reducer = (state = initObject, action) => {
  switch (action.type) {
    case 'SEND_BASE_REQUEST':
      return {
        ...state,
        requestSend: true
      }
    case 'BASE_LOADED':
      return baseLoadedReducer(state, action);
    case 'ATTRIBUTE_DRAG_END':
      return attributeDragEndReducer(state, action);
    case 'RELOCATE_ATTRIBUTE':
      return relocateAttributeReducer(state, action);
    case 'RELOCATE_ALL_ATTRIBUTES':
      return relocateAllAttributesReducer(state, action);
    case 'CHANGE_DATE':
      return changeDateReducer(state, action);
    case 'CHANGE_FILTER_INPUT':
      return changeFilterInputReducer(state, action);
    case 'CHECKBOX_OPTION_TOGGLE':
      return checkboxOptionToggleReducer(state, action);
    case 'RADIO_OPTION_TOGGLE':
      return radioOptionToggleReducer(state, action);
    case 'CHECKBOX_ALL_TOGGLE':
      return checkboxAllToggleReducer(state, action)
    default:
      return state;
  }
}

export default reducer;