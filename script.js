document.getElementById("imageUpload").addEventListener("change", function(event) {
  const reader = new FileReader();
  reader.onload = function(e) {
    const img = document.getElementById("preview");
    img.src = e.target.result;
    img.style.display = "block";
  };
  reader.readAsDataURL(event.target.files[0]);
});

function analyzeTint() {
  const fakeTint = Math.floor(Math.random() * 70 + 10);
  document.getElementById("result").innerText = `درصد تقریبی تیرگی شیشه: ${fakeTint}%`;
}
