let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #b0025c;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #b0025c;">Enseño programación web y desarrollo proyectos robóticos.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
