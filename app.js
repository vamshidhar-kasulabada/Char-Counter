const textareaEl = document.querySelector("textarea");
const charCountEl = document.querySelector(".char-count");
const remCountEl = document.querySelector(".rem-count");

// let charCount = textareaEl.textLength;
// let remainingCount = 10 - charCount;

assignValues();

textareaEl.addEventListener("keyup", function () {
  //   if (remainingCount > 0) {
  //     remainingCount -= 1;
  //   }
  assignValues();
});

function assignValues() {
  charCountEl.innerHTML = textareaEl.textLength;
  remCountEl.innerHTML = 50 - textareaEl.textLength;
}
