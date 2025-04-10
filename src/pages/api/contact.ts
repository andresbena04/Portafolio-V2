import { Resend } from 'resend';
import type { APIRoute } from 'astro';

const resend = new Resend(import.meta.env.RESEND_API_KEY);
const emailFrom = import.meta.env.RESEND_EMAIL_FROM
const emailTo = import.meta.env.RESEND_EMAIL_TO

export const POST: APIRoute = async ({ request }) => {
    const { name, email, message } = await request.json();

    try {
        const response = await resend.emails.send({
            from: `Portafolio <${emailFrom}>`,
            to: [emailTo],
            subject: `Mensaje de contacto de ${name}`,
            html: `
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Correo:</strong> ${email}</p>
        <p><strong>Mensaje:</strong><br/>${message}</p>
      `,
        });

        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ success: false }), { status: 500 });
    }
};
