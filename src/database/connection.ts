import knex from 'knex';

const connection = knex({
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