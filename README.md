
# Deload Logistics — Static One-Page Site

Built with pure HTML/CSS/JS (Bootstrap 5). Ready for GitHub Pages.

## Edit company info
Search in `index.html` for:
- phone: `+1 (000) 000-0000`
- email: `info@deloadlogistics.com`
- address: `123 Business Rd, City, ST`
- social links: Instagram/Telegram/LinkedIn/Facebook placeholders
- map: change the `src` of the Google Maps iframe

## Apply form
This static site uses **Formspree**. Create a free endpoint and replace in `<form action="https://formspree.io/f/your_form_id">`.

Alternatives:
- Replace the form action with a Google Form URL
- Use Netlify Forms (if hosted on Netlify)
- Or connect to any REST endpoint you own

## GitHub Pages Deployment
1. Create a new repository (e.g., `deload-logistics-site`).
2. Upload all files from this folder.
3. In the repo: **Settings → Pages → Build and deployment** → Source: `Deploy from a branch`, Branch: `main` `/root`.
4. The site will be available at `https://<username>.github.io/deload-logistics-site/` (project pages).
5. For a **custom domain** (e.g., `deloadlogistics.com`):
   - Add the domain in **Settings → Pages → Custom domain** (this creates a `CNAME` file).
   - In your DNS, create a **CNAME** record pointing `www` → `<username>.github.io`.
   - (Optional) For apex (`deloadlogistics.com`) add A/ALIAS records to GitHub’s IPs or use your DNS provider’s ALIAS/ANAME.
   - Enable **Enforce HTTPS** once certificate is issued.

## Customize brand
- Replace `assets/images/deload-logo.png` with your actual SVG/PNG.
- Update colors in `assets/css/styles.css` (`--brand-blue`, `--brand-navy`).

## Local preview
Open `index.html` directly in a browser, or serve via a simple server:
```bash
python -m http.server 8080
```
Then visit http://localhost:8080
