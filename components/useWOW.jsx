import { useEffect } from 'react';
import WOW from 'wowjs';

const useWOW = () => {
  useEffect(() => {
    const wow = new WOW.WOW({
      live: false, // Disable continuous observation for better performance in Next.js
    });
    wow.init();
    console.log('woooo');
  }, []);
};

export default useWOW;
