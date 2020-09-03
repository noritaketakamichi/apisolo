import dotenv = require("dotenv");
dotenv.config();

// Please modify the exported object to point to your database using either environment variables
// or modifying the appropriate strings.

export = {
  type: "postgres",
  url: process.env.DATABASE_URL,
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT || 5432,
  username: process.env.DB_USER || "nogizaka",
  password: process.env.DB_PASSWORD || "nogizaka",
  database: process.env.DB_NAME || "nogizaka",
  entities: ["src/entities/**/*.ts"],
  migrations: ["src/migrations/**/*.ts"],
  seeds: ["src/seeds/**/*.ts"],
  logging: false,
  migrationsRun: false /* Disable auto-run migration */,
  cli: {
    entitiesDir: "src/entities",
    migrationsDir: "src/migrations"
  }
};
