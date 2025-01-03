import './style.css';

(() => {
  const bgColors = [
    'red',
    'lime',
    'yellow',
    'rose',
    'lime-orange',
    'green',
    'black',
    'carmine',
  ];

  const contentContainers = document.querySelectorAll('.debug');

  contentContainers.forEach(
    (container: any, index) =>
      (container.style!.outlineColor = bgColors[index]),
  );
})();
