<template>
  <div class="christmas-page">
    <!-- Audio de fondo -->
    <audio ref="backgroundAudio" loop autoplay class="background-audio">
      <source src="/musicafondo.mp4" type="audio/mp4" />
      <source src="/musicafondo.mp4" type="audio/mpeg" />
      Tu navegador no soporta el elemento de audio.
    </audio>
    
    <SnowEffect />
    
    <div class="content">
      <!-- Título principal -->
      <h1 class="title animate__animated animate__fadeInDown">
        <span class="title-text">¡Feliz Navidad!</span>
      </h1>
      
      <!-- Subtítulo -->
      <p class="subtitle animate__animated animate__fadeInUp animate__delay-1s">
        Que esta temporada esté llena de alegría y paz
      </p>
      
      <!-- Nombre personalizado -->
      <p class="name-greeting animate__animated animate__fadeInUp animate__delay-1s">
        Para Roxana
      </p>
      
      <!-- Mensaje de Año Nuevo -->
      <h2 class="new-year-title animate__animated animate__fadeInUp animate__delay-1s">
        <span class="new-year-text">¡Próspero Año Nuevo!</span>
      </h2>
      
      <!-- Contenedor principal con Snoopy y Árbol -->
      <div class="main-content animate__animated animate__zoomIn animate__delay-2s">
        <!-- Contenedor de Tokio (antes Snoopy) -->
        <div class="snoopy-wrapper">
          <img 
            :src="tokioImage" 
            alt="Tokio Navideño" 
            class="snoopy-real-image"
          />
        </div>
        
        <!-- Árbol de Navidad -->
        <div class="tree-wrapper clickable-tree" @click="openImageModal">
          <ChristmasTree />
          <p class="tree-hint">👆 Haz clic en el árbol</p>
        </div>
      </div>
      
      <!-- Mensaje adicional -->
      <div class="message animate__animated animate__fadeIn animate__delay-3s">
        <p class="message-text">🎄 Que todos tus deseos se cumplan 🎄</p>
        <p class="message-text-secondary">✨ Que el nuevo año traiga bendiciones y felicidad ✨</p>
      </div>
      
      <!-- Decoraciones navideñas -->
      <div class="decorations">
        <div class="decoration decoration-left">🎁</div>
        <div class="decoration decoration-right">🎅</div>
        <div class="decoration decoration-bottom-left">🦌</div>
        <div class="decoration decoration-bottom-right">⭐</div>
      </div>
    </div>
    
    <!-- Estrellas de fondo -->
    <div class="stars">
      <div v-for="i in 20" :key="i" class="star" :style="getStarStyle()"></div>
    </div>
    
    <!-- Modal de Imagen -->
    <ImageModal 
      :is-open="isImageModalOpen" 
      :image-src="xerjoffImage"
      image-alt="Regalo de Navidad"
      @close="closeImageModal"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import SnowEffect from './components/SnowEffect.vue'
import ChristmasTree from './components/ChristmasTree.vue'
import ImageModal from './components/ImageModal.vue'
import tokioImage from './assets/perro_y_gato_-removebg-preview.png'
import xerjoffImage from './assets/xerjoff-cruz-del-sur-i_700x700-removebg-preview.png'
import 'animate.css'

const isImageModalOpen = ref(false)
const backgroundAudio = ref<HTMLAudioElement | null>(null)

onMounted(() => {
  // Intentar reproducir el audio de fondo
  if (backgroundAudio.value) {
    backgroundAudio.value.volume = 0.5 // Volumen al 50%
    backgroundAudio.value.play().catch((error) => {
      // Algunos navegadores requieren interacción del usuario para reproducir audio
      console.log('No se pudo reproducir el audio automáticamente:', error)
    })
  }
})

const openImageModal = () => {
  isImageModalOpen.value = true
}

const closeImageModal = () => {
  isImageModalOpen.value = false
}

const getStarStyle = () => {
  return {
    left: Math.random() * 100 + '%',
    top: Math.random() * 100 + '%',
    animationDelay: Math.random() * 2 + 's',
    animationDuration: (Math.random() * 2 + 1) + 's'
  }
}
</script>

<style scoped>
.christmas-page {
  min-height: 100vh;
  background: linear-gradient(180deg, #0a0e27 0%, #1a1f3a 50%, #0f1419 100%);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.content {
  position: relative;
  z-index: 10;
  text-align: center;
  max-width: 1200px;
  width: 100%;
}

.title {
  margin-bottom: 20px;
}

.title-text {
  font-size: 4rem;
  font-weight: bold;
  background: linear-gradient(45deg, #ffd700, #ff6b6b, #4ecdc4, #ffd700);
  background-size: 300% 300%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradient 3s ease infinite;
  text-shadow: 0 0 30px rgba(255, 215, 0, 0.5);
  display: inline-block;
  font-family: 'Georgia', serif;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.subtitle {
  font-size: 1.5rem;
  color: #ffffff;
  margin-bottom: 10px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  font-family: 'Georgia', serif;
}

.name-greeting {
  font-size: 2rem;
  color: #ffd700;
  margin-bottom: 20px;
  text-shadow: 0 0 20px rgba(255, 215, 0, 0.8);
  font-weight: bold;
  font-family: 'Georgia', serif;
  animation: glow-name 2s ease-in-out infinite alternate;
}

@keyframes glow-name {
  from {
    text-shadow: 0 0 20px rgba(255, 215, 0, 0.8);
    transform: scale(1);
  }
  to {
    text-shadow: 0 0 30px rgba(255, 215, 0, 1), 0 0 40px rgba(255, 215, 0, 0.8);
    transform: scale(1.05);
  }
}

.new-year-title {
  margin-bottom: 40px;
}

.new-year-text {
  font-size: 3rem;
  font-weight: bold;
  background: linear-gradient(45deg, #4ecdc4, #ffd700, #ff6b6b, #4ecdc4);
  background-size: 300% 300%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradient 3s ease infinite;
  text-shadow: 0 0 30px rgba(78, 205, 196, 0.5);
  display: inline-block;
  font-family: 'Georgia', serif;
}

.main-content {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  margin: 40px 0;
  flex-wrap: wrap;
}

.tree-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  filter: drop-shadow(0 10px 30px rgba(34, 139, 34, 0.4));
  transition: transform 0.3s ease, filter 0.3s ease;
}

.tree-wrapper.clickable-tree {
  cursor: pointer;
}

.tree-wrapper.clickable-tree:hover {
  transform: translateY(-10px) scale(1.05);
  filter: drop-shadow(0 15px 40px rgba(34, 139, 34, 0.6));
}

.tree-hint {
  margin-top: 15px;
  color: #ffd700;
  font-size: 0.9rem;
  text-shadow: 0 0 10px rgba(255, 215, 0, 0.8);
  animation: pulse 2s ease-in-out infinite;
  font-family: 'Georgia', serif;
}

.snoopy-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  filter: drop-shadow(0 10px 30px rgba(255, 255, 255, 0.2));
}

.snoopy-real-image {
  max-width: 400px;
  max-height: 500px;
  width: auto;
  height: auto;
  object-fit: contain;
  animation: float 3s ease-in-out infinite;
  filter: drop-shadow(0 10px 30px rgba(255, 255, 255, 0.3));
  transition: transform 0.3s ease, filter 0.3s ease;
}


.click-hint {
  margin-top: 15px;
  color: #ffd700;
  font-size: 0.9rem;
  text-shadow: 0 0 10px rgba(255, 215, 0, 0.8);
  animation: pulse 2s ease-in-out infinite;
  font-family: 'Georgia', serif;
}

@keyframes pulse {
  0%, 100% {
    opacity: 0.7;
  }
  50% {
    opacity: 1;
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

.message {
  margin-top: 40px;
}

.message-text {
  font-size: 1.8rem;
  color: #ffd700;
  text-shadow: 0 0 20px rgba(255, 215, 0, 0.8);
  font-weight: bold;
  font-family: 'Georgia', serif;
  animation: glow 2s ease-in-out infinite alternate;
  margin: 10px 0;
}

.message-text-secondary {
  font-size: 1.5rem;
  color: #4ecdc4;
  text-shadow: 0 0 20px rgba(78, 205, 196, 0.8);
  font-weight: bold;
  font-family: 'Georgia', serif;
  animation: glow-secondary 2s ease-in-out infinite alternate;
  margin: 10px 0;
  animation-delay: 0.5s;
}

@keyframes glow-secondary {
  from {
    text-shadow: 0 0 20px rgba(78, 205, 196, 0.8);
  }
  to {
    text-shadow: 0 0 30px rgba(78, 205, 196, 1), 0 0 40px rgba(78, 205, 196, 0.8);
  }
}

@keyframes glow {
  from {
    text-shadow: 0 0 20px rgba(255, 215, 0, 0.8);
  }
  to {
    text-shadow: 0 0 30px rgba(255, 215, 0, 1), 0 0 40px rgba(255, 215, 0, 0.8);
  }
}

.decorations {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
}

.decoration {
  position: absolute;
  font-size: 3rem;
  animation: float 3s ease-in-out infinite;
  filter: drop-shadow(0 5px 15px rgba(255, 255, 255, 0.3));
}

.decoration-left {
  top: 10%;
  left: 5%;
  animation-delay: 0s;
}

.decoration-right {
  top: 15%;
  right: 5%;
  animation-delay: 1s;
}

.decoration-bottom-left {
  bottom: 15%;
  left: 8%;
  animation-delay: 1.5s;
}

.decoration-bottom-right {
  bottom: 10%;
  right: 8%;
  animation-delay: 0.5s;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(10deg);
  }
}

.stars {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
}

.star {
  position: absolute;
  width: 4px;
  height: 4px;
  background: #ffffff;
  border-radius: 50%;
  animation: twinkle 2s ease-in-out infinite;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
}

.background-audio {
  position: fixed;
  top: -9999px;
  left: -9999px;
  opacity: 0;
  pointer-events: none;
}

@keyframes twinkle {
  0%, 100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.5);
  }
}

/* Responsive */
@media (max-width: 1024px) {
  .main-content {
    gap: 40px;
  }
}

@media (max-width: 768px) {
  .christmas-page {
    padding: 15px;
  }
  
  .title-text {
    font-size: 2.5rem;
  }
  
  .subtitle {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }
  
  .name-greeting {
    font-size: 1.5rem;
    margin-bottom: 15px;
  }
  
  .new-year-text {
    font-size: 2rem;
  }
  
  .message-text {
    font-size: 1.3rem;
  }
  
  .message-text-secondary {
    font-size: 1.1rem;
  }
  
  .main-content {
    flex-direction: column;
    gap: 30px;
    margin: 30px 0;
  }
  
  .tree-wrapper,
  .snoopy-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .snoopy-real-image {
    max-width: 280px;
    max-height: 380px;
  }
  
  .click-hint {
    font-size: 0.8rem;
  }
  
  .decoration {
    font-size: 2rem;
  }
  
  .decoration-left,
  .decoration-right,
  .decoration-bottom-left,
  .decoration-bottom-right {
    display: none;
  }
  
  .message {
    margin-top: 30px;
  }
}

@media (max-width: 480px) {
  .christmas-page {
    padding: 10px;
  }
  
  .title-text {
    font-size: 1.8rem;
  }
  
  .subtitle {
    font-size: 1rem;
    margin-bottom: 8px;
  }
  
  .name-greeting {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }
  
  .new-year-text {
    font-size: 1.4rem;
  }
  
  .message-text {
    font-size: 1rem;
    margin: 8px 0;
  }
  
  .message-text-secondary {
    font-size: 0.85rem;
    margin: 8px 0;
  }
  
  .main-content {
    gap: 20px;
    margin: 20px 0;
  }
  
  .snoopy-real-image {
    max-width: 200px;
    max-height: 280px;
  }
  
  .click-hint {
    font-size: 0.7rem;
    margin-top: 10px;
  }
  
  .message {
    margin-top: 20px;
  }
  
  .content {
    padding: 0 10px;
  }
}

</style>