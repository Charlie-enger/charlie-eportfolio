# Charlie Enger Badges Portfolio

## Site structure

Main navigation:
- Home (`index.html`)
- Badges (`badges.html`)

Badge category subpages:
- Community (`community.html`)
- Innovation (`innovation.html`)
- Impact (`impact.html`)

## Edit text and add badge entries

Open `assets/data.js`. This one file controls the title-page text, category descriptions, badge entries, images, video, audio, embedded YouTube videos, downloadable files, and external links.

To add several badges to a category, duplicate one entire entry object inside that category's `entries` array. Keep a comma between objects.

## Add a picture

1. Put the image in `assets/media/`, such as `community-event.jpg`.
2. In the appropriate badge entry, use:

```javascript
coverImage: "assets/media/community-event.jpg",
images: [
  {
    src: "assets/media/community-event.jpg",
    alt: "Charlie speaking with students at a campus event",
    caption: "Optional caption"
  }
],
```

Always write useful alternative text that describes the image.

## Add multimedia

Use these fields in a badge entry:

```javascript
videos: [
  { src: "assets/media/presentation.mp4", caption: "Presentation excerpt" }
],
audio: [
  { src: "assets/media/interview.mp3", caption: "Interview excerpt" }
],
embeds: [
  { src: "https://www.youtube.com/embed/VIDEO_ID", title: "Project demonstration" }
],
files: [
  { src: "assets/media/report.pdf", label: "Download the project report" }
],
links: [
  { url: "https://example.com", label: "Visit the live project" }
]
```

For privacy and security, the site's renderer accepts local media from `assets/media/`, HTTPS links, and YouTube embed links.

## Preview

Open `index.html` directly. For the most accurate media testing, run a local server from this folder:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish

Upload the files to the root of a GitHub repository and enable GitHub Pages from the `main` branch. Replace all placeholder content before publishing. Do not upload private, copyrighted, or confidential material unless you have permission.
