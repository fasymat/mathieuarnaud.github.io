import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { verifyCaptcha } from '@/lib/captcha';

// Assurez-vous que la clé API est chargée depuis les variables d'environnement
const resend = new Resend(process.env.RESEND_API_KEY || '');

export async function POST(request: Request) {
  try {
    const { name, email, message, captchaToken } = await request.json();

    // Vérification du captcha
    const isValidCaptcha = await verifyCaptcha(captchaToken);
    if (!isValidCaptcha) {
      return NextResponse.json({ error: 'Captcha invalide' }, { status: 400 });
    }

    // Envoi de l'email
    await resend.emails.send({
      from: 'votre-site@domaine.com',
      to: 'votre-email@domaine.com',
      subject: `Nouveau message de ${name}`,
      text: `De: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
} 