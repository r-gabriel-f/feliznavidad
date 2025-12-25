<template>
  <Transition name="modal">
    <div v-if="isOpen" class="modal-overlay" @click.self="close">
      <div class="modal-container">
        <button class="close-btn" @click="close" aria-label="Cerrar">
          ✕
        </button>
        <div class="video-wrapper">
          <video
            ref="videoRef"
            :src="videoSrc"
            controls
            autoplay
            class="video-player"
            @ended="close"
          >
            Tu navegador no soporta la reproducción de video.
          </video>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps<{
  isOpen: boolean
  videoSrc: string
}>()

const emit = defineEmits<{
  close: []
}>()

const videoRef = ref<HTMLVideoElement | null>(null)

const close = () => {
  if (videoRef.value) {
    videoRef.value.pause()
    videoRef.value.currentTime = 0
  }
  emit('close')
}

watch(() => props.isOpen, (newValue) => {
  if (newValue && videoRef.value) {
    videoRef.value.play().catch(console.error)
  }
})
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
  backdrop-filter: blur(5px);
  overflow-y: auto;
  padding: 20px;
  box-sizing: border-box;
}

.modal-container {
  position: relative;
  width: 90%;
  max-width: 900px;
  max-height: calc(100vh - 40px);
  margin: auto;
  background: #1a1a1a;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  animation: scaleIn 0.3s ease-out;
  display: flex;
  flex-direction: column;
  align-self: center;
}

@keyframes scaleIn {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 50%;
  color: #ffffff;
  font-size: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10001;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.close-btn:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: rotate(90deg);
}

.video-wrapper {
  width: 100%;
  padding-top: 56.25%; /* 16:9 aspect ratio */
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  background: #000;
}

.video-player {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

/* Transiciones */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-container,
.modal-leave-active .modal-container {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  transform: scale(0.8);
  opacity: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .modal-overlay {
    padding: 15px;
  }
  
  .modal-container {
    width: 95%;
    max-width: 95%;
    padding: 15px;
    max-height: calc(100vh - 30px);
  }
  
  .close-btn {
    width: 35px;
    height: 35px;
    font-size: 20px;
    top: 5px;
    right: 5px;
  }
}

@media (max-width: 480px) {
  .modal-overlay {
    padding: 0;
  }
  
  .modal-container {
    width: 100%;
    height: 100vh;
    max-height: 100vh;
    border-radius: 0;
    padding: 10px;
    margin: 0;
  }
  
  .video-wrapper {
    padding-top: 75%; /* Más alto en móviles */
  }
}
</style>
