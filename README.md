

# PageSpeed Insights Visualizer

Este proyecto es una **herramienta web interactiva** que permite obtener y visualizar métricas de PageSpeed Insights para cualquier URL. Las métricas se muestran en tarjetas dinámicas con **barras de progreso coloreadas** según el rendimiento, accesibilidad y otras categorías clave.

---

## Características

* **Consulta dinámica de PageSpeed Insights:** obtiene datos en tiempo real usando la API de Google.
* **Visualización intuitiva:** métricas presentadas con barras de progreso animadas y colores que reflejan el rendimiento.
* **Colores y gradientes:** verde para alto rendimiento, amarillo para intermedio y rojo para bajo rendimiento.
* **Manejo de errores:** muestra mensajes claros si la URL es inválida o la API falla.
* **Interfaz responsive:** se adapta a diferentes tamaños de pantalla.

---

## Tecnologías

* **HTML5**: estructura de la página.
* **CSS3**: diseño, barras animadas y gradientes.
* **JavaScript (ES6)**: consumo de la API, renderizado dinámico y animaciones.
* **PageSpeed Insights API**: obtención de métricas de rendimiento web.

---

## Instalación y uso

1. Clonar el repositorio:

```bash
git clone https://github.com/tu-usuario/nombre-del-repo.git
```

2. Abrir `index.html` en un navegador moderno.

3. Ingresar una URL válida en el input y presionar el botón **Check**.

4. Ver los resultados con barras animadas y gradientes que reflejan la puntuación de cada métrica.

---

## Personalización

* **Colores de barra:** modifica la función `getGradientColor` en `main.js` para cambiar los gradientes según el valor de la puntuación.
* **API Key:** reemplaza la variable `apiKey` con tu propia clave de Google PageSpeed Insights.
* **Estilos:** personaliza `.category-card`, `.metric-card` y `.bar` en CSS para adaptar el diseño.

---

## Licencia

Este proyecto está bajo la [MIT License](LICENSE).


