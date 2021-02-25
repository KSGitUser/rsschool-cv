# CURRICULUM VITAE

## _Sergey Krikun_

### Personal details
- **Location:** [Stavropol, Russia](https://goo.gl/maps/9VcBYGpA1mCKGMca7)
- **Mobile phone:** +7-962-403-34-27
- **Email:** sergey.a.krikun@gmail.com
- **Marital status:** Married with 2 children

### Experience
I have been working as a front-end developer since the summer of 2019. Before that, I used to be an entrepreneur operating in the real estate market for about 18 years. I got my university degree in Computer Science with the major in English and Computer Science Teaching. I didn’t have many opportunities to practice coding for a long time, but I had a good base to get some knowledge of modern computer languages. In 2018, I decided to learn Web Development online at Geekbrains. I studied HTML, JavaScript and PHP for about a year. After that, I got a job as a front-end developer with Ajax, a real estate company in Krasnodar. I worked on an in-house product of the company. Vue was my main framework. After six months, I got a job with another company where I have been working until now.  My experience as an entrepreneur made it possible for me to practice my soft skills related to time management, communication, and problem-solving.

Though I have studied various programming languages like PHP, I really like JavaScript because it can help to solve a wide range of tasks, adding an action to a button on a web page, creating an IDE like Visual Studio Code or running scripts server-side to produce dynamic web page content. It's not at all boring, and I keep doing my best to enhance my knowledge and learn new language features. I would like to become a professional software engineer who could organize and inspire his coworkers to write a good and clean code. 
### Skills
My everyday tools:
- HTML
- CSS
    - Stylus
- JavaScrip
    - Vue - SPA
        - Vuex
        - Vuetify - as a UX libraty
    - Nuxt - SSR
    - TypeScript
    - JQuery - occasionally
    - Stencil.js - to create custom elements
    - JSDoc
- Figma
- Fiddler, HTTP Toolkit - to mock requests
- Postman - to make requests
- Webpack, Gulp, Babel, ESLint, Prettier
- Git

Tools I used during the Geekbrains course:
- React
    - Redux
- Jest
- SASS 
- PHP
    - Yii 2
- MySQL
- HTTP/HTTPS, some base of networks

### Code example

_Merge sort of array._\
A sorting algorithm in JavaScript.
Based on article [Merge Sort Algorithm in JavaScript](https://medium.com/javascript-in-plain-english/javascript-merge-sort-3205891ac060)

```js
    const merge = (firstArr, secondArr, compareFunc) => {
      const sortedArr = [];
      let i=0;
      let j=0;
    
     while ( i<firstArr.length && j<secondArr.length) {
       if (compareFunc(firstArr[i], secondArr[j])) {
         sortedArr.push(firstArr[i]);
         i += 1;
       } else {
         sortedArr.push(secondArr[j]);
         j +=1;
       }
     }
      return [...sortedArr, ...firstArr.splice(i), ...secondArr.splice(j)]  
    }
    
    const compareFunction = (firstNumber, secondNumber) => {
      return firstNumber < secondNumber;
    }
    
    const mergeSort = (arrayToSort, compareFunc) => {
      if (arrayToSort.length < 2) {
        return arrayToSort;
      }
    
      const middle = Math.floor(arrayToSort.length/2);
      const firstArr = mergeSort(arrayToSort.slice(0,middle), compareFunc);
      const secondArr = mergeSort(arrayToSort.slice(middle), compareFunc);
      return merge(firstArr, secondArr, compareFunc);
    }
    
    const unsortedArr = [87, 56, 95, 96, 5, 45];
    
    const sortedArray = mergeSort(unsortedArr, compareFunction);
    
    console.log(sortedArray); // [5, 45, 56, 87, 95, 96]
```
