import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';

const PageBackground = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f7fafc 0%, #e2e8f0 100%);
  display: flex;
  flex-direction: column;
`;

const PrivacyContainer = styled.div`
  max-width: 900px;
  margin: 4.5rem auto 2rem auto;
  padding: 2.5rem 2rem 2rem 2rem;
  background: rgba(255,255,255,0.98);
  border-radius: 18px;
  box-shadow: 0 8px 32px rgba(60,60,60,0.08);
  direction: rtl;
  font-family: inherit;
  border: 1.5px solid #e0e0e0;
  position: relative;
  z-index: 2;
`;

const Title = styled.h1`
  color: #858873;
  margin-top: 0;
  margin-bottom: 2.2rem;
  font-size: 2.9rem;
  font-weight: 900;
  letter-spacing: 0.04em;
  z-index: 3;
  position: relative;
  background: linear-gradient(90deg, #e7f9ed 0%, #f6fff7 100%);
  border-radius: 8px;
  padding: 0.6rem 1rem;
  display: block;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

const UpdateDate = styled.div`
  text-align: center;
  color: #7f8c8d;
  margin-bottom: 2rem;
  font-size: 1.05rem;
`;

const Section = styled.section`
  margin-bottom: 2.2rem;
`;

const SectionTitle = styled.h2`
  color: #858873;
  margin-bottom: 1rem;
  font-size: 1.35rem;
  font-weight: 700;
  border-right: 4px solid #858873;
  padding-right: 0.7rem;
  display: inline-block;
  background: linear-gradient(90deg, #e7f9ed 0%, #f6fff7 100%);
  border-radius: 6px;
`;

const Paragraph = styled.p`
  line-height: 2.05;
  margin-bottom: 1.1rem;
  color: #444;
  font-size: 1.08rem;
`;

const List = styled.ul`
  margin: 1rem 2.5rem;
  line-height: 2;
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;
  color: #4a4a4a;
  font-size: 1.05rem;
`;

const ContactInfo = styled.div`
  background: #f2f8f8;
  padding: 1.5rem;
  border-radius: 10px;
  margin-top: 2.5rem;
  border: 1px solid #e0e0e0;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1.5px dashed #a3be8c;
  margin: 2.5rem 0 2rem 0;
`;

const PrivacyPolicy = () => {
  return (
    <PageBackground>
      <Header />
      <PrivacyContainer>
        <Title>שירותי רפואה משלימה וטיפולי עור<br/>מדיניות פרטיות</Title>
        <UpdateDate>עדכון אחרון: 17/03/2025</UpdateDate>

        <Section>
          <Paragraph>
            אנחנו, בשירותי רפואה משלימה וטיפולי עור, מעריכות מאוד את הפרטיות שלך. לכן, ניסחנו מדיניות פרטיות זו כדי להבהיר לך בדיוק מה המידע שישמר על אודותיך, כיצד יעשה בו שימוש, למי תנתן גישה אליו, ומהן הדרכים בהן ניתן לקבל עותק מהמידע או לתקנו, במקרה שהוא אינו נכון או עדכני.
          </Paragraph>
          <Paragraph>
            מדיניות הפרטיות שלנו משתמשת בגופן עברית רב־מגדרית, ומציעה שפה מכילה לכל משתמשות השירות שלנו. היא נוצרה על ידי מחולל מדיניות הפרטיות של יהונתן קלינגר, אך יהונתן אינו ערב לטיבה של המדיניות, והוא לא בדק את הנתונים שהוזנו בטפסים. השימוש במדיניות פרטיות זו הוא על אחריות המשתמשות בלבד, ובהתאם למידע שהוזן. אם אינך רואה מדיניות זו כראוי, אנא דאגי להציגה באמצעות הגופן ובהתאם להדרכה המפורטת באתר "עברית רב־מגדרית".
          </Paragraph>
        </Section>
        <Divider />
        <Section>
          <SectionTitle>מי אנחנו?</SectionTitle>
          <Paragraph>עודכן לאחרונה: מרץ 2025</Paragraph>
          <Paragraph>
            ברוכים הבאים למדואלה. הפרטיות שלך חשובה לנו, ולכן אנו רוצים להסביר בפשטות ובשקיפות כיצד אנו אוספים, משתמשים, שומרים ומשתפים את המידע שלך.
          </Paragraph>
        </Section>
        <Divider />
        <Section>
          <SectionTitle>1. איזה מידע אנו אוספים?</SectionTitle>
          <Paragraph>
            אנו אוספים מידע על המשתמשים שלנו במטרה לשפר את חוויית השימוש במדואלה. המידע שאנו עשויים לאסוף כולל:
          </Paragraph>
          <List>
            <ListItem>מידע מזהה אישי, כגון שם, כתובת אימייל ופרטי התקשרות.</ListItem>
            <ListItem>מידע על אופן השימוש שלך בשירותים שלנו, כולל נתוני פעילות, אינטראקציות והעדפות.</ListItem>
            <ListItem>מידע טכני, כמו כתובת IP, סוג מכשיר, מערכת הפעלה, ודפדפן.</ListItem>
          </List>
        </Section>
        <Divider />
        <Section>
          <SectionTitle>2. כיצד אנו משתמשים במידע שלך?</SectionTitle>
          <Paragraph>המידע שאנו אוספים משמש למטרות הבאות:</Paragraph>
          <List>
            <ListItem>לספק, לשפר ולהתאים אישית את השירותים שלנו עבורך.</ListItem>
            <ListItem>לתקשר איתך בנוגע לעדכונים, תמיכה, ושירותים חדשים.</ListItem>
            <ListItem>להגן על אבטחת הפלטפורמה שלנו ולמנוע שימוש לרעה.</ListItem>
            <ListItem>לעמוד בדרישות משפטיות ורגולטוריות.</ListItem>
          </List>
        </Section>
        <Divider />
        <Section>
          <SectionTitle>3. שיתוף מידע עם צדדים שלישיים</SectionTitle>
          <Paragraph>אנו עשויים לשתף את המידע שלך עם צדדים שלישיים במקרים הבאים:</Paragraph>
          <List>
            <ListItem>כאשר הדבר נחוץ להפעלת השירותים שלנו (כגון ספקי שירותי אחסון וניתוח נתונים).</ListItem>
            <ListItem>כאשר יש לנו חובה משפטית לעשות זאת.</ListItem>
            <ListItem>במקרה של מיזוג, רכישה או שינוי בבעלות העסקית.</ListItem>
          </List>
        </Section>
        <Divider />
        <Section>
          <SectionTitle>4. כיצד ניתן לנהל את פרטיותך?</SectionTitle>
          <Paragraph>אנו מספקים לך כלים לניהול פרטיותך:</Paragraph>
          <List>
            <ListItem>ניתן לעדכן את הגדרות הפרטיות שלך בהגדרות החשבון.</ListItem>
            <ListItem>אם ברצונך למחוק או לשנות מידע אישי, ניתן לפנות אלינו ישירות.</ListItem>
          </List>
        </Section>
        <Divider />
        <Section>
          <SectionTitle>5. מידע נוסף וקישורים רלוונטיים</SectionTitle>
          <Paragraph>
            למידע נוסף על ניהול פרטיותך, תוכל לקרוא את מדיניות הפרטיות המלאה של Meta בקישור הבא:<br />
            <a href="https://privacycenter" target="_blank" rel="noopener noreferrer">https://privacycenter</a>
          </Paragraph>
          <Paragraph>
            אם יש לך שאלות נוספות, ניתן לפנות אלינו בכתובת <a href="mailto:dikla.spa@gmail.com">dikla.spa@gmail.com</a>
          </Paragraph>
          <Paragraph>
            תמיכה טכנית.<br />
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">דף יצירת קשר</a>
          </Paragraph>
        </Section>
        <Divider />
        <Section>
          <SectionTitle>האם את חייבת למסור לנו מידע?</SectionTitle>
          <Paragraph>
            בהתאם לסעיף 11 לחוק הגנת הפרטיות, הרי שכל פניה לאנשים לקבלת מידע על אודותיהם מחייבת ליידע אותם האם יש חובה חוקית למסירת המידע, או שמסירת המידע תלויה ברצונו הטוב של מוסרת המידע. במקרה זה, לא. אין חובה לספק את המידע, והעברת המידע תלויה ברצונו החופשי של נושאת המידע.
          </Paragraph>
        </Section>
        <Divider />
        <Section>
          <SectionTitle>מה המידע הפרטי שאנחנו שומרות עלייך?</SectionTitle>
          <Paragraph>
            במשפט: כאשר את/ה משתמש/ת בשירות ויוצרת איתנו קשר, אנחנו עשויות לשמור מידע על אודותיך. מידע זה יכול שיהיה מידע מזהה, ויכול שיהיה מידע שאינו מזהה. המידע המזהה שאנחנו נשמור הוא שמך המלא, פרטי התקשרות, כגון מספר הטלפון שלך וכתובת הדואר האלקטרוני שלך וכן כל מידע שיועבר לנו במהלך השירותים, או באמצעות טפסי יצירת קשר.
          </Paragraph>
        </Section>
        <Divider />
        <Section>
          <SectionTitle>מה המידע הלא-מזהה שישמר על אודותייך?</SectionTitle>
          <Paragraph>
            גם מידע שאינו מזהה עשוי עדיין לאפשר לאחרות ללמוד על אודותיך. לכן, חשוב שתדע שאנחנו שומרות את המידע הבא ואותו בלבד: מידע טכני, כגון סוג הדפדפן ומידע בנוגע לתוספים והגדרות במכשיר, מידע בנוגע לעמודים הנצפים, לשימוש בשירות וכדומה וכן מידע טכני שיתקבל במהלך התקשורת עמך.
          </Paragraph>
        </Section>
        <Divider />
        <Section>
          <SectionTitle>כיצד מידע על אודותיך נאסף?</SectionTitle>
          <Paragraph>
            הדרך בה מידע נאסף משפיעה על השיקולים בשימוש בשירותים שלנו. לכן, חשוב שנספק מידע בדיוק לגבי איסוף המידע שלך. אנחנו אוספות את המידע שנמסר לנו בזמן השימוש בשירות שלנו בלבד.
          </Paragraph>
        </Section>
        <Divider />
        <Section>
          <SectionTitle>כיצד נעשה שימוש במידע על אודותיך?</SectionTitle>
          <Paragraph>
            הדרך בה נשתמש במידע עלייך משפיעה על הבחירות השונות, והם המטרות הרלוונטיות לעיבוד המידע. אנחנו לצרכי מתן השירות, לדיוור ישיר, מייצרות פרופילים לספק שירותים בצורה טובה יותר ואם נתבקש על ידך להעביר מידע לגורם מסוים, אנו נעשה זאת.
          </Paragraph>
        </Section>
        <Divider />
        <Section>
          <SectionTitle>למי עוד יש גישה למידע?</SectionTitle>
          <Paragraph>
            ככלל, ככל שלפחות אנשים יש גישה למידע על אודותיך, כך יותר טוב. במקרה של השירות שלנו, יש גישה לעובדים שלנו, תחת חובת סודיות, למשתמשות אחרות בשירות, איתך יצרתה קשר; כמו כן, יתכן כי במקרים מסוימים אנחנו נספק גישה זמנית למי שדרושות לנו לאספקת השירות, תחת הסכם עיבוד מידע ספציפי.
          </Paragraph>
        </Section>
        <Divider />
        <Section>
          <SectionTitle>מיהם הצדדים השלישיים להם יש גישה?</SectionTitle>
          <Paragraph>
            צדדים שלישיים הם שירותים חיצוניים המקבלים גישה למידע ומסייעים לנו במתן השירות. כל אחד מהם חותם על מסמך שנקרא "הסכם עיבוד מידע" ובתרחיש אופטימלי, נערכה בדיקת נאותות לפי הנחיות הרשות להגנת הפרטיות על שימוש במיקור חוץ. במקרה שלנו.
          </Paragraph>
        </Section>
        <Divider />
        <Section>
          <SectionTitle>כיצד אנחנו יכולות לצור איתך קשר?</SectionTitle>
          <Paragraph>
            ככל שאנחנו נשלח יותר פניות, כך את עשויה להרגיש מוטרדת יותר ופרטיותך תפגע. לכן, חשוב שנבהיר בדיוק מהם הצפיות שלנו ממערכת היחסים. אנחנו עוד עשויות לצור איתך קשר במקרה בו רשות מוסמכת תבקש שנעשה זאת.
          </Paragraph>
        </Section>
        <Divider />
        <Section>
          <SectionTitle>האם את יכולה לעיין במידע, לתקן או לעדכן מידע הנוגע אלייך?</SectionTitle>
          <Paragraph>
            בהתאם לסעיף 13 לחוק הגנת הפרטיות, זו זכותך לעיין במידע השמור עלייך. בהתאם לסעיף 14 לחוק, תוכל לעדכן או לתקן מידע שאינו עדכני עוד. על פי החוק הישראלי, אין חובה לאפשר לך למחוק מידע, אך אם תפנה לממונה על הגנת הפרטיות במאגר, היא תוכל לספק לך מענה ספציפי לסוגיה זו.
          </Paragraph>
        </Section>
        <Divider />
        <Section>
          <SectionTitle>ומה עם עוגיות?</SectionTitle>
          <Paragraph>
            עוגיה היא קובץ קטן שמושתל על המחשב שלך, ומאפשר לנו לחסוך מילוי פרטים כמו פרטי התחברות והתקשרות בכל עמוד. מצד שני, גורמות עוינות יכולות להשתמש בעוגיות כדי לעקוב אחריך לאורך הרשת. במקרה של השירות שלנו, אנחנו משתמשות בעוגיות שלנו בלבד.
          </Paragraph>
        </Section>
        <Divider />
        <Section>
          <SectionTitle>ומה עם אירועי אבטחה?</SectionTitle>
          <Paragraph>
            נכון להיום, החוק הישראלי אינו מחייב בעלות מאגר מידע לעדכן אותך על אירועי אבטחת מידע שהתרחשו, אלא דורש כי הדיווח יגיע לרשות להגנת הפרטיות. אלא, שתמיד בעלות מאגר יכולות לספק לך הגנה טובה יותר. במקרה שלנו, אנחנו עומדות בחובה החוקית, ונדווח במקרה שבו רשות מוסמכת תורה לנו לדווח על אירוע אבטחה. תלונות תבחן לפי שיקול דעתנו.
          </Paragraph>
        </Section>
        <Divider />
        <Section>
          <SectionTitle>ממונה הגנת הפרטיות</SectionTitle>
          <Paragraph>
            ממונה הגנת הפרטיות במאגר היא דקלה שליט מדואל. ניתן לצור עמי קשר בכתובת הדואר האלקטרוני <a href="mailto:Dikla.sap@gmail.com">Dikla.sap@gmail.com</a>.
          </Paragraph>
        </Section>
        <Divider />
        <Section>
          <SectionTitle>שינויים ועדכונים</SectionTitle>
          <Paragraph>
            ככל שיהיו שינויים ועדכונים במסמך זה, אנו נביא אותם לידיעתך בהקדם, על ידי עדכון אתר האינטרנט שלנו, או על ידי שליחת הודעה לכלל המשתמשות שלנו.
          </Paragraph>
        </Section>
        <Paragraph style={{fontSize: '0.95em', color: '#555', marginTop: '2rem', borderTop: '1px solid #ddd', paddingTop: '1.2rem'}}>
          מדיניות פרטיות זו נוצרה על ידי מחולל מדיניות הפרטיות של יהונתן קלינגר באתר <a href="http://privacypolicy.co.il" target="_blank" rel="noopener noreferrer">privacypolicy.co.il</a>. כל הזכויות שמורות, 2021 יהונתן קלינגר. מדיניות פרטיות זו נוצרה ללא כל אחריות לטיבה ועל בסיס אוטומטי; אין במסמך זה כדי להוות ייעוץ משפטי או לחוות דעה בנוגע לחוקיות השירות.
        </Paragraph>
      </PrivacyContainer>
    </PageBackground>
  );
};

export default PrivacyPolicy;
