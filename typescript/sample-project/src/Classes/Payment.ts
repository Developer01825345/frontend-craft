import { IFormat } from "../Interfaces/IFormat.js";

export class Payment implements IFormat
{
    constructor(readonly recipient: string, private details: string, private amount: number){}

    format(): string
    {
        return `${this.recipient} is owed ${this.details} of $${this.amount}`;
    }
}