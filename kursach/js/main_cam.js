const scanButton = document.querySelector('.scan-button');

scanButton.addEventListener('click', async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    // Теперь у вас есть доступ к камере, и вы можете использовать поток видео для сканирования QR-кода
    // Например, вы можете использовать библиотеку для сканирования QR-кода, такую как ZXing
  } catch (error) {
    console.error('Ошибка доступа к камере:', error);
  }
});