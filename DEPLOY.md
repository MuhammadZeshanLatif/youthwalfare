# GitHub + Hostinger Deploy Guide

## 0. GitHub Secrets (auto-deploy ke liye — ek baar set karo)

Repo **Settings → Secrets and variables → Actions** mein jaakar ye 3 secrets add karo:

| Secret name    | Value (copy-paste)           |
|----------------|-----------------------------|
| `FTP_HOST`     | `ftp.youthunitywelfare.org` |
| `FTP_USERNAME` | `u398271634.youthwalfare`   |
| `FTP_PASSWORD` | Apna FTP password (jo Hostinger pe set hai) |

**FTP_PASSWORD** ko GitHub par paste karte waqt double-check karo — koi extra space na ho. Save ke baad push karo; sirf **dist** ka content Hostinger ke **public_html** mein jayega.

---

## 1. GitHub par pura project push karna

- **GitHub par sirf source code jayega** — `dist/` aur `public_html/` `.gitignore` mein hain, isliye push nahi honge.

```bash
git add .
git commit -m "Your message"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

(Agar repo pehle se hai to sirf `git push` karo.)

---

## 2. Hostinger par site chalana (sirf dist → public_html)

Hostinger par **sirf build output** chalana hai — matlab `dist` ke andar jo kuch hai wahi `public_html` mein jana chahiye.

### Option A: Deploy script use karke (recommended)

1. Local pe run karo:
   ```bash
   npm run deploy
   ```
2. Ye command:
   - Pehle `npm run build` chalati hai (build `dist/` mein aata hai)
   - Phir `dist/` ka **pura content** project ke andar `public_html/` folder mein copy kar deti hai
3. Ab **`public_html` folder ke andar ki saari files** (jaise `index.html`, `assets/` waghera) Hostinger ke **public_html** mein upload karo:
   - Hostinger **File Manager** se, ya
   - **FTP** se (FileZilla etc.): local `public_html` ka content server ke `public_html` mein upload karo

### Option B: Bina script ke

1. Build karo:
   ```bash
   npm run build
   ```
2. Jo kuch bhi `dist/` ke andar hai (sari files/folders), wahi Hostinger ke **public_html** mein upload karo — `dist` ka folder mat banao server pe, seedha andar ki files `public_html` ke andar honi chahiye.

---

## Summary

| Jagah        | Kya jata hai                          |
|-------------|----------------------------------------|
| **GitHub**  | Pura project (source), bina `dist` ke  |
| **Hostinger** | Sirf `dist` ka content → `public_html` |

`npm run deploy` se local pe `public_html/` ready ho jati hai; usi ka content Hostinger par `public_html` mein upload karna hai.
