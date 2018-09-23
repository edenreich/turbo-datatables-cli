import { Seeder } from './Seeder';
import { Database } from './Database';

export async function setup(tableName: string, records: number): Promise<any> {
    const conn = await Database.connect();

    const seeder: Seeder = new Seeder(new Database(conn), tableName, records);
    
    try {
        seeder.seed();
        return Promise.resolve();
    } catch (err) {
        return Promise.reject(err);
    }
}