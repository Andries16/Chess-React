import {Figure, FigureNames} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import whiteLogo from "../../assets/white-king.png";
import blackLogo from "../../assets/black-king.png";
import { Board } from "../Board";

export class King extends Figure{
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color == Colors.WHITE ? whiteLogo : blackLogo;
        this.name = FigureNames.KING;
    }

    canMove(target: Cell): boolean {
        if(!super.canMove(target)){
            return false;
        };
        const dx = Math.abs(this.cell.x - target.x);
        const dy = Math.abs(this.cell.y - target.y);
        return ((dx === 0 && dy === 1) || (dx === 1 && dy === 0) || (dx === 1 && dy === 1)) && !this.cell.canBeAttacked(target); 
    }

    canAttack(target: Cell): boolean {
        if(!super.canAttack(target)){
            return false;
        };
        const dx = Math.abs(this.cell.x - target.x);
        const dy = Math.abs(this.cell.y - target.y);
        return ((dx === 0 && dy === 1) || (dx === 1 && dy === 0) || (dx === 1 && dy === 1)) && !this.cell.canBeAttacked(target);
    }


}