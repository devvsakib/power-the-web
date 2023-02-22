# Grafik Çizici / Graph Plotter

## Libraries that are being used / Kullanılan kütüphaneler
* mathjs
* chartjs
# Grafik Çizici / Graph Plotter

##  Kullanılan kütüphaneler / Libraries that are being used
* mathjs
* chartjs

## Nasıl çalışıyor ? / How does it work ?
### [TR]
1. "Denklemi Gir" yazan yere denkleminizi giriyorsunuz,
2. Uygulamanın hangi aralıklarda grafiği çizeceğini belirlemek için başlangıç ve bitiş değerini giriyosunuz
3. Grafiği güncelleye basıyorsunuz
4. Grafiği güncelleye bastığınız anda index.html'de o butona atanan onclick eventi sayesinde app.js'deki grafikCiz() fonksiyonu tetikleniyor.
5. Tetiklenen fonksiyon denklemi, başlangıç ve bitiş değerlerini çekiyor
6. Başlangıç değerinden bitiş değerine kadar birer birer arttıran bir for döngüsü devreye giriyor
7. Döngü her tekrarlandığında tekrarlanan döngüdeki x değeri için denklem çözülüp baştan tanımlanan yValues isimli diziye ekleniyor ve aynı x değeri bu sefer işleme uğramadan xValues isimli diziye ekleniyor.
8. Chart.js ile grafiğin x ve y değerleri güncelleniyor ardından chart.update() ile değişiklikler ekrana yansıtılıyor.
  
### [EN]
1. Enter your equation in the text input with the "Denklemi Gir" placeholder.
2. Enter the starting (başlangıç değeri) and ending (bitiş değeri) values of the equation in the other two text inputs.
3. Press "Grafiği Güncelle" button.
4. The function named grafikCiz() gets triggered when you press the button because the button has onclick="grafikCiz()" on it's HTML
5. Functions gets the equation, starting and ending value
6. A for loop starts and loops until it reaches the ending value while starting from the starting value
7. Every time the loop works, equation gets solved for the x value that the loop is on then the answer of the equation gets pushed into the array named yValues the the y values gets pushed into the array named xValues
8. Graph gets updated with the new values using the chart.update() funciton on Chart.js