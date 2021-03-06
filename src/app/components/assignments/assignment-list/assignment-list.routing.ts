import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssignmentListComponent } from 'src/app/components/assignments/assignment-list/assignment-list.component';

const routes: Routes = [
    {
        path: '',
        component: AssignmentListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DepartmentListRoutingModule { }
