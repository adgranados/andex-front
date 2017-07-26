
export interface IMacro{
    run():IMacro;
}

/**
 * Empty macro, implement to IMacro and represent the end of Promise execute macros pipeline.
 */
export class EmptyMacro implements IMacro{
    public run():IMacro{
        return new EmptyMacro();
    }
}
export class Macro implements IMacro {
    public type:string;
    public name:string;
   
    //@todo: "run" The macro must load the logic of the macro of its respective container.
    //@todo: The macros must obey a structure of promises in pipe supported under RxJs.
    public run():IMacro{
     return new EmptyMacro();
    };
}


export enum FIELD_MACRO_TYPE {
    STR_UPPER_CASE = 1,
    STR_LOWER_CASE,
    STR_CAPITAL_LETTER,
    STR_MAX_LEN,
    STR_MIN_LEN,
    ONLY_NUMBERS,
    ONLY_APHANUMERIC
};