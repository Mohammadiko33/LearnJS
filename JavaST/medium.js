const $ = document;
const body = $.body;

// جلسه 150

// ononline = اگر کاربر انلاین باشه کد های داخل ایونت رو انجام میده
// onoffline = ایونت ان افلاین و انلاین به ما این اجازه رو میده به افلاین و انلاین بودن کاربر دسترسی داشته باشیم اگر کاربر افلاین باشه کد های داخل ایونت رو انجام میده
// location.reload() = مثل دو روش قبلی صحفه مارو رفرش میکنه
// locationSearchParams.get("id") = از لوکیشن سرچ پارام بکیر گت کن مقدار ای دی شو
// = new URLSearchParams(locationSearch) = دقیقا مثل تاریخ و زمان وقتی میومدیم و مینوشتیم نیو دیت پرامت ادرس یو ار ال مارو برمیکردونع
// به ادرسی که به مرورگر ارسال شده میگن پارامت
// location.href = https://www.gtaall.com/weapons/?filter=deasetEagle#3 || دقسقا همان صحفه که ما داخل هستیم ان هستیم رو به ما نشان میده
// location.hash = #3 || اگر ما دیزرت اگلی رو سرچ کرده باشیم و بریم به بخش سوم یا صحفه سوم  به ادرس سایت شارپ سه رو اضافه میکنه
// location.search = ?filter=deasetEagle || اگر داخل سایت ما باکس سرچی وجود داشته باشد و ماسرچی انجام داده باشیم به طور مثال در سایت جیتیای الل مقدار دیزرت اگلی رو مخدار سرچ برابر میشه با
// location.pathname = اگر در همین صحفه تست باشیم برای ما باقی ادرس رو همون ادرس ای پی کامپیوتر و ادرس پوشه قرار میده ولی اگر در صحفه جیتیای الل باشیم در بخش اسلحه ها برای ما /weapons/ ریترن میکنه
// location.hostname = www.gtaall.com اسم هاست و اسم سایت که ما داخلش هستیم 
// location.protocol = پروتوکول به ما نشان خواهد داد که ما با https یا http امدیم داخل سایت
// location = لوکیشن موقعیت مکانی هر ادم نیست بلکه ادرسی است که داخل مرورگر سرچ کرده است
// (https:// پروتوکول) || (www.gtaall.com اسم هاست) || (/waepons/ تب پچ نیم) || (؟filter=deartEagle سرچ) || (#3 tab 3)
// history.go(-2) = میره به دو صحفه قبل در تب
// history.go(2) = میره به دو صحفه بعد در تب
// history.go(0) = صحفه مرورگر رو یکبار رفرش میکنه
// history.forward() = کار دکمه فوروارد داخل مرورگر رو انجام میده 
// history.back() = کار دکمه برکشت داخل مرورگر رو انجام میده میتوانیم در نومنو داخل موبایل استفاده کرد
// history.length = تعداد هیستوری های داخل تب رو نشون میده
// history = ما میتوانیم در جی اس به هیس توری کاربر دسترسی داشته باشیم  یعنی صعفه های قبلی یا بعدی همون تب فعلی
// console.log(screen.availWidth); اسکرین دات اوایلهایت برای ماکل عرض مانیتور ریترن میکنه ولی منهای تسک منجر
// console.log(screen.width); = اسکرین دات وید نگاه نمیکنه پنجره ما چقدره عرض به طور مثال اگر عرض مانیتور ما 1920پیکسل باشه هینقدر ریترن میکنه
// console.log(screen.availHeight); = اسکرین دات اوایلهایت برای ماکل ارتفاع مانیتور ریترن میکنه ولی منهای تسک منجر
// console.log(screen.height); = اسکرین دات هایت نگاه نمیکنه پنجره ما چقدره ارتفاع به طور مثال اگر ارتفاع مانیتور ما 1080پیکسل باشه هینقدر ریترن میکنه
// body.clientWidth = عرض کل بادی به ما میده
// body.clientHeight = ارتفاع کل بادی به ما میده
// window.screenLeft  = فاصله از چپ صعفه مانیتور تا پنجره مرورگر
// window.screenTop   = فاصله از بالا صعفه مانیتور تا پنجره مرورگر
// window.outerHeight = ارتفاع کل صحفه مرورگر که قابل مشاهده است
// window.innerHeight = ارتفاع پنجره فعلی دام که محتوا قابل مشاهده است
// window.outerWidth  = عرق کل صحفه مرورگر که قابل مشاهده است
// window.innerWidth  = عرض پنجره فعلی دام که محتوا قابل مشاهده است 
// Window = همان پنجره مرورگری که ما میبینیم میشه ویندو والرت و کنسول و داکیومنت دات کوری سلکتورو همه زیر مجموعه ویندو هستن
// BOM = brower Object Model 
// DOM = document Object Model 
// console.log("%c this is green title" , "color: #00ff00;") = در کنسول لاگ میتوانیم به خروجی استایل سی اس اس بدیم باید یک درصد سی بدیم و متن را بنویسیم و با یک ویگول استایل های خود ا اعمال میکنیم به تور مثال رنگ بز
// در خط زیر دقیقا دقیقا مثل تایم و تایم اند کنسول گروپ و گروپ اند بینشون هر کدی بنویسیم خط اول به عنوان هدر لیست در نظر میگیره و باقی خط بین گروپ و گروپ اند رو داخل لیست نشان میده در کنسول
// console.group("first logs"); /n console.log("list in gp"); \n console.log("second log in gp"); \n console.log("thired log in gp"); \n console.groupEnd("first log");
// indent به قاصله اسپیس میگن ایندنت
// console.time("for loop"); \n for (let i = 0 ; i < 1000000 ; i++){} \n console.timeEnd("for loop"); }} = تایم و تایم اند بینشون هر کدی بنویسیم مدت زمان اجرا شدن اون بخش کد رو نشون میده به میلی ثانیه به تور مثال اگر بین تایم و تایم اند یک حلقه فو باشه مدت زمان اجرا اون حلقه رو به میلی ثانیه نشان خواهد داد 
// console.table(produckt); کنسول تیبل از ما یک ابجکت میگیره و خروجی ابجکن رو مثل تیبل اچ تی ام ال نمایش میده در صحفه کنسسول
// console.assert(num1 + num2 < 10, "is false error"); کنسول ایزرت از ما یک شرط رو میگیره و با یک متن رو و اگر شرط ما فالس بود متن رو به ما نشون میده ولی اگر تورو بود هیچی رو نمایش نمیده
// console.error("dataisnotdefind"); کنسول ارور کد مارو نوشته مارو به شکل خطا نشون میده خطای قرمز
// console.warn("api reponsive statues is 404"); کنسول ویرن پیام مارو به شکل اخطار زرد نشون میده که میتونه برای یاداوری باشه
// console.info("api reponsive statues is 404"); کنسول مغادیر زیادی دارد که فقط به لاگ محدود نمیشود به طور مثال کنسول دات اینفو دقیقا مثل لاگ عمل میکند
// $.createDocumentFragment() = وقتی ما میخوایم یک حلقه به یک ارایه بزنیم به تعداد لنس ارایه باید هی ارایه چک بشه برسی بشه دام اپدیت بشه برای همین ممکنه یکم لگ توی کار باشه اما بجای اینکه به تعداد لنس اون حلقه اعمال بشه یک بار یک کار انجام میشه و مقدارشو داخل فرگمنمت ذخیره میکنیم و اینجوری لگ کار کمتر میشود
// delete usersArr[8] = متد دیلیت فقط برای ابجت استفاده میشه و نمیشه برای یک ارایه استفاده کرد
// delete userObj.family = برای پاک کردن یک لنس یک ابجکت از متدد دیلیت استفاده میکنیم و برای پاک کردن یک ایتم از ابجت از اسپلایس استفاده نمیکنیم
// divElam.insertHTML('afterbegin' , '<p>paragraf title</p>') =  تگ پی با این محتوا رو به بعد از اینکه دیو شروع میشه اضافه بکن
// divElam.insertHTML('beforeend'  , '<p>paragraf title</p>') =  تگ پی با این محتوا رو اخر که میخاد دیو الم تموم بشه اضافه بکن
// divElam.insertHTML('beforebegin', '<p>paragraf title</p>') =  تگ پی با این محتوا رو به قبل از اینکه المنت شروع بشه اضافه بکن
// divElam.insertHTML('afterend'   , '<p>paragraf title</p>') = بجای استفاده از کریت المت و اپند چالد و اپند میتوانیم از اینزرت اچ تی ام ال استفاده کنیم این متدد میگه تگ پی با این محتوا رو به بعد از دیو الم اضافه کن
// onmousedown = فرقی وقتی رو عنصر مورد نظر با کدام کلید موس کلید کرده باشید اگر کلید بیاد پایین این فانکشن اجرا میشه
// onmouseup = فرقی وقتی رو عنصر مورد نظر با کدام کلید موس کلید کرده باشید اگر کلید بیاد پایین و ول میشه این فانکشن اعمال میشه دقیقا مثل ان کی داعن و اپ
// onmouseout = و ایونت موس اوت هم وقتی اعمال میشه که هاور تموم یشه
// onmouseover =  ایونت موس اور دقیقا مشابه هاور سی اس اس است
// onmouseenter =  ایونت موس لیو برای اینکه موس وارد عنصر مورد نظر بشه 
// onmouseleave = ایونت موس لیو برای اینکه موس از عنصر مورد نظر خارج بشه 
// onmousemove = ایونت ان موس موو برای اینکه موس روس عنصر مورد نظر پیکسلی تکون بخوره
// window.innerHeight = محتوای ارتفاعی ضحفه ای که در دام قابل مشاهده هست
// window.innerWidth = محتوای عرضی ضحفه ای که در دام قابل مشاهده هست
// .addEventListener('resize'= برای تغییر اندازه صحفه مرور گر دام وقای تغییر اندازه اعمال شد کد های داخل فانکشن ما اعمال میشه
// myTime.getDate() = برای خروجی دادن تمام لیست زمان از مقدار مای تایم
// myTime.getFullYear() =برای خروجی دادن سال از مقدار مای تایم
// myTime.getMonth() = برای خروجی دادن ماه از مقدار مای تایم
// myTime.getHours() = برای خروجی دادن ساعت از مقدار مای تایم
// myTime.getMinutes() = برای خروجی دادن دقیقا از مقدار مای تایم
// myTime.getSeconds() = برای خروجی دادن ثانیه از مقدار مای تایم
// myTime.getMilliseconds() = برای گرفتن میلی ثانیه از مقدار مای تایم
// myTime = new Date() = برای گرفتن مقادیر مزان یک متد تعریف میکنیم با اسم نیو تایم که مقدارشو میزاریم نیو دیتا
// $.documentElement.style.getProperty('--color-test') || = اینجا ای دی رنگو میگیره  و یا نشون میده یا عملیاتی انجام میدیم
// $.documentElement.style.setProperty('--color-test' , '#00ff00) || = اگر ما در روت سی اس اس پروژه مون روت رنگی رو تعریف کنیم که به المنت به عنوان مثال اچ وان اون رنگو با وریبل تعریفش بکنیم ما اگر بخوایم اون رنگو داخل جاوااسکریپت بگیریم اول ای دی کد رنگ رو مینویسیم  و رنگی که میخوایم جایگزین بشه رو مینویسم
// .addEventListener("input" || = اگه بخایم از ایونت ان چنج استفاده کنیم تغریبات بعد از اینکه ما کلید چپ موس رو برداشتیم اعمال میشه ولی ایونت ان اینپوت تغیرات در لحظه اعمال میشه
// Math.pow(5, 2) || = از سطح مقدماتی هست و مس پاو میگه پنج رو دو بار تو خودش ضرب کن یعنی پنج رو به توان دو برسون
// h1Elam.style.cssText = "text-align:center; font-size: 48px; width: 100%; height: 100px" || = وقتی ما میخواستیم از روش المنت دات استایل دات وید مثلا میخاستیم سه چهار تا بنویسیم خیلی زیاد میشد برای همینما میتونیم از دات سی اس اس تکس استفاده کنیم و دقیقا مثل سی اس اس اینلاین داخل کوتیشن استایل های سی اس اس اعمال میکنیم
//  finally { input.value = "" } || = بعد از ترای و کچ فاینالی در هرصورت اجرا میشه اگر بنویسیم و مقدار ولیو اینپوت رو خالی میزاره
// throw "Error" || = در روش پایینی بجای قرار دادن محتوای داخلی تایتل یک میتوانیم از ترو استفاده کنیم که مثل ریترون عملکرد در لغت ترو به معنای پرت کردنس ما میخایم ارور رو پرت کنیم
// try { console.log(x); } catch (err){ title1.innerHTML = err.name \n title2.innerHTML = err.massage } || = در ترای هر کدی که میخوایم انجام بشه مینویسیم و اما اگر در قسمت ترای خطایی وجود داشت و اگر ایکس رو نشناخت  بیا قسمت کچ رو اجرا کن اسم ی ار ار اختیاری است  هرچی میتونه باشه و نوع خطا رو داخل تایتل مینویسیم و محتوای خطا رو داخل تایتل دو مینویسیم
// let myElam = getComputedStyle(myElam) console.log(myElam.width) || = روش پایینی منقضی شده و کسی زیادی استفاده نمیکنه این روش روش مناسب تری است و فرقی نداره
// let myElam = getComputedStyle(myElam).getPropertyValue("width") console.log(myElam) || = اگر بخوایم به استایل های داخل سی اس اس یک المنت دسترسی داشته باشیم نمیتوانیم از روش دات استفاده کنیم و باید از سینتکس  گتکامپیوتید استایل و اسم المنت و دات دات گتپراپرتی المولیو اسم استایل که داخل استایل است 
// console.log(myElam.style.background) || = فقط برای استایل ها یا بکگراند المنت ما استفاده میشه و فقط برای استایل های اینلان استفاده میشه
// divElam.addEventListener('animationend'       || = وقتی دیو الم انیمیشنش اند شد تموم شد بیا فلان فانکشن رو اجزا کن
// divElam.addEventListener('animationiteration' || = وقتی دیو الم انیمیشنش اتریشن شد تکرار شد بیا فلان فانکشن رو اجزا کن
// divElam.addEventListener('animationstart'     || = وقتی دیو الم انیمیشنش استارت شد شروع شد بیا فلان فانکشن رو اجزا کن
// divElam.style.animation = "moveYourAss 15s 2" || = برای اینمیشن ست کردن در جاوا اسکریپت به این سینتکس مینویسیم دیو الم رو سلکت کن از استایلاش تو انیمیشنش انیمیشن مو یور اس رو انجام بده و مدت زمانش 15 ثانیه باشه و دو بار اتریشن یا تکرار بشو
// سطح مقدماتی > Elmant.classList.includes('myclass') = برای یک بولین برمیگردونه که برسی میکنه مای کلس داخل المنت هست
// اگر داخل لوکال استوریج کلیدی که ما گت میکنیم نباشه برای ما نال بر میگردونه null
// localStorage.setItem("name", "mohammad") => localStorage.setItem("name","mahdi") || برای ویرایش یک اطلاعات در لوکال استوریج باید دفعه دوم به این صورت بنویسیم
// JSON.parse(localStorage.getItem(users))
// اگه بخایم از از پایینی بخش دوم خروجی بگیریم به ما بازم استرینگ نمایش میده و برای فیکس این مشکل باید از راه حل بالا استفاده کنیم تا یک ابجکت به ما برگردونه
// localStorage.setItem('users' , ["ali" , "amin" , "amir" , "babak"]) || localStorage.setItem('users' , JSON.stringify(["ali" , "amin" , "amir" , "babak"])) |||| و روش دوم درست است تا ما ارایه درست کنیم
// اکر ما بخوایم یک ارایه ذخیره کنیم در لوکاس استرویج نمیشود و به صورت استرینگی اطلاعات مارو برمیگردونه
// ما در لوکال استوریج فقط دیتا های استرینگی میتوانیم ذهیره کنیم نکته بعدی باید اطلاعاتی که ساده هستن و رسما اهمیت کمی دارند و مهم نیستند در لوکاس استرویج بزاریم چون همه میتوانن ان را مشاهده کنند
// localStorage.clear() = برای پاک کردن کلید ها و ولیو ها باید به این سینتکس بنویسیم
// localStorage.getItem('id') = برای گرفتن یک ایتم از لوکاس استریج  با باید به این سینتکس گت دیتا کنیم
// localStorage.setItem('id' , 1) = لوکال استریج یک مکان یا دیتا هست که اطلاعات ما اونجا ذخیره میشود که وقتی صعفه رو رفرش میکنیم  یا از سایت میریم بیرون اطلاعات ما نپره برای ست کردن یک دیتا دقیقا مثل دیتا ترنسفر که ما سیت دیتا و گت دیتا میزدیم لوکال استریج هم دقیقا مثل همونه  ای دی رو در کلید ذخیره میکنه وعدد یک رو در ولیو و اگر صحفه رفرش بشه یا خارج بشیم اطلاعات نمیپره
// $.getElementsByClassName('btn')[0] = برای گرفتن اولین لنس بی تی ان کلاس سینتکسش اینجوریه
// Dropped => First onDragEnter second onDragOver thired onDragLeave foured onDrop = اول از همه ان درگ اینتر رخ میده و این زمانی رخ میده که  و مادامی رخ میده که المنتی که میخاد درگ بشه و درگ شده  بیاد داخل المنتی که میخایم روش دراپ بشه وایسته و توی اون قسمت تکون بخوره به طور کلی اول اینتر وارد میشه یا اینتر نیشه و زمانی که ما المنت رو داخل یک باکس یک مکانی نگهش داشتیم یک ایونتی به اسم اندراپ اور رخ میده و سپس ما اگر بخوایم اوجا دراپش نکنیم و اگر بخوایم بیاریم داخل باکس و بیاریم بیرون خارج کنیم از محدوده اون باکس یک ایونتی به نام ان درگ لیو رخ میده و ما اگر بخوایم اون المنت بیرون نیاد و همونجا اعمال بشه  ایونت اندراپ اعمال میشه و کارو جمع میکنه
// Dragged => First (onDragStart) second (onDrag) thired (onDragend) = اول  که با یک المنت رو میکشیم درگ استارت میشه بعد درگ میشه بعد که ما ولش کنیم درگ بیل تموم میشه
// event.dataTransfer.getData('elemId') برو داخل ایونت دیتا ترنسفیر یک اتربیوت بگیر به نام الم ای دی
// event.dataTransfer.setData('elemId' , event.target.id) = برو داخل ایونش  از دیتا های ذخریه شده داخل دیتا ترنسفیر یک دیتا رو ست کن بزار یک اتربیوت با مقدار ایونت تارگیت ای دیش
// ondrop="mydropfunction" || = مثل درگبیل باید بگیم ان دراپش کجا باشه
// ondragover="mydragoverfunction()" || = کجا این درگ دراپ بشه انداخته بشه تموم بشه در اون المنت که میخایم درگ تموم بشه این سینتکس رو مینویسیم
// draggable="true" || = ما برای درگ کردن یک املان باید از این اتربیوت استفاده کنیم و مقدارشو تورو بزاریم که اجازه رو داده باشیم
// ondragstart="mydragstartfunction()" || = ما وقتی یک المن نگهش میداریم و میکشیم تو صحفه ما اون رو درگ کردیم و وقتی ما یک المانی رو درگ شو استارت میزنیم فانکشن مای درگ فانکشن استارت میشه
// <script src="./JavaST/medium.js " defer> = دیفر فرقش با انسر اینکه انسر همزان دانلود اجرار میکنه ولی انسر وقتی دانولد کامل شد اجرا میکنه و بهتره
// <script src="./JavaST/medium.js " async> = اگه بخوایم تگ لینک اسکریپت خودمون را داخل تگ هد یا کلا بالای تگ های دام قرار بدیم حالت عادی اجرار نمیشه و اگر ما از کلمه کلیدی انسر استفاده بکنیم
// audioElam.playBackRate = 2 || = برای تغییر سرعت یک اهنگ یک فایل صوتی توی اچ تی ام ال و توی جاوا اسکریپت از مقدار پراپرتی پلیبک ریت استفاده میشه به طور مثال ار مقدارشو دو بدیم سرعتش دوبرابر میشه
// audioElam.currentTime() = این هم مدت زمانکه از اهنگ گذشته رو نشان میده در خروجی
// audioElam.duration = من اگر بخام به مدت زمان کل یک فایل صوتی دسترسی داشته باشم از این پراپرتی استفاده میکنم و کلمه دیوریشن به معنای مدت زمان هست و خروجی دیوریشن بر حسب ثانیه هست به طور مثال اگ فایل صوتی ما دو دقیقه باشه خروجی صد و بیست ثانیه نشان خواهد داد
// audioElam.pause() = اگر بخوایم یک فایل صوتی که در اچ تی ام ال در حال پخش هست استوپ کنم از متدد استفاده میکنیم
// audioElam.play() = من اگر بخوام یک فایل صوتی اچ تی ام الی رو بخوام اجرا بشه پخش بشه
// No Contorol attribute = مل اگه یک فایل ویدیو یا یک اهنگ را بدون اتربیوت کنترل بزاریم قطعا اجرا نمیشه و باید تگ کنترل باشه ولی ما میتونیم با چند تا پراپرتیخودمان دستی اینک کار های کنترل رو انجام بدیم
// event.target.dataset.id , event.target.dataset.name , event.target.dataset.age = چند مثال برای دیتا ست
// event.target.dataset = سینتکس نوشتاری دیتا ست به این صورته
// دیتا ست فقط محدود به ایونت ها نمیشه و اگر بخوایم با ظاهر یکسان داشته باشیم که وقتی روش که روشون
// dataset = یک ابجیکتی هستش که داخلش تمام دیتا ست هایی که برای اون المنت ست کردیم داخلش وجود داره درکل دیتا داخلش یکسری پروپرتی هایی از دیتا ست هایی اون المنت داخلش قرار گرفته د یک ایونتی رخ میده اطلاعاتی درمورد همون المنت در دسترس داشته باشیم و به کمک همون ی سری کار یا فانکشن هایی رو انجام بدیم
// dataset / data- = زمانی استفاده میشه که که ما بخوایم یک اطلاعاتی رو موقع یک ایونت که کاربر انجام میده از وبسایت یا از المنت به اون دسترسی داشته باشیم
// scrollBy(0 , 100) = اسکرول بای برای ما حرکت میدا سایتو هر مکانی که بود 100 تا از لطاظ افقی میاد پایین
// window.scrollTo(0 , 0) = آسکرول تو به این معناس که برو به دوتا پوزیشن باید بهش بدیم اولی از سمت چپ پوزیشن ایکس هست یا خطی عمودی دومی مقدار وای هست افقی ستونی برو به موقیت فلان
// window صحقه ای که مادر اچ تی ام ال خروحی میبینیم
// $.documentElement.scrollLeft = وثتی داخل المنت های داکیومنت اسکرول راست به چپ اتفاق افتاد بیاد برای ما ...
// $.documentElement.scrollTop = وثتی داخل المنت های داکیومنت اسکرول بالا به پایینی اتفاق افتاد بیاد برای ما ...
// onscroll() = به محض اینکه ما اسکرول رو انجام میدیم فانکشن اسکرول اجرا میشه
// btn.focus() تابع ان فوکوس رو انجام میده رو بی تی ان
// btn.blur() تابع ان بلوم رو انجام میده رو بی تی ان
// ontachcancel = این تابع زمانی اعمال میشه که تاچ کردن بخاد کنسل بشه
// ontachend = وقتی با گوشی موبایل انگشتمون رو برمیداریم روی کی المنت ان تاچ معو اجرا میشه
// ontachmove = وقتی با گوشی موبایل انگشتمون رو میزاریم روی کی المنت ان تاچ معو اجرا میشه
// onselect = وقتی یک متنی سلکت بشه با موس یعنی با لفت کلیک انتخاب بکنیم یک کلمه یا جمله ای رو ما اون رو سلکت کردیم واگه ما سلکت انجام بدیم این فانکشن انجام میشه نکته این فانکشن فقط رو دوتا تگ اینپوت و تکست اریا اعمالمیشه نکته دوم این ایونت کنسلبلش فالس هست یعنی ما نمیتونیم پریوینت دیفالت روش اعمال کنیم
// function removeHandler () { boxElem.removeEventListener('mousemove', mouseMoveHandler) } = ریمو ایونت لیسنر برای ما ایونت موس معو رو حذف یا ریمو میکنه اول اینوت رو میگیره بعد فانکشن که میخاد ریمو بشه رو میگیره
// onmousemove = تقریبا عملکردش شبیه هاور در سی اس اس هست با این تفاوت که هر با که موس یک پیکسل به یکپیکسل حرکت میکنه اون فانکشن اجرا میشه
// onDOMContentLoaded = فقط وقتی تمام المان های داخل بادی لود بشن این تابع اجرا میشه
// onload = وقتی تمام المان های داخل اچ تی ام ال تمام لینک های سی اس اس تمام فایل های جاوا اسکریپت لود بشن این تابع اجرا میشه
// console.log(event.pageY); محور ایکس یا افقی را در کنسول نمایش میدهد
// console.log(event.pageX); محور ایکس یا عمودی را در کنسول نمایش میدهد
// textArea.addEventListener('paste' , function(event){ event.preventDefault() }) = در اینجا ما نمیازم کاربر متن خودشو پیست یا جایگذاری کند
// textArea.addEventListener('cut' , function(event){ event.preventDefault() }) = در اینجا ما نمیازم کاربر متن مارو کات کند
// textArea.addEventListener('copy' , function(event){ event.preventDefault() }) = در اینجا ما نمیازم کاربر متن مارو کپی کند
// h1Elman.remove() = از اسمش مشخصه تگ اچ وان رو کلا پاک میکنه
// console.log(list.lastElementChild.style.color = '#f00'); = برای ما اخرین فرزند المان رو از لیست انتخاب میکنه و از استایلاش رنگشو قرمز قرار میده
// console.log(list.lastElementChild); = این میاد اخرین فرزند المان رو از لیست ما در کنسول نمایش میده
// console.log(list.firstElementChild); = این میاد اولین فرزند المان رو از لیست ما در کنسول نمایش میده
// console.log(list.lastChild); = این میاد اخرین فرزند نود رو از لیست ما نمایش میده
// console.log(list.firstChild); = این میاد اولین فرزند نود رو از لیست ما نمایش میده
// console.log(list.hasChildNodes()); = برای ما یک نوع بولین برمیگردونه که میگه ایا این لیست ما فرزنده نود داره یا نه
// console.log(list.hasChildNodes); = اینجا در کنسول تمام نود های لیست رو در کنسول نشان میدهد تمام اینتر ها تمام کامنت ها تمام المان ها و در کل تمام نود ها
// console.log(list.children[2]); برای ما ایندکس دوم را نشون میده در کنسول
// console.log(list.children); = به معنا بچه ها هست که میاد شبه آرایه بودکه میاد تمام فرزندان چایلد ها بچه های این لیستواسمون لاگ میگیره که در قالب یک آرایه برگردونده و توی این بخش من
// list.childElementCount = تعداد فرزند های مستقیم لیست رو نشون میده
// h3Elam.previousSibling = این دقیقا مثل مثال پایینه ولی برای قبلی سدق میکنه
// h3Elam.nextSibling = این میره نود بعدی رو میخونه از تگ اچ سه میخونه واگر اینتر باشه که قطعا اینتر هست نود اینتر رو برمیگردونه
// h3Elam.nextElementSibling.nextElementSibling || = برای دسترسی به دوتا المان بعدتر از این متد استفاده میکنیم و بیشتر
// h3Elam.nextElementSibling || = برای دسترسی به المان بعدی از این متدد استفاده میکنیم
// h3Elam.previousElementSibling.previousElementSibling || = برای دسترسی به دوتا المان قبلتر از این متد استفاده میکنیم و بیشتر
// h3Elam.previousElementSibling || = برای دسترسی به المان قبلی از این متدد استفاده میکنیم که خروجی تگ اچ تو هست
// h1Elem.parentNode | h1Elman.parentElement |||| برای دسترسی به پرنت اچ وان المنت میتوانیم از پرنت نود استفاده کنیم که در خروجی تمام پرنت اون المنت رو نشون میده
// document node type = 9
// comment node type = 8
// text node type = 3
// attribute node type = 2
// h1Elam.nodeType = 1 == elements
// h1Elam.nodeName = h1
// تمام عنصر های ما در اچ تی ام ال یک نود هستن به طور مثال یک تگ اچ وان یک نوداز نوع المنت هستن
//  event.preventDefault() || = به هیچ عنوان نمیتوانه تمام المان هارو از کار بندازه فقط اونایی که کنسلبل شون تورو هست
// event.cancelable = به این معنا هست که معنای منصرف شدن به معنای انجام ندادن اگر مقدارش در ایونت فالس بوده یعنی ما نمیتونیم جلوش رو بگیریم و اگر تورو بود یعنی ما میتوانیم جلوش رو بگیریم
// ما اگر بخواهیم یک  عملیاتی یک موضوعی رو با حالت دیفالتش پیش نره با حالت دیفالتش اجرا نشه ما بخواهیم اون رو کنترل کنیم اول از دیفالتش جلوگیری میکنمی و سپس کار هایی که میخایم انجام بدیم رو انجام میدیم
//  event.preventDefault() = به کمک ای ن متدد میتوانیم رفتار دیفالت المنت هارو کنترل کنیم به طور مثال  تگ ای وقتی روش یک بار ان کلیک میشه میره لینک رو میخونه ولی اگه ما این متدد رو ست بکنیم به ایونتش ما میتونیم کنترل بکنیم با خط کد های بعدی که چیکار بکنه
//  console.log(event.pointerType); == تایپش چی بود
//  console.log(event.pointerType); ==  با موس کلید شده یا با موس
//  console.log(event.shiftKey); ==  شیفتکی کی میاد ایونت رو برسی میکنه اگه هنگام کلیک شیفت هم نگه داده میشد خروجی تورو خو.اهد داد
//  console.log(event.ctrlKey); == کنترلکی کی میاد ایونت رو برسی میکنه اگه هنگام کلیک کنترل هم نگه داده میشد خروجی تورو خو.اهد داد
//  console.log(event.clientY); ==  هنگام کلید کجای دکمه در محور وای
//  console.log(event.clientX); == هنگام کلید کجای دکمه در محور ایکس
//  console.log(event.altKey); == الت کی میاد ایونت رو برسی میکنه اگه هنگام کلیک الت هم نگه داده میشد خروجی تورو خو.اهد داد
//  console.log(event.target); == اطلاعات مربوط به اچ تی ام ال هست که داخل تاگت ذخیره میشه
// btn.addEventListener('click', function (event){ console.log(event); }) // تمام اطلاعات مربوط به کلیدی که ما کردیم و تمام اطلاعات بتن رو میده چند مثال بالا میزنم خروجی ایونت یک ابجکت هست
// .addEventListener("submit" , ) = سابمیت مواقعی که فورم داشته باشیم وقتی که رو اینپوت یا باتن با تایپ سابمیت کلید کنیم اطلاعات ما میرن سمت سرور
// buttShowlog.onclick = clicked || = در این روش ما فانکشن رو با انکلیک به باتونشو لاگ اضافه کردیم
// برای تعریف و انحام یک فانکشن روش های مختلفی هست که در جلسه 33 مثال هاشو زدم
// void به این معناس که هیچ چیز را ریترن نمیکند در خروجی
// input.hasAttribute("value") = داخل این خط میاد داخل متغیر اینپوت برسی میکنه ایا اتربیوت ولیو داخل المان محتوای  اچ تی املیش هست یا نه و فقط تورو یا فالس برمیگردونه
// ما میتوانیم به تمام اتربیوت های از پیش تعیین شده اچ تی ام ال با روش دات دسترسی داشته باشیم و ام برای دسترسی به کلاس فقط از دات کلاس استفاده نمیشه از کلاس نیم استفاده میشه
// let obj = { \n  id: 1, name: "ali", } \n obj.age = 22; \n console.log(obj) // ما میتوانیم مثل مثال روبهرو یک پراپرتی به اسم ایج اضافه کردیم
// inputElem.location = "mashhad"; در اینحا نمیتوانیم با روش گت اتربیوت مقدار لوکیشن رو نمایش بدیم چون داخل اچ تی ام ال نیست اما در روش دات لوکیشن میشود
// تمامی مغادیر و اتربیوت هایی که توی صحفه ای اچ تی ام ال داخل خود تگ نوشته میشن هموشن بدون استثنا با روش گت اتربیوت قابل دسترسی هستند و اصتلاحن بهشون میگن اتربیوت
// (.getAttribute('location')) روش دوم (.location) اگر قبل نوشتن این کد ها به یک متغیر  مقدار لوکیشن رو وارد کنیم و بعد فروجی بگیرم در روش دات خروجی قابل مشاهده است ولی در گت اتربیوت در اچ تی ام ال اگر بهش مقدار لوکیشن رو ندیم ارور خواهد داد
// (.getAttribute('location')) روش دوم (.location) اما اگر ما یک اتربیوتی که خودمان به صورت دلخواه به یک المان اضافه میکنیم با دات اجرا نمیشه و خطا یده اما در روش گت اتربیوت ما میتوانیم حتی به اتربیوت های دلخواه دسترسی داشته باشیم
// (.getAttribute('class')) روش دوم (.className) ما میتوانیم به این دوروش کلاس یک المنت رو بگیرم و در اینجا فرقی ندارند
// .toFixed(2) = اگه مقدار اعشار خروجی بیشتر از دوتا اعشار داشت بقیه اعداد بعداز دوتا اعشار رو حذف کن
// تفاوت بعدی کی اپ کی داعون و کیپرس اینکه کی داعن از همه سریع تر اعمال میشه چون کی داعون میگه وقتی کلید میره پایین یعنی داعن شده کی اپ وقتی کلید میاد بالا و کی پرس هم وقتی کلمه تایپ شد
// append vs appendchild || و تفاوت اول اپند و اپند چایلد (اپند چایلد نمیتونه چیزی بجز تگ اچ تی ام ال اضافه کنه ولی اپند میتونه متن استرینگی اضافه کنه.) (در اپند چایلد نمیتانید بیشتر از یک تگ اضافه کرد ) (اگه ما ریزالت اپند رو ذخیره کنیم و خروجی بگیریم اندیفایند نمایش میده ولی اپند چالید در خروجی المان رو نشان خواهد داد)
// onchange="" \|/ ان پنج میگه مقدار که عوض شد یک فاکشنی رو انجام بده
// برای دسترسی به تگ بادی کافیه بنویسیم $.body نیازی به کلاس وایدی هم نیس
// .classList.toggle('') = اسم کلاس رو برسی میکنه اگه بود داخل تگ حذف میکنه اگه نبود اضافه میکنه
// .classList.remove('') = داحل پرانتز از ما اسم کلاسی که داخل تگ هست میگیره و از اون تگ این کلاس رو حدف میکنه
// .classList.add('') = اینجا داخل پرانتز از ما اسم یک کلاسی که میخایم به یک تگ اضافه کنیم میگیره و هنگام اجرای فانکشن اضافه میکنه
// در مثال خط پایین اگر بجای فانکشن اسم یک فانکشن رو خاستیم بنویسیم هیچوقت نباید جلوش پرانتز باز و بسته جلوی اسم پرانتز بنویسیم چون در خروجی به مشکل خواهید خورد
// .addEventListener ('click' , function() { console.log("Click") }) || = اد ایون لیسنر میاد یک ایونت رو انجام میده ولی دیگه نمخاد داخل اچ تی ام ال بنویسیم ان کلیک بجاش اسم متغیر رو مینویسیم جلو اد ایون لیسنر رو مینویسیم و پرانتز باز میکنیم مقدار اول نوع اینوت رو مینویسیم به طور مثال کلیک بعد مقدار دوم فانکشن یا اسم فانکشن مینویسیم
// ondblclick = دقیقا عملکرد ان کلید منتها با دابل کلیک هست
// let $ = document || = برای راحت تر مد زدن بجای کلمه داکیومنت از حرف دالر استفاده میشه
// onfocus & onblur = به طور مثال وقتی روی یک اینپوت ماوارد یک اینپوت میشیم ما اونو ان فوکوس کردیم و وقتی خارج میشیم اونو ان بلور کردیم
// KeyPrees() vs KeyDawn = یکی از تفاوت این دوتا کی پرس تمام کلید های کیبورد رو شامل میشه اما کی داعن فقط اعداد و کلمات شامل میشه
// KeyPrees() KeyDawn() KeyUp() = به ازای هر تایپ ما میکنیم یک عمل کی پرس انجام میدیم این نوع سینتسک در اچ تی ام ال هست و در اسکریپت به صورت فاکنشن هست
// در خط پایین ما در باتون یک اتربیوت ان کلید تعریف کردیم که فانکشن کلیک فانک رو مقدار دهی کردیم در جاوا اسکریپت فانکشن گلیک فانک را اجرا کردیم فتم وقتی کلید شد کد های داخل اکلاد رو برای ای دی تایتل اجرا کن
// <html> <button onclick="clickfun"> click me </button> <scripts> let h1Elman = document.getElementById('title') \n function clickfunc() { \n h1 Elman.style.textAlign = 'center' \n h1Elman.style.fontSize = '48px' \n h1Elman.style.marginTop = '2.5rem' \n h1Elman.style.fontWeight = '800' \n h1Elman.style.fontFamily = "Arial Narrow" \n } </scripts> </html>
// ulElman.append(otherLiItem) | ulElman.appendChild(newLiItem) ||| =  میاد داخل یو ال المن که یک یو ال هست بهش اپند بکن  اضافه بکن چیو مقدار اودر ال ای اتیم رو و فعلا فرق اپند و فرق اپند چایلد رو نمیدونم
// document.createElement('div') = در داکیومنت یک المنت بساز المن چی المن دیو
// input.value = "Just Russia And a.t" | یک متغیری به نام اینپوت تعریف شده و ولیو داخل این رو به مقدار فقط روسیه تغییر بده
// console.log(liItem[2].innerHTML); & console.log(liItem[2].innerText); & console.log(liItem[0].textContent); = تکست کانتنت و اینتر اچ تی ام ال و اینر اچ تی ام ال میان متن داخل تگ رو نشان میدن نکته : این سه فقط برای تگ پی و اسپن و اچ وان تا شش هست ولی برای تگ هایی مثل اینپوت و سلکت اعمال نمیشه
// h1Elman.style.color = "#eee" متغیری که تعریف شده با اسم اچ وان یلمن رو انتخاب کن و میخام بهش استایل سی اس اس بدم چه استایلی رنگ یا کالور رنگ خاکستری
// .setAttribute('class', "js-text") = به المان انتخاب شده اتربیوت ست کن اتربیون کلاس رو اضافه کن با اسم جی اس تکست
// .getAttribute('style') = از المان انتخاب سده اتربیوتی رو بگیر کدوم اتربیوت ؟ اتربیوت استایل
// null بع معنای خالی است
// liItem[2] از تو ارایه ال ای ایتم ایندکس دوم انتخاب کن
// document.querySelectorAll('.item') = کوری سلکتور الل هم دقیقا مثل پایینی هست ولی همینطور که از اسمش پیداس این میاد تمام کلاس هایی اتیم رو انتخاب میکنه و داخل یک ارایه ذخیره میکنه
// document.querySelector('.title') = درست مثل سی اس اس وقتی وقتی میام المان هارو سلکت کنیم کوری سلکتور هم به این شکله میگم از داخل راکیومنت انتخاب کن یک کلاسی رو با اسم تاتیل نکته میشه ای دی هم به این صورت انتخاب کنیم
// document.getElementsByTagName('li') = از داخل داکیومنتم بیا المنت هایی رو بگیر که اسم تگشون ال ای باشه و داخل یک ارایه ذخیره کن
// document.getElementsByClassName('item') = از توی داکیومنت کلاس هایی رو به اسم ایتم رو بگیر و داخل یک ارایه دخیره کن
// document.getElmentById("title") =  میگه از تو داکیومنت بگیر المنتی رو با ای دیه داخل اکلاده تایتل ای دی فقط میشه یک المنت رو فقط انتخاب کرد
// document = تمام تگ های اچ تی ام ال فرزند اچ تی ام ال هستن و اچ تی ام ال فرزند داکیومنت

// جلسه 149

// let btn = $.querySelector("button")

// window.addEventListener("online", function(){
//   btn.innerHTML = "onLine"
//   btn.className = "online"

//   console.log("your is online");
// })
// window.addEventListener("offline", function(){
//   btn.innerHTML = "offLine"
//   btn.className = "offline"

//   console.log("your is offline");
// })

// جلسه 148

// let btn = $.querySelector("button")

// btn.addEventListener("click", function(){
//   location.reload()
// })

// 147 حلسه 145 146

// let shoes = [
//   {id: 1, name: "SPORT SHOE",src: "./Assets/245Shoesblue.png" ,price: 53},
//   {id: 2, name: "WOOMAN SHOE",src: "./Assets/245ShoesGreen.png" ,price: 87},
//   {id: 3, name: "BOOTS",src: "./Assets/245ShoesYellow.png" ,price: 34},
// ]

// let mainContiner = $.querySelector(".all_produckt")
// let btn = $.querySelectorAll("seeMore")

// shoes.forEach(function(shoe){
//   mainContiner.insertAdjacentHTML("beforeend", '<div class="produckt"><h1> ' + shoe.name + ' </h1><p>lorem ipsum or lipsum as it is sometimes knows</p><div class="produckt__image"><img src="' + shoe.src + '" alt="Shoes"></div><div class="footer"><h2>' + shoe.price + '</h2><a href="ShoesProject2.html?id=' + shoe.id + '" class="seeMore">see more</a></div></div>')
// })

// جلسه 144 

// let h1Elam = $.querySelector("h1")

// let users = [
//   {id: 1, name: "mohammad", age: 18},
//   {id: 2, name: "reza", age: 16},
//   {id: 3, name: "ali", age: 21},
//   {id: 4, name: "erfan", age: 17},
//   {id: 5, name: "hosien", age: 20},
//   {id: 6, name: "amir", age: 19},
//   {id: 7, name: "amin", age: 22},
//   {id: 8, name: "babak", age: 25},
//   {id: 9, name: "hasan", age: 23},
// ]

// let locationSearch = location.search

// let locatioIdResult = location.search.slice(1).split("=")[1] // bad way
// console.log(locatioIdResult);

// let locationSearchParams = new URLSearchParams(locationSearch)
// let userIdPramas = locationSearchParams.get("id")

// let resultTab = users.find(function (user){
//   return user.id === userIdPramas
// })

// if (resultTab){
//   h1Elam.innerHTML = "User Name: " + resultTab.name + " | User Age: " + resultTab.age
// } else {
//   h1Elam.innerHTML = "User Name and age is not defind : |"
// }

// جلسه 143

// location.href
// location.hash
// location.search
// location.pathname
// location.hostname
// location.protocol

// جلسه 142

// console.log(history.length);

// جلسه 141 

// console.log(screen.availWidth);
// console.log(screen.width);
// console.log(screen.availHeight);
// console.log(screen.height);

// جلسه 140

// let scrollCostum = $.querySelector(".scroll");

// window.addEventListener('scroll', function(){

//   let scrollTop = window.scrollY
//   let documentHeight = body.clientHeight
//   let windowHeight = window.innerHeight
//   let scrollParsent = scrollTop / (documentHeight - windowHeight)
//   let result = Math.round(scrollParsent * 100)
//   console.log(result);
   
//   scrollCostum.style.width = result + '%';
// })

// جلسه 139

// console.log("document width: " + window.innerWidth + "px | window width: " + window.outerWidth + "px");
// console.log("document height: " + window.innerHeight + "px | window height: " + window.outerHeight + "px");
// console.log("margin top from discktop: " + window.screenTop + "px | margin left from dickstop: " + window.screenLeft + "px");

// let windowChangewidth = window.innerWidth

// function showWidth() {
//   console.log("object");
// }

// جلسه 138

// window.alert("alert notif form bowser window")
// let h1Elam = window.document.querySelector("h1")
// window.console.log(h1Elam)
// window.console.log("This is log from BOM")

// جلسه 136

// let num1 = 2
// let num2 = 3

// console.log(num1 + num2);
// console.error("dataisnotdefind");
// console.info("api reponsive statues is 404");
// console.warn("api reponsive statues is 404");
// console.assert(num1 + num2 < 10, "is false error");

// let user = {
//   id: 1,
//   username: "amir",
//   password: "amir2004",
//   age: 19,
// }

// produckt = [
//   {id:1 , name: "laptop", price: 20000000},
//   {id:2 , name: "phone", price: 20000000},
//   {id:3 , name: "ssd hard", price: 2000000},
//   {id:4 , name: "hdd hard", price: 500000},
//   {id:5 , name: "cool pad", price: 200000},
// ]

// console.table(produckt);
// console.time("for loop");

// console.timeEnd("for loop");

// for (let i = 0 ; i < 1000000 ; i++){

// }

// console.log("قبل از گروه - ابتدا");

// console.group("first logs");
// console.log("first log in gp");
// console.log("second log in gp");
// console.log("thired log in gp");
// console.groupEnd("first log");

// جلسه135 134

// let usersList = $.querySelector("p")

// let usersArray = [
//   "amin",
//   "amir",
//   "ali",
//   "reza",
//   "babak",
//   "mohsen",
//   "mohammad"
// ]

// let newUserLi = null

// let usersfragment = $.createDocumentFragment()

// usersArray.forEach(function (user){
//   newUserLi = $.createElement("li")
//   newUserLi.innerHTML = user

//   usersfragment.append(newUserLi)
// })
// usersList.appendChild(usersfragment)

// جلسه 133

// let usersArr = [12 , 16 , 17 , 18 , 19 , 20 , 21 , 22 , 23 , 24]
// let userObj  = {
//   id: 1,
//   name: "mohammadniko",
//   family: "gamerpromaxplus",
//   waepon: "ak47"
// }

// console.log(usersArr);
// console.log("before" , userObj);

// delete usersArr[8]
// delete userObj.family

// console.log(usersArr);
// console.log("After" , userObj);

// جلسه132 131

// let divElam = $.querySelector('.box')

// divElam.insertAdjacentHTML("afterbegin" , "<p class='mohammad'>this is after begin</p>")
// divElam.insertAdjacentHTML("beforebegin" , "<p class='mohammad'>this is before begin</p>")
// divElam.insertAdjacentHTML("afterend" , "<p class='mohammad'>this is after end</p>")
// divElam.insertAdjacentHTML("beforeend" , "<p class='mohammad'>this is before end</p>")

// جلسه 130

// let result1 = $.getElementById("result1");
// let result2 = $.getElementById("result2");
// let result3 = $.getElementById("result3");
// let result4 = $.getElementById("result4");
// let bottom = $.querySelector("img");
// bottom.style.display = "none";
// result4.innerHTML = ""

// function onmousemoveHandler(){
//   result1.innerHTML = "Is Mouse move"
// }
// function onmouseenterHandler(){
//   result3.innerHTML = "Is Mouse Enter"
// }
// function onmouseleaveHandler(){
//   result3.innerHTML = "Is Mouse leave"
// }
// function onmousedownHandler(){
//   result2.innerHTML = "Is Mouse Dawn"
// }
// function onmouseupHandler(){
//   result2.innerHTML = "Is Mouse up"
// }
// function onmouseoverHandler(){
//   result4.innerHTML = "Is Mouse over"
// }
// function onmouseoutHandler(){
//   result4.innerHTML = "Is Mouse out"
// }
// function onmousewhileHandler(){
//   result4.innerHTML = "Is Mouse Dawn"
// }

// body.addEventListener("mousemove" , function(event){
//   bottom.style.display = "block";
//   bottom.style.top = event.pageY + 5 + "px"
//   bottom.style.left = event.pageX + 5 + "px"
//   console.log(event.pageX + "px - " + event.pageY + "px" );
// })

// جلسه 124 125 126 127 128 129

let allProduckt = [
  {id: 1,name: "Coffe"   ,src: "./Assets/225image6.png" ,price:  6.99,count: 1},
  {id: 2,name: "T-Shrit" ,src: "./Assets/225image5.png" ,price: 19.99,count: 1},
  {id: 3,name: "Album 4" ,src: "./Assets/225image4.png" ,price: 19.99,count: 1},
  {id: 4,name: "Album 3" ,src: "./Assets/225image3.png" ,price:  9.99,count: 1},
  {id: 5,name: "Album 2" ,src: "./Assets/225image2.png" ,price: 14.99,count: 1},
  {id: 6,name: "Album 1" ,src: "./Assets/225image1.png" ,price: 12.99,count: 1},
]

let userBasket = []

let input = $.querySelector("input")
let cartTotalPrice = $.querySelector(".result")
let resultCent = $.querySelector(".result_cent")
let continerProduckts = $.querySelector("main")
let basketProductContiner = $.querySelector(".soratHasab")
let removeAllProduckt = $.querySelector(".purch")

allProduckt.forEach(function(product){
  continerProduckts.insertAdjacentHTML("afterbegin" , "<div class='album'><h3 class='produckt_name'>" + product.name + "</h3><img class='main_image' src='" + product.src + "'><div class='btns_prices'><p class='price'>" + product.price + "</p><button class='btn' onclick='addproducktobasketArray(" + product.id + ")'>add to cart</button></div></div>")
})

function addproducktobasketArray(productId){
let mainProduckt = allProduckt.find(function(product){
  return product.id === productId
})

userBasket.push(mainProduckt)
calcTotalPrices(userBasket)
basketProductsGenerator(userBasket)
           
}

let usersfragment = $.createDocumentFragment()

function basketProductsGenerator (userBasketArray){

  basketProductContiner.innerHTML = ""
  userBasketArray.forEach(function(produckt){
    let itemsDivion = $.createElement("div")
    itemsDivion.classList.add("item_buy")
 
    let itemsDivionImage = $.createElement("img")
    itemsDivionImage.setAttribute('src' , produckt.src)

    let itemsDivionTitle = $.createElement("p")
    itemsDivionTitle.innerHTML = produckt.name

    itemsDivion.append(itemsDivionImage , itemsDivionTitle)

    let pricesDivion = $.createElement("div")
    pricesDivion.classList.add("price_buy")

    let pricesDivionCost = $.createElement("p")
    pricesDivionCost.classList.add("price")
    pricesDivionCost.innerHTML = produckt.price 

    pricesDivion.append(pricesDivionCost)

    let quantityDivion = $.createElement("div")
    quantityDivion.classList.add("quantity_buy")

    let quantityDivionInput = $.createElement("input")
    quantityDivionInput.value = produckt.count
    quantityDivionInput.setAttribute("type", "number")
    quantityDivionInput.addEventListener("input" , function(){
      if (quantityDivionInput.value < 1){
        quantityDivionInput.value = 1
      } else if (quantityDivionInput.value > 99){
        quantityDivionInput.value = 1
      }
      updateProducktCunt(produckt.id , quantityDivionInput.value)
    })

    let quantityDivionBtn = $.createElement("button")
    quantityDivionBtn.classList.add("remove_btn")
    quantityDivionBtn.innerHTML = "REMOVE"
    quantityDivionBtn.addEventListener("click", function(){
      removeProductFromBasket(produckt.id)
    })

    quantityDivion.append(quantityDivionInput , quantityDivionBtn)
    let divitions = $.createElement("div")
    divitions.classList.add("buyed_produckt")
    divitions.append(itemsDivion , pricesDivion , quantityDivion)
    usersfragment.append(divitions)
    // basketProductContiner.insertAdjacentHTML('afterbegin' , '<div class="buyed_produckt"><div class="item_buy"><img src="' + produckt.src + '"><p>' + produckt.name + '</p></div><div class="price_buy"><p class="price">' + produckt.price  + '</p></div><div class="quantity_buy"><input type="number" value="' + produckt.count + '"><button class="remove_btn" onclick>REMOVE</button></div></div>')
  })
  basketProductContiner.append(usersfragment)
}

function removeProductFromBasket(productId){

userBasket = userBasket.filter(function(product){
  return product.id !== productId
})

basketProductsGenerator(userBasket)
calcTotalPrices(userBasket)
}

removeAllProduckt.addEventListener("click", function(){
userBasket = []
basketProductsGenerator(userBasket)
cartTotalPrice.innerHTML = 0
})

function calcTotalPrices(userBasketArray){
  let totalPriceValue = 0
  userBasketArray.forEach(function (product){
    totalPriceValue += product.count * product.price
  })
  cartTotalPrice.innerHTML = (totalPriceValue).toFixed(2)
}

function updateProducktCunt(productId , newCount){
  if (newCount < 1){
    newCount = 1
  } else if (newCount > 99){
    newCount = 1
  }

userBasket.forEach(function(product){
  if (product.id === productId){
    product.count = newCount 
  }
})
calcTotalPrices(userBasket)
}

body.addEventListener("keydown" , function(event){
  if (event.keyCode === 46){
    userBasket = []
    basketProductsGenerator(userBasket)
    cartTotalPrice.innerHTML = 0
  }
})

// 123 , 122 , جلسه 120 و 121

// let usersArray = [
//   {id: 1 ,  name: "mohamamd" , family: "niko"},
//   {id: 2 ,  name: "reza" ,     family: "zendadel"},
//   {id: 5 ,  name: "amir" ,     family: "alfa"},
//   {id: 4 ,  name: "mahdi" ,    family: "gran"},
//   {id: 5 ,  name: "ali" ,      family: "TNT"},

//   {id: 6 ,  name: "hosin" ,    family: "ops"},
//   {id: 7 ,  name: "mohamamd" , family: "amin"},
//   {id: 8 ,  name: "erfan" ,    family: "mma"},
//   {id: 9 ,  name: "reza" ,     family: "tmi"},
//   {id: 10 , name: "kilo" ,     family: "og"},

//   {id: 11 , name: "nikolay" ,  family: "saz"},
//   {id: 12 , name: "saeed" ,    family: "import"},
//   {id: 13 , name: "hamid" ,    family: "abadi"},
//   {id: 14 , name: "reza" ,     family: "abadi"},
//   {id: 15 , name: "sajad" ,    family: "wallod"},
  
//   {id: 16 , name: "amir" ,     family: "sead"},
//   {id: 17 , name: "marteza" ,  family: "mohammadi"},
//   {id: 18 , name: "mostafa" ,  family: "kk1"},
//   {id: 19 , name: "ahkan" ,    family: "joker"},
//   {id: 20 , name: "khosro" ,   family: "bigh"},
  
//   {id: 21 , name: "brain" ,    family: "socket"},
//   {id: 22 , name: "abolfazl", family: "841"},
//   {id: 23 , name: "abas" ,     family: "sabit"},
//   {id: 24 , name: "dome" ,     family: "adoms"},
// ];

// let newDivElam = $.createElement("div") 
// let newPElam = $.createElement("p")
// let footer = $.querySelector("footer")
// let main = $.querySelector("main")

// let currentPage = 1;
// let rows = 5;


// function displayShows(usersArray , main , rows , currentPage){
//   main.innerHTML = ""
  
//   let endingIndex = currentPage * rows
//   let startingIndex = endingIndex - rows

//   let paginated = usersArray.slice(startingIndex, endingIndex)

//   paginated.forEach(function(page){
//       let userElement = $.createElement("div")
//       let userElementName = $.createElement("p")
      
//       userElementName.innerHTML = page.name + " " + page.family
//       userElement.append(userElementName)
//       main.appendChild(userElement)


//   })
// }

// function setupPegination(usersArray , footer , rows) {
//   footer.innerHTML = ""

//   let pageCunt = Math.ceil(usersArray.length / rows)

//   for(let i = 1 ; i < pageCunt + 1; i++) {
//       let btn = paginationBTNGenrator(i, usersArray)
//       footer.appendChild(btn)
//   }
// }

// function paginationBTNGenrator(page , usersArray){
//   let button = $.createElement("button")
//   button.innerHTML = page

//   if (page === currentPage){
//     button.classList.add("active")
//   }

//   button.addEventListener("click", function(){
//     currentPage = page
//     displayShows(usersArray , main , rows , currentPage)

//     let prevPage = $.querySelector("button.active")
//     prevPage.classList.remove("active")
//     button.classList.add("active")

//   })

//   return button
// }
// displayShows(usersArray , main , rows , currentPage)
// setupPegination(usersArray , footer , rows) 

// جلسه 119

// window.addEventListener('resize', function(){
//   console.log(" width: " + window.innerWidth + "\n hiegh: " + window.innerHeight);

//   if (window.innerWidth < 700){
//     let film119section = $.querySelector('.film119')
//     let divitions = $.querySelectorAll('div')
//     film119section.style.cssText = "flex-direction: column; width: 100vw; height: 50rem; gap: 2rem"
//     divitions.forEach(function(divition){
//       divition.style.width = "100%"
//     })
//   }
// })

// جلسه 117 118

// let btn = $.querySelector("button")
// let ipt = $.querySelector("input")
// let footer = $.querySelector("footer")
// loremTitle = [
//   "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto perspiciatis magnam sint eligendi perferendis laboriosam dolorum voluptates, consectetur nostrum excepturi dolore beatae ipsum culpa ea labore molestiae dolores aut aperiam. lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, dolorum similique expedita in,aliquid excepturi fugiat assumenda hic repudiandae illo ipsam non. Facilis quasi libero adipisci? Assumenda recusandae perferendis asperiores? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis suscipit unde soluta nemo accusamus, nulla cum quis, tempora earum praesentium quibusdam ducimus vitae possimus officia facere,accusantium eos ad ut? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab officiis, inventore rerum iusto nam ea cupiditate nisi in quae accusantium exercitationem dolorem maxime magni, sint nobis. Eligendi quas quod mollitia?",
//   "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto perspiciatis magnam sint eligendi perferendis laboriosam dolorum voluptates, consectetur nostrum excepturi dolore beatae ipsum culpa ea labore molestiae dolores aut aperiam. lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, dolorum similique expedita in,aliquid excepturi fugiat assumenda hic repudiandae illo ipsam non. Facilis quasi libero adipisci? Assumenda recusandae perferendis asperiores? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis suscipit unde soluta nemo accusamus, nulla cum quis, tempora earum",
//   "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto perspiciatis magnam sint eligendi perferendis laboriosam dolorum voluptates, consectetur nostrum excepturi dolore beatae ipsum culpa ea labore molestiae dolores aut aperiam. lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, dolorum similique",
// ]

// function makelorem(){
//  footer.innerHTML = ""

//     let iptValue = ipt.value
//     let randomNum = Math.floor(Math.random() * loremTitle.length)

//     if (iptValue < 0 || iptValue > 99|| iptValue === ""){
//       footer.innerHTML = loremTitle[randomNum] 
//     } else {
//       let sliceArray = loremTitle.slice(0, iptValue)

//       let finalTextArray = sliceArray.map(function (item){
//         return "<p>" + item + "</p>"
//       }).join("")
//       footer.innerHTML = finalTextArray
//       console.log(finalTextArray);
//     }
//   iptValue = ""
// }
// btn.addEventListener("click", makelorem)
// body.addEventListener("keydown", function(event){
//   if (event.keyCode === 13){
//     makelorem()
//   } else if (event.keyCode === 27){
//     footer.innerHTML = ""
//   } else if (event.keyCode === 32){
//     makelorem()
//   }
// })

// جلسه 115 116

// let hour = $.querySelector(".hour")
// let min = $.querySelector(".min")
// let sec = $.querySelector(".sec")

// setInterval(function(){
//   let time = new Date()
// hour.innerHTML = time.getHours()
// min.innerHTML = time.getMinutes()
//   sec.innerHTML = time.getSeconds()

//   if (hour.innerHTML < 10){
// hour.innerHTML = "0" + hour.innerHTML
//   }
//   if (min.innerHTML < 10){
// min.innerHTML = "0" + min.innerHTML
//   }
//   if (sec.innerHTML < 10){
// sec.innerHTML = "0" + sec.innerHTML
//   }
// },1000)

// جلسه 114

// let resultDay = $.getElementById("resultDay");
// let resultHour = $.getElementById("resultHour");
// let resultMin = $.getElementById("resultMin");
// let resultSec = $.getElementById("resultSec");
// let pElam = $.querySelector("p");
// let button = $.querySelector("button");
// let myTime = new Date()
// let monthes = ["dec" , "may" , "oct" , "nov" , "dec"]

// console.log(myTime.getDay);
// setInterval(function() {

//   button.addEventListener("click", function(){
//     pElam.style.display = "block"
//     setTimeout(function(){
//       pElam.style.display = "none"
//     },1000)
//   })

// resultDay.innerHTML = myTime.getDay()
// resultHour.innerHTML = myTime.getHours()
// resultMin.innerHTML = myTime.getMinutes()
// resultSec.innerHTML = myTime.getSeconds()
// },1000)

// جلسه112 113 110 111

// let nameBookInput = $.getElementById('nameBook')
// let authorInput = $.getElementById('author')
// let yaerInput = $.getElementById('yaer')
// let btn = $.getElementById('btn')
// let tableBody = $.querySelector('tbody')
// let table = $.querySelector('table')

// let bookArray = []

// function removeHandler(){
//   nameBookInput.value = ""
//   authorInput.value = ""
//   yaerInput.value = ""
// }

// function addHandler(){
//   if (nameBookInput.value.trim()){
//     if (authorInput.value.trim()){
//       if (yaerInput.value.trim()){
//         let mainResult = $.createElement("tr")
        
//         let nameBook = $.createElement("th")
//         nameBook.classList.add("nameBook")
//         nameBook.innerHTML = nameBookInput.value
       
//         let author = $.createElement("th")
//         author.classList.add("author")
//         author.innerHTML = authorInput.value

//         let yaer = $.createElement("th")
//         yaer.classList.add("yaer")
//         if (yaerInput.value > 1923 ){
//           if (yaerInput.value < 2025){
//             yaer.innerHTML = yaerInput.value
//           } else {
//                     yaer.innerHTML = "book from future"
//           } 
//         } else {
//           yaer.innerHTML = "book from past"         
//         }
//         table.style.display = "revert-layer"      

//         newBookObj = {
//           id: bookArray.length + 1,
//           bookName: nameBook.innerHTML,
//           authorName: author.innerHTML,
//           yearBook: yaer.innerHTML,
//         }
//         bookArray.push(newBookObj)
//         console.log(bookArray);
//         setLocalStorage(bookArray)

//          mainResult.append(nameBook , author , yaer)
//          tableBody.append(mainResult)
//          nameBookInput.focus()
         
//          removeHandler()
//   }}}
// }

// function setLocalStorage(bookList){
//   localStorage.setItem("bookList", JSON.stringify(bookList))
// }

// window.onload = function(){
//   let localResult = JSON.parse(localStorage.getItem("bookList"))
//   localResult.forEach(function(locRes){
//     console.log(locRes);
//     let mainResult = $.createElement("tr")
//     let nameBook = $.createElement("th")
//     nameBook.classList.add("nameBook")
//     nameBook.innerHTML = locRes.bookName
   
//     let author = $.createElement("th")
//     author.classList.add("author")
//     author.innerHTML = locRes.authorName

//     let yaer = $.createElement("th")
//     yaer.classList.add("yaer")
//     if (locRes.yearBook > 1923 ){
//       if (locRes.yearBook < 2025){
//         yaer.innerHTML = locRes.yearBook
//       } else {
//                 yaer.innerHTML = "book from future"
//       } 
//     } else {
//       yaer.innerHTML = "before 1920"         
//     }
//     table.style.display = "revert-layer"      

//      mainResult.append(nameBook , author , yaer)
//      tableBody.append(mainResult)
//      nameBookInput.focus()
//   })
// }

// table.style.display = "none"
// btn.addEventListener("click", addHandler)

// body.addEventListener("keydown", function(event){
//   if (event.keyCode === 27){
//     removeHandler()
//   } else if (event.keyCode === 46){
//     removeHandler()
//   }  else if (event.keyCode === 13){
//     addHandler()
//   }
// })

// جلسه109 107 108

// let keys = $.querySelectorAll(".key")
// let result = $.getElementById("result");

// body.addEventListener("keypress" , function(event){
//   if (event.keyCode === 13){
//     result.innerHTML += "_"
//   } else {
//     result.append(event.key)
//   }
// })
// body.addEventListener("keyup" , function(event){
//   event.preventDefault()
//   if (event.keyCode === 8){
//       result.innerHTML = result.innerHTML.slice(0 ,-1)
//     }
//   let key = $.getElementById(event.code)
//   key.classList.add("clickKey")
//   setTimeout (function(){
//     key.classList.remove("clickKey")
//   },500)
//   if (event.keyCode === 46){
//     result.innerHTML = ""
//   }})

// جلسه 105 106

// let colors = $.querySelectorAll('.color')

// colors.forEach(function(color){
//   color.addEventListener("click", function(event){
//     $.documentElement.style.setProperty("--main" , event.target.dataset.color)
//   })   })

// جلسه 104

// let btn = $.querySelector("button")
// let title = $.querySelector("h1")

// btn.addEventListener("click" , function(){
//   $.documentElement.style.setProperty("--color-test" , "#6ad626")
//   console.log($.documentElement.style.getPropertyValue("--color-test"));
// })

// جلسه 102 103

// let inputKilo = $.getElementById('kilo')
// let inputCm = $.getElementById('cm')
// let result = $.getElementById('result')
// let resultTitle = $.getElementById('result_title')
// let kiloTitle = $.querySelector('.kiloTitle')
// let cmTitle = $.querySelector('.cmTitle')

// function kiloHandler(){
// kiloTitle.innerHTML = inputKilo.value + "Kg"
// cmTitle.innerHTML = inputCm.value + "cm"

// let bmi = (inputKilo.value / (Math.pow(inputCm.value / 100, 2))).toFixed(1)

// result.innerHTML = bmi

// if (bmi < 18.5){
//   resultTitle.innerHTML = "کم وزنی (سیخ کبریت)"
//   result.style.cssText = "color: #FF7043;"
// } else if (bmi >= 18.5 && bmi <= 24.9){
//   resultTitle.innerHTML = "وزنت نرماله"
//   result.style.cssText = "color: #64DD17;"
// } else if (bmi >= 25 && bmi < 29.9){
//   resultTitle.innerHTML = "یکم اضافه وزن داری (رژیم بگیر)"
//   result.style.cssText = "color: #FFEB3B;"
// } else {
//   resultTitle.innerHTML = "(Fat Boy خیلی چاق و گامبویی) خیلی وزنت زیاده"
//   result.style.cssText = "color: #F44336;"
// }
// }

// inputKilo.addEventListener("input" , kiloHandler)
// inputCm.addEventListener("input" , kiloHandler)

// جلسه 100 101

// let preveat = $.getElementById('preveat')
// let image   = $.querySelector('#bg')
// let next    = $.getElementById('next')
// let indexId = 0

// let srcArray = [
//   {id: 1, src: "../Assets/bg1.png"},
//   {id: 2, src: "../Assets/bg2.png"},
//   {id: 3, src: "../Assets/bg3.png"},
//   {id: 4, src: "../Assets/bg4.png"},
//   {id: 5, src: "../Assets/bg5.png"},
//   {id: 6, src: "../Assets/bg6.jpg"},
//   {id: 7, src: "../Assets/bg7.jpg"},
//   {id: 8, src: "../Assets/bg8.jpg"},
//   {id: 9, src: "../Assets/bg9.jpg"},
//  {id: 10, src: "../Assets/bg10.jpg"},
//  {id: 11, src: "../Assets/bg11.jpg"},
// ]

// function preHandler(){
//   indexId--
// if (indexId < 0){
//   indexId = srcArray.length - 1
// }
// image.src = srcArray[indexId].src
// }

// function nextHandler(){
//   indexId++;
//   if (indexId > srcArray.length - 1){
//   indexId = 0
//   } 
// image.src = srcArray[indexId].src
// }

// setInterval(nextHandler ,10000)

// preveat.addEventListener('click' , preHandler)
// next.addEventListener('click' , nextHandler)

// جلسه 99

// const btnElman = $.querySelector('button')
// let pElman = $.querySelector('p')

// btnElman.addEventListener('click', function(){
//   pElman.style.color = "#272727"
//   pElman.style.backgroundColor = "#eee"
//   pElman.style.fontSize = "50px"

//   pElman.style.cssText = "color: #272727; font-size: 50px; font-weight: bold; backgroundColor: #eee; margin-top: 5rem"
// })

// جلسه 98

// let input = $.querySelector('input')
// let btnError = $.getElementById('btnerr')
// let title1 = $.getElementById('title1')
// let title2 = $.getElementById('title2')
// let title3 = $.getElementById('title3')

// try {
//   console.log(x);
// } catch (err){
//   title1.innerHTML = err.name
// title2.innerHTML = err.massage
// }

// btnError.addEventListener("click" , function(){
//   try {
//     if (input.value.length > 8){
//       throw "Too high"
//     } else {
//       throw "Too Low"
//     }
//   } catch (err){
//       title3.innerHTML = err
//     } finally {
//       input.value = ""
//     }
// })

// جلسه 97

// let divElam = $.querySelector('div')

// console.log(divElam.style.fontSize); 

// let divElamWidth = getComputedStyle(divElam).getPropertyValue('width');

// console.log(divElamWidth);

// let divElamStyle = getComputedStyle(divElam)

// console.log(divElamStyle.backgroundSize);

// جلسه96 95

// let continer = $.querySelector('.film95')
// let input = $.getElementById('range')
// let lightSun = $.getElementById('lightSun')
// let darkSun = $.getElementById('darkSun')

// input.addEventListener('change', function(event){
// let lightNum = event.target.value
// continer.style.filter = "brightness(" + lightNum + "%)"
// })

// lightSun.addEventListener('click' , function(){
//   continer.style.filter = "brightness(2%)"
// })
// darkSun.addEventListener('click' , function(){
//   continer.style.filter = "brightness(100%)"
// })

// جلسه 94

// let divElam = $.querySelector('div')
// let pElam = $.querySelector('p')
// let btn = $.getElementById('btn')

// function animStartHandler(){
//   pElam.innerHTML = "Anim is Start"
// }
// function animReapetHandler(){
//   pElam.innerHTML = "Anim is Reapet"
// }
// function animEndHandler(){
//   pElam.innerHTML = "Anim is End"
// }

// divElam.addEventListener('animationend', animEndHandler)
// divElam.addEventListener('animationiteration', animReapetHandler)
// divElam.addEventListener('animationstart', animStartHandler)
// btn.addEventListener('click', function(){

// divElam.style.animation = "moveYourAss 15s 2"

//   setInterval(function() {
//       let red1 = Math.floor(Math.random() * 255)
//       let green1 = Math.floor(Math.random() * 255)
//       let blue1 = Math.floor(Math.random() * 255)
//       let deg = Math.floor(Math.random() * 360)
//       let rgb1 = "rgb(" + red1 + "," + green1 + "," + blue1 + ")"
//       let red2 = Math.floor(Math.random() * 255)
//       let green2 = Math.floor(Math.random() * 255)
//       let blue2 = Math.floor(Math.random() * 255)
//       let rgb2 = "rgb(" + red2 + "," + green2 + "," + blue2 + ")"
//       let linerBG = "linear-gradient(" + deg + "deg," + rgb1 + "," + rgb2 + ")"
//       divElam.style.background = linerBG
//   }, 3000)
// })

// جلسه 89 90 91 92 93

// const inputElem = $.querySelector('input')
// const addButton = $.getElementById('added')
// const clearButton = $.getElementById('clear')
// const todoListElem = $.querySelector('main')


// let todosArray = []

// function addNewTodo() {
//     let newTodoTitle = inputElem.value

//     let newTodoObj = {
//         id: todosArray.length + 1,
//         title: newTodoTitle,
//         complete: false
//     }

//     inputElem.value = ''

//     todosArray.push(newTodoObj)
//     setLocalStorage(todosArray)
//     todosGenerator(todosArray)

//     inputElem.focus()
// }

// function setLocalStorage(todosList) {
//     localStorage.setItem('todos', JSON.stringify(todosList))
// }

// function todosGenerator(todosList) {
//     let newbtsresult = $.querySelector('.btns_result')
//     let newTodoLiElem, newTodoLabalElem, newTodoCompleteBtn, newTodoDeleteBtn 

//     todoListElem.innerHTML = ''

//     todosList.forEach(function (todo) {
//         console.log(todo);
//         newTodoLiElem = $.createElement('li')
//         newTodoLiElem.className = 'completed well result'

//         newTodoLabalElem = $.createElement('label')
//         newTodoLabalElem.className = 'btn btn-success'
//         newTodoLabalElem.innerHTML = todo.title

//         newTodoCompleteBtn = $.createElement('button')
//         newTodoCompleteBtn.className = 'btn btn-success'
//         newTodoCompleteBtn.innerHTML = 'Complete'
//         newTodoCompleteBtn.setAttribute('onclick', 'editTodo(' + todo.id + ')')

//         newTodoDeleteBtn = $.createElement('button')
//         newTodoDeleteBtn.className = 'btn btn-danger'
//         newTodoDeleteBtn.innerHTML = 'Delete'
//         newTodoDeleteBtn.setAttribute('onclick', 'removeTodo(' + todo.id + ')')

//         newbtsresult.className = "btns"
//         if (todo.complete) {
//             newTodoLiElem.className = 'uncompleted well'
//             newTodoCompleteBtn.innerHTML = 'UnComplete'
//         }
//         newbtsresult.append(newTodoCompleteBtn, newTodoDeleteBtn)

//         newTodoLiElem.append(newTodoLabalElem , newbtsresult)

//         todoListElem.append(newTodoLiElem)
//     })
// }

// function editTodo(todoId) {

//     let localStorageTodos = JSON.parse(localStorage.getItem('todos'))

//     todosArray = localStorageTodos

//     todosArray.forEach(function (todo) {
//         if (todo.id === todoId) {
//             todo.complete = !todo.complete
//         }
//     })

//     setLocalStorage(todosArray)
//     todosGenerator(todosArray)
// }

// function removeTodo(todoId) {
//     let localStorageTodos = JSON.parse(localStorage.getItem('todos'))

//     todosArray = localStorageTodos

//     let mainTodoIndex = todosArray.findIndex(function (todo) {
//         return todo.id === todoId
//     })

//     todosArray.splice(mainTodoIndex, 1)

//     setLocalStorage(todosArray)
//     todosGenerator(todosArray)

// }

// function getLocalStorage() {
//     let localStorageTodos = JSON.parse(localStorage.getItem('todos'))

//     if (localStorageTodos) {
//         todosArray = localStorageTodos
//     } else {
//         todosArray = []
//     }

//     todosGenerator(todosArray)

// }

// function clearTodos() {
//     todosArray = []
//     todosGenerator(todosArray)
//     // localStorage.clear()
//     localStorage.removeItem('todos')
// }


// window.addEventListener('load', getLocalStorage)
// addButton.addEventListener('click', addNewTodo)
// clearButton.addEventListener('click', clearTodos)
// inputElem.addEventListener('keydown', function (event) {
//     if (event.code === 'Enter') {
//         addNewTodo()
//     }
// })
  // body.addEventListener('keydown' , function(event){
  //   if (event.keyCode === 13){
  //     makeTodo()
  //   } else if (event.keyCode === 27){
  //     input.value = ""
  //   } else if (event.keyCode === 109){
  //     clearTodoHandler()
  //   } else if (event.keyCode === 35){
  //     console.log("end = complete todo");
  //     complateTodo()
  //   } else if (event.keyCode === 46){
  //     clearTodoHandler()
  //   } else{
  
  //   }
  // })


// جلسه88 87

// let darkModebtn = $.querySelector('.circle')
// let btn = $.querySelector('button')
// let moon = $.getElementById('moon')

// darkModebtn.addEventListener('click', function(){
//  $.body.classList.toggle('dark')

//  if (body.className.includes('dark')){
//    moon.style.display = 'none'
//    localStorage.setItem("ThameBody" , "drk")
//  } else {
//   moon.style.display = 'block'
//   localStorage.setItem("ThameBody" , "wit")
//  }
// })

// window.onload = function(){
//  let thame = localStorage.getItem("ThameBody")
// if (thame === "drk"){
//  moon.style.display = 'none'
//  localStorage.setItem("ThameBody" , "drk")
//  $.body.classList.toggle('dark')
// }}

// جلسه 86

// let btn1 = $.getElementsByClassName('btn')[0]
// let btn2 = $.getElementsByClassName('btn')[1]
// let btn3 = $.getElementsByClassName('btn')[2]

// btn1.addEventListener('click' , function(){
// // localStorage.setItem('users' , ["mohammad" , "mahdi" , "ali" , "reza" , "mohsen"])
// localStorage.setItem('users' , JSON.stringify(["mohammad" , "mahdi" , "ali" , "reza" , "mohsen"]))
// console.log("insert id ");

// localStorage.setItem('name' , 'mohammad')
// localStorage.setItem('name' , 'mahdi')
// })
// btn2.addEventListener('click' , function(){

// // let InsertId = localStorage.getItem('users')

// // console.log(" users: " + InsertId);

// console.log(JSON.parse(localStorage.getItem('users')));
// })
// btn3.addEventListener('click' , function(){
// localStorage.clear()
// })

// جلسه 85

// let btn1 = $.getElementsByClassName('btn')[0]
// let btn2 = $.getElementsByClassName('btn')[1]
// let btn3 = $.getElementsByClassName('btn')[2]

// btn1.addEventListener('click' , function(){
// localStorage.setItem('id' , 1)
// localStorage.setItem('name' , "mohammad")
// localStorage.setItem('family' , "Niko")
// localStorage.setItem('age' , 12)
// console.log("insert id ");
// })
// btn2.addEventListener('click' , function(){
// let InsertId = localStorage.getItem('id')
// let InsertName = localStorage.getItem('name')
// let InsertFamily = localStorage.getItem('family')
// let InsertAge = localStorage.getItem('age')
// console.log("ID: " + InsertId + " Name: " + InsertName , " family: " + InsertFamily , " Age: " + InsertAge);
// })
// btn3.addEventListener('click' , function(){
// localStorage.clear()
// })

// جلسه84

// let continerAddTodo = $.querySelector('.continer_add_a_todo')
// let todoItems = $.querySelectorAll('.todo__item')
// let addTodoMain = $.querySelector('.add_a_todo')
// let continer = $.querySelector('.continer')
// let addImage = $.getElementById('add')
// let input = $.getElementById('todo__value')
// let addbtn = $.getElementById('btn_add')
// let mainadded = $.getElementById('noStatus')
// let noStarted = $.getElementById('noStarted')
// let inProgress = $.getElementById('inProgress')
// let complate = $.getElementById('complate')
// let closeAddTodo = $.getElementById('close_section__add-todo')
// let deleteImage = $.querySelectorAll('.delete')
// let todos = $.querySelectorAll('.todo')
// let deleteIcon = $.querySelectorAll('.delete')

// function openHandler() {
//  input.value = ''
//  continerAddTodo.style.width = "100vw"
//  continerAddTodo.style.height = "100vh"
//  continer.style.display = "none"
//  addTodoMain.style.top = "8rem"
// }

// function closeHandler() {
// continerAddTodo.style.width = "0rem"
// continerAddTodo.style.height = "0rem"
// continer.style.display = "flex"
// addTodoMain.style.top = "-50rem"
// }

// function addtodoHandler(){
//  closeHandler()
//  if (input.value.trim()){
//   let newTodoElement = $.createElement('div')
//   let newTodoElementTitle = $.createElement('p')
//   let newTodoElementCloseIcon = $.createElement('img')
//   newTodoElementTitle.innerHTML = input.value
//  newTodoElement.classList.add('todo__item')
//  newTodoElement.setAttribute('ondragstart', "dragStartHandler(event)")
//  newTodoElement.setAttribute('draggable', "true")
//  newTodoElementCloseIcon.classList.add('delete')
//  newTodoElementCloseIcon.src = "./Assets/close.png"
//  newTodoElement.append(newTodoElementTitle)
//  newTodoElement.append(newTodoElementCloseIcon)
//  mainadded.append(newTodoElement)

// }}

// function deleteATodo(event){
//  event.target.parentElement.remove()
// }

// function dragStartHandler(event){
//  event.dataTransfer.setData('elemId' , "." + event.target.classList.value)
//  console.log(event.dataTransfer);
// }

// function dropHandler(event){
//  let targetId = event.dataTransfer.getData('elemId')
//  let targetElam = $.querySelector(targetId)
// event.target.append(targetElam)
// }

// function dragOverHandler(event){
//  event.preventDefault()
// }

// deleteIcon.forEach(function(iconX){
// iconX.addEventListener('click', deleteATodo)})
// addImage.addEventListener('click' , openHandler)
// closeAddTodo.addEventListener('click' , closeHandler)
// addbtn.addEventListener('click' , addtodoHandler)
// body.addEventListener('keydown' , function(){
// if (event.keyCode === 32){
//  openHandler()
// } else if (event.keyCode === 107){
//  openHandler()
// } else if (event.keyCode === 27){
//  closeHandler()
// } else if (event.keyCode === 109){
//  closeHandler()
// } else if (event.keyCode === 13){
//  addtodoHandler()
// }})

// start =  event.dataTransfer.setData('elemId' , event.target.id)
// drop = let targetId = event.dataTransfer.getData('elemId')
// drop = let targetElam = $.getElementById(targetId)
// drop = event.target.append(targetElam)
// dragOver = event.preventDefault()

// ondragover="dragoverHandler(event)" ondrop="ondropHandler()" ondragover="dragoverHandler()"

// جلسه83 82

// function dragStartHandler(event){
//  console.log("Start Drag \n ------------------------");
//  event.dataTransfer.setData('elemId' , event.target.id)

// }

// function dragHandler(){
//  console.log("Dragging... \n ------------------------");
// }

// function dragEndHandler(){
//  console.log("End Drag \n ------------------------");
// }

// function dropHandler(event){
// let targetId = event.dataTransfer.getData('elemId')
// let targetElam = $.getElementById(targetId)

// event.target.append(targetElam)
//  console.log("Drop \n ------------------------");
// }

// function dragEnterHandler(){
//  console.log("Drag Enter \n ------------------------");
// }

// function dragLeave(){
//  console.log("Drag Leave \n ------------------------");
// }

// function dragOverHandler(event){
//  event.preventDefault()
//  console.log("Drag Over \n ------------------------");
// }

// جلسه 81

// <script src="./JavaST/medium.js ">
// <script src="./JavaST/medium.js " async> تفوات این دوتا در جلسه اخر گفته شده
// <script src="./JavaST/medium.js " defer>

// جلسه 79 80

// let images = $.querySelectorAll('.hover__icon')
// let musics = $.querySelectorAll('audio')
// let musicName;

// images.forEach(function(image){
//  image.addEventListener('click', function(event){
//   musicName = event.target.dataset.name
// musics.forEach(function(music){
//  body.addEventListener('keydown' , function(event){
//   if (event.keyCode === 32){
//    music.pause()
//  }})
// if (music.dataset.name === musicName){
//  music.currentTime = 0
// music.play()
// } else {
//  music.pause()
// }})})})

// جلسه 77 78

// let musicCover = $.getElementById("musicCover");
// let nameSong = $.getElementById("nameSong");
// let nameRappers = $.getElementById("nameRappers");
// let timePlay = $.getElementById("time");
// let fullTime = $.getElementById("fullTime");
// let previousMusic = $.getElementById("previous");
// let play = $.getElementById("play");
// let pause = $.getElementById("pause");
// let nextMusic = $.getElementById("nextMusic");
// let music = $.querySelector("audio");
// let audioID = 1;

// let musicPacks = [
//   {
//     id: 1,
//     nameSong: "Straig Outta Copmton",
//     rapears: "NWA",
//     musicSrc: "./Assets/Musics/StraightOuttaCopton.mp3",
//     MusicCover: "./Assets/NWA-st.png"
//   },
//   {
//     id: 2,
//     nameSong: "F The Police",
//     rapears: "NWA",
//     musicSrc: "./Assets/Musics/FthePolice.mp3",
//     MusicCover: "./Assets/NWA-SOC.png"
//   },
//   {
//     id: 3,
//     nameSong: "No Vaslien",
//     rapears: "Ice Cube",
//     musicSrc: "./Assets/Musics/NoVaslien.mp3",
//     MusicCover: "./Assets/icecubeNovaslienSong.png"
//   },
// ];
// function previousMusicsHandler(){
//   audioID--
//   if (audioID < 0){
//    audioID = 3
//   }
//  body.style.backgroundImage =  "url(" + musicPacks[audioID].MusicCover + ")"
//  musicCover.src =  musicPacks[audioID].MusicCover
//  nameSong.innerHTML =  musicPacks[audioID].nameSong
//  nameRappers.innerHTML =  musicPacks[audioID].rapears
//  music.src = musicPacks[audioID].musicSrc
//    playHandler()
// }
// function nextMusicHandler(){
//   audioID++
//   if (audioID > musicPacks.length - 1){
//    audioID = 0
//   }
//  body.style.backgroundImage =  "url(" + musicPacks[audioID].MusicCover + ")"
//  musicCover.src =  musicPacks[audioID].MusicCover
//  nameSong.innerHTML =  musicPacks[audioID].nameSong
//  nameRappers.innerHTML =  musicPacks[audioID].rapears
//  music.src = musicPacks[audioID].musicSrc
//    playHandler()
// }
// function playHandler() {
//   play.style.display = "none";
//   music.play();
//   pause.style.display = "block";
//   let musicTe = music.duration
// fullTime.innerHTML =  Math.round(musicTe / 60)
// if (music.currentTime === music.duration){
//   nextMusic()
// }

// }
// function pauseHandler() {
//   pause.style.display = "none";
//   music.pause();
//   play.style.display = "block";
// }
// function qickControl(event){
// if (event.keyCode === 32){
//   pauseHandler()
// }
// if (event.keyCode === 13){
//   playHandler()
// }
// }

// nextMusic.addEventListener("click", nextMusicHandler);
// play.addEventListener("click", playHandler);
// pause.addEventListener("click", pauseHandler);
// previousMusic.addEventListener("click", previousMusicsHandler);
// body.addEventListener('keydown' , qickControl)

// جلسه 76

// let music = $.querySelector('audio')

// let musicSrc = [
//  "./Assets/Musics/StraightOuttaCopton.mp3",
//  "./Assets/Musics/FthePolice.mp3",
//  "./Assets/Musics/NoVaslien.mp3",
// ]
// audioIndex = 0
// console.log(musicSrc);
// function nextHandlar(){
//  audioIndex++
//  if (audioIndex > musicSrc.length - 1){
//   audioIndex = 0
//  }
//  music.src = musicSrc[audioIndex]
//  playHandlar()
// }
// function min5secHandlar(){
//  music.currentTime -= 5
// }
// function playHandlar(){
//  music.play()
// }
// function pause(){
//  music.pause()
// }
// function add5secHandlar(){
//  music.currentTime += 5
// }
// function speed2Handler(){
//  music.playbackRate = 2
// }
// function unspeed2Handler(){
//  music.playbackRate = 1
// }
// function previousHandlar(){
//  audioIndex--
//  if (audioIndex < 0){
//   audioIndex = 2
//  }
//  music.src = musicSrc[audioIndex]
//  playHandlar()
// }

// جلسه 75

// let music = $.querySelector('audio')
// let result = $.getElementById('result')

// function playHandlar(){
// music.play()
// }
// function pause(){
//  music.pause()
// }
// function durationHandlar(){
//  music.duration
//  console.log(music.duration);
// }
// function currentTimeHandlar(){
//  music.currentTime
//  console.log(music.currentTime);

// }
// function playBackRateHandler(){
//  music.playBackRate = 2
//  console.log(music.playBackRate);
// }
// setInterval (function(){
//  result.innerHTML = "00: 0" + Math.floor(music.currentTime)
//  if (Math.floor(music.currentTime) > 9){
//   result.innerHTML = "00: " + Math.floor(music.currentTime)
//  }
//  if (Math.floor(music.currentTime) === 60){
//  let onemin = 0
//  onemin++
//  result.innerHTML = "0" + onemin * " : " + Math.floor(music.currentTime)

// }
// },1000)

// جلسه 74

// let btns = $.querySelectorAll('.btn')

// btns.forEach(function(btn){
//  btn.addEventListener('click', function(event){
// console.log(event.target.dataset);
// console.log("ID: " + event.target.dataset.id + ". Name: " + event.target.dataset.name + ". Age: " + event.target.dataset.age);
//  })})

// جلسه 73

// let btns = $.querySelectorAll('.btn')
// let goToUp = $.querySelector('.ThisIsEnd')
// let main = $.querySelector('.scroll_handlar')

// function goToDawnHandler(){
// main.scrollBy(0 , 300)
// }

// function goToUpHandler(){
// main.scrollTo(0,0)
// }

// goToUp.addEventListener("click", goToUpHandler)
// btns.forEach(function(toUp){
//  toUp.addEventListener("click", goToDawnHandler)
// })

// جلسه 71 72

//// <body onscroll="scrollFunc">

// let nav = $.querySelector('nav')
// let navTitle = $.querySelectorAll('.listTitle')
// let imageNav = $.querySelector('.image__icon')
// function scrollFunc(){
//  console.log($.documentElement.scrollTop);
//  if ($.documentElement.scrollTop > 32) {
//   nav.style.transition = "all 0.5s"
//   nav.classList.add('navMenu')
//    imageNav.style.width = "6rem"
//    imageNav.style.height = "5rem"
//     navTitle.forEach(function(title){
//      title.style.color = "#fff"
//     })
//  } else {
//   nav.classList.remove('navMenu')
//   imageNav.style.width = "9rem"
//   imageNav.style.height = "7rem"
//    navTitle.forEach(function(title){
//     title.style.color = "#000"
//    })
//  }
// }

// جلسه 70

// let mainDiv = $.querySelector('.scroll_handlar')
// let btnEnd = $.querySelector('.ThisIsEnd')
// let scrlNum = $.documentElement.scrollTop
// let num1 = 0

// mainDiv.addEventListener('scroll', function(event){
//   num1++
//   console.log(event);
//   console.log($.documentElement.scrollTop, $.documentElement.scrollLeft);
//   console.log(event.timeStamp);
//   console.log(num1);
//   btnEnd.addEventListener('click', function(){

//   })})

// جلسه 66 67 68 69

// let body            = $.body
// let colors          = $.querySelectorAll('.color')
// let results         = $.querySelector('.results')
// let resultBox       = $.querySelector('.result-box')
// let resultBoxTitle  = $.querySelector('.result-box p')
// let wrongBox        = $.querySelector('.wrong')
// let boxHidden       = $.querySelector('.box___hidden')
// let add             = $.getElementById('addBox')
// let remove          = $.getElementById('removeBox')
// let input           = $.getElementById('input')

// function addHandlerPlus(){
// if (input.value.trim()){
//   let newDiv      = $.createElement('div')
//   let newDivTitle = $.createElement('p')
//   newDivTitle.innerHTML = input.value
//   newDiv.classList.add('result-box')
//   newDiv.append(newDivTitle)
//   results.append(newDiv)
//   newDivTitle.addEventListener('click', removeNoteApp)
//   newDiv.style.backgroundColor = input.style.backgroundColor
//   input.value = ""
//   input.style.backgroundColor = "#fff"

// }}
// function removeNoteApp(event){
// event.target.parentElement.remove()
// }

// function addHandler(event){
//   if (event.keyCode === 13){
//     if (input.value.trim()){
//       let newDiv      = $.createElement('div')
//       let newDivTitle = $.createElement('p')
//       newDivTitle.innerHTML = input.value
//       newDiv.classList.add('result-box')
//       newDiv.append(newDivTitle)
//       results.append(newDiv)
//       newDivTitle.addEventListener('click', removeNoteApp)
//       newDiv.style.backgroundColor = input.style.backgroundColor
//       input.value = ""
//       input.style.backgroundColor = "#fff"
//     }
//   }
// }
// colors.forEach(function (color) {
//   color.addEventListener('click', function(event){

//     console.log("object");
//     input.style.backgroundColor = event.target.style.backgroundColor
//   })
// })

// remove.addEventListener('click' , function(){
//   input.value = ""
//   input.style.backgroundColor = "#fff"
// })

// add.addEventListener('click' , addHandlerPlus)
// input.addEventListener('keydown' , addHandler)
// body.addEventListener('keydown' , addHandler)

// boxHidden.style.top = "1rem"
// boxHidden.style.left = "1rem"
// setTimeout(function(){
//   boxHidden.style.top = "-4rem"
//   boxHidden.style.left = "-15rem"
// },3000)

// جلسه 64 65

// let btnElam =          $.getElementById("btn");
// let sectionBoxHidden = $.querySelector(".hidden");
// let boxHidden =        $.getElementById("hiddenBox");
// let closeElam =        $.getElementById("close");

// btnElam.addEventListener("click", function () {
//   sectionBoxHidden.style.top = "0rem";
//   boxHidden.style.top = "5rem";
//   boxHidden.style.margin = "0 auto";
// });
//   closeElam.addEventListener("click", function () {
//     sectionBoxHidden.style.top = "-60rem";
//     boxHidden.style.top = "0rem";
// });

// جلسه63 62

// let body = $.body;
// let degNum = 324;
// let mainSection = $.querySelector(".main");
// let atsin = $.querySelector(".Atsin");
// let atsinHover = $.querySelector(".Atsin__Hover");
// let input = $.getElementById("ipt");
// let resultMaxLength = $.getElementById("maxlength");

// input.addEventListener("focus", () => {
//   mainSection.style.border = "2px solid #46c8fc";
// });
// input.addEventListener("blur", () => {
//   mainSection.style.border = "1px solid #c4c1c7";
//   atsin.style.display = "block";
//   atsinHover.style.display = "none";
//   resultMaxLength.style.color = "#c4c1c7";
//   input.style.borderRight = "1px solid #c4c1c7";
// });

// input.addEventListener("keypress", function () {
//   atsin.style.display = "none";
//   atsinHover.style.display = "block";
//   resultMaxLength.style.color = "#46c8fc";
//   input.style.borderRight = "1px solid #46c8fc";

//   let inputLength = input.maxLength - input.value.length;
//   resultMaxLength.innerHTML = inputLength;
// });
// input.addEventListener("keydown", function (event) {
//   if (event.key === "Backspace") {
//     console.log(resultMaxLength.innerHTML);
//     if (resultMaxLength.innerHTML > 18) {
//       event.preventDefault();
//     } else {
//       resultMaxLength.innerHTML++;
//     }
//   }
// });

// setInterval(function () {
//   degNum--;
//   body.style.background =
//     "linear-gradient(" + degNum + "deg, #96e7f2 27%, #3359c0)";
//   console.log(body.style.background);
//   if (degNum === 0) {
//     degNum = 360;
//   }
// }, 500);

// حلسه 61

// برای تست کد ها باید با موبایل تست شود برای همین ننوشتم

// جلسه 60

// function logSelection(event) {
//   const log = document.getElementById("log");
//   const selection = event.target.value.substring(
//     event.target.selectionStart,
//     event.target.selectionEnd,
//   );
//   log.textContent = `You selected: ${selection}`;
// }

// const input = document.querySelector("input");
// input.addEventListener("select", logSelection);

// جلسه 59

// const boxElem = $.getElementById('box')
// const btnElem = $.getElementById('btn')

// function mouseMoveHandler () {
//  console.log("Move Mouse :)");
// }

// function removeHandler () {
//  boxElem.removeEventListener('mousemove', mouseMoveHandler)
//  console.log("Event Removed :(");
// }

// btnElem.addEventListener("click", removeHandler)
// boxElem.addEventListener("mousemove", mouseMoveHandler)

// جلسه 58 مخم نبود
// جلسه 57

// مربوط به دوره مقداماتی

// let sec = +prompt("Enter Minutess Digits : ")
// let min = +prompt("Enter Secondss Digits : ")
// let ressec = 0
// let resmin = 0
// let timer = setInterval(function (){
//  if (sec === 0){
//   min--
//   sec = 59
//  }
//   if (sec === 0 && min === 0){
//   clearInterval(timer)
//  }
//  if (sec.indexOf(0 === 0) && sec < 10){
//  sec = "0" + sec
//  }
//  if (min.indexOf(0 === 0) && min < 10) {
//  min = "0" + min
//  }
//  sec--

//  console.log("Timer " + min + " : " + sec);

// },100)

// جلسه 55 56

// check index.html

// جلسه 54

// $.addEventListener("DOMContentLoaded", function(){
//  console.log("finished (DOM Content Loaded) loading");
// })
// $.addEventListener("load", function(){
//  console.log("finished (Load) loading");
// })

// جلسه 53

// window.addEventListener('DOMContentLoaded', function(){
//  console.log("DOM Content Loaded");
// })

// جلسه 52

// let body = $.body
// let section = $.querySelector('.film52')

// function looading(){

//  console.log("Load Complate")
//}

// section.addEventListener("load" , looading)
// body.addEventListener("load" , looading)

// جلسه 50 51

// let body = $.body
// let menu = $.getElementById('RightClickMenu')

// menu.style.display = 'none'

// function contextmenuHandler(event){
// event.preventDefault()
// menu.style.display = 'block'
// menu.style.left = event.pageX + "px"
// menu.style.top = event.pageY + "px"
// }
// function clickmenuHandler(event){
//  menu.style.display = 'none'
// }

// body.addEventListener('contextmenu' , contextmenuHandler)
// body.addEventListener('click' , clickmenuHandler)
// body.addEventListener('keyup', function (event) {
//  if (event.key === "Escape"){
//   menu.style.display = 'none'
//  }
// })

// جلسه 49

// let btn = $.getElementById('btn')

// function clickHandler(event){
//  console.log(event.pageX);
//  console.log(event.pageY);
// }
// function contaxtHandler(event){
//  btn.innerHTML = "X: " + event.pageX + " Y: " + event.pageY
// }

// جلسه 48

// let pElam = $.querySelector('.try')
// let textArea = $.getElementById('ttaa')
// let hiddenMiniBox = $.getElementById('hidden')

// function copyHandler (event){
//  event.preventDefault()
//  pElam.innerHTML = "You Can`t Copy"
//  hiddenMiniBox.innerHTML = "Chack Your ClipBord"
//  setTimeout(function(){
//  if ( hiddenMiniBox.innerHTML = "Chack Your ClipBord"){
//   hiddenMiniBox.innerHTML = ""
//  }},3000)
// }

// function cutHandler (event){
//  event.preventDefault()
//  pElam.innerHTML = "You Can`t Cut"
// }

// function pasteHandler (event){
//  event.preventDefault()
//  pElam.innerHTML = "You Can`t Paste"
// }

// textArea.addEventListener('copy' , copyHandler)
// textArea.addEventListener('cut' , cutHandler)
// textArea.addEventListener('paste' , pasteHandler)

// جلسه 47

// let body = $.body
// let btn = $.querySelector('#btn');

// btn.addEventListener('click' , function(){
//  console.log("Left Click");
// })

// btn.addEventListener('contextmenu' , function(){
//  console.log("Right Click in button");
// })

// body.contextmenu = "return false"
// body.addEventListener('contextmenu' , function(){
//  return false
//  // add to body element (oncontextmenu="return false")
// })

// جلسه45 44 46

// let mainTodo = $.getElementById('todos');
// let input = $.getElementById('input');
// let bin = $.querySelector('.bin');
// let binIcon = $.querySelector('.todo__image');
// let Todo = $.querySelector('.todo__item');
// let divTodos = $.querySelector('.todo__items');
// let emptyWrong = $.querySelector('.empty__wrong');
// let toCloseWrong = $.querySelector('.toClose__wrong');
// let addBox = $.querySelector('.hidden_box')

// input.addEventListener('keydown', function(event){
// if (event.code === "Enter" || event.code === 'NumpadEnter'){
//         if (!input.value.trim()){
//          emptyWrong.style.display = "block";
//          toCloseWrong.style.display = "none";
//         } else if (input.value.trim().length > 25) {
//           toCloseWrong.style.display = "block";
//           emptyWrong.style.display = "none";
//         } else {
//          let newDivTodo = $.createElement('div')
//          newDivTodo.classList.add('todo__items');

//          let newtitleTodo = $.createElement('p')
//          newtitleTodo.classList.add('todo__item');
//          newtitleTodo.innerHTML = input.value.trim()

//          let removeImgNewTodo = $.createElement('img')
//          removeImgNewTodo.classList.add('todo__image');
//          removeImgNewTodo.src = './Assets/recycleBin.png'
//          removeImgNewTodo.addEventListener('click', function(event){
//           event.target.parentElement.remove()
//          })

//          mainTodo.append(newDivTodo)
//          newDivTodo.append(newtitleTodo , removeImgNewTodo)
//          addBox.style.right = '1rem'

//          input.value = ''
//          emptyWrong.style.display = "none";
//          toCloseWrong.style.display = "none";
//          setTimeout(function(){
//           if (addBox.style.right = '1rem'){
//            addBox.style.right = '-30rem'
//           }
//          },3000)
//         }}})

// جلسه 43

// let h1Title = $.getElementsByClassName('text')
// let h1Elman = $.querySelector('h1')
// let btn = $.querySelector('button')

// btn.addEventListener('click' , function(){
//  h1Elman.remove()
//  h1Title[0].remove()
// })

// let listItem = $.querySelectorAll('.list_item')

// console.log(listItem);
// listItem.forEach(function (li){
//  li.addEventListener('click' , function (event) {
//   //event.target.remove()
//   console.log(event.target);
//   event.target.parentElement.remove()
//  })
// })
// console.log(listItem);

// جلسه42جلسه 41
// لینک های اچ تی ام ال را باز کنید
// جلسه 40

// let hElma    = $.getElementsByClassName("titile");
// let h1Elam   = $.querySelector(".h1");
// let h2Elam   = $.querySelector(".h2");
// let h3Elam   = $.querySelector(".h3");
// let h4Elam   = $.querySelector(".h4");
// let h5Elam   = $.querySelector(".h5");
// let h6Elam   = $.querySelector(".h6");
// let list     = $.querySelector(".item");
// let listItem = $.getElementsByClassName("list-item");

// console.log(h3Elam.parentElement);
// console.log(h3Elam.previousElementSibling.previousElementSibling);
// console.log(h3Elam.previousElementSibling);
// console.log(h3Elam);
// console.log(h3Elam.nextElementSibling);
// console.log(h3Elam.nextElementSibling.nextElementSibling);
// console.log(h3Elam.nextElementSibling.nextElementSibling.nextElementSibling);
// console.log("______________________________");

// console.log(h3Elam.previousSibling.previousSibling.previousSibling.previousSibling);
// console.log(h3Elam.previousSibling.previousSibling.previousSibling);
// console.log(h3Elam.previousSibling.previousSibling);
// console.log(h3Elam.previousSibling);
// console.log(h3Elam);
// console.log(h3Elam.nextSibling);
// console.log(h3Elam.nextSibling.nextSibling);
// console.log("______________________________");

// console.log(listItem[2].previousSibling.previousSibling);
// console.log(listItem[2].previousSibling);
// console.log(listItem[2]);
// console.log(listItem[2].nextSibling);
// console.log(listItem[2].nextSibling.nextSibling);
// console.log("________________________________");

// console.log(list.childElementCount);
// console.log(list.children[2]);
// console.log(list.children);
// console.log(list.hasChildNodes);
// console.log(list.hasChildNodes()); // boolen
// console.log(list.firstChild);
// console.log(list.lastChild);
// console.log(list.firstElementChild);
// console.log(list.lastElementChild);
// console.log(list.lastElementChild.style.color = '#f00');

// جلسه 39

// let h1Elam = $.querySelector('.title')
// let reslutName = $.querySelector('.resultName')
// let resultType = $.querySelector('.resultType')

// h1Elam.addEventListener('click', function(){
//  reslutName.innerHTML = h1Elam.nodeName; // H1 = اسم المنتش این هست
//  resultType.innerHTML = h1Elam.nodeType; // 1  = نوع المنت که ایدی منحصر به فردش یک هست
// })

// h1Elam.addEventListener('dblclick', function(){
//  reslutName.innerHTML = "";
//  resultType.innerHTML = "";
// })

// جلسه 37 38

// let body = $.body
// let resultKeyCode = $.querySelector('.result__key_code')
// let aboutSection = $.querySelector('.about')
// let hiddenBox = $.querySelector('.hidden_box')
// let resultKey = $.getElementById('eventKey')
// let resultLocation = $.getElementById('eventLocation')
// let whareKey = $.getElementById('whareKey')
// let resultWhich = $.getElementById('eventWhich')
// let resultCode = $.getElementById('eventCode')
// let result = $.getElementById('result')

// body.addEventListener("keydown", function(event){
//  event.preventDefault()
// hiddenBox.style.display = "none"
// result.style.display = "block"
// aboutSection.style.display = "flex"

// console.log(event);
// result.innerHTML = event.keyCode
// resultKey.innerHTML = event.key
// resultLocation.innerHTML = event.location
//    if (event.location === 1){
//         whareKey.innerHTML = "left side modifier keys"
//        } else if (event.location === 2){
//         whareKey.innerHTML = "right side modifier keys"
//        } else if (event.location === 3){
//         whareKey.innerHTML = "numpad keys modifier keys"
//        } else if (event.location === 0) {
//         whareKey.innerHTML = "keyboard type word modifier keys"
//        } else {
//        console.log("undifind");
//        }
// resultWhich.innerHTML = event.keyCode
// resultCode.innerHTML = event.code
// })

// جلسه 36

// let loginForm = $.getElementById('form')
// let userName = $.getElementById('username')

// loginForm.addEventListener('submit', function (event) {
// event.preventDefault()
// console.log(event);
// })

// userName.addEventListener('keydawn', function (event) {
//   event.preventDefault()
//   console.log(event);
//   })

// جلسه 35

// let btn = $.getElementById("btn");
// let input = $.getElementById("input");

// btn.addEventListener("click", function (event) {
//   console.log(event);
//   console.log(event.target);
//   console.log(event.altKey);
//   console.log(event.clientX);
//   console.log(event.clientY);
//   console.log(event.ctrlKey);
//   console.log(event.shiftKey);
//   console.log(event.pointerType);
//   console.log(event.type);
// });

// input.addEventListener("input", function (event) {
//   console.log(event);
//   if (event.key === "Enter") {
//     ("you enter prassed");
//   } else if (event.keycode === 13) {
//     console.log("شما اینتر وارد کردید");
//   }
// });

// جسله 34

// let loginform = $.getElementById("formlogin")

// loginform.addEventListener("submit", function  ()  {
// console.log("submit ShoD");
// })

// جلسه 33

// let buttShowlog = $.getElementById('log')

// function clicked(){
//  console.log('click shod :)');
// } //

// buttShowlog.onclick = clicked

// buttShowlog.onclick = function(){
//  console.log("clicked");
// }

// // inputElam.onkeypress

// buttShowlog.addEventListener('click', function(){
//   console.log("Click");
// })

// buttShowlog.addEventListener('click', clicked)

// جلسه 32

// let inputElem = $.getElementById('input')

// console.log(inputElem.hasAttribute("value")) // true

//  let hasInput = inputElem.hasAttribute("href")
//  console.log(hasInput) // false

//////////////////////////////////////////////////

// let buttom = $.querySelector('#remove')

// buttom.addEventListener('click', function(){
//  inputElem.removeAttribute("placeholder")
// })

// جسله 31

// let h1Elman = $.getElementById('title');

// console.log(h1Elman.getAttribute('class'))
// console.log(h1Elman.className)

/////////////////////////////////

// let userNameInput = $.getElementById("input");

// console.log(userNameInput.getAttribute("location"));
// console.log(userNameInput.location);

///////////////////////////////

// let inputElem = $.getElementById("input");

// inputElem.usertype = "admin";
// inputElem.location = "mashhad";

// console.log(inputElem.location);
// console.log(inputElem.getAttribute("location"));

// ///////////////////////////////

// let obj = {
//  id: 1,
//  name: "ali",
// }

// obj.age = 22;

// console.log(obj)

// جلسه29 30  27 28

// let headerTitleC = $.querySelector("#c")
// let headerTitleF = $.querySelector("#f")
// let input = $.querySelector(".main_input")
// let result = $.querySelector(".result")
// let buttonConvert = $.getElementById("convert")
// let buttonReset = $.getElementById("reset")
// let buttonChange = $.getElementById("change")

// function changeing () {
//  if (headerTitleC.innerHTML === "`c"){
//   headerTitleC.innerHTML = "`F"
//   headerTitleF.innerHTML = "`C"
//   input.placeholder = "`F"
//   $.title = "Convert `F To `C"
//  } else{
//   headerTitleC.innerHTML = "`C"
//   headerTitleF.innerHTML = "`F"
//   input.placeholder = "`C"
//   $.title = "Convert `C To `F"
//  }
// } // مشکل این فانکشن اینکه بعد دو بار تکرار نمیشه

// function reseting(){
//  input.value = ""
// result.style.opacity = "0.005"
// }
// function converting(){
// if (input.value === ""){
//  result.style.opacity = "1.0"
//  result.style.color = "#ff0000"
//  result.innerHTML = "Please Enter a Number To Convert"
// } else if (isNaN(input.value)){
// result.style.opacity = "1.0"
// result.style.color = "#ff0000"
// result.innerHTML = "Just Enter a Number"
// } else {
//       if  (input.placeholder === "`C"){
//              let finalReslut = (input.value * 1.8) + 32
//              result.innerHTML = input.value + "`c to " + finalReslut.toFixed(2) + "`f"
//              result.style.opacity = "1.0"
//              result.style.color = "#fff900"
//          } else{
//              let finalReslut = (input.value - 32) * 5 / 9
//              result.innerHTML = input.value + "`F to " + finalReslut.toFixed(2) + "`C"
//              result.style.opacity = "1.0"
//              result.style.color = "#fff900"
//       }
// }}

// buttonReset.addEventListener("click", reseting)
// buttonChange.addEventListener("click", changeing)
// buttonConvert.addEventListener("click", converting)

// جلسه 26

// function keyupHandlar (){
//  console.log("key up")
// }
// function keypressHandlar (){
//  console.log("key press")
// }
// function keydawnHandlar (){
//  console.log("key dawn")
// }

// جلسه 25

// let ulElman = $.querySelector('ol')
// let buttElman = $.querySelector('.buttClick')

// buttElman.addEventListener('click', function (){
//     let newLiTag = $.querySelector('li')
//     newLiTag.innerHTML = "Button is Clicked"

//     let secondLiElem = $.createElement('li')
//     secondLiElem.innerHTML = 'Users'

//     ulElman.appendChild(newLiTag , secondLiElem) // <li>"Button is Clicked"</li>
//     ulElman.append(newLiTag ,secondLiElem) //  <li>"Button is Clicked"</li>
//     ulElman.appendChild("Button is Clicked") // Wrong Error
//     ulElman.append("Button is Clicked") // Button is Clicked
//     let appendResult = ulElman.append(newLiTag)
//     let appendChildResult = ulElman.appendChild(newLiTag)

//     console.log(appendResult)// Wrong
//     console.log(appendChildResult)
//     console.log(newLiTag)
// })

// جلسه 24

// let citysData = [
//     { city: "Moscow",           temp: 5,  weather: "rainy",  humidity: 43, windSpeed: 32 , url: "./Assets/rainy.png" },
//     { city: "Saint Petersburg", temp: 0,  weather: "snowy",  humidity: 7,  windSpeed: 32 , url: "./Assets/snowy.png" },
//     { city: "Kazan",            temp: 15, weather: "windy",  humidity: 12, windSpeed: 14 , url: "./Assets/windy.png" },
//     { city: "Kursk",            temp: 10, weather: "rainy",  humidity: 43, windSpeed: 32 , url: "./Assets/rainy.png" },
//     { city: "Tehran",           temp: 25, weather: "cloudy", humidity: 13, windSpeed: 32 , url: "./Assets/cloudy.png"},
//     { city: "Mashhad",          temp: 30, weather: "sunny",  humidity: 23, windSpeed: 32 , url: "./Assets/sun.png"   }
// ]

// let searchBtn = $.querySelector('.search__box')
// let searchBar = $.querySelector(".search__icons")
// let mainCityDeg = $.querySelector('.search__footer')

// searchBox.addEventListener('click', function(){
//     let searchBarValue = searchBar.value // moscow
//     // let mainCityDatas = citysData[searchBarValue]

//     let mainCityDatas = citysData.find(function (item){
//         return item.city === searchBarValue
//     })

//     console.log(mainCityDatas)

//     if (mainCityDatas) {
//         loading.style.display = 'none'
//     $.querySelector('#city').innerHTML = mainCity.city
//     $.querySelector('#deg').innerHTML = mainCity.temp
//     $.querySelector('#typeOf').innerHTML = mainCity.weather
//     $.querySelector('#Humidity').innerHTML = mainCity.humidity
//     $.querySelector('#windSpeed').innerHTML = mainCity.windSpeed
//     } else {
//         alert(" 1.لطفا شهر مورد نظر را به درستی وارد کنید \n 2.لطفا اسم شهر مورد نظر را بدون فاصله بنویسید \n 3.لطفا اینگیلسی اسم شهر رو وارد کنید\n 4.شهر مورد نظر هنوز در لیست ما نیست ")
//     }
// })

// جلسه23 22

// let body = $.body
// let bgis = [
//     { id: 0, src: "url(../Assets/bg11.jpg)"},
//     { id: 1, src: "url(../Assets/bg1.png)" },
//     { id: 2, src: "url(../Assets/bg2.png)" },
//     { id: 3, src: "url(../Assets/bg3.png)" },
//     { id: 4, src: "url(../Assets/bg4.png)" },
//     { id: 5, src: "url(../Assets/bg5.png)" },
//     { id: 6, src: "url(../Assets/bg6.jpg)" },
//     { id: 7, src: "url(../Assets/bg7.jpg)" },
//     { id: 8, src: "url(../Assets/bg8.jpg)" },
//     { id: 9, src: "url(../Assets/bg9.jpg)" },
//     { id: 10,src: "url(../Assets/bg10.jpg)"}
// ]
// let randomNum = 0
// setInterval(function() {
//     randomNum = Math.floor(Math.random() * 11)
//     body.style.backgroundImage = bgis[randomNum].src
//     console.log("Body BackgroundImage = Image ID: " + randomNum);

// }, 15000)

// let weatherCitys = {
//     moscow:          { city: "Moscow",           temp: 5,  weather: "rainy",  humidity: 43, windSpeed: 32 , url: "./Assets/rainy.png" },
//     saintPetersburg: { city: "Saint Petersburg", temp: 0,  weather: "snowy",  humidity: 7,  windSpeed: 32 , url: "./Assets/snowy.png" },
//     kazan:           { city: "Kazan",            temp: 15, weather: "windy",  humidity: 12, windSpeed: 14 , url: "./Assets/windy.png" },
//     kursk:           { city: "Kursk",            temp: 10, weather: "rainy",  humidity: 43, windSpeed: 32 , url: "./Assets/rainy.png" },
//     tehran:          { city: "Tehran",           temp: 25, weather: "cloudy", humidity: 13, windSpeed: 32 , url: "./Assets/cloudy.png"},
//     mashhad:         { city: "Mashhad",          temp: 30, weather: "sunny",  humidity: 23, windSpeed: 32 , url: "./Assets/sun.png"   }

// }
// let searchIcon  = $.querySelector('.search__icons')
// let searchBox   = $.querySelector('.search__box')
// let mainCityDeg = $.querySelector('.search__footer')
// let firstImage = $.querySelector('.search__typeof_weather___icon')
// mainCityDeg.style.display = 'none'
// searchIcon.addEventListener('click', function() {
//     let searchBar = searchBox.value
//     let mainCity = weatherCitys[searchBar]
//     if (mainCity){
//         mainCityDeg.style.display = 'block'
//         let loading = $.querySelector('.search__title')
// loading.style.display = 'none'
//     $.querySelector('#city').innerHTML = mainCity.city
//     $.querySelector('#deg').innerHTML = mainCity.temp
//     $.querySelector('#typeOf').innerHTML = mainCity.weather
//     $.querySelector('#Humidity').innerHTML = mainCity.humidity
//     $.querySelector('#windSpeed').innerHTML = mainCity.windSpeed
//     firstImage.src = mainCity.url

//     } else {
//         alert(" 1.لطفا شهر مورد نظر را به درستی وارد کنید \n 2.لطفا اسم شهر مورد نظر را بدون فاصله بنویسید \n 3.لطفا اینگیلسی اسم شهر رو وارد کنید\n 4.شهر مورد نظر هنوز در لیست ما نیست ")
//     }
// })

// جلسه 20 , 21

// let selectBoxCountrys = $.querySelector('#countrys')
// let selectBoxCitys = $.querySelector('#citys')
// let allCitys = {
//     iran: ["tehran", "mashhad", "shiraz", "asfahan"],
//     russia: ["moscow", "saint petersburg", "kazan", "kursk"],
//     amarica: ["chicago", "los angelas", "los vegos", "new york"],
//     iraq: ["baghdad", "karbale", "cazamin", "samera"],
// }
// selectBoxCountrys.addEventListener('change', function() {

//     if (selectBoxCountrys.value === "pleaseSelectCountry") {
//         selectBoxCitys.innerHTML = "";
//         selectBoxCitys.innerHTML += "<option>Please Select City</option>";
//     } else {
//         let countrys = selectBoxCountrys.value
//         let citysName = allCitys[countrys]

//         selectBoxCitys.innerHTML = ""

//         citysName.forEach(function(city) {
//             selectBoxCitys.innerHTML += "<option>" + city + "</option>"
//         })
//     }
// })

// جلسه 19

// let contry = $.getElementById('country')

// function changeHand() {
//     console.log(contry.va);
// }

// جلسه 18

// let body = $.body

// // console.log("Red: ", red, " Green: ", green, " blue: ", blue);
// // background: linear-gradient(45deg, rgb(255, 25, 150), rgb(15, 255, 35));
// setInterval(function() {

//     let red1 = Math.floor(Math.random() * 255)
//     let green1 = Math.floor(Math.random() * 255)
//     let blue1 = Math.floor(Math.random() * 255)
//     let deg = Math.floor(Math.random() * 360)
//     let rgb1 = "rgb(" + red1 + "," + green1 + "," + blue1 + ")"
//     let red2 = Math.floor(Math.random() * 255)
//     let green2 = Math.floor(Math.random() * 255)
//     let blue2 = Math.floor(Math.random() * 255)
//     let rgb2 = "rgb(" + red2 + "," + green2 + "," + blue2 + ")"
//     let linerBG = "linear-gradient(" + deg + "deg," + rgb1 + "," + rgb2 + ")"
//         // body.style.backgroundColor = rgb
//     body.style.background = linerBG
//         // console.log(rgb);
//     console.log(linerBG);
// }, 1000)

// جلسه 17

// let buttElman = $.querySelector('.Double-Click')

// buttElman.addEventListener('click', function() {
//     buttElman.classList.add('big-btn')
//     buttElman.classList.remove('Small-btn')
//     buttElman.classList.toggle('big-btn')
// })

// جلسه 16

// let buttElman = $.querySelector('.Double-Click')

// buttElman.addEventListener('click', function() {
//     console.log("clicked");
// })

// buttElman.addEventListener('click', clickEvent())

// function clickEvent() {
//     console.log("Clicked");
// }

// جلسه 15

// function doubleClick() {
//     console.log("Double Clicked");
// }

// جلسه 14

// let userNameInput = $.querySelector('.input__username')
// let passwordInput = $.querySelector('.input__password')
// let userNameWrong = $.querySelector('.usernameWrong')
// let userNameTrue = $.querySelector('.usernameTrue')
// let userPassWrong = $.querySelector('.passwordWrong')
// let userPassTrue = $.querySelector('.passwordTrue')

// function usernameBlur() {
//     let userName = userNameInput.value
//     if (userName.length < 12) {
//         userNameWrong.style.display = "block"
//         userNameTrue.style.display = "none"
//     } else {
//         userNameTrue.style.display = "block"
//         userNameWrong.style.display = "none"
//     }
// }

// function passwordBlur() {
//     let password = passwordInput.value
//     if (password.length < 12) {
//         userPassWrong.style.display = "block"
//         userPassTrue.style.display = "none"
//     } else {
//         userPassTrue.style.display = "block"
//         userPassWrong.style.display = "none"
//     }
// }

// جلسه 13

// function input1focus() {
//     console.log("Your Input is Focus");
// }

// function input1blur() {
//     console.log("Your Input is Blur");
// }

// function input2focus() {
//     console.log("Your Input is Focus");
// }

// function input2blur() {
//     console.log("Your Input is Blur");
// }

// جلسه 12

// let userNameInput = document.querySelector('.input__username')
// let passwordInput = document.querySelector('.input__password')
// let userNameWrong = document.querySelector('.usernameWrong')
// let userNameTrue = document.querySelector('.usernameTrue')
// let UserPassWrong = document.querySelector('.passwordWrong')
// let UserPassTrue = document.querySelector('.passwordTrue')

// function typingUserName() {
//     let userName = userNameInput.value
//     if (userName.length < 12) {
//         userNameWrong.style.display = "block"
//         userNameTrue.style.display = "none"
//     } else {
//         userNameTrue.style.display = "block"
//         userNameWrong.style.display = "none"
//     }

// }

// function typingPassword() {
//     let password = passwordInput.value
//     if (password.length < 8) {
//         UserPassWrong.style.display = "block"
//         UserPassTrue.style.display = "none"
//     } else {
//         UserPassTrue.style.display = "block"
//         UserPassWrong.style.display = "none"
//     }
// }

// جلسه 11

// function keylog(){
//     console.log("Type Shode");
// }

// جلسه 10

// let userNameInput = document.querySelector('.input__username')
// let passwordInput = document.querySelector('.input__password')
// let wrongBox = document.querySelector('.hidden-box__red')
// let trueBox = document.querySelector('.hidden-box__green')

// function checkinput() {
//     let userName = userNameInput.value
//     let password = passwordInput.value

//     if (userName.length < 12 || password.length < 8) {
//         wrongBox.style.top = '1rem'
//         console.log("You are Wrong");
//         setTimeout(function() {
//             wrongBox.style.top = '-8rem'
//         }, 3000)
//     } else {
//         console.log("Your User Name is: ", userName, "And Your Password is: ", password);
//         trueBox.style.top = '1rem'
//         setTimeout(function() {
//             trueBox.style.top = '-8rem'
//         }, 3000)
//     }
// }

// جلسه 9

// let lampOff = document.getElementById('lampOff')
// let lampOn = document.getElementById('lampOn')
// let button = document.querySelector('.LampButton')
// let isOn = false

// function clickLamp() {
//     if (!isOn) {
//         lampOff.style.display = 'none'
//         lampOn.style.display = 'block'
//         isOn = true
//         button.innerHTML = "Turn off Lamp"
//     } else {
//         lampOff.style.display = 'block'
//         lampOn.style.display = 'none'
//         isOn = false
//         button.innerHTML = "Turn On Lamp"
//     }

// }

// جلسه 8

// let h1Elman = document.getElementById('title')

// function clickfunc() {

//     h1Elman.style.textAlign = 'center'
//     h1Elman.style.fontSize = '48px'
//     h1Elman.style.marginTop = '2.5rem'
//     h1Elman.style.fontWeight = '800'
//     h1Elman.style.fontFamily = "Arial Narrow"
// }

// تمرین

// function clickLamp() {
//     if (isOn === true) {
//         lampOff.style.display = 'block'
//         lampOn.style.display = 'none'
//         isOn = false
//     }
// }

// جلسه 7

// let ulElman = document.querySelector('ul')
// let newLiItem = document.createElement('li')
// newLiItem.innerHTML = 'And I Love a.t'
// let otherLiItem = document.createElement('li')
// otherLiItem.innerHTML = 'And a.t'

// ulElman.append(newLiItem)
// ulElman.append(otherLiItem)

// ulElman.appendChild(newLiItem)
// ulElman.appendChild(otherLiItem)

// console.log(newLiItem);
// console.log(ulElman);

// جلسه 6

// let userName = prompt("Please Enter Your Name: ")
// let divElman = document.createElement('div')

// divElman.innerHTML = userName

// divElman.setAttribute('id', "userNames")
// console.log(divElman);

// جلسه 5

// let h1Elman = document.getElementById('title')
// let liItem = document.querySelectorAll('.item')
// let input = document.getElementById('input')
// let selectBox = document.getElementById('select')

// console.log(liItem[2].innerHTML);
// console.log(liItem[2].innerText);
// console.log(liItem[0].textContent);
// liItem[0].innerHTML = 'درباره ما'

// selectBox.value = "moscow"

// input.value = "Just Russia And a.t"

// console.log(selectBox.value);

// جلسه 4

// let h1Elman = document.getElementById('title')

// h1Elman.style.color = '#323232'
// h1Elman.style.fontFamily = "franklin"
// h1Elman.style.fontWeight = "900"
// h1Elman.style.textAlign = "center"
// h1Elman.style.marginTop = " 2rem"

// جلسه 3

// let liElmn = document.getElementsByClassName("item")
// let h1Elment = document.getElementById('title')

// h1Elment.setAttribute('class', "js-text")

// console.log(liElmn[0].setAttribute('id', 'first-item'));
// console.log(h1Elment.getAttribute('style'));

// جلسه 2

// let liElmn = document.getElementsByClassName('item')
// let listItem = document.getElementsByTagName('li')
// let firstListItem = document.querySelector('.title')
// let ulItem = document.querySelectorAll('.item')

// console.log(liElmn);
// console.log(listItem);
// console.log(firstListItem);
// console.log(ulItem);

// جلسه 1

// let h1class = document.getElementById('title')

// console.log(h1class);
