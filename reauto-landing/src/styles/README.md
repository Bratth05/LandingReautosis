# 🎨 Estilos Compartidos - ReAuto

Esta carpeta contiene todos los estilos CSS compartidos del proyecto. Es la **raíz centralizada** de estilos para todas las páginas y componentes.

## 📁 Estructura de Archivos

```
src/styles/
├── index.css          # 📌 Punto de entrada principal (importa todos los módulos)
├── variables.css      # 🎨 Variables CSS y tema
├── typography.css     # 📝 Estilos de tipografía y fuentes
├── global.css         # 🌍 Estilos globales (reset, body, forms)
├── utilities.css      # 🛠️  Utilidades reutilizables
└── README.md          # 📖 Este archivo
```

## 📚 Descripción de Archivos

### `index.css` ⚡
**Propósito:** Punto de entrada principal de estilos.

Importa todos los módulos en el orden correcto:
1. Variables CSS
2. Tipografía
3. Tailwind CSS
4. Estilos globales
5. Utilidades

**Uso:** Importado en `src/main.tsx`
```typescript
import './styles/index.css'
```

### `variables.css` 🎨
**Propósito:** Define todas las variables CSS reutilizables.

**Contiene:**
- Colores de marca (`--brand-primary`, `--brand-secondary`, etc.)
- Variables de espaciado (`--spacing-*`)
- Sombras (`--shadow-*`)
- Border radius (`--radius-*`)
- Transiciones (`--transition-*`)
- Z-index (`--z-*`)
- Variables para dark/light mode

**Ejemplo de uso:**
```css
.mi-elemento {
  color: var(--brand-primary);
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-md);
}
```

### `typography.css` 📝
**Propósito:** Define estilos de tipografía y escalas de texto.

**Contiene:**
- Importaciones de Google Fonts (Space Grotesk, Inter)
- Estilos de headings (h1, h2, h3, etc.)
- Escalas de texto (text-xs a text-7xl)
- Pesos de fuente (light, normal, medium, semibold, bold)
- Utilidades de texto (tracking, color)

**Ejemplo de uso:**
```html
<h1 class="font-headline text-5xl font-bold">Título Principal</h1>
<p class="text-lg text-secondary">Descripción</p>
```

### `global.css` 🌍
**Propósito:** Estilos base globales del proyecto.

**Contiene:**
- Reset CSS
- Estilos de body, html
- Estilos de enlaces
- Estilos de imágenes
- Estilos de formularios e inputs
- Estilos de tablas
- Dark mode styles
- Scrollbar personalizado
- Print styles

**Ejemplo de uso:**
Estos estilos se aplican automáticamente a todo el proyecto sin necesidad de clases adicionales.

### `utilities.css` 🛠️
**Propósito:** Clases utilitarias reutilizables para componentes.

**Contiene:**
- Animaciones keyframes
- Flexbox utilities
- Grid utilities
- Sombras especiales
- Clases de badges
- Clases de botones base
- Clases de visibilidad
- Clases de transición

**Ejemplo de uso:**
```html
<div class="flex-center gap-4">
  <button class="btn btn-primary">Primario</button>
  <button class="btn btn-secondary">Secundario</button>
</div>

<span class="badge badge-primary">En Stock</span>
<span class="badge badge-warning">Pendiente</span>
```

## 🎯 Cómo Usar

### Variables CSS
```css
/* En tus estilos personalizados */
.mi-elemento {
  color: var(--brand-primary);
  padding: var(--spacing-lg);
  transition: all var(--transition-base);
}
```

### Clases Utilitarias
```html
<!-- En tus componentes -->
<div class="flex-center gap-4">
  Contenido centrado
</div>

<button class="btn btn-primary btn-lg">
  Click aquí
</button>
```

### Tailwind CSS
Los estilos Tailwind continúan funcionando normalmente:
```html
<div class="bg-primary text-white rounded-lg p-4 shadow-lg">
  Elemento con Tailwind
</div>
```

## 🎨 Colores de Marca

| Variable | Valor | Uso |
|----------|-------|-----|
| `--brand-primary` | `#00478d` | Botones, links, énfasis |
| `--brand-secondary` | `#5d5e62` | Textos secundarios, borders |
| `--brand-tertiary` | `#793100` | Acentos, iconos especiales |
| `--brand-deep-blue` | `#0b1e4a` | Fondos oscuros |

## 📐 Espaciado

| Variable | Valor | Uso |
|----------|-------|-----|
| `--spacing-xs` | 0.25rem | Gaps muy pequeños |
| `--spacing-sm` | 0.5rem | Gaps pequeños |
| `--spacing-md` | 1rem | Gaps estándar |
| `--spacing-lg` | 1.5rem | Gaps medianos |
| `--spacing-xl` | 2rem | Gaps grandes |
| `--spacing-2xl` | 3rem | Gaps muy grandes |
| `--spacing-3xl` | 4rem | Gaps extremos |

## ⏱️ Transiciones

```css
/* Variables disponibles */
--transition-fast: 150ms   /* Interacciones rápidas */
--transition-base: 200ms   /* Transiciones estándar */
--transition-slow: 300ms   /* Transiciones lentas */
```

## 🔧 Componentes de CSS

### Botones
```html
<button class="btn btn-primary">Primario</button>
<button class="btn btn-secondary">Secundario</button>
<button class="btn btn-ghost">Ghost</button>
<button class="btn btn-sm">Pequeño</button>
<button class="btn btn-lg">Grande</button>
```

### Badges
```html
<span class="badge badge-primary">Primario</span>
<span class="badge badge-success">Éxito</span>
<span class="badge badge-error">Error</span>
<span class="badge badge-warning">Advertencia</span>
```

### Layouts
```html
<div class="flex-center">Contenido centrado (flex)</div>
<div class="flex-between">Esto ... y eso</div>
<div class="flex-col-center">Centrado vertical</div>
<div class="grid-responsive">Grid automático</div>
<div class="container-max">Contenedor máximo con márgenes</div>
```

### Animaciones
```html
<div class="animate-slideInUp">Desliza hacia arriba</div>
<div class="animate-fadeIn">Desvanecimiento</div>
<div class="animate-pulse">Pulso continuo</div>
```

## 📱 Responsive

Usa Tailwind o media queries CSS estándar:

```html
<!-- Con Tailwind (recomendado) -->
<div class="p-4 md:p-8 lg:p-12">
  Padding responsivo
</div>

<!-- Con CSS personalizado -->
<style>
  .mi-clase {
    padding: 1rem;
  }
  
  @media (min-width: 768px) {
    .mi-clase {
      padding: 2rem;
    }
  }
</style>
```

## 🌙 Dark Mode

Automáticamente soportado. Las variables se actualizan según `prefers-color-scheme`:

```css
/* Disponible en dark mode automáticamente */
@media (prefers-color-scheme: dark) {
  /* Variables se actualizan automáticamente */
}
```

## 💡 Mejores Prácticas

1. ✅ **Usa variables CSS** para colores, espaciado y tiempos
2. ✅ **Usa clases utilitarias** para componentes comunes
3. ✅ **Usa Tailwind** para layouts rápidos
4. ✅ **Mantén los estilos organizados** en esta carpeta
5. ✅ **No duplicar estilos** ya existentes
6. ❌ **Evita estilos inline** cuando sea posible
7. ❌ **No modifiques variables** sin actualizar este README

## 🚀 Agregar Nuevos Estilos

Si necesitas agregar nuevos estilos compartidos:

1. **Variables nuevas** → Agrega a `variables.css`
2. **Estilos globales** → Agrega a `global.css`
3. **Componentes CSS** → Agrega a `utilities.css`
4. **Tipografía** → Agrega a `typography.css`
5. **Actualiza este README**

## ❓ Soporte

Para preguntas sobre la estructura de estilos, consulta:
- Tailwind CSS docs: https://tailwindcss.com
- Material Design: https://material.io/design
- Variables CSS: https://developer.mozilla.org/en-US/docs/Web/CSS/--*

---

**Última actualización:** Abril 2026  
**Proyecto:** ReAuto Landing  
**Versión:** 1.0.0
