<template>
  <div class="bouquet-container">
    <div class="bouquet">
      <!-- Rosas principales - más rosas y mejor distribuidas -->
      <div class="rose rose-1">
        <span class="rose-emoji">🌹</span>
        <div class="rose-petals"></div>
      </div>
      <div class="rose rose-2">
        <span class="rose-emoji">🌹</span>
        <div class="rose-petals"></div>
      </div>
      <div class="rose rose-3">
        <span class="rose-emoji">🌹</span>
        <div class="rose-petals"></div>
      </div>
      <div class="rose rose-4">
        <span class="rose-emoji">🌹</span>
        <div class="rose-petals"></div>
      </div>
      <div class="rose rose-5">
        <span class="rose-emoji">🌹</span>
        <div class="rose-petals"></div>
      </div>
      <div class="rose rose-6">
        <span class="rose-emoji">🌹</span>
        <div class="rose-petals"></div>
      </div>
      <div class="rose rose-7">
        <span class="rose-emoji">🌹</span>
        <div class="rose-petals"></div>
      </div>
      <div class="rose rose-8">
        <span class="rose-emoji">🌹</span>
        <div class="rose-petals"></div>
      </div>
      <div class="rose rose-9">
        <span class="rose-emoji">🌹</span>
        <div class="rose-petals"></div>
      </div>
      <div class="rose rose-10">
        <span class="rose-emoji">🌹</span>
        <div class="rose-petals"></div>
      </div>
      
      <!-- Rosas pequeñas adicionales -->
      <div class="small-rose small-rose-1">🌺</div>
      <div class="small-rose small-rose-2">🌺</div>
      <div class="small-rose small-rose-3">🌺</div>
      
      <!-- Hojas decorativas -->
      <div class="leaf leaf-1">🍃</div>
      <div class="leaf leaf-2">🍃</div>
      <div class="leaf leaf-3">🍃</div>
      <div class="leaf leaf-4">🍃</div>
      <div class="leaf leaf-5">🍃</div>
      <div class="leaf leaf-6">🍃</div>
      
      <!-- Tallos -->
      <div class="stem stem-1"></div>
      <div class="stem stem-2"></div>
      <div class="stem stem-3"></div>
      
      <!-- Cinta decorativa mejorada -->
      <div class="ribbon-wrapper">
        <div class="ribbon ribbon-1"></div>
        <div class="ribbon ribbon-2"></div>
        <div class="ribbon-bow"></div>
      </div>
      
      <!-- Brillo/Resplandor alrededor del ramo -->
      <div class="glow-effect"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.bouquet-container {
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1000px;
}

.bouquet {
  position: relative;
  width: 250px;
  height: 350px;
  animation: gentle-sway 5s ease-in-out infinite;
}

@keyframes gentle-sway {
  0%, 100% {
    transform: rotate(-2deg) translateY(0);
  }
  50% {
    transform: rotate(2deg) translateY(-5px);
  }
}

/* Efecto de resplandor */
.glow-effect {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(255, 20, 147, 0.3) 0%, transparent 70%);
  border-radius: 50%;
  animation: pulse-glow 3s ease-in-out infinite;
  z-index: 0;
  pointer-events: none;
}

@keyframes pulse-glow {
  0%, 100% {
    opacity: 0.5;
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    opacity: 0.8;
    transform: translate(-50%, -50%) scale(1.2);
  }
}

/* Rosas principales */
.rose {
  position: absolute;
  z-index: 5;
  animation: float-rose 4s ease-in-out infinite;
  filter: drop-shadow(0 6px 12px rgba(255, 20, 147, 0.5));
}

.rose-emoji {
  font-size: 3rem;
  display: block;
  animation: rose-bloom 3s ease-in-out infinite;
}

@keyframes rose-bloom {
  0%, 100% {
    transform: scale(1) rotate(0deg);
  }
  50% {
    transform: scale(1.1) rotate(5deg);
  }
}

.rose-petals {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 20, 147, 0.3) 0%, transparent 70%);
  animation: petals-float 2s ease-in-out infinite;
  pointer-events: none;
}

@keyframes petals-float {
  0%, 100% {
    opacity: 0.3;
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    opacity: 0.6;
    transform: translate(-50%, -50%) scale(1.3);
  }
}

@keyframes float-rose {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-10px) rotate(8deg);
  }
}

.rose-1 {
  top: 15px;
  left: 50%;
  transform: translateX(-50%);
  animation-delay: 0s;
}

.rose-2 {
  top: 30px;
  left: 25%;
  animation-delay: 0.4s;
}

.rose-3 {
  top: 30px;
  right: 25%;
  animation-delay: 0.8s;
}

.rose-4 {
  top: 50px;
  left: 15%;
  animation-delay: 1.2s;
}

.rose-5 {
  top: 50px;
  right: 15%;
  animation-delay: 1.6s;
}

.rose-6 {
  top: 70px;
  left: 30%;
  animation-delay: 2s;
}

.rose-7 {
  top: 70px;
  right: 30%;
  animation-delay: 2.4s;
}

.rose-8 {
  top: 90px;
  left: 45%;
  animation-delay: 2.8s;
}

.rose-9 {
  top: 90px;
  right: 45%;
  animation-delay: 3.2s;
}

.rose-10 {
  top: 110px;
  left: 50%;
  transform: translateX(-50%);
  animation-delay: 3.6s;
}

/* Rosas pequeñas */
.small-rose {
  position: absolute;
  font-size: 1.8rem;
  z-index: 4;
  animation: small-rose-float 3s ease-in-out infinite;
  filter: drop-shadow(0 3px 6px rgba(255, 20, 147, 0.4));
}

@keyframes small-rose-float {
  0%, 100% {
    transform: translateY(0) rotate(0deg) scale(1);
  }
  50% {
    transform: translateY(-5px) rotate(10deg) scale(1.1);
  }
}

.small-rose-1 {
  top: 130px;
  left: 20%;
  animation-delay: 0s;
}

.small-rose-2 {
  top: 150px;
  right: 20%;
  animation-delay: 1s;
}

.small-rose-3 {
  top: 170px;
  left: 50%;
  transform: translateX(-50%);
  animation-delay: 2s;
}

/* Hojas mejoradas */
.leaf {
  position: absolute;
  font-size: 1.8rem;
  z-index: 3;
  animation: leaf-sway 3s ease-in-out infinite;
  filter: drop-shadow(0 2px 4px rgba(34, 139, 34, 0.4));
}

@keyframes leaf-sway {
  0%, 100% {
    transform: rotate(0deg) scale(1);
  }
  50% {
    transform: rotate(15deg) scale(1.1);
  }
}

.leaf-1 {
  top: 120px;
  left: 20%;
  animation-delay: 0s;
}

.leaf-2 {
  top: 140px;
  right: 20%;
  animation-delay: 0.6s;
}

.leaf-3 {
  top: 160px;
  left: 30%;
  animation-delay: 1.2s;
}

.leaf-4 {
  top: 180px;
  right: 30%;
  animation-delay: 1.8s;
}

.leaf-5 {
  top: 200px;
  left: 25%;
  animation-delay: 2.4s;
}

.leaf-6 {
  top: 220px;
  right: 25%;
  animation-delay: 3s;
}

/* Tallos mejorados */
.stem {
  position: absolute;
  bottom: 0;
  background: linear-gradient(180deg, #228B22 0%, #32CD32 50%, #228B22 100%);
  border-radius: 4px;
  z-index: 1;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
}

.stem-1 {
  left: 48%;
  transform: translateX(-50%);
  width: 10px;
  height: 180px;
}

.stem-2 {
  left: 42%;
  transform: translateX(-50%) rotate(-5deg);
  width: 8px;
  height: 160px;
}

.stem-3 {
  right: 42%;
  transform: translateX(50%) rotate(5deg);
  width: 8px;
  height: 160px;
}

/* Cinta decorativa mejorada */
.ribbon-wrapper {
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 6;
  width: 80px;
  height: 80px;
}

.ribbon {
  position: absolute;
  background: linear-gradient(135deg, #ff69b4, #ff1493, #ff69b4);
  box-shadow: 0 4px 8px rgba(255, 20, 147, 0.4);
  border-radius: 4px;
}

.ribbon-1 {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70px;
  height: 16px;
  animation: ribbon-twist 4s ease-in-out infinite;
}

.ribbon-2 {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(90deg);
  width: 70px;
  height: 16px;
  animation: ribbon-twist 4s ease-in-out infinite reverse;
}

.ribbon-bow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  background: radial-gradient(circle, #ff1493 0%, #ff69b4 100%);
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(255, 20, 147, 0.5);
  animation: bow-pulse 2s ease-in-out infinite;
}

@keyframes bow-pulse {
  0%, 100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.2);
    opacity: 0.8;
  }
}

@keyframes ribbon-twist {
  0%, 100% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  50% {
    transform: translate(-50%, -50%) rotate(8deg);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .bouquet {
    width: 180px;
    height: 250px;
  }
  
  .rose-emoji {
    font-size: 2.2rem;
  }
  
  .small-rose {
    font-size: 1.4rem;
  }
  
  .leaf {
    font-size: 1.4rem;
  }
  
  .stem-1 {
    width: 8px;
    height: 130px;
  }
  
  .stem-2,
  .stem-3 {
    width: 6px;
    height: 110px;
  }
  
  .ribbon-wrapper {
    width: 60px;
    height: 60px;
    top: 80px;
  }
  
  .ribbon-1,
  .ribbon-2 {
    width: 50px;
    height: 12px;
  }
  
  .ribbon-bow {
    width: 15px;
    height: 15px;
  }
  
  .glow-effect {
    width: 150px;
    height: 150px;
  }
}
</style>