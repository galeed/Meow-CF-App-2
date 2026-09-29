// Aplica el tema dinámicamente
function changeTuiSkin(skinName) {
    document.documentElement.setAttribute('data-theme', skinName);
    localStorage.setItem('meow_tui_skin', skinName);
}

// Control del modal
function toggleAboutModal(show) {
    const modal = document.getElementById('aboutModal');
    if (modal) {
        modal.style.display = show ? 'flex' : 'none';
    }
}

// Inicialización de la skin guardada
document.addEventListener('DOMContentLoaded', function() {
    const savedSkin = localStorage.getItem('meow_tui_skin') || 'green';
    changeTuiSkin(savedSkin);
    
    const skinSelect = document.getElementById('skinSelect');
    if (skinSelect) {
        skinSelect.value = savedSkin;
    }
});
