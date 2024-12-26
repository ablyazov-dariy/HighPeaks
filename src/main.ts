import './style.css';

(() => {
  const bgColors = [
    'red',
    'lime',
    'yellow',
    'rose',
    'yellow',
    'yellow',
    'yellow',
  ];

  const contentContainers = document.querySelectorAll('.debug');

  contentContainers.forEach(
    (container: any, index) =>
      (container.style!.outlineColor = bgColors[index]),
  );
})();
