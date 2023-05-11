# חלק ב' – אסטרטגיית איכות

סעיף 1

•	מה יהיה הרדיוס שיבדקו?

•	כיצד המערכת מזהה את האדם שצריך בידוד ע"פ מערכי האיכון (ע"ש מי רשום הסים?)?

•	האם יש אימות לתאריך והמיקום?

•	מה קורה אם הביאו תאריך עתידי?

•	מה קורה אם הביאו תאריך של לפני יותר משבועיים (שאמור להסתיים הבידוד)?

•	מה קורה אם הכתובת לחיפוש לא נמצאת בישראל?

•	איזה מידע צריך לכלול ב"מערך האנשים שצריך להתעדכן"?

•	האם יש הגבלות על מספר האנשים שניתן לכלול בבידוד קבוצתי (ערך מינימלי/מקסימלי)?

•	כיצד המערכת מטפלת בבידודים חופפים עבור אותו אדם?

•	כיצד המערכת מטפלת במקרים בהם נבחר תאריך ומיקום אך לא נכללים אנשים בבידוד הקבוצתי?


סעיף 2

בדיקות צד שרת:

•	שליחת בקשה תקינה- לוודא שמקבלים סטטוס 201

•	שליחת בקשה עם שדה חסר- לוודא שמתקבל סטטוס 400

•	שליחת בקשה עם פורמט לא חוקי- וודא שהמערכת שולחת הודעת שגיאה מתאימה

•	בדיקה שהמערכת עובדת כראוי עם מקרה קצה.

מקרי קצה אפשריים:

•	הזנת תאריך עתידי

•	הזנת תאריך ישן (יותר משבועיים)

•	הזנת נ"צ שנמצא מחוץ לגבולות ישראל

•	קבלה במערך האנשים אנשים מחוסנים או מחלימים

•	קבלת במערך האנשים אנשים עם מספר תאריכי חשיפה

בדיקות צד לקוח:

•	בדיקה האם המערכת מקפיצה הודעה כאשר כפתור "צור בידוד" נלחץ ולא הוזנו שדות

•	בדיקה שהמערכת לא שולחת בקשה לשרת כאשר כפתור "צור בידוד" נלחץ ולא הוזנו שדות

•	בדיקה האם נשלחה בקשה תקינה לשרת כאשר הוזנו כל השדות בפורמט נכון

•	בדיקה שהמערכת עובדת כראוי עם מקרה קצה.

