import { createReducer, on } from '@ngrx/store';
import { createSheetAction } from '../Actions/sheetHead.actions'
import { SheetData } from 'src/app/model/sheetData.model';

const initialState: SheetData = {
	name: "Krishma",
	cName: "Webcodice",
	sheetType: "Floating",
	year: 2
}


const _sheetReducer = createReducer(
	initialState,
	on(createSheetAction, (state, action) => {
		switch (action.type) {
			case 'CREATE_SHEET': {
				return {
					name: action.name,
					cName: action.cName,
					sheetType: action.sheetType,
					year: action.year,
				}
			}
			default:
				return state
		}
	}),
);

export function sheetReducer(state, action) {
	return _sheetReducer(state, action);
}