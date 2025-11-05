const button = document.getElementById('check');
const resultDiv = document.getElementById('result');

function getGradientColor(value) {
  if (value >= 90) return 'linear-gradient(90deg, #4caf50, #81c784)'; // verde
  if (value >= 50) return 'linear-gradient(90deg, #ffeb3b, #ffd54f)'; // amarillo
  return 'linear-gradient(90deg, #f44336, #e57373)';                  // rojo
}

button.addEventListener('click', () => {
  const url = document.getElementById('url').value;
  if (!url) return alert("Ingresa una URL válida");

  const apiKey = 'AIzaSyCGdSmP2XJbI_7KdFeRhrA758ET9umTf-k';
  const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&key=${apiKey}`;

  resultDiv.innerHTML = `<p>Cargando resultados...</p>`;

  fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
      resultDiv.innerHTML = '';
      const categories = data.lighthouseResult.categories;

      for (const cat in categories) {
        const catCard = document.createElement('div');
        catCard.className = 'category-card';
        const h2 = document.createElement('h2');
        h2.textContent = `${categories[cat].title} (${Math.round(categories[cat].score*100)}%)`;
        catCard.appendChild(h2);

        const audits = data.lighthouseResult.audits;
        for (const key in audits) {
          if (audits[key].scoreDisplayMode === "numeric" || audits[key].scoreDisplayMode === "binary") {
            const metricCard = document.createElement('div');
            metricCard.className = 'metric-card';
            const h4 = document.createElement('h4');
            h4.textContent = audits[key].title;
            metricCard.appendChild(h4);

            const barContainer = document.createElement('div');
            barContainer.className = 'bar-container';

            const bar = document.createElement('div');
            bar.className = 'bar';

            const val = audits[key].score !== null ? audits[key].score * 100 : 0;
            bar.style.background = getGradientColor(val);

            const barNumber = document.createElement('div');
            barNumber.className = 'bar-number';
            barNumber.textContent = val.toFixed(0) + '%';

            barContainer.appendChild(bar);
            barContainer.appendChild(barNumber);
            metricCard.appendChild(barContainer);
            catCard.appendChild(metricCard);

            // animación de la barra
            setTimeout(() => {
              bar.style.width = val + '%';
            }, 100);
          }
        }

        resultDiv.appendChild(catCard);
      }
    })
    .catch(err => {
      resultDiv.innerHTML = `<p>Error al obtener los datos: ${err}</p>`;
    });
});

