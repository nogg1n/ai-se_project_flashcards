#FLASHCARD APP

Flashcard app is a browser-based flashcard app for building and reviewing study decks. The home page, "My Decks", shows every deck as a color-coded tile with its name and card count. Clicking a deck opens a card viewer where you can step through the cards, flip each one to see the answer, and move back and forth through the deck. The header links to "My Decks" and "About", and a 404 page covers URLs that don't match anything.

Why I made it

I built StudyStack as a project in my AI software engineering course. I wanted something useful that also covered the core of front-end web development: semantic HTML, modular JavaScript, DOM manipulation, and client-side routing. A flashcard app fits that well because the idea is simple, but it still needs real structure: data, rendering, navigation, and user interaction.

The problem it addresses

Learning technical material such as HTML tags, JavaScript concepts, and Git commands takes a lot of repetition. Notes scattered across files and notebooks are hard to review, and it's hard to quiz yourself on them. StudyStack puts that material into focused, topic-based decks that you can open and cycle through quickly, with a clear sense of how much is in each deck. It runs entirely in the browser and needs no account or setup.

##Features and functionality

Deck dashboard: decks are rendered dynamically from data, each in its own color, showing its title and card count.
Card carousel: each deck opens in a viewer with a "current card / total" counter (for example "HTML Tags Deck · 1/10"), previous and next buttons, and a flip button to reveal the other side of the card. The previous button is disabled on the first card.
Deck deletion: each tile has a delete button that removes the deck from the page.
Client-side routing: the app is a single page that uses URL hashes (#home, #about, #carousel/<deck-id>). A router listens for hashchange events and shows the right section, so back/forward buttons work and every deck has its own link.
404 handling: unknown routes, or deck IDs that don't exist, show a "Sorry, nothing found!" page.
Accessible markup: buttons have aria-labels, the page uses semantic landmarks (header, nav, main, footer), and the document has proper metadata for the viewport, description, and keywords.

##Technologies used
HTML5: semantic structure, plus the <template> element, which is cloned for each deck tile
CSS3: a custom stylesheet using BEM-style class naming (for example deck**title and carousel**btn_type_left), combined with normalize.css as a vendor reset for consistent styling across browsers
JavaScript (ES modules): the code is split into separate modules (decks.js, colors.js, carousel.js, and index.js) that are imported and exported with import/export
DOM APIs: querySelector, template cloning, classList, textContent, event listeners, and the hidden attribute to show and hide views
Hash-based routing: a small router built on window.location.hash and the hashchange event
Google Fonts: the Inter typeface for a clean, readable interface
SVG: icons such as the delete button
Local development server: the app is served locally at 127.0.0.1 for testing
AI-assisted development: [tool name], used for [generating code / debugging / design iteration]

![alt text](/Users/noggin/Documents/workspace/FLASHCARD APP/assets/images/demo)
