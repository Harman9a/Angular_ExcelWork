import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar/';
import { HeaderComponent } from './header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MyModalComponent } from './my-modal/my-modal.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DashbordComponent } from './dashbord/dashbord.component';
import { SheetComponent } from './sheet/sheet.component';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select'
import { MatTableModule } from '@angular/material/table';
import { BalSheetComponent } from './bal-sheet/bal-sheet.component';
import { SheetRowComponent } from './sheet-row/sheet-row.component';
import { SheetHeadComponent } from './sheet-head/sheet-head.component';
import { FormsModule } from '@angular/forms'; 
import { StoreModule } from '@ngrx/store';
import { Store } from './Ngrx/Store/Store';
import { environment } from '../environments/environment';
import { SheetHeadingComponent } from './sheet-heading/sheet-heading.component'
import { DataService } from './data.service';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfitLossComponent } from './profit-loss/profit-loss.component';
import { DscrComponent } from './dscr/dscr.component';
import { IscrComponent } from './iscr/iscr.component';
import { KfrComponent } from './kfr/kfr.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/dashbord', pathMatch: 'full' },
  { path: 'dashbord', component: DashbordComponent },
  { path: 'balsheet/:id', component: BalSheetComponent },
  { path: 'sheet', component: SheetComponent },
  { path: 'dscr/:id', component: DscrComponent },
  { path: 'iscr/:id', component: IscrComponent },
  { path: 'kfr/:id', component: KfrComponent },

  { path: 'profit-loss/:id', component: ProfitLossComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MyModalComponent,
    DashbordComponent,
    SheetComponent,
    BalSheetComponent,
    SheetRowComponent,
    SheetHeadComponent,
    SheetHeadingComponent,
    RegisterComponent,
    LoginComponent,
    ProfitLossComponent,
    DscrComponent,
    IscrComponent,
    KfrComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    MatGridListModule,
    MatIconModule,
    MatSnackBarModule,
    MatCardModule,
    MatSelectModule,
    MatTableModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreModule.forRoot(Store)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
