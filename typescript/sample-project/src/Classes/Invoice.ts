import { IFormat } from "../Interfaces/IFormat.js";

export class Invoice implements IFormat
{
    private client: string;
    readonly details: string;
    amount: number;

    constructor(c: string, d: string, a:number)
    {
        this.client = c;
        this.details = d;
        this.amount = a;
    }

    format(): string
    {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}