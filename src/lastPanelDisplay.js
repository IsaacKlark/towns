const lastPanelDisplay = () => {
  document.onclick = function (e) {
    if (
      e.target.className !== "bar-bottom__input peson-select" &&
      e.target.className !== "roundButton grayButton" &&
      e.target.className !== "greenButton roundButton" &&
      e.target.className !== "roundButton greenButton" &&
      e.target.className !== "bar-bottom__input peson-select" &&
      e.target.className !== "type-of-tickets" &&
      e.target.className !== "last-panel" &&
      e.target.className !== "last-panel__row" &&
      e.target.className !== "last-panel__p" &&
      e.target.className !== "person-type" &&
      e.target.className !== "last-panel__button-zone"
    ) {
      document.querySelector(".last-panel").style.display = "none";
    }
  };
}

export default lastPanelDisplay;