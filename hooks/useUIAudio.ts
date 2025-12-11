"use client";
import { useEffect, useState } from "react";
import useSound from "use-sound";

export function useUIAudio() {
  const [unlocked, setUnlocked] = useState(false);

  const [playHover] = useSound("/sounds/hover.wav", {
    volume: 0.2,
    interrupt: true,
    preload: true,
  });

  const [playClick] = useSound("/sounds/click.wav", {
    volume: 0.3,
    interrupt: true,
    preload: true,
  });

  // 🔓 Unlock audio context after first user interaction
  useEffect(() => {
    const unlockAudio = () => {
      setUnlocked(true);
      document.removeEventListener("click", unlockAudio);
    };
    document.addEventListener("click", unlockAudio);
  }, []);

  const safePlayHover = () => {
    if (unlocked) playHover();
  };

  const safePlayClick = () => {
    playClick(); // Clicks are always allowed
  };

  return { playHover: safePlayHover, playClick: safePlayClick };
}
