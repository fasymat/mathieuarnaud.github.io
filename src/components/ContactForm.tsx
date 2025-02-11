'use client'
import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [captchaToken, setCaptchaToken] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!captchaToken) {
      alert('Veuillez valider le captcha');
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, captchaToken }),
      });

      if (response.ok) {
        alert('Message envoyé avec succès !');
        setFormData({ name: '', email: '', message: '' });
        setCaptchaToken('');
      } else {
        alert('Erreur lors de l\'envoi du message');
      }
    } catch (error) {
      alert('Erreur lors de l\'envoi du message');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Vos champs de formulaire existants */}
      <ReCAPTCHA
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
        onChange={(token) => setCaptchaToken(token || '')}
      />
      <button type="submit" className="...">
        Envoyer
      </button>
    </form>
  );
} 