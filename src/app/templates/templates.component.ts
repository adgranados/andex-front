import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'andex-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss']
})
export class TemplatesComponent implements OnInit {
  public title:string;
  public text:string;
  public actionName:string;
  constructor() { }

  ngOnInit() {
    this.title = "Hello Word!";
    this.actionName = "Test";
    this.text = "Lorem Ipsum Dolor sip Amet"
  }

}
