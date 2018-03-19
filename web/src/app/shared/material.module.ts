import { NgModule } from '@angular/core';
import {
  MatMenuModule,
		  MatSidenavModule, 
		  MatToolbarModule, 
		   	  
		  MatListModule,
		  MatGridListModule,
		  MatCardModule,
		  MatStepperModule,
		  MatTabsModule,
		  MatExpansionModule,
		  
		  MatButtonModule,
		  MatButtonToggleModule, 
		  MatChipsModule,
		  MatIconModule,
		  MatProgressSpinnerModule,
		  MatProgressBarModule,
		  
		  MatDialogModule,
		  MatTooltipModule,
		  MatSnackBarModule,
		  
		  MatTableModule,
		  MatSortModule,
		  MatPaginatorModule,
		  
		  MatAutocompleteModule,
		  MatCheckboxModule,
		  MatDatepickerModule,
		  MatFormFieldModule,
		  MatInputModule,
		  MatRadioModule,
		  MatSelectModule,
		  MatSliderModule,
		  MatSlideToggleModule, 
		  
		  MatTableDataSource, 
		  MatPaginator
} from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const MODULES = [
  MatSidenavModule, 
		  MatToolbarModule, 
		   	  
		  MatListModule,
		  MatGridListModule,
		  MatCardModule,
		  MatStepperModule,
		  MatTabsModule,
		  MatExpansionModule,
		  
		  MatButtonModule,
		  MatButtonToggleModule, 
		  MatChipsModule,
		  MatIconModule,
		  MatProgressSpinnerModule,
		  MatProgressBarModule,
		  
		  MatDialogModule,
		  MatTooltipModule,
		  MatSnackBarModule,
		  
		  MatTableModule,
		  MatSortModule,
		  MatPaginatorModule,
		  
		  MatAutocompleteModule,
		  MatCheckboxModule,
		  MatDatepickerModule,
		  MatFormFieldModule,
		  MatInputModule,
		  MatRadioModule,
		  MatSelectModule,
		  MatSliderModule,
		  MatSlideToggleModule,
		  
		  MatTableDataSource, 
		  MatPaginator
];

@NgModule({
  imports: MODULES,
  exports: MODULES,
})
export class MaterialModule { }