# Guía de Uso de Imágenes de Snoopy

Este proyecto incluye dos formas de mostrar a Snoopy navideño:

## 1. Componente CSS (Por Defecto)
El componente `Snoopy.vue` crea a Snoopy usando solo CSS puro. Es ligero y no requiere conexión a internet.

## 2. Componente con Imágenes
El componente `SnoopyImage.vue` puede usar:
- **SVG inline** (por defecto, sin necesidad de API)
- **API de Pixabay** (opcional, requiere clave API)

## Cómo Usar la API de Pixabay

### Paso 1: Obtener una Clave API Gratuita
1. Ve a [https://pixabay.com/api/docs/](https://pixabay.com/api/docs/)
2. Regístrate para obtener una cuenta gratuita
3. Copia tu API key

### Paso 2: Configurar en el Proyecto
Edita `src/App.vue` y actualiza estas líneas:

```typescript
const usePixabayAPI = ref(true) // Cambia a true
const pixabayApiKey = ref('TU_API_KEY_AQUI') // Agrega tu clave
```

### Paso 3: Activar el Modo de Imagen
En `src/App.vue`, cambia:
```typescript
const useImageComponent = ref(true) // Cambia a true para usar imágenes
```

## Alternativas sin API

### Opción A: Usar SVG Inline (Recomendado)
El componente `SnoopyImage.vue` ya incluye un SVG de Snoopy navideño que funciona sin necesidad de API. Solo activa el modo de imagen:

```typescript
const useImageComponent = ref(true)
const usePixabayAPI = ref(false) // No necesitas API
```

### Opción B: Agregar Imágenes Locales
1. Descarga imágenes de Snoopy navideño (asegúrate de tener los derechos)
2. Colócalas en la carpeta `public/images/`
3. Actualiza `SnoopyImage.vue` para usar rutas locales:

```vue
imageUrl.value = '/images/snoopy-christmas.png'
```

## Servicio de Imágenes

El archivo `src/utils/imageService.ts` contiene funciones útiles:
- `getSnoopyImageFromAPI()` - Obtiene imágenes de Pixabay
- `getSnoopySVGImage()` - Retorna el SVG inline
- `getSnoopyImage()` - Función principal que intenta API y luego SVG

## Notas Legales

⚠️ **Importante**: Snoopy es un personaje protegido por derechos de autor de Peanuts Worldwide LLC. Asegúrate de:
- Usar imágenes solo para proyectos personales/educativos
- Verificar las licencias de cualquier imagen que uses
- No usar para fines comerciales sin permiso

## Recursos Recomendados

- **Pixabay**: [https://pixabay.com](https://pixabay.com) - Imágenes libres de derechos
- **Unsplash**: [https://unsplash.com](https://unsplash.com) - Fotos gratuitas (no tiene Snoopy específico)
- **Open Clip Art**: [https://openclipart.org](https://openclipart.org) - Clip art de dominio público

## Solución Actual

Por defecto, el proyecto usa:
- ✅ Componente CSS (Snoopy.vue) - Funciona perfectamente sin dependencias externas
- ✅ SVG inline en SnoopyImage.vue - Funciona sin API
- ⚙️ Soporte para API de Pixabay - Opcional si quieres imágenes reales

¡Disfruta tu página navideña! 🎄
