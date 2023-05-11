# hadasim
תרגיל 1- מגדלי טוויטר:

הנחתי שאם רוחב המשולש הוא 3 מותר לשרטט את המשולש למרות שאין מספרים אי זוגיים בין 1 ל3 (כל שאר השורות יהיו 3)

הנחתי שאין הגבלה ביחס בין הגובה לבסיס למרות שאם הבסיס קטן משמעותית מהגובה מאבדים קצת מהצורה של המשולש

תרגיל 2-מערכת ניהול קורונה לקופת חולים:

חלק א' – פיתוח המערכת:

מימשתי את צד השרת בNode.js (להורדה: https://nodejs.org/en/download)

לבסיס הנתונים השתמשתי בmongoDB: (להורדת מונגודיבי: https://www.mongodb.com/try/download/community . להורדת mongoDB compass: https://www.mongodb.com/products/compass)

לדימוי צד הלקוח השתמשתי בpostman: (להורדת פוסטמן: https://www.postman.com/downloads/)

בנוסף בפרוייקט עצמו הורדתי את הספריות mongoose , express , nodemoon, dotenv, concurentlly ע"י הפקודה npm install עם שם הספריה דרך הterminal  

אופן המימוש:

נוסיף בpostman חבר חדש:

נכתוב בJSON את הנתונים ונלחץ על send:

![image](https://github.com/talyamos/hadasim/assets/82223855/e9a27336-94e4-4603-a7a4-6d0801084b3c)


החבר נוסף בבסיס הנתונים:

![image](https://github.com/talyamos/hadasim/assets/82223855/c06b073f-a2c3-4850-9507-5a7e22cbfe93)

נשלוף חבר ספציפי מבסיס הנתונים:

נכתוב בAPI את מספר תעודת הזהות של החבר:

![image](https://github.com/talyamos/hadasim/assets/82223855/2141a8be-f0de-47f8-9a4b-0dd24d2e212b)

נלחץ על send ונקבל את הנתונים של החבר הרצוי:

![image](https://github.com/talyamos/hadasim/assets/82223855/0862f6fa-d18c-4713-9c3a-01e81f76e2b5)

לבונוס:

מימשתי צד לקוח בReact שנוכל להעלות שם תמונה ולהציג אותה:
![image](https://github.com/talyamos/hadasim/assets/82223855/ccd093c6-b907-4e0b-bc05-e3467138eb47)

![image](https://github.com/talyamos/hadasim/assets/82223855/46ad09ef-85ee-4d7c-bd4e-8124df6bf21b)

תצוגה סיכומית בנושא הקורונה:

כמה חברים לא חוסנו כלל: נוסיף חבר לא מחוסן (במערך החיסונים שלו אין חיסונים):

![image](https://github.com/talyamos/hadasim/assets/82223855/bbd01a55-f1a2-4e2b-8d10-285bef6e401e)

החבר נוסף למאגר ומספר החברים הלא מחוסנים עלה ב1:

![image](https://github.com/talyamos/hadasim/assets/82223855/d2c94385-5ea3-4d20-afcf-6171d3f5644e)





