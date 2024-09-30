document.addEventListener("DOMContentLoaded", function () {
    var searchInput = document.getElementById('search-input');
    var searchResults = document.getElementById('results-container');
  
    searchInput.addEventListener('input', function (e) {
      var query = e.target.value;
      // Ejecutar la búsqueda con lunr.js
      var results = window.index.search(query); // Asegúrate de cargar lunr.js en tu proyecto
      searchResults.innerHTML = results.map(result => `<li>${result.title}</li>`).join('');
    });
  });
  