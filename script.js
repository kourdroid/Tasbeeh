const azkarSlider = document.getElementById("azkar-slider");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const azkarItems = [
  "للَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ , وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ , اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ",
  "سُبْحَانَ اللَّهِ",
  "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ ",
  "سُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ ",
  "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ ، سُبْحَانَ اللَّهِ الْعَظِيمِ ",
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
    console.log(counter)
})

reset.addEventListener('click', function(){
    counter = 0
    counterElement.textContent = counter;
})