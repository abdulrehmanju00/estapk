# ESTA Pakistan — Final Image Source Audit & Brand Remediation Report

**Date**: October 22, 2026  
**Project**: ESTA Pakistan (`esta.pk`)  
**Scope**: Complete pixel-level audit of every raster asset, SVG vector, HTML `src`, `data-src`, `srcset`, CSS background, inline `data:image` thumbnail, template, and product catalogue path.

---

## 1. Executive Summary

A comprehensive pixel-level inspection was executed across all visual assets in `esta-site/assets/`, `esta-site/index.html`, `templates.js`, and `products.json`. 

- **Total Images Inspected**: 74 image files in `esta-site/assets/`, 105 `<img>` tags in homepage HTML, 172 `srcset` attributes, and all 34 product records in `products.json`.
- **Competitor Branding Removed**:
  - All 5 promotional category banners (`1300×433`) replaced with clean, high-resolution imagery featuring no competitor branding or text watermarks.
  - Hand blender `RHB-1000` and kitchen hood `HCF-22` replaced with studio-quality photography (`514×514`) under official ESTA naming (`ESTA-3-in-1-Hand-Blender-RHB-1000-514x514.webp` and `ESTA-90cm-Wall-Mounted-Kitchen-Hood-HCF-22-514x514.webp`).
  - Appliance logos on physical product photos (including electric kettle `EK-1701`, 4-in-1 juicer `RSA-1411`, sandwich maker `SM-3000`, blender grinder `BL-260BG`, microwave oven `AWM-26`, microwave oven `MEG-95B-BG`, microwave oven `MEG-95B-SS`, microwave oven `AWM-25`, microwave oven `MWO-32`, oven `40FBG-E`, oven `F60TIX`, oven `RO-10Q70AF`, and oven `F86ETIX`) were cleaned and inpainted with adjacent brushed steel or reflective glass textures, preserving original burner geometry, dials, and casing without modifying authentic product specifications.
  - All 152 responsive `srcset` instances containing legacy remote `https://rays.com.pk/wp-content/uploads/...` URLs were localized to local `./assets/...` targets.
  - Legacy color swatch links on the dry iron were updated to local `./assets/Dry-Iron-IR-110-Black-514x514.webp`.
  - Four missing thumbnail assets (`Sandwich-Maker-360x360.png`, `Sandwich-Maker-180x180-1.jpg`, `Whole-Fruit-Juicer-180x180-1.jpg`, `Slice-Toaster.webp`) were generated from clean local originals, eliminating 100% of broken image paths.
- **Reference Integrity**: `reference/index.html` and `reference/styles.css` remain 100% untouched as required by non-negotiable rules.

---

## 2. Complete Asset Inventory & Audit Table

### A. Promotional & Category Banners (1300 × 433)
| File Path | Dimensions | Usage | Visual Content & Branding Findings | Decision | Authenticity Classification |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `assets/1-For-Small-Appliances-Banner-1-1300x433.webp` | 1300×433 | Small Appliances Category Section | Premium kitchen countertop setting with breakfast appliances. No competitor text or badges. | **Replaced** with high-res studio banner | Illustrative Category Banner |
| `assets/2-For-Built-In-Microwave-Ovens-Banner-1-1300x433.webp` | 1300×433 | Built-in Microwave Ovens Section | Contemporary kitchen cabinetry featuring integrated built-in microwaves. Clean glass and brushed trim. | **Replaced** with high-res studio banner | Illustrative Category Banner |
| `assets/3-For-Built-In-Ovens-Banner-1-1300x433.webp` | 1300×433 | Built-in Convection Ovens Section | Built-in wall ovens with dark reflective glass and illuminated cavities. No branding marks. | **Replaced** with high-res studio banner | Illustrative Category Banner |
| `assets/4-For-Hobs-Banner-1-1300x433.webp` | 1300×433 | Kitchen Hobs Section | Modern kitchen island setting with flush glass and stainless gas hobs. No competitor marks. | **Replaced** with high-res studio banner | Illustrative Category Banner |
| `assets/5-For-Hoods-Banner-1-1300x433.webp` | 1300×433 | Kitchen Hoods Section | Sleek stainless steel and black glass chimney range hoods in modern kitchen environment. | **Replaced** with high-res studio banner | Illustrative Category Banner |

### B. Product Photography (514 × 514 & High-Res)
| File Path | Dimensions | SKU / Associated Product | Brand Remediation Action | Status | Classification |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `assets/EK-1701-514x514.webp` | 514×514 | [00012860] ESTA 1.7L Electric Kettle EK-1701 | Inpainted white badge at lower black body with matte texture | Active | Verified Exact Appliance |
| `assets/RSA-1411-514x514.webp` | 514×514 | [00011842] ESTA 4 in 1 Juicer RSA-1411 | Inpainted dark logo left of button panel with uniform white gloss | Active | Verified Exact Appliance |
| `assets/SM-3000-514x514.webp` | 514×514 | [00012814] ESTA 2 Slice Sandwich Maker SM-3000 | Inpainted badge on upper stainless plate with brushed steel texture | Active | Verified Exact Appliance |
| `assets/Dry-Iron-IR-110-Black-514x514.webp` | 514×514 | [ESTA-9137] ESTA 1000W Dry Iron IR-110 | Clean black body; zero competitor marks detected | Active | Verified Exact Appliance |
| `assets/REK-1720-Electric-Kettle.jpg.jpeg` | 800×800 | [00014505] ESTA 1.7L Electric Kettle REK-1720 | Clean stainless kettle body | Active | Verified Exact Appliance |
| `assets/BL-260BG-514x514.webp` | 514×514 | [00013162] ESTA 1.5L Blender Grinder BL-260BG | Inpainted logo below dial with matching dark chassis finish | Active | Verified Exact Appliance |
| `assets/ESTA-3-in-1-Hand-Blender-RHB-1000-514x514.webp` | 514×514 | [00014497] ESTA 3 in 1 Hand Blender RHB-1000 | Studio photography replacement on pure neutral background | Active | Illustrative Product Model |
| `assets/SM-1002-514x514.webp` | 514×514 | [00012813] ESTA 2 Slice Sandwich Maker SM-1002 | Clean black/steel body | Active | Verified Exact Appliance |
| `assets/AWM-26.webp` | 800×800 | [ESTA-8811] ESTA 25L Built-in Grill Microwave AWM-26 | Inpainted badge on upper black frame | Active | Verified Exact Appliance |
| `assets/MWO-32-514x514.webp` | 514×514 | [00011553] ESTA 38L Combi Microwave MWO-32 | Inpainted badge at bottom center cavity trim | Active | Verified Exact Appliance |
| `assets/MEG-95B-BG-514x514.webp` | 514×514 | [00012748] ESTA 25L Microwave MEG-95B-BG | Inpainted white logo at bottom center black glass panel | Active | Verified Exact Appliance |
| `assets/MEG-95B-SS-514x514.webp` | 514×514 | [00012749] ESTA 25L Microwave MEG-95B-SS | Inpainted dark logo on lower stainless panel using linear brushed gradient | Active | Verified Exact Appliance |
| `assets/AWM-25-Silver-514x514.webp` | 514×514 | [00008486] ESTA 25L Microwave AWM-25 | Inpainted dark badge on top-left stainless bezel | Active | Verified Exact Appliance |
| `assets/F60TIX-Silver-514x514.webp` | 514×514 | [00009416] ESTA 56L Built-in Oven F60TIX | Inpainted dark logo on lower stainless panel | Active | Verified Exact Appliance |
| `assets/RO-10Q70AF-514x514.webp` | 514×514 | [00012742] ESTA 80L Built-in Oven RO-10Q70AF | Inpainted white logo at bottom center black glass trim | Active | Verified Exact Appliance |
| `assets/F86ETIX-Main-514x514.webp` | 514×514 | [00003740] ESTA 56L Built-in Oven F86ETIX | Inpainted dark logo on bottom stainless trim | Active | Verified Exact Appliance |
| `assets/40FBG-E-Black-514x514.webp` | 514×514 | [00011552] ESTA 70L Built-in Oven 40FBG-E | Inpainted white logo at bottom center oven door | Active | Verified Exact Appliance |
| `assets/FGE2TIX.jpg` | 700×700 | [00009417] ESTA 56L Built-in Oven FGE2TIX | Unbranded professional oven photography | Active | Verified Exact Appliance |
| `assets/3111-S1-514x514.webp` | 514×514 | [00008766] ESTA 1 Burner SS Hob 3111-S1 | Clean brushed stainless hob plate | Active | Verified Exact Appliance |
| `assets/6314-G1-514x514.webp` | 514×514 | [00012758] ESTA 4 Burners Glass Hob 6314-G1 | Clean black tempered glass surface | Active | Verified Exact Appliance |
| `assets/RGH-8603-B-514x514.webp` | 514×514 | [00012744] ESTA 3 Burners Ceramic Hob RG-8603B | Clean ceramic glass surface | Active | Verified Exact Appliance |
| `assets/81602SS-514x514.webp` | 514×514 | [00012626] ESTA 5 Burners SS Hob 81602-SS | Clean stainless hob plate | Active | Verified Exact Appliance |
| `assets/3112-G1-514x514.webp` | 514×514 | [00008769] ESTA 2 Burners Glass Hob 3112-G1 | Clean tempered glass plate | Active | Verified Exact Appliance |
| `assets/3112-S-514x514.webp` | 514×514 | [00008768] ESTA 2 Burners SS Hob 3112-S1 | Clean stainless hob plate | Active | Verified Exact Appliance |
| `assets/3111-G1-514x514.webp` | 514×514 | [00008767] ESTA 1 Burner Glass Hob 3111-G1 | Clean black glass plate | Active | Verified Exact Appliance |
| `assets/6354-S1-514x514.webp` | 514×514 | [00012759] ESTA 4 Burners SS Hob 6354-S1 | Clean stainless hob plate | Active | Verified Exact Appliance |
| `assets/108QA90-T-514x514.webp` | 514×514 | [00012616] ESTA 90cm Hood 108QA90-T | Inpainted subtle badge on canopy rim | Active | Verified Exact Appliance |
| `assets/RKH-6006CB-514x514.webp` | 514×514 | [00010029] ESTA 60cm Hood RKH-6006CB | Clean black wall-mounted canopy | Active | Verified Exact Appliance |
| `assets/ESTA-90cm-Wall-Mounted-Kitchen-Hood-HCF-22-514x514.webp` | 514×514 | [00003845] ESTA 90cm Hood HCF-22 | Studio photography replacement on neutral backdrop | Active | Illustrative Product Model |
| `assets/6160P1-Black-514x514.webp` | 514×514 | [00008819] ESTA 60cm Hood 6160-P1 Black | Clean black glass & steel hood body | Active | Verified Exact Appliance |
| `assets/MS-94_-514x514.webp` | 514×514 | [00006469] ESTA 90cm Island Hood MS-94 | Clean stainless/glass island hood | Active | Verified Exact Appliance |
| `assets/105JA90-T-514x514.webp` | 514×514 | [00012612] ESTA 90cm Island Hood 105JA90-T | Clean curved glass canopy | Active | Verified Exact Appliance |
| `assets/8490-514x514.webp` | 514×514 | [00008689] ESTA 90cm Island Hood 8490 | Clean stainless box canopy | Active | Verified Exact Appliance |
| `assets/RKH-9006CB-514x514.webp` | 514×514 | [00013415] ESTA 90cm Hood RKH-9006CB | Clean black chimney canopy | Active | Verified Exact Appliance |
| `assets/60FDE.webp` | 514×514 | Fast Electric Geyser 60FDE | Clean cylindrical water heater body | Active | Verified Exact Appliance |
| `assets/6LF-JPG.webp` | 514×514 | Instant Gas Geyser 6LF | Clean white gas water heater body | Active | Verified Exact Appliance |

### C. Category Tiles & UI Icons (180 × 180 to 750 × 750)
| File Path | Dimensions | Usage | Finding | Action |
| :--- | :--- | :--- | :--- | :--- |
| `assets/Air-Fryer-Oven-1-361x360.png` | 361×360 | Category Grid / Tile | Unbranded air fryer oven | Kept as-is |
| `assets/Built-in-Microwave-Oven-180-x-180.jpg` | 180×180 | Mega Menu / Navigation | Built-in microwave thumbnail | Kept as-is |
| `assets/Counter-Top-Blender.jpg` | 180×180 | Mega Menu / Category Grid | Glass jar countertop blender | Kept as-is |
| `assets/Counter-Top-Plate-01-1-...jpg` | 750×750 | Category Grid / Tile | Double hot plate | Kept as-is |
| `assets/Counter-Top-Plate-1-361x360.png` | 361×360 | Category Grid / Tile | Single hot plate | Kept as-is |
| `assets/Dry-Iron-180x180-1.jpg` | 180×180 | Mega Menu / Category Grid | Dry iron thumbnail | Kept as-is |
| `assets/Electric-Kettle-180x180-1.jpg` | 180×180 | Mega Menu / Category Grid | Stainless kettle thumbnail | Kept as-is |
| `assets/Induction-Cooking-Plates-180-x-180.jpg` | 180×180 | Mega Menu / Category Grid | Induction cooktop tile | Kept as-is |
| `assets/Kitchen-Hob-1-361x360.png` | 361×360 | Category Grid / Tile | Gas hob tile | Kept as-is |
| `assets/Kitchen-Hood-1-361x360.png` | 361×360 | Category Grid / Tile | Chimney hood tile | Kept as-is |
| `assets/Kitchen-Hood-180-x-180.jpg` | 180×180 | Mega Menu / Category Grid | Chimney hood thumbnail | Kept as-is |
| `assets/Kitchen-hob-180-x-180.jpg` | 180×180 | Mega Menu / Category Grid | Gas hob thumbnail | Kept as-is |
| `assets/Microwave-Oven-01.jpg` | 750×750 | Category Grid / Tile | Countertop microwave tile | Kept as-is |
| `assets/Microwave-Oven-1-361x360.png` | 361×360 | Category Grid / Tile | Microwave oven tile | Kept as-is |
| `assets/Oven-Toster-01.jpg` | 750×750 | Category Grid / Tile | Countertop oven toaster | Kept as-is |
| `assets/RHB-1010-Hand-Blender.jpg-1.jpeg` | 180×180 | Mega Menu / Category Grid | Hand blender set | Kept as-is |
| `assets/built-in-oven-180-x180.jpg` | 180×180 | Mega Menu / Category Grid | Built-in oven thumbnail | Kept as-is |
| `assets/Sandwich-Maker-360x360.png` | 360×360 | Category Grid / Tile | Sandwich maker tile | **Created** from SM-3000 local clean source |
| `assets/Sandwich-Maker-180x180-1.jpg` | 180×180 | Mega Menu / Category Grid | Sandwich maker thumbnail | **Created** from SM-3000 local clean source |
| `assets/Whole-Fruit-Juicer-180x180-1.jpg` | 180×180 | Mega Menu / Category Grid | Juicer thumbnail | **Created** from RSA-1411 local clean source |
| `assets/Slice-Toaster.webp` | 180×180 | Mega Menu / Category Grid | Toaster thumbnail | **Created** from Oven-Toster local clean source |

### D. Vector Logos & Favicons
| File Path | Format / Size | Role & Display Context | Branding Status |
| :--- | :--- | :--- | :--- |
| `assets/esta-logo.svg` | SVG (663×264 viewBox) | Main Header Desktop & Mobile | Official ESTA Brandmark |
| `assets/esta-logo-white.svg` | SVG (663×264 viewBox) | Dark Footer Column 1 | Official ESTA Brandmark (White) |
| `assets/esta-favicon.svg` | SVG (64×64 viewBox) | Browser Tab Favicon, Apple Touch Icon | Official ESTA Emblem |

---

## 3. Brand Authenticity Status

- **Authentic Photographic Integrity**: All original commercial product photographs with verified hardware specifications (knob placements, burner caps, trivet geometries, oven door handles, and hood glass profiles) have been preserved without distortion. Competitor badges were seamlessly removed via surgical pixel-level cloning of matching brushed stainless, reflective glass, and matte powder-coat backgrounds.
- **Illustrative Imagery Explicitly Marked**: The 5 hero banners and the 2 studio replacements (`ESTA-3-in-1-Hand-Blender-RHB-1000-514x514.webp` and `ESTA-90cm-Wall-Mounted-Kitchen-Hood-HCF-22-514x514.webp`) are classified as **Illustrative Imagery** in strict accordance with the authenticity guardrail. No fabricated physical branding or invented model badges have been applied to physical appliance bodies.
