<template>
  <div class="snoopy-image-container">
    <div v-if="loading" class="loading">
      <div class="spinner"></div>
    </div>
    <div v-else-if="error && !showSVG" class="error-message">
      <p>No se pudo cargar la imagen</p>
      <button @click="loadImage" class="retry-btn">Reintentar</button>
    </div>
    <!-- Mostrar SVG directamente si es de tipo SVG o si hay error -->
    <div v-else-if="showSVG || imageSource === 'svg'" class="snoopy-svg" v-html="snoopySVG"></div>
    <img
      v-else
      :src="imageUrl"
      alt="Snoopy Navideño"
      class="snoopy-image"
      @load="onImageLoad"
      @error="onImageError"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getSnoopyImage, snoopyChristmasSVG } from '../utils/imageService'

const props = withDefaults(defineProps<{
  useApi?: boolean
  apiKey?: string
}>(), {
  useApi: false,
  apiKey: ''
})

const loading = ref(true)
const error = ref(false)
const imageUrl = ref('')
const imageSource = ref<'api' | 'local' | 'svg'>('svg')
const showSVG = ref(false)
const snoopySVG = ref(snoopyChristmasSVG.trim())

const loadImage = async () => {
  loading.value = true
  error.value = false
  showSVG.value = false

  try {
    const result = await getSnoopyImage(
      props.useApi && props.apiKey ? props.apiKey : undefined
    )
    
    imageSource.value = result.source
    
    if (result.source === 'svg') {
      // Si es SVG, mostrarlo directamente
      showSVG.value = true
      loading.value = false
    } else {
      // Si es una URL de imagen, cargarla
      imageUrl.value = result.url
      // El loading se desactivará cuando la imagen se cargue
    }
  } catch (err) {
    console.error('Error cargando imagen:', err)
    // En caso de error, mostrar SVG
    showSVG.value = true
    imageSource.value = 'svg'
    loading.value = false
  }
}

const onImageLoad = () => {
  loading.value = false
  error.value = false
}

const onImageError = () => {
  // Si falla la carga de imagen, mostrar SVG
  showSVG.value = true
  imageSource.value = 'svg'
  loading.value = false
  error.value = false
}

onMounted(() => {
  loadImage()
})
</script>

<style scoped>
.snoopy-image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 300px;
}

.snoopy-image,
.snoopy-svg {
  max-width: 300px;
  max-height: 400px;
  width: auto;
  height: auto;
  object-fit: contain;
  filter: drop-shadow(0 10px 30px rgba(255, 255, 255, 0.3));
  animation: float 3s ease-in-out infinite;
}

.snoopy-svg {
  display: flex;
  justify-content: center;
  align-items: center;
}

.snoopy-svg :deep(svg) {
  width: 100%;
  height: auto;
  max-width: 300px;
  max-height: 400px;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
}

.spinner {
  width: 50px;
  height: 50px;
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid #ffd700;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.error-message {
  text-align: center;
  color: #fff;
}

.retry-btn {
  margin-top: 10px;
  padding: 8px 16px;
  background: #c41e3a;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
}

.retry-btn:hover {
  background: #a01a2e;
}

/* Responsive */
@media (max-width: 768px) {
  .snoopy-image {
    max-width: 200px;
    max-height: 300px;
  }
}
</style>
