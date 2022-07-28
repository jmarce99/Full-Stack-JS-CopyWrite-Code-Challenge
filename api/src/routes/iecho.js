const router = require("express").Router();

function reverseText(text) {
  const initialText = text.toLowerCase().split(" ").join("");
  const reversedText = text.toLowerCase().split("").reverse().join("");
  const initialTextReversed = reversedText.split(" ").join("");
  const isPalindrome = initialText === initialTextReversed;

  if (isPalindrome) {
    return {
      text: reversedText,
      palindrome: isPalindrome,
    };
  }
  return { text: reversedText };
}

router.get("/", async (req, res) => {
  const { text } = req.query;
  try {
    if (text.length > 0) res.status(200).json(reverseText(text));
  } catch {
    res.status(400).json({ error: "no text" });
  }
});

module.exports = router;
