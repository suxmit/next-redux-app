import { NextResponse } from 'next/server';
import { Pool } from 'pg';

// Strip any query parameters (like ?sslmode=require) from the connection string
// because it overrides the ssl: { rejectUnauthorized: false } setting in local development.
const connectionString = process.env.POSTGRES_URL_NON_POOLING?.split('?')[0];

const pool = new Pool({
    connectionString,
    ssl: { rejectUnauthorized: false }
});

export async function GET() {
    try {
        // Create table if it doesn't exist
        await pool.query(`
            CREATE TABLE IF NOT EXISTS inquiries (
                id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL,
                phone VARCHAR(50),
                product VARCHAR(255) NOT NULL,
                variety VARCHAR(255) NOT NULL,
                message TEXT NOT NULL,
                "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            );
        `);

        // Fetch all inquiries
        const { rows } = await pool.query(`
            SELECT * FROM inquiries ORDER BY "createdAt" DESC;
        `);

        return NextResponse.json(rows);
    } catch (error) {
        console.error('Error reading inquiries from Postgres:', error);
        return NextResponse.json({ error: 'Failed to fetch inquiries' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const data = await request.json();

        // Validate required fields
        if (!data.name || !data.email || !data.product || !data.variety) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Insert new inquiry
        const { rows } = await pool.query(`
            INSERT INTO inquiries (name, email, phone, product, variety, message)
            VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING id;
        `, [data.name, data.email, data.phone || null, data.product, data.variety, data.message || ' ']);

        return NextResponse.json({ success: true, id: rows[0].id }, { status: 201 });
    } catch (error) {
        console.error('Failed to create inquiry in Postgres:', error);
        return NextResponse.json(
            { error: 'Failed to process inquiry' },
            { status: 500 }
        );
    }
}
