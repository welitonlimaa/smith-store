import { RowDataPacket, OkPacket } from 'mysql2';
import { IUser } from '../interfaces';
import connection from './connection';

const createUser = async (dataUser: IUser) => {
  const { username, vocation, level, password } = dataUser;

  const [{ insertId }] = await connection.execute<OkPacket & RowDataPacket[]>(`
   INSERT INTO Trybesmith.users (username, vocation, level, password)
   VALUES (?, ?, ?, ?);
   `, [username, vocation, level, password]);

  return {
    id: insertId,
    ...dataUser,
  };
};

export default {
  createUser,
};