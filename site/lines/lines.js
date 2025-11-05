function setButtonsText(textContent) {
  document.querySelectorAll("button.lines").forEach(function (button) {
    button.textContent = textContent;
  });
}

function setButtonsTooltips(text) {
  document.querySelectorAll("button.lines").forEach(function (button) {
    button.title = text;
  });
}

function toggleLines(event) {
  if (document.body.classList.contains("lines")) {
    document.body.classList.add("linesdouble");
    document.body.classList.remove("lines");
    setButtonsText("Hide Lines");
    setButtonsTooltips("Hide typographical rhythm debugging lines");
  } else if (document.body.classList.contains("linesdouble")) {
    document.body.classList.remove("linesdouble");
    setButtonsText("Show Lines");
    setButtonsTooltips("Show typographical rhythm debugging lines");
  } else {
    document.body.classList.add("lines");
    setButtonsText("Show Double Lines");
    setButtonsTooltips("Show double typographical rhythm debugging lines");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  let textContent = "Show Lines";
  let tooltip = "Show typographical rhythm debugging lines";

  if (params.has("lines")) {
    document.body.classList.add("lines");
    textContent = "Show Double Lines";
    tooltip = "Show double typographical rhythm debugging lines";
  } else if (params.has("linesdouble")) {
    document.body.classList.add("linesdouble");
    textContent = "Hide Lines";
    tooltip = "Hide typographical rhythm debugging lines";
  }

  setButtonsText(textContent);
  setButtonsTooltips(tooltip);

  document.querySelectorAll("button.lines").forEach(function (button) {
    button.addEventListener("click", toggleLines);
  });
});
