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

export default { 
  createProduct,
};