import { NextResponse } from 'next/server';
import { createClient } from 'smtpexpress';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, message, destinationName } = body;

        const smtpexpressClient = createClient({
            projectId: process.env.SMTP_PROJECT_ID!,
            projectSecret: process.env.SMTP_PROJECT_SECRET!,
        });

        const senderEmail = process.env.SMTP_SENDER_EMAIL!;

        await smtpexpressClient.sendApi.sendMail({
            subject: `Nuevo contacto: ${name} — ${destinationName}`,
            message: `
        <h2>Nuevo mensaje de contacto</h2>
        <table style="border-collapse: collapse; width: 100%;">
          <tr><td style="padding: 8px; font-weight: bold;">Nombre:</td><td style="padding: 8px;">${name}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Email:</td><td style="padding: 8px;">${email}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Teléfono:</td><td style="padding: 8px;">${phone || 'No proporcionado'}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Destino:</td><td style="padding: 8px;">${destinationName}</td></tr>
        </table>
        <h3>Mensaje:</h3>
        <p>${message || 'Sin mensaje'}</p>
      `,
            sender: {
                name: 'Gates To Argentina Contact Form',
                email: senderEmail,
            },
            recipients: {
                email: 'gloria@gatestoargentina.com',
            },
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Email send error:', error);
        return NextResponse.json(
            { error: 'Failed to send email' },
            { status: 500 }
        );
    }
}
