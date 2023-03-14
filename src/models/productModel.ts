import { RowDataPacket, OkPacket } from 'mysql2';
import { IProduct } from '../interfaces';
import connection from './connection';

const createProduct = async (dataProduct: IProduct) => {
  const { name, amount } = dataProduct;

  const [{ insertId }] = await connection.execute<OkPacket & RowDataPacket[]>(`
   INSERT INTO Trybesmith.products (name, amount)
   VALUES (?, ?);
   `, [name, amount]);
  return {
    id: insertId,
    ...dataProduct,
  };
};

const getProducts = async (): Promise<IProduct[]> => {
  const [rows] = await connection.execute<IProduct[] & RowDataPacket[]>(`
    SELECT * FROM Trybesmith.products;
  `);
  return rows;
};

export default { 
  createProduct,
  getProducts,
};