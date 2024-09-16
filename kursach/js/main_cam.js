const scanButton = document.querySelector('.scan-button');
const exitButton = document.querySelector('.exit-button');

scanButton.addEventListener('click', async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
  } catch (error) {
    console.error('Ошибка доступа к камере:', error);
  }
});

exitButton.addEventListener('click', async () => {
  location.href='/kursach/index.html'
});