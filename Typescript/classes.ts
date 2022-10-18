export class Rectangle{
    length: number;
    width: number;
    constructor(_length:number, _width: number){
        this.length =_length;
        this.width = _width;
    }
    getArea():number {
        return this.length * this.width;
    }
}


