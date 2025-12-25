<template>
  <Transition name="modal">
    <div v-if="isOpen" class="modal-overlay" @click.self="close">
      <div class="modal-container">
        <button class="close-btn" @click="close" aria-label="Cerrar">✕</button>
        <div class="image-wrapper">
          <img :src="imageSrc" :alt="imageAlt" class="modal-image" />
        </div>
        <div class="message-container">
          <h2 class="modal-title">¡Feliz Navidad y Próspero Año Nuevo!</h2>
          <p class="modal-gift">🎁 Aquí tienes tu regalo 🎁</p>
          <p class="modal-message">
            Querido Omar,<br /><br />
            En esta temporada tan especial queremos recordarte que siempre
            estaremos aquí para ti, apoyándote en todo lo que necesites. Junto
            con toda la familia, te queremos incondicionalmente y celebramos
            quién eres, incluidos esos gustos tan únicos que te hacen especial,
            sonso colera 😄.<br /><br />
            Que este nuevo año esté lleno de bendiciones, alegrías, risas y
            momentos inolvidables. Nunca olvides que cuentas con nosotros hoy y
            siempre.
          </p>
          <p class="modal-signature">
            Con todo mi cariño tu regalo espero que algun dia lo pruebes
          </p>
          <img
            src="../assets/xerjoff-cruz-del-sur-i_700x700-removebg-preview.png"
            alt="Regalo"
            class="modal-regalo"
          />
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
defineProps<{
  isOpen: boolean;
  imageSrc: string;
  imageAlt?: string;
}>();

const emit = defineEmits<{
  close: [];
}>();

const close = () => {
  emit("close");
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.85);
  z-index: 10000;
  backdrop-filter: blur(5px);
  display: grid;
  place-items: center;
  padding: 20px;
  box-sizing: border-box;
  overflow-y: auto;
  overflow-x: hidden;
}

.modal-container {
  position: relative;
  width: 90%;
  max-width: 800px;
  max-height: 95vh;
  background: #1a1a1a;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  animation: scaleIn 0.3s ease-out;
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  overflow-y: auto;
  overflow-x: hidden;
}

.modal-container::-webkit-scrollbar {
  width: 8px;
}

.modal-container::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}

.modal-container::-webkit-scrollbar-thumb {
  background: rgba(255, 215, 0, 0.5);
  border-radius: 10px;
}

.modal-container::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 215, 0, 0.7);
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

.image-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  overflow: hidden;
  background: #000;
}

.modal-image {
  max-width: 100%;
  max-height: 60vh;
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: 10px;
}

.message-container {
  margin-top: 25px;
  text-align: center;
  padding: 0 20px 20px 20px;
}

.modal-title {
  font-size: 2.2rem;
  color: #ffd700;
  margin-bottom: 20px;
  text-shadow: 0 0 25px rgba(255, 215, 0, 0.9), 0 3px 12px rgba(0, 0, 0, 0.6);
  font-weight: bold;
  font-family: "Georgia", serif;
  animation: title-glow 2s ease-in-out infinite alternate;
  letter-spacing: 1px;
}

@keyframes title-glow {
  from {
    text-shadow: 0 0 25px rgba(255, 215, 0, 0.9), 0 3px 12px rgba(0, 0, 0, 0.6);
  }
  to {
    text-shadow: 0 0 35px rgba(255, 215, 0, 1), 0 0 50px rgba(255, 215, 0, 0.95),
      0 3px 12px rgba(0, 0, 0, 0.6);
  }
}

.modal-gift {
  font-size: 1.5rem;
  color: #ffd700;
  margin-bottom: 25px;
  text-shadow: 0 0 20px rgba(255, 215, 0, 0.8), 0 2px 8px rgba(0, 0, 0, 0.5);
  font-weight: bold;
  font-family: "Georgia", serif;
  animation: gift-pulse 2s ease-in-out infinite;
}

@keyframes gift-pulse {
  0%,
  100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.9;
  }
}

.modal-message {
  font-size: 1.15rem;
  color: #ffffff;
  line-height: 2;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.9), 0 0 20px rgba(255, 255, 255, 0.2);
  font-family: "Georgia", serif;
  margin: 0 0 20px 0;
  padding: 0;
  text-align: left;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.modal-signature {
  font-size: 1.3rem;
  color: #ffd700;
  font-style: italic;
  text-shadow: 0 0 20px rgba(255, 215, 0, 0.8), 0 2px 8px rgba(0, 0, 0, 0.5);
  font-family: "Georgia", serif;
  margin-top: 25px;
  font-weight: 600;
}

.modal-regalo {
  max-width: 300px;
  max-height: 300px;
  width: auto;
  height: auto;
  object-fit: contain;
  margin: 20px auto;
  display: block;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(255, 215, 0, 0.3);
  animation: gift-float 3s ease-in-out infinite;
}

@keyframes gift-float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
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
    display: grid;
    place-items: center;
  }

  .modal-container {
    width: 95%;
    max-width: 95%;
    padding: 15px;
    max-height: 95vh;
    overflow-y: auto;
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
    display: grid;
    place-items: center;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }

  .modal-container {
    width: 100%;
    height: 100vh;
    max-height: 100vh;
    border-radius: 0;
    padding: 10px;
    margin: 0;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
  }

  .modal-regalo {
    max-width: 200px;
    max-height: 200px;
  }

  .modal-image {
    max-height: 50vh;
  }

  .modal-title {
    font-size: 1.5rem;
    margin-bottom: 15px;
  }

  .modal-gift {
    font-size: 1.2rem;
    margin-bottom: 15px;
  }

  .modal-message {
    font-size: 0.95rem;
    line-height: 1.7;
    text-align: center;
  }

  .modal-signature {
    font-size: 1.1rem;
    margin-top: 15px;
  }

  .message-container {
    margin-top: 15px;
    padding: 0 10px 15px 10px;
  }
}
</style>
