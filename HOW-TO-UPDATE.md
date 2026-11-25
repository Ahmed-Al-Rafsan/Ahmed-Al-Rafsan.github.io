# How to update the website

You only ever edit **one file: `content.js`**. Both pages read it.

## The files

| File | What it is | Edit it? |
|---|---|---|
| `content.js` | Every word, project, skill, credential, photo caption and blog post | **Yes, this one** |
| `index.html` | The main page: layout, design and drawings | No |
| `office.html` | The optional virtual-office tour (linked in the footer) | No |
| `*.jpg` | Your photos | Replace a file, keep the same name |

## Editing on GitHub (no tools needed)

1. Open the repository on github.com and click `content.js`.
2. Click the pencil icon (Edit).
3. Make your change. Click **Commit changes**.
4. Wait about one minute, then refresh your site.

## Writing rules

- **First person.** "I built…", "my thesis…". Never "Rafsan has…".
- **One site for everyone.** Recruiters and professors read the same page, so nothing addresses one kind of visitor.
- **No plans or dates you are aiming for.** Show what exists today. The only exception is the AI engineering path in Skills, which is labelled "Learning now" and "Next".
- **State limits.** Every project says what it did not do.

## The most common updates

### 1. I finished a step of my AI engineering path
Find `aiPath:` in the Skills part. When a step has a project behind it, move it from the path into your toolkit:

1. Delete that line from `aiPath`, and set the next step's `status` to `"Learning now"`.
2. Add a tile to the right group in `groups:`, with what you built:

```js
{ name: "FastAPI", icon: "fastapi", detail: "I turned my attrition model into a small web service." },
```

Logos you can use are listed in the comment above `skills:`.

### 2. Add a new project
Scroll to `projects:` near the bottom. Copy one whole entry (from `{` to `},`), paste it at the top of the list and change the text. Give it a new `id` (lowercase, no spaces). `repo` is the repository name on your GitHub.

- `stat` is the one line shown in the project list, for example `'1,470 records · Risk modelling'`.
- `featured:true` puts the project in the three large cards at the top of Projects. Keep it on exactly three.
- `video` adds it to the Videos section automatically.
- A new project gets a simple drawing. Ask Claude to draw a custom one from its numbers.

### 3. Add a new YouTube walkthrough
Add `video: 'https://youtu.be/…'` and `videoTitle: '…'` to its project in `projects:`. To make it the video that plays first, set `featured:` in the `writing:` part to that project's `id`.

### 4. Add a photo to "Beyond the desk"
Upload the photo to the repository (keep the name short, no spaces, for example `gym-2027.jpg`). In `life:`, add a line to the right group:

```js
{ photo: "gym-2027.jpg", alt: "What the photo shows", caption: "One short sentence." },
```

### 5. Add an honour, certificate or degree
- Honours: `honours:` inside `credentials:` (`timeline` is the row of medals).
- Certificates: `certificates:`. Use `icon: "google"`, `"ibm"` or `"microsoft"`.
- When you pass PL-300, move it from `preparing:` into `certificates:` with its verify link.

### 6. Add a blog post
Scroll to `posts:` and copy one entry to the top of the list.

### 7. Change the paragraph under your name
It is `about:` at the very top, under `person:`. Keep it to one paragraph.

## Links you can send

- Whole site: https://ahmed-al-rafsan.github.io/
- Research section: https://ahmed-al-rafsan.github.io/#research
- Engineering work: https://ahmed-al-rafsan.github.io/#engineering
- Projects: https://ahmed-al-rafsan.github.io/#projects
- Videos: https://ahmed-al-rafsan.github.io/#videos

## If the site goes blank after an edit
A comma or quote mark is missing in `content.js`. On GitHub, open the file's **History** and restore the previous version. Then try the edit again, slowly. Every item needs a comma after its closing `}` and every text needs both quote marks. If a sentence needs an apostrophe inside it, use the curly one ( ’ ).

## Three rules
1. Everything on the site must be true today.
2. No address, ID numbers, date of birth, visa or migration details.
3. Describe only work you did yourself.
