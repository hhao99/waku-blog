import {  defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/data/schemas/*',
  out: './drizzle',
  dialect: 'sqlite',
  dbCredentials: {
    url: process.env.DATABASE_URL || 'file:./data/dev.db',
  },
})