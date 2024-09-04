import React from 'react';
import { Button, Card } from '@nextui-org/react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAudio } from '../components/AudioContext.jsx';

function Home() {
  const navigate = useNavigate();
  const { togglePlay, isPlaying, volume, handleVolumeChange } = useAudio();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="p-6 max-w-md">
          <h1 className="text-2xl font-bold mb-4">Bienvenido a mi rama</h1>
          <p className="mb-4">
            Esta es una página creada con Vite + React, NextUI, Tailwind CSS y Framer Motion. Recomiendo activar la música primero y después empezar con las transformaciones :)
          </p>
          <Button color="primary" onClick={togglePlay}>
            {isPlaying ? 'Pausar' : 'Reproducir'} Canción
          </Button>
          
          <div className="mt-4">
            <label htmlFor="volume-slider" className="block text-sm font-medium text-gray-700 text-center mb-2">
              Volumen: {Math.round(volume * 100)}%
            </label>
            <input
              id="volume-slider"
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
              className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
              style={{
                background: `linear-gradient(to right, #3b82f6 ${volume * 100}%, #d1d5db ${volume * 100}%)`
              }}
            />
          </div>


          <Button color="secondary" onClick={() => navigate('/lucio')} className="mt-4">
            Empezar las transformaciones...
          </Button>
        </Card>
      </motion.div>
    </div>
  );
}

export default Home;
