# Documentacion

## Estructura de Carpetas del Proyecto

Este repositorio sigue una estructura organizada para facilitar el desarrollo y la comprensión del código. A continuación, se describe la carpeta src presente en el proyecto:

```
-src
--assets
--components
--context
--data
--hooks
--layouts
--pages
--router
--utils
```
    

- **assets**: Aquí se almacenan recursos estáticos como imágenes, archivos de estilo, fuentes, etc. que se utilizan en el proyecto.

- **components**: Contiene los componentes reutilizables de la aplicación. Estos componentes pueden ser piezas de interfaz de usuario, como botones, formularios, barras de navegación, etc.

- **context**: Esta carpeta alberga los contextos de React utilizados para administrar el estado de la aplicación y compartir datos entre componentes sin tener que pasar props manualmente a través de cada nivel.

- **data**: En este directorio se encuentran los datos estáticos que puedan ser necesarios para la aplicación, como archivos JSON, archivos CSV, o incluso datos en formato de base de datos local.

- **hooks**: Aquí se encuentran los custom hooks de React que encapsulan lógica reutilizable, como la gestión de estado, la suscripción a eventos, o la interacción con APIs.

- **layouts**: Contiene los layouts de la aplicación, es decir, las estructuras de página comunes que se utilizan para envolver los componentes de contenido y establecer la disposición de la interfaz de usuario.

- **pages**: En esta carpeta se encuentran los componentes de página de React que representan las diferentes vistas o páginas de la aplicación. Cada archivo en este directorio corresponde a una ruta de URL específica.

- **router**: Aquí se gestiona la configuración y el enrutamiento de la aplicación. Puede contener archivos relacionados con el enrutador utilizado, como por ejemplo, las rutas definidas para la navegación dentro de la aplicación.

- **utils**: Contiene funciones y utilidades de ayuda que se utilizan en toda la aplicación. Estas utilidades pueden incluir funciones de ayuda, validación de datos, formateo de fechas, entre otros.

Esta estructura de carpetas proporciona una organización clara y modular del código, lo que facilita el mantenimiento y la escalabilidad del proyecto. Cada carpeta tiene un propósito específico y ayuda a mantener el código limpio y ordenado.
