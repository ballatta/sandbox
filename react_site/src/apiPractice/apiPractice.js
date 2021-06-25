import React, { useState } from "react";
import fetch from "node-fetch";
import { Button, FormControl } from "react-bootstrap";

const API_KEY = "b3d9a78789e4bf30987fda53beba39f67f611546";
const API_URL = "https://api.esv.org/v3/passage/";

export default function apiPractice(props) {
  let [chapterHTML, setChapterHTML] = useState("");
  let [bookName, setBookName] = useState("Jonah");
  let [chapterNumber, setChapterNumber] = useState(1);
  let [chapterText, setChapterText] = useState("");

  const retrieveData = async () => {
    setChapterHTML(await getChapterInfo(bookName, chapterNumber, "html"));
    setChapterText(await getChapterInfo(bookName, chapterNumber, "text"));
  };
  return (
    <>
      <FormControl
        value={bookName}
        onChange={(e) => setBookName(e.target.value)}
      />
      <FormControl
        value={chapterNumber}
        onChange={(e) => setChapterNumber(e.target.value)}
      />
      <Button onClick={retrieveData}>getChapterHTML</Button>
      <div dangerouslySetInnerHTML={{ __html: chapterHTML }} />
      {chapterText}
      {getProcessedText(chapterText).map((text) => (
        <div>{text}</div>
      ))}
    </>
  );
}

const getProcessedText = (chapterText) => {
  let trimmedText = removeExtra(chapterText);
  let wordArray = textToWordArray(trimmedText);
  let wordCount = getWordCount(wordArray);
  return objectToSortedArray(wordCount);
};

// object => array
const objectToSortedArray = (wordCount) => {
  let sortedArray = Object.entries(wordCount).sort(([_word, count], [_word2, count2]) => count2 - count)
  return sortedArray.map(([word, count]) => `${word}: ${count}`);
};

// object => string
const wordCountToString = (wordCount) => {
  let objectString = "";
  for (let word of Object.keys(wordCount)) {
    objectString += `${word}: ${wordCount[word]}`;
  }
  return objectString;
};

// array => object: (keys: words, values: counts)
const getWordCount = (wordArray) => {
  let wordCount = {};
  for (let i = 0; i < wordArray.length; i++) {
    wordCount[wordArray[i]] = 0;
  }
  for (let i = 0; i < wordArray.length; i++) {
    wordCount[wordArray[i]] = wordCount[wordArray[i]] + 1;
  }
  return wordCount;
};

// string => string
const removeExtra = (chapterText) => {
  let trimmedText = "";
  trimmedText = chapterText.replaceAll("\n", " ");
  trimmedText = trimmedText.replaceAll(",", " ");
  return trimmedText.toLowerCase();
};

// string => array
const textToWordArray = (chapterText) => {
  let wordArray = [];
  let word = "";
  for (let i = 0; i < chapterText.length; i++) {
    let character = chapterText[i];
    if (character === " ") {
      if (word !== "") {
        if (i < 10) {
          console.log(word);
        }
        wordArray.push(word);
        word = "";
      }
    } else {
      word = word.concat(character);
    }
  }
  return wordArray;
};

// array => string
const getFirstTenWords = (wordArray) => {
  return joinWords(wordArray.slice(0, 10), " ");
};

// array => string
const joinWords = (wordArray, separator) => {
  let joinedWords = "";
  for (let i = 0; i < wordArray.length; i++) {
    joinedWords = joinedWords + `${wordArray[i]}` + separator;
  }
  return joinedWords;
};

const getChapterInfo = async (book, chapter, type) => {
  const query = `?q=${encodeURIComponent(`${book} ${chapter}`)}`;
  console.log(book, chapter, type);
  const res = await fetch(API_URL + `${type}/` + query, {
    headers: {
      Authorization: `Token ${API_KEY}`,
    },
  });
  const { passages } = await res.json();
  return passages.join("");
};

/**
 * To Dos:
 * - Trim Footnotes
 * - Trim special characters
 * - Trim numbers
 * - Highlight top 5 most common words
 * - Each word in object hyperlinked to highlight all its uses
 * - Trim Book and Chapter(s) from top
 * - Style
 * - Next & Previous buttons
 */