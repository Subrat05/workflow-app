import { Component, OnInit } from '@angular/core';
import { fabric } from 'fabric';

@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.scss']
})
export class WorkflowComponent implements OnInit {
   canvas: any;
   textString: any;
   size: any = {
      width: 1200,
      height: 1000
    };
   OutputContent: any;

  constructor() { }

  addText() {
    let textString = this.textString;
    let text = new fabric.IText(textString, {
      left: 10,
      top: 10,
      fontFamily: 'helvetica',
      angle: 0,
      fill: '#000000',
      scaleX: 0.5,
      scaleY: 0.5,
      fontWeight: '',
      hasRotatingPoint: true
    });
    this.extend(text, this.randomId());
    this.canvas.add(text);
    this.selectItemAfterAdded(text);
    this.textString = '';
}
 
extend(obj:any, id:any) {
    obj.toObject = (function (toObject) {
      return function () {
        return fabric.util.object.extend(toObject.call(obj), {
          id: id
        });
      };
    })(obj.toObject);
}

//======= this is used to generate random id of every object ===========
randomId() {
    return Math.floor(Math.random() * 999999) + 1;
}
//== this function is used to active the object after creation ==========
selectItemAfterAdded(obj:any) {
    this.canvas.discardActiveObject().renderAll();
    this.canvas.setActiveObject(obj);
}

// Create shapes like Circle, Retangle using below codes

addFigure(figure: any) {
    let add: any;
    switch (figure) {
      case 'rectangle':
        add = new fabric.Rect({
          width: 200, height: 100, left: 10, top: 10, angle: 0,
          fill: 'cornflowerblue'
        });
        break;
      case 'square':
        add = new fabric.Rect({
          width: 100, height: 100, left: 10, top: 10, angle: 0,
          fill: '#4caf50'
        });
        break;
      case 'triangle':
        add = new fabric.Triangle({
          width: 100, height: 100, left: 10, top: 10, fill: '#2196f3'
        });
        break;
      case 'circle':
        add = new fabric.Circle({
          radius: 50, left: 10, top: 10, fill: '#ff5722'
        });
        break;
      case 'linearrow':
      let arrow = new fabric.Triangle({
            width: 10, 
            height: 15, 
            fill: '#003f72', 
            left: 235, 
            top: 65,
            angle: 90
      });
      let line = new fabric.Line([50, 100, 200, 100], {
            left: 75,
            top: 70,
            stroke: '#003f72'
        });
      let linearrow = [line, arrow];
      add = new fabric.Group(linearrow);
      break;
    }
    this.extend(add, this.randomId());
    this.canvas.add(add);
    this.selectItemAfterAdded(add);
}


  ngOnInit(): void {

    // Initialzig these default value on page load.
    this.canvas = new fabric.Canvas('canvas', {
        hoverCursor: 'pointer',
        selection: true,
        selectionBorderColor: 'blue'
    });
    this.textString = '';
    this.canvas.setWidth(this.size.width);
    this.canvas.setHeight(this.size.height);
    this.OutputContent = '';
    // Initialization ends

    

  }

}
