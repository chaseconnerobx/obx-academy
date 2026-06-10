# OBx Academy

Internal learning management system for the OuterBox team. Built as a static site deployable to GitHub Pages.

## Deploying to GitHub Pages

1. Create a new GitHub repository (e.g. `obx-academy`)
2. Push this folder's contents to the `main` branch
3. Go to **Settings → Pages → Source** and select `main` branch, `/ (root)`
4. Your site will be live at `https://yourusername.github.io/obx-academy/`

## Project structure

```
obx-academy/
├── index.html          # App shell and all page templates
├── css/
│   └── main.css        # All styles — OBx brand tokens, layout, components
├── js/
│   ├── app.js          # Main controller — routing, auth, navigation, state
│   ├── api.js          # Anthropic API calls — lesson generation and grading
│   ├── lesson.js       # Lesson pane — generate content, mark topics done
│   ├── assignment.js   # Assignment pane — MCQ + written, AI grading
│   ├── render.js       # Page renderers — team lists, module grid, submissions
│   └── modals.js       # Modal controller
└── data/
    ├── modules.js      # All 8 training modules with metadata
    ├── team.js         # Team members and demo login credentials
    └── assignments.js  # MCQ questions + written prompts per module
```

## Adding a new module

1. Add entry to `data/modules.js`
2. Add MCQ questions and/or submission prompt to `data/assignments.js`
3. Add lesson AI prompt context to `js/api.js` `lessonPrompt()` switch

## Demo login

| Role    | Email                      | Password |
|---------|----------------------------|----------|
| Manager | manager@outerbox.com       | demo     |
| Learner | sarah@outerbox.com         | demo     |

## Notes

- The Anthropic API is called client-side. For production, proxy calls through a backend or serverless function to keep the API key server-side.
- All state is in-memory (resets on page reload). For persistence, connect to a backend or use localStorage.
- Tabler Icons are loaded from jsDelivr CDN. Fonts from Google Fonts.
