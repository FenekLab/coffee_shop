'use client';

import { useEffect } from 'react';
import { toast } from 'sonner';

export function WelcomeToast() {
  useEffect(() => {
    // ignore if screen height is too small
    if (window.innerHeight < 650) return;
    if (!document.cookie.includes('welcome-toast=2')) {
      toast('☕ Bienvenue chez Le Bon Café Corse !', {
        id: 'welcome-toast',
        duration: Infinity,
        onDismiss: () => {
          document.cookie = 'welcome-toast=2; max-age=31536000; path=/';
        },
        description: (
          <>
            Découvrez notre sélection de cafés corses de haute qualité, torréfiés avec passion.{' '}
            <a
              href="/collections"
              className="text-[#006B3F] hover:underline"
              target="_blank"
            >
              Parcourir nos collections
            </a>
          </>
        )
      });
    }
  }, []);

  return null;
}
