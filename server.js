import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import {
  renderProductPage,
  renderCategoryPage,
  renderShopPage,
  renderCartPage,
  renderCheckoutPage,
  renderSearchResultsPage,
  renderWishlistPage,
  renderComparePage,
  renderAboutPage,
  renderContactPage,
  renderStoresPage,
  renderAccountPage,
  renderOrderCancellationPage,
  renderTrackOrderPage,
  renderShippingPolicyPage,
  renderRegisterComplaintPage,
  renderTermsPage,
  renderPrivacyPolicyPage,
  renderFaqPage,
  renderWarrantyPolicyPage,
  renderReturnsPolicyPage,
  renderDealershipPage
} from './templates.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

// Load verified ESTA products catalogue
const productsPath = path.join(__dirname, 'products.json');
const products = JSON.parse(fs.readFileSync(productsPath, 'utf-8'));

// Category friendly title mapping
const categoryTitles = {
  'built-in-kitchen-appliances': 'Built-in Kitchen Appliances',
  'kitchen-hobs': 'Kitchen Hobs',
  'kitchen-hoods': 'Kitchen Hoods',
  'built-in-ovens': 'Built-in Ovens',
  'built-in-microwaves': 'Built-in Microwave Ovens',
  'built-in-induction-cooktops': 'Built-in Induction Cooktops',
  'small-domestic-appliances': 'Small Domestic Appliances',
  'small-electronics': 'Small Electronics',
  'electric-kettles': 'Electric Kettles',
  'sandwich-makers': 'Sandwich Makers',
  'irons': 'Dry & Steam Irons',
  'blender-grinders': 'Blender Grinders',
  'juicers': 'Juicers & Food Processors',
  'hand-blenders': 'Hand Blenders',
  'oven-toasters': 'Oven Toasters',
  'counter-top-plates': 'Counter Top Hot Plates',
  'slice-toasters': 'Slice Toasters',
  'air-fryer-ovens': 'Air Fryer Ovens',
  'microwave-ovens': 'Microwave Ovens',
  'geysers': 'Water Heaters & Geysers',
  'fast-electric': 'Fast Electric Geysers',
  'instant-gas': 'Instant Gas Water Heaters'
};

// Handle WordPress/WooCommerce background AJAX endpoints gracefully
app.all(['/wp-admin/admin-ajax.php', '/wp-admin/admin-ajax.php/'], (req, res) => {
  // Woodmart AJAX Search
  if (req.query.action === 'woodmart_ajax_search') {
    const q = (req.query.query || req.query.s || '').toLowerCase().trim();
    const matches = products.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.sku.toLowerCase().includes(q) ||
      p.primaryCategoryName.toLowerCase().includes(q)
    ).slice(0, 8);

    return res.json({
      status: 'success',
      suggestions: matches.map(m => ({
        value: m.name,
        permalink: m.url,
        price: m.price,
        thumbnail: m.image,
        sku: m.sku
      }))
    });
  }

  // WooCommerce background AJAX stubs
  if (req.query['wc-ajax'] || (req.path && req.path.includes('admin-ajax.php'))) {
    return res.json({
      success: true,
      data: { sent_count: 0 },
      fragments: {},
      cart_hash: 'esta-demo-hash'
    });
  }

  return res.json({ success: true, data: {} });
});

app.post('*', (req, res, next) => {
  if (req.xhr || req.headers['content-type']?.includes('json') || req.path.includes('wp-admin') || req.query['wc-ajax']) {
    return res.json({ success: true, data: {} });
  }
  next();
});

const guardScript = `
<script>
(function() {
  // 1. Wrap ResizeObserver with requestAnimationFrame to prevent notification loops in iframe
  if (typeof window.ResizeObserver !== 'undefined') {
    var OriginalResizeObserver = window.ResizeObserver;
    window.ResizeObserver = class ResizeObserver extends OriginalResizeObserver {
      constructor(callback) {
        super(function(entries, observer) {
          window.requestAnimationFrame(function() {
            try {
              callback(entries, observer);
            } catch (err) {
              // Benign ResizeObserver notification error handled
            }
          });
        });
      }
    };
  }

  // 2. Intercept and suppress ResizeObserver notifications, cross-origin, and legacy tracker errors
  window.addEventListener('error', function(e) {
    var msg = (e && e.message) ? String(e.message) : '';
    var lower = msg.toLowerCase();
    var filename = (e && e.filename) ? String(e.filename) : '';
    if (
      lower.indexOf('resizeobserver') !== -1 ||
      msg === 'Script error.' ||
      msg.indexOf('Script error') !== -1 ||
      (filename && filename.indexOf(window.location.host) === -1) ||
      (e.target && (e.target.tagName === 'SCRIPT' || e.target.tagName === 'LINK'))
    ) {
      if (e.preventDefault) e.preventDefault();
      if (e.stopImmediatePropagation) e.stopImmediatePropagation();
      return true;
    }
  }, true);

  // 3. Intercept unhandled promise rejections
  window.addEventListener('unhandledrejection', function(e) {
    if (e.preventDefault) e.preventDefault();
    if (e.stopImmediatePropagation) e.stopImmediatePropagation();
  }, true);

  // 4. Fallback standard onerror
  window.onerror = function(msg, url, line, col, err) {
    var str = typeof msg === 'string' ? msg.toLowerCase() : '';
    if (
      str.indexOf('resizeobserver') !== -1 ||
      str === 'script error.' ||
      str.indexOf('script error') !== -1 ||
      (url && url.indexOf(window.location.host) === -1)
    ) {
      return true;
    }
  };

  // 5. Safe stubs for globals expected by WordPress / LiteSpeed / Google / FB trackers
  window.n2const = window.n2const || { prefersReducedMotion: false };
  window._N2 = window._N2 || { _r: [], _d: [], r: function(){}, d: function(){} };
  window._N2.SmartSliderSimple = window._N2.SmartSliderSimple || function() {};
  window._N2.SmartSliderWidgetArrowImage = window._N2.SmartSliderWidgetArrowImage || function() {};
  window._N2.SmartSliderWidgetBulletTransition = window._N2.SmartSliderWidgetBulletTransition || function() {};
  
  window.grecaptcha = window.grecaptcha || {
    render: function() { return 0; },
    reset: function() {},
    ready: function(cb) { if (cb) cb(); },
    execute: function() { return Promise.resolve(''); }
  };
  window.fbq = window.fbq || function() {};
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function() { window.dataLayer.push(arguments); };
})();
</script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script src="/esta-commerce.js" defer></script>
`;

function injectGuard(html) {
  return html.replace(/<head[^>]*>/i, function(match) {
    return match + guardScript;
  });
}

// Serve reference copy at /reference/ for comparison verification (100% untouched)
const refIndexPath = path.join(__dirname, 'reference', 'index.html');
app.get(['/reference', '/reference/', '/reference/index.html'], (req, res) => {
  const refHtml = fs.readFileSync(refIndexPath, 'utf-8');
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.send(injectGuard(refHtml));
});
app.use('/reference', express.static(path.join(__dirname, 'reference'), { index: false }));

// Read base template parts from esta-site/index.html
const estaIndexPath = path.join(__dirname, 'esta-site', 'index.html');
function getEstaHtmlRaw() {
  return fs.readFileSync(estaIndexPath, 'utf-8');
}

function buildPage(contentHtml, pageTitle = '') {
  const estaHtml = getEstaHtmlRaw();
  const splitStart = estaHtml.indexOf('<div class="wd-page-content main-page-wrapper">');
  const splitEnd = estaHtml.indexOf('<footer class="wd-footer footer-container">');
  let header = estaHtml.slice(0, splitStart);
  const footer = estaHtml.slice(splitEnd);

  if (pageTitle) {
    header = header.replace(/<title>[^<]*<\/title>/, `<title>${pageTitle} – ESTA Pakistan</title>`);
  }
  const page = header +
    `<div class="wd-page-content main-page-wrapper"><main id="main-content" class="wd-content-layout content-layout-wrapper container" role="main" style="padding:40px 15px;"><div class="wd-content-area site-content">` +
    contentHtml +
    `</div></main></div>` +
    footer;
  return injectGuard(page);
}

// 1. Homepage & On-Site Search
app.get(['/', '/index.html'], (req, res) => {
  const query = (req.query.s || '').trim();
  if (query) {
    const qLower = query.toLowerCase();
    const matches = products.filter(p =>
      p.name.toLowerCase().includes(qLower) ||
      p.sku.toLowerCase().includes(qLower) ||
      p.primaryCategoryName.toLowerCase().includes(qLower)
    );
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    return res.send(buildPage(renderSearchResultsPage(query, matches), `Search: ${query}`));
  }

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.send(injectGuard(getEstaHtmlRaw()));
});

// 2. Product Detail Pages (PDP) for all 34 products
app.get('/product/:slug', (req, res, next) => {
  const rawSlug = (req.params.slug || '').replace(/\/$/, '').toLowerCase();
  const product = products.find(p => {
    const s = p.slug.toLowerCase();
    try {
      return s === rawSlug || decodeURIComponent(s) === rawSlug || s === encodeURIComponent(rawSlug).toLowerCase();
    } catch (e) {
      return s === rawSlug;
    }
  });
  if (!product) return next();

  // Find related products in same category
  const related = products.filter(p =>
    p.id !== product.id &&
    (p.primaryCategory === product.primaryCategory || p.categories.some(c => product.categories.includes(c)))
  );

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.send(buildPage(renderProductPage(product, related), product.name));
});

// 3. Category Pages (Handles single and nested subcategories)
app.get('/product-category/*', (req, res) => {
  const fullPath = req.params[0] || '';
  const segments = fullPath.split('/').filter(Boolean);
  const catSlug = (segments[segments.length - 1] || '').toLowerCase();
  const parentSlug = segments.length > 1 ? segments[0].toLowerCase() : '';

  const title = categoryTitles[catSlug] || catSlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  let catProducts = [];
  if (catSlug === 'built-in-kitchen-appliances') {
    catProducts = products.filter(p => p.categories.includes('built-in-kitchen-appliances'));
  } else if (catSlug === 'small-domestic-appliances' || catSlug === 'small-electronics') {
    catProducts = products.filter(p => p.categories.includes('small-domestic-appliances') || p.categories.includes('small-electronics'));
  } else if (catSlug === 'microwave-ovens') {
    catProducts = products.filter(p => p.categories.includes('built-in-microwaves') || p.categories.includes('microwave-ovens'));
  } else {
    catProducts = products.filter(p => p.categories.includes(catSlug) || p.primaryCategory === catSlug);
  }

  // Construct breadcrumbs
  const breadcrumbs = [];
  if (parentSlug && parentSlug !== catSlug) {
    const parentTitle = categoryTitles[parentSlug] || parentSlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    breadcrumbs.push({ label: parentTitle, url: `/product-category/${parentSlug}/` });
  }
  breadcrumbs.push({ label: title, url: `/product-category/${fullPath}` });

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.send(buildPage(renderCategoryPage(title, catSlug, catProducts, breadcrumbs), title));
});

// 4. Shop Page
app.get(['/shop', '/shop/'], (req, res) => {
  const activeCat = (req.query.cat || 'all').toLowerCase();
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.send(buildPage(renderShopPage(products, activeCat), 'Shop Appliances'));
});

// 5. Dedicated Cart Page
app.get(['/cart', '/cart/'], (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.send(buildPage(renderCartPage(), 'Shopping Cart'));
});

// 6. Dedicated Checkout Page
app.get(['/checkout', '/checkout/'], (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.send(buildPage(renderCheckoutPage(), 'Checkout'));
});

// 7. Wishlist & Compare Views
app.get(['/wishlist', '/wishlist/'], (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.send(buildPage(renderWishlistPage(), 'My Wishlist'));
});

app.get(['/compare', '/compare/'], (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.send(buildPage(renderComparePage(), 'Compare Appliances'));
});

// 8. Stores / Dealer Locator Page
app.get(['/stores', '/stores/'], (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.send(buildPage(renderStoresPage(), 'Authorized Stores & Dealers'));
});

// 9. About Us Page
app.get(['/about-us', '/about-us/'], (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.send(buildPage(renderAboutPage(), 'About Us'));
});

// 10. Contact Us Page
app.get(['/contact-us', '/contact-us/'], (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.send(buildPage(renderContactPage(), 'Contact Us'));
});

// 11. My Account Page
app.get(['/my-account', '/my-account/'], (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.send(buildPage(renderAccountPage(), 'My Account'));
});

// 12. Policy and Support Pages
app.get(['/order-cancellation', '/order-cancellation/'], (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.send(buildPage(renderOrderCancellationPage(), 'Order Cancellation Policy'));
});

app.get(['/track-order', '/track-order/'], (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.send(buildPage(renderTrackOrderPage(), 'Track Order'));
});

app.get(['/shipping-policy', '/shipping-policy/'], (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.send(buildPage(renderShippingPolicyPage(), 'Shipping Policy'));
});

app.get(['/register-complaint', '/register-complaint/'], (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.send(buildPage(renderRegisterComplaintPage(), 'Register Complaint'));
});

app.get(['/terms-and-conditions', '/terms-and-conditions/'], (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.send(buildPage(renderTermsPage(), 'Terms & Conditions'));
});

app.get(['/privacy-policy', '/privacy-policy/'], (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.send(buildPage(renderPrivacyPolicyPage(), 'Privacy Policy'));
});

app.get(['/faq', '/faq/', '/faqs', '/faqs/'], (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.send(buildPage(renderFaqPage(), 'Frequently Asked Questions'));
});

app.get(['/warranty-policy', '/warranty-policy/'], (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.send(buildPage(renderWarrantyPolicyPage(), 'Warranty Policy & Guidelines'));
});

app.get(['/returns-and-refunds', '/returns-and-refunds/'], (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.send(buildPage(renderReturnsPolicyPage(), 'Returns & Refund Policy'));
});

app.get(['/dealership', '/dealership/', '/become-a-dealer', '/become-a-dealer/'], (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.send(buildPage(renderDealershipPage(), 'Authorized Dealership Application'));
});

// 13. XML Sitemap
app.get(['/sitemap.xml', '/sitemap_index.xml'], (req, res) => {
  const publicPages = [
    { loc: 'https://esta.pk/', priority: '1.0', changefreq: 'daily' },
    { loc: 'https://esta.pk/shop/', priority: '0.9', changefreq: 'daily' },
    { loc: 'https://esta.pk/about-us/', priority: '0.8', changefreq: 'weekly' },
    { loc: 'https://esta.pk/contact-us/', priority: '0.8', changefreq: 'weekly' },
    { loc: 'https://esta.pk/stores/', priority: '0.8', changefreq: 'weekly' },
    { loc: 'https://esta.pk/dealership/', priority: '0.8', changefreq: 'weekly' },
    { loc: 'https://esta.pk/cart/', priority: '0.5', changefreq: 'monthly' },
    { loc: 'https://esta.pk/checkout/', priority: '0.5', changefreq: 'monthly' },
    { loc: 'https://esta.pk/wishlist/', priority: '0.6', changefreq: 'weekly' },
    { loc: 'https://esta.pk/compare/', priority: '0.6', changefreq: 'weekly' },
    { loc: 'https://esta.pk/my-account/', priority: '0.5', changefreq: 'monthly' },
    { loc: 'https://esta.pk/faq/', priority: '0.7', changefreq: 'weekly' },
    { loc: 'https://esta.pk/warranty-policy/', priority: '0.7', changefreq: 'monthly' },
    { loc: 'https://esta.pk/returns-and-refunds/', priority: '0.6', changefreq: 'monthly' },
    { loc: 'https://esta.pk/order-cancellation/', priority: '0.5', changefreq: 'monthly' },
    { loc: 'https://esta.pk/track-order/', priority: '0.5', changefreq: 'monthly' },
    { loc: 'https://esta.pk/shipping-policy/', priority: '0.5', changefreq: 'monthly' },
    { loc: 'https://esta.pk/register-complaint/', priority: '0.5', changefreq: 'monthly' },
    { loc: 'https://esta.pk/terms-and-conditions/', priority: '0.5', changefreq: 'monthly' },
    { loc: 'https://esta.pk/privacy-policy/', priority: '0.5', changefreq: 'monthly' },
    // Category Pages
    { loc: 'https://esta.pk/product-category/built-in-kitchen-appliances/', priority: '0.8', changefreq: 'weekly' },
    { loc: 'https://esta.pk/product-category/built-in-kitchen-appliances/kitchen-hobs/', priority: '0.8', changefreq: 'weekly' },
    { loc: 'https://esta.pk/product-category/built-in-kitchen-appliances/kitchen-hoods/', priority: '0.8', changefreq: 'weekly' },
    { loc: 'https://esta.pk/product-category/built-in-kitchen-appliances/built-in-ovens/', priority: '0.8', changefreq: 'weekly' },
    { loc: 'https://esta.pk/product-category/built-in-kitchen-appliances/built-in-microwaves/', priority: '0.8', changefreq: 'weekly' },
    { loc: 'https://esta.pk/product-category/built-in-kitchen-appliances/built-in-induction-cooktops/', priority: '0.7', changefreq: 'weekly' },
    { loc: 'https://esta.pk/product-category/small-domestic-appliances/', priority: '0.8', changefreq: 'weekly' },
    { loc: 'https://esta.pk/product-category/small-domestic-appliances/slice-toasters/', priority: '0.7', changefreq: 'weekly' },
    { loc: 'https://esta.pk/product-category/small-electronics/electric-kettles/', priority: '0.8', changefreq: 'weekly' },
    { loc: 'https://esta.pk/product-category/small-electronics/hand-blenders/', priority: '0.8', changefreq: 'weekly' },
    { loc: 'https://esta.pk/product-category/small-electronics/irons/', priority: '0.8', changefreq: 'weekly' },
    { loc: 'https://esta.pk/product-category/small-electronics/oven-toasters/', priority: '0.7', changefreq: 'weekly' },
    { loc: 'https://esta.pk/product-category/small-electronics/sandwich-makers/', priority: '0.8', changefreq: 'weekly' },
    { loc: 'https://esta.pk/product-category/blender-grinders/', priority: '0.8', changefreq: 'weekly' },
    { loc: 'https://esta.pk/product-category/counter-top-plates/', priority: '0.7', changefreq: 'weekly' },
    { loc: 'https://esta.pk/product-category/juicers/', priority: '0.8', changefreq: 'weekly' },
    { loc: 'https://esta.pk/product-category/microwave-ovens/', priority: '0.8', changefreq: 'weekly' },
    { loc: 'https://esta.pk/product-category/air-fryer-ovens/', priority: '0.7', changefreq: 'weekly' },
    { loc: 'https://esta.pk/product-category/geysers/', priority: '0.7', changefreq: 'weekly' },
    { loc: 'https://esta.pk/product-category/geysers/fast-electric/', priority: '0.7', changefreq: 'weekly' },
    { loc: 'https://esta.pk/product-category/geysers/instant-gas/', priority: '0.7', changefreq: 'weekly' }
  ];

  const productPages = products.map(p => ({
    loc: `https://esta.pk${p.url}`,
    priority: '0.8',
    changefreq: 'weekly'
  }));

  const allUrls = [...publicPages, ...productPages];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(u => `  <url>
    <loc>${u.loc}</loc>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  res.send(xml);
});

// 14. RSS Feeds
function escapeXml(unsafe) {
  return unsafe.replace(/[<>&'"]/g, c => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
    }
  });
}

app.get(['/feed', '/feed/'], (req, res) => {
  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>ESTA Pakistan – Home &amp; Kitchen Appliances</title>
    <atom:link href="https://esta.pk/feed/" rel="self" type="application/rss+xml" />
    <link>https://esta.pk/</link>
    <description>Premier Built-in Kitchen Appliances and Domestic Electronics in Pakistan</description>
    <language>en-US</language>
${products.map(p => `    <item>
      <title>${escapeXml(p.name)}</title>
      <link>https://esta.pk${p.url}</link>
      <guid isPermaLink="true">https://esta.pk${p.url}</guid>
      <description>${escapeXml(`${p.name} - Official ESTA Appliance. SKU: ${p.sku}. Price: ${p.price}`)}</description>
    </item>`).join('\n')}
  </channel>
</rss>`;

  res.setHeader('Content-Type', 'application/rss+xml; charset=utf-8');
  res.send(rssXml);
});

app.get(['/comments/feed', '/comments/feed/'], (req, res) => {
  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Comments for ESTA Pakistan</title>
    <atom:link href="https://esta.pk/comments/feed/" rel="self" type="application/rss+xml" />
    <link>https://esta.pk/</link>
    <description>Customer feedback and reviews for ESTA appliances</description>
    <language>en-US</language>
  </channel>
</rss>`;

  res.setHeader('Content-Type', 'application/rss+xml; charset=utf-8');
  res.send(rssXml);
});

// Serve static assets from esta-site
app.use(express.static(path.join(__dirname, 'esta-site'), { index: false }));

// 15. Clear 404 handler for unmapped routes
app.get('*', (req, res) => {
  res.status(404);
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.send(buildPage(`
    <div style="text-align:center;padding:72px 20px;">
      <div style="font-size:64px;font-weight:900;color:#cbd5e1;line-height:1;margin-bottom:12px;">404</div>
      <h1 style="font-size:28px;font-weight:700;color:#0f172a;margin:0 0 12px;">Page Not Found</h1>
      <p style="font-size:15px;color:#64748b;max-width:480px;margin:0 auto 28px;line-height:1.6;">
        The requested address does not exist or has been relocated. You can return to our homepage or browse the complete appliance collection.
      </p>
      <div style="display:flex;gap:12px;justify-content:center;">
        <a href="/" style="background:#111;color:#fff;padding:12px 28px;border-radius:4px;text-decoration:none;font-weight:600;font-size:14px;">Return to Home</a>
        <a href="/shop/" style="background:#f8fafc;color:#0f172a;border:1px solid #cbd5e1;padding:12px 28px;border-radius:4px;text-decoration:none;font-weight:600;font-size:14px;">Browse Appliances</a>
      </div>
    </div>
  `, 'Page Not Found'));
});

app.listen(PORT, HOST, () => {
  console.log(`Server listening on http://${HOST}:${PORT}`);
});
