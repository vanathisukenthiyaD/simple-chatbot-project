// const { Pool } = require("pg");
// require("dotenv").config();

// const pool = new Pool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
//   port: process.env.DB_PORT,
//   ssl: { rejectUnauthorized: false }
// });

// module.exports = pool;


// const { Pool } = require("pg");

// const connectionTimeout = process.env.DB_CONNECTION_TIMEOUT_MS
//   ? parseInt(process.env.DB_CONNECTION_TIMEOUT_MS, 10)
//   : 5000;

// const useDatabaseUrl = !!process.env.DATABASE_URL;

// const poolConfig = useDatabaseUrl
//   ? {
//       connectionString: process.env.DATABASE_URL,
//       ssl: process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : false,
//       connectionTimeoutMillis: connectionTimeout
//     }
//   : {
//       host: process.env.DB_HOST || "localhost",
//       user: process.env.DB_USER,
//       password: process.env.DB_PASSWORD,
//       database: process.env.DB_NAME,
//       port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432,
//       ssl: process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : false,
//       connectionTimeoutMillis: connectionTimeout
//     };

// const pool = new Pool(poolConfig);

// module.exports = pool;


const { Pool } = require("pg");

// Increase timeout for Supabase free-tier
const connectionTimeout = process.env.DB_CONNECTION_TIMEOUT_MS
  ? parseInt(process.env.DB_CONNECTION_TIMEOUT_MS, 10)
  : 30000; // 30 seconds

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  },
  connectionTimeoutMillis: connectionTimeout,
  idleTimeoutMillis: 30000
});

pool.on("connect", () => {
  console.log("Connected to the database ✅");
});

pool.on("error", (err) => {
  console.error("Unexpected DB error:", err);
});

module.exports = pool;
