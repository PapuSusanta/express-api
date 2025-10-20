/*
* NODE MODULES
*/
import pkg from 'pg';

/*
* CUSTOM MODULES
*/
import { DB_CONFIG } from '@/config';

const { Pool } = pkg;

const pool = new Pool({
    host: DB_CONFIG.host,
    port: DB_CONFIG.port,
    database: DB_CONFIG.database,
    user: DB_CONFIG.user,
    password: DB_CONFIG.password,
});

export default pool;