'use strict';

// Mobile navigation
const menuButton = document.querySelector('#menu-toggle');
const nav = document.querySelector('#main-nav');
menuButton?.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!expanded));
  menuButton.setAttribute('aria-label', expanded ? 'فتح القائمة' : 'إغلاق القائمة');
  nav.classList.toggle('open', !expanded);
});
nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
    menuButton?.setAttribute('aria-label', 'فتح القائمة');
  });
});

// Troubleshooting: search and filter chips
const search = document.querySelector('#trouble-search');
const chips = [...document.querySelectorAll('.filter-chip')];
const items = [...document.querySelectorAll('.faq-item')];
const emptyState = document.querySelector('#no-results');
let activeFilter = 'all';
function applyFilters() {
  const query = (search?.value || '').trim().toLocaleLowerCase('ar');
  let visible = 0;
  for (const item of items) {
    const categoryMatches = activeFilter === 'all' || item.dataset.category === activeFilter;
    const text = `${item.querySelector('summary')?.textContent || ''} ${item.dataset.search || ''} ${item.querySelector('.faq-answer')?.textContent || ''}`.toLocaleLowerCase('ar');
    const show = categoryMatches && text.includes(query);
    item.hidden = !show;
    if (!show) item.open = false;
    if (show) visible++;
  }
  if (emptyState) emptyState.hidden = visible !== 0;
}
chips.forEach((chip) => {
  chip.addEventListener('click', () => {
    activeFilter = chip.dataset.filter;
    chips.forEach((c) => {
      const current = c === chip;
      c.classList.toggle('active', current);
      c.setAttribute('aria-pressed', String(current));
    });
    applyFilters();
  });
});
search?.addEventListener('input', applyFilters);

// Copy a ready-to-send troubleshooting template; do not transmit any data.
const copyButton = document.querySelector('#copy-issue');
const copyStatus = document.querySelector('#copy-status');
async function copyText(value) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(value);
    return;
  }
  const temp = document.createElement('textarea');
  temp.value = value;
  temp.style.position = 'fixed';
  temp.style.opacity = '0';
  document.body.appendChild(temp);
  temp.select();
  const succeeded = document.execCommand('copy');
  temp.remove();
  if (!succeeded) throw new Error('Clipboard unavailable');
}
copyButton?.addEventListener('click', async () => {
  const kind = document.querySelector('#issue-kind').value;
  const description = document.querySelector('#issue-description').value.trim();
  const message = [
    'مرحبًا، أحتاج مساعدة في جهاز XCONN Forever X-CYBER (وليس Plus).',
    `نوع المشكلة: ${kind}`,
    `وصف المشكلة: ${description || 'سأضيف وصف المشكلة هنا.'}`,
    'إصدار السوفتوير الحالي: [أدخل الإصدار]',
    'متى بدأت المشكلة والخطوات التي جربتها: [اكتب هنا]'
  ].join('\n');
  try {
    await copyText(message);
    copyStatus.textContent = '✓ تم نسخ رسالة الدعم. الصقها في وسيلة التواصل التي تختارها.';
    copyStatus.className = 'copy-status success';
    copyButton.firstChild.textContent = 'تم نسخ الرسالة ';
  } catch (error) {
    copyStatus.textContent = 'تعذر النسخ تلقائيًا في هذا المتصفح. جرّب فتح الصفحة عبر HTTPS.';
    copyStatus.className = 'copy-status error';
  }
});

const year = document.querySelector('#year');
if (year) year.textContent = String(new Date().getFullYear());
