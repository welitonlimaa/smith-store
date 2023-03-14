import { RowDataPacket, OkPacket } from 'mysql2';
import { IUser, ILogin } from '../interfaces';
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

const login = async (dataLogin: ILogin): Promise<IUser[]> => {
  const { username } = dataLogin;

  const [rows] = await connection.execute<IUser[] & RowDataPacket[]>(
    `
    SELECT * FROM Trybesmith.users WHERE username = ?;
  `,
    [username],
  );
  return rows;
};

export default {
  createUser,
  login,
};