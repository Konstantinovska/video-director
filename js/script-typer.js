const typeWriter = document.getElementById("typewriter-text");
const text = "Video Editor, Filmmaker";

typeWriter.innerHTML = text;
typeWriter.style.setProperty("--characters", text.length);