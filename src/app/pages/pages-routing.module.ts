import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SearchComponent } from './search/search.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'photos/:query', component: SearchComponent },
    {
        path: '**',
        component: NotFoundComponent
    }
];

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class PagesRoutingModule {}