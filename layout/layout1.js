 /* Element selector constants */
 const reduceFontBtn = document.getElementById('reduceFont');
 const increaseFontBtn = document.getElementById('increaseFont');
 const resetFontSizeBtn = document.getElementById('resetFontSize');
 const mainMenu = document.getElementById('mainMenu');

 /* Other variable declarations */
 const defaultFontSize = 1.2;
 let currentFontSize = defaultFontSize;

 /* Event listeners */
 reduceFontBtn.addEventListener('click', (e) => {
     e.preventDefault();
     currentFontSize -= 0.10;
     if (currentFontSize <= 0) currentFontSize = 0.10;
     setMainMenuFontSize();
 });

 increaseFontBtn.addEventListener('click', (e) => {
     e.preventDefault();
     currentFontSize += 0.10;
     setMainMenuFontSize();
 });

 resetFontSizeBtn.addEventListener('click', (e) => {
     e.preventDefault();
     currentFontSize = defaultFontSize;
     setMainMenuFontSize();
 });

 /* Helper functions */
 function setMainMenuFontSize() {
     mainMenu.style.fontSize = `${currentFontSize}rem`;
 }