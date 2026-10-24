# ESTA.pk — Link Validation Report

Audit Date: 2026-10-24T10:37:54.623Z
Server Target: http://127.0.0.1:3000
Total Routes Audited: 78
Total Passed: 78 (100.0%)
Total Failed: 0

## Validation Criteria
1. **HTTP Status Code**: Must return 200 OK.
2. **Content-Type**: Must match intended type (text/html, application/xml, or application/rss+xml).
3. **No Silent Fallthrough**: Target route must serve its specific view (stores, categories, PDPs, wishlist, cart) and must not fall back to generic shop.
4. **Brand Consistency**: Page title must contain ESTA branding and correct context.

## Test Results Matrix

| # | Internal Route | Result | HTTP | Content-Type | Response Time | Page Title / H1 |
| :-: | :--- | :---: | :---: | :--- | :---: | :--- |
| 1 | `/` | **PASS** | 200 | text/html | 118ms | ESTA Pakistan – Home & Kitchen Appliances |
| 2 | `/shop/` | **PASS** | 200 | text/html | 49ms | Shop Appliances |
| 3 | `/cart/` | **PASS** | 200 | text/html | 55ms | Shopping Cart |
| 4 | `/checkout/` | **PASS** | 200 | text/html | 56ms | Checkout |
| 5 | `/wishlist/` | **PASS** | 200 | text/html | 51ms | My Wishlist |
| 6 | `/compare/` | **PASS** | 200 | text/html | 63ms | Compare Appliances |
| 7 | `/my-account/` | **PASS** | 200 | text/html | 52ms | My Account |
| 8 | `/about-us/` | **PASS** | 200 | text/html | 55ms | About Us |
| 9 | `/contact-us/` | **PASS** | 200 | text/html | 58ms | Contact Us |
| 10 | `/stores/` | **PASS** | 200 | text/html | 57ms | Authorized Stores & Dealers |
| 11 | `/dealership/` | **PASS** | 200 | text/html | 54ms | Authorized Dealership Application |
| 12 | `/faq/` | **PASS** | 200 | text/html | 50ms | Frequently Asked Questions |
| 13 | `/warranty-policy/` | **PASS** | 200 | text/html | 52ms | Warranty Policy & Guidelines |
| 14 | `/returns-and-refunds/` | **PASS** | 200 | text/html | 51ms | Returns & Refund Policy |
| 15 | `/order-cancellation/` | **PASS** | 200 | text/html | 58ms | Order Cancellation Policy |
| 16 | `/track-order/` | **PASS** | 200 | text/html | 52ms | Track Order |
| 17 | `/shipping-policy/` | **PASS** | 200 | text/html | 73ms | Shipping Policy |
| 18 | `/register-complaint/` | **PASS** | 200 | text/html | 57ms | Register Complaint |
| 19 | `/terms-and-conditions/` | **PASS** | 200 | text/html | 54ms | Terms & Conditions |
| 20 | `/privacy-policy/` | **PASS** | 200 | text/html | 50ms | Privacy Policy |
| 21 | `/sitemap.xml` | **PASS** | 200 | application/xml | 1ms | XML Resource |
| 22 | `/feed/` | **PASS** | 200 | application/rss+xml | 2ms | ESTA Pakistan – Home &amp; Kitchen Appliances |
| 23 | `/comments/feed/` | **PASS** | 200 | application/rss+xml | 1ms | Comments for ESTA Pakistan |
| 19 | `/product-category/built-in-kitchen-appliances/` | **PASS** | 200 | text/html | 333017 | 53ms | Built-in Kitchen Appliances |
| 20 | `/product-category/built-in-kitchen-appliances/kitchen-hobs/` | **PASS** | 200 | text/html | 290793 | 53ms | Kitchen Hobs |
| 21 | `/product-category/built-in-kitchen-appliances/kitchen-hoods/` | **PASS** | 200 | text/html | 290518 | 54ms | Kitchen Hoods |
| 22 | `/product-category/built-in-kitchen-appliances/built-in-ovens/` | **PASS** | 200 | text/html | 283290 | 55ms | Built-in Ovens |
| 23 | `/product-category/built-in-kitchen-appliances/built-in-microwaves/` | **PASS** | 200 | text/html | 283638 | 56ms | Built-in Microwave Ovens |
| 24 | `/product-category/built-in-kitchen-appliances/built-in-induction-cooktops/` | **PASS** | 200 | text/html | 273077 | 59ms | Built-in Induction Cooktops |
| 25 | `/product-category/small-domestic-appliances/` | **PASS** | 200 | text/html | 290067 | 59ms | Small Domestic Appliances |
| 26 | `/product-category/small-domestic-appliances/slice-toasters/` | **PASS** | 200 | text/html | 273021 | 56ms | Slice Toasters |
| 27 | `/product-category/small-electronics/electric-kettles/` | **PASS** | 200 | text/html | 276340 | 67ms | Electric Kettles |
| 28 | `/product-category/small-electronics/hand-blenders/` | **PASS** | 200 | text/html | 273995 | 59ms | Hand Blenders |
| 29 | `/product-category/small-electronics/irons/` | **PASS** | 200 | text/html | 273968 | 60ms | Dry & Steam Irons |
| 30 | `/product-category/small-electronics/oven-toasters/` | **PASS** | 200 | text/html | 273001 | 66ms | Oven Toasters |
| 31 | `/product-category/small-electronics/sandwich-makers/` | **PASS** | 200 | text/html | 276299 | 53ms | Sandwich Makers |
| 32 | `/product-category/blender-grinders/` | **PASS** | 200 | text/html | 273880 | 61ms | Blender Grinders |
| 33 | `/product-category/counter-top-plates/` | **PASS** | 200 | text/html | 272907 | 56ms | Counter Top Hot Plates |
| 34 | `/product-category/juicers/` | **PASS** | 200 | text/html | 273861 | 41ms | Juicers & Food Processors |
| 35 | `/product-category/microwave-ovens/` | **PASS** | 200 | text/html | 283461 | 40ms | Microwave Ovens |
| 36 | `/product-category/air-fryer-ovens/` | **PASS** | 200 | text/html | 272879 | 45ms | Air Fryer Ovens |
| 37 | `/product-category/geysers/` | **PASS** | 200 | text/html | 272911 | 51ms | Water Heaters & Geysers |
| 38 | `/product-category/geysers/fast-electric/` | **PASS** | 200 | text/html | 273029 | 39ms | Fast Electric Geysers |
| 39 | `/product-category/geysers/instant-gas/` | **PASS** | 200 | text/html | 273045 | 38ms | Instant Gas Water Heaters |
| 40 | `/product/esta-1-7-liters-electric-kettle-ek-1701/` | **PASS** | 200 | text/html | 287524 | 40ms | ESTA 1.7 Liters Electric Kettle EK-1701 |
| 41 | `/product/esta-4-in-1-juicer-rsa-1411/` | **PASS** | 200 | text/html | 287521 | 40ms | ESTA 4 in 1 Juicer RSA-1411 |
| 42 | `/product/esta-2-slice-sandwich-maker-sm-3000/` | **PASS** | 200 | text/html | 287539 | 38ms | ESTA 2 Slice Sandwich Maker SM-3000 |
| 43 | `/product/esta-1000w-dry-iron-ir-110/` | **PASS** | 200 | text/html | 287493 | 39ms | ESTA 1000W Dry Iron IR-110 |
| 44 | `/product/esta-1-7-liters-electric-kettle-rek-1720/` | **PASS** | 200 | text/html | 287525 | 44ms | ESTA 1.7 Liters Electric Kettle REK-1720 |
| 45 | `/product/esta-1-5-liters-blender-grinder-bl-260bg/` | **PASS** | 200 | text/html | 287522 | 40ms | ESTA 1.5 Liters Blender Grinder BL-260BG |
| 46 | `/product/esta-3-in-1-hand-blender-rhb-1000/` | **PASS** | 200 | text/html | 287485 | 54ms | ESTA 3 in 1 Hand Blender RHB-1000 |
| 47 | `/product/esta-2-slice-sandwich-maker-sm-1002/` | **PASS** | 200 | text/html | 287509 | 39ms | ESTA 2 Slice Sandwich Maker SM-1002 |
| 48 | `/product/esta-25-liters-built-in-grill-microwave-oven-awm-26/` | **PASS** | 200 | text/html | 287948 | 39ms | ESTA 25 Liters Built-in Grill Microwave Oven AWM-26 |
| 49 | `/product/esta-38-liters-built-in-combi-microwave-oven-mwo-32/` | **PASS** | 200 | text/html | 287947 | 43ms | ESTA 38 Liters Built-in Combi Microwave Oven MWO-32 |
| 50 | `/product/esta-25-liters-built-in-grill-microwave-oven-meg-95b-bg/` | **PASS** | 200 | text/html | 287951 | 39ms | ESTA 25 Liters Built-in Grill Microwave Oven MEG-95B-BG |
| 51 | `/product/esta-25-liters-built-in-grill-microwave-oven-meg-95b-ss/` | **PASS** | 200 | text/html | 287951 | 41ms | ESTA 25 Liters Built-in Grill Microwave Oven MEG-95B-SS |
| 52 | `/product/esta-25-liters-built-in-grill-microwave-oven-awm-25/` | **PASS** | 200 | text/html | 287947 | 41ms | ESTA 25 Liters Built-in Grill Microwave Oven AWM-25 |
| 53 | `/product/esta-56-liters-built-in-oven-f60tix/` | **PASS** | 200 | text/html | 287853 | 38ms | ESTA 56 Liters Built-in Oven F60TIX |
| 54 | `/product/esta-80-liters-built-in-oven-ro-10q70af/` | **PASS** | 200 | text/html | 287871 | 41ms | ESTA 80 Liters Built-in Oven RO-10Q70AF |
| 55 | `/product/esta-56-liters-built-in-oven-f86etix/` | **PASS** | 200 | text/html | 287858 | 63ms | ESTA 56 Liters Built-in Oven F86ETIX |
| 56 | `/product/esta-70-liters-built-in-oven-40fbg-e/` | **PASS** | 200 | text/html | 287859 | 41ms | ESTA 70 Liters Built-in Oven 40FBG-E |
| 57 | `/product/esta-56-liters-built-in-oven-fge2tix/` | **PASS** | 200 | text/html | 287844 | 42ms | ESTA 56 Liters Built-in Oven FGE2TIX |
| 58 | `/product/esta-1-burner-stainless-steel-gas-kitchen-hob-3111-s1/` | **PASS** | 200 | text/html | 287953 | 42ms | ESTA 1 Burner Stainless Steel Gas Kitchen Hob 3111-S1 |
| 59 | `/product/esta-4-burners-glass-top-gas-kitchen-hob-6314-g1/` | **PASS** | 200 | text/html | 287928 | 39ms | ESTA 4 Burners Glass Top Gas Kitchen Hob 6314-G1 |
| 60 | `/product/esta-3-burners-ceramic-glass-top-gas-electric-kitchen-hob-rg-8603b/` | **PASS** | 200 | text/html | 288021 | 39ms | ESTA 3 Burners Ceramic Glass Top Gas/Electric Kitchen Hob RG-8603B |
| 61 | `/product/esta-5-burners-stainless-steel-gas-kitchen-hob-81602-ss/` | **PASS** | 200 | text/html | 287963 | 59ms | ESTA 5 Burners Stainless Steel Gas Kitchen Hob 81602-SS |
| 62 | `/product/esta-2-burners-glass-top-gas-kitchen-hob-3112-g1/` | **PASS** | 200 | text/html | 287928 | 42ms | ESTA 2 Burners Glass Top Gas Kitchen Hob 3112-G1 |
| 63 | `/product/esta-2-burners-stainless-steel-gas-kitchen-hob-3112-s1/` | **PASS** | 200 | text/html | 287957 | 44ms | ESTA 2 Burners Stainless Steel Gas Kitchen Hob 3112-S1 |
| 64 | `/product/esta-1-burner-glass-top-gas-kitchen-hob-3111-g1/` | **PASS** | 200 | text/html | 287923 | 51ms | ESTA 1 Burner Glass Top Gas Kitchen Hob 3111-G1 |
| 65 | `/product/esta-4-burners-stainless-steel-gas-kitchen-hob-6354-s1/` | **PASS** | 200 | text/html | 287958 | 41ms | ESTA 4 Burners Stainless Steel Gas Kitchen Hob 6354-S1 |
| 66 | `/product/esta-90cm-wall-mounted-kitchen-hood-108qa90-%d1%82/` | **PASS** | 200 | text/html | 287921 | 40ms | ESTA 90cm Wall Mounted Kitchen Hood 108QA90-Т |
| 67 | `/product/esta-60cm-wall-mounted-kitchen-hood-rkh-6006cb/` | **PASS** | 200 | text/html | 287927 | 53ms | ESTA 60cm Wall Mounted Kitchen Hood RKH-6006CB |
| 68 | `/product/esta-90cm-wall-mounted-kitchen-hood-hcf-22/` | **PASS** | 200 | text/html | 287940 | 39ms | ESTA 90cm Wall Mounted Kitchen Hood HCF-22 |
| 69 | `/product/esta-60cm-wall-mounted-kitchen-hood-6160-p1-black/` | **PASS** | 200 | text/html | 287944 | 40ms | ESTA 60cm Wall Mounted Kitchen Hood 6160-P1 Black |
| 70 | `/product/esta-90cm-island-kitchen-hood-ms-94/` | **PASS** | 200 | text/html | 287872 | 43ms | ESTA 90cm Island Kitchen Hood MS-94 |
| 71 | `/product/esta-90cm-island-kitchen-hood-105ja90-t/` | **PASS** | 200 | text/html | 287895 | 40ms | ESTA 90cm Island Kitchen Hood 105JA90-T |
| 72 | `/product/esta-90cm-island-kitchen-hood-8490/` | **PASS** | 200 | text/html | 287865 | 40ms | ESTA 90cm Island Kitchen Hood 8490 |
| 73 | `/product/esta-90cm-wall-mounted-kitchen-hood-rkh-9006cb/` | **PASS** | 200 | text/html | 287930 | 43ms | ESTA 90cm Wall Mounted Kitchen Hood RKH-9006CB |
