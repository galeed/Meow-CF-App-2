// Cambia el atributo data-theme directamente en la etiqueta <html>
function changeTuiSkin(skinName) {
    document.documentElement.setAttribute('data-theme', skinName);
    localStorage.setItem('meow_tui_skin', skinName);
}

// Abrir y cerrar el modal
function toggleAboutModal(show) {
    const modal = document.getElementById('aboutModal');
    if (modal) {
        modal.style.display = show ? 'flex' : 'none';
    }
}

// Cargar preferencia guardada al iniciar la app
document.addEventListener('DOMContentLoaded', function() {
    const savedSkin = localStorage.getItem('meow_tui_skin') || 'green';
    changeTuiSkin(savedSkin);
    
    const skinSelect = document.getElementById('skinSelect');
    if (skinSelect) {
        skinSelect.value = savedSkin;
    }
});
