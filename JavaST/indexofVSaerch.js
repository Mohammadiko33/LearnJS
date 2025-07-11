// indexOf vs Search 

// در جاوا اسکریپت، search و indexOf هر دو برای جستجوی زیررشته‌ها در یک رشته استفاده می‌شوند، اما تفاوت‌های مهمی دارند:

// ### 1. **روش استفاده **:
// - **indexOf**: 
//   - این متد به شما اجازه می‌دهد تا موقعیت (ایندکس) اولین باری که یک زیررشته خاص در رشته اصلی پیدا می‌شود را برگرداند.
//   - اگر زیررشته پیدا نشود، مقدار -1 را برمی‌گرداند.
//   - مثال:
    
    // let test1 = "Hello, world!";
    // console.log(test1.indexOf("world")); // خروجی: 7
    // console.log(test1.indexOf("JavaScript")); // خروجی: -1
    

// - **search**: 
//   - این متد برای جستجوی یک الگو (معمولاً یک عبارت منظم) در رشته استفاده می‌شود.
//   - مانند indexOf، اگر الگو پیدا نشود، -1 را برمی‌گرداند.
//   - مثال:
    
    // let test2 = "Hello, russia!";
    // console.log(test2.search(/russia/)); // خروجی: 7
    // console.log(test2.search(/JavaScript/)); // خروجی: -1
    

// ### 2. **نوع ورودی**:
// - **indexOf**: فقط یک رشته را به عنوان ورودی می‌پذیرد.
// - **search**: می‌تواند یک رشته یا یک عبارت منظم (RegExp) را به عنوان ورودی بپذیرد.

// ### 3. **کاربرد**:
// - **indexOf**: معمولاً برای جستجوی ساده زیررشته‌ها کاربرد دارد.
// - **search**: برای جستجوی پیچیده‌تر با استفاده از عبارات منظم مناسب‌تر است.

// ### خلاصه:
// - اگر فقط به دنبال موقعیت یک زیررشته خاص هستید، از indexOf استفاده کنید.
// - اگر نیاز به جستجوی الگوهای پیچیده دارید، از search استفاده کنید.