import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkflowComponent } from './components/workflow/workflow.component';
import { DragDropComponent } from "src/app/components/drag-drop/drag-drop.component";


const routes: Routes = [
  { path: 'workflow', component: WorkflowComponent },
  {path: 'dragdrop', component: DragDropComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
