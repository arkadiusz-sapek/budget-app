const env = val => process.env[val];

module.exports = {
  type: 'postgres',
  host: env('DB_HOST'),
  url: env('DATABASE_URL'),
  port: 5432,
  username: env('DB_USER'),
  password: env('DB_PASSWORD'),
  database: env('DB_DATABASE_NAME'),
  synchronize: false,
  migrationsRun: true,
  logging: false,
  entities: [`src/**/models/*.entity.ts`],
  migrations: [`src/**/Migration/**/*.ts`],
  subscribers: [`src/**/*.subscriber.ts`],
  cli: {
    entitiesDir: `src/entity`,
    migrationsDir: `src/migration`,
    subscribersDir: `src/subscriber`,
  },
};
