/**
 * ESTA Pakistan — HTML Page Templates for All Subpages & Commerce Views
 * Renders Product Detail Pages, Categories, Shop, Cart, Checkout, Wishlist,
 * Compare, Stores, About Us, Contact Us, Account, and Policy views
 * using authentic Woodmart classes and responsive styling.
 */

export function renderProductCard(p) {
  return `
    <div class="product-grid-item" style="border:1px solid #e2e8f0;border-radius:8px;padding:16px;background:#fff;display:flex;flex-direction:column;justify-content:space-between;box-shadow:0 1px 3px rgba(0,0,0,0.05);transition:transform 0.2s, box-shadow 0.2s;position:relative;">
      <a href="${p.url}" style="text-align:center;display:block;margin-bottom:12px;">
        <img src="${p.image}" alt="${p.name}" style="width:100%;height:200px;object-fit:contain;" />
      </a>
      <div>
        <div style="font-size:11px;color:#64748b;text-transform:uppercase;margin-bottom:4px;letter-spacing:0.5px;">${p.primaryCategoryName}</div>
        <h3 style="font-size:14px;font-weight:600;color:#0f172a;margin:0 0 8px;line-height:1.4;">
          <a href="${p.url}" style="color:inherit;text-decoration:none;">${p.name}</a>
        </h3>
        <div style="font-size:12px;color:#94a3b8;margin-bottom:8px;">SKU: ${p.sku}</div>
      </div>
      <div>
        <div style="font-size:16px;font-weight:700;color:#b91c1c;margin-bottom:12px;">${p.price}</div>
        <div style="display:flex;gap:6px;align-items:center;">
          <button type="button" class="add_to_cart_button" data-product_id="${p.id}" style="flex:1;background:#111;color:#fff;border:none;padding:10px 12px;border-radius:4px;font-size:13px;font-weight:600;cursor:pointer;transition:background 0.2s;">
            Add to cart
          </button>
          <button type="button" class="add-to-wishlist-btn" data-product_id="${p.id}" title="Add to Wishlist" style="width:38px;height:38px;border:1px solid #cbd5e1;background:#fff;border-radius:4px;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;color:#475569;font-size:16px;transition:all 0.2s;">
            ♡
          </button>
          <button type="button" class="add-to-compare-btn" data-product_id="${p.id}" title="Compare Appliance" style="width:38px;height:38px;border:1px solid #cbd5e1;background:#fff;border-radius:4px;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;color:#475569;font-size:15px;transition:all 0.2s;">
            ⇄
          </button>
        </div>
      </div>
    </div>
  `;
}

export function renderProductPage(p, related) {
  const relatedHtml = related.slice(0, 4).map(r => renderProductCard(r)).join('');

  return `
    <div class="woocommerce-breadcrumb wd-breadcrumbs text-left" style="margin-bottom:28px;font-size:13px;color:#64748b;">
      <a href="/" style="color:#0f172a;text-decoration:none;">Home</a> <span> / </span>
      <a href="/product-category/${p.primaryCategory}/" style="color:#0f172a;text-decoration:none;">${p.primaryCategoryName}</a> <span> / </span>
      <span style="color:#64748b;">${p.name}</span>
    </div>

    <div class="product single-product-page wd-layout-default">
      <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(320px, 1fr));gap:48px;" class="pdp-main-grid">
        <div class="product-images" style="text-align:center;">
          <div style="background:#fff;border:1px solid #e2e8f0;border-radius:12px;padding:32px;display:inline-block;width:100%;max-width:500px;box-shadow:0 4px 6px -1px rgba(0,0,0,0.05);">
            <img src="${p.image}" alt="${p.name}" style="width:100%;max-height:440px;object-fit:contain;" />
          </div>
        </div>

        <div class="summary entry-summary">
          <div style="font-size:12px;font-weight:700;color:#475569;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:6px;">
            ${p.primaryCategoryName}
          </div>
          <h1 class="product_title entry-title" style="font-size:28px;font-weight:700;color:#0f172a;margin:0 0 12px;line-height:1.3;">
            ${p.name}
          </h1>

          <div class="price-wrap" style="margin-bottom:16px;">
            <span class="price" style="font-size:26px;font-weight:800;color:#b91c1c;">${p.price}</span>
            <span style="font-size:13px;color:#64748b;margin-left:8px;">(Incl. all taxes)</span>
          </div>

          <div style="margin-bottom:20px;">
            <span style="display:inline-block;background:#ecfdf5;color:#065f46;border:1px solid #a7f3d0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;">
              ✓ In Stock — Authentic ESTA Certified
            </span>
          </div>

          <p style="font-size:14px;color:#475569;line-height:1.6;margin-bottom:24px;">
            Engineered for high performance, premium build quality, and sleek modern aesthetics, the ${p.name} delivers precision cooking, durability, and energy efficiency for the modern Pakistani home.
          </p>

          <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:20px;margin-bottom:24px;">
            <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;flex-wrap:wrap;">
              <div class="quantity" style="display:flex;align-items:center;border:1px solid #cbd5e1;border-radius:4px;background:#fff;">
                <button type="button" class="qty-btn minus" style="width:36px;height:42px;border:none;background:none;font-size:18px;cursor:pointer;">-</button>
                <input type="number" class="input-text qty text" step="1" min="1" max="99" name="quantity" value="1" title="Qty" size="4" style="width:48px;height:42px;border:none;text-align:center;font-size:15px;font-weight:600;">
                <button type="button" class="qty-btn plus" style="width:36px;height:42px;border:none;background:none;font-size:18px;cursor:pointer;">+</button>
              </div>
              <button type="button" class="single_add_to_cart_button button alt add_to_cart_button" data-product_id="${p.id}" style="background:#111;color:#fff;border:none;padding:12px 32px;border-radius:4px;font-weight:600;font-size:15px;cursor:pointer;flex:1;min-width:140px;">
                Add to cart
              </button>
              <button type="button" class="add-to-wishlist-btn" data-product_id="${p.id}" title="Add to Wishlist" style="width:44px;height:44px;border:1px solid #cbd5e1;background:#fff;border-radius:4px;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;color:#475569;font-size:20px;">
                ♡
              </button>
              <button type="button" class="add-to-compare-btn" data-product_id="${p.id}" title="Compare Appliance" style="width:44px;height:44px;border:1px solid #cbd5e1;background:#fff;border-radius:4px;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;color:#475569;font-size:18px;">
                ⇄
              </button>
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;font-size:12px;color:#64748b;">
              <span>🚚 Free Delivery Nationwide</span>
              <span>🛡️ 1-Year Official Warranty</span>
              <span>⚡ Genuine ESTA Pakistan Standard</span>
              <span>📞 Dedicated Customer Support</span>
            </div>
          </div>

          <div class="product_meta" style="font-size:13px;color:#64748b;border-top:1px solid #e2e8f0;padding-top:16px;line-height:1.8;">
            <div><strong>SKU:</strong> <span style="color:#0f172a;">${p.sku}</span></div>
            <div><strong>Category:</strong> <a href="/product-category/${p.primaryCategory}/" style="color:#0f172a;text-decoration:none;">${p.primaryCategoryName}</a></div>
            <div><strong>Brand:</strong> <span style="color:#0f172a;">ESTA Pakistan</span></div>
          </div>
        </div>
      </div>

      <!-- Specifications Table -->
      <div style="margin-top:56px;border-top:1px solid #e2e8f0;padding-top:36px;">
        <h2 style="font-size:22px;font-weight:700;color:#0f172a;margin:0 0 20px;">Product Specifications</h2>
        <table style="width:100%;max-width:760px;border-collapse:collapse;border:1px solid #e2e8f0;border-radius:8px;overflow:hidden;background:#fff;">
          <tbody>
            <tr style="border-bottom:1px solid #f1f5f9;"><th style="padding:12px 18px;text-align:left;background:#f8fafc;width:240px;font-size:13px;color:#475569;">Brand</th><td style="padding:12px 18px;font-size:14px;color:#0f172a;">ESTA Pakistan</td></tr>
            <tr style="border-bottom:1px solid #f1f5f9;"><th style="padding:12px 18px;text-align:left;background:#f8fafc;font-size:13px;color:#475569;">Appliance Category</th><td style="padding:12px 18px;font-size:14px;color:#0f172a;">${p.primaryCategoryName}</td></tr>
            <tr style="border-bottom:1px solid #f1f5f9;"><th style="padding:12px 18px;text-align:left;background:#f8fafc;font-size:13px;color:#475569;">Model / SKU</th><td style="padding:12px 18px;font-size:14px;color:#0f172a;">${p.sku}</td></tr>
            <tr style="border-bottom:1px solid #f1f5f9;"><th style="padding:12px 18px;text-align:left;background:#f8fafc;font-size:13px;color:#475569;">Operating Voltage</th><td style="padding:12px 18px;font-size:14px;color:#0f172a;">220-240V ~ 50Hz (Standard Pakistan Grid)</td></tr>
            <tr style="border-bottom:1px solid #f1f5f9;"><th style="padding:12px 18px;text-align:left;background:#f8fafc;font-size:13px;color:#475569;">Warranty Coverage</th><td style="padding:12px 18px;font-size:14px;color:#0f172a;">1-Year Official Brand Warranty</td></tr>
            <tr><th style="padding:12px 18px;text-align:left;background:#f8fafc;font-size:13px;color:#475569;">Quality Certification</th><td style="padding:12px 18px;font-size:14px;color:#0f172a;">ISO 9001 Certified Manufacturing</td></tr>
          </tbody>
        </table>
      </div>

      <!-- Related Products -->
      ${relatedHtml ? `
        <div style="margin-top:56px;border-top:1px solid #e2e8f0;padding-top:36px;">
          <h2 style="font-size:22px;font-weight:700;color:#0f172a;margin:0 0 24px;">Related ESTA Appliances</h2>
          <div style="display:grid;grid-template-columns:repeat(auto-fill, minmax(240px, 1fr));gap:24px;">
            ${relatedHtml}
          </div>
        </div>
      ` : ''}
    </div>
  `;
}

export function renderCategoryPage(title, slug, products, breadcrumbs = []) {
  const cardsHtml = products.map(p => renderProductCard(p)).join('');

  let breadcrumbsHtml = `<a href="/" style="color:#0f172a;text-decoration:none;">Home</a> <span> / </span> `;
  if (breadcrumbs && breadcrumbs.length > 0) {
    breadcrumbs.forEach((b, idx) => {
      if (idx === breadcrumbs.length - 1) {
        breadcrumbsHtml += `<span style="color:#64748b;">${b.label}</span>`;
      } else {
        breadcrumbsHtml += `<a href="${b.url}" style="color:#0f172a;text-decoration:none;">${b.label}</a> <span> / </span> `;
      }
    });
  } else {
    breadcrumbsHtml += `<span style="color:#64748b;">${title}</span>`;
  }

  return `
    <div class="woocommerce-breadcrumb wd-breadcrumbs text-left" style="margin-bottom:24px;font-size:13px;color:#64748b;">
      ${breadcrumbsHtml}
    </div>

    <div style="margin-bottom:32px;padding-bottom:16px;border-bottom:1px solid #e2e8f0;display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:12px;">
      <div>
        <h1 style="font-size:32px;font-weight:700;color:#0f172a;margin:0 0 6px;">${title}</h1>
        <p style="font-size:14px;color:#64748b;margin:0;">
          ${products.length > 0 ? `Showing ${products.length} premium ESTA appliances` : 'Official ESTA Appliance Category'}
        </p>
      </div>
      <div>
        <a href="/shop/" style="font-size:13px;font-weight:600;color:#0f172a;text-decoration:none;">View All Categories →</a>
      </div>
    </div>

    ${products.length > 0 ? `
      <div style="display:grid;grid-template-columns:repeat(auto-fill, minmax(260px, 1fr));gap:24px;">
        ${cardsHtml}
      </div>
    ` : `
      <div style="text-align:center;padding:56px 20px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;margin:20px 0;">
        <div style="font-size:44px;color:#94a3b8;margin-bottom:16px;">📦</div>
        <h3 style="font-size:20px;font-weight:700;color:#0f172a;margin:0 0 8px;">${title} — Stock &amp; Catalogue Update</h3>
        <p style="font-size:14px;color:#64748b;max-width:540px;margin:0 auto 24px;line-height:1.6;">
          ESTA Pakistan is currently updating inventory and preparing upcoming model releases for this category. For authorized retail store availability or wholesale dealership inquiries, please consult our dealer network.
        </p>
        <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
          <a href="/shop/" style="display:inline-block;background:#111;color:#fff;padding:10px 24px;border-radius:4px;text-decoration:none;font-weight:600;font-size:13px;">Browse Available Appliances</a>
          <a href="/stores/" style="display:inline-block;background:#fff;color:#0f172a;border:1px solid #cbd5e1;padding:10px 24px;border-radius:4px;text-decoration:none;font-weight:600;font-size:13px;">Find Authorized Dealer</a>
          <a href="/contact-us/" style="display:inline-block;background:#fff;color:#0f172a;border:1px solid #cbd5e1;padding:10px 24px;border-radius:4px;text-decoration:none;font-weight:600;font-size:13px;">Customer Inquiry</a>
        </div>
      </div>
    `}
  `;
}

export function renderShopPage(products, activeCat = 'all') {
  const categories = [
    { slug: 'all', label: 'All Appliances' },
    { slug: 'kitchen-hobs', label: 'Kitchen Hobs' },
    { slug: 'kitchen-hoods', label: 'Kitchen Hoods' },
    { slug: 'built-in-ovens', label: 'Built-in Ovens' },
    { slug: 'built-in-microwaves', label: 'Built-in Microwaves' },
    { slug: 'small-domestic-appliances', label: 'Small Domestic' },
    { slug: 'electric-kettles', label: 'Electric Kettles' },
    { slug: 'sandwich-makers', label: 'Sandwich Makers' }
  ];

  const filtered = activeCat === 'all'
    ? products
    : products.filter(p => p.categories.includes(activeCat) || p.primaryCategory === activeCat);

  const filterTabs = categories.map(c => `
    <a href="/shop/${c.slug === 'all' ? '' : '?cat=' + c.slug}" style="display:inline-block;padding:8px 16px;border-radius:20px;font-size:13px;font-weight:600;text-decoration:none;border:1px solid ${c.slug === activeCat ? '#111' : '#cbd5e1'};background:${c.slug === activeCat ? '#111' : '#fff'};color:${c.slug === activeCat ? '#fff' : '#334155'};transition:all 0.2s;">
      ${c.label}
    </a>
  `).join('');

  const cardsHtml = filtered.map(p => renderProductCard(p)).join('');

  return `
    <div class="woocommerce-breadcrumb wd-breadcrumbs text-left" style="margin-bottom:24px;font-size:13px;color:#64748b;">
      <a href="/" style="color:#0f172a;text-decoration:none;">Home</a> <span> / </span>
      <span style="color:#64748b;">ESTA Appliance Collection</span>
    </div>

    <div style="margin-bottom:28px;">
      <h1 style="font-size:32px;font-weight:700;color:#0f172a;margin:0 0 8px;">ESTA Appliance Collection</h1>
      <p style="font-size:14px;color:#64748b;margin:0 0 20px;">Discover our complete range of built-in cooking appliances and premium small home electronics.</p>
      <div style="display:flex;gap:8px;flex-wrap:wrap;">
        ${filterTabs}
      </div>
    </div>

    <div style="display:grid;grid-template-columns:repeat(auto-fill, minmax(260px, 1fr));gap:24px;">
      ${cardsHtml}
    </div>
  `;
}

export function renderCartPage() {
  return `
    <div class="woocommerce-breadcrumb wd-breadcrumbs text-left" style="margin-bottom:24px;font-size:13px;color:#64748b;">
      <a href="/" style="color:#0f172a;text-decoration:none;">Home</a> <span> / </span>
      <span style="color:#64748b;">Shopping Cart</span>
    </div>

    <h1 style="font-size:32px;font-weight:700;color:#0f172a;margin:0 0 24px;">Shopping Cart</h1>

    <div id="esta-cart-page-mount">
      <!-- Injected dynamically by esta-commerce.js from localStorage -->
      <div style="text-align:center;padding:40px;color:#64748b;">Loading shopping cart...</div>
    </div>
  `;
}

export function renderCheckoutPage() {
  return `
    <div class="woocommerce-breadcrumb wd-breadcrumbs text-left" style="margin-bottom:24px;font-size:13px;color:#64748b;">
      <a href="/" style="color:#0f172a;text-decoration:none;">Home</a> <span> / </span>
      <a href="/cart/" style="color:#0f172a;text-decoration:none;">Shopping Cart</a> <span> / </span>
      <span style="color:#64748b;">Checkout</span>
    </div>

    <h1 style="font-size:32px;font-weight:700;color:#0f172a;margin:0 0 24px;">Checkout</h1>

    <div id="esta-checkout-page-mount">
      <!-- Injected dynamically by esta-commerce.js from localStorage -->
      <div style="text-align:center;padding:40px;color:#64748b;">Loading checkout...</div>
    </div>
  `;
}

export function renderSearchResultsPage(query, matches) {
  const cardsHtml = matches.map(p => renderProductCard(p)).join('');

  return `
    <div class="woocommerce-breadcrumb wd-breadcrumbs text-left" style="margin-bottom:24px;font-size:13px;color:#64748b;">
      <a href="/" style="color:#0f172a;text-decoration:none;">Home</a> <span> / </span>
      <span style="color:#64748b;">Search Results</span>
    </div>

    <div style="margin-bottom:32px;padding-bottom:16px;border-bottom:1px solid #e2e8f0;">
      <h1 style="font-size:28px;font-weight:700;color:#0f172a;margin:0 0 6px;">Search Results for “${query}”</h1>
      <p style="font-size:14px;color:#64748b;margin:0;">Found ${matches.length} matching ESTA appliances</p>
    </div>

    ${matches.length > 0 ? `
      <div style="display:grid;grid-template-columns:repeat(auto-fill, minmax(260px, 1fr));gap:24px;">
        ${cardsHtml}
      </div>
    ` : `
      <div style="text-align:center;padding:60px 20px;background:#f8fafc;border-radius:8px;">
        <h3 style="font-size:18px;color:#475569;">No products found matching your search.</h3>
        <p style="font-size:14px;color:#64748b;margin-top:8px;">Try searching for "hob", "hood", "oven", "kettle", or a model SKU.</p>
        <a href="/shop/" style="margin-top:16px;display:inline-block;background:#111;color:#fff;padding:10px 24px;border-radius:4px;text-decoration:none;font-weight:600;">Browse All Products</a>
      </div>
    `}
  `;
}

export function renderWishlistPage() {
  return `
    <div class="woocommerce-breadcrumb wd-breadcrumbs text-left" style="margin-bottom:24px;font-size:13px;color:#64748b;">
      <a href="/" style="color:#0f172a;text-decoration:none;">Home</a> <span> / </span>
      <span style="color:#64748b;">Wishlist</span>
    </div>

    <div style="margin-bottom:28px;border-bottom:1px solid #e2e8f0;padding-bottom:16px;display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:12px;">
      <div>
        <h1 style="font-size:32px;font-weight:700;color:#0f172a;margin:0 0 6px;">My Wishlist</h1>
        <p style="font-size:14px;color:#64748b;margin:0;">Keep track of appliances you are interested in purchasing.</p>
      </div>
      <div>
        <a href="/shop/" style="font-size:13px;font-weight:600;color:#0f172a;text-decoration:none;">Explore Catalogue →</a>
      </div>
    </div>

    <div id="esta-wishlist-page-mount">
      <div style="text-align:center;padding:48px 20px;background:#f8fafc;border-radius:8px;">
        <div style="font-size:40px;color:#cbd5e1;margin-bottom:12px;">♡</div>
        <p style="font-size:16px;font-weight:600;color:#1e293b;margin:0 0 6px;">Loading your saved appliances...</p>
      </div>
    </div>
  `;
}

export function renderComparePage() {
  return `
    <div class="woocommerce-breadcrumb wd-breadcrumbs text-left" style="margin-bottom:24px;font-size:13px;color:#64748b;">
      <a href="/" style="color:#0f172a;text-decoration:none;">Home</a> <span> / </span>
      <span style="color:#64748b;">Compare Appliances</span>
    </div>

    <div style="margin-bottom:28px;border-bottom:1px solid #e2e8f0;padding-bottom:16px;display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:12px;">
      <div>
        <h1 style="font-size:32px;font-weight:700;color:#0f172a;margin:0 0 6px;">Compare ESTA Appliances</h1>
        <p style="font-size:14px;color:#64748b;margin:0;">Side-by-side technical specification, capacity, and dimensions comparison.</p>
      </div>
      <div>
        <a href="/shop/" style="font-size:13px;font-weight:600;color:#0f172a;text-decoration:none;">+ Add Products From Shop</a>
      </div>
    </div>

    <div id="esta-compare-page-mount">
      <div style="text-align:center;padding:48px 20px;background:#f8fafc;border-radius:8px;">
        <div style="font-size:40px;color:#cbd5e1;margin-bottom:12px;">⇄</div>
        <p style="font-size:16px;font-weight:600;color:#1e293b;margin:0 0 6px;">Loading appliance comparison table...</p>
      </div>
    </div>
  `;
}

export function renderAboutPage() {
  return `
    <div class="woocommerce-breadcrumb wd-breadcrumbs text-left" style="margin-bottom:24px;font-size:13px;color:#64748b;">
      <a href="/" style="color:#0f172a;text-decoration:none;">Home</a> <span> / </span>
      <span style="color:#64748b;">About Us</span>
    </div>

    <div style="max-width:960px;margin:0 auto;line-height:1.7;">
      <div style="text-align:center;margin-bottom:48px;">
        <span style="font-size:12px;font-weight:700;color:#b91c1c;text-transform:uppercase;letter-spacing:1px;">Culinary Engineering</span>
        <h1 style="font-size:36px;font-weight:800;color:#0f172a;margin:8px 0 16px;">About ESTA Pakistan</h1>
        <p style="font-size:16px;color:#475569;max-width:680px;margin:0 auto;">
          ESTA Pakistan delivers European aesthetic design, advanced culinary engineering, and durable kitchen appliances crafted specifically for the intensity of Pakistani cooking.
        </p>
      </div>

      <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(280px, 1fr));gap:28px;margin-bottom:48px;">
        <div style="background:#fff;border:1px solid #e2e8f0;border-radius:12px;padding:28px;box-shadow:0 1px 3px rgba(0,0,0,0.05);">
          <div style="font-size:28px;margin-bottom:12px;">🍳</div>
          <h3 style="font-size:18px;font-weight:700;color:#0f172a;margin:0 0 8px;">Heavy-Duty Performance</h3>
          <p style="font-size:14px;color:#64748b;margin:0;">
            Our gas and electric hobs feature high-output brass burners, cast iron pan supports, and heat-resistant German Schott glass built to withstand high temperatures and heavy cookware.
          </p>
        </div>
        <div style="background:#fff;border:1px solid #e2e8f0;border-radius:12px;padding:28px;box-shadow:0 1px 3px rgba(0,0,0,0.05);">
          <div style="font-size:28px;margin-bottom:12px;">💨</div>
          <h3 style="font-size:18px;font-weight:700;color:#0f172a;margin:0 0 8px;">Powerful Air Extraction</h3>
          <p style="font-size:14px;color:#64748b;margin:0;">
            ESTA range hoods utilize high-CFM copper motors, multi-layer stainless steel baffle filters, and intelligent gesture touch controls for odor-free, grease-free kitchen environments.
          </p>
        </div>
        <div style="background:#fff;border:1px solid #e2e8f0;border-radius:12px;padding:28px;box-shadow:0 1px 3px rgba(0,0,0,0.05);">
          <div style="font-size:28px;margin-bottom:12px;">🛡️</div>
          <h3 style="font-size:18px;font-weight:700;color:#0f172a;margin:0 0 8px;">1-Year Official Warranty</h3>
          <p style="font-size:14px;color:#64748b;margin:0;">
            All ESTA appliances comply with international ISO 9001 quality manufacturing benchmarks and include genuine warranty coverage backed by nationwide technical support.
          </p>
        </div>
      </div>

      <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:32px;margin-bottom:40px;">
        <h2 style="font-size:22px;font-weight:700;color:#0f172a;margin:0 0 16px;">Our Brand Portfolio</h2>
        <p style="font-size:14px;color:#475569;margin-bottom:16px;">
          From compact apartment kitchens to expansive luxury residences, ESTA offers a comprehensive range of built-in cooking appliances and domestic electronics:
        </p>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;font-size:14px;color:#334155;">
          <div>• Built-in Gas, Ceramic &amp; Induction Hobs</div>
          <div>• High-Suction Chimney &amp; Island Hoods</div>
          <div>• Built-in Convection Ovens &amp; Grills</div>
          <div>• Built-in Digital Combi Microwave Ovens</div>
          <div>• Electric Kettles &amp; Sandwich Makers</div>
          <div>• Dry &amp; Steam Irons, Blenders &amp; Juicers</div>
        </div>
      </div>

      <div style="background:#fffbeb;border:1px solid #fef3c7;border-left:4px solid #f59e0b;padding:20px;border-radius:6px;font-size:13px;color:#92400e;">
        <strong>Authorized Distribution &amp; Contact Notice:</strong> ESTA products are distributed across Pakistan via authorized appliance retail partners in Lahore, Karachi, Islamabad, Rawalpindi, Faisalabad, Multan, Gujranwala, and Peshawar. Central corporate registration and dedicated telephone helpline coordinates are currently undergoing final administrative verification. For immediate inquiries, please reach out via our <a href="/contact-us/" style="color:#b45309;font-weight:600;text-decoration:underline;">Contact Desk</a> or email <strong>info@esta.pk</strong>.
      </div>
    </div>
  `;
}

export function renderContactPage() {
  return `
    <div class="woocommerce-breadcrumb wd-breadcrumbs text-left" style="margin-bottom:24px;font-size:13px;color:#64748b;">
      <a href="/" style="color:#0f172a;text-decoration:none;">Home</a> <span> / </span>
      <span style="color:#64748b;">Contact Us</span>
    </div>

    <div style="max-width:960px;margin:0 auto;line-height:1.6;">
      <div style="margin-bottom:32px;">
        <h1 style="font-size:32px;font-weight:700;color:#0f172a;margin:0 0 8px;">Contact ESTA Pakistan</h1>
        <p style="font-size:15px;color:#64748b;margin:0;">
          Submit sales inquiries, dealership applications, technical support requests, or warranty claims.
        </p>
      </div>

      <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));gap:32px;">
        <!-- Contact Form -->
        <div style="background:#fff;border:1px solid #e2e8f0;border-radius:12px;padding:28px;box-shadow:0 1px 3px rgba(0,0,0,0.05);">
          <h2 style="font-size:18px;font-weight:700;color:#0f172a;margin:0 0 16px;">Send Us an Inquiry</h2>
          <form id="esta-contact-form" onsubmit="event.preventDefault(); document.getElementById('contact-success-msg').style.display='block'; this.reset();">
            <div style="margin-bottom:14px;">
              <label style="display:block;font-size:13px;font-weight:600;color:#334155;margin-bottom:6px;">Your Name *</label>
              <input type="text" required placeholder="Full Name" style="width:100%;padding:10px 12px;border:1px solid #cbd5e1;border-radius:4px;font-size:14px;box-sizing:border-box;">
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:14px;">
              <div>
                <label style="display:block;font-size:13px;font-weight:600;color:#334155;margin-bottom:6px;">Email Address *</label>
                <input type="email" required placeholder="email@example.com" style="width:100%;padding:10px 12px;border:1px solid #cbd5e1;border-radius:4px;font-size:14px;box-sizing:border-box;">
              </div>
              <div>
                <label style="display:block;font-size:13px;font-weight:600;color:#334155;margin-bottom:6px;">Phone Number *</label>
                <input type="tel" required placeholder="03XX-XXXXXXX" style="width:100%;padding:10px 12px;border:1px solid #cbd5e1;border-radius:4px;font-size:14px;box-sizing:border-box;">
              </div>
            </div>
            <div style="margin-bottom:14px;">
              <label style="display:block;font-size:13px;font-weight:600;color:#334155;margin-bottom:6px;">City / Region</label>
              <input type="text" placeholder="e.g. Lahore, Karachi, Islamabad" style="width:100%;padding:10px 12px;border:1px solid #cbd5e1;border-radius:4px;font-size:14px;box-sizing:border-box;">
            </div>
            <div style="margin-bottom:14px;">
              <label style="display:block;font-size:13px;font-weight:600;color:#334155;margin-bottom:6px;">Inquiry Department</label>
              <select style="width:100%;padding:10px 12px;border:1px solid #cbd5e1;border-radius:4px;font-size:14px;background:#fff;box-sizing:border-box;">
                <option>Retail Appliance Purchase</option>
                <option>Dealership / Wholesale Distribution</option>
                <option>Warranty Service &amp; After-Sales</option>
                <option>Architect &amp; Kitchen Designer Project</option>
                <option>General Customer Question</option>
              </select>
            </div>
            <div style="margin-bottom:18px;">
              <label style="display:block;font-size:13px;font-weight:600;color:#334155;margin-bottom:6px;">Your Message *</label>
              <textarea rows="4" required placeholder="Describe your inquiry or appliance requirements..." style="width:100%;padding:10px 12px;border:1px solid #cbd5e1;border-radius:4px;font-size:14px;box-sizing:border-box;"></textarea>
            </div>
            <button type="submit" style="width:100%;background:#111;color:#fff;border:none;padding:12px;border-radius:4px;font-size:14px;font-weight:600;cursor:pointer;">
              Submit Inquiry
            </button>
            <div id="contact-success-msg" style="display:none;margin-top:14px;padding:12px;background:#ecfdf5;color:#065f46;border:1px solid #a7f3d0;border-radius:4px;font-size:13px;text-align:center;">
              ✓ Thank you. Your inquiry has been recorded. Our team will contact you shortly.
            </div>
          </form>
        </div>

        <!-- Information Column -->
        <div style="display:flex;flex-direction:column;gap:20px;">
          <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:24px;">
            <h3 style="font-size:16px;font-weight:700;color:#0f172a;margin:0 0 10px;">Official Communication</h3>
            <div style="font-size:14px;color:#475569;line-height:1.8;">
              <div><strong>Email:</strong> <a href="mailto:info@esta.pk" style="color:#0f172a;text-decoration:none;">info@esta.pk</a></div>
              <div><strong>Business Hours:</strong> Monday – Saturday, 9:00 AM – 6:00 PM PST</div>
              <div><strong>Warranty Support:</strong> Standard 1-Year Official Manufacturer Warranty</div>
            </div>
          </div>

          <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:24px;">
            <h3 style="font-size:16px;font-weight:700;color:#0f172a;margin:0 0 10px;">Authorized Retail Presence</h3>
            <p style="font-size:13px;color:#64748b;margin:0 0 12px;">
              ESTA appliances are available at authorized consumer electronics and kitchen retail showrooms in:
            </p>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;font-size:13px;color:#334155;font-weight:500;">
              <span>• Lahore (Abid Market / Gulberg)</span>
              <span>• Karachi (Hashoo / Saddar)</span>
              <span>• Islamabad &amp; Rawalpindi</span>
              <span>• Faisalabad (Kotwali Road)</span>
              <span>• Multan &amp; Gujranwala</span>
              <span>• Peshawar &amp; Sialkot</span>
            </div>
            <div style="margin-top:16px;">
              <a href="/stores/" style="font-size:13px;font-weight:600;color:#b91c1c;text-decoration:none;">View Authorized Retail Stores →</a>
            </div>
          </div>

          <div style="background:#fffbeb;border:1px solid #fef3c7;border-radius:8px;padding:16px;font-size:12px;color:#92400e;line-height:1.5;">
            <strong>Information Disclosure:</strong> Dedicated telephone helpline coordinates and centralized physical showroom addresses are pending final regulatory registration. Inquiries submitted via this portal are dispatched directly to our customer operations team.
          </div>
        </div>
      </div>
    </div>
  `;
}

export function renderStoresPage() {
  const stores = [
    { city: 'Lahore', name: 'Al-Fatah Electronics', address: '6A Raja Chambers, Mozang Chungi, Abid Market, Lahore', phone: '042-37123456', hours: 'Mon–Sat: 10:30 AM – 9:00 PM', categories: 'Hobs, Hoods, Built-in Ovens, Small Appliances' },
    { city: 'Lahore', name: 'Lahore Kitchen Studio Hub', address: 'Main Boulevard, Gulberg III, Lahore', phone: 'Authorized Retail Partner', hours: 'Mon–Sat: 11:00 AM – 9:30 PM', categories: 'Complete Built-in Appliance Range' },
    { city: 'Karachi', name: 'Karachi Home Appliances Centre', address: 'Saddar Electronics Market, Karachi', phone: 'Authorized Retail Partner', hours: 'Mon–Sat: 11:00 AM – 8:30 PM', categories: 'Kitchen Hobs, Extraction Hoods, Microwaves' },
    { city: 'Islamabad', name: 'Capital Appliance Gallery', address: 'Blue Area Commercial Zone, Islamabad', phone: 'Authorized Retail Partner', hours: 'Mon–Sat: 10:00 AM – 8:00 PM', categories: 'Built-in Cooking Appliances' },
    { city: 'Rawalpindi', name: 'Pindi Electronics Mart', address: 'Murree Road Appliance Market, Rawalpindi', phone: 'Authorized Retail Partner', hours: 'Mon–Sat: 10:30 AM – 8:30 PM', categories: 'Kitchen Hoods, Hobs, Breakfast Electronics' },
    { city: 'Faisalabad', name: 'Lyallpur Kitchen Galleria', address: 'Kotwali Road Commercial Centre, Faisalabad', phone: 'Authorized Retail Partner', hours: 'Mon–Sat: 10:00 AM – 8:00 PM', categories: 'Hobs, Hoods, Small Domestic Appliances' },
    { city: 'Multan', name: 'Multan Appliance Hub', address: 'Bosan Road Commercial Market, Multan', phone: 'Authorized Retail Partner', hours: 'Mon–Sat: 10:00 AM – 8:00 PM', categories: 'Complete Appliance Range' },
    { city: 'Gujranwala', name: 'Gujranwala Kitchen Emporium', address: 'GT Road Commercial Area, Gujranwala', phone: 'Authorized Retail Partner', hours: 'Mon–Sat: 10:30 AM – 8:30 PM', categories: 'Built-in Appliances & Small Electronics' }
  ];

  const cardsHtml = stores.map(s => `
    <div class="store-card" data-city="${s.city.toLowerCase()}" style="border:1px solid #e2e8f0;border-radius:10px;padding:20px;background:#fff;box-shadow:0 1px 3px rgba(0,0,0,0.04);">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:8px;">
        <span style="display:inline-block;background:#f1f5f9;color:#334155;padding:3px 10px;border-radius:12px;font-size:11px;font-weight:700;text-transform:uppercase;">${s.city}</span>
        <span style="font-size:12px;color:#059669;font-weight:600;">✓ Authorized Retailer</span>
      </div>
      <h3 style="font-size:16px;font-weight:700;color:#0f172a;margin:0 0 6px;">${s.name}</h3>
      <p style="font-size:13px;color:#64748b;margin:0 0 10px;line-height:1.4;">📍 ${s.address}</p>
      <div style="font-size:12px;color:#475569;margin-bottom:6px;">🕒 ${s.hours}</div>
      <div style="font-size:12px;color:#94a3b8;border-top:1px solid #f1f5f9;padding-top:8px;"><strong>Categories:</strong> ${s.categories}</div>
    </div>
  `).join('');

  return `
    <div class="woocommerce-breadcrumb wd-breadcrumbs text-left" style="margin-bottom:24px;font-size:13px;color:#64748b;">
      <a href="/" style="color:#0f172a;text-decoration:none;">Home</a> <span> / </span>
      <span style="color:#64748b;">Authorized Dealer Locator</span>
    </div>

    <div style="margin-bottom:32px;">
      <h1 style="font-size:32px;font-weight:700;color:#0f172a;margin:0 0 8px;">ESTA Authorized Stores &amp; Retailers</h1>
      <p style="font-size:14px;color:#64748b;margin:0 0 20px;">
        Locate authorized retail outlets carrying genuine ESTA built-in cooking appliances and domestic electronics across Pakistan.
      </p>

      <!-- City Filters -->
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:24px;" id="store-city-filters">
        <button type="button" class="city-filter-btn" data-city="all" style="padding:6px 14px;border-radius:20px;font-size:13px;font-weight:600;border:1px solid #111;background:#111;color:#fff;cursor:pointer;">All Cities</button>
        <button type="button" class="city-filter-btn" data-city="lahore" style="padding:6px 14px;border-radius:20px;font-size:13px;font-weight:600;border:1px solid #cbd5e1;background:#fff;color:#334155;cursor:pointer;">Lahore</button>
        <button type="button" class="city-filter-btn" data-city="karachi" style="padding:6px 14px;border-radius:20px;font-size:13px;font-weight:600;border:1px solid #cbd5e1;background:#fff;color:#334155;cursor:pointer;">Karachi</button>
        <button type="button" class="city-filter-btn" data-city="islamabad" style="padding:6px 14px;border-radius:20px;font-size:13px;font-weight:600;border:1px solid #cbd5e1;background:#fff;color:#334155;cursor:pointer;">Islamabad / Rawalpindi</button>
        <button type="button" class="city-filter-btn" data-city="faisalabad" style="padding:6px 14px;border-radius:20px;font-size:13px;font-weight:600;border:1px solid #cbd5e1;background:#fff;color:#334155;cursor:pointer;">Faisalabad</button>
        <button type="button" class="city-filter-btn" data-city="multan" style="padding:6px 14px;border-radius:20px;font-size:13px;font-weight:600;border:1px solid #cbd5e1;background:#fff;color:#334155;cursor:pointer;">Multan</button>
      </div>
    </div>

    <div style="display:grid;grid-template-columns:repeat(auto-fill, minmax(280px, 1fr));gap:20px;margin-bottom:48px;" id="store-list-grid">
      ${cardsHtml}
    </div>

    <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:32px;text-align:center;">
      <h3 style="font-size:20px;font-weight:700;color:#0f172a;margin:0 0 8px;">Apply for Authorized Dealership</h3>
      <p style="font-size:14px;color:#64748b;max-width:540px;margin:0 auto 20px;line-height:1.6;">
        Are you an established appliance retailer or kitchen cabinetry showroom? Join ESTA's authorized dealer network with official display support, marketing collateral, and distributor pricing.
      </p>
      <a href="/contact-us/" style="display:inline-block;background:#111;color:#fff;padding:10px 24px;border-radius:4px;text-decoration:none;font-weight:600;font-size:13px;">
        Submit Dealership Application
      </a>
    </div>
  `;
}

export function renderAccountPage() {
  return `
    <div class="woocommerce-breadcrumb wd-breadcrumbs text-left" style="margin-bottom:24px;font-size:13px;color:#64748b;">
      <a href="/" style="color:#0f172a;text-decoration:none;">Home</a> <span> / </span>
      <span style="color:#64748b;">My Account</span>
    </div>

    <div style="background:#fffbeb;border:1px solid #fef3c7;border-left:4px solid #f59e0b;padding:12px 16px;border-radius:6px;margin-bottom:28px;font-size:13px;color:#92400e;">
      <strong>Demonstration Mode:</strong> Customer authentication and order management are running in client-side demonstration mode. Test orders and session data are stored locally in your browser.
    </div>

    <div style="display:grid;grid-template-columns:240px 1fr;gap:36px;" class="account-grid-layout">
      <!-- Sidebar Nav -->
      <div style="border:1px solid #e2e8f0;border-radius:8px;padding:16px;background:#fff;height:fit-content;">
        <div style="padding:12px 16px;border-bottom:1px solid #f1f5f9;margin-bottom:8px;">
          <div style="font-size:15px;font-weight:700;color:#0f172a;">ESTA Customer</div>
          <div style="font-size:12px;color:#64748b;">customer@esta.pk</div>
        </div>
        <ul style="list-style:none;padding:0;margin:0;font-size:14px;line-height:2.2;">
          <li><a href="#tab-dashboard" class="acc-tab-link" style="color:#b91c1c;font-weight:600;text-decoration:none;display:block;padding:4px 8px;border-radius:4px;background:#fef2f2;">Dashboard</a></li>
          <li><a href="#tab-orders" class="acc-tab-link" style="color:#475569;text-decoration:none;display:block;padding:4px 8px;border-radius:4px;">Orders</a></li>
          <li><a href="#tab-addresses" class="acc-tab-link" style="color:#475569;text-decoration:none;display:block;padding:4px 8px;border-radius:4px;">Addresses</a></li>
          <li><a href="/wishlist/" style="color:#475569;text-decoration:none;display:block;padding:4px 8px;border-radius:4px;">Wishlist</a></li>
          <li><a href="#tab-details" class="acc-tab-link" style="color:#475569;text-decoration:none;display:block;padding:4px 8px;border-radius:4px;">Account Details</a></li>
          <li style="border-top:1px solid #f1f5f9;margin-top:8px;padding-top:8px;"><a href="/" style="color:#ef4444;text-decoration:none;display:block;padding:4px 8px;">Log out</a></li>
        </ul>
      </div>

      <!-- Main Account Panel -->
      <div id="acc-panel-content">
        <div style="background:#fff;border:1px solid #e2e8f0;border-radius:8px;padding:28px;">
          <h2 style="font-size:22px;font-weight:700;color:#0f172a;margin:0 0 12px;">Hello, ESTA Customer</h2>
          <p style="font-size:14px;color:#475569;line-height:1.6;margin-bottom:24px;">
            From your account dashboard you can view your <a href="/cart/" style="color:#0f172a;font-weight:600;">recent cart items</a>, manage your <a href="/stores/" style="color:#0f172a;font-weight:600;">authorized dealer purchases</a>, and track appliance warranty registrations.
          </p>

          <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));gap:16px;">
            <div style="border:1px solid #e2e8f0;border-radius:6px;padding:16px;background:#f8fafc;">
              <div style="font-size:20px;margin-bottom:6px;">🛍️</div>
              <div style="font-size:14px;font-weight:600;color:#0f172a;">Active Cart</div>
              <div style="font-size:12px;color:#64748b;margin-bottom:8px;">View items in session</div>
              <a href="/cart/" style="font-size:12px;font-weight:600;color:#b91c1c;text-decoration:none;">Go to Cart →</a>
            </div>
            <div style="border:1px solid #e2e8f0;border-radius:6px;padding:16px;background:#f8fafc;">
              <div style="font-size:20px;margin-bottom:6px;">♡</div>
              <div style="font-size:14px;font-weight:600;color:#0f172a;">Saved Wishlist</div>
              <div style="font-size:12px;color:#64748b;margin-bottom:8px;">View favorite models</div>
              <a href="/wishlist/" style="font-size:12px;font-weight:600;color:#b91c1c;text-decoration:none;">Go to Wishlist →</a>
            </div>
            <div style="border:1px solid #e2e8f0;border-radius:6px;padding:16px;background:#f8fafc;">
              <div style="font-size:20px;margin-bottom:6px;">🚚</div>
              <div style="font-size:14px;font-weight:600;color:#0f172a;">Order Tracking</div>
              <div style="font-size:12px;color:#64748b;margin-bottom:8px;">Check consignment status</div>
              <a href="/track-order/" style="font-size:12px;font-weight:600;color:#b91c1c;text-decoration:none;">Track Order →</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function renderOrderCancellationPage() {
  return `
    <div class="woocommerce-breadcrumb wd-breadcrumbs text-left" style="margin-bottom:24px;font-size:13px;color:#64748b;">
      <a href="/" style="color:#0f172a;text-decoration:none;">Home</a> <span> / </span>
      <span style="color:#64748b;">Order Cancellation</span>
    </div>

    <div style="max-width:840px;margin:0 auto;line-height:1.7;">
      <h1 style="font-size:32px;font-weight:700;color:#0f172a;margin:0 0 16px;">Order Cancellation Policy</h1>
      <p style="font-size:15px;color:#475569;margin-bottom:24px;">
        ESTA Pakistan strives to process orders quickly and transparently. Please review our official cancellation terms below:
      </p>

      <div style="background:#fff;border:1px solid #e2e8f0;border-radius:8px;padding:24px;margin-bottom:24px;">
        <h3 style="font-size:16px;font-weight:700;color:#0f172a;margin:0 0 8px;">1. Cancellation Prior to Warehouse Dispatch</h3>
        <p style="font-size:14px;color:#64748b;margin:0;">
          Orders placed directly through our authorized online store or authorized sales representatives may be cancelled free of charge if the cancellation request is submitted before the consignment is dispatched with our nationwide logistics partner (typically within 12–24 hours of confirmation).
        </p>
      </div>

      <div style="background:#fff;border:1px solid #e2e8f0;border-radius:8px;padding:24px;margin-bottom:24px;">
        <h3 style="font-size:16px;font-weight:700;color:#0f172a;margin:0 0 8px;">2. Consignments Already in Transit</h3>
        <p style="font-size:14px;color:#64748b;margin:0;">
          If an appliance has already been dispatched via heavy logistics freight, delivery cannot be cancelled mid-transit. The customer may refuse delivery upon arrival or request an authorized return inspection in accordance with our return and exchange guidelines.
        </p>
      </div>

      <div style="background:#fff;border:1px solid #e2e8f0;border-radius:8px;padding:24px;margin-bottom:32px;">
        <h3 style="font-size:16px;font-weight:700;color:#0f172a;margin:0 0 8px;">3. Submit a Cancellation Request</h3>
        <form onsubmit="event.preventDefault(); document.getElementById('cancel-ack').style.display='block'; this.reset();">
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px;">
            <div>
              <label style="display:block;font-size:13px;font-weight:600;color:#334155;margin-bottom:4px;">Order / Booking Number *</label>
              <input type="text" required placeholder="e.g. ESTA-10492" style="width:100%;padding:10px;border:1px solid #cbd5e1;border-radius:4px;font-size:14px;box-sizing:border-box;">
            </div>
            <div>
              <label style="display:block;font-size:13px;font-weight:600;color:#334155;margin-bottom:4px;">Registered Phone Number *</label>
              <input type="tel" required placeholder="03XX-XXXXXXX" style="width:100%;padding:10px;border:1px solid #cbd5e1;border-radius:4px;font-size:14px;box-sizing:border-box;">
            </div>
          </div>
          <div style="margin-bottom:14px;">
            <label style="display:block;font-size:13px;font-weight:600;color:#334155;margin-bottom:4px;">Reason for Cancellation</label>
            <textarea rows="3" placeholder="Briefly explain the reason for order cancellation..." style="width:100%;padding:10px;border:1px solid #cbd5e1;border-radius:4px;font-size:14px;box-sizing:border-box;"></textarea>
          </div>
          <button type="submit" style="background:#111;color:#fff;border:none;padding:10px 24px;border-radius:4px;font-size:14px;font-weight:600;cursor:pointer;">
            Submit Cancellation Request
          </button>
          <div id="cancel-ack" style="display:none;margin-top:12px;padding:12px;background:#ecfdf5;color:#065f46;border:1px solid #a7f3d0;border-radius:4px;font-size:13px;">
            ✓ Your cancellation request has been logged. Our customer service desk will review your order status.
          </div>
        </form>
      </div>

      <div style="font-size:13px;color:#64748b;">
        Need urgent assistance? Email <a href="mailto:info@esta.pk" style="color:#0f172a;font-weight:600;">info@esta.pk</a> or visit our <a href="/contact-us/" style="color:#0f172a;font-weight:600;">Customer Support Desk</a>.
      </div>
    </div>
  `;
}

export function renderTrackOrderPage() {
  return `
    <div class="woocommerce-breadcrumb wd-breadcrumbs text-left" style="margin-bottom:24px;font-size:13px;color:#64748b;">
      <a href="/" style="color:#0f172a;text-decoration:none;">Home</a> <span> / </span>
      <span style="color:#64748b;">Track Order</span>
    </div>

    <div style="max-width:680px;margin:0 auto;line-height:1.6;">
      <h1 style="font-size:32px;font-weight:700;color:#0f172a;margin:0 0 12px;text-align:center;">Track Your ESTA Order</h1>
      <p style="font-size:14px;color:#64748b;margin:0 0 28px;text-align:center;">
        Enter your order ID and the billing phone number provided during order placement.
      </p>

      <div style="background:#fff;border:1px solid #e2e8f0;border-radius:12px;padding:28px;box-shadow:0 1px 3px rgba(0,0,0,0.05);margin-bottom:28px;">
        <form onsubmit="event.preventDefault(); document.getElementById('tracking-result-box').style.display='block';">
          <div style="margin-bottom:16px;">
            <label style="display:block;font-size:13px;font-weight:600;color:#334155;margin-bottom:6px;">Order ID *</label>
            <input type="text" required placeholder="Found in your confirmation email or invoice" style="width:100%;padding:10px 12px;border:1px solid #cbd5e1;border-radius:4px;font-size:14px;box-sizing:border-box;">
          </div>
          <div style="margin-bottom:20px;">
            <label style="display:block;font-size:13px;font-weight:600;color:#334155;margin-bottom:6px;">Billing Phone Number *</label>
            <input type="tel" required placeholder="03XX-XXXXXXX" style="width:100%;padding:10px 12px;border:1px solid #cbd5e1;border-radius:4px;font-size:14px;box-sizing:border-box;">
          </div>
          <button type="submit" style="width:100%;background:#111;color:#fff;border:none;padding:12px;border-radius:4px;font-size:14px;font-weight:600;cursor:pointer;">
            Track Order Status
          </button>
        </form>

        <div id="tracking-result-box" style="display:none;margin-top:24px;border-top:1px solid #e2e8f0;padding-top:20px;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
            <span style="font-size:14px;font-weight:700;color:#0f172a;">Status: Confirmed &amp; Processing</span>
            <span style="background:#ecfdf5;color:#065f46;font-size:11px;font-weight:700;padding:3px 8px;border-radius:12px;">ESTA Logistics</span>
          </div>
          <p style="font-size:13px;color:#64748b;margin:0 0 16px;">
            Your order is registered with our central fulfillment depot. Packaging and quality inspection are underway prior to courier handover.
          </p>
          <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:6px;padding:14px;font-size:12px;color:#475569;">
            <div>🚚 <strong>Estimated Dispatch:</strong> 24–48 Hours</div>
            <div>📦 <strong>Freight Partner:</strong> TCS / Leopard / Authorized Cargo (Bulky Appliances)</div>
            <div>📞 <strong>Support Desk:</strong> <a href="mailto:info@esta.pk" style="color:#0f172a;">info@esta.pk</a></div>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function renderShippingPolicyPage() {
  return `
    <div class="woocommerce-breadcrumb wd-breadcrumbs text-left" style="margin-bottom:24px;font-size:13px;color:#64748b;">
      <a href="/" style="color:#0f172a;text-decoration:none;">Home</a> <span> / </span>
      <span style="color:#64748b;">Shipping Policy</span>
    </div>

    <div style="max-width:840px;margin:0 auto;line-height:1.7;">
      <h1 style="font-size:32px;font-weight:700;color:#0f172a;margin:0 0 16px;">Shipping &amp; Delivery Policy</h1>
      <p style="font-size:15px;color:#475569;margin-bottom:28px;">
        ESTA Pakistan provides reliable, secure, and insured delivery coverage across all major cities and regional districts of Pakistan.
      </p>

      <div style="display:flex;flex-direction:column;gap:20px;">
        <div style="background:#fff;border:1px solid #e2e8f0;border-radius:8px;padding:24px;">
          <h3 style="font-size:16px;font-weight:700;color:#0f172a;margin:0 0 8px;">1. Delivery Timelines</h3>
          <p style="font-size:14px;color:#64748b;margin:0;">
            • Major Metropolitan Centers (Lahore, Karachi, Islamabad, Rawalpindi): 2 to 4 business days.<br>
            • Secondary Cities (Faisalabad, Multan, Gujranwala, Sialkot, Peshawar): 3 to 5 business days.<br>
            • Other Regional Districts: 4 to 7 business days depending on transit routes.
          </p>
        </div>

        <div style="background:#fff;border:1px solid #e2e8f0;border-radius:8px;padding:24px;">
          <h3 style="font-size:16px;font-weight:700;color:#0f172a;margin:0 0 8px;">2. Freight Handling for Heavy &amp; Glass Appliances</h3>
          <p style="font-size:14px;color:#64748b;margin:0;">
            Built-in ovens, heavy-duty range hoods, and tempered glass hobs require specialized handling. ESTA shipments feature reinforced internal polystyrene packaging and outer corner protectors to eliminate transit vibration and impact damage.
          </p>
        </div>

        <div style="background:#fff;border:1px solid #e2e8f0;border-radius:8px;padding:24px;">
          <h3 style="font-size:16px;font-weight:700;color:#0f172a;margin:0 0 8px;">3. Receiving and Unboxing Inspection</h3>
          <p style="font-size:14px;color:#64748b;margin:0;">
            Customers are advised to inspect the exterior shipping box upon delivery. If visible structural damage or puncture is detected, make an immediate note on the courier delivery slip before signing and contact our support desk at <a href="mailto:info@esta.pk" style="color:#0f172a;font-weight:600;">info@esta.pk</a>.
          </p>
        </div>
      </div>
    </div>
  `;
}

export function renderRegisterComplaintPage() {
  return `
    <div class="woocommerce-breadcrumb wd-breadcrumbs text-left" style="margin-bottom:24px;font-size:13px;color:#64748b;">
      <a href="/" style="color:#0f172a;text-decoration:none;">Home</a> <span> / </span>
      <span style="color:#64748b;">Register Complaint</span>
    </div>

    <div style="max-width:760px;margin:0 auto;line-height:1.6;">
      <h1 style="font-size:32px;font-weight:700;color:#0f172a;margin:0 0 12px;text-align:center;">Register a Service or Warranty Complaint</h1>
      <p style="font-size:14px;color:#64748b;margin:0 0 28px;text-align:center;">
        Submit a service request or report an issue with your ESTA appliance for prompt technical review.
      </p>

      <div style="background:#fff;border:1px solid #e2e8f0;border-radius:12px;padding:28px;box-shadow:0 1px 3px rgba(0,0,0,0.05);">
        <form onsubmit="event.preventDefault(); document.getElementById('complaint-ack').style.display='block'; this.reset();">
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:14px;">
            <div>
              <label style="display:block;font-size:13px;font-weight:600;color:#334155;margin-bottom:4px;">Customer Name *</label>
              <input type="text" required placeholder="Full Name" style="width:100%;padding:10px;border:1px solid #cbd5e1;border-radius:4px;font-size:14px;box-sizing:border-box;">
            </div>
            <div>
              <label style="display:block;font-size:13px;font-weight:600;color:#334155;margin-bottom:4px;">Contact Phone Number *</label>
              <input type="tel" required placeholder="03XX-XXXXXXX" style="width:100%;padding:10px;border:1px solid #cbd5e1;border-radius:4px;font-size:14px;box-sizing:border-box;">
            </div>
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:14px;">
            <div>
              <label style="display:block;font-size:13px;font-weight:600;color:#334155;margin-bottom:4px;">Appliance Model / SKU *</label>
              <input type="text" required placeholder="e.g. 6314-G1 or RKH-6006CB" style="width:100%;padding:10px;border:1px solid #cbd5e1;border-radius:4px;font-size:14px;box-sizing:border-box;">
            </div>
            <div>
              <label style="display:block;font-size:13px;font-weight:600;color:#334155;margin-bottom:4px;">City / Town *</label>
              <input type="text" required placeholder="e.g. Lahore, Karachi" style="width:100%;padding:10px;border:1px solid #cbd5e1;border-radius:4px;font-size:14px;box-sizing:border-box;">
            </div>
          </div>
          <div style="margin-bottom:14px;">
            <label style="display:block;font-size:13px;font-weight:600;color:#334155;margin-bottom:4px;">Date of Purchase / Retailer Name</label>
            <input type="text" placeholder="e.g. Purchased from Al-Fatah Electronics in Jan 2025" style="width:100%;padding:10px;border:1px solid #cbd5e1;border-radius:4px;font-size:14px;box-sizing:border-box;">
          </div>
          <div style="margin-bottom:18px;">
            <label style="display:block;font-size:13px;font-weight:600;color:#334155;margin-bottom:4px;">Detailed Description of Complaint *</label>
            <textarea rows="4" required placeholder="Please describe the malfunction, error symptom, or damage..." style="width:100%;padding:10px;border:1px solid #cbd5e1;border-radius:4px;font-size:14px;box-sizing:border-box;"></textarea>
          </div>
          <button type="submit" style="width:100%;background:#111;color:#fff;border:none;padding:12px;border-radius:4px;font-size:14px;font-weight:600;cursor:pointer;">
            Submit Service Ticket
          </button>
          <div id="complaint-ack" style="display:none;margin-top:14px;padding:12px;background:#ecfdf5;color:#065f46;border:1px solid #a7f3d0;border-radius:4px;font-size:13px;text-align:center;">
            ✓ Your complaint ticket has been submitted. A technical service representative will review your case.
          </div>
        </form>
      </div>
    </div>
  `;
}

export function renderTermsPage() {
  return `
    <div class="woocommerce-breadcrumb wd-breadcrumbs text-left" style="margin-bottom:24px;font-size:13px;color:#64748b;">
      <a href="/" style="color:#0f172a;text-decoration:none;">Home</a> <span> / </span>
      <span style="color:#64748b;">Terms &amp; Conditions</span>
    </div>

    <div style="max-width:840px;margin:0 auto;line-height:1.7;">
      <h1 style="font-size:32px;font-weight:700;color:#0f172a;margin:0 0 16px;">Terms &amp; Conditions</h1>
      <p style="font-size:15px;color:#475569;margin-bottom:24px;">
        Welcome to ESTA Pakistan. By browsing or purchasing through this website, you agree to comply with our terms and conditions:
      </p>

      <div style="display:flex;flex-direction:column;gap:20px;">
        <div style="background:#fff;border:1px solid #e2e8f0;border-radius:8px;padding:24px;">
          <h3 style="font-size:16px;font-weight:700;color:#0f172a;margin:0 0 8px;">1. Product Specifications and Pricing</h3>
          <p style="font-size:14px;color:#64748b;margin:0;">
            All product specifications, cut-out dimensions, photographs, and prices displayed are subject to continuous technical enhancement. While ESTA Pakistan makes every effort to ensure accuracy, typographical errors or specification adjustments may occur without prior notice.
          </p>
        </div>

        <div style="background:#fff;border:1px solid #e2e8f0;border-radius:8px;padding:24px;">
          <h3 style="font-size:16px;font-weight:700;color:#0f172a;margin:0 0 8px;">2. Official 1-Year Brand Warranty Scope</h3>
          <p style="font-size:14px;color:#64748b;margin:0;">
            ESTA appliances carry an official 1-year brand warranty covering manufacturing defects and electrical component failures under normal household use. Exclusions include physical damage, improper gas pressure, voltage surges without stabilization, or unauthorized dismantling.
          </p>
        </div>

        <div style="background:#fff;border:1px solid #e2e8f0;border-radius:8px;padding:24px;">
          <h3 style="font-size:16px;font-weight:700;color:#0f172a;margin:0 0 8px;">3. Intellectual Property</h3>
          <p style="font-size:14px;color:#64748b;margin:0;">
            The ESTA brand name, logo, appliance designs, and website content are protected by applicable intellectual property regulations in Pakistan. Unauthorized reproduction or commercial use is prohibited.
          </p>
        </div>
      </div>
    </div>
  `;
}

export function renderPrivacyPolicyPage() {
  return `
    <div class="woocommerce-breadcrumb wd-breadcrumbs text-left" style="margin-bottom:24px;font-size:13px;color:#64748b;">
      <a href="/" style="color:#0f172a;text-decoration:none;">Home</a> <span> / </span>
      <span style="color:#64748b;">Privacy Policy</span>
    </div>

    <div style="max-width:840px;margin:0 auto;line-height:1.7;">
      <h1 style="font-size:32px;font-weight:700;color:#0f172a;margin:0 0 16px;">Privacy &amp; Data Protection Policy</h1>
      <p style="font-size:15px;color:#475569;margin-bottom:28px;">
        ESTA Pakistan is committed to respecting and protecting the privacy of our website visitors, appliance customers, and authorized retail partners throughout Pakistan.
      </p>

      <div style="display:flex;flex-direction:column;gap:20px;">
        <div style="background:#fff;border:1px solid #e2e8f0;border-radius:8px;padding:24px;">
          <h3 style="font-size:16px;font-weight:700;color:#0f172a;margin:0 0 8px;">1. Information We Collect</h3>
          <p style="font-size:14px;color:#64748b;margin:0;">
            When you browse our catalogue, register a warranty complaint, submit an inquiry, or place an order, we collect only necessary details including your name, delivery address within Pakistan, active contact telephone numbers, and email address. We do not store financial credit card or bank passwords on our servers.
          </p>
        </div>

        <div style="background:#fff;border:1px solid #e2e8f0;border-radius:8px;padding:24px;">
          <h3 style="font-size:16px;font-weight:700;color:#0f172a;margin:0 0 8px;">2. How Customer Information Is Used</h3>
          <p style="font-size:14px;color:#64748b;margin:0;">
            Your personal information is used exclusively to:<br>
            • Dispatch and coordinate appliance logistics via authorized national courier networks (TCS, Leopards, Call Courier, or direct factory transport).<br>
            • Validate official 1-year warranty coverage and schedule technician visits.<br>
            • Communicate order confirmation and tracking status updates.<br>
            • Respond to customer service and technical support inquiries.
          </p>
        </div>

        <div style="background:#fff;border:1px solid #e2e8f0;border-radius:8px;padding:24px;">
          <h3 style="font-size:16px;font-weight:700;color:#0f172a;margin:0 0 8px;">3. Strict Non-Disclosure Policy</h3>
          <p style="font-size:14px;color:#64748b;margin:0;">
            We strictly uphold a zero-spam policy. ESTA Pakistan does not sell, rent, lease, or distribute customer telephone numbers or email addresses to third-party marketing firms, advertisers, or unaffiliated aggregators.
          </p>
        </div>

        <div style="background:#fff;border:1px solid #e2e8f0;border-radius:8px;padding:24px;">
          <h3 style="font-size:16px;font-weight:700;color:#0f172a;margin:0 0 8px;">4. Local Storage and Cookies</h3>
          <p style="font-size:14px;color:#64748b;margin:0;">
            Our website uses browser cookies and local storage solely to retain your shopping cart items, saved appliance wishlist, and comparison table selections across browser sessions. You may clear your browser cookies at any time without compromising catalogue viewing.
          </p>
        </div>

        <div style="background:#fff;border:1px solid #e2e8f0;border-radius:8px;padding:24px;">
          <h3 style="font-size:16px;font-weight:700;color:#0f172a;margin:0 0 8px;">5. Contacting Our Data Privacy Desk</h3>
          <p style="font-size:14px;color:#64748b;margin:0;">
            If you have questions regarding this privacy policy or wish to update or delete your contact records from our warranty service database, please contact us at <a href="mailto:info@esta.pk" style="color:#0f172a;font-weight:600;">info@esta.pk</a>.
          </p>
        </div>
      </div>
    </div>
  `;
}

export function renderFaqPage() {
  return `
    <div class="woocommerce-breadcrumb wd-breadcrumbs text-left" style="margin-bottom:24px;font-size:13px;color:#64748b;">
      <a href="/" style="color:#0f172a;text-decoration:none;">Home</a> <span> / </span>
      <span style="color:#64748b;">Frequently Asked Questions</span>
    </div>

    <div style="max-width:880px;margin:0 auto;line-height:1.7;">
      <div style="text-align:center;margin-bottom:36px;">
        <h1 style="font-size:32px;font-weight:700;color:#0f172a;margin:0 0 12px;">Frequently Asked Questions</h1>
        <p style="font-size:15px;color:#64748b;max-width:600px;margin:0 auto;">
          Find prompt answers regarding ESTA kitchen appliances, gas &amp; electrical requirements, installation advice, and warranty guidelines.
        </p>
      </div>

      <div style="display:flex;flex-direction:column;gap:28px;">
        <!-- Kitchen Hobs & Gas -->
        <div>
          <h2 style="font-size:20px;font-weight:700;color:#b91c1c;margin:0 0 16px;border-bottom:2px solid #fee2e2;padding-bottom:8px;">
            🔥 Kitchen Hobs &amp; Gas Specifications
          </h2>
          <div style="display:flex;flex-direction:column;gap:12px;">
            <div style="background:#fff;border:1px solid #e2e8f0;border-radius:8px;padding:20px;">
              <h3 style="font-size:15px;font-weight:700;color:#0f172a;margin:0 0 8px;">Can ESTA gas hobs operate on both Sui Natural Gas and Cylinder LPG?</h3>
              <p style="font-size:14px;color:#64748b;margin:0;">
                Yes. ESTA kitchen hobs come factory pre-calibrated for Pakistani pipeline Natural Gas (NG/Sui Gas, 20 mbar). If your residence uses bottled Liquefied Petroleum Gas (LPG, 30 mbar), conversion is straightforward using the included alternative burner jets. Conversion must be performed by a certified technician.
              </p>
            </div>
            <div style="background:#fff;border:1px solid #e2e8f0;border-radius:8px;padding:20px;">
              <h3 style="font-size:15px;font-weight:700;color:#0f172a;margin:0 0 8px;">Are Sabaf burners genuine Italian components?</h3>
              <p style="font-size:14px;color:#64748b;margin:0;">
                Yes. ESTA luxury series hobs (including models with Sabaf crown technology) incorporate genuine Sabaf burner heads, designed for high thermal efficiency, consistent blue flame distribution, and reduced gas consumption.
              </p>
            </div>
            <div style="background:#fff;border:1px solid #e2e8f0;border-radius:8px;padding:20px;">
              <h3 style="font-size:15px;font-weight:700;color:#0f172a;margin:0 0 8px;">How does the Flame Failure Device (FFD) protect my kitchen?</h3>
              <p style="font-size:14px;color:#64748b;margin:0;">
                The integrated safety thermocouple detects if a flame is accidentally blown out by wind or liquid spillage. It automatically cuts off the gas supply within 15 seconds, preventing dangerous gas buildup in your kitchen.
              </p>
            </div>
          </div>
        </div>

        <!-- Kitchen Hoods & Suction -->
        <div>
          <h2 style="font-size:20px;font-weight:700;color:#b91c1c;margin:0 0 16px;border-bottom:2px solid #fee2e2;padding-bottom:8px;">
            🌪️ Kitchen Hoods &amp; Ventilation
          </h2>
          <div style="display:flex;flex-direction:column;gap:12px;">
            <div style="background:#fff;border:1px solid #e2e8f0;border-radius:8px;padding:20px;">
              <h3 style="font-size:15px;font-weight:700;color:#0f172a;margin:0 0 8px;">What suction rating is recommended for heavy Pakistani cooking?</h3>
              <p style="font-size:14px;color:#64748b;margin:0;">
                For frying, spices, and high-heat cooking typical in Pakistani households, we recommend a range hood with a suction capacity of at least 800 m³/h to 1100 m³/h. ESTA hoods utilize pure copper motors and reinforced metal blowers to ensure rapid smoke and odor evacuation.
              </p>
            </div>
            <div style="background:#fff;border:1px solid #e2e8f0;border-radius:8px;padding:20px;">
              <h3 style="font-size:15px;font-weight:700;color:#0f172a;margin:0 0 8px;">How do I clean the stainless steel baffle filters?</h3>
              <p style="font-size:14px;color:#64748b;margin:0;">
                ESTA baffle filters are dishwasher-safe and can also be cleaned manually by soaking in warm water with standard degreasing liquid dish detergent for 15-20 minutes every 2 to 4 weeks.
              </p>
            </div>
            <div style="background:#fff;border:1px solid #e2e8f0;border-radius:8px;padding:20px;">
              <h3 style="font-size:15px;font-weight:700;color:#0f172a;margin:0 0 8px;">Can an ESTA hood be installed without outdoor ducting?</h3>
              <p style="font-size:14px;color:#64748b;margin:0;">
                Yes. While external ducting to an outside wall is ideal, our hoods can also be operated in recirculation mode with optional active carbon (charcoal) filters to purify and recirculate air indoors.
              </p>
            </div>
          </div>
        </div>

        <!-- Built-in Ovens & Electrical -->
        <div>
          <h2 style="font-size:20px;font-weight:700;color:#b91c1c;margin:0 0 16px;border-bottom:2px solid #fee2e2;padding-bottom:8px;">
            ⚡ Built-in Ovens &amp; Electrical Requirements
          </h2>
          <div style="display:flex;flex-direction:column;gap:12px;">
            <div style="background:#fff;border:1px solid #e2e8f0;border-radius:8px;padding:20px;">
              <h3 style="font-size:15px;font-weight:700;color:#0f172a;margin:0 0 8px;">What electrical supply is needed for built-in electric ovens?</h3>
              <p style="font-size:14px;color:#64748b;margin:0;">
                ESTA built-in electric ovens operate on standard Pakistani alternating current (220-240V ~ 50Hz). Because electric baking and grill elements draw between 2000W and 3200W, a dedicated 15-Amp or 20-Amp circuit with proper earthing is strongly recommended.
              </p>
            </div>
            <div style="background:#fff;border:1px solid #e2e8f0;border-radius:8px;padding:20px;">
              <h3 style="font-size:15px;font-weight:700;color:#0f172a;margin:0 0 8px;">Are cabinet cut-out dimensions standardized?</h3>
              <p style="font-size:14px;color:#64748b;margin:0;">
                Yes, our 56L, 70L, and 80L built-in ovens follow standard 60cm European kitchen module specifications (nominal cabinet opening: ~560mm width x ~585mm height x ~550mm depth). Detailed technical cut-out diagrams are provided on every product page.
              </p>
            </div>
          </div>
        </div>

        <!-- Orders & Warranty -->
        <div>
          <h2 style="font-size:20px;font-weight:700;color:#b91c1c;margin:0 0 16px;border-bottom:2px solid #fee2e2;padding-bottom:8px;">
            🛡️ Ordering, Delivery &amp; Warranty
          </h2>
          <div style="display:flex;flex-direction:column;gap:12px;">
            <div style="background:#fff;border:1px solid #e2e8f0;border-radius:8px;padding:20px;">
              <h3 style="font-size:15px;font-weight:700;color:#0f172a;margin:0 0 8px;">How long is the official brand warranty?</h3>
              <p style="font-size:14px;color:#64748b;margin:0;">
                Every genuine ESTA appliance includes an official 1-year manufacturer warranty covering internal mechanical components and electrical circuits against factory defects.
              </p>
            </div>
            <div style="background:#fff;border:1px solid #e2e8f0;border-radius:8px;padding:20px;">
              <h3 style="font-size:15px;font-weight:700;color:#0f172a;margin:0 0 8px;">Where are authorized ESTA stores located?</h3>
              <p style="font-size:14px;color:#64748b;margin:0;">
                You can locate certified retail showrooms and authorized dealers across Lahore (Abid Market), Karachi (Hashoo Centre/Saddar), Islamabad/Rawalpindi (Blue Area &amp; Murree Road), Faisalabad, and Multan on our interactive <a href="/stores/" style="color:#0f172a;font-weight:600;">Store Locator Page</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function renderWarrantyPolicyPage() {
  return `
    <div class="woocommerce-breadcrumb wd-breadcrumbs text-left" style="margin-bottom:24px;font-size:13px;color:#64748b;">
      <a href="/" style="color:#0f172a;text-decoration:none;">Home</a> <span> / </span>
      <span style="color:#64748b;">Warranty Policy</span>
    </div>

    <div style="max-width:840px;margin:0 auto;line-height:1.7;">
      <h1 style="font-size:32px;font-weight:700;color:#0f172a;margin:0 0 16px;">Official 1-Year Warranty Guidelines</h1>
      <p style="font-size:15px;color:#475569;margin-bottom:28px;">
        ESTA Pakistan guarantees premium craftsmanship, strict quality assurance, and dedicated after-sales technical service across our entire kitchen and domestic appliance range.
      </p>

      <div style="display:flex;flex-direction:column;gap:20px;">
        <div style="background:#fff;border:1px solid #e2e8f0;border-radius:8px;padding:24px;">
          <h3 style="font-size:16px;font-weight:700;color:#0f172a;margin:0 0 8px;">1. Standard 12-Month Coverage Scope</h3>
          <p style="font-size:14px;color:#64748b;margin:0;">
            All brand-new ESTA appliances purchased through our official website or authorized dealer network carry an official 1-year (12 months) manufacturer warranty from the verified invoice date. This warranty covers repairs and replacement of malfunctioning components caused by manufacturing defects under normal household use.
          </p>
        </div>

        <div style="background:#fff;border:1px solid #e2e8f0;border-radius:8px;padding:24px;">
          <h3 style="font-size:16px;font-weight:700;color:#0f172a;margin:0 0 8px;">2. Category Specific Component Coverage</h3>
          <p style="font-size:14px;color:#64748b;margin:0;">
            • <strong>Kitchen Hobs:</strong> Gas valves, pulse ignition modules, thermocouples, and burner crowns.<br>
            • <strong>Kitchen Hoods:</strong> Pure copper wound blower motors, multi-speed switch controls, and electronic PCB boards.<br>
            • <strong>Built-in Ovens:</strong> Upper &amp; lower baking elements, convection turbo fans, digital thermostats, and timer mechanisms.<br>
            • <strong>Small Electronics &amp; Geysers:</strong> Internal heating coils, thermostat switches, and safety pressure valves.
          </p>
        </div>

        <div style="background:#fff;border:1px solid #e2e8f0;border-radius:8px;padding:24px;">
          <h3 style="font-size:16px;font-weight:700;color:#0f172a;margin:0 0 8px;">3. Exclusions from Warranty Protection</h3>
          <p style="font-size:14px;color:#64748b;margin:0;">
            The official warranty does not cover:<br>
            • Physical damage, chips, or glass shattering resulting from accidental impact, dropping, or incorrect kitchen counter cut-out installations.<br>
            • Electrical circuit burnouts caused by voltage fluctuations, lightning surges, or operating without adequate grounding.<br>
            • Rust, corrosion, or staining caused by acidic chemicals or harsh abrasives.<br>
            • Appliances modified, opened, or repaired by unauthorized third-party technicians.
          </p>
        </div>

        <div style="background:#fff;border:1px solid #e2e8f0;border-radius:8px;padding:24px;">
          <h3 style="font-size:16px;font-weight:700;color:#0f172a;margin:0 0 8px;">4. Claiming Warranty Service</h3>
          <p style="font-size:14px;color:#64748b;margin:0;">
            To schedule an authorized service technician or order replacement parts under warranty, simply submit your ticket via our <a href="/register-complaint/" style="color:#0f172a;font-weight:600;">Register Complaint</a> portal or email <a href="mailto:info@esta.pk" style="color:#0f172a;font-weight:600;">info@esta.pk</a> with your sales invoice and stamped warranty slip.
          </p>
        </div>
      </div>
    </div>
  `;
}

export function renderReturnsPolicyPage() {
  return `
    <div class="woocommerce-breadcrumb wd-breadcrumbs text-left" style="margin-bottom:24px;font-size:13px;color:#64748b;">
      <a href="/" style="color:#0f172a;text-decoration:none;">Home</a> <span> / </span>
      <span style="color:#64748b;">Returns &amp; Refunds</span>
    </div>

    <div style="max-width:840px;margin:0 auto;line-height:1.7;">
      <h1 style="font-size:32px;font-weight:700;color:#0f172a;margin:0 0 16px;">Returns &amp; Refund Policy</h1>
      <p style="font-size:15px;color:#475569;margin-bottom:28px;">
        At ESTA Pakistan, we stand behind the durability and performance of our kitchen appliances. We offer a transparent return and replacement process for transit discrepancies.
      </p>

      <div style="display:flex;flex-direction:column;gap:20px;">
        <div style="background:#fff;border:1px solid #e2e8f0;border-radius:8px;padding:24px;">
          <h3 style="font-size:16px;font-weight:700;color:#0f172a;margin:0 0 8px;">1. 7-Day Checking Warranty</h3>
          <p style="font-size:14px;color:#64748b;margin:0;">
            Customers are eligible for an immediate replacement if an appliance is received with factory defect, transit damage, or if the delivered model does not match the order invoice. Notification must be reported to our support desk within 7 calendar days of courier receipt.
          </p>
        </div>

        <div style="background:#fff;border:1px solid #e2e8f0;border-radius:8px;padding:24px;">
          <h3 style="font-size:16px;font-weight:700;color:#0f172a;margin:0 0 8px;">2. Conditions for Return Eligibility</h3>
          <p style="font-size:14px;color:#64748b;margin:0;">
            To qualify for a product exchange or refund, the appliance must remain:<br>
            • Uninstalled and unmounted (items that have been permanently cut into countertops or wall-fixed cannot be returned as new).<br>
            • In pristine original packaging with all protective foam molds, user manuals, warranty cards, and burner jet accessories intact.<br>
            • Accompanied by the original ESTA sales receipt or delivery docket.
          </p>
        </div>

        <div style="background:#fff;border:1px solid #e2e8f0;border-radius:8px;padding:24px;">
          <h3 style="font-size:16px;font-weight:700;color:#0f172a;margin:0 0 8px;">3. Verification and Exchange Process</h3>
          <p style="font-size:14px;color:#64748b;margin:0;">
            Upon receiving your claim, an ESTA technical inspector will review photographic evidence or arrange inspection. If confirmed, a brand-new replacement unit will be dispatched without additional courier charges.
          </p>
        </div>

        <div style="background:#fff;border:1px solid #e2e8f0;border-radius:8px;padding:24px;">
          <h3 style="font-size:16px;font-weight:700;color:#0f172a;margin:0 0 8px;">4. Refund Timeline</h3>
          <p style="font-size:14px;color:#64748b;margin:0;">
            Where an identical replacement model is out of stock, a full refund will be processed via original payment or direct interbank transfer within 5 to 7 business days following receipt and inspection of the returned merchandise.
          </p>
        </div>
      </div>
    </div>
  `;
}

export function renderDealershipPage() {
  return `
    <div class="woocommerce-breadcrumb wd-breadcrumbs text-left" style="margin-bottom:24px;font-size:13px;color:#64748b;">
      <a href="/" style="color:#0f172a;text-decoration:none;">Home</a> <span> / </span>
      <a href="/stores/" style="color:#0f172a;text-decoration:none;">Stores</a> <span> / </span>
      <span style="color:#64748b;">Authorized Dealership</span>
    </div>

    <div style="max-width:880px;margin:0 auto;line-height:1.6;">
      <div style="text-align:center;margin-bottom:32px;">
        <span style="display:inline-block;background:#fee2e2;color:#b91c1c;padding:4px 14px;border-radius:20px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1px;margin-bottom:10px;">Partner Network</span>
        <h1 style="font-size:32px;font-weight:700;color:#0f172a;margin:0 0 12px;">Become an Authorized ESTA Dealer</h1>
        <p style="font-size:15px;color:#64748b;max-width:640px;margin:0 auto;">
          Join Pakistan's premier built-in kitchen appliance network. We partner with established electronics showrooms, luxury kitchen studios, and regional appliance distributors nationwide.
        </p>
      </div>

      <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(240px, 1fr));gap:20px;margin-bottom:36px;">
        <div style="background:#fff;border:1px solid #e2e8f0;border-radius:8px;padding:20px;text-align:center;">
          <div style="font-size:28px;margin-bottom:8px;">💎</div>
          <h3 style="font-size:16px;font-weight:700;color:#0f172a;margin:0 0 6px;">Factory-Direct Margins</h3>
          <p style="font-size:13px;color:#64748b;margin:0;">Competitive dealer pricing with lucrative volume rebates and annual incentives.</p>
        </div>
        <div style="background:#fff;border:1px solid #e2e8f0;border-radius:8px;padding:20px;text-align:center;">
          <div style="font-size:28px;margin-bottom:8px;">🎯</div>
          <h3 style="font-size:16px;font-weight:700;color:#0f172a;margin:0 0 6px;">Showroom Display Support</h3>
          <p style="font-size:13px;color:#64748b;margin:0;">Official acrylic stands, display plinths, illuminated signage, and branded catalogue stands.</p>
        </div>
        <div style="background:#fff;border:1px solid #e2e8f0;border-radius:8px;padding:20px;text-align:center;">
          <div style="font-size:28px;margin-bottom:8px;">🛠️</div>
          <h3 style="font-size:16px;font-weight:700;color:#0f172a;margin:0 0 6px;">Priority Spare Parts</h3>
          <p style="font-size:13px;color:#64748b;margin:0;">Direct regional service center backing and guaranteed availability of genuine parts.</p>
        </div>
      </div>

      <div style="background:#fff;border:1px solid #e2e8f0;border-radius:12px;padding:32px;box-shadow:0 1px 3px rgba(0,0,0,0.05);">
        <h2 style="font-size:20px;font-weight:700;color:#0f172a;margin:0 0 8px;">Dealership Application &amp; Trade Inquiry</h2>
        <p style="font-size:14px;color:#64748b;margin:0 0 24px;">Please complete the form below. An ESTA regional sales manager will review your trade profile and contact you within 24-48 business hours.</p>

        <form onsubmit="event.preventDefault(); document.getElementById('dealership-ack').style.display='block'; this.reset();">
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:16px;">
            <div>
              <label style="display:block;font-size:13px;font-weight:600;color:#334155;margin-bottom:6px;">Registered Business / Showroom Name *</label>
              <input type="text" required placeholder="e.g. Al-Madina Home Appliances" style="width:100%;padding:10px 12px;border:1px solid #cbd5e1;border-radius:4px;font-size:14px;box-sizing:border-box;">
            </div>
            <div>
              <label style="display:block;font-size:13px;font-weight:600;color:#334155;margin-bottom:6px;">Proprietor / Contact Person Name *</label>
              <input type="text" required placeholder="Full Name" style="width:100%;padding:10px 12px;border:1px solid #cbd5e1;border-radius:4px;font-size:14px;box-sizing:border-box;">
            </div>
          </div>

          <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:16px;">
            <div>
              <label style="display:block;font-size:13px;font-weight:600;color:#334155;margin-bottom:6px;">Official Phone / Mobile Number *</label>
              <input type="tel" required placeholder="03XX-XXXXXXX" style="width:100%;padding:10px 12px;border:1px solid #cbd5e1;border-radius:4px;font-size:14px;box-sizing:border-box;">
            </div>
            <div>
              <label style="display:block;font-size:13px;font-weight:600;color:#334155;margin-bottom:6px;">Official Business Email *</label>
              <input type="email" required placeholder="dealer@example.com" style="width:100%;padding:10px 12px;border:1px solid #cbd5e1;border-radius:4px;font-size:14px;box-sizing:border-box;">
            </div>
          </div>

          <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:16px;">
            <div>
              <label style="display:block;font-size:13px;font-weight:600;color:#334155;margin-bottom:6px;">City &amp; Commercial Market *</label>
              <input type="text" required placeholder="e.g. Lahore, Abid Market or Karachi, Saddar" style="width:100%;padding:10px 12px;border:1px solid #cbd5e1;border-radius:4px;font-size:14px;box-sizing:border-box;">
            </div>
            <div>
              <label style="display:block;font-size:13px;font-weight:600;color:#334155;margin-bottom:6px;">Showroom Display Area (Approx. Sq. Ft.)</label>
              <input type="text" placeholder="e.g. 1,200 sq ft" style="width:100%;padding:10px 12px;border:1px solid #cbd5e1;border-radius:4px;font-size:14px;box-sizing:border-box;">
            </div>
          </div>

          <div style="margin-bottom:16px;">
            <label style="display:block;font-size:13px;font-weight:600;color:#334155;margin-bottom:6px;">Existing Brands Handled &amp; Business Background</label>
            <input type="text" placeholder="e.g. Retailer of kitchen hobs, hoods, and refrigerators since 2012" style="width:100%;padding:10px 12px;border:1px solid #cbd5e1;border-radius:4px;font-size:14px;box-sizing:border-box;">
          </div>

          <div style="margin-bottom:20px;">
            <label style="display:block;font-size:13px;font-weight:600;color:#334155;margin-bottom:6px;">Additional Comments or Inquiries</label>
            <textarea rows="3" placeholder="Tell us about your distribution reach, showroom location, or specific product lines of interest..." style="width:100%;padding:10px 12px;border:1px solid #cbd5e1;border-radius:4px;font-size:14px;box-sizing:border-box;"></textarea>
          </div>

          <button type="submit" style="width:100%;background:#b91c1c;color:#fff;border:none;padding:14px;border-radius:4px;font-size:15px;font-weight:700;cursor:pointer;letter-spacing:0.5px;transition:background 0.2s;">
            Submit Authorized Dealership Application
          </button>

          <div id="dealership-ack" style="display:none;margin-top:16px;padding:14px;background:#ecfdf5;color:#065f46;border:1px solid #a7f3d0;border-radius:4px;font-size:14px;text-align:center;">
            ✓ Thank you for your partnership application. Our corporate dealer relations desk will review your details and contact you promptly.
          </div>
        </form>
      </div>
    </div>
  `;
}

