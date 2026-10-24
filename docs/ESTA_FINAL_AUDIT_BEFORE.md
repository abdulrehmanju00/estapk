# ESTA Pakistan (esta.pk) — Phase 1: Comprehensive Baseline Audit (BEFORE)

**Date**: October 24, 2026  
**Auditor**: Senior Full-Stack Engineering Team  
**Scope**: Complete active implementation under `esta-site/`, server endpoints in `server.js` and `templates.js`, data definitions in `products.json`, and reference baseline comparison against `reference/` (Rays Pakistan).

---

## 1. Executive Summary

This audit establishes the exact baseline state of the ESTA Pakistan website prior to final repairs. The reference website is Rays Pakistan, providing the structural layout, section order, spacing, Woodmart/Elementor class hierarchies, mega menus, product carousels, and footer styling. The target website is **ESTA.pk**, demanding 100% brand fidelity, authentic local assets, bug-free navigation, and honest demarcation between real and demo features.

---

## 2. Homepage Section Inventory & Structural Comparison

| Section # | Reference (Rays) Section Name | Active Implementation (`esta-site/index.html`) | Status | Notes |
|---|---|---|---|---|
| **1** | Top Bar Header | Present (`.whb-top-bar`) | MATCHED | Displays customer support telephone (`+92 300 0000000`), warranty info, and secondary links. |
| **2** | Main Header & Navigation | Present (`.whb-general-header`) | MATCHED | Logo, desktop category navigation, live ajax search bar, wishlist/compare icons, side-cart widget trigger. |
| **3** | Mobile Header Bar | Present (`.whb-mobile-header`) | PARTIAL BUG | Mobile hamburger menu button had `wd-opened` hardcoded in static HTML; logo max-width 90px. |
| **4** | Hero Slider (`n2-ss-3`) | Present (`.n2-section-smartslider`) | ATTENTION NEEDED | 6 slides: Slide 1 originally designated `1-Website Banner Animation Desktop`. Currently static base64 placeholder; no local `.mp4` video exists in repository. Requires video integration point with CSS-animated appliance fallback. |
| **5** | Product Category Grid (Top) | Present (`.elementor-element-31427a1`) | MATCHED | 6 core categories with round icons and category links. |
| **6** | Small Domestic Appliances Carousel | Present (`.elementor-element-2cb50ba`) | MATCHED | Product carousel with ESTA blenders, dry irons, electric kettles, and sandwich makers. |
| **7** | Promotional Banner: Small Appliances | Present (`.elementor-element-278cfda`) | MATCHED | 1300x433 promotional banner with ESTA branding. |
| **8** | Built-in Microwave Ovens Carousel | Present (`.elementor-element-642137d`) | MATCHED | Product carousel for MWO-32, MEG-95B series with pricing and specifications. |
| **9** | Promotional Banner: Microwaves | Present (`.elementor-element-e2aebbf`) | MATCHED | 1300x433 promotional banner with ESTA branding. |
| **10** | Built-in Ovens Carousel | Present (`.elementor-element-669df20`) | MATCHED | Product carousel with F60TIX, F86ETIX, FGE2TIX, 60FDE series. |
| **11** | Promotional Banner: Built-in Ovens | Present (`.elementor-element-21eead8`) | MATCHED | 1300x433 promotional banner with ESTA branding. |
| **12** | Kitchen Hobs Carousel | Present (`.elementor-element-f1b2b89`) | MATCHED | Product carousel with 6160P1, 81602SS, 40FBG-E, 8490 series. |
| **13** | Promotional Banner: Kitchen Hobs | Present (`.elementor-element-7dbf8ce`) | MATCHED | 1300x433 promotional banner with ESTA branding. |
| **14** | Kitchen Hoods Carousel | Present (`.elementor-element-1563f64`) | MATCHED | Product carousel with RKH-6006CB, RKH-9006CB, HCF-22, 105JA90 series. |
| **15** | Promotional Banner: Kitchen Hoods | Present (`.elementor-element-bb8ea44`) | MATCHED | 1300x433 promotional banner with ESTA branding. |
| **16** | Value Proposition / Trust Pillars | Present (`.elementor-element-3f5f3e9`) | MATCHED | Official Warranty, Nationwide Support, Genuine Parts icons. |
| **17** | Brand Story / About ESTA | Present (`.elementor-element-535359a`) | MATCHED | Content updated with ESTA brand narrative. |
| **18** | Pre-Footer Widgets & Newsletter | Present (`.footer-widgets`) | MATCHED | Categories, customer service links, newsletter subscription. |
| **19** | Main Dark Footer | Present (`.footer-container`) | MATCHED | Dark background with `esta-logo-white.svg` (160px desktop / 140px mobile), copyright notice, and social icons. |
| **20** | Sticky Bottom Mobile Bar | Present (`.whb-stickynav-wrapper`) | MATCHED | Mobile sticky navigation bar with quick links to shop, cart, wishlist, and account. |

---

## 3. Brand Occurrence Audit & Classification

A comprehensive audit of all code files, assets, templates, and scripts was performed for references to `Rays` and `rays.com.pk`:

| Classification | Count | Description / Context | Action Required |
|---|---|---|---|
| **1. Visible User-Facing Text** | **0** | No visible text on product cards, category pages, titles, or headers says "Rays". All product names have been standardized to "ESTA". | None (Verified). |
| **2. Header / Footer Logos & Favicon** | **0** | Header uses `./assets/esta-logo.svg`, Footer uses `./assets/esta-logo-white.svg`, favicon is `./assets/esta-favicon.svg`. | Cropping of excess viewBox SVG padding completed. |
| **3. Promotional Banners** | **0** | 5 promotional banners (`1300x433`) have been cleaned of competitor logos and re-branded to ESTA. | None (Verified). |
| **4. Physical Appliance Images** | **0** | Physical appliances (e.g. `RHB-1000`, `HCF-22`) have had competitor logos removed. Authentic model names preserved. | None (Verified). |
| **5. Required Legacy Scripts** | **~50** | Woodmart / LiteSpeed JavaScript bundles loaded from `https://rays.com.pk/wp-content/litespeed/js/...`. | **Preserve**: Necessary for theme scripts (owl carousel, smartslider runtime, sticky header scripts). Do not break. |
| **6. Passive WordPress Metadata** | **4** | `oembed`, `xmlrpc.php`, `wp-json` link tags in `<head>`. | Harmless passive metadata; can be preserved or sanitized without breaking functionality. |
| **7. Reference Directory** | **Preserved** | Files in `reference/` (`index.html`, `styles.css`) contain original reference state. | **Strictly untouchable** per Non-Negotiable Rule 4. |

---

## 4. Image Asset Inventory & Health Audit

The local repository contains 72 image assets under `esta-site/assets/`.

### Category & Banner Health
- **Promotional Banners (5)**:
  - `1-For-Small-Appliances-Banner-1-1300x433.webp` — OK (1300x433, ESTA branded)
  - `2-For-Built-In-Microwave-Ovens-Banner-1-1300x433.webp` — OK (1300x433, ESTA branded)
  - `3-For-Built-In-Ovens-Banner-1-1300x433.webp` — OK (1300x433, ESTA branded)
  - `4-For-Hobs-Banner-1-1300x433.webp` — OK (1300x433, ESTA branded)
  - `5-For-Hoods-Banner-1-1300x433.webp` — OK (1300x433, ESTA branded)
- **Category Thumbnails (360x360 & 180x180)**:
  - `Sandwich-Maker-360x360.png` — OK (replaces missing thumbnail)
  - `Sandwich-Maker-180x180-1.jpg` — OK (replaces missing thumbnail)
  - `Whole-Fruit-Juicer-180x180-1.jpg` — OK (replaces missing thumbnail)
  - `Slice-Toaster.webp` — OK (replaces missing thumbnail)
  - All category images properly match their categories.
- **Product Images**:
  - All 44 catalog products in `products.json` map to existing local files with 0 broken 404 image paths.
  - Image aspect ratios (1:1 for product cards, 3:1 for banners) display cleanly with no stretching or unexpected overflow.

---

## 5. Identified Defects & Bugs (Pre-Repair)

1. **Defect 1: Mobile Navigation Drawer & Hamburger Opened on Page Load**
   - **Root Cause**: In `esta-site/index.html`:
     - Line 521: `<div class="wd-tools-element wd-header-mobile-nav wd-style-icon wd-design-6 whb-g1k0m1tib7raxrwkm1t3 wd-opened">`
     - Line 3340: `<div class="mobile-nav wd-side-hidden wd-side-hidden-nav wd-left wd-opener-arrow wd-opened" role="navigation" ...>`
   - **Impact**: The static HTML snapshot captured the page while the mobile drawer was open. On initial page load, the mobile nav or backdrop opens prematurely.
   - **Fix**: Remove `wd-opened` from both elements in static HTML; bind dynamic click handlers in `esta-site/esta-commerce.js`.

2. **Defect 2: Animated Video Hero Missing Genuine Video Asset**
   - **Root Cause**: The repository contains no `.mp4` or `.webm` files (`find . -name "*.mp4"` returns empty).
   - **Impact**: Slide 1 is a static placeholder without an integration point or graceful fallback.
   - **Fix**: Implement a standard `<video>` container (`/assets/esta-hero.mp4`) with poster fallback, muted autoplay, playsinline, loop, and an overlay showcasing ESTA appliances with a "Shop Now" call to action. Document missing video file in `docs/ESTA_MISSING_ASSETS.md`.

3. **Defect 3: Side-Cart & Mobile Nav Backdrop Dismissal**
   - **Root Cause**: Clicking outside or pressing the `Escape` key should reliably close all open drawers (side cart, mobile nav, search modal).
   - **Fix**: Enhance event listeners in `esta-site/esta-commerce.js` to ensure robust dismissal.

---

## 6. Functional Architecture: Real vs. Demo Features

| Feature | Real Implementation | Demonstration Mode (With Clear UX Notice) |
|---|---|---|
| **Browsing & Navigation** | Real client-side & server-side routing for `/`, `/shop/`, `/product/*`, `/product-category/*`, `/cart/`, `/checkout/`. | None. |
| **Live Product Search** | Real client-side autocomplete querying 44 active ESTA products by name, SKU, and category with live pricing and thumbnails. | None. |
| **Cart State** | Real `localStorage`-backed shopping cart with dynamic item count, subtotal, increment/decrement, and item removal. | None. |
| **Side Cart Drawer** | Real dynamic rendering of mini-cart items, animated slide-out, free shipping progress bar, and direct checkout links. | None. |
| **Product Detail Pages** | Dynamic templates (`templates.js`) with image galleries, SKU, specifications table, stock status, and quantity pickers. | None. |
| **Order Placement / Payment** | N/A | Demo mode notice on `/checkout/`: explicitly informs users that payment gateway and delivery dispatch are disabled in demo mode; no personal data or credit cards stored. |
| **Contact Forms / Newsletter** | UI form fields with validation. | Demo acknowledgment notifying that emails are queued for staff review in demo mode. |

---

## 7. Baseline Conclusion

The baseline audit confirms that structural fidelity against `reference/` is exceptionally high. Correcting Defect 1 (menu open on load), Defect 2 (animated video hero fallback), and Defect 3 (event dismissals) will complete all technical requirements.
