// جلسه 100

// const = برای تعریف کردن بود و فقط یک بار میشد عریف کنی و نمیشد اپدیتش داد
// let = باری تعریف کردن بود و نمیشد دوبار تعریف کرد و میشد اپدیتش کرد
// (var x = 5) این یک فلگ هست
// Hasting = به معنای بالا بردن بود = Hoist
// seTimeout = این متغیر به صورت فانکشن نوشته میشد و میگفت بعد چند ثانیه کد هایداخل فاکشن رو اجرا کنم
// setInterval = این متغیر بابالایی با فانکشن کار میکنه ست اینتروال میاد یک مقدار رو با میلی ثانیه میگیره و مثلا 1000 میلی ثانیه یک بار کد های داخل فانکشن رو اجرا میکنه
// clearInterval() =  داخل پرانتز میاد مقدار داخل متغیر رو اک میکنه
// if (!isUploded) = if (isUploded === false) || if (isUploded) = if (isUploded === true)
// console.log(Boolean()); = داخل پرانتز بولین هر متغیر رو بریزیم فقط جوابش تورو یا فالسه تمام استرینگ ها غیراز استرینگ خالی تورو و تمام اعداد بجز صفر تورو و خود تورو تورو هست و فالس هم فالس هست و مقدار اندیفایند و نعن فالس هستن آرایه و ابجکت ها تورو هستن
// +prompt("Enter The Number") || Number(prompt("Enter The Number")) = این دوتا میان مقدار پرامت رو تبدیل به نامبر میکنه
// Anonymous Function | فانکشن هایی که نمیشه دوباره صداشون زد
// IIFE function | فانکشن های خودخان
// eval = هیچوقت از ایول نباید استفاده کرد چون منقضی شده و عملکردش غیر اصولی خطرناک است برای سمت سرور ایول برای اینکه کد های داخل پرانتزشو اجرا میکنه
//  استرینگ و نامبر و بولین اگر در نام دو برابر بزاریم با نام یک بعد پایین تر به نام دو یک چیز اضافه کنیم تغییرات درنام یک اعمال نمیشه همینطور برای استرینگ و بولین
//////////////////////////////////////////// در فانکشن و ارایه و ابجکت اگر مقدار دوم بهش یک ایتم پوش کنیم اضافه کنیم درمقدار دوم اون در اولی هم اعمال میشع
// چون وقتی اونجا پوش میکنیم چون نیو پروداکت برابر با پروداکتز اگه به نیو پروداگت اضافه کنیم دارم اشاره میکنیم به مقدار پروداکتز
///////////////////////////////////////////
// var tasks = {mohammad: ["html", "css" , "js"], reza: ["vue", "react", "angiular"],} = اینجا به رضا و محمد میگن کلید اینا کلید هستن
//    اما در سام ابجکت هم میگیره some و includes این هست اگه داخل اینکلودس بجز استرینگ و نامبر و بولین مقدار دیگه ای نمیگیره ولی در سام اینطور نیست اگه داخل اینکلوس اجکت بزاریم این مقدار نمیگیره
// اینکلودس میاد برسی میکنه ببینه هسن توی ارایه یوزر هسته یا نه اگه بود تورو اگه نبود که فالس
// console.log(userInfos[1].name); || console.log(userInfos[2].name); = ابجکت یندکس دوم مقدار نیم شو در کنسول لاگ میگیره
// scores.push(14, 15, 16); // اینجا میاد به اول متدد سورس این سهتا مقدار 15و16و14 رو اضافه میکنه
// scores.pop(); // اینجا میاد اخرین مقدار هرچی بود از سورس پاک میکنه
// scores.shift(); // اینجا میاد اولین مقدار هرچی بود از سورس پاک میکنه
// scores.unshift(10, 11, 12); // اینجا میاد به اخر متدد سورس این سهتا مقدار 15و16و14 رو اضافه میکنه
// برای تعریف مقادیر مختلف داخل یک خط میایم بصورت بالا تعریف میکنیم
// console.log(students)    // اینجا میایم میگیم تمام مقادیر داخل خودتو نشون بده
// console.log(students[6]) // اینجا میگیم ایندکس ششم داخل استیوند رو بهم نمایش بدع
// این دقیقا شبیه وایل هست با این تفاوت که دفه اول شرط انحام میشه بعد شرط برسی میشه حتی اگه شرط فالس باشه ولی در وایل اینطور نیس اول شرط برسی میشه بعد کار های داخلش انجام میشه
// var i = 0 \n do {console.log(i) \n i++} while (i > 2)
// console.log(Math.PI) // PI Number = 3.14 || // این متدد کلا میاد عدد کامل مقدار پی را نمایش میده
// console.log(2 ** 3) // 2 * 2 * 2 = 8 || // این دیگه به توان میرسونه واضحه
// console.log(Math.pow(2, 4)) // 2 * 2 * 2 * 2 = 16 || // این هم دقیقا مثل بالایش به توان میرسونه
// console.log(Math.pow(2, 4)) // 2 * 2 * 2 * 2 = 16 || // این هم دقیقا مثل بالایش به توان میرسونه
// console.log(Math.sqrt(81)) // 9 * 9 = 81 || // این متدد میاد میگه جه عددی ضربدر خودش شده که جواب شده 81
// console.log(Math.abs(-12)) // |-12| = +12 / abs -12 = +12 || // این متدد اگه مقدار عدد وارد شده مثبت بود که همون عدد رو نشون میده اما اگر مقدارش منفی بود میاد اونو به مثبت تبدیل میکنه
// console.log(Math.min(2, 4 , 50 , 60 ,41 ,12 ,52 , 84 , 9 , 23)) // ||| // اینجا میاد از بین اعداد انتخاب شده کوچیک ترین عدد رو انتخاب میکنه
// console.log(Math.max(2, 4 , 50 , 60 ,41 ,12 ,52 , 84 , 9 , 23)) // 2 ||| // اینجا میاد از بین اعداد انتخاب شده بزرگ ترین عدد رو انتخاب میکنه
// console.log(Math.floor(12.1)) // 12 || // این متدد میاد اعشار رو برمیداره و عدد رو نمایش میده
// console.log(Math.trunc(12.9)) // 12 || // این هم هیچ فرقی با بالایی نداره
// console.log(Math.round(12.9)) // 13 || // این میاد عدد رو رند میکنه و بعدش نشون میده
// console.log(Math.round(12.5)) // 13 _|_ 12.49 = 12 _|_ 12.5 = 13 ||| // اینجا ی مثال زدم که اگه مقدار اعشار نیم باشه جواب چه خواهد شد جواب 13 خواهر شد
// console.log(Math.ceil(12.1)) // 13 || // این متدد به اهشار نگاه نمیکنه میگه اگه اعشار داشت باید یک عدد بهش اضافه بشه
// console.log(Math.random()) // random number 0.00000000000 to 1.00000000000 || // این متدد میاد یک عدد بین صفر و یک و بصورت اعشاری و رندوم انتخاب میکنه و نمایش میده
// console.log(Math.random() * 10) //  random number 0.0000000000 to 10.0000000000 || // اینجا عدد رو ضبدر ده کردیم که بین 1 تا 10 بشه
// console.log(a_t.slice(7,11)) || // این متدد وظیفش اینکه بیاد از ایندکس 7 تا 11 رو برش بزنه و در لاگ سایت نشون بده
// console.log(a_t.substr(7,4)) || // این متدد وظیفش اینکه بیاد از ایندکس 7 شروع کنه و به اندازه 4 بره جلوتر و برش بزنه و اگر مقدار دوم ننوشته باشیم کل متن رو تا انتها نشون میده
// console.log(a_t.substring(7,11)) || // این متدد با اسلایس فرقی نداره
// زبان برنامه نویسی که به حرف بزرگ کوچک حساس باشه بهش میگن سنستین مثل همین جاوا اسکریپت
// زبان برنامه نویسی که به حرف بزرگ کوچک حساس نباشه بهش میگن کیس اینستیو مثل همین جاوا اسکریپت
// var text = "I love JavaScript"; || برای خط های بعدی
// console.log(text[0]); // = I ==> text = "**I** love JavaScript"
// console.log(text.charAt(0)); // این فرقی با بالایی نداره
// console.log(text.charCodeAt(0)); // هر کدام از کلید های کیبورد یک کد سیستمی دارند که به اونها میگن کد ازکی اینجا حرف ال اینگلیسی کدش 73 هست
// console.log(text + " & React"); // اینجا میاد متن داخل تکست رو کانکت میکنه یا میچسبونه به ریاکت
// console.log(text.concat(" & React")); // این فرقی با بالایی نداره
// console.log(finaltext); // اینجا ما در وریبل فاینال تکست اومدیم متن تکست رو کانکت کردیم یا چسبوندیم به متن ریاکت
// console.log(text.trim()); // اینجا دقیقا متن تکست رو نشون میده ولی بدون اسپیس
// console.log(textspacing.trim()); // اینجا دقیقا مثل خط بالاس و توی این خط تفاوتش رو با خط بالا متوجه خواهید شد
// console.log(text.toLocaleLowerCase()); // تمام متن های تکست اینگلیسی رو به صورت کوچک مینویسه
// console.log(text.toLocaleUpperCase()); // تمام متن های تکست اینگلیسی رو به صورت بزرگ مینویسه
// console.log(text.search("react")); // اینجا میگیم برو ببین داخل تکست کلمه ای با اسم ریاکت داریم یا ن
// // - اگر فقط به دنبال موقعیت یک زیررشته خاص هستید، از indexOf استفاده کنید.
// // - اگر نیاز به جستجوی الگوهای پیچیده دارید، از search استفاده کنید.
// console.log(text.indexOf("love")); // این فرقی با بالایی فرق مهمی داره اگه فقط به دنبال موقیت یک زیررشته خاص هستید از این استفاده کنید اگر نیاز به الگو های پیچیده دارید از متد بالایی استفاده کنید
// console.log(text.includes("react")); // این فرقی با بالایی نداره با این تفاوت که این فقط بهمون بولین تورو یا فالس برمیگردونه
// function sumNumber (num1 , num2){ \n var result = num1 + num2 \n alert("result : " + result) \n return result} \n var sumResult = sumNumber(2,8) \n alert("sumResult = " + sumResult)
//  برگردون متغیر ریزالت این پایین سام نامیبر رو 2 + 8 فراخانی کردم بعد اینجا میاد داخل فانکشن رو سام نامبر اینجا دو و هشت رو داخل ورودی نام یک و نام دو ازم میگیره و و میریزه  داخل ریزالت و اینجا خط سوم میاد ریزالت رو برمیگردونه یعنی این پایین که من اومدم سام نامبر رو فراخانی کردم اینجا این ریالت یعنی مجموع دو و هشت برگشت داده میشه به من و من اینجا میام میگم ریزالت و اوتپوت  نهایی این فانکشن رو بریز داخل متغیر سام ریزالت اینجا برام میشه دو و هشت جمعشون و اینجا تو خط نهم گفتم بیا اینو برای من مال ریزالت رو داخل الرتم به من نشون بده
// && And = این در ایف استفاده میشد میخاستیم بگیم اگه یک شرطم درست
// || Or = اگه فقط یک شرط درست بود شرط فالس میشود
// برای برعکس کردن مقدار بولین ها از علامت تعجب ! استفاده میکنیم

// حلسه 98 99

// var let const

// var num1 = 10;

// num1 = 20;

// var num1 = 25;

// console.log(num1); //ما متغیر هایی که با ور تعریف مشبن میتونیم اپدیتش بکنیم و دوباره تعریفش کنیم

// let num1 = 20;

// num1 = 10;

// let num1 = 23;

// console.log(num1); // لت رو میشه اپذیت کرد ولی نمیشه دوبار تعریف نرد

// num1 = 10;

// console.log(num1); // ایجا اگه نام یک با ور تعریف شده باشه چون از قانون هاستینگ یا بالا رفتن پیروی میکنه مقدار خروجی 10 ولی اگر با لت تعریف بشه در حروجی بجای ده خطا نشون میئه

//// ناحیه

var num1 = 20; // Global Scope گلوبال اسکوپ در همجا قابل استقلده است
// let num2 = 10;

// {
//   let num2 = 25;
//   var num1 = 36; // Black Scope | مقدار هایی که در اسکوپ یا اکولاد تعریف میشن فقط مختص همین اسکوپ هستن
// }

// console.log(num1, num2); // درایجا نام یک برابر است با 36 || ولی نام دو برابر است با ده چون از قانون بلاک اسکوپ و گلوبول اسکوپ پیروی میکنید

// var userName1 = "Mohammad";
// let userName2 = "Reza";
// var userAge1 = 20;
// let userAge2 = 21;

// if (userAge1 > 18)
//   if (userAge2 > 18) {
//     var userName1 = "Mahdi";
//     let userName2 = "Ali";
//   }

// console.log(userName1); // Mahdi
// console.log(userName2); // Reza

// var num1;
// let num1;

// // Const = ثابت

// const num1 = 24
// const num2

// num1 = 26

// console.log(num1); // چون کانست ولیو ثابت است نمیشه مقدارشو پدیت کرئ
// console.log(num2); // نمیشه در کانست متغیر رو بدون مقدار گذاشت

// جلسه 97

// Hoisting - Hoist - بالا بردن

// num1 = 10
// num2 = 20
// num3 = 30

// console.log(num1 + num2); //اگ به طور مثال نام یک پایین تعریف کنیم و بالا تر بهش مقدار بدیم از قانون هاستینگ استفاده میکنه یعنی خودکار میاد بالا ولی اگه مقدار داشته باشه مقدارش در کنسول اندیفایند هست   30
// console.log(num1);
// console.log(num2);
// console.log(num3);

// var num1
// var num1, num2
// var num2
// var num3 = 34

// // showValue()

// function showValue() {
//     console.log(12 + 12);
// }

// // showValue()

// var showValue = function() {
//     console.log(12 + 12);
// }

// showValue()

// جلسه 96

var userName = prompt("Enter The Username: ")
var users = ["mohammad", "reza", "mahdi", "ali"]
var loginFlag = false

for (var i = 0; i < userName.length; i++) {
    if (users[i] === userName) {
        loginFlag = true
    }
}

console.log("Flag: ", loginFlag);

if (loginFlag) {
    alert("لاگین شدی")
} else {
    alert("لاگین نشدی")
}

// جلسه 95

// setTimeout(function(num1, num2) {
//     alert(num1 + num2)
// }, 2000, 8, 12)

// تمرین

// var isUploded = false
// setTimeout(function(isUploded) {

//     if (!isUploded) {
//         alert("Please Upload Any Profile")
//     }

// }, 5000)

// جلسه 94

// console.log(Boolean("mohammad")); // true
// console.log(Boolean("reza")); // true
// console.log(Boolean(" ")); // true
// console.log(Boolean("")); // false

// console.log(Boolean(55)); // true
// console.log(Boolean(0)); // false
// console.log(Boolean(-20)); // true

// console.log(Boolean(true)); // true
// console.log(Boolean(false)); // false

// console.log(Boolean(NaN)); // false
// console.log(Boolean(undefined)); // false

// console.log(Boolean([20, "mohammad", 1, 15, true, 52])); // true
// console.log(Boolean([(20, 50, "reza", false, 12, "ali")])); // true
// console.log(Boolean([])); // true
// console.log(Boolean([(false)])); // true

// console.log(Boolean()); // false

// var userName = prompt("Enter The UserName: ")
// var userNumber = +prompt("Enter The Number: ")

// alert(userNumber)

// if (userName === "") {
//     // Codes
// }
// if (userName) { // true  یعنی هر چی وارد کنید بجز هیچی میاد کد های داخل اکلاد رو اجرا میکنه
//     // Codes
// }
// if (!userName) { // false یعنی اگه چیزی وارد نشد بیاد کد های داخل اکلاد رو اجرا کنه
//     // Codes
// }

// if (userNumber === 0) {
//     // Codes
// }
// if (userNumber) { // true اگه عدد برابر صفر بود بیا کد های داخل اکولاد رو انجام بده
//     // Codes
// }
// if (!userNumber) { // False اگه عدد برابر صفر نبود بیا کد های داخل اکولاد رو انجام بده
//     // Codes
// }

// جلسه 92

// var i9*9 = 10

// var timer = setInterval(function() { // با متد سیت ینتروال میگیم این فاکشن هر هزار میلی ثانیه یک بار اجار بشه

//         if (i === 0) {
//             alert("Game Over")
//             clearInterval(timer) // تو این خط میاد میگه اگه ای به صفر رسید بیا حلقه رو متقف کن و دیگه از فانکشن بیا بیرون این کلیر اینتروال
//         }

//         console.log(i);
//         i--
//     }, 125) // 250 here = 0.25s or 250ms

// تمرین

// var userTimer = +prompt("لطفا مقدار ثانیه را وارد کنید تا تایمر را شروع کنم ", 30)
// var minTimers = +prompt("لطفا مقدار دقیقه را وارد کنید", 1)
// var hourTimers = +prompt("لطفا مقدار ساعت را وارد کنید", 0)
// minTimer = minTimers * 60
// hourTimer = hourTimers * 3600

// userTimer = userTimer + (minTimer + hourTimer)

// var timer = setInterval(function(usertime) {

//     if (userTimer === -1) {
//         alert("وقت شما به پایان رسید")
//         clearInterval(timer)
//     }

//     console.log(userTimer);
//     userTimer--

//     // console.log(hourTimer);
//     // hourTimer--
// }, 1000)

// مال معلم

// var minute = +prompt("لطفا مقدار دقیقه را وارد کنید", 1)
// var second = +prompt("لطفا مقدار ثانیه را وارد کنید", 0)

// var timer = setInterval(function() {

//     if (second === -1) {
//         minute--
//         second = 59
//     }

//     if (minute === 0 && second === 0) {
//         alert("تایمر شما به پایان رسیده")
//         clearInterval(timer)
//     }

//     console.log("Timer: " + minute + " : " + second);
// }, 1000)

// جلسه 89

// Anonymous Function | فانکشن هایی که نمیشه دوباره صداشون زد
// users.filter(function(user) {
//         return user.id === 10
//     })
//     ///////////////////////////

// // IIFE function | فانکشن های خودخان

// (function() {
//     alert('شما مجاز به ورود هستید')
// }())

//جلسه 88

// console.log(eval("2+2")); // = 4 : ایول میاد محسبات داخل دابل کوتیشن انجام میده
// console.log(eval("(alert(12)")); // = alert(12) : اینجا 12 رو در الرت نشون میده
// // کلا ایول میاد از ما یکدونه کد محسباتی و عملیاتی میگیره  و اونو واسمون اجراش میکنه اونو برامون اگزکیوتش میکنه اونو واسمون رانش میکنه
// eval("var x = 10") // از ایول فقط درجا های اثنسنا باید  فقط استفاده کرد

// جلسه 85

// var userNames = [
//     { id: 1, name: "mohammad", age: 18 },
//     { id: 2, name: "reza", age: 16 },
//     { id: 3, name: "ali", age: 22 },
//     { id: 4, name: "mahdi", age: 20 },
//     { id: 5, name: "erfan", age: 19 }
// ]

// var mainUserData = userNames.find(function(user) {
//     return user.name === "reza"
// })

// console.log(mainUserData); // فایر میاد تمام اطلاعات رضا رو میده
// تمرین

// var users = [
//     { id: 1, name: "mohammad", password: "mohammadnikogame33" },
//     { id: 2, name: "reza", password: "rezaking8855" },
//     { id: 3, name: "ali", password: "alitnt9812" },
//     { id: 4, name: "erfan", password: "erfanma456" },
//     { id: 5, name: "mahdi", password: "mahdikh753" },
// ]

// var forgetPassword = prompt("آگر رمز عبور خود را وارد کردید یوزرنیم خود را وارد کنید")

// // var showPassword = users.forEach(function(user) {

// //     if (user.name === forgetPassword) {
// //         console.log(user.password);
// //     } else {
// //         console.log("You Are Wrong");
// //     }
// // })

// var userData = users.find(function(user) {
//     return user.name === forgetPassword
// })
// if (userData === undefined) {
//     console.log("You Are Wrong");
// } else {
//     console.log(userData.password);
// }

// جلسه 84

// var num1 = +prompt("لطفا عدد اول را وارد کنید", 2)
// var amaliat = +prompt("Please Enter Your Oparator \n 1 for + \n 2 for - \n 3 for * \n 4 for / \n 5 for power or ** \n ", 2)
// var num2 = +prompt("لطفا عدد دوم را وارد کنید", 2)
// var finalResult = 0

// if (amaliat === 1) {
//     // sum(num1, num2)
//     finalResult = num1 + num2
// } else if (amaliat === 2) {
//     // tafrig(num1, num2)
//     finalResult = num1 - num2
// } else if (amaliat === 3) {
//     // zarb(num1, num2)
//     finalResult = num1 * num2
// } else if (amaliat === 4) {
//     // devide(num1, num2)
//     finalResult = num1 / num2
// } else if (amaliat === 5) {
//     // power(num1, num2)
//     finalResult = num1 ** num2
// } else if (amaliat === 6) {
//     // baghemande(num1, num2)
//     finalResult = num1 % num2
// } else {
//     alert("لطفا با دقت و مثل ادم وارد کنید")

// }

// function sum(num1, num2) {
//     alert(num1 + num2)
// }

// function tafrig(num1, num2) {
//     alert(num1 - num2)
// }

// function zarb(num1, num2) {
//     alert(num1 * num2)
// }

// function devide(num1, num2) {
//     alert(num1 / num2)
// }

// function power(num1, num2) {
//     alert(num1 ** num2)
// }

// function baghemande(num1, num2) {
//     alert(num1 % num2)
// }

// console.log(finalResult);
// alert(finalResult);

// switch (amaliat) {
//     case 1:
//         finalResult = num1 + num2
//         break
//     case 2:
//         finalResult = num1 - num2
//         break
//     case 3:
//         finalResult = num1 * num2
//         break
//     case 4:
//         finalResult = num1 / num2
//         break
//     case 5:
//         finalResult = num1 ** num2
//         break
//     case 6:
//         finalResult = num1 % num2
//         break
//     default:
//         alert("You Wrong")
// }

// جلسه 83

// var allQuizs = [{
//         id: 1,
//         title: "2 + 2 = ?",
//         answer: "4",
//     },
//     {
//         id: 2,
//         title: "2 * 4 = ?",
//         answer: "8",
//     },
//     {
//         id: 3,
//         title: "7 ** 2 = ?",
//         answer: "4",
//     },
//     {
//         id: 4,
//         title: "12 / 4 = ?",
//         answer: "4",
//     },
//     {
//         id: 5,
//         title: "100 / 25 = ?",
//         answer: "4",
//     },

//     {
//         id: 6,
//         title: "Capital Of Russia ?",
//         answer: "Moscow",
//     },

// ]

// var score = 0
// var finalAnswer = ""

// // var quizs
// allQuizs.forEach(function(quiz) {
//     finalAnswer = prompt(quiz.title);
//     if (finalAnswer === quiz.answer) {
//         score++
//         console.log("Your Answer is true");
//     } else {
//         console.log("Your Answer is false");
//     }
// })

// console.log(score);
// console.log(finalAnswer);

// جلسه 82

// var num1 = 10
// var str1 = "mohammad"
// var num2 = num1
// var str2 = str1

// console.log("Your Num1 is: ", num1);
// console.log("Your Str1 is: ", str1);
// console.log("Your Num2 is: ", num2);
// console.log("Your Str2 is: ", str2);

// num2 = 35
// str2 = "reza"

// console.log("New Result ");
// console.log("Your Num1 is: ", num1);
// console.log("Your Str1 is: ", str1);
// console.log("Your Num2 is: ", num2);
// console.log("Your Str2 is: ", str2);
//  استرینگ و نامبر و بولین اگر در نام دو برابر بزاریم با نام یک بعد پایین تر به نام دو یک چیز اضافه کنیم تغییرات درنام یک اعمال نمیشه همینطور برای استرینگ و بولین
///////////////////////////////////////

// var userName1 = ["ali", "mohammad", "reza", "mahdi"]

// var userName2 = userName1

// console.log("Your User Name Array 1 is: ", userName1);
// console.log("Your User Name Array 2 is: ", userName2);

// userName2.push("Erfan")

// console.log("New Result ");
// console.log("Your User Name Array 1 is: ", userName1);
// console.log("Your User Name Array 2 is: ", userName2);

//////////////////////////////////////////// در فانکشن و ارایه و ابجکت اگر مقدار دوم بهش یک ایتم پوش کنیم اضافه کنیم درمقدار دوم اون در اولی هم اعمال میشع
// چون وقتی اونجا پوش میکنیم چون نیو پروداکت برابر با پروداکتز اگه به نیو پروداگت اضافه کنیم دارم اشاره میکنیم به مقدار پروداکتز

// var Products = {
//     id: 1,
//     name: "milk",
//     price: 8000
// }

// console.log(Products);

// var newProduct = Products

// console.log(newProduct);

// newProduct.type = "drink"

// console.log("New Result");
// console.log(Products);
// console.log(newProduct);

//////////////////تمرین///////////////////

// var ostans = {
//     khorasanrazavi: ["mashhad", "jimabad", "tapesalam"],
//     tahran: ["farashta", "tahranWest", "tahraneast"],
//     asfahan: ["esfahanWest", "esfahanEast"]
// }

// var mabda = prompt("لطفا مبدا خود را وارد کنید")
// console.log(ostans[mabda]);
// // var results = ostans.findIndex(function(ostan) {
// //     return ostan === mabda
// // });

// var finalresult = ostans.(function(ostan) {
//     return ostan === mabda
// })

// console.log(result);
// console.log(ostans.khorasanrazavi);

// جلسه 81

// var tasks = {
//     mohammad: ["html", "css", "js"],
//     reza: ["vue", "react", "angiular"],
//     ali: ["seo", "link bilding"],
//     erfan: ["admin", "content"]
// }

// var newTask = prompt("Plase Enter The New Task: ")
// var newEmployeWork = prompt("Plase Enter The Employe Name Work : ")
// var newKey = tasks[newEmployeWork]
// newKey.push(newTask)

// console.log(newKey);

// tasks.push(newKey);
// console.log(tasks[newtask]);

// var tasks = {
//     mohammad: ["html", "css", "js"],
//     reza: ["react", "node js", "boostrap"],
//     ali: ["link", "seo"],
//     moahdi: ["admin", "content"],
// }

// var newTask = prompt("Please Enter A New Tasks")
// var empoly = prompt("Please Enter Name Empoly")

// var empolyTasks = tasks[empoly]

// empolyTasks.push(newTask)

// console.log(tasks);

// جلسه 79

// var isLogin = true;
// var isNotLogin = false;

// if (isLogin === true){ // برای بهتر نوشتن این خط کد بهتر از سینتکس زیر استفاده کنیم
//  console.log("شما از قبل لاگین کرده اید")
// }

// if (isLogin){ // = isLogin === true : اینا دو تا هیچ فرقی تو خروجی ندارند پس بهتر است اینجوری نوشته شود
//  console.log("شما از قبل لاگین کرده اید")
// }

// if (isNotLogin === false){ // برای بهتر نوشتن این خط کد بهتر از سینتکس زیر استفاده کنیم
//  console.log("شما از قبل لاگین نکرده اید")
// }

// if (!isLogin){ // = isLogin === false : اینا دو تا هیچ فرقی تو خروجی ندارند پس بهتر است اینجوری نوشته شود
//  console.log("شما از قبل لاگین نکرده اید")
// }

// تمرین

// var todos = [
//  {id : 1 , name : "go to gym" , isFinished : false},
//  {id : 2 , name : "eat food for heath" , isFinished : true},
//  {id : 3 , name : "sleeping in 11 clock" , isFinished : false}
// ]

// var menuTodos = prompt(" Enter Number 1 for Add To Todos \n Enter Number 2 for Remove in Todo \n Enter Number 3 for Do Todos \n ")

// if (menuTodos === "1"){
// console.log("you enter 1")
// var addName = prompt("Enter Todo For Add to Todos List")
// var doAdd = prompt("Ded you today do this todo ? (Yes or No)")
// var toAdd = doAdd.toLowerCase()

//       if (toAdd === "yes"){
//        toAdd = true
//       } else if (doAdd === "no"){
//        toAdd = false
//       } else {
//        console.log("Please Enter Yes OR No!")
//       }

// var adds = {
//  id : 4,
//  name : addName,
//  isFinished : toAdd
// }

// todos.push(adds)
// console.log(todos)

// } else if (menuTodos === "2"){

//        console.log(todos[0])
//        console.log(todos[1])
//        console.log(todos[2])

//       var removeName = prompt(" Enter Name Todos for Remove \n Please Enter Lower Case And Full Name")

//       if (removeName === todos[0].name || removeName === todos[1].name || removeName === todos[2].name){

//        var removeTodoIndex = todos.findIndex(function (todo) {
//         return todo.title === removeTodoIndex
//        })
//        todos.splice(removeTodoIndex, 1)

//        console.log("Basket : " , todos)
//       } else {
//        alert("This Is Not In Your Todos")
//       }
// } else if (menuTodos === "3"){

//  var nameDoits = prompt("Enter Name todo")
// var nameDoit = nameDoits.toLowerCase()

//  // var toDoits = prompt("Ded you today do this todo ? (Yes or No)")
//  // var toDoit = toDoits.toLowerCase()

// //  if (toDoit === "yes"){
// //   toDoit = true
// //  } else if (toDoit === "no"){
// //   toDoit = false
// //  } else {
// //   console.log("Please Enter Yes OR No!")
// //  }

// // todos.forEach(function (todo) {
// //  if (todo.title === nameDoit){
// //  todo.isFinished = true
// //  }
// // })
// console.log(nameDoits)
// todos.forEach(function (todo) {
// // if (todo.title === nameDoit){
//   if (todo.title === todos[0].name || todo.title === todos[1].name || todo.title === todos[2].name){
//   todo.isFinished = true
//  }
// })

// console.log(todos)

// } else {
//  console.log("لطقا با دقت اعداد را وارد کنید")

// }

// جلسه 78

// var userTitle = prompt("کلمه ای وارد کنید تا برسی کنم اگه کلمه رو برعکس کنم بازم به مقدار اولی میرسم" , "LOL")
// var sum = userTitle.split("")
// var newResult = sum.reverse()
// var lastResult = newResult.join("")

// if (lastResult === userTitle){
//  console.log(lastResult , "متن شما برابر با خودش است")
// } else {
//  console.log("متن شما برابر با خودش نیست")
// }

// جلسه 77

// var num = 0
// var scores = [ 19 , 56 , 21 ,30 ,40 , 80 , 90 , 51 , 32 , 56 , 75]

// var userName1 = 'Amir/Amin/Ali'
// var userName2 = 'Amir Amin Ali'
// var userName3 = 'Ali'

// console.log(Array.isArray(num)) // = false : ایز اری میگه ایا این مقداری که داخل نام هست ارایه هست یا نه
// console.log(Array.isArray(scores)) // = true : چون داخل اسکورز یک آرایه ذخیره شده

// console.log(scores.indexOf(56)) // = 1 : ایندکس اف میاد برسی میکنه ببینه 56 ایندکس چندمه ولی اگر دفت کنید دوتا 56 داریم ما و لین فقط به محض اینکه اولی ار سمت چپ رو پیدا کنه ریترن میشه
// console.log(scores.lastIndexOf(56)) // = 9 : این هم دقیقا مثل قبلی میاد ایندکس پیدا میکنه با این تفاوت که از سمت راست میگرده و وقتی به اولی مقدار تورو برسه ریترن میکنه
// console.log(scores.lastIndexOf(56 , 5)) // = 9 : این هم دقیقا مثل دوتا بالا عملکردش ولی اینجا در مقدار دوم میگیم که از کجا به گشتن بکن

// console.log(scores.slice(2 ,5)) // =  19 , 56 , 51 , 32 , 56 , 75 : از ایندکس 2 تا ایندکس 5 برش میزنه و اگر مقدار دوم ندیم از ایندکس دوم تا اخر برش میزنه

// console.log(scores.join('/')) // =  19/56/21/30/40/80/90/51/32/56/75 : جوین میاد تمام مقادیر داخل اسکورز رو کانکتشون میکنه بهم وصلشون میکنه و از ارایه خارج میکنه
// console.log(scores.join(' ')) // = 19 56 21 30 40 80 90 51 32 56 75 : اینجا هم با فاصله از هم جدا میکنه
// console.log(scores.join('')) // = 1956213040809051325675 : اینجا هم بدون فاصله از هم جدا میکنه

// console.log(scores.reverse()) //  75 , 56 , 32 ,51 ,90 , 80 , 40 , 30 , 21 , 56 , 19 : ریویرس همینطور که از اسمش پیداس میاد مقادیر اسکورز مارو برعکس میکنه

// console.log(userName1.split('/')) // = ["Amir" , "Amin" , "Ali"] :  این خیلی مهمه اسپلیت میاد برای ما مقدار یورزنیم
// console.log(userName2.split(' ')) // = ["Amir" , "Amin" , "Ali"]
// console.log(userName3.split(''))  // = ["A" , "l" , "i"] : مثلا در اینجا ما مقدار خالی دادیم به محض اینکه به یک استرینگ برسه به یک ابجیکت ارایه تبدیل میشه

// جلسه 76

// var MyOnlineshop = [
//  {id : 1 , name : "bilakh"          , price :    1000}, //    1K T
//  {id : 2 , name : "adams"           , price :    2500},
//  {id : 3 , name : "bestcoeet"       , price :    5000},
//  {id : 4 , name : "abmeva"          , price :   10000}, //   10K T
//  {id : 5 , name : "shear"           , price :   25000},
//  {id : 6 , name : "moraba"          , price :   50000},
//  {id : 7 , name : "karabadamzamini" , price :  100000}, //  100K T
//  {id : 8 , name : "roghan"          , price :  250000},
//  {id : 9 , name : "notala"          , price :  500000},
//  {id :10 , name : "barang"          , price : 1000000}, // 1M    T
// ]
// var dawnHandared = 0
// var upHandared   = 0
// var isTrue = MyOnlineshop.filter(function (onlineshop){
//  return onlineshop.price > 100000})

//  var postCost = isTrue.length * 1000

//  var sum = 0

//  MyOnlineshop.forEach(function (onlineshop){
// sum = sum + onlineshop.price
//  }
//  )

//  var tatolPrice = sum + postCost
//  console.log("Products Price : " , (tatolPrice - postCost))
//  console.log("postCost " , postCost)
//  console.log("Tatol Price : " , tatolPrice)

// جلسه 75

// var MyOnlineshop = [
//  {id : 1 , name : "bilakh"          , price :    1000}, //    1K T
//  {id : 2 , name : "adams"           , price :    2500},
//  {id : 3 , name : "bestcoeet"       , price :    5000},
//  {id : 4 , name : "abmeva"          , price :   10000}, //   10K T
//  {id : 5 , name : "shear"           , price :   25000},
//  {id : 6 , name : "moraba"          , price :   50000},
//  {id : 7 , name : "karabadamzamini" , price :  100000}, //  100K T
//  {id : 8 , name : "roghan"          , price :  250000},
//  {id : 9 , name : "notala"          , price :  500000},
//  {id :10 , name : "barang"          , price : 1000000}, // 1M    T
// ]

// var filterForPost = MyOnlineshop.filter(function (produckt) {
//  return produckt.price < 100000
// })

// var postCost = filterForPost.length * 1000

// var sum = 0

// var price = MyOnlineshop.forEach(function (produckt){
//  sum = sum + produckt.price
// })

// console.log("هزینه سبد خرید شما برابر است با : " + sum)
// console.log("هزینه پست شما برابر است با : " + postCost)
// console.log("هزینه سبد خرید + هزینه پست برابر است با : " + (sum + postCost))

// حلسه 74

// var userNames = ["ali" , "Amin" , "Amir" , "nik" , "babak" , "reza" , "mohammad"]

// var filterduUserName = userNames.filter(function (userName){
//  return userName.length > 4
// })

// console.log("FilteredUserNames : " , filterduUserName) // "babak" , "mohammad"

// جلسه 73

// var scores = [18 , 16 , 13 , 19 , 20 , 17 , 15  , 12]

// var filteredScored = scores.filter(function (score){ // فیلتر میاد تمام مقادیر میگیره و فقط اون هایی که فیلتر روشون انجام شده اعمال میشه
//  return score > 17
// مثلا اینجا میاد تمام اعداد بالا 17 رو نشون میده در خروجی
// })
// alert(filteredScored)

// جلسه 72

// var scores = [2, 3 , 6 , 5 , 9 , 11 ,26 ,99 ,10]
// scorepower همیشه یک آرایه است
// var scorePower = scores.map(function (score){
// فرق بین مپ با فورایچ دقیقا چیه فورایچ برامون چیزی رو ریترن نمیکنه یا برنمیگردونه فقط میاد صرقا یک کاریو به ازای تکتک ایتم های ارایه تکرار میکنه
// اما مپ میاد واسه مااین نتیجه و حاصل رو هم داخل یک آرایه ذخیره میکنه
// return score ** 2
// })

// console.log(scorePower)

// جلسه 71

// var allProducts = [
//  {id : 1 , name : "book"        , price : 30000},
//  {id : 2 , name : "notebook"    , price : 12000},
//  {id : 3 , name : "pencil"      , price :  8000},
//  {id : 4 , name : "pen"         , price :  5000},
//  {id : 5 , name : "pencilsharp" , price :  4000},
//  {id : 6 , name : "rola"        , price :  3000},
//  {id : 7 , name : "a4"          , price :   400},
//  {id : 8 , name : "pones"       , price :   250}
// ]
// var userBasket = [
//  {id : 1 , name : "pen"         , price :  5000},
//  {id : 2 , name : "pencilsharp" , price :  4000},
//  {id : 3 , name : "rola"        , price :  3000}
// ]

// var userRequest = prompt("1. Add Product \n 2. Remove Product")

// if (userRequest === "1"){
//  var userProductName = prompt("Enter Your Name : ");
//  var producktData;

//  var isInShop = allProducts.some(function (produckt){
//   if (produckt.name === userProductName){
//    producktData = produckt;
//    return true;
//   }
//  });
//  if (isInShop === true){
//   var newProduct = {
//    id: 4,
//    name: producktData.name,
//    price: producktData.price,
//   };
//   userBasket.push(newProduct);
//   console.log("Basket : " , userBasket);
//  } else{
//   alert("همچین محصولی نداریم")
//  }
// } else if (userRequest === "2") {
//  var userProductName = prompt("Enter Your Product Name : ");

// if (userProductName == userBasket.name){

//  var producktIndex = userBasket.findIndex(function (produckt){
//   return produckt.name === userProductName;
//  })
//  userBasket.splice(producktIndex, 1)

//  console.log("Basket : " , userBasket)
// } else {
//  alert("همچین محصولی در سبد خرید شما موجود نیست")
// }

// } else {
//   alert("لطفا یا عدد 1 یا عدد 2 را وارد کنید")
// }

// جلسه 70

// var allProducts = [
//  {id : 1 , name : "book"        , price : 30000},
//  {id : 2 , name : "notebook"    , price : 12000},
//  {id : 3 , name : "pencil"      , price :  8000},
//  {id : 4 , name : "pen"         , price :  5000},
//  {id : 5 , name : "pencilsharp" , price :  4000},
//  {id : 6 , name : "rola"        , price :  3000},
//  {id : 7 , name : "a4"          , price :   400},
//  {id : 8 , name : "pones"       , price :   250}
// ]
// var userBasket = [
//  {id : 4 , name : "pen"         , price :  5000},
//  {id : 5 , name : "pencilsharp" , price :  4000},
//  {id : 6 , name : "rola"        , price :  3000}
// ]

// var userRequest = prompt("1. Add Product \n 2. Remove Product")

// switch (userRequest){
//  case "1":
//  var userProductName = prompt("Enter Your  Name For Add : ");
//  var producktData;

//  var isInShop = allProducts.some(function (produckt){
//   if (produckt.name === userProductName){
//    producktData = produckt;
//    return true;
//   }
//  });
//  if (isInShop === true){
//   var newProduct = {
//    id: 3,
//    name: producktData.name,
//    price: producktData.price,
//   };
//   userBasket.push(newProduct);
//   console.log("Basket : " , userBasket);
//  } else{
//   alert("همچین محصولی نداریم")
//  }
//  break
//  case "2":
//   var userProductName = prompt("Enter Your Product Name For Remove : ");

//   if (userProductName == userBasket.name){

//    var producktIndex = userBasket.findIndex(function (produckt){
//     return produckt.name === userProductName;
//    })
//    userBasket.splice(producktIndex, 1)

//    console.log("Basket : " , userBasket)
//   } else {
//    alert("همچین محصولی در سبد خرید شما موجود نیست")
//   }
//   break
//   default:
//   alert("لطفا یا عدد 1 یا عدد 2 را وارد کنید")
//   alert("لطفا کثشعر وارد نکنید")
//   break
// }

// حلسه 69

// var users = [
//  {id : 1, name : "Ali"     , age : 22},
//  {id : 2, name : "Reza"    , age : 21},
//  {id : 3, name : "Amir"    , age : 19},
//  {id : 4, name : "Amin"    , age : 21}
// ]

// var userIndex = users.findIndex(function (user){
//  return user.name === "Amin"
// })

// console.log("Index Amin : " , userIndex)

// جلسه 68

// var users = ['ali' ,'mahdi' ,'reza' ,'mohammad' , 'amin']
// فایند ایندکس میاد مقداری که بهش میدیم نگاه میکنه ببینه تو ارایه هسته یا نه اگه بود مقدار اینکسشو نشون میده
// var userIndex = users.findIndex(function (user){
//  console.log(user)
//  return user === 'mohammad'
// })

// console.log(userIndex)

// حلسه 67

// var numbers = [10 , 19 , 20 , 21 , 22 , 23 , 24 , 25 , 15 , 35 , 36 , 37 , 38 , 39]

// numbers.splice(3 , 2)
// numbers.splice(3 , 5 , 1 , 2 , 3 , 4 , 5) // اسپلایس میاد از یک ایندکس تا چند قدم میره جلو مقدار هارو برمیداره و بجاش جایگزین میکنه
// اینجا میاد از سمت چپ ایندکس 3 شروع میکنه به بریدن تا پنج قدم میره جلو و این پنج تا رو برمیدارخ و بجاش مقادیر یک و دو سه و چهار و پنج میزاره

// console.log(numbers) // 10 , 19 , 20 , 1 , 2 , 3 , 4 , 5 , 15 , 35 , 36 , 37 , 38 , 39

// جلسه 66

// var groupUsers = [
//  {id : 1, name : "Ali"     , age : 22},
//  {id : 2, name : "Reza"    , age : 21},
//  {id : 3, name : "Amir"    , age : 19},
//  {id : 4, name : "Amin"    , age : 21},
//  {id : 5, name : "Mahdi"   , age : 25},
//  {id : 6, name : "Matin"   , age : 23},
//  {id : 7, name : "Hamid"   , age : 30},
//  {id : 8, name : "Mohsen"  , age : 16},
//  {id : 9, name : "Mostafa" , age : 25},
//  {id :10, name : "Mohammad", age : 18}
//  ]

// var isAll = groupUsers.every(function (user) {
// return user.age > 18
// })

// if (isAll === true) {
// console.log("شما میتوانید تماس کنفراسنی خود را استرات کنید")
// } else {
//  console.log("شما نمیتوانید یک کنفرانس ایجاد کنید چون ممبر های گروه شما زیر 18 سال سن دارند")
//}

// جلسه 65

// var users = [
// {id : 1, name : "Mohammad", age : 18},
// {id : 2, name : "Mahdi"   , age : 17},
// {id : 3, name : "Mohsen"  , age : 16},
// {id : 4, name : "Matin"   , age : 18},
// {id : 5, name : "Reza"    , age : 16},
// {id : 6, name : "Ali"     , age : 22},
// {id : 7, name : "Hamid"   , age : 30},
// {id : 8, name : "Mostafa" , age : 25},
// {id : 9, name : "Amin"    , age : 21},
// {id :10, name : "Amir"    , age : 18}
// ]

// var isaet = users.every(function (user) {
//  console.log(user.age)
//  return  user.age > 18
// })
// if (isaet == false){
//  alert("شما مجاز بهشروع کنفرانس نیستید چون سن ممبر های شما کمتر از 18 است")
// } else {
//  alert("شما مجاز بهشروع کنفرانس هستید")
// }
// console.log(isaet)

// جلسه 64

// var ages = [19 , 13 , 28 , 32 , 22]

// var isAll = ages.every(function (age){
//  console.log(age)
//  return age > 18
// })
// console.log(isAll)

// جلسه 63

// var allProducts = [
//   {id : 1 , name : "pc"        , price : 80000000},
//   {id : 2 , name : "iphone"    , price : 50000000},
//   {id : 3 , name : "Laptop"    , price : 30000000},
//   {id : 4 , name : "phone"     , price : 40000000},
//   {id : 5 , name : "iarpad"    , price :  1500000},
//   {id : 6 , name : "headphone" , price :  1000000},
//   {id : 7 , name : "charger"   , price :   700000}
// ]

// var userBasket = [
//   {id : 1 , name : "pc"        , price : 80000000},
//   {id : 2 , name : "iphone"    , price : 50000000}
// ]

// var userProduct = prompt("Enter The Name Of product : ")
// var requestProduct;

// var isInShop = allProducts.some(function (product) {
//   if (product.name === userProduct)
//     requestProduct = product
//   return true
// })

// if (isInShop === true){
//   alert("محصول پیدا شد و به سبد خرید شما اضافه شد")
//   var newProduct =  {
//     id: 3,
//     name: requestProduct.name,
//     price: requestProduct.price,
//   }
//   userBasket.push(newProduct)

// var sum = 0

// userBasket.forEach(function (product) {
//   sum = sum + product.price
// })

//   console.log(userBasket)
//   alert("Total price : " + sum)
// } else {
//   console.log("موجودی نیست")
// }

// 62 جلسه

// onlineShopMogodi = [
//   {id : 1 , name : "headphone" , price :  1000000},
//   {id : 2 , name : "irpad"     , price :  1200000},
//   {id : 3 , name : "pc"        , price : 40000000},
//   {id : 4 , name : "ipad"      , price : 60000000},
//   {id : 5 , name : "iphone"    , price : 80000000},
//   {id : 6 , name : "rola"      , price :     4000},
//   {id : 7 , name : "pencil"    , price :     6000},
//   {id : 8 , name : "pen"       , price :     8000},
// ]

// var brakest = [
//   {id : 1 , name : "rola"      , price :     4000},
//   {id : 2 , name : "pencil"    , price :     6000},
//   {id : 3 , name : "pen"       , price :     8000},
// ]

// var ismogod = prompt("plaese enter your order: ")

// var moshtariMahsol;

// var mogodi = onlineShopMogodi.some(function (item) {
//   if (item.name === ismogod){
//     moshtariMahsol = item
//     return true
//   }
// })

// if (mogodi === true){
//   alert("محصول پیدا شد و به سبد خرید شما اضافه شد")
//   var newProduct =  {
//     id: 3,
//     name: moshtariMahsol.name,
//     price: moshtariMahsol.price,
//   }
//   brakest.push(newProduct)

// var sum = 0

// brakest.forEach(function (product) {
//   sum = sum + product.price
// })

//   console.log(brakest)
//   alert("Total price : " + sum)
// } else {
//   console.log("موجودی نیست")
// }

// جلسه 61

// userInfosData = [
//   {id : 1 , name : "mohammad" , family : "nikolay" , age : 18 , email : "mohammadnikolay@gmail.com"},
//   {id : 1 , name : "ali"      , family : "rad"     , age : 19 , email : "alirad@gmail.com"         },
//   {id : 1 , name : "reza"     , family : "hosine"  , age : 20 , email : "rezahosine@gmail.com"     }
// ]

// console.log([{id : 1 , name : "ali" , family : "rad" , age : 19 , email : "alirad@gmail.com"}])

// var isInUsers = userInfosData.some (function (user){
//    فرق  بین
//   some و includes
//    این هست اگه داخل اینکلودس بجز استرینگ و نامبر و بولین مقدار دیگه ای نمیگیره ولی در سام اینطور نیست اگه داخل اینکلوس اجکت بزاریم این مقدار نمیگیره
//   اما در سام ابجکت هم میگیره

// codes
// console.log(user)
// return user.name == "mohammad"
// })

// console.log(isInUsers)

// جلسه 60

// var userName = prompt("Please enter your name")

// var users = [
//   'ali' , ' mahdi' , 'mohammad' , 'reza' , 'hamdid'
// ]

// var isLogin = userName.includes(userName)

// console.log(users.includes("hasan"))
// // اینکلودس میاد برسی میکنه ببینه هسن توی ارایه یوزر هسته یا نه اگه بود تورو اگه نبود که فالس
// console.log(users.includes("mohammad"))

// if (isLogin === true){
//   console.log(" به پنل خود خوش آمدی ")
// } else {
//   console.log(" به پنل خود خوش آمدی ")
// }

// var scores = [12 , 15 , 18 , 16 , 20]

// var inCludeResult = scores(12)
// var inCludeResult = scores(12 , 2)

// console.log(inCludeResult)

// جلسه 59

//  var userArray = [
//     {id : 1 , name : "hamidreza"    , family : "abadi"     , age : 22 , email : "hamidreza@gmail.com"       },
//     {id : 2 , name : "marshad"      , family : "barati"    , age : 18 , email : "marshad@gmail.com"         },
//     {id : 3 , name : "mohammadamin" , family : "saeedirad" , age : 20 , email : "mohammadamin@gmail.com"    }
//  ];

//  userArray.forEach(function (user) {
//   console.log("name : " + user.name + " family : " + user.family + " age : " + user.age + " email : " + user.email);
//  })

// جلسه 58

// var userInfos = [
//    {id : 1 , name : "hamidreza"    , family : "abadi"     , age : 22 , email : "hamidreza@gmail.com"       },
//    {id : 2 , name : "marshad"      , family : "barati"    , age : 18 , email : "marshad@gmail.com"         },
//    {id : 3 , name : "mohammadamin" , family : "saeedirad" , age : 20 , email : "mohammadamin@gmail.com"    },
//    {id : 4 , name : "ghadir"       , family : "ealma"     , age : 22 , email : "ghadiryalma@gmail.com"     },
//    {id : 5 , name : "mohammadniko" , family : "nikolay"   , age : 20 , email : "mohammadnikolay@gmail.com" }
// ]

// userInfos.forEach(function (name) {
// console.log(userInfos[1].name);
// console.log(userInfos[2].name);
// console.log(userInfos[3].name);
// console.log(userInfos[4].name);
// console.log(userInfos[5].name);
// })

// حلسه 57

// var users = [
//   "ali",
//   "mohammad",
//   "reza",
//   "mahdi",
//   "mohsen",
//   "saeed"
// ]
// users.forEach(function (user){
//   console.log(user)
// })

// var scores = [ 18 , 19 , 17 , 16 , 12 , 14]

// scores.forEach(function (number){

//   console.log(number)
//   console.log(number * 2)
// })

// جلسه 56

// var users = [
//   {id : 1 , name : "hamidreza" , family : "abadi" , age : 22 , email : "hamidreza@gmail.com"},
//   {id : 2 , name : "marshad" , family : "barati" , age : 18 , email : "marshad@gmail.com"},
//   {id : 3 , name : "mohammadamin" , family : "saeedirad" , age : 20 , email : "mohammadamin@gmail.com"}

// ]

// var userName = prompt("لطقا نام خود را وارد نمایید")
// var userFamily = prompt("لطقا نام خود را وارد نمایید")
// var userAge = prompt("لطقا نام خود را وارد نمایید")
// var userEmail = prompt("لطقا نام خود را وارد نمایید")

// if (userName.length < 3 || userName.length > 10){
//   alert("نام شما معتبر نمیباشد \n باید تعداد کراکتر از 3 بیشتر و از 10 کمتر باشد")
// } else if (userFamily.length < 3 || userFamily.length > 15){
//   alert("نام خانوادگی شما معتبر نمیباشد \n باید تعداد کراکتر از 3 بیشتر و از 15 کمتر باشد")
// } else if (isNaN(userAge) || userAge.length > 3){
//   alert("سن شما معتبر نمیباشد \n  باید تعداد کراکتر از 3 کمتر باشد و باید حتما عدد وارد نمایید")
// } else {
//   var newUser = {
//     id: 4,
//     name: userName,
//     family: userFamily,
//     age: userAge,
//     email: userEmail
//   }

//   users.push(newUser)
// alert(users[3])
//   console.log(Users)
// }

// جلسه 55

// var userInfos = [
//   {
//     name: "Mohammad",
//     family: "mahdyan",
//     age: 19,
//     phone: 9896325874190,
//     hairColor: "black",
//   },
//   {
//     name: "mahdi",
//     family: "mirzade",
//     age: 19,
//     phone: 9896325874190,
//     hairColor: "black",
//   },
//   {
//     name: "reza",
//     family: "daldar",
//     age: 19,
//     phone: 9896325874190,
//     hairColor: "black",
//   },
// ];

// var newUser1Name = prompt("Enter your name");
// var newUser1NameFamily = prompt("Enter your family name");
// var newUser1Age = Number(prompt("Enter your Age"));
// var newUser1Email = prompt("Enter your name Email Address");

// console.log(userInfos);

// if (
//   newUser1Name.length < 3  ||
//  newUser1Name.length > 15 ||
//  newUser1NameFamily.length < 3  ||
//  newUser1NameFamily.length > 25 ||
//    newUser1Age > 100   ||
//   isNaN(newUser1Age)
// ) {
//   alert(
//     "نام کاربری باید حدعقل 3 کراکتر و حداکثر 12 کراکتر داشته باشد \n  سن رو حتما باید عدد وارد کنید و زیر عدد 100 باید باشد"
//   );
// } else {
//   userInfos.push({
//     id: 4,
//     name: newUser1Name,
//     family: newUser1NameFamily,
//     age: newUser1Age,
//     email: newUser1Email,
//   });
// }

// console.log(userInfos[3]);
// console.log(userInfos[3].name);
// console.log(userInfos[3].family);
// console.log(userInfos[3].age);
// console.log(userInfos[3].email);

// جلسه 54

// var users = ["ali", "mohammad", "mahdi", "hossien", "reza"];
// var user = {
//   name: "mahdi",
//   family: "mirzade",
//   age: 19,
//   phone: 9896325874190,
//   hairColor: "black",
// };
// console.log(user);
// console.log(user["family"]);
// console.log(user.name);

// var userInfos = [
//   {
//     id: 1,
//     name: "mohammad",
//     family: "mohammadi",
//     age: 19,
//     phone: 9896325874190,
//     hairColor: "black",
//   },
//   {
//     id: 2,
//     name: "ali",
//     family: "mahani",
//     age: 17,
//     phone: 989940856374,
//     hairColor: "black",
//   },
//   {
//     id: 3,
//     name: "reza",
//     family: "daldar",
//     age: 16,
//     phone: 989874561879,
//     hairColor: "brown",
//   },
// ];
// console.log(userInfos[1].age);

// جلسه 53

// var userNumbers = []
// var userNumber  = 0
// var userSum     = 0

// while (userNumber != -1 ){
//  userNumber = Number(prompt("Please enter any Number \n if you dont have a number , Enter -1"))
//  if (userNumber != -1){
//   userNumbers.push(userNumber)
//  }
// }
// for (var i = 0 ; i < userNumbers.length ; i++){
// userSum = userSum + userNumbers[i]
// }

//  console.log("Avarage", userSum / userNumbers.length)

// جلسه 52

// var userNumbers = []
// var userNumber = 0
// var userSum = 0

// while (userNumber != -1){
//  userNumber = Number(prompt("Please enter any Number \n if you dont have a any number , Enter -1"))

// if (userNumber != -1){
//  userNumbers.push(userNumber)
// }}
// for (var i = 0 ; i < userNumbers.length ; i++){
// userSum = userSum + userNumbers[i]
// }
// console.log("Your Aavarage" , (userSum / userNumbers.length))

// جلسه 51

// var scores = [10, 11, 12, 13, 14, 15, 16, 17, 18];
// console.log(scores);

// scores.push(14, 15, 16); // اینجا میاد به اول متدد سورس این سهتا مقدار 15و16و14 رو اضافه میکنه
// scores.pop(); // اینجا میاد اخرین مقدار هرچی بود از سورس پاک میکنه

// scores.shift(); // اینجا میاد اولین مقدار هرچی بود از سورس پاک میکنه
// scores.unshift(10, 11, 12); // اینجا میاد به اخر متدد سورس این سهتا مقدار 15و16و14 رو اضافه میکنه

// جلسه 50

// var students = ["ali" ,"mohammad" ,"reza" ,"mahdi" ,"hamid" ,true ,2] // index مقدار یا عنصر بطور مثال ایندکس سوم
// برای تعریف مقادیر مختلف داخل یک خط میایم بصورت بالا تعریف میکنیم
// console.log(students)    // اینجا میایم میگیم تمام مقادیر داخل خودتو نشون بده
// console.log(students[0])
// console.log(students[6]) // اینجا میگیم ایندکس ششم داخل استیوند رو بهم نمایش بدع
// console.log(students[2])
// console.log(students[5])
// console.log(students[3])
// console.log(students[4])
// console.log(students[1])

// جلسه 49

// var userNumber1 = Number(prompt("Enter Number 1"))
// var userNumber2 = Number(prompt("Enter Number 2"))
// console.log(userNumber1 ** userNumber2)
// var power      = 1
// for (var i = 0; i < userNumber2; i++){
//  power = power * userNumber1
// }
// console.log(power)

// var i = 0

// while ( i < userNumber2){
//  power = power * userNumber1
//  i++
// }
// console.log(power)

// do {
//  power = power * userNumber1
//  i++
// } while ( i < userNumber2)
//  console.log(power)

// جلسه 48

// var userNumbers1 = Number(prompt("Enter Number 1"))
// var userNumbers2 = Number(prompt("Enter Number 2"))

// do {
//  console.log(userNumbers1 ** userNumbers2)
//  } while (isNaN(userNumbers1) || isNaN(userNumbers2))

// جلسه 47

// var i = 0

// do {
//  console.log(i)
//  i++
// } while (i > 1)

// این دقیقا شبیه وایل هست با این تفاوت که دفه اول شرط انحام میشه بعد شرط برسی میشه حتی اگه شرط فالس باشه ولی در وایل اینطور نیس اول شرط برسی میشه بعد کار های داخلش انجام میشه

// جلسه 46

// var userNum = 0
// var sum = 0
// var content  = 0

// while (userNum != -1){
//  sum += userNum
//  userNum = Number(prompt("Please enter any Number \nif you dont have a number , Enter -1"))
//  if (userNum != -1){
//   content++
//  }
// }
// console.log("Avrage: " , (sum / content))

// جلسه 45

// var NumberInput = 0
// var userSum = 0
// var content = 0

// while (NumberInput != -1){
//  userSum += NumberInput
//  NumberInput = Number(prompt("Please enter any Number \n if you dont have a number , Enter -1"))

//  if (NumberInput != -1){
//   content++
//  }

// }
// console.log("Avrage: " , (userSum / content))

// جلسه 44

// var firstNumber = Number(prompt("Plase enter Your Number1" , 0)) // 0
// var secondNumber = Number(prompt("Plase enter Your Number2" , 4))// 0

// if (firstNumber % 2 == 0) {
// while(firstNumber < secondNumber){
//  console.log(firstNumber);
//  firstNumber += 2;
// }} else {
// firstNumber++
// while(firstNumber < secondNumber){
//  console.log(firstNumber);
//  firstNumber += 2;
// }}

// جلسه 43

// var userNumber = Number(prompt("Enter the Number : " , 0))
// var userSum = 0
// var userContent = 0

// while (userNumber / 10 != 0){
//  userSum = userSum + (userNumber % 10)
//  userContent++
//  userNumber = Math.floor(userNumber / 10)
// }
// alert("User of digits : " + userSum + "\n" + "Count of digits: " + userContent)

// جلسه 42

// var userNumber = Number(prompt("Please enter Number" , 0))
// var UserSam = 0

// while ((userNumber / 10) != 0) {
// UserSam += userNumber % 10
// userNumber = Math.floor(userNumber / 10)
// }
// alert("userNumber: " + UserSam)

// جلسه 41

// var userNum = prompt("Plase Enter Number") // 0
// var userSum = null // 0
// if (userNum == 0){
//  alert("Your Number : " + 1)
// } else if (isNaN(userNum)){
// alert("Plase Enter Number")
// } else {
//  while ((Math.floor(userNum % 10)) != 0 ){
//   userNum = userNum / 10
//   userSum++
//  }
// }
// alert("Your Number : " + userSum)

// جلسه 40

//  v

// جلسه 39

// var userNumber = null
// var i = 0
// var sum = 0
// var sam = 0

// جلسه 38

// while (i < 3){
//  userNumber = Number(prompt("Please enter the any Number" , 0))
//  sum = sum + userNumber
// sam = sum / 3
//  i++
// }

// alert("average : " + sam)

// while (i < 100){
//  console.log(i)
//  i += 2
// }

// جلسه 37

// var userNum = Number(prompt("Enter The Number", 22))
// var FinalNumber = 1
// for (var i = 0; Math.floor(userNum / 10) != 0 ; i++){

// if (isNaN(userNum)){
//  alert("مریضی درسته؟")
// } else {
//  FinalNumber++
//  userNum = Math.floor(userNum / 10)
// }
// }

// alert(FinalNumber)
// console.log(FinalNumber)
// console.log(kkk)

// جلسه 36

// var datas = Number(prompt("Please Enter Your Number"))
// var datass = datas / 10
// var data = datas % 10
// alert("Your Number is " + data)

// var userNumber = Number(prompt("لطفا عدد مورد نظر را وارد کنید", 11)) // Number(prompt("Please Enter Your Number"))
// var userSum = 0

// for (var i = 0 ; (userNumber / 10 ) != 0 ; i++) {
//  userSum = userSum + (userNumber % 10)
//  userNumber  = Math.floor(userNumber / 10)
// }
// console.log(userSum)
// console.log(userNumber)
// alert(userSum)
// alert(userNumber)

// جلسه 35

// var userNumber = 0
// var userNumber = null //||| null  = empty
// for (var i = 0 ; i < 5 ; i++){
//  userNumber = userNumber + Number(prompt("Please enter Number" , 2))
//  userNumbers = userNumber / 5
// }
// alert("Your Avareage Number is " + Math.floor(userNumbers))

// 34 = خنصی

// var price1 = Number(prompt("Plaese Enter Price number 1"))
// var price2 = Number(prompt("Plaese Enter Price number 2"))
// var price3 = Number(prompt("Plaese Enter Price number 3"))
// var price4 = Number(prompt("Plaese Enter Price number 4"))
// var price5 = Number(prompt("Plaese Enter Price number 5"))

// alert(price1 + price2 + price3 + price4 + price5)

// var allprice = 0

// for (var i = 0; i < 5 ; i++){
//  var allprice = allprice + prompt("Plaese Enter Price ")
// }
// alert("All Price Your Basket = " + price)

// جلسه 34

// for (var ru = 0 ; ru < 102 ; ru += 2) {
//  console.log(ru)
// }
// for (var ru = 99 ; ru > 0 ; ru -= 2) {
//  console.log(ru)
// }

// جلسه 33

// var userName = "Mohammad Niko"

// for (i = 0 ; i < userName.length ; i++){
//  console.log(userName[i] + " ==> Index Number " + i)
// }

// جلسه 32

// var myNumber = 10;

// myNumber += 5; // == myNumber = myNumber +  5                               | =  15
// myNumber -= 8; // == myNumber = myNumber -  8                               | =   2
// myNumber *= 3; // == myNumber = myNumber *  3                               | =  30
// myNumber /= 2; // == myNumber = myNumber /  2                               | =   5
// myNumber **= 2; // == myNumber = myNumber ** 2                               | = 100
// ++myNumber; // myNumber++ // myNumber += 1 // == myNumber = myNumber + 1 | =  11
// --myNumber; // myNumber-- // myNumber -= 1 // == myNumber = myNumber - 1 | =   9

// console.log(myNumber);

// جلسه 31

// var randomNumbers = Math.random() * 100000
// var randomNumber = Math.round(randomNumbers)
// alert(randomNumbers)

// جلسه 30

// console.log(Math.PI) // PI Number = 3.14
// این متدد کلا میاد عدد کامل مقدار پی را نمایش میده
// console.log(2 ** 3) // 2 * 2 * 2 = 8
// این دیگه به توان میرسونه واضحه
// console.log(Math.pow(2, 4)) // 2 * 2 * 2 * 2 = 16
// این هم دقیقا مثل بالایش به توان میرسونه
// console.log(Math.sqrt(81)) // 9 * 9 = 81
// این متدد میاد میگه جه عددی ضربدر خودش شده که جواب شده 81
// console.log(Math.abs(-12)) // |-12| = +12 / abs -12 = +12
// این متدد اگه مقدار عدد وارد شده مثبت بود که همون عدد رو نشون میده اما اگر مقدارش منفی بود میاد اونو به مثبت تبدیل میکنه
// console.log(Math.min(2, 4 , 50 , 60 ,41 ,12 ,52 , 84 , 9 , 23)) // 2
// اینجا میاد از بین اعداد انتخاب شده کوچیک ترین عدد رو انتخاب میکنه
// console.log(Math.max(2, 4 , 50 , 60 ,41 ,12 ,52 , 84 , 9 , 23)) // 2
// اینجا میاد از بین اعداد انتخاب شده بزرگ ترین عدد رو انتخاب میکنه
// console.log(Math.floor(12.1)) // 12
// این متدد میاد اعشار رو برمیداره و عدد رو نمایش میده
// console.log(Math.trunc(12.9)) // 12
// این هم هیچ فرقی با بالایی نداره
// console.log(Math.round(12.9)) // 13
// این میاد عدد رو رند میکنه و بعدش نشون میده
// console.log(Math.round(12.5)) // 13 _|_ 12.49 = 12 _|_ 12.5 = 13
// اینجا ی مثال زدم که اگه مقدار اعشار نیم باشه جواب چه خواهد شد جواب 13 خواهر شد
// console.log(Math.ceil(12.1)) // 13
// این متدد به اهشار نگاه نمیکنه میگه اگه اعشار داشت باید یک عدد بهش اضافه بشه
// console.log(Math.random()) // random number 0.00000000000 to 1.00000000000
// این متدد میاد یک عدد بین صفر و یک و بصورت اعشاری و رندوم انتخاب میکنه و نمایش میده
// console.log(Math.random() * 10) //  random number 0.0000000000 to 10.0000000000
// اینجا عدد رو ضبدر ده کردیم که بین 1 تا 10 بشه

// جلسه 29

const a_t = "I Love a.t";

// console.log(a_t.slice(7,11))
// این متدد وظیفش اینکه بیاد از ایندکس 7 تا 11 رو برش بزنه و در لاگ سایت نشون بده
// console.log(a_t.substr(7,4))
// این متدد وظیفش اینکه بیاد از ایندکس 7 شروع کنه و به اندازه 4 بره جلوتر و برش بزنه و اگر مقدار دوم ننوشته باشیم کل متن رو تا انتها نشون میده
// console.log(a_t.substring(7,11))
// این متدد با اسلایس فرقی نداره

// 28 جلسه
// var userNameAli = prompt("لطفا نام و نام خوانوادگی خود را وارذ کنید")
// var passwordAli = Number(prompt("لطفا پسورد خود را وارذ کنید"))

// if (userNameAli.toLocaleUpperCase =="ALI"){
//  alert("شما میتوانید وارد وبسایت شوید")
// } else {
//  alert("شما اجازه ندارید وارد شوید")
// }

// زبان برنامه نویسی که به حرف بزرگ کوچک حساس باشه بهش میگن سنستین مثل همین جاوا اسکریپت
// زبان برنامه نویسی که به حرف بزرگ کوچک حساس نباشه بهش میگن کیس اینستیو مثل همین جاوا اسکریپت

// var text = "I love JavaScript";
// var textspacing = "                  I love JavaScript              ";

// var finaltext = text.concat(" & React");

// console.log(text[0]); // = I ==> text = "**I** love JavaScript"
// console.log(text.charAt(0)); // این فرقی با بالایی نداره
// console.log(text.charCodeAt(0)); // هر کدام از کلید های کیبورد یک کد سیستمی دارند که به اونها میگن کد ازکی اینجا حرف ال اینگلیسی کدش 73 هست
// console.log(text + " & React"); // اینجا میاد متن داخل تکست رو کانکت میکنه یا میچسبونه به ریاکت
// console.log(text.concat(" & React")); // این فرقی با بالایی نداره
// console.log(finaltext); // اینجا ما در وریبل فاینال تکست اومدیم متن تکست رو کانکت کردیم یا چسبوندیم به متن ریاکت
// console.log(text.trim()); // اینجا دقیقا متن تکست رو نشون میده ولی بدون اسپیس
// console.log(textspacing.trim()); // اینجا دقیقا مثل خط بالاس و توی این خط تفاوتش رو با خط بالا متوجه خواهید شد
// console.log(text.toLocaleLowerCase()); // تمام متن های تکست اینگلیسی رو به صورت کوچک مینویسه
// console.log(text.toLocaleUpperCase()); // تمام متن های تکست اینگلیسی رو به صورت بزرگ مینویسه
// console.log(text.search("react")); // اینجا میگیم برو ببین داخل تکست کلمه ای با اسم ریاکت داریم یا ن
// // - اگر فقط به دنبال موقعیت یک زیررشته خاص هستید، از indexOf استفاده کنید.
// // - اگر نیاز به جستجوی الگوهای پیچیده دارید، از search استفاده کنید.
// console.log(text.indexOf("love")); // این فرقی با بالایی فرق مهمی داره اگه فقط به دنبال موقیت یک زیررشته خاص هستید از این استفاده کنید اگر نیاز به الگو های پیچیده دارید از متد بالایی استفاده کنید
// console.log(text.includes("react")); // این فرقی با بالایی نداره با این تفاوت که این فقط بهمون بولین تورو یا فالس برمیگردونه

// جلسه 27

// var userName = prompt("Please enter your username : ")
// var userPassword = prompt("Please enter your password : ")

// if (userName.length < 3 || userPassword.length < 9){
//  alert("تعداد کراکتر های یوزرنیم کمتر از 3 تا کراکتر هست و یا تعداد کراکتر پسورد کمتر از 8 کراکتر هست")
// } else {
//  alert("به وبسایت ما خوش آمدید")
//}

// جلسه 26

// var userName = "Mohammad Niko" // M = 0 |  o = 1 |  h = 3 |  m = 4 |  m = 5 |  a = 6 |  d = 7 |  " " = 8 |  9 = N |  10 = i |  11 = k |  12 = o |
// var firstIndex = userName[0]

// alert(firstIndex) // index

// alert(userName.length)

// alert(lastIndex) // index

// alert(userName[0])
// alert(userName[1])
// alert(userName[2])
// alert(userName[3])
// alert(userName[4])
// alert(userName[5])
// alert(userName[6])
// alert(userName[7])
// alert(userName[8])
// alert(userName[9])
// alert(userName[10])
// alert(userName[11])
// alert(userName[12])
// alert(userName[13])

// جلسه 25

// function sumNumber (num1 , num2){
//  var result = num1 + num2
//  alert("result : " + result)
//  return result
//  برگردون متغیر ریزالت این پایین سام نامیبر رو 2 + 8 فراخانی کردم بعد اینجا میاد داخل فانکشن رو سام نامبر اینجا دو و هشت رو داخل ورودی نام یک و نام دو ازم میگیره و و میریزه  داخل ریزالت و اینجا خط سوم میاد ریزالت رو برمیگردونه یعنی این پایین که من اومدم سام نامبر رو فراخانی کردم اینجا این ریالت یعنی مجموع دو و هشت برگشت داده میشه به من و من اینجا میام میگم ریزالت و اوتپوت  نهایی این فانکشن رو بریز داخل متغیر سام ریزالت اینجا برام میشه دو و هشت جمعشون و اینجا تو خط نهم گفتم بیا اینو برای من مال ریزالت رو داخل الرتم به من نشون بده
// }

// var sumResult = sumNumber(2,8)
// alert("sumResult = " + sumResult)

/////////////////////////////////

// var number1 = Number("Enter First Number ...")
// var number2 = Number("Enter Second Number ...")

// function showpower (num1 , num2){
//  alert("num1 = " + num1)
//  return num1 ** num2
//  return 10
// }
// var powerResult = showPower(number1, number2)
// alert("powerResult = " + powerResult)

// جلسه 24

// function Valuenum1 (num1 = 0, num2 = 0){

//  if (num1 == undefined){ // این با روش بالا هیچ فرقی نداره اینجا ما داریم میگیم اگه کاربر هیچی وارد نکرد مقدار دیفالت رو قرار بده با 0
//   num1 = 0
//  }
//  if (num2 == undefined){
//   num2 = 0
//  }

//  var result = num1 = num2
//  alert("Result = " + result)
// }
// Valuenum1 (Number(prompt("لطفا عدد اول را وارد کنید")) , Number(prompt("لطفا عدد دوم را وارد کنید")))

// جلسه 23

// function Meangin (number1 , number2 , number3){
// var me = (number1 + number2 + number3) / 3
// alert(me)
// }

// Meangin(Number(prompt("عدد اول را وارد کنید")) , Number(prompt("عدد دوم را وارد کنید")) , Number(prompt("عدد سوم را وارد کنید")))

// جلسه 22

// function oddandeven (userNumber){
// if (userNumber % 2 == 0){
// alert("Your number odd ")
// } else {
//  alert("Your number even")
// }
// }

// oddandeven(Number(prompt("لطفا عدد مورد نظر را وارد کنید")))

// جلسه 21

// Function parameters

// function helloinrussia (userText){
//  alert("hello , how are you in russia = " + userText)
// }

// helloinrussia("Privet , Kak Tbi")

// function showNumbers (firstNumber, secondNumber){
//  alert("Your first  number : " +  firstNumber)
//  alert("Your second number : " + secondNumber)
// }

// showNumbers(24 , 30)

// جلسه 20

// function showValueNumber () {
//  var num1 = 4
//  var num2 = 2
//  var myresult = num1 ** num2
//  alert(myresult)
// }
// var hello = function () {
//  alert("Hello My Friend")
// }

// showValueNumber ()
// hello()
// hello()
// hello()

// جلسه 19

// Function = تابع

// function resultNumber () {
//  var num1 = 25
//  var num2 = 20
//  var num3 = 15
//  var num4 = 10
//  var num5 = 5

//  alert("جمع نامبر ها برابر است با" + (num5 + num4 + num3 + num2 + num1))
// }

// resultNumber ()
// resultNumber ()
// resultNumber ()

// جلسه 18

// var num1 = 3
// var num2 = 6
// var num3 = 10
// var num4 = num1 * num2
// switch(num3 * num1){
//  case 10:
//  alert("نام یک برابر است با 10")
//  break

//  case 15:
//   alert("نام یک برابر است با 15")
//   break

//   case 20:
//  alert("نام یک برابر است با 20")
//  break

//  case 22:
//   alert("نام یک برابر است با 22")
//   break

//   case 25:
//  alert("نام یک برابر است با 25")
//  break

//  case 30:
//   alert("نام یک برابر است با 30")
//   break

//   case 19:
//   case 31:
//   case 32:
//  alert("نام یک برابر است با 19یا31یا32")
//  break

// }

// Switch ===
// ifelse ==

// var levelNum = Number(prompt("لطفا معدل خود را وارد کنید" , 18))

// switch (levelNum){
//  case 20 :
//  case 19 :
//  case 18 :
//  alert("معدل شما A+")
//  break

//  case 17 :
//  case 16 :
//  case 15 :
//  alert("معدل شما A")
//  break

//  case 14 :
//  case 13 :
//  case 12 :
//  alert("معدل شما C")
//  break

//  case 11 :
//  case 10 :
//  case 9 :
//  case 8 :
//  alert("معدل شما F")
//  break

// default :
//  alert("معدل شما F+")
//  break
// }

// var level = Number(prompt("لطفا معدل خود را وارد کنید " , 18))

// if (level == 20){
//  alert("معدل شما برابر است با : A+")
// } else if (level >= 17){
//  alert("معدل شما برابر است با : A")
// } else if (level >= 12){
//  alert("معدل شما برابر است با : D")
// } else if (level >= 8){
//  alert("معدل شما برابر است با : F")
//  } else {
//   alert("معدل شما برابر است با : F+")
//  }

// جلسه هفدهم

// var num1 = 2
// var num2 = 5
// var num3 = 10

// var result = (num1 * num2 == num3) ? alert("2 * 5 = 10 result is true") : alert("2 * 5 = 10 result is false");
// var result = (num3 * num2 == num1) ? alert("10 * 5 = 2 result is true") : alert("10 * 5 = 2 result is false");

// if (num1 * num2 == num3) {
//  alert("2 * 5 = 10 result is true")
// } else {
//  alert("10 * 5 = 2 result is false")
// }

// if (num3 * num2 == num1) {
//  alert("10 * 5 = 2 result is true")
// } else {
//  alert("10 * 5 = 2 result is false")
//}

// جلسه شانزدهم

// var num1 = 20
// var num2 = 10
// var num3 = 2
// var myBool1 = false

// && And
// || Or
// برای برعکس کردن مقدار بولین ها از علامت تعجب ! استفاده میکنیم

// if(num1 == 30 && num1 * num3 == num2){ // false false
//  alert("محاسبه اشتباه میباشد")
// } else if (num1 * num2 == 30 && num2 ** num3 == num1){ // false ture
//  alert("محاسبه اشتباه میباشد دوباره")
// } else if (num2 ** num3 == 100 && num3 * num2 == num1){ // true true
// alert("محاسبه سوم شما درست بود")
// } else{
//  alert("do it again")
// }

// alert("!myBool = " + !myBool1)
// alert("!!myBool = " + !!myBool1)
// alert("!!!myBool = " + !!!myBool1)
// alert("!!!!myBool = " + !!!!myBool1)
// alert("!!!!!myBool = " + !!!!!myBool1)

// جلسه پانزدهم

// var userAge = Number(prompt("لطفا سن خود را وارد کنید" , 18))
// var userSex = prompt("لطفا جنسیت خود را وارد کنید" , "مرد یا زن")

// if (userAge < 18 || userSex == "زن"){
//  alert(" شما نمیتوانید وارد سایت شوید")
// } else if (userAge >= 18 || userSex == "مرد") {
//  alert("شما میتوانید وارد سایت شوید")
// } else{
//  alert("hello")
// }

// || Or

// جلسه چهاردهم

// var javas = prompt("What's the “official” name of JavaScript?")

// if (javas === "ECMAScript"){
//  alert("Thas Right")
// } else {
//  alert("cos nanashti")
// }

// جلسه سیزدهم

// var userMinum = Number(prompt("لطفا دقیقا ای که میخاهید به ساعت تبدیل بشه را وارد کنید" , 360))
//  var hour = userMinum / 60

//  if (userMinum >= 999999999999){
//    alert("هوششششششششششششششششششششهههه گاوووووو")
//   } else if (userMinum < 60){
//     alert("عدد وارد شده کمتر از یک ساعت است")
//   } else if (isNaN(hour)){
//     alert("لطفا از اعداد استفاده کنید")
//   } else {

//     alert("میشه ساعت" + hour)
// }
// جلسه دوازدهم

// var userTimeYear1 = Number(prompt("لطفا سال تواد خود را وارد کنید" , "2024"))
// var userYear1 = (2024 - userTimeYear1)

// if(userYear1 > 2024){
// alert("تاریخ وارد شده عدد نیس کصخل")
// } else if (isNaN(userYear1)){
//   alert("هنوز نرفتیم تو این سال کصمغز")
// } else {
//   alert("سال سن شما برابر است با : " + userYear1)
// }

// جلسه یازدهم

// var userNumber1 = Number(prompt("عدد اول را وارد" , 2))
// var userNumber2 = Number(prompt("عدد اول را وارد" , 2))

// var userNumber = userNumber1 ** userNumber2
// alert("جواب برابر است با" + userNumber)

// جلسه دهم

// var userAge = Number(prompt("لطفا سن خود را وارد کنید" , 18))

// if (userAge > 120){
//   alert("کث شعر ننویس گفتم سنتو وارد کن")
// } else if (userAge >= 18) {
//   alert("به وبسایت ما خوش آمدید")
// } else {
//   alert("برو هنوز شاشت کف نکرده بچه سال")
// }

// جلسه نهم

// var userNum1 = Number(prompt("Please Enter Number 1" , 4))
// var userNum2 = Number(prompt("Please Enter Number 2" , 6))
// var userNum3 = Number(prompt("Please Enter Number 3" , 8))

// var userNu = (userNum1 + userNum2 + userNum3) / 3
// alert(userNu)

// جلسه هشتم

// var numbers = prompt(" عدد پنجاه وارد کن  " , "50")
// var numbers2 = 50

// var numbers1 = +numbers

// if (numbers1 == numbers2){
// alert ("درسته !")
// } else {
//  alert("کصخلی داداش ؟ ")
// }

// var imnum = prompt("عدد صد یا زیر صد رو وارد کن")
// var imnumber = +imnum

// if (imnumber < 100){
//  alert("عدد زیر  صد است")
// } else if (imnumber == 100) {
// alert("عدد وارد شده صد است")
// } else if (imnumber > 99999) {
//  alert("چخبره ؟! کث ننویس کاربر محترم    ")
//  } else {
//  alert(" عدد بالای 100 است ")
// }

// let age = prompt('age?', 18);

// let message = (age < 3) ? 'Hi, baby!' :
//   (age < odd) ? 'Hello!' :
//   (age < even) ? 'Greetings!' :
//   'What an unusual age!';

// alert( message );

// var zog = prompt("لطفا عددی وارد کنید تا تشخیص بدم عدد زوج هست یا فرد" , 0);
// var zoje = +zog;

// if (zoje > 999999999999999) {
//   alert("  تعداد کراکتر نامعتبر لطفا مثل حیوان عدد وارد نکنید");
// } else if (zoje % 2 == 1) {
//   alert("عدد فرد است");
// } else {
//   alert("عدد زوج است");
// }

// جلسه هفتم

// var onee = prompt("عدد را وارد کنید")
// var two = 4
// var twree = 2

// var one = +onee
// alert(one < two)
// alert(one < twree)
// alert(one == two)
//  x = 4 ? true or false
// alert(one == twree)
// alert(one === two)
//  x type = 4 number type ? ture of false
// alert(one === twree)
// alert(one * two == twree)
//  x + 4 = 2 ? ture or false
// alert(one * twree == two)
// alert(one > two)
// alert(one > twree)

// alert(two < one)
// alert(two < twree)
// alert(two == one)
// alert(two == twree)
// alert(two === one)
// alert(two === twree)
// alert(two * one == twree)
// alert(two * twree == one)
// alert(two > one)
// alert(two > twree)

// alert(twree < two)
// alert(twree < one)
// alert(twree == two)
// alert(twree == one)
// alert(twree === two)
// alert(twree === one)
// alert(twree * two == one)
// alert(twree * one == two)
// alert(twree > two)
// alert(twree > one)

// جلسه ششم

// var teststr1 = ("سلام و به سایت من خوش امدین")
// var teststr2 = ("من محمد نیکو هستم")
// var testnum1 = (15)
// var testnum2 = (5)

// alert(isNaN(teststr1 + teststr2))
// alert(isNaN(testnum1 + teststr2))
// alert(isNaN(testnum1 + testnum2))

// جلسه پنجم

// var str1 = ("حمید رضا عبادی")
// var str2 = ("15")
// var num1 = (5)

// alert(str1 + num1)
// alert(str1 - num1)
// prompt("لطفا یک کصشعری وارد کنید")
// alert(str2 - num1)
// alert(str2 * num1)
// alert(str2 / num1)
// alert(str2 % num1)
// alert(str2 ** num1)

// جلسه چهارم

// var siteName = ("Green GTA")
// var coure = ("Weapons")

// alert(siteName + " " + coure)
// alert(siteName + "\n" + coure)
// alert("hello and \"welcome\" to my page")
// alert("Site Name : " + siteName + "\n" + "Section : " + coure)

// جلسه سوم

// var mmd = prompt("  عدد اول را وارد کنید")
// var nko = prompt("  عدد دوم را وارد کنید")

// var mohammad = +mmd
// var niko = +nko

// var mohammadnikogamer = mohammad + niko
// var mohammadnikogamerpro = mohammad - niko
// var mohammadnikogamerpromax = mohammad * niko
// var mohammadnikogamerpromaxmaster = mohammad / niko
// var mohammadnikogamerpromaxmasterplus = mohammad ** niko
// var mohammadnikogamerpromaxmasterplusoultra = mohammad % niko

// alert(mohammadnikogamer)
// alert(mohammadnikogamerpro)
// alert(mohammadnikogamerpromax)
// alert(mohammadnikogamerpromaxmaster)
// alert(mohammadnikogamerpromaxmasterplus)
// alert(mohammadnikogamerpromaxmasterplusoultra)

// / جلسه دوم

// var stg = prompt("لطفا اسم خود را وارد کنید")
// var num = prompt("لطفا سن خود را وارد کنید")
// var bol = prompt("لطفا تورو یا فالس خود را وارد کنید")

// userInfo = String(stg)
// alert(userInfo)

// userInfo = String(stg)
// alert(typeof userInfo)

// userAge = +num
// alert(userAge)

// userAge = +num
// alert(typeof userAge)

// userBool = Boolean(bol)
// alert(userBool)

// userBool = Boolean(bol)
// alert(typeof userBool)

// جلسه اول

// var mohammad = "hello im mohammad niko and this my web"

// alert(mohammad)

// var userInfo = prompt("لطفا نام و نام خانوادگی را وارد کنید", "Mohammad niko");

// alert(userInfo)
