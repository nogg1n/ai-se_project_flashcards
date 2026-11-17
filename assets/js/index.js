import { decks, getDeckById } from "./decks.js";
import { hexToString, removeColorClasses } from "./colors.js";
import { renderCarouselView } from "./carousel.js";

const deckTemplate = document.querySelector("#deck-template");
const decksList = document.querySelector(".decks__list");
const main = document.querySelector(".page__main-content");
const homeSection = document.querySelector("#home");
const notFoundSection = document.querySelector("#not-found");
const aboutSection = document.querySelector("#about");
const carouselSection = document.querySelector("#carousel");

function showPage(activeSection) {
  [homeSection, notFoundSection, aboutSection, carouselSection].forEach(
    (section) => {
      section.hidden = section !== activeSection;
    },
  );
  main.classList.toggle(
    "page__main-content_location_carousel",
    activeSection === carouselSection,
  );
}

function createDeckEl(deckData) {
  const deckEl = deckTemplate.content.firstElementChild.cloneNode(true);
  removeColorClasses(deckEl);
  const colorName = hexToString(deckData.color);
  if (colorName) {
    deckEl.classList.add(`deck_color_${colorName}`);
  }
  deckEl.querySelector(".deck__title").textContent = deckData.name;
  deckEl.querySelector(".deck__count").textContent =
    `${deckData.cards.length} cards`;
  const deckLink = deckEl.querySelector(".deck__link");
  deckLink.href = `#carousel/${deckData.id}`;
  deckEl
    .querySelector(".deck__delete-btn")
    .addEventListener("click", () => deckEl.remove());
  return deckEl;
}

function renderDeckEl(item) {
  decksList.prepend(createDeckEl(item));
}

function router() {
  const hash = window.location.hash.slice(1);

  if (hash === "" || hash === "home") {
    showPage(homeSection);
    return;
  }

  if (hash === "about") {
    showPage(aboutSection);
    return;
  }

  if (hash.startsWith("carousel/")) {
    const deckID = hash.slice("carousel/".length);
    const deck = getDeckById(deckID);
    if (deck) {
      showPage(carouselSection);
      renderCarouselView(deck);
      return;
    }
  }

  showPage(notFoundSection);
}

decks.forEach(renderDeckEl);
window.addEventListener("hashchange", router);
router();
