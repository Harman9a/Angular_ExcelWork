import { counterReducer } from '../Reducer/counter.reducer';
import { sheetReducer } from '../Reducer/sheetHead.reducer';
export const Store = { count: counterReducer, sheet: sheetReducer }; 