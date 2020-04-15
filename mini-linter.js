let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end. Hi.';
let storyWords=story.split(" ");
// split to turn the string story into an array of individual words
let numOfWords=storyWords.length;
console.log(numOfWords);
let unnecessaryWords = ['extremely', 'literally', 'actually' ];
/*
let testedArray=['extremely','honey','seriously','actually','extremely','extremely','literally' ];
testedArray the identifier is self explanatory. To test wordFilterFunc.
*/
// worFilterFunc returns false when a word is found in the array unnecessaryWords of strings
// when a false value passed into filter method, elements removed
function wordFilterFunc(word){
    for (let i=0;i<unnecessaryWords.length; i=i+1){
        if (word===unnecessaryWords[i]){
            return false;
            // when the condition is word===unnecessaryWords[i] evaluated true. 
            //Duplicates found and to be removed
            //return is used because as long as there is overlap, function should stop running
        }
        else{
            var status= true;
            // a variable status declared because duplicates might be found in the next iteration. 
            //var keyword chosen because it must be accessible after the floor completed
        }  
    }
    return status;
}
const betterWords=storyWords.filter(wordFilterFunc);
console.log(betterWords); 
console.log(betterWords.length);
let overusedWords = ['really', 'very', 'basically'];
function overusedWordsCount(array){
    var count=0;
    for (let i=0;i<array.length;i+=1){
        for (let k=0;k<overusedWords.length;k+=1){
            if(array[i] === overusedWords[k]){
                count=count+1;
            }
        }
    }
    return count;
}
function numSentences(array){
    let count=0;
    for (let i=0;i<array.length;i++){
        let word=array[i];
        let wordLength=word.length;
        if (word[wordLength-1]==="."|| word[wordLength-1]==="!"){
            count++;
        }
    }
    return count;
}
var sentenceCount=0;
const numberOfSentences=betterWords.map(function(word){
    if (word[word.length-1]==="."||word[word.length-1]==="!"){
        sentenceCount++;
    }
}
)
console.log("number of sentences using map method is "+sentenceCount);
console.log("number of overused words is "+overusedWordsCount(betterWords));
console.log("number of sentences is "+numSentences(betterWords));