import {  defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/data/schemas/*',
  out: './drizzle',
  dialect: 'sqlite',
  dbCredentials: {
    url: process.env.DB_URL || 'file:./dev.db',
  },
})