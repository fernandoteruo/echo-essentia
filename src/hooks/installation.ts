import { useEffect, useState } from 'react';

interface IInstallable {
  isInstallable: boolean;
  prompt: any;
}

const useIsInstallable: () => IInstallable = () => {
  const [isInstallable, setIsInstallable] = useState(false);
  const [prompt, setPrompt] = useState(null);

  const handleBeforeInstall = (e: any) => {
    console.log(e);
    e.preventDefault();
    setPrompt(e);
    setIsInstallable(true);
  };

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', handleBeforeInstall);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
    };
  }, []);

  return {
    isInstallable,
    prompt,
  };
};

export default useIsInstallable;
