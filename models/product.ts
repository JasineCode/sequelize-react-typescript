'use strict';
import  {
  Model
} from 'sequelize';
import IProduct, { StockStatusEnum } from '../interfaces/product';
module.exports = (sequelize: any, DataTypes: any) => {
  class Product extends Model<IProduct> implements IProduct{


    id!:string;
    title!:string;
    description!:string;
    thumbnail!:string;
    stockQuantity!:number;
    criticalQuantity!:number;
    stockStatus!:StockStatusEnum


    static associate(models: any) {
      // define association here
    }
  };
  Product.init({
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull:false,
      primaryKey: true,
      
    },
    title: {
      type: DataTypes.STRING,
      allowNull:false
    },
    description: {
      type: DataTypes.STRING,
      allowNull:false
    },
    thumbnail: {
      type: DataTypes.STRING,
      allowNull:false
    },
    stockQuantity: {
      type: DataTypes.INTEGER,
      allowNull:false
    },
    criticalQuantity: {
      type: DataTypes.INTEGER,
      allowNull:false
    },
    stockStatus: {
      type: DataTypes.STRING,
      allowNull:false,
      
    },
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};