import {  defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/data/schema/*',
  out: './drizzle',
  dialect: 'sqlite',
  dbCredentials: {
    url: process.env.DB_URL || 'file:./mydev.db',
  },
})