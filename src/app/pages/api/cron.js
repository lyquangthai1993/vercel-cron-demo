import { NextResponse } from 'next/server';

export const config = {
  runtime: 'edge',
};

export default async function handler() {
  try {
    const timestamp = new Date().toISOString();
    console.log(`Cron job executed at: ${timestamp}`);

    const data = {
      timestamp,
      message: 'Cron job successful',
    };

    return NextResponse.json(
      {
        success: true,
        message: 'Cron job executed successfully',
        data
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Cron job failed:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Cron job failed',
        error: error.message
      },
      { status: 500 }
    );
  }
}