module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'localhost'),
      port: env.int('DATABASE_PORT', 5430),
      database: env('DATABASE_NAME', 'database'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', '123456'),
      ssl: env.bool('DATABASE_SSL', false),
    },
    pool: {
      min: 0,
      max: 5,
    }
  },
});
