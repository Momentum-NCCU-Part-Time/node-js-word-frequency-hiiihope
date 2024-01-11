const fs = require('fs')
const path = require('path')
const filePath = process.argv[2]

const STOP_WORDS = [
  'a',
  'an',
  'and',
  'are',
  'as',
  'at',
  'be',
  'by',
  'for',
  'from',
  'has',
  'he',
  'i',
  'in',
  'is',
  'it',
  'its',
  'of',
  'on',
  'that',
  'the',
  'to',
  'were',
  'will',
  'with',
]

function printWordFreq(file, callback) {
    fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the file:', err)
      process.exit(1)
    }


    countWords(text) 
      if (text.length === 0) {
        return {};
      }
           text = text.toLowerCase();
  
      /* regular expression to tokenise by word while ignoring punctuation. */
      const pattern = /\w+/g;
      text = text.match(pattern);
  
      let wordFrequency = {};
  
      /* Output an object with results. */
      wordFrequency = text.reduce((wordFrequencyMap, word) => {
        if (Object.hasOwnProperty.call(wordFrequency, word))
        wordFrequency[word] = 1;
        else wordFrequency[word] += 1;
  
        return wordFrequency;
      }, {});
  
      return wordFrequency;
    }
  
    // TODO: write code to count the words in the file
    console.log('Initial data read from file: ', data
    callback('Your word count results should be passed in to this callback')
  })
},

printWordFreq(filePath, (wordCount) => {
  console.log('The results from your word counts:', wordCount)
})
