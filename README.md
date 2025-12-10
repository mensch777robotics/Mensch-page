# Mensch Robotics Website

Modern, premium dark-themed site built with Tailwind CSS and GSAP.

## Images
- Location: `public/images/`
- Filenames used by the site:
	- `robi-teaching-assistant.jpg`
	- `robi-reception-robot.jpg`
	- `robi-research-robot.jpg`

### Replace or Add Images
1. Prepare web-safe JPG/PNG (prefer 1600px+ width, optimized).
2. Save them into `public/images/` using the same filenames above.
3. If you add new images, update `index.html` `<img src>` paths accordingly.

### Rename Original Files (Windows)
If your originals are in the project root:

1. Copy them into `public/images/` and rename:
	 - `Robi — Al Teaching Assistant Robot.jpg` → `public/images/robi-teaching-assistant.jpg`
	 - `Reception & Visitor Guidance Robot.jpg` → `public/images/robi-reception-robot.jpg`
	 - `Research & Engineering Robot.jpg` → `public/images/robi-research-robot.jpg`

## Serve Locally
Open `index.html` directly or use a simple static server.

### Windows (cmd.exe)
Option A: Double-click `index.html` to open in the browser.

Option B: Use Python (if installed):

```cmd
python -m http.server 8080
```

Then visit: `http://localhost:8080/d:/MY works/Hello World/Mensch/Mensch-page/index.html`

Option C: Use Node (if installed):

```cmd
npx serve .
```

Visit the printed local URL and open `index.html`.

## Editing
- Main page: `index.html`
- Styles are Tailwind utility classes; animations use GSAP via CDN.
- No build step required.
