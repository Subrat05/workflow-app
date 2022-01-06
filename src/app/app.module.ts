import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { WorkflowComponent } from './components/workflow/workflow.component';
import { DragDropComponent } from './components/drag-drop/drag-drop.component';


@NgModule({
  declarations: [
    AppComponent,
    WorkflowComponent,
    DragDropComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
