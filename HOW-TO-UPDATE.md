# How to update the virtual office

You only ever edit **one file: `content.js`**. Do not touch `index.html`.

## The files

| File | What it is | Edit it? |
|---|---|---|
| `content.js` | Every word, room, project, skill and blog post | **Yes, this one** |
| `index.html` | The office: reception, corridor, rooms, design | No |
| `classic.html` | The older page (kept for the Cruising Altitude story). It reads projects and posts from `content.js` | No |
| `*.jpg` | Your photos | Replace a file, keep the same name |

## Editing on GitHub (no tools needed)

1. Open the repository on github.com and click `content.js`.
2. Click the pencil icon (Edit).
3. Make your change. Click **Commit changes**.
4. Wait about one minute, then refresh your site.

## The most common updates

### 1. I finished something that was "Building" or "Planned"
Find the item in `content.js` (use Ctrl+F) and change its status:

```js
{ name: "Testing and automation", status: "Planned", detail: "pytest, GitHub Actions." },
```
becomes
```js
{ name: "Testing and automation", status: "Built", detail: "pytest and GitHub Actions in the retail ETL project." },
```

Only three statuses exist: `"Built"`, `"Building"`, `"Planned"`. Spell them exactly.
Change to `"Built"` only when there is a project a visitor can open.

### 2. Add a new project
Scroll to `projects:` near the bottom. Copy one whole entry (from `{` to `},`),
paste it at the top of the list, and change the text. Give it a new `id`
(lowercase, no spaces). `repo` is the repository name on your GitHub.

### 3. Add an AI project to the AI workshop room
Find `title: "AI projects"` and add a card:

```js
{ status: "Built", title: "Document question-answering assistant", meta: "Python, FastAPI",
  text: "One or two sentences on what it does and how you measured it.",
  link: "https://github.com/Ahmed-Al-Rafsan/your-repo", linkLabel: "Open the repository" },
```

### 4. Add a target date to a roadmap item
Add `target: "March 2027"` to the item. It shows as "Target: March 2027".

### 5. Add a blog post
Scroll to `posts:` and copy one entry to the top of the list.

### 6. Add a certificate
Find `title: "Professional certificates"` and copy one card.

### 7. Change your headline, intro or links
They are at the very top, under `person:`.

### 8. Change a skill level
Find `title: "Toolkit"` in the Data lab room and edit `level:` and `detail:`.

### 9. Add a whole new room
Copy one room (from `{ id: ...` to its closing `},`) inside `rooms: [ ... ]`.
Give it a new `id`, a `wing` (`"present"` or `"roadmap"`), a `name` and a `plaque`.
The door appears in the corridor and the floor directory automatically.

## If the site goes blank after an edit
A comma or quote mark is missing in `content.js`. On GitHub, open the file's
**History**, and restore the previous version. Then try the edit again, slowly.
Every item needs a comma after its closing `}` and every text needs both quote marks.

## Three rules
1. Status must be true today.
2. No address, ID numbers, date of birth, visa or migration details.
3. Describe only work you did yourself.
