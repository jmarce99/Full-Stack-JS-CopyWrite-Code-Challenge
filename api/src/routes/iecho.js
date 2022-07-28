const router = require("express").Router();

// Function to detect palindromes
function reverseText(text) {
  const initialText = text.split(" ").join("");
  const reversedText = text.split("").reverse().join("");
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

// Route to Reverse a text and Show a Palindrome
router.get("/", async (req, res) => {
  const { text } = req.query;
  if (!text) res.status(400).json({ error: "no text" });
  else {
    res.status(200).json(reverseText(text.toLowerCase()));
  }
});

module.exports = router;
