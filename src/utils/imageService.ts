/**
 * Servicio para obtener imágenes de Snoopy navideño
 * Soporta múltiples fuentes: API de Pixabay, imágenes locales, o SVG inline
 */

export interface ImageSource {
  url: string
  source: 'api' | 'local' | 'svg'
}

// SVG de Snoopy navideño optimizado
export const snoopyChristmasSVG = `
<svg width="250" height="300" viewBox="0 0 250 300" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="hatGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#ff0000;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#c41e3a;stop-opacity:1" />
    </linearGradient>
    <filter id="shadow">
      <feDropShadow dx="0" dy="4" stdDeviation="4" flood-opacity="0.3"/>
    </filter>
  </defs>
  
  <!-- Gorro de Navidad -->
  <g filter="url(#shadow)">
    <rect x="75" y="5" width="100" height="30" fill="url(#hatGradient)" rx="8"/>
    <rect x="75" y="30" width="100" height="8" fill="#FFFFFF"/>
    <polygon points="125,5 100,75 150,75" fill="url(#hatGradient)"/>
    <circle cx="125" cy="-8" r="12" fill="#FFFFFF"/>
  </g>
  
  <!-- Cabeza -->
  <ellipse cx="125" cy="80" rx="70" ry="60" fill="#FFFFFF" stroke="#000000" stroke-width="3" filter="url(#shadow)"/>
  
  <!-- Orejas -->
  <ellipse cx="60" cy="50" rx="30" ry="35" fill="#FFFFFF" stroke="#000000" stroke-width="3" transform="rotate(-25 60 50)"/>
  <ellipse cx="190" cy="50" rx="30" ry="35" fill="#FFFFFF" stroke="#000000" stroke-width="3" transform="rotate(25 190 50)"/>
  
  <!-- Ojos -->
  <circle cx="105" cy="75" r="8" fill="#000000"/>
  <circle cx="145" cy="75" r="8" fill="#000000"/>
  
  <!-- Nariz -->
  <ellipse cx="125" cy="95" rx="12" ry="11" fill="#000000"/>
  
  <!-- Boca -->
  <path d="M 95 110 Q 125 120 155 110" stroke="#000000" stroke-width="3" fill="none" stroke-linecap="round"/>
  
  <!-- Cuerpo -->
  <ellipse cx="125" cy="200" rx="85" ry="75" fill="#FFFFFF" stroke="#000000" stroke-width="3" filter="url(#shadow)"/>
  
  <!-- Brazos -->
  <ellipse cx="50" cy="180" rx="20" ry="40" fill="#FFFFFF" stroke="#000000" stroke-width="3" transform="rotate(-30 50 180)"/>
  <ellipse cx="200" cy="180" rx="20" ry="40" fill="#FFFFFF" stroke="#000000" stroke-width="3" transform="rotate(30 200 180)"/>
  
  <!-- Patas -->
  <ellipse cx="90" cy="260" rx="30" ry="20" fill="#FFFFFF" stroke="#000000" stroke-width="3"/>
  <ellipse cx="160" cy="260" rx="30" ry="20" fill="#FFFFFF" stroke="#000000" stroke-width="3"/>
  
  <!-- Decoración navideña (estrella en el pecho) -->
  <path d="M 125 160 L 130 175 L 145 175 L 133 185 L 138 200 L 125 190 L 112 200 L 117 185 L 105 175 L 120 175 Z" 
        fill="#FFD700" stroke="#FFA500" stroke-width="2"/>
</svg>
`

/**
 * Obtiene una imagen de Snoopy navideño desde la API de Pixabay
 */
export async function getSnoopyImageFromAPI(apiKey: string): Promise<ImageSource | null> {
  try {
    const response = await fetch(
      `https://pixabay.com/api/?key=${apiKey}&q=snoopy+christmas+peanuts&image_type=vector&safesearch=true&per_page=5`
    )
    
    if (!response.ok) {
      throw new Error('Error en la respuesta de la API')
    }
    
    const data = await response.json()
    
    if (data.hits && data.hits.length > 0) {
      // Preferir imágenes vectoriales o de alta calidad
      const image = data.hits.find((hit: any) => hit.imageURL) || data.hits[0]
      return {
        url: image.imageURL || image.webformatURL || image.previewURL,
        source: 'api'
      }
    }
    
    return null
  } catch (error) {
    console.error('Error obteniendo imagen de la API:', error)
    return null
  }
}

/**
 * Obtiene la imagen SVG de Snoopy como data URL
 */
export function getSnoopySVGImage(): ImageSource {
  const svgData = snoopyChristmasSVG.trim()
  // Usar encodeURIComponent para evitar problemas con caracteres especiales
  const encoded = encodeURIComponent(svgData)
  return {
    url: `data:image/svg+xml;charset=utf-8,${encoded}`,
    source: 'svg'
  }
}

/**
 * Obtiene una imagen de Snoopy, intentando primero la API y luego usando SVG como fallback
 */
export async function getSnoopyImage(apiKey?: string): Promise<ImageSource> {
  if (apiKey) {
    const apiImage = await getSnoopyImageFromAPI(apiKey)
    if (apiImage) {
      return apiImage
    }
  }
  
  // Fallback a SVG
  return getSnoopySVGImage()
}
