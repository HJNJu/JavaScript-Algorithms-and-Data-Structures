/* Title Case a Sentence

Return the provided string with the first letter of each word capitalized. 
Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize connecting words like the and of.
*/

function titleCase(str) {
    const words = str.split(" ");
    const title = [];
    for (let st in words) {
      title[st] = words[st][0].toUpperCase() + words[st].slice(1).toLowerCase();
    }
    return title.join(" ");
  }
  
  titleCase("I'm a little tea pot");