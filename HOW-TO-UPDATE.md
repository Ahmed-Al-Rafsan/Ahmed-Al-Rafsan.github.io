# How to update the website

You only ever edit **one file: `content.js`**. Both pages read it.

## The files

| File | What it is | Edit it? |
|---|---|---|
| `content.js` | Every word, project, skill, credential and blog post | **Yes, this one** |
| `index.html` | The main page: layout, design and drawings | No |
| `office.html` | The optional virtual-office tour (linked in the footer) | No |
| `*.jpg` | Your photos | Replace a file, keep the same name |

## Editing on GitHub (no tools needed)

1. Open the repository on github.com and click `content.js`.
2. Click the pencil icon (Edit).
3. Make your change. Click **Commit changes**.
4. Wait about one minute, then refresh your site.

## The most common updates

### 1. Change the "Updated" date in the title block
At the very top, under `person:`, change `updated: "November 2026"`.
Do this every time you change something important.

### 2. I finished something that was "Building" or "Planned"
Find the item (Ctrl+F) and change its status:

```js
{ name: "APIs: HTTP, JSON and requests", status: "Building", detail: "In progress now." },
```
becomes
```js
{ name: "APIs: HTTP, JSON and requests", status: "Built", detail: "Used in the weather-API project." },
```

Only three statuses exist: `"Built"`, `"Building"`, `"Planned"`. Spell them exactly.
Change to `"Built"` only when there is a project a visitor can open.
On the main page, the Skills board moves the item into the right column by itself.

### 3. Add a new project
Scroll to `projects:` near the bottom. Copy one whole entry (from `{` to `},`),
paste it at the top of the list, and change the text. Give it a new `id`
(lowercase, no spaces). `repo` is the repository name on your GitHub.

- `art` picks the small drawing on the card: `"roc"`, `"pipeline"`, `"people"`, `"clusters"` or `"bars"`.
- `stat` is the one line shown in the project list, for example `'1,470 records · Risk modelling'`.
- `featured:true` puts the project in the three large cards at the top of Projects.
  Keep it on exactly three projects. When your thesis-plus-ML project is finished,
  make it featured.

### 4. Your research project (the thesis, revisited with machine learning)
When you start it: find `First project: the thesis, revisited` and change `"Planned"` to `"Building"`.
When it has results: add it as a project (step 3), mark it `featured:true`, and change the status to `"Built"`.

### 5. Add a blog post
Scroll to `posts:` and copy one entry to the top of the list.

### 6. Add a certificate
Find `title: "Professional certificates"` and copy one card.

### 7. Change your headline, intro, "Open to" line or links
They are at the very top, under `person:`.
The headline is split into two lines at the `|` character.

### 8. Change a skill level
Find `title: "Toolkit"` and edit `level:` (`"Strong"`, `"Working"` or `"Introduced"`) and `detail:`.

## Links you can send

- Whole site: https://ahmed-al-rafsan.github.io/
- Straight to the research section (for professors): https://ahmed-al-rafsan.github.io/#research
- Straight to the projects (for recruiters): https://ahmed-al-rafsan.github.io/#projects

## If the site goes blank after an edit
A comma or quote mark is missing in `content.js`. On GitHub, open the file's
**History**, and restore the previous version. Then try the edit again, slowly.
Every item needs a comma after its closing `}` and every text needs both quote marks.
If a sentence needs a quote mark inside it, use the curly ones ( ’ “ ” ).

## Three rules
1. Status must be true today.
2. No address, ID numbers, date of birth, visa or migration details.
3. Describe only work you did yourself.
