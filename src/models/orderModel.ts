import { RowDataPacket } from 'mysql2';
import { IOrder } from '../interfaces';
import connection from './connection';

const getOrders = async (): Promise<IOrder[]> => {
  const [rows] = await connection.execute<IOrder[] & RowDataPacket[]>(`
    SELECT o.id, o.user_id as userId, JSON_ARRAYAGG(p.id) AS productsIds
    FROM Trybesmith.orders AS o 
    INNER JOIN Trybesmith.products AS p ON o.id = p.order_id
    GROUP BY o.id;
  `);
  return rows;
};

export default {
  getOrders,
};