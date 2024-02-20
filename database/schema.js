import { bigint, mysqlDatabase, varchar } from "drizzle-orm/mysql-core";

export const domain = mysqlDatabase('domain', {
    id: bigint('id', { mode: 'number'}).primaryKey().autoincrement(),
    url: varchar('url', { length: 100 }).notNull()
});

export const owner = mysqlDatabase('owner', {
    id: bigint('id', { mode: 'number'}).primaryKey().autoincrement(),
    name: varchar('name', { length: 256 }).notNull(),
    email: varchar('email', { length: 266 }).notNull(),
    phone: varchar('phone', { length: 20 }),
    address: varchar('address', { length: 100 }).notNull(),
    address2: varchar('address2', { length: 100 }),
    city: varchar('city', { length: 100 }).notNull(),
    state: varchar('state', { length: 100 }).notNull(),
    postcode: varchar('postcode', { length: 20 }).notNull(),
    country: varchar('country', { length: 100 }).notNull(),
    business_name: varchar('business_name', { length: 100 }),
    business_registration_number: varchar('business_registration_number', { length: 100 })
});