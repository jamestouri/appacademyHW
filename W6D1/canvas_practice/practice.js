document.addEventListener("DOMContentLoaded", function(){
  const canvas = document.getElementById('mycanvas');
  canvas.width = 500;
  canvas.height = 500;

  const ctx = canvas.getContext('2d');

  ctx.fillStyle ='black';
  ctx.fillRect(10, 10, 55, 50);

  ctx.beginPath();
  ctx.arc(100, 100, 20, 0, 2*Math.PI, true);

  ctx.strokeStyle = 'green';

  ctx.lineWidth = 5;
  ctx.stroke();

  ctx.fillStyle = 'red';
  ctx.fill();

});
