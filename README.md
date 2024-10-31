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

## Creación de Componentes Personalizados en Angular e Ionic

### 1. Componente de Botones (`app-buttons`)

Este componente permite crear botones personalizables en Ionic usando parámetros configurables. La estructura HTML y el archivo TypeScript (`.ts`) se configuran para recibir propiedades mediante decoradores `@Input`, los cuales determinan su estilo y configuración.

#### Código HTML (`buttons.component.html`):
```html
<ion-button [color]="color" [shape]="shape" [fill]="fill" [size]="size" [expand]="expand">
  {{ text }}
</ion-button>
```

#### Código TypeScript (`buttons.component.ts`):
```typescript
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css'],
})
export class ButtonsComponent implements OnInit {
  @Input() text!: string;  // Texto del botón
  @Input() shape!: string; // Forma del botón (ej. "round")
  @Input() fill!: string;  // Estilo de relleno (ej. "solid" o "outline")
  @Input() size!: string;  // Tamaño del botón (ej. "small", "default", "large")
  @Input() color!: string; // Color del botón
  @Input() expand!: string; // Expansión del botón (ej. "block", "full")

  constructor() { }

  ngOnInit() {}
}
```

Cada atributo del botón (`text`, `shape`, `fill`, `size`, `color` y `expand`) se define con el decorador `@Input()` para que el componente pueda recibir valores personalizados desde el HTML donde se utilice.

---

### 2. Componente de Entradas de Datos (`app-inputs`)

Este componente permite crear entradas de datos con propiedades de personalización que incluyen el tipo de entrada (texto, número, etc.), el id, el nombre, el marcador de posición y el tipo de autocompletado.

#### Código HTML (`inputs.component.html`):
```html
<ion-input [id]="id" [type]="type" [name]="name" [placeholder]="placeholder" 
           [labelPlacement]="labelPlacement" [autocomplete]="autocomplete"></ion-input>
```

#### Código TypeScript (`inputs.component.ts`):
```typescript
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css'],
})
export class InputsComponent implements OnInit {
  @Input() id!: string;            // Identificador único
  @Input() type!: string;           // Tipo de entrada (ej. "text", "password")
  @Input() name!: string;           // Nombre del campo
  @Input() placeholder!: string;    // Texto de marcador de posición
  @Input() labelPlacement!: string; // Posición de la etiqueta
  @Input() autocomplete!: string;   // Opciones de autocompletado

  constructor() { }

  ngOnInit() {}
}
```

Con estas propiedades, el componente de entrada puede adaptarse fácilmente a diferentes tipos de formularios y configuraciones de campo.

---

### 3. Componente de Etiquetas (`app-labels`)

El componente de etiquetas es útil para crear etiquetas de texto personalizables, que permiten asignar un color, posición, y el texto a mostrar.

#### Código HTML (`labels.component.html`):
```html
<ion-label [id]="id" [position]="position" [color]="color">
  {{ text }}
</ion-label>
```

#### Código TypeScript (`labels.component.ts`):
```typescript
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-labels',
  templateUrl: './labels.component.html',
  styleUrls: ['./labels.component.css'],
})
export class LabelsComponent implements OnInit {
  @Input() id!: string;        // Identificador único
  @Input() text!: string;      // Texto de la etiqueta
  @Input() position!: string;  // Posición del texto
  @Input() color!: string;     // Color del texto

  constructor() { }

  ngOnInit() {}
}
```

Con el decorador `@Input()`, el componente puede recibir valores externos, lo que permite modificar el contenido y el estilo de la etiqueta fácilmente.

---

### Cómo Usar Estos Componentes

1. **Agregar el Componente a una Página**  
   Para utilizar uno de estos componentes, simplemente incluye su selector en el HTML de la página donde lo necesites. Por ejemplo, para añadir el componente de botones en una página:
   ```html
   <app-buttons text="Guardar" color="primary" shape="round" fill="solid" size="large" expand="block"></app-buttons>
   ```

2. **Personalizar las Propiedades**  
   Las propiedades de cada componente (`@Input`) se pueden configurar en el HTML donde se utiliza el componente, permitiendo la personalización para cada caso de uso.

Con estos componentes, el proyecto cuenta con una estructura modular que facilita la creación de interfaces consistentes y fácilmente modificables en Angular e Ionic.

---
