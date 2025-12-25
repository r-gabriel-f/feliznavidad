<template>
  <div class="tree-container">
    <div class="tree">
      <!-- Estrella en la punta -->
      <div class="star">⭐</div>
      
      <!-- Capas del árbol -->
      <div class="layer layer-1"></div>
      <div class="layer layer-2"></div>
      <div class="layer layer-3"></div>
      <div class="layer layer-4"></div>
      
      <!-- Decoraciones (bolas) -->
      <div class="ornament ornament-1">🔴</div>
      <div class="ornament ornament-2">🟢</div>
      <div class="ornament ornament-3">🔵</div>
      <div class="ornament ornament-4">🟡</div>
      <div class="ornament ornament-5">🟣</div>
      <div class="ornament ornament-6">🔴</div>
      
      <!-- Luces navideñas -->
      <div class="light light-1"></div>
      <div class="light light-2"></div>
      <div class="light light-3"></div>
      <div class="light light-4"></div>
      <div class="light light-5"></div>
      <div class="light light-6"></div>
      
      <!-- Tronco -->
      <div class="trunk"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.tree-container {
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1000px;
}

.tree {
  position: relative;
  width: 200px;
  height: 300px;
  animation: sway 3s ease-in-out infinite;
}

@keyframes sway {
  0%, 100% {
    transform: rotate(-2deg);
  }
  50% {
    transform: rotate(2deg);
  }
}

/* Estrella */
.star {
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 2.5rem;
  z-index: 10;
  animation: twinkle 2s ease-in-out infinite;
  filter: drop-shadow(0 0 10px rgba(255, 215, 0, 0.8));
}

@keyframes twinkle {
  0%, 100% {
    transform: translateX(-50%) scale(1) rotate(0deg);
    opacity: 1;
  }
  50% {
    transform: translateX(-50%) scale(1.2) rotate(180deg);
    opacity: 0.8;
  }
}

/* Capas del árbol */
.layer {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 60px solid #228B22;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
}

.layer-1 {
  top: 0;
  border-left-width: 40px;
  border-right-width: 40px;
  border-bottom-width: 50px;
  border-bottom-color: #32CD32;
}

.layer-2 {
  top: 40px;
  border-left-width: 50px;
  border-right-width: 50px;
  border-bottom-width: 60px;
  border-bottom-color: #228B22;
}

.layer-3 {
  top: 90px;
  border-left-width: 60px;
  border-right-width: 60px;
  border-bottom-width: 70px;
  border-bottom-color: #006400;
}

.layer-4 {
  top: 150px;
  border-left-width: 70px;
  border-right-width: 70px;
  border-bottom-width: 80px;
  border-bottom-color: #228B22;
}

/* Decoraciones (bolas) */
.ornament {
  position: absolute;
  font-size: 1.2rem;
  z-index: 5;
  animation: bounce 2s ease-in-out infinite;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

.ornament-1 {
  top: 60px;
  left: 30%;
  animation-delay: 0s;
}

.ornament-2 {
  top: 100px;
  right: 25%;
  animation-delay: 0.3s;
}

.ornament-3 {
  top: 140px;
  left: 35%;
  animation-delay: 0.6s;
}

.ornament-4 {
  top: 180px;
  right: 30%;
  animation-delay: 0.9s;
}

.ornament-5 {
  top: 120px;
  left: 20%;
  animation-delay: 1.2s;
}

.ornament-6 {
  top: 160px;
  right: 20%;
  animation-delay: 1.5s;
}

/* Luces navideñas */
.light {
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  z-index: 6;
  animation: blink 1.5s ease-in-out infinite;
  box-shadow: 0 0 10px currentColor;
}

@keyframes blink {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.3;
    transform: scale(0.8);
  }
}

.light-1 {
  top: 80px;
  left: 45%;
  background: #ff0000;
  color: #ff0000;
  animation-delay: 0s;
}

.light-2 {
  top: 120px;
  right: 40%;
  background: #00ff00;
  color: #00ff00;
  animation-delay: 0.25s;
}

.light-3 {
  top: 160px;
  left: 50%;
  background: #0000ff;
  color: #0000ff;
  animation-delay: 0.5s;
}

.light-4 {
  top: 200px;
  right: 45%;
  background: #ffff00;
  color: #ffff00;
  animation-delay: 0.75s;
}

.light-5 {
  top: 100px;
  left: 30%;
  background: #ff00ff;
  color: #ff00ff;
  animation-delay: 1s;
}

.light-6 {
  top: 180px;
  right: 35%;
  background: #00ffff;
  color: #00ffff;
  animation-delay: 1.25s;
}

/* Tronco */
.trunk {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 30px;
  height: 40px;
  background: #8B4513;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

/* Responsive */
@media (max-width: 768px) {
  .tree {
    width: 150px;
    height: 225px;
  }
  
  .star {
    font-size: 2rem;
    top: -25px;
  }
  
  .layer-1 {
    border-left-width: 30px;
    border-right-width: 30px;
    border-bottom-width: 40px;
  }
  
  .layer-2 {
    top: 30px;
    border-left-width: 38px;
    border-right-width: 38px;
    border-bottom-width: 45px;
  }
  
  .layer-3 {
    top: 68px;
    border-left-width: 45px;
    border-right-width: 45px;
    border-bottom-width: 52px;
  }
  
  .layer-4 {
    top: 112px;
    border-left-width: 52px;
    border-right-width: 52px;
    border-bottom-width: 60px;
  }
  
  .trunk {
    width: 22px;
    height: 30px;
  }
  
  .ornament {
    font-size: 1rem;
  }
  
  .light {
    width: 6px;
    height: 6px;
  }
}
</style>
