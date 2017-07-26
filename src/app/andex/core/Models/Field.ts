
import {Macro,FIELD_MACRO_TYPE} from './Macro';



export enum FIELD_TYPE {
    TEXT = 1,
    PASSWORD,
    LIST,
    CHECKBOX,
    RADIO,
    SUBMIT,
    BUTTON,
    DATE,
    COLOR,
    DATETIME_LOCAL,
    EMAIL,
    MONTH,
    NUMBER,
    RANGE,
    SEARCH,
    TEL,
    TIME,
    URL,
    WEEK

}

export class Field {
    
    public type:FIELD_TYPE;
    public name:string;
    public value:any;
    public label:string;
    public helpText:string;
    public macros:Array<FIELD_MACRO_TYPE>;
    public position:FieldPosition;

    public constructor(){
        this.macros = new Array<FIELD_MACRO_TYPE>();
    }
}
export class FieldPosition{

    public row:number;
    public columns:number;
    

    public constructor(row:number,columns:number){
        this.columns = columns;
        this.row = row;
    }
}
