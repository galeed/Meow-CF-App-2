// Función para cambiar el tema TUI
function changeTuiSkin(skinName) {
    document.documentElement.setAttribute('data-theme', skinName);
    localStorage.setItem('meow_tui_skin', skinName);
}

// Cargar la preferencia guardada al iniciar
document.addEventListener('DOMContentLoaded', () => {
    const savedSkin = localStorage.getItem('meow_tui_skin') || 'green';
    document.documentElement.setAttribute('data-theme', savedSkin);
    
    const skinSelect = document.getElementById('skinSelect');
    if (skinSelect) {
        skinSelect.value = savedSkin;
    }
});
