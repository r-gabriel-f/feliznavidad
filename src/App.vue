<template>
  <div class="christmas-page">
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
      
      <!-- Contenedor de Snoopy -->
      <div class="snoopy-wrapper animate__animated animate__zoomIn animate__delay-2s">
        <img 
          :src="snoopyImage" 
          alt="Snoopy Navideño" 
          class="snoopy-real-image"
        />
      </div>
      
      <!-- Mensaje adicional -->
      <div class="message animate__animated animate__fadeIn animate__delay-3s">
        <p class="message-text">🎄 Que todos tus deseos se cumplan 🎄</p>
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
  </div>
</template>

<script setup lang="ts">
import SnowEffect from './components/SnowEffect.vue'
import snoopyImage from './assets/snoppy-removebg-preview.png'
import 'animate.css'

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
  margin-bottom: 40px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  font-family: 'Georgia', serif;
}

.snoopy-wrapper {
  margin: 40px 0;
  display: flex;
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
@media (max-width: 768px) {
  .title-text {
    font-size: 2.5rem;
  }
  
  .subtitle {
    font-size: 1.2rem;
    margin-bottom: 30px;
  }
  
  .message-text {
    font-size: 1.3rem;
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
}

@media (max-width: 480px) {
  .title-text {
    font-size: 2rem;
  }
  
  .subtitle {
    font-size: 1rem;
  }
  
  .message-text {
    font-size: 1.1rem;
  }
  
  .snoopy-wrapper {
    margin: 20px 0;
  }
  
  .snoopy-real-image {
    max-width: 250px;
    max-height: 350px;
  }
}

</style>