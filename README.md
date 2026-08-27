# BOQUILA — website skeleton

Plain HTML, CSS and vanilla JS. No build step, no framework, so it can go
straight onto GitHub Pages. Structure and design tokens are in place, copy
and imagery are deliberately left as marked placeholders for you to fill.

## What is here

```
boquila-website/
├─ index.html          Home
├─ about.html           About
├─ experiences.html     Experiences
├─ contact.html         Contact
├─ style.css        All design tokens and layout live here
├─ lang-toggle.js    ES/EN toggle, remembers choice via localStorage
└─ images/placeholders/ (empty — see image checklist below)
```

## Previewing locally

No server needed for a quick look, but a local server avoids some browser
quirks with fonts and paths:

```
cd boquila-website
python3 -m http.server 8000
```

Then open `http://localhost:8000` in a browser.

## Putting it on GitHub

1. Create a new repository on GitHub, e.g. `boquila-website`. Leave it
   empty (no README, no .gitignore) since you already have files.
2. From inside the `boquila-website` folder:
   ```
   git init
   git add .
   git commit -m "Site skeleton"
   git branch -M main
   git remote add origin https://github.com/<your-username>/boquila-website.git
   git push -u origin main
   ```
3. In the repo on GitHub: **Settings → Pages → Source → Deploy from a
   branch → main → / (root) → Save**. GitHub gives you a URL a minute or
   two later, something like `https://<your-username>.github.io/boquila-website/`.
4. If you later attach a custom domain (e.g. boquila.cl), that is also
   configured from the same Pages settings screen, plus a DNS record with
   whoever holds the domain.

Every time you push a commit to `main`, the live site updates automatically.
No further steps needed.

## How the pieces work

**Language toggle.** Every piece of translatable text is wrapped twice:
```html
<span data-es>Texto en español</span>
<span data-en>English text</span>
```
The script shows only one at a time, defaulting to Spanish, and remembers
the visitor's choice as they move between pages. Structural chrome with no
translation, like a copyright line, needs no wrapper.

**Image placeholders.** Dashed boxes hold each image's spot and print its
brief directly on the page, so the layout can be judged before real photos
exist. When an image is ready:
1. Drop the file into `images/`.
2. Replace the `<div class="image-slot ...">` with an `<img>` tag inside
   it, or add `<img src="images/yourfile.jpg" alt="...">` inside the div.
3. Add the class `filled` to the div and the dashed border and caption
   disappear on their own.

**Copy placeholders.** Anything still to be written sits inside
`<span class="copy-slot">` or is marked `[ WRITE: ... ]`. These carry no
visual styling meant to survive, they are there to be deleted and replaced
with your sentences, in your voice.

**Contact form.** Left unwired on purpose. A static GitHub Pages site
cannot process a form submission on its own. When you are ready to make it
functional, the simplest routes are a form-handling service such as
Formspree or Web3Forms: you point the form's `action` at the URL they give
you and nothing else changes. Until then, the `mailto:` link above the form
works immediately.

## Design tokens (style.css)

- Colour: near-black ground (`#0c0d0a`), warm paper text (`#ece6d8`), moss
  (`#55613e`), ember (`#b1552e`), stone (`#a89d89`), smoke (`#6d6a62`).
  Ember is the one accent that should ever draw the eye, used sparingly:
  links, the loaded tendril line, the active language button.
- Type: Lora for every headline and paragraph, loaded from Google Fonts.
  Jost, a quieter geometric sans, is used only for navigation, labels and
  captions, small and letter-spaced, so it reads as structure rather than
  voice.
- Signature element: the thin line under the homepage wordmark draws
  itself once on load, a nod to the Boquila vine tracing the shape of
  whatever it climbs. It sits still if the visitor has reduced motion
  turned on.
- Everything is one file, `style.css`, so a palette or type change
  only needs to happen in one place.

## Image checklist

Specs are also visible directly on each placeholder in the browser. Listed
here together for planning a shoot or sourcing session:

1. Homepage hero — wide landscape, forest or fire-cooking scene. 2400×1000px min. This carries the whole first impression, choose it last if needed.
2. Homepage mission — native plant detail or fermentation process, portrait crop. 1600×2000px min.
3. Homepage offer grid — Austral cooking technique, 1200×1200px.
4. Homepage offer grid — traditional fermentation, 1200×1200px.
5. Homepage offer grid — native plant garden, 1200×1200px.
6. Homepage location — Pucón / La Araucanía setting, workshop exterior, 1800×1000px.
7. About — Boquila trifoliolata leaf detail showing mimicry, 1600×2000px.
8. About — founder portrait (T), 1200×1200px.
9. About — founder portrait (Bryony), 1200×1200px.
10. About — native plant demonstration garden, wide, 1800×1000px.
11. Experiences — fire cooking / horno technique in use, 1400×1750px.
12. Experiences — fermentation vessels / process, 1400×1750px.
13. Experiences — garden walk / native species detail, 1400×1750px.

## Copy checklist

Every `[ WRITE: ... ]` marker in the HTML, by page:

- **Home:** meta description, mission headline + paragraph, offer intro line.
- **About:** meta description, headline (name origin / plant), plant story paragraph, two founder bios, full mission paragraph, one line each for BOQUILA 1.0 and 2.0.
- **Experiences:** meta description, intro headline + paragraph, three workshop names + descriptions (cooking, fermentation, garden — duplicate the `<li>` block for more), practical information, booking method.
- **Contact:** meta description, opening line, short invitation paragraph, confirm email address.

## Not yet decided (flag for a future pass)

- Final page count: Journal and a BOQUILA 2.0 teaser were mentioned as
  possibilities but left out of this first scope.
- Booking mechanism for Experiences (direct email vs. an external tool).
- Contact form handler (Formspree, Web3Forms, or mailto only).
- Custom domain, if boquila.cl or similar is intended.
