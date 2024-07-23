console.log("Welcome Principal!");

const fs = require("node:fs");

// Read in feedback file, print that file to test

async function evaluteFeedback() {
  var feedBack = "";
  var keywords = "";
  try {
    feedBack = await fs.readFileSync("./feedback.json", "utf8");
    keywords = await fs.readFileSync("./keywords.json", "utf8");
  } catch (error) {
    console.log(error);
  }
  const feedBackData = JSON.parse(feedBack);
  const keywordsData = JSON.parse(keywords);

  for (var i = 0; i < feedBackData.length; i++) {
    for (var y = 0; y < keywordsData.length; y++) {
      if (feedBackData[i].comment.includes(keywordsData[y].keyword)) {
        console.log(feedBackData[i]);
        console.log("Keyword found!", keywordsData[y].keyword);
      }
    }
  }
}

evaluteFeedback();

// Write feedback function that takes in file and returns postivie or negative decision
