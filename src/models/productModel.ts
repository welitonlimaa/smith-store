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
  const [result] = await connection.execute<IProduct[] & RowDataPacket[]>(`
    SELECT * FROM Trybesmith.products;
  `);
  return result;
};

const updateProductOrder = async (orderId: number, productId: number) => {
  const [rows] = await connection.execute<IProduct[] & RowDataPacket[]>(`
    UPDATE Trybesmith.products SET order_id = ? WHERE id = ?
  `, [orderId, productId]);
  return rows;
};

export default { 
  createProduct,
  getProducts,
  updateProductOrder,
};