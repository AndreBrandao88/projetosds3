import { Seller } from "./seller"

export type Sale = {
    id: number;
    visited: number;
    deals: number;
    amount: number;
    date: string;
    seller: Seller 
}

export type SalePage = {
    content?: Sale[];
    last: boolean;
    totalPages: number;
    totalElements: number;
    first: boolean;
    number: number;
    numberOfElements?: number;
    size?: number;
    empty?: boolean;

}

export type SaleSum = {
    sellername: string;
    sum: number;
}

export type SaleSucess = {
    sellername: string;
    visited: number;
    deals: number;
}