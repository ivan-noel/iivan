document.addEventListener("DOMContentLoaded", () => {

    const wallpaper = document.querySelector(".wallpaper");

    if (!wallpaper) return;

    const wallpaperName = document.body.dataset.wallpaper;

    if (!wallpaperName) return;

    const isHomePage =
        window.location.pathname.endsWith("index.html") ||
        window.location.pathname.endsWith("/");

    const imagePath = isHomePage
        ? `assets/images/wallpapers/${wallpaperName}`
        : `../assets/images/wallpapers/${wallpaperName}`;

    wallpaper.style.backgroundImage = `url("${imagePath}")`;

});