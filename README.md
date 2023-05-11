# hadasim
תרגיל 1- מגדלי טוויטר:

הנחתי שאם רוחב המשולש הוא 3 מותר לשרטט את המשולש למרות שאין מספרים אי זוגיים בין 1 ל3 (כל שאר השורות יהיו 3)
הנחתי שאין הגבלה ביחס בין הגובה לבסיס למרות שאם הבסיס קטן משמעותית מהגובה מאבדים קצת מהצורה של המשולש

תרגיל 2-מערכת ניהול קורונה לקופת חולים:

חלק א' – פיתוח המערכת:
מימשתי את צד השרת בNode.js (להורדה: https://nodejs.org/en/download)

לבסיס הנתונים השתמשתי בmongoDB: (להורדת מונגודיבי: https://www.mongodb.com/try/download/community . להורדת mongoDB compass: https://www.mongodb.com/products/compass)

לדימוי צד הלקוח השתמשתי בpostman: (להורדת פוסטמן: https://www.postman.com/downloads/)

בנוסף בפרוייקט עצמו הורדתי את הספריות mongoose , express , nodemoon, dotenv, concurentlly

אופן המימוש:

נוסיף בpostman חבר חדש:

נכתוב בJSON את הנתונים ונלחץ על send:

![image](https://github.com/talyamos/hadasim/assets/82223855/48ca0c9f-1b9e-4cf2-a17b-d6f62d2bd19b)


החבר נוסף בבסיס הנתונים:

![image](https://github.com/talyamos/hadasim/assets/82223855/03f159fd-9f94-4633-bd88-f858ee6daa85)

נשלוף חבר ספציפי מבסיס הנתוניפ:

נכתוב בAPI את מספר תעודת הזהות של החבר:

![image](https://github.com/talyamos/hadasim/assets/82223855/8dd5e38e-2d68-4f97-9c9d-6a4703cc4ca7)

נלחץ על send ונקבל את הנתונים של החבר הרצוי:

![image](https://github.com/talyamos/hadasim/assets/82223855/9092cbe1-0151-4515-adff-9202cc618407)

