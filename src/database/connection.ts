import knex from 'knex';
import path from 'path';

const connection = knex({
  // client: 'sqlite3',
  // connection: {
  //   filename: path.resolve(__dirname, 'database.sqlite')
  // },
  client: 'mysql',
  connection: {
    host: 'api-cnquality.mysql.uhserver.com',
    user: 'cnquality',
    password: '@Morteaomiojo106',
    database: 'api_cnquality'
  },
  useNullAsDefault: true,
})

export { connection };