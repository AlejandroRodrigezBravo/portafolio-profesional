# Portafolio de Alejandro Rodríguez Bravo

Web estática en español: HTML, CSS y JavaScript, sin instalación de dependencias ni compilación. El sitio está dentro de `mi-portafolio/`.

## Vista previa local

Desde la raíz del repositorio:

```bash
python -m http.server 8080 --directory mi-portafolio
```

Abrir http://localhost:8080. También se puede abrir `mi-portafolio/index.html` directamente para revisar el diseño.

## Publicación en Netlify

El archivo `netlify.toml` declara `mi-portafolio` como directorio de publicación. No requiere comando de compilación. En un sitio existente, comprobar que el directorio base de Netlify sea la raíz del repositorio; no duplicar `mi-portafolio/mi-portafolio`.

Antes de publicar, revisar el diseño en móvil y escritorio. La rama de revisión es `mejora/portfolio-backend-2026`.

## Contenido

- `mi-portafolio/index.html`: perfil, experiencia, proyectos, capacidades y contacto.
- `mi-portafolio/proyectos/`: casos de AgroPlanner, La Porra Global, Mundial 2026, FUNDAE Autopilot y API de precios.
- `mi-portafolio/assets/css/styles.css`: diseño responsive y estilos de impresión.
- `mi-portafolio/assets/js/main.js`: menú accesible y año del pie.
- `mi-portafolio/assets/pdf/CV_backendDeveloper.pdf`: CV actualizado con las fechas confirmadas de UST y AgroPlanner y formación sin fechas.
- `mi-portafolio/assets/img/`: fotografía y capturas originales, versiones WebP optimizadas, favicon y tarjeta social.

Se mantienen los recursos históricos para evitar borrados innecesarios; Swiper y las fuentes de iconos externas ya no se cargan. No se añade analítica ni formulario que almacene datos. El contacto utiliza correo y perfiles profesionales.

## Mantenimiento

Actualizar las fechas y los textos en HTML, y reemplazar el PDF en la ruta indicada. Si cambia el dominio, actualizar `canonical`, `og:url`, `og:image`, JSON-LD, `robots.txt` y `sitemap.xml`.

AgroPlanner se presenta como proyecto en desarrollo. El gráfico es una ilustración conceptual en CSS, identificada como tal. Los proyectos seleccionados incluyen enlaces a sus repositorios públicos y un alcance explícito, sin prometer demos ni capacidades no verificadas.
