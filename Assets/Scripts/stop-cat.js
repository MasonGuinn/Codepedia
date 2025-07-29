if (window.onekoInterval) {
    clearInterval(window.onekoInterval);
    window.onekoInterval = null;
    const nekoEl = document.getElementById("oneko");
    if (nekoEl) {
        nekoEl.remove();
    }
    window.nekoInitialized = false;
}