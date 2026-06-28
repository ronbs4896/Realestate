// שנה נוכחית בפוטר
document.getElementById('year').textContent = new Date().getFullYear();

// טיפול בשליחת טופס יצירת קשר (כרגע הדגמה — מחובר בהמשך לשרת/מייל)
function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const name = form.name.value.trim();
  alert(`תודה ${name}! קיבלנו את הפנייה ונחזור אליך בהקדם.`);
  form.reset();
  return false;
}
