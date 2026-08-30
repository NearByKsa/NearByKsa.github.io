(function () {
  var E = window.NEARBY_ENTITY || {};
  var page = document.body.getAttribute('data-page') || 'home';
  var links = [
    { id: 'home', href: 'index.html', label: 'الرئيسية' },
    { id: 'pricing', href: 'pricing.html', label: 'رسوم المنصة' },
    { id: 'refund', href: 'refund.html', label: 'الاستبدال والاسترجاع' },
    { id: 'terms', href: 'terms.html', label: 'الشروط والأحكام' },
    { id: 'privacy', href: 'privacy.html', label: 'الخصوصية' }
  ];

  var header = document.getElementById('site-header');
  if (header) {
    header.innerHTML =
      '<div class="wrap header-inner">' +
        '<a class="brand" href="index.html"><strong>' + (E.tradeName || 'NearBy') + '</strong><span>' + (E.tagline || '') + '</span></a>' +
        '<nav class="nav">' +
          links.map(function (l) {
            return '<a href="' + l.href + '"' + (l.id === page ? ' class="active"' : '') + '>' + l.label + '</a>';
          }).join('') +
        '</nav>' +
      '</div>';
  }

  var footer = document.getElementById('site-footer');
  if (footer) {
    var rows = [];
    rows.push('<span>الاسم التجاري: ' + (E.tradeName || 'NearBy') + '</span>');
    if (E.legalName) rows.push('<span>الاسم النظامي: ' + E.legalName + '</span>');
    if (E.crNumber) rows.push('<span>السجل التجاري: ' + E.crNumber + '</span>');
    if (E.vatNumber) rows.push('<span>الرقم الضريبي: ' + E.vatNumber + '</span>');
    if (E.maroof) rows.push('<span>معروف: ' + E.maroof + '</span>');
    rows.push('<span>الدولة: ' + (E.country || 'المملكة العربية السعودية') + (E.city ? ' — ' + E.city : '') + '</span>');
    rows.push('<span>البريد: <a href="mailto:' + (E.email || '') + '">' + (E.email || '') + '</a></span>');
    footer.innerHTML =
      '<div class="wrap">' +
        '<div class="entity">' + rows.join('') + '</div>' +
        '<div>© ' + (E.tradeName || 'NearBy') + ' · منصة إلكترونية للطبخ والمنتجات المنزلية. الدفع عبر Moyasar.</div>' +
      '</div>';
  }

  document.querySelectorAll('[data-entity]').forEach(function (el) {
    var key = el.getAttribute('data-entity');
    if (E[key]) el.textContent = E[key];
  });
})();
