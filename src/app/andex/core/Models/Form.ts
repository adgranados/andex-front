import { Macro, FIELD_MACRO_TYPE } from './Macro';
import { Field, FieldPosition, FIELD_TYPE } from './Field';


class Cell {
    public field: Field;

    public constructor(field: Field) {
        this.field = field;
    }
}

export class Form {
    public fields: Array<Field>;
    private grid: Array<Array<Cell>>;
    public constructor(fields: Array<Field>) {
        this.fields = fields;
        this.grid = new Array<Array<Cell>>();
    }

    public makeGrid(): void {
        this.fields.forEach(field => {
            let row: number = field.position.row;
            if (this.grid[row] == undefined) {
                this.grid[row] = new Array<Cell>();
            }
            let cell: Cell = new Cell(field);
            if(this.validateRowLenght(row, cell)){
                this.grid[row].push(cell);
            }else{
                 console.exception("The field's columns lenght are more big that columns's support in this position.");
            }
        });
    }

    /// -------------------------------------------------------------------------
    /// validate if new cell cols plus total cols are minus or equals to 12 cols
    /// -------------------------------------------------------------------------
    public validateRowLenght(row: number, cell: Cell): boolean {
        if (this.grid != undefined) {
            let rowE = this.grid[row];
            if (rowE != undefined) {
                let MAX_COLS = 12;//12 columns bootstrap grid system.
                let cols = 0;
                rowE.forEach(cell => {
                    cols += cell.field.position.columns;
                });

                if (cols + cell.field.position.columns <= 12)
                    return true;
            } else {
                console.exception("The row [" + row + "] wasn't found.");

            }
        } else {
            console.exception("the grid isn't defined");
        }
        return false;
    }
}