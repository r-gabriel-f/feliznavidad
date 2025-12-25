<template>
  <div class="christmas-page">
    <SnowEffect />
    
    <div class="content">
      <!-- Título principal -->
      <h1 class="title animate__animated animate__fadeInDown">
        <span class="title-text">¡Feliz Navidad!</span>
      </h1>
      
      <!-- Contenedor principal con Snoopy y Rosas - Reorganizado -->
      <div class="main-content animate__animated animate__zoomIn animate__delay-2s">
        <!-- Contenedor de Snoopy - Izquierda -->
        <div class="snoopy-wrapper">
          <img 
            :src="snoopyImage" 
            alt="Snoopy Navideño" 
            class="snoopy-real-image clickable"
            @click="openVideo"
          />
          <p class="click-hint">👆 Haz clic para ver el video</p>
        </div>
        
        <!-- Ramo de Rosas - Derecha -->
        <div class="bouquet-wrapper">
          <RoseBouquet />
        </div>
      </div>
      
      <!-- Nombre personalizado - Centrado después de imágenes -->
      <p class="name-greeting animate__animated animate__fadeInUp animate__delay-1s">
        Con cariño para Sharis (Brocha)
      </p>
      
      <!-- Mensaje de Año Nuevo -->
      <h2 class="new-year-title animate__animated animate__fadeInUp animate__delay-1s">
        <span class="new-year-text">¡Que el 2026 traiga nuevos sueños y esperanzas!</span>
      </h2>
      
      <!-- Subtítulo - Después del año nuevo -->
      <p class="subtitle animate__animated animate__fadeInUp animate__delay-1s">
        Que esta temporada esté llena de momentos especiales
      </p>
      
      <!-- Mensaje adicional -->
      <div class="message animate__animated animate__fadeIn animate__delay-3s">
        <p class="message-text">🌹 Que cada día esté lleno de amor y sonrisas 🌹</p>
        <p class="message-text-secondary">💫 Que encuentres la felicidad en cada momento especial 💫</p>
        <p class="message-text-tertiary">🌟 Que tus sueños se hagan realidad 🌟</p>
      </div>
      
      <!-- Decoraciones navideñas -->
      <div class="decorations">
        <div class="decoration decoration-left">💝</div>
        <div class="decoration decoration-right">🦋</div>
        <div class="decoration decoration-bottom-left">✨</div>
        <div class="decoration decoration-bottom-right">🌸</div>
        <div class="decoration decoration-top-center">🕊️</div>
      </div>
    </div>
    
    <!-- Estrellas de fondo -->
    <div class="stars">
      <div v-for="i in 20" :key="i" class="star" :style="getStarStyle()"></div>
    </div>
    
    <!-- Modal de Video -->
    <VideoModal 
      :is-open="isVideoOpen" 
      :video-src="videoSrc"
      @close="closeVideo"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SnowEffect from './components/SnowEffect.vue'
import RoseBouquet from './components/RoseBouquet.vue'
import VideoModal from './components/VideoModal.vue'
import snoopyImage from './assets/perroyganto-removebg-preview.png'
import 'animate.css'

const isVideoOpen = ref(false)
const videoSrc = '/sharisnavidad.mp4'

const openVideo = () => {
  isVideoOpen.value = true
}

const closeVideo = () => {
  isVideoOpen.value = false
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
  background: linear-gradient(180deg, #e0f2f7 0%, #b3e5fc 50%, #87ceeb 100%);
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
  margin-bottom: 30px;
}

.title-text {
  font-size: 4rem;
  font-weight: bold;
  background: linear-gradient(45deg, #ffffff, #4682b4, #1e3a5f, #ffffff);
  background-size: 300% 300%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradient 3s ease infinite;
  text-shadow: 0 4px 15px rgba(255, 255, 255, 1), 0 0 40px rgba(70, 130, 180, 0.8);
  display: inline-block;
  font-family: 'Georgia', serif;
  filter: drop-shadow(0 2px 8px rgba(255, 255, 255, 0.9));
  opacity: 1;
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
  color: #1e3a5f;
  margin-bottom: 10px;
  text-shadow: 0 2px 8px rgba(255, 255, 255, 1), 0 4px 12px rgba(255, 255, 255, 0.9);
  font-family: 'Georgia', serif;
  font-weight: 600;
  opacity: 1;
}

.name-greeting {
  font-size: 2rem;
  color: #d81b60;
  margin: 30px 0 20px 0;
  text-shadow: 0 2px 10px rgba(255, 255, 255, 1), 0 0 25px rgba(255, 105, 180, 1), 0 0 35px rgba(255, 20, 147, 0.9);
  font-weight: bold;
  font-family: 'Georgia', serif;
  animation: glow-name 2s ease-in-out infinite alternate;
  opacity: 1;
}

@keyframes glow-name {
  from {
    text-shadow: 0 2px 10px rgba(255, 255, 255, 1), 0 0 25px rgba(255, 105, 180, 1), 0 0 35px rgba(255, 20, 147, 0.9);
    transform: scale(1);
  }
  to {
    text-shadow: 0 2px 15px rgba(255, 255, 255, 1), 0 0 35px rgba(255, 105, 180, 1), 0 0 50px rgba(255, 20, 147, 1);
    transform: scale(1.05);
  }
}

.new-year-title {
  margin: 20px 0 15px 0;
}

.new-year-text {
  font-size: 3rem;
  font-weight: bold;
  background: linear-gradient(45deg, #1e3a5f, #4682b4, #ffffff, #1e3a5f);
  background-size: 300% 300%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradient 3s ease infinite;
  text-shadow: 0 4px 15px rgba(255, 255, 255, 1), 0 0 40px rgba(70, 130, 180, 0.8);
  display: inline-block;
  font-family: 'Georgia', serif;
  filter: drop-shadow(0 2px 8px rgba(255, 255, 255, 0.9));
  opacity: 1;
}

.main-content {
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 50px;
  margin: 30px 0;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1100px;
}

.snoopy-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  filter: drop-shadow(0 10px 30px rgba(255, 255, 255, 0.2));
  flex: 1;
  min-width: 300px;
}

.bouquet-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  filter: drop-shadow(0 10px 30px rgba(255, 20, 147, 0.3));
  flex: 1;
  min-width: 250px;
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

.snoopy-real-image.clickable {
  cursor: pointer;
}

.snoopy-real-image.clickable:hover {
  transform: translateY(-10px) scale(1.05);
  filter: drop-shadow(0 15px 40px rgba(255, 255, 255, 0.5));
}

.click-hint {
  margin-top: 15px;
  color: #1e3a5f;
  font-size: 0.9rem;
  text-shadow: 0 2px 6px rgba(255, 255, 255, 1), 0 0 15px rgba(70, 130, 180, 0.8);
  animation: pulse 2s ease-in-out infinite;
  font-family: 'Georgia', serif;
  font-weight: 600;
  opacity: 1;
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
  color: #1e3a5f;
  text-shadow: 0 2px 8px rgba(255, 255, 255, 1), 0 4px 12px rgba(255, 255, 255, 0.95), 0 0 25px rgba(70, 130, 180, 0.8);
  font-weight: bold;
  font-family: 'Georgia', serif;
  animation: glow 2s ease-in-out infinite alternate;
  margin: 10px 0;
  opacity: 1;
}

.message-text-secondary {
  font-size: 1.5rem;
  color: #4682b4;
  text-shadow: 0 2px 8px rgba(255, 255, 255, 1), 0 4px 12px rgba(255, 255, 255, 0.95), 0 0 25px rgba(70, 130, 180, 0.9);
  font-weight: bold;
  font-family: 'Georgia', serif;
  animation: glow-secondary 2s ease-in-out infinite alternate;
  margin: 10px 0;
  animation-delay: 0.5s;
  opacity: 1;
}

.message-text-tertiary {
  font-size: 1.3rem;
  color: #1e3a5f;
  text-shadow: 0 2px 8px rgba(255, 255, 255, 1), 0 4px 12px rgba(255, 255, 255, 0.95), 0 0 20px rgba(70, 130, 180, 0.8);
  font-weight: 600;
  font-family: 'Georgia', serif;
  animation: glow-tertiary 2.5s ease-in-out infinite alternate;
  margin: 10px 0;
  animation-delay: 1s;
  opacity: 1;
}

@keyframes glow-tertiary {
  from {
    text-shadow: 0 2px 8px rgba(255, 255, 255, 1), 0 4px 12px rgba(255, 255, 255, 0.95), 0 0 20px rgba(70, 130, 180, 0.8);
  }
  to {
    text-shadow: 0 2px 10px rgba(255, 255, 255, 1), 0 4px 14px rgba(255, 255, 255, 1), 0 0 28px rgba(70, 130, 180, 1);
  }
}

@keyframes glow-secondary {
  from {
    text-shadow: 0 2px 8px rgba(255, 255, 255, 1), 0 4px 12px rgba(255, 255, 255, 0.95), 0 0 25px rgba(70, 130, 180, 0.9);
  }
  to {
    text-shadow: 0 2px 12px rgba(255, 255, 255, 1), 0 4px 16px rgba(255, 255, 255, 1), 0 0 35px rgba(70, 130, 180, 1);
  }
}

@keyframes glow {
  from {
    text-shadow: 0 2px 8px rgba(255, 255, 255, 1), 0 4px 12px rgba(255, 255, 255, 0.95), 0 0 25px rgba(70, 130, 180, 0.8);
  }
  to {
    text-shadow: 0 2px 12px rgba(255, 255, 255, 1), 0 4px 16px rgba(255, 255, 255, 1), 0 0 35px rgba(70, 130, 180, 1);
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

.decoration-top-center {
  top: 5%;
  left: 50%;
  transform: translateX(-50%);
  animation-delay: 2s;
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
  box-shadow: 0 0 10px rgba(135, 206, 235, 0.8);
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
  
  .message-text-tertiary {
    font-size: 1rem;
  }
  
  .main-content {
    flex-direction: column;
    gap: 25px;
    margin: 25px 0;
    justify-content: center;
  }
  
  .snoopy-wrapper {
    order: 1;
  }
  
  .bouquet-wrapper {
    order: 2;
  }
  
  .bouquet-wrapper,
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
  
  .message-text-tertiary {
    font-size: 0.75rem;
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