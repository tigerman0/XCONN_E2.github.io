# دليل دعم XCONN Forever X-CYBER

موقع ثابت (HTML / CSS / JavaScript) بالعربي، متوافق مع GitHub Pages. لا يحتاج استضافة مدفوعة، ولا قاعدة بيانات، ولا مفاتيح API.

## معاينة محلية

افتح ملف `index.html` بمتصفحك. معظم الأقسام هتشتغل مباشرة، وزر نسخ رسالة الدعم يشتغل بشكل أفضل على HTTPS بعد النشر.

## النشر على github.io خطوة بخطوة

1. ادخل [github.com](https://github.com) وسجّل دخولك أو اعمل حسابًا.
2. اضغط **New repository** واكتب الاسم **USERNAME.github.io**، مع استبدال `USERNAME` باسم حسابك على GitHub. اختار **Public** وأنشئ المستودع.
3. اضغط **Add file → Upload files** وارفع `index.html` و`styles.css` و`script.js` ومجلد `assets` بكل ملفاته (أو ارفع المحتويات من خلال Git محليًا). المهم تكون الملفات في **جذر المستودع**، مش داخل مجلد `xconn-support-site`.
4. اضغط **Commit changes**.
5. من **Settings → Pages** اختر **Deploy from a branch**، والفرع **main** والمجلد **/(root)** ثم **Save**، إذا لم تكن GitHub Pages مفعّلة بالفعل.
6. رابط الموقع هيكون: `https://USERNAME.github.io/`. ممكن يستغرق تفعيل النشر بعض الوقت؛ راجع صفحة Actions/Pages لو ما ظهرش فورًا.

### خيار بديل

تقدر تسمي المستودع `xconn-support` بدل `USERNAME.github.io`، وساعتها رابط الموقع هيكون `https://USERNAME.github.io/xconn-support/`. كل مسارات الملفات داخل الموقع نسبية وتشتغل في الحالتين.

## التعديل

- عنوان الصفحة والنصوص وروابط المصادر: `index.html`.
- الألوان والتصميم: `styles.css` (الخصائص في بداية الملف).
- البحث في الأعطال وزر نسخ رسالة الدعم والقائمة: `script.js`.
- رسم الجهاز والشعار المصغّر: `assets/device-illustration.svg` و`assets/favicon.svg`.
- الإصدارات في قسم التحديثات **معلومات ثابتة**، وليست تحديثًا تلقائيًا. حدّثها دوريًا من صفحة المصدر.

## روابط المصادر

- المنتج على موقع XCONN: https://xconn.net/products/forever-xcyber/
- قائمة السوفتوير الخاصة بالموديل: https://xconnsupport.com/?product=forever-x-cyber
- دليل المستخدم: https://manuals.plus/m/950e2148b1b401c32c3844a6b38e6c1b68702b6c2d04f1ec628371b083a99051

## تنبيه

هذا نموذج موقع إرشادي **غير رسمي**، وليس خدمة دعم مباشر أو وكيلًا لـ XCONN. لا يستضيف ملفات سوفتوير أو يجمع بيانات من الزوّار. يجب التأكد من موديل الجهاز قبل تحميل أو تثبيت أي تحديث. الرسم المرفق توضيحي وليس صورة فوتوغرافية للجهاز.
