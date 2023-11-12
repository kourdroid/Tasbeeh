const azkarSlider = document.getElementById("azkar-slider");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const azkarItems = [
  "سُبْحَانَ اللَّهِ",
  "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ",
  "سُبْحَانَ اللهِ العَظِيمِ وَبِحَمْدِهِ",
  "لَا إلَه إلّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلُّ شَيْءِ قَدِيرِ",
  "لا حَوْلَ وَلا قُوَّةَ إِلا بِاللَّهِ",
  "الْحَمْدُ للّهِ رَبِّ الْعَالَمِينَ",
  "الْلَّهُم صَلِّ وَسَلِم وَبَارِك عَلَى سَيِّدِنَا مُحَمَّد",
  "أستغفر الله",
  "سُبْحَانَ الْلَّهِ، وَالْحَمْدُ لِلَّهِ، وَلَا إِلَهَ إِلَّا الْلَّهُ، وَالْلَّهُ أَكْبَرُ ",
  "لَا إِلَهَ إِلَّا اللَّهُ",
  "الْلَّهُ أَكْبَرُ",
  "سُبْحَانَ اللَّهِ ، وَالْحَمْدُ لِلَّهِ ، وَلا إِلَهَ إِلا اللَّهُ ، وَاللَّهُ أَكْبَرُ ، اللَّهُمَّ اغْفِرْ لِي ، اللَّهُمَّ ارْحَمْنِي ، اللَّهُمَّ ارْزُقْنِي",
  "الْحَمْدُ لِلَّهِ حَمْدًا كَثِيرًا طَيِّبًا مُبَارَكًا فِيهِ",
  "اللَّهُ أَكْبَرُ كَبِيرًا ، وَالْحَمْدُ لِلَّهِ كَثِيرًا ، وَسُبْحَانَ اللَّهِ بُكْرَةً وَأَصِيلاً",
];

let currentIndex = 0;
const updateSlider = () => {
  azkarSlider.textContent = azkarItems[currentIndex];
};

nextBtn.addEventListener("click", function () {
  currentIndex = (currentIndex + 1) % azkarItems.length;
  updateSlider();
});

prevBtn.addEventListener("click", function () {
  currentIndex = (currentIndex - 1 + azkarItems.length) % azkarItems.length;
  updateSlider();
});

updateSlider();


const tasbeehBtn = document.getElementById("tasbeeh");
const reset = document.getElementById("reset");
let counterElement = document.getElementById("counter");

let counter = 0

tasbeehBtn.addEventListener("click", function () {
    counter += 1;
    counterElement.textContent = counter
})

reset.addEventListener('click', function(){
    counter = 0
    counterElement.textContent = counter;
})



// Desktop Version


const tasbeehPc = document.getElementById("tasbeeh-pc");
const resetPc = document.getElementById("reset-pc");
let counterElementPc = document.getElementById("counter-pc");

let counterpc = 0;

tasbeehPc.addEventListener("click", function () {
  counterpc += 1;
  counterElementPc.textContent = counterpc;
});

resetPc.addEventListener("click", function () {
  counterpc = 0;
  counterElementPc.textContent = counterpc;
});