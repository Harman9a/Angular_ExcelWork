import { createSelector } from '@ngrx/store';
import { SheetData } from 'src/app/model/sheetData.model';

export const selectFeature = (state: SheetData) => state.year;

export const selectFeatureCount = createSelector(
  selectFeature,
  (state) => {
    return state
  }
);