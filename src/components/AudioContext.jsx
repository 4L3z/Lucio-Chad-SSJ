import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import musicalinda from "/assets/musicalinda.mp3"

// Crear el contexto de Audio
const AudioContext = createContext();

export function useAudio() {
  return useContext(AudioContext);
}

export function AudioProvider({ children }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5); // Estado para manejar el volumen

  useEffect(() => {
    audioRef.current = new Audio(musicalinda);
    audioRef.current.volume = volume; // Establece el volumen inicial

    return () => {
      audioRef.current.pause();
      audioRef.current = null;
    };
  }, []);

  useEffect(() => {
    const playAudio = async () => {
      try {
        if (isPlaying) {
          await audioRef.current.play();
        } else {
          audioRef.current.pause();
        }
      } catch (error) {
        console.error('Error playing audio:', error);
      }
    };

    playAudio();
  }, [isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (newVolume) => {
    setVolume(newVolume);
  };

  return (
    <AudioContext.Provider value={{ togglePlay, isPlaying, volume, handleVolumeChange }}>
      {children}
    </AudioContext.Provider>
  );
}



