# Hostinger par site live kaise karein

## 1. Build banao

Terminal mein project folder mein jaakar:

```bash
npm run build
```

Build ke baad **`dist`** folder banega. Is project mein **single-file build** hai, isliye `dist` mein mostly **`index.html`** hoga (sari CSS/JS isi mein inline ho jati hai). **`public`** folder ki files (jaise `.htaccess`) build time par **`dist`** mein copy ho jati hain.

---

## 2. Hostinger par upload karein

### Option A: File Manager se (sabse aasaan)

1. **Hostinger** login karein → **hPanel** open karein.
2. **Files** → **File Manager** par jao.
3. **`public_html`** folder open karein (yahi aapki site ka root hai).
4. Purana content (agar test page hai) delete karein.
5. **Upload** par click karein.
6. Apne computer se **`dist`** folder ka **sara content** upload karein:
   - `index.html` (zaroor upload karein)
   - Agar `dist` mein koi aur files/folders hain (jaise images) to wo bhi upload karein.
7. Agar aapne **`.htaccess`** file use karni hai (SPA routing ke liye), to use bhi **`public_html`** mein upload karein.

### Option B: FTP se (FileZilla waghera)

1. Hostinger se FTP details lein (hPanel → **Files** → **FTP Accounts**).
2. FileZilla mein connect karein.
3. Remote side par **`public_html`** par jao.
4. Local side par apna **`dist`** folder dikhao aur uski **sari files** `public_html` mein drag karein.
5. Zarurat ho to **`.htaccess`** bhi upload karein.

---

## 3. SPA routing ke liye .htaccess (zaroori)

Agar **`.htaccess`** use nahi karenge to direct link jaise `yoursite.com/about` ya `yoursite.com/contact` open karne par 404 aa sakta hai.

- Project mein **`public/.htaccess`** rakha hai — build ke baad ye **`dist`** mein copy ho jata hai (agar Vite default config ho).
- Agar **`dist`** mein **`.htaccess`** nahi dikh rahi, to **`public/.htaccess`** ki copy bana kar **`public_html`** mein upload kar dein (same content jo `public/.htaccess` mein hai).

Isse har URL (e.g. `/about`, `/services`, `/contact`) **`index.html`** par hi jayegi aur React Router sahi page dikhayega.

---

## 4. Domain / SSL

- **Domain:** Hostinger mein domain attach karein (hPanel → **Domains**).
- **SSL:** hPanel se **SSL** enable karein taake site `https://` par chaley.

---

## 5. Teek karein

- Browser mein `https://youthunitywelfare.org` (ya jo domain hai) open karein.
- Home, About, Services, Team, FAQ, Contact sab links check karein.
- Koi page direct URL se open karke bhi check karein (e.g. `yoursite.com/contact`).

---

## Short summary

| Step | Kaam |
|------|------|
| 1 | `npm run build` chalao |
| 2 | `dist` ki **sari cheezein** (including `index.html`) **`public_html`** mein upload karo |
| 3 | **`.htaccess`** bhi **`public_html`** mein upload karo (SPA ke liye) |
| 4 | Domain + SSL Hostinger se set karo |

Iske baad site Hostinger par live ho jani chahiye.
