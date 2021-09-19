
export enum StockStatusEnum{
    IN_STOCK,
    OUT_OF_STOCK
}
export default interface IProduct{
    id:string;
    title:string;
    description:string;
    thumbnail:string;
    stockQuantity:number;
    criticalQuantity:number;
    stockStatus:StockStatusEnum
}