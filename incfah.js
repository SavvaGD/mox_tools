document.addEventListener('DOMContentLoaded', () => {
  // Функция для загрузки компонентов (header/footer)
  const loadComponent = (url, placeholderId, componentName) => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Не удалось загрузить ${componentName} (код: ${response.status})`);
        }
        return response.text();
      })
      .then(data => {
        const placeholder = document.getElementById(placeholderId);
        if (placeholder) {
          placeholder.outerHTML = data;
        }
      })
      .catch(error => {
        console.error(error.message);
        // Опционально: выводим сообщение пользователю
        const placeholder = document.getElementById(placeholderId);
        if (placeholder) {
          placeholder.innerHTML = `<p style="color: red; padding: 20px;">Не удалось загрузить ${componentName.toLowerCase()}.</p>`;
        }
      });
  };

  // Загружаем шапку и подвал
  loadComponent('header.html', 'site-header', 'Header');
  loadComponent('footer.html', 'site-footer', 'Footer');
});