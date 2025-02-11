'use client'
import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const cookiePreferences = localStorage.getItem('cookiePreferences');
    if (!cookiePreferences) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = async () => {
    try {
      await fetch('/api/cookies', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ preferences: { analytics: true, marketing: true } }),
      });
      localStorage.setItem('cookiePreferences', JSON.stringify({ analytics: true, marketing: true }));
      setShowBanner(false);
    } catch (error) {
      console.error('Erreur lors de l\'enregistrement des préférences:', error);
    }
  };

  const handleReject = () => {
    localStorage.setItem('cookiePreferences', JSON.stringify({ analytics: false, marketing: false }));
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg z-50">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-700">
          Nous utilisons des cookies pour améliorer votre expérience sur notre site.
        </p>
        <div className="flex gap-4">
          <button
            onClick={handleAccept}
            className="bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800"
          >
            Accepter
          </button>
          <button
            onClick={handleReject}
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-300"
          >
            Refuser
          </button>
        </div>
      </div>
    </div>
  );
} 