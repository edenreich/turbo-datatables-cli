import { Seeder } from './Seeder';
import { Database } from './Database';

export async function setup(tableName: string, records: number) {
    const conn = await Database.connect();

    const seeder: Seeder = new Seeder(new Database(conn), tableName, records);
    
    return await seeder.seed();
}