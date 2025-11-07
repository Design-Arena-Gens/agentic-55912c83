'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import scenes from '@/data/film-script.json'

export default function Home() {
  const [currentScene, setCurrentScene] = useState(0)
  const [showScript, setShowScript] = useState(false)

  const handleNext = () => {
    if (currentScene < scenes.length - 1) {
      setCurrentScene(currentScene + 1)
    }
  }

  const handlePrev = () => {
    if (currentScene > 0) {
      setCurrentScene(currentScene - 1)
    }
  }

  const scene = scenes[currentScene]

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-wider">YOUR BRAND</div>
          <div className="flex items-center gap-6">
            <button
              onClick={() => setShowScript(!showScript)}
              className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
            >
              {showScript ? 'View Scenes' : 'View Full Script'}
            </button>
            <div className="text-sm text-white/60">
              Scene {currentScene + 1} / {scenes.length}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-20">
        {!showScript ? (
          <AnimatePresence mode="wait">
            <motion.div
              key={currentScene}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="container mx-auto px-6 py-12"
            >
              {/* Scene Hero */}
              <div className="max-w-6xl mx-auto">
                <motion.div
                  className="mb-8"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="text-sm text-white/50 mb-2 tracking-widest">
                    SCENE {String(scene.scene_number).padStart(2, '0')}
                  </div>
                  <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
                    {scene.title}
                  </h1>
                  <div className="flex gap-4 text-sm text-white/60">
                    <span>{scene.duration}</span>
                    <span>•</span>
                    <span>{scene.location}</span>
                    <span>•</span>
                    <span>{scene.time_of_day}</span>
                  </div>
                </motion.div>

                {/* Visual Description */}
                <motion.div
                  className="grid md:grid-cols-2 gap-8 mb-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold mb-4">Visual Description</h2>
                    <p className="text-white/80 leading-relaxed text-lg">
                      {scene.description}
                    </p>
                  </div>

                  <div className="space-y-6">
                    {/* Cinematography */}
                    <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                      <h3 className="text-xl font-semibold mb-3">Cinematography</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-white/60">Camera</span>
                          <span>{scene.cinematography.camera_movement}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-white/60">Framing</span>
                          <span>{scene.cinematography.framing}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-white/60">Lens</span>
                          <span>{scene.cinematography.lens}</span>
                        </div>
                      </div>
                    </div>

                    {/* Mood */}
                    <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                      <h3 className="text-xl font-semibold mb-3">Mood & Tone</h3>
                      <p className="text-white/80">{scene.mood}</p>
                    </div>
                  </div>
                </motion.div>

                {/* AI Prompt */}
                <motion.div
                  className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 p-8 rounded-2xl border border-purple-500/30 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                    <span className="text-purple-400">🎬</span>
                    AI Generation Prompt
                  </h3>
                  <p className="text-white/90 leading-relaxed font-mono text-sm bg-black/30 p-6 rounded-lg">
                    {scene.ai_prompt}
                  </p>
                </motion.div>

                {/* Lighting & Color */}
                <motion.div
                  className="grid md:grid-cols-2 gap-8 mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-4">Lighting</h3>
                    <p className="text-white/80">{scene.lighting}</p>
                  </div>

                  <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-4">Color Palette</h3>
                    <div className="flex gap-3 mb-3">
                      {scene.color_palette.map((color, idx) => (
                        <div
                          key={idx}
                          className="w-12 h-12 rounded-lg border-2 border-white/20"
                          style={{ backgroundColor: color }}
                          title={color}
                        />
                      ))}
                    </div>
                    <p className="text-white/60 text-sm">
                      {scene.color_palette.join(', ')}
                    </p>
                  </div>
                </motion.div>

                {/* Sound Design */}
                <motion.div
                  className="bg-white/5 p-6 rounded-xl border border-white/10 mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.0 }}
                >
                  <h3 className="text-xl font-semibold mb-3">Sound Design</h3>
                  <p className="text-white/80">{scene.sound_design}</p>
                </motion.div>

                {/* Dialogue (if exists) */}
                {scene.dialogue && scene.dialogue.length > 0 && (
                  <motion.div
                    className="bg-white/5 p-6 rounded-xl border border-white/10 mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1 }}
                  >
                    <h3 className="text-xl font-semibold mb-4">Dialogue</h3>
                    <div className="space-y-3">
                      {scene.dialogue.map((line, idx) => (
                        <div key={idx} className="text-white/80">
                          <span className="font-semibold text-white">{line.character}:</span>{' '}
                          <span className="italic">"{line.line}"</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Transition */}
                <motion.div
                  className="bg-white/5 p-6 rounded-xl border border-white/10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  <h3 className="text-xl font-semibold mb-3">Transition</h3>
                  <p className="text-white/80">{scene.transition}</p>
                </motion.div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center max-w-6xl mx-auto mt-12">
                <button
                  onClick={handlePrev}
                  disabled={currentScene === 0}
                  className="px-8 py-4 bg-white/10 hover:bg-white/20 disabled:bg-white/5 disabled:cursor-not-allowed rounded-lg transition-colors"
                >
                  ← Previous
                </button>
                <div className="flex gap-2">
                  {scenes.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentScene(idx)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        idx === currentScene ? 'bg-white w-8' : 'bg-white/30'
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={handleNext}
                  disabled={currentScene === scenes.length - 1}
                  className="px-8 py-4 bg-white/10 hover:bg-white/20 disabled:bg-white/5 disabled:cursor-not-allowed rounded-lg transition-colors"
                >
                  Next →
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        ) : (
          <div className="container mx-auto px-6 py-12">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-5xl font-bold mb-8">Complete Film Script</h1>
              <div className="space-y-12">
                {scenes.map((scene, idx) => (
                  <div
                    key={idx}
                    className="border-l-4 border-white/20 pl-6 pb-8 hover:border-white/60 transition-colors cursor-pointer"
                    onClick={() => {
                      setCurrentScene(idx)
                      setShowScript(false)
                    }}
                  >
                    <div className="text-sm text-white/50 mb-2">
                      SCENE {String(scene.scene_number).padStart(2, '0')} • {scene.duration}
                    </div>
                    <h2 className="text-3xl font-bold mb-2">{scene.title}</h2>
                    <div className="text-white/60 mb-4">
                      {scene.location} • {scene.time_of_day}
                    </div>
                    <p className="text-white/80 leading-relaxed">
                      {scene.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
