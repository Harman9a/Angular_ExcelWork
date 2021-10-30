import { createAction, props } from '@ngrx/store';

interface sheetData {
	name: string,
	cName: string,
	sheetType: string,
	year: number
}

export const createSheetAction = createAction(
	'CREATE_SHEET',
	props<sheetData>()
);
