import { combineReducers } from 'redux';
import game from './game';
import lobby from './lobby';
import cards from './cards';
import music from './music';
import globalReducer from './global';
import minimap from './minimap';

export default combineReducers({
  game, lobby, cards, minimap, music,
  global: globalReducer
});
