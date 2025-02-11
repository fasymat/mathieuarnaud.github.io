import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';

export async function POST(request: Request) {
  try {
    const { preferences } = await request.json();
    const { db } = await connectToDatabase();

    await db.collection('cookiePreferences').insertOne({
      preferences,
      timestamp: new Date(),
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
} 