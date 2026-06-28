// שנה נוכחית בפוטר
document.getElementById('year').textContent = new Date().getFullYear();

// תפריט מובייל (המבורגר)
function toggleMenu() {
  const menu = document.getElementById('navLinks');
  const toggle = document.getElementById('navToggle');
  const isOpen = menu.classList.toggle('open');
  toggle.classList.toggle('open', isOpen);
  toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
}
function closeMenu() {
  document.getElementById('navLinks').classList.remove('open');
  const toggle = document.getElementById('navToggle');
  toggle.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}

// טיפול בשליחת טופס יצירת קשר (כרגע הדגמה — מחובר בהמשך לשרת/מייל)
function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const name = form.name.value.trim();
  alert(`תודה ${name}! קיבלנו את הפנייה ונחזור אליך בהקדם.`);
  form.reset();
  return false;
}
