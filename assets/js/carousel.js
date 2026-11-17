import { hexToString, removeColorClasses } from "./colors.js";

const carouselSection = document.querySelector("#carousel");
const carouselTitle = document.querySelector(".carousel__title");
const carouselCard = document.querySelector(".carousel__card");
const carouselCardText = document.querySelector(".carousel__card-text");
const previousButton = document.querySelector(".carousel__btn_type_left");
const nextButton = document.querySelector(".carousel__btn_type_right");
const flipButton = document.querySelector(".carousel__btn_type_flip");

function getCarouselTitleString(deck, currentIndex) {
  const cardNumber = deck.cards.length ? currentIndex + 1 : 0;
  return `${deck.name} \u00b7 ${cardNumber}/${deck.cards.length}`;
}

function renderCarouselView(deck) {
  let currentIndex = 0;
  let showingQuestion = true;

  removeColorClasses(carouselCard);
  const colorName = hexToString(deck.color);
  if (colorName) {
    carouselCard.classList.add(`carousel__card_color_${colorName}`);
  }

  function updateDisplay() {
    const currentCard = deck.cards[currentIndex];
    if (showingQuestion) {
      carouselCardText.textContent = currentCard ? currentCard.question : "";
      carouselCard.classList.remove("carousel__card_color_white");
    } else {
      carouselCardText.textContent = currentCard ? currentCard.answer : "";
      carouselCard.classList.add("carousel__card_color_white");
    }
    carouselTitle.textContent = getCarouselTitleString(deck, currentIndex);
    previousButton.disabled = currentIndex === 0;
    previousButton.classList.toggle(
      "carousel__btn_disabled",
      previousButton.disabled,
    );
    nextButton.disabled =
      deck.cards.length === 0 || currentIndex === deck.cards.length - 1;
    nextButton.classList.toggle("carousel__btn_disabled", nextButton.disabled);
  }

  previousButton.onclick = () => {
    if (currentIndex > 0) {
      currentIndex -= 1;
      showingQuestion = true;
      updateDisplay();
    }
  };

  nextButton.onclick = () => {
    if (currentIndex < deck.cards.length - 1) {
      currentIndex += 1;
      showingQuestion = true;
      updateDisplay();
    }
  };

  flipButton.onclick = () => {
    showingQuestion = !showingQuestion;
    updateDisplay();
  };

  updateDisplay();
}

export { renderCarouselView };
