import { Component, OnInit, ViewChild } from '@angular/core';
import { NgFlowchart, NgFlowchartCanvasDirective } from '@joelwenzel/ng-flowchart';

@Component({
  selector: 'app-work-flow',
  templateUrl: './work-flow.component.html',
  styleUrls: ['./work-flow.component.scss']
})
export class WorkFlowComponent implements OnInit {

  @ViewChild(NgFlowchartCanvasDirective)
  public canvasElement!: NgFlowchartCanvasDirective;
  
  items = [
    {
      name: 'Logger',
      type: 'log',
      data: {
        name: 'Log',
        icon: { name: 'log-icon', color: 'blue' },
        config: {
          message: null,
          severity: null
        }
      }
    }
  ];

  customOps = [
    {
      paletteName: 'Nested Flow',
      step: {
        type: 'nested-flow',
        data: {
          name: 'Nested Flow'
        }
      }
    }
  ];

onButtonClicked() {
    const json = this.canvasElement.getFlow().toJSON(2);
    console.log(json);
}

  constructor(){}

  ngOnInit() {
    let flow: NgFlowchart.Flow = this.canvasElement.getFlow();
  }

}
