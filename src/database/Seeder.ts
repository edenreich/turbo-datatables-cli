const faker = require('Faker'); 
import { Database } from './Database';

export class Seeder
{
    protected db: Database;

    protected tableName: string;

    protected records: number;

    constructor(db: Database, tableName: string, records: number)
    {
        this.db = db;
        this.records = records;
        this.tableName = tableName;

        this.db.query(`
            CREATE TABLE IF NOT EXISTS ${tableName}(
            id int AUTO_INCREMENT,
            name varchar(100) NOT NULL,
            email varchar(100) NOT NULL,
            phone varchar(100) NOT NULL,
            PRIMARY KEY(id),
            UNIQUE(email)
        );`);
    }

    public async seed()
    {
        this.db.query(`TRUNCATE TABLE ${this.tableName};`);

        const sql = `INSERT INTO ${this.tableName} (name, email, phone) VALUES (?, ?, ?);`;

        for (let i = 1; i <= this.records; i++) {
            const data = [faker.name.findName(), faker.internet.email(), faker.phone.phoneNumber()];
            await this.db.query(sql, data);
        }

        process.exit(0);
    }
}
