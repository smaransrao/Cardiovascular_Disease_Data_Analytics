import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SaleformComponent } from './components/saleform/saleform.component';
import { ViewdataComponent } from './components/viewdata/viewdata.component';
import { SpecificComponent } from './components/specific/specific.component';
import { ViewAllComponent } from './components/view-all/view-all.component';
import { HomeComponent } from './components/home/home.component';
import { UpdateComponent } from './components/update/update.component';
import { DeleteComponent } from './components/delete/delete.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'insert', component: SaleformComponent},
  { path: 'find', component: ViewdataComponent },
  { path: 'specific/:key/:val', component: SpecificComponent},
  { path: 'viewAll', component: ViewAllComponent},
  { path: 'update', component: UpdateComponent},
  { path: 'delete', component: DeleteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
