import { bigint, mysqlTable, varchar } from "drizzle-orm/mysql-core";

export const domain = mysqlTable('domain', {
    id: bigint('id', { mode: 'number'}).primaryKey().autoincrement(),
    url: varchar('url', { length: 100 }).notNull()
});

export const owner = mysqlTable('owner', {
    id: bigint('id', { mode: 'number'}).primaryKey().autoincrement(),
    firstName: varchar('first_name', { length: 130 }).notNull(),
    lastName: varchar('last_name', { length: 130 }).notNull(),
    email: varchar('email', { length: 266 }).notNull(),
    phone: varchar('phone', { length: 20 }),
    address: varchar('address', { length: 100 }).notNull(),
    address2: varchar('address2', { length: 100 }),
    city: varchar('city', { length: 100 }).notNull(),
    state: varchar('state', { length: 100 }).notNull(),
    postcode: varchar('postcode', { length: 20 }).notNull(),
    country: varchar('country', { length: 100 }).notNull(),
    businessName: varchar('business_name', { length: 100 }),
    businessNr: varchar('business_registration_number', { length: 100 })
});