---

# Proyecto Ionic con Angular

Este proyecto es una aplicación creada en Ionic y Angular que incorpora componentes personalizados con una estructura y diseño enriquecidos, con diversas plantillas predefinidas para botones, etiquetas (labels) y entradas de datos (inputs).

## Tabla de Contenidos
- [Instalación](#instalación)
- [Uso del Proyecto](#uso-del-proyecto)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Documentación de Componentes](#documentación-de-componentes)
- [Comandos del Proyecto](#comandos-del-proyecto)

## Instalación

Sigue estos pasos para clonar y configurar el proyecto en tu máquina local:

1. **Clona el Repositorio**  
   ```bash
   git clone https://github.com/carlosMauricio03/programacion-movil-c3-q2.git
   ```
2. **Navega al Directorio del Proyecto**
   ```bash
   cd programacion-movil-c3-q2/angular
   ```
3. **Instala las Dependencias**
   Asegúrate de tener [Node.js](https://nodejs.org/) y [npm](https://www.npmjs.com/) instalados, luego ejecuta:
   ```bash
   npm install
   ```

4. **Instala Ionic CLI**
   Si aún no tienes Ionic CLI instalado:
   ```bash
   npm install -g @ionic/cli
   ```

5. **Ejecuta la Aplicación**
   ```bash
   ionic serve
   ```
   La aplicación se abrirá en `http://localhost:8100/`.

## Uso del Proyecto

### Componentes Personalizados
Este proyecto contiene componentes personalizados (`app-buttons`, `app-inputs`, y `app-labels`) que permiten usar diferentes plantillas con parámetros configurables, simplificando el desarrollo de la interfaz de usuario. Los componentes están diseñados para ser reutilizados en distintas vistas del proyecto.

### Estructura del Proyecto
La estructura principal de este proyecto es la siguiente:
- **src/app/components**: Contiene los componentes personalizados reutilizables.
- **src/app/pages**: Contiene las páginas de la aplicación que incluyen y organizan los componentes.
- **src/app/services**: Define los servicios necesarios, si aplica, para la conexión a datos o lógica adicional.

### Documentación de Componentes

#### Componente de Botones (`app-buttons`)
Este componente permite crear botones estilizados con diferentes configuraciones de color, forma y tamaño. Puede usarse en cualquier página dentro de un `<ion-button>`.

#### Componente de Entradas (`app-inputs`)
Usado para crear entradas de datos con estilos y validaciones predefinidas. Admite propiedades como `type`, `placeholder`, `autocomplete` y `labelPlacement`.

#### Componente de Etiquetas (`app-labels`)
Este componente permite crear etiquetas (`labels`) estilizadas. Ideal para mostrar información estática o encabezados en formularios y tarjetas.

Cada componente incluye varios ejemplos de uso en el código de las páginas para una referencia rápida.

## Comandos del Proyecto

Los principales scripts disponibles en este proyecto son:

- `npm start` o `ionic serve`: Inicia la aplicación en un servidor de desarrollo.
- `npm run build`: Construye el proyecto para producción en la carpeta `dist/`.
- `npm test`: Ejecuta las pruebas unitarias configuradas.
- `npm run lint`: Analiza el código para verificar que cumple con las reglas de estilo de ESLint.

---
