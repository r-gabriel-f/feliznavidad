<template>
  <div class="snow-container">
    <div
      v-for="(snowflake, index) in snowflakes"
      :key="index"
      class="snowflake"
      :style="{
        left: snowflake.left + '%',
        animationDuration: snowflake.duration + 's',
        animationDelay: snowflake.delay + 's',
        fontSize: snowflake.size + 'px',
        opacity: snowflake.opacity
      }"
    >
      ❄
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Snowflake {
  left: number
  duration: number
  delay: number
  size: number
  opacity: number
}

const snowflakes = ref<Snowflake[]>([])

const createSnowflakes = () => {
  const count = 50
  const flakes: Snowflake[] = []
  
  for (let i = 0; i < count; i++) {
    flakes.push({
      left: Math.random() * 100,
      duration: Math.random() * 3 + 2, // 2-5 seconds
      delay: Math.random() * 5,
      size: Math.random() * 10 + 10, // 10-20px
      opacity: Math.random() * 0.5 + 0.5 // 0.5-1
    })
  }
  
  snowflakes.value = flakes
}

onMounted(() => {
  createSnowflakes()
})
</script>

<style scoped>
.snow-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1000;
  overflow: hidden;
}

.snowflake {
  position: absolute;
  top: -20px;
  color: #ffffff;
  user-select: none;
  animation: fall linear infinite;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.8);
}

@keyframes fall {
  0% {
    transform: translateY(0) translateX(0) rotate(0deg);
  }
  100% {
    transform: translateY(100vh) translateX(20px) rotate(360deg);
  }
}
</style>
