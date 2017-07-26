import { Component, OnInit } from '@angular/core';

import { Field,FIELD_TYPE,FieldPosition } from  './andex/core/Models/Field';
import { FIELD_MACRO_TYPE} from './andex/core/Models/Macro'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = '@ndex';
  public fields:Array<Field>;
  
  ngOnInit(){
    this.fields = new Array<Field>();
    let numeroDocumento:Field = new Field();
    numeroDocumento.name = "NumeroDocumento";
    numeroDocumento.label = "Numero De Documento";
    numeroDocumento.helpText = "Numero De documento del usuario";
    numeroDocumento.type = FIELD_TYPE.TEXT;
    numeroDocumento.position = new FieldPosition(1,1);
    numeroDocumento.macros.push(FIELD_MACRO_TYPE.STR_LOWER_CASE);
    this.fields.push(numeroDocumento);
  }
}
