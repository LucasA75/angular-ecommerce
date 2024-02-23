export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    url: process.env.DATABASE_URI || 'mongodb://127.0.0.1:27017/',
    host: process.env.DATABASE_HOST || '127.0.0.1',
    db: process.env.DATABASE || 'tutorial',
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
  },
});
