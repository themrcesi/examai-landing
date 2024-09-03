import { NextResponse } from 'next/server';
import { EmailTemplate } from '@/components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    console.log('Request received:', request);
    try {
        const { name, email } = await request.json();
        console.log('name:', name, 'email:', email);
        const firstName = name.split(' ')[0]; // Extract first name
        const { data, error } = await resend.emails.send({
            from: 'Info ExamAI <info@cesargarciacabeza.com>',
            to: [email],
            subject: 'Welcome to ExamAI',
            react: EmailTemplate({ firstName }),
        });

        if (error) {
            return NextResponse.json({ error }, { status: 400 });
        }

        return NextResponse.json({ data }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}