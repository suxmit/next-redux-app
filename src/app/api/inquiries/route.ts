import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

// Define the shape of our inquiry
interface Inquiry {
    id: string;
    name: string;
    email: string;
    phone?: string;
    product: string;
    variety: string;
    message: string;
    createdAt: string;
}

// Get the path to our local JSON database
const dataFilePath = path.join(process.cwd(), 'src', 'data', 'inquiries.json');

export async function GET() {
    try {
        const fileContents = await fs.readFile(dataFilePath, 'utf8');
        const inquiries: Inquiry[] = JSON.parse(fileContents);

        // Sort inquiries by newest first
        inquiries.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

        return NextResponse.json(inquiries);
    } catch (error) {
        console.error('Error reading inquiries:', error);
        // If file doesn't exist or is invalid, return empty array
        return NextResponse.json([]);
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

        const newInquiry: Inquiry = {
            id: crypto.randomUUID(),
            ...data,
            createdAt: new Date().toISOString()
        };

        // Read existing inquiries
        let inquiries: Inquiry[] = [];
        try {
            const fileContents = await fs.readFile(dataFilePath, 'utf8');
            inquiries = JSON.parse(fileContents);
        } catch {
            // If file doesn't read cleanly, we'll start with an empty array
        }

        // Add new inquiry
        inquiries.push(newInquiry);

        // Save back to file
        await fs.writeFile(dataFilePath, JSON.stringify(inquiries, null, 2), 'utf8');

        return NextResponse.json({ success: true, id: newInquiry.id }, { status: 201 });
    } catch (error) {
        console.error('Failed to create inquiry:', error);
        return NextResponse.json(
            { error: 'Failed to process inquiry' },
            { status: 500 }
        );
    }
}
