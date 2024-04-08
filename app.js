// var age=prompt("yasinizi qeyd edin")
// if (age>=18) {
//   console.log("suruculuk vesiqesi ala bilersiz")
// }else{
//     console.log("yasiniz catmir")
// }
// var qiymet=prompt("Qiymetinizi daxil edin.")
// if(qiymet>=80 && qiymet<=100){
// console.log("sizin qiymetiniz A wkaladadir")
// }if(qiymet>=70 && qiymet<=79){
// console.log("sizin qiymetiniz B wkaladadir")
// }if(qiymet>=60 && qiymet<=69){
// console.log("sizin qiymetiniz C wkaladadir")
// }if(qiymet>=50 && qiymet<=59){
// console.log("sizin qiymetiniz D wkaladadir")
// }if(qiymet>=0 && qiymet<=49){
//     console.log("sizin qiymetiniz F wkaladadir")
// }
// x=4
// var y =x++;
// console.log(x)

// console.log(country)



// var country=[
//     "Azərbaycan",
//     "Rusiya",
//     "Gürcüstan",
//     "İran",
//     "Pakistan",
//     "Suriya",
//     "İsrail",
//     "Türkiyə",
//     "İraq",
//     "Fələstin",
// ]
// var text=prompt("Ölkə adını daxil edin.");
// if(country.includes(text)){
//     console.log("sizin qeyd etdiyiniz olke duzgundur")
// }else{
//     console.log("sizin qeyd etdiyiniz olke sehvdir")
// }

// var text = [2, 5, 4, 7]
// var name = +prompt("elave edin");
// text.push(name)
// console.log(text)


// var country=[
//     "Azərbaycan",
//     "Rusiya",
//     "Gürcüstan",
//     "İran",
//     "Pakistan",
//     "Suriya",
//     "İsrail",
//     "Türkiyə",
//     "İraq",
//     "Fələstin",
// ]
// var number =[2,4,6,8]
// var text=country.pop()
// number.push(text)
// console.log(number)

// var text=[]
// var name=prompt("Adinizi qeyd edin");
// var surname=prompt("Soyadinizi qeyd edin")
// var age =prompt("Yasinizi qeyd edin")
// var family=prompt("qeyd edin")

// text.push(name,surname,age)
// if(text.includes(family)){
//  console.log('movcuddur')
// }
// else{
//     text.push(family)
// }


// let x= text.length
//  let x=text.slice(0,3)
// console.log(x)
// console.log(text.slice(text.length-3))
// let text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores praesentium nostrum voluptatum, qui provident aut."
// let x= text.split(" ")
// console.log(x.length)
// let shoppingCart=["Milk","Coffee","Tea","Honey"]

// if(!shoppingCart.includes("Meat")){
//    shoppingCart.unshift("Meat")
//    console.log(shoppingCart);
// }
// let x=["HTML","CSS","Tea","Honey"]
// let y = ["Node","Express","MongoDB"]
// let text=x.concat(y)
// console.log(text);


// let ages=[19,22,19,24,20,25,26,24,25,24]
// ages.sort(function(a,b){return(a-b)})
// // let text=ages
// console.log(ages.slice(ages.length-1))
// console.log(ages[0])
// 8
// text=0
// while(text<10){
//    text+=1
//  console.log(text)
// }  
// 9
// for (let text = 0; text < 100; text++) {
//     if (text % 2 === 0) {
//         console.log(text);
//     } 
// }
// 10
// for (let text = 0; text < 100; text++) {
//     if (text%2===1) {
//         console.log(text);
//     } 
// }
// 11
// let text="Novruz Bayraminiz Mwbarek"
// let y =text.slice(0,7)
// console.log(y)
// 12
// let numbers = [1, -2, 3, -4, 5];
// let x = numbers.filter(num => num < 0);
// console.log(x); 
//13
// function text() {
//     let text = prompt("Adinizi qeyd edin");

//      if(text.length>0){
//         console.log(text);
//      }
//      else{
//         console.log("adinizi qeyd etmeyi unudubsuz")
//      }
// }

// text();
//14
// function sahe(){
//     let x=+prompt("Enini elave edin")
//     let y=+prompt("Uzunluqunu elave edin")
//     let sahe=x*y
//     console.log(sahe)
// }
// sahe()


//1

//2
// for (i = 0; i <= 10; i++) {
//     console.log(i + '*' + i + '=' + i * i)
// }
// function text(name) {
//     return name.toUpperCase();
// }
// let name = "brilyant";
// console.log(text(name));


// function text(name) {
//     switch(name) {
//         case true:
//             ikinci();
//             break;
//         case false:
//             ucuncu();
//             break;
//         // default:
//         //     console.log("duzgun qeyd edin");
//     }
// }

// function ikinci() {
//     console.log("İkinci funksiya isleyir");
// }

// function ucuncu() {
//     console.log("ucucncu funksiya isleyir");
// }

// let name =false;
// console.log(text(name))

// let text=prompt("qeyd edin");
// function name(text){
//     return text.reverse
// }
// let a =name()
// console.log(a)
// function text(name) {
//     return name.split('').reverse().join('');
// }

// let name = prompt("Qeyd edin");
// let a = text(name);
// console.log(a);

// let num=prompt("reqem qeyd edin");
// function name(num){
//     let i=1
//    for(i=num;i++;){
//     metn+=i+"sheep..."
//    }
//    return metn
// }
// console.log(name);
// let num = prompt("Bir reqem qeyd edin");
// function name(num) {
//     let metn = "";
//     for (let i = 1; i <= num; i++) {
//         metn += i + " sheep...";
//     }
//     return metn;
// }

// console.log(name(parseInt(num)));
// let name = prompt("qeyd edin");

// function text(name) {
//     let metn = name.split('');
//     metn.pop();
//     metn.shift();
//     return metn.join('');
// }

// console.log(text(name));
// let surname = prompt('soyadinizi qeyd edin');
// let name = prompt("adinizi qeyd edin");
// function text(surname, name) {
//     let a = surname[0]
//     let b = name[0]
//     return a+"."+b
// }
// console.log(text(surname, name))


// let  text=prompt("metn elave edin");
// let metn=prompt("reqem qeyd edin")
// value = text[metn]
// console.log(value)


// Qebul edilen stringde "x" ve "o" herflerinin eger eyni sayda varsa true yoxdursa false versin funskiya yaziriq.
// Qebul edilen cumlede saitleri silib neticeni log-da gosteririk funkiya yaziriq.

//HomeWork
//1
// let text = prompt("Bir kelime veya cümle yazın:");
// let kelimeler = text.split(" "); // Girilen metni boşluklara göre ayırarak bir dizi oluşturur

// function textName(kelimeler) {
//     for (let i = 0; i < kelimeler.length; i++) {
//         let kelime = kelimeler[i];
//         let xSayisi = 0;
//         let oSayisi = 0;

//         // Her kelimenin içinde "x" ve "o" harflerini sayarız
//         for (let j = 0; j < kelime.length; j++) {
//             if (kelime[j].toLowerCase() === "x") {
//                 xSayisi++;
//             } else if (kelime[j].toLowerCase() === "o") {
//                 oSayisi++;
//             }
//         }

//         // "x" ve "o" sayılarını karşılaştırırız
//         if (xSayisi === oSayisi) {
//             console.log("'" + kelime + "' kelimesindeki 'x' ve 'o' sayıları eşittir.");
//         } else {
//             console.log("'" + kelime + "' kelimesindeki 'x' ve 'o' sayıları eşit değildir.");
//         }
//     }
// }

// textName(kelimeler);


//2

// let text = prompt("Qeyd edin.");
// function name(soz) {
//     let sait = ["a", "e", "i", "o", "u", "ü", "ı", "ö"];
//     let cumle = soz.split(""); 
//     for (let i = 0; i < cumle.length; i++) {
//         if (sait.includes(cumle[i].toLowerCase())) {
//             cumle.splice(i, 1);
//             i--;
//         }
//     }
//     let a = cumle.join("");
//     console.log(a);
// }

// name(text);

// let a=15;
// let b=25;
// let c= 35;
// function name(params) {
//     let aText=a.split()
//     let bText=b.split()
//     let cText=c.split()

// }

//28.03.2024
//1
// let text=prompt("qeyd edin")
// function name(i) {
//     return i==i.toUpperCase()
// }

// console.log(name(text));
//2

// function number() {
//     let number=(Math.random()*100).toFixed()
//     return number
// }
// console.log(number());
//3
// let a=prompt("qeyd edin")
// let b= prompt("qeyd edin")

//3

// function number(a,b,callback) {
//     let text=a+b
//     return callback(text)

// }
// function text(name) {
//     console.log(name);
// }
// number(2,4,text)

//4
// let a = [15, 12, 5, 25, 78, 10, 9]
// function text(num1, callback) {
//     let sumNums = 0
//     for (let i = 0; i < num1.length; i++) {
//         sumNums += num1[i]
//     }
//     return callback(sumNums)
// }
// function numbers(name) {
//     console.log(name);
// }
// text(a, numbers)
//5
// let text = +prompt("reqem elave edin")
// function textUpperCase(text) {
//     switch (text) {
//         case 1:
//             console.log("Bazarertesi");
//             break;
//         case 2:
//             console.log("Cersenbe axsami");
//             break;
//         case 3:
//             console.log("Cersenbe ");
//             break;
//         case 4:
//             console.log("Cume axsami");
//             break;
//         case 5:
//             console.log("Cume ");
//             break;
//         case 6:
//             console.log("Senbe ");
//             break;
//         case 7:
//             console.log("Bazar ");
//             break;
//     }
// }
// textUpperCase(text)
//6
// let text = +prompt("reqem elave edin")
// function textUpperCase(text) {
//     switch (text) {
//         case 1:
//         case 3:
//         case 5:
//         case 7:
//         case 8:
//         case 10:
//         case 12:
//             console.log("31 gun");
//             break;
//         case 2:
//             console.log("29gun");
//             break;
//         case 4:
//         case 6:
//         case 9:
//         case 11:
//             console.log("30gun");
//             break;

//     }
// }
// textUpperCase(text)

//7
// let userData = {
//     Royal: "25",
//     Elvin: "35",
//     Faiq: "45",
//     Haci: "55",
//     Brilyant: "15",
// }
// function addStudent(name, score) {
//     userData[name] = score
// }
// addStudent("Bayram","100")
// console.log(userData)


// function deleteStudent(name){
//     delete userData[name]
// }
// deleteStudent("Royal")
// console.log(userData)


// function updateScore(name, score){
//     userData[name]=score
// }

// updateScore("Brilyant","100")
// console.log(userData)

//1
// html-de div yaradiriq ve onu id, class, ve tag ile js-de tutub icerisinde adimizi qeyd edirik.her biri ile ayri-ayri

// let nameSurname = document.querySelector("div")
// let nameSurname1=document.querySelector("#name")
// let nameSurname2=document.querySelector(".surname")
// nameSurname.innerText = "Suleymanova Brilyant"
// nameSurname1.innerText= "Elesgerov Haci"
// nameSurname2.innerText="Ismayilov Faiq"

//2
// button-a click olunduqda p tag-i iceirisinde Date ile tarix yaziriq
// let dateText = document.querySelector("#name");
// let dateButton = document.querySelector("button");

// dateButton.addEventListener("click", () => {
//     let action = [];
//     action += " New data()"; 
//     dateText.innerHTML = action;
// });



//3
// button-a click olunduqda ekranda ilk once adimiz sonra ise familyamiz yazilan alert cixsin

// let name=document.querySelector("#name");
// let surname=document.querySelector(".surname")
// let buttons=document.querySelector("button")

// buttons.addEventListener('click',()=>{
//     alert('Brilyant ...')
//     alert('Suleymanova')
// })

//4
// mouse button uzerinde geldiginde button altindaki p tag-inda movcud hereket qeyd olunsun(meselen: mouse button uzerindedir, mouse kenardadir, ve click olundu)


// let mouseStatus = document.querySelector("#mouse-status");
// let mouseButton = document.querySelector("button");

// mouseButton.addEventListener("mouseover", () => {
//     mouseStatus.innerHTML = "Mouse button üzerindedir";
// });

// mouseButton.addEventListener("mouseout", () => {
//     mouseStatus.innerHTML = "Mouse kenardadır";
// });

// mouseButton.addEventListener("click", () => {
//     mouseStatus.innerHTML = "Click olundu";
// });

//5
// inputdan yazilan text eger 3 herfden coxdursa yazi rengi sari, eger 5 herfden coxdursa qirmizi olsun buutona click ederek

// let inputText = document.querySelector("input");
// let buttons = document.querySelector("button");
// let divText = document.querySelector("div");

// buttons.addEventListener("click", () => {
//     let textLength = inputText.value.length;

//     if (textLength >= 5) {
//         divText.style.color = "green";
//     }

//     else if(textLength >= 3) {
//         divText.style.color = "red";
//     }

//     divText.innerHTML = inputText.value;
// });

//6
// kartlar yaradiriq ve bu kartlarda olke adlarini map ile qeyd edirik. kartlara isteye uyqun dizayn vermek olar.
// let countryText=document.getElementsByClassName("country");
// let inputText=document.querySelector("input");

// let arr = ['Azerbaycan','Rusiya','Amerika','Gurcustan','Turkiye','Iran'];
// arr.map((item)=>{
// return ``
// })


//03.04.2024
//1
// let inputText = document.querySelector("input");
// let buttonText = document.querySelector("button");

// buttonText.addEventListener("mouseout", () => {
//     inputText.classList.add("input");
// });

// buttonText.addEventListener("mouseover", () => {
//     inputText.classList.remove("input");
// });

// buttonText.addEventListener("click", () => {
//     inputText.style.display = "block";
// });
// let cevireText = document.querySelectorAll("span");
// let listText = document.querySelectorAll("hr");
// let remove = document.getElementById("remove");
// let next = document.getElementById("next");

// cevireText.forEach(element => {
//     element.classList.add("daire");
// });

// listText.forEach(element => {
//     element.classList.add("list");
// });

// next.addEventListener("click", () => {
//     listText.forEach(element => {
//         element.classList.add("daire");
//         element.style.backgroundColor = "red"; 
//     });
// });

// remove.addEventListener("click", () => {
//     listText.forEach(element => {
//         element.classList.remove("daire");
//         element.style.backgroundColor = "";
//     });
// });


//game 
// let game1 = document.getElementById("#1");
// let game2 = document.getElementById("#2");
// let game3 = document.getElementById("#3");
// let game4 = document.getElementById("#4");
// let game5 = document.getElementById("#5");
// let game6 = document.getElementById("#6");
// let game7 = document.getElementById("#7");
// let game8 = document.getElementById("#8");
// let game9 = document.getElementById("#9");
// let main = document.querySelector(".main")
// document.querySelector(".main").addEventListener("click", () => {
//     let a = "x"
//     let b = "o"
//     a = true
//     b = false
    
// })
//  game1.addEventListener("click",()=>{
//   game1.classList.add="x"
// // console.log(game1);
//  })
// Dom Elements

// Adam asmaca oyunu için gerekli değişkenler
var kelimeler = ["elma", "armut", "çilek", "portakal", "mandalina"]; // Kelimeler dizisi
var secilenKelime = ""; // Rastgele seçilen kelime
var harfTahminleri = []; // Kullanıcının tahmin ettiği harflerin listesi
var kalanCan = 6; // Kullanıcının kalan canı
var oyunBitti = false; // Oyunun bitip bitmediğini belirten değişken

// Oyunu başlatan fonksiyon
function oyunuBaslat() {
    // Rastgele kelime seç
    secilenKelime = kelimeler[Math.floor(Math.random() * kelimeler.length)];
    
    // Harf tahminlerini sıfırla
    harfTahminleri = [];
    
    // Oyunu bitirme işaretini sıfırla
    oyunBitti = false;
    
    // Can sayısını güncelle
    kalanCan = 6;
    
    // Kelimenin harf sayısı kadar kısa çizgi ekleyerek kullanıcıya göster
    var gizliKelime = "";
    for (var i = 0; i < secilenKelime.length; i++) {
        gizliKelime += "_";
    }
    document.getElementById("gizli-kelime").innerHTML = gizliKelime;
    
    // Kalan can sayısını göster
    document.getElementById("kalan-can").innerHTML = kalanCan;
}

// Tahminin doğruluğunu kontrol eden fonksiyon
function harfTahminEt(harf) {
    // Eğer oyun bitmişse fonksiyonu sonlandır
    if (oyunBitti) return;
    
    // Eğer tahmin edilen harf zaten tahmin edildiyse tekrarlama
    if (harfTahminleri.indexOf(harf) !== -1) return;
    
    // Tahmin edilen harfi tahminler listesine ekle
    harfTahminleri.push(harf);
    
    // Tahmin edilen harfin seçilen kelime içinde bulunup bulunmadığını kontrol et
    if (secilenKelime.indexOf(harf) === -1) {
        // Eğer bulunmuyorsa kullanıcının canını azalt
        kalanCan--;
        // Kalan can sayısını güncelle
        document.getElementById("kalan-can").innerHTML = kalanCan;
    }
    
    // Gizli kelimeyi güncelle
    var gizliKelime = "";
    for (var i = 0; i < secilenKelime.length; i++) {
        if (harfTahminleri.indexOf(secilenKelime[i]) !== -1) {
            gizliKelime += secilenKelime[i];
        } else {
            gizliKelime += "_";
        }
    }
    document.getElementById("gizli-kelime").innerHTML = gizliKelime;
    
    // Oyunun kazanılıp kazanılmadığını kontrol et
    if (gizliKelime === secilenKelime) {
        document.getElementById("oyun-sonuc").innerHTML = "Tebrikler! Kelimeyi doğru tahmin ettiniz.";
        oyunBitti = true;
    } else if (kalanCan === 0) {
        document.getElementById("oyun-sonuc").innerHTML = "Üzgünüm! Canınız kalmadı. Doğru kelime: " + secilenKelime;
        oyunBitti = true;
    }
}

// Oyunu başlat
oyunuBaslat();
