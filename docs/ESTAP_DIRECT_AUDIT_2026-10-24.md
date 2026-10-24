# ESTA.PK — Direct ZIP Audit & Image-Fit Corrections

Audit target: `estap (1).zip`
Date: 2026-10-24
Scope: inspect the actual files in the ZIP, not only the included prior audit documents.

## Directly verified project structure

- The active static site is in `esta-site/` (`index.html`, `styles.css`, `esta-commerce.js`, `assets/`).
- `reference/index.html` (6,567,043 bytes) and `reference/styles.css` (563,610 bytes) are retained as source/reference files.
- `server.js`, `templates.js`, `products.json`, and `package.json` are present.
- `products.json` contains 34 product records.
- `esta-site/index.html` contains 105 `<img>` elements and has a large captured HTML payload (including inline base64 images).
- The ZIP includes `.aistudio/.../.tempmediaStorage/` cache copies as well as the site assets; these were left intact to avoid breaking a Google AI Studio working project.

## Corrections applied in this package

Five category-tile assets had a visible thick dark outline and grey frame baked into the image. Several also displayed a competitor wordmark. They have been replaced with clean, existing appliance images from within the project, fitted on a white 361×360 canvas without stretching:

| Category tile file | Replacement source asset |
|---|---|
| `Air-Fryer-Oven-1-361x360.png` | `Oven-Toster-01.jpg` |
| `Microwave-Oven-1-361x360.png` | `MWO-32-514x514.webp` |
| `Kitchen-Hob-1-361x360.png` | `6314-G1-514x514.webp` |
| `Kitchen-Hood-1-361x360.png` | `108QA90-T-514x514.webp` |
| `Counter-Top-Plate-1-361x360.png` | `Counter-Top-Plate-01-1-r9f4v5fzu7sz8ye904bocjqir9l8od7px8zpoc0iyw.jpg` |

The corresponding inline base64 versions in matching `<img>` tags were also refreshed so the old thumbnail is less likely to appear when the browser selects the inline source instead of the local `srcset`. Small competitor wordmarks were neutralized only on these generic category-tile illustrations; no ESTA logo was added, and actual product-detail photographs were not retouched.

## Runtime / implementation findings

- `node --check` passes for `server.js`, `esta-site/esta-commerce.js`, and `templates.js`.
- `package.json` has `dev` and `start` commands, but its `build` and `lint` commands only print success messages. They are placeholders, not real build/lint checks.
- The cart code uses browser `localStorage` (`esta_demo_cart_v1`), so the cart is a browser-side demo and is not a persistent server-side order/cart database.
- `server.js` contains WooCommerce AJAX / `admin-ajax.php` stub responses. These should not be mistaken for a real WooCommerce backend.
- Checkout template explicitly states payment gateway integration and order dispatch are disabled pending production configuration. Do not accept live orders/payments until a real order backend and payment/COD workflow are integrated and tested.

## Branding / source-image limitations

A direct text scan still finds legacy `rays.com.pk` references in the captured implementation (76 in active HTML and 420 in active CSS at audit time; 2 in the commerce JS). These counts include legacy theme scripts, metadata, and CSS URLs; not every occurrence is necessarily visible to shoppers or safe to replace globally. They do mean the included claim that there are zero remaining textual Rays references is not literally true.

The active HTML and CSS still include legacy WordPress/Woodmart references. Some source product photos may also carry model/brand markings that are part of the photographed appliance. This package does **not** invent replacement logos or erase markings from actual product photography. Any product photo showing a Rays mark must be compared against an official ESTA product photo and replaced with an authentic source image if it is not the same marketed model.

## Validation limits

This was a static file/code audit. Syntax checks and local reference checks are not equivalent to a real desktop/mobile browser QA pass. I did not claim successful real-browser screenshot, live checkout, payment, or order tests.
