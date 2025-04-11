scene.background = new THREE.Color(0x87ceeb); // Голубой фон
function animate() {
  requestAnimationFrame(animate);
  if (model) model.rotation.y += 0.01;
  renderer.render(scene, camera);
}
// Обработчик изменения ориентации
function handleOrientation() {
  const hint = document.querySelector(".orientation-hint");
  if (
    window.matchMedia("(orientation: portrait)").matches &&
    window.innerWidth <= 768
  ) {
    hint.style.display = "flex";
  } else {
    hint.style.display = "none";
  }
}

// Инициализация
window.addEventListener("load", handleOrientation);
window.addEventListener("resize", handleOrientation);
window.addEventListener("orientationchange", handleOrientation);

// Принудительный ландшафтный режим (раскомментируйте для использования)
/*
function lockLandscape() {
  if (screen.orientation && screen.orientation.lock) {
      screen.orientation.lock('landscape').catch(e => console.log(e));
  }
}
document.getElementById('ar-button').addEventListener('click', lockLandscape);
*/
