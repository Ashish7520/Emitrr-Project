const questions = [
  {
    question_text: "What is React?",
    option_a: "A programming language",
    option_b: "A JavaScript library for building user interfaces",
    option_c: "A server-side framework",
    option_d: "A database management system",
    correct_option: "B",
    language: "English",
    difficulty: "easy",
  },
  {
    question_text: "What does JSX stand for in React?",
    option_a: "JavaScript XML",
    option_b: "Java XML",
    option_c: "JSON XML",
    option_d: "JavaScript Extension",
    correct_option: "A",
    language: "English",
    difficulty: "easy",
  },
  {
    question_text: "In React, what is the purpose of the 'state'?",
    option_a: "To store and manage component's internal data",
    option_b: "To handle HTTP requests",
    option_c: "To define styles for components",
    option_d: "To handle routing in the application",
    correct_option: "A",
    language: "English",
    difficulty: "easy",
  },
  {
    question_text: "What is the primary use of Node.js?",
    option_a: "Front-end development",
    option_b: "Server-side development",
    option_c: "Mobile app development",
    option_d: "Database management",
    correct_option: "B",
    language: "English",
    difficulty: "easy",
  },
  {
    question_text: "Which package manager is commonly used with Node.js?",
    option_a: "npm",
    option_b: "Yarn",
    option_c: "Both A and B",
    option_d: "None of the above",
    correct_option: "C",
    language: "English",
    difficulty: "easy",
  },
  {
    question_text:
      "What is the purpose of 'package.json' in a Node.js project?",
    option_a: "To store project configuration",
    option_b: "To manage project dependencies",
    option_c: "To define API routes",
    option_d: "To store CSS styles",
    correct_option: "B",
    language: "English",
    difficulty: "medium",
  },
  {
    question_text: "What is the role of Webpack in a React application?",
    option_a: "To manage server-side logic",
    option_b: "To bundle and optimize JavaScript code",
    option_c: "To handle database connections",
    option_d: "To define API routes",
    correct_option: "B",
    language: "English",
    difficulty: "medium",
  },
  {
    question_text: "What is the main purpose of the 'useEffect' hook in React?",
    option_a: "To handle form submissions",
    option_b: "To perform side effects in functional components",
    option_c: "To define API endpoints",
    option_d: "To create reusable components",
    correct_option: "B",
    language: "English",
    difficulty: "medium",
  },
  {
    question_text: "In Node.js, what is the role of 'npm start' command?",
    option_a: "To install Node modules",
    option_b: "To start the application",
    option_c: "To run tests",
    option_d: "To deploy the application",
    correct_option: "B",
    language: "English",
    difficulty: "medium",
  },
  {
    question_text: "Which of the following is NOT a valid HTTP method?",
    option_a: "GET",
    option_b: "POST",
    option_c: "UPDATE",
    option_d: "DELETE",
    correct_option: "C",
    language: "English",
    difficulty: "medium",
  },
  {
    question_text: "What is the purpose of 'setState' in React?",
    option_a: "To update the DOM directly",
    option_b: "To update the state of a component",
    option_c: "To define CSS styles",
    option_d: "To create a new component",
    correct_option: "B",
    language: "English",
    difficulty: "hard",
  },
  {
    question_text: "Which of the following is a routing library for React?",
    option_a: "Redux",
    option_b: "Express",
    option_c: "React Router",
    option_d: "Axios",
    correct_option: "C",
    language: "English",
    difficulty: "hard",
  },
  {
    question_text: "What is the purpose of the 'require' function in Node.js?",
    option_a: "To include external modules",
    option_b: "To define CSS styles",
    option_c: "To handle database connections",
    option_d: "To create components",
    correct_option: "A",
    language: "English",
    difficulty: "hard",
  },
  {
    question_text: "What is the role of 'middleware' in Express.js?",
    option_a: "To manage server-side logic",
    option_b: "To handle HTTP requests",
    option_c: "To define API routes",
    option_d: "To create authentication checks",
    correct_option: "D",
    language: "English",
    difficulty: "hard",
  },
  {
    question_text: "What does the 'async' keyword indicate in JavaScript?",
    option_a: "It defines an asynchronous function",
    option_b: "It defines a synchronous function",
    option_c: "It handles errors in a try-catch block",
    option_d: "It defines a callback function",
    correct_option: "A",
    language: "English",
    difficulty: "hard",
  },
  {
    question_text: "What does HTML stand for?",
    option_a: "Hyper Text Markup Language",
    option_b: "High-Level Text Management Language",
    option_c: "Hyper Transferable Language",
    option_d: "High-Level Transfer Markup",
    correct_option: "A",
    language: "English",
    difficulty: "easy",
  },

  {
    question_text:
      "What is the purpose of the console.log() function in JavaScript?",
    option_a: "Display a message box",
    option_b: "Print output to the console",
    option_c: "Create a new variable",
    option_d: "Define a function",
    correct_option: "B",
    language: "English",
    difficulty: "easy",
  },

  {
    question_text: "How do you declare a variable in JavaScript?",
    option_a: "var variableName;",
    option_b: "let variableName;",
    option_c: "const variableName;",
    option_d: "All of the above",
    correct_option: "D",
    language: "English",
    difficulty: "easy",
  },

  {
    question_text: "What is the result of 2 + '2' in JavaScript?",
    option_a: "4",
    option_b: "'22'",
    option_c: "22",
    option_d: "Error",
    correct_option: "B",
    language: "English",
    difficulty: "easy",
  },

  {
    question_text: "What does CSS stand for?",
    option_a: "Computer Style Sheets",
    option_b: "Creative Style Sheets",
    option_c: "Cascading Style Sheets",
    option_d: "Colorful Style Sheets",
    correct_option: "C",
    language: "English",
    difficulty: "easy",
  },

  {
    question_text: "How do you comment in JavaScript?",
    option_a: "<!-- This is a comment -->",
    option_b: "// This is a comment",
    option_c: "/* This is a comment */",
    option_d: "# This is a comment",
    correct_option: "B",
    language: "English",
    difficulty: "easy",
  },

  {
    question_text:
      "What is the purpose of the document.getElementById() method?",
    option_a: "Access an HTML element by class",
    option_b: "Access an HTML element by ID",
    option_c: "Access an HTML element by tag name",
    option_d: "Access an HTML element by name",
    correct_option: "B",
    language: "English",
    difficulty: "easy",
  },

  {
    question_text: "How do you write a conditional statement in JavaScript?",
    option_a: "if/else",
    option_b: "switch",
    option_c: "for",
    option_d: "Both A and B",
    correct_option: "D",
    language: "English",
    difficulty: "easy",
  },

  {
    question_text:
      "What is the role of the addEventListener method in JavaScript?",
    option_a: "Remove an event listener",
    option_b: "Add a new HTML element",
    option_c: "Attach an event handler to an element",
    option_d: "Create a new function",
    correct_option: "C",
    language: "English",
    difficulty: "easy",
  },

  {
    question_text: "What is the purpose of the typeof operator in JavaScript?",
    option_a: "Check if a variable is defined",
    option_b: "Determine the type of a variable",
    option_c: "Create a new variable",
    option_d: "Concatenate two strings",
    correct_option: "B",
    language: "English",
    difficulty: "easy",
  },

  {
    question_text: "Explain the concept of closure in JavaScript.",
    option_a: "A way to close a browser tab",
    option_b:
      "A function inside another function that has access to its outer function's variables",
    option_c: "A method for closing alerts in JavaScript",
    option_d: "A type of loop in JavaScript",
    correct_option: "B",
    language: "English",
    difficulty: "medium",
  },

  {
    question_text: "How does prototypal inheritance work in JavaScript?",
    option_a: "It involves copying properties from one object to another",
    option_b:
      "It utilizes a chain of objects, with each object inheriting from its prototype",
    option_c: "It creates a new object from an existing object",
    option_d: "It uses classes to define inheritance",
    correct_option: "B",
    language: "English",
    difficulty: "medium",
  },

  {
    question_text:
      "What is the difference between let, const, and var in JavaScript?",
    option_a: "They are all interchangeable",
    option_b:
      "var has block scope, let has function scope, and const has block scope",
    option_c:
      "let has block scope, const has function scope, and var has global scope",
    option_d:
      "const is used for iteration in loops, let for constants, and var for variables",
    correct_option: "C",
    language: "English",
    difficulty: "medium",
  },

  {
    question_text:
      "Describe the differences between synchronous and asynchronous JavaScript.",
    option_a: "Synchronous code runs concurrently with other code",
    option_b: "Asynchronous code executes one task at a time",
    option_c: "Synchronous code waits for tasks to complete before moving on",
    option_d:
      "Asynchronous code doesn't wait for tasks to complete before moving on",
    correct_option: "C",
    language: "English",
    difficulty: "medium",
  },

  {
    question_text: "How does the this keyword work in JavaScript?",
    option_a: "It always refers to the global object",
    option_b: "It refers to the current function's scope",
    option_c: "It refers to the object on which a method is being called",
    option_d: "It points to the previous object in the chain",
    correct_option: "C",
    language: "English",
    difficulty: "medium",
  },

  {
    question_text: "Explain the concept of event delegation in JavaScript.",
    option_a: "Delegating events to other elements",
    option_b: "Assigning multiple events to one element",
    option_c: "Automatically handling events in the DOM",
    option_d: "Delegating the execution of events to external functions",
    correct_option: "A",
    language: "English",
    difficulty: "medium",
  },

  {
    question_text: "What is the purpose of the fetch function in JavaScript?",
    option_a: "To fetch data from a remote server",
    option_b: "To create a new HTML element",
    option_c: "To handle errors in JavaScript",
    option_d: "To define a callback function",
    correct_option: "A",
    language: "English",
    difficulty: "medium",
  },

  {
    question_text: "Differentiate between == and === in JavaScript.",
    option_a: "They are interchangeable",
    option_b: "== compares both value and type, === compares only value",
    option_c: "== compares only value, === compares both value and type",
    option_d: "== is used for assignment, === is used for comparison",
    correct_option: "C",
    language: "English",
    difficulty: "medium",
  },

  {
    question_text:
      "How can you handle errors in JavaScript using try...catch statements?",
    option_a: "By avoiding errors altogether",
    option_b: "By using if statements",
    option_c: "By wrapping potentially error-prone code in a try block",
    option_d: "By ignoring errors",
    correct_option: "C",
    language: "English",
    difficulty: "medium",
  },

  {
    question_text: "What is the purpose of the JavaScript map function?",
    option_a: "To create a map of key-value pairs",
    option_b: "To iterate over an array and transform its elements",
    option_c: "To define a mapping function for objects",
    option_d: "To add elements to an array",
    correct_option: "B",
    language: "English",
    difficulty: "medium",
  },

  {
    question_text:
      "Describe the event loop in JavaScript and how it handles asynchronous operations.",
    option_a: "It creates a loop of events in the DOM",
    option_b:
      "It manages the execution of asynchronous tasks using the call stack and callback queue",
    option_c: "It delegates events to external functions",
    option_d: "It handles events in a synchronous manner",
    correct_option: "B",
    language: "English",
    difficulty: "hard",
  },

  {
    question_text:
      "What is the difference between arrow functions and regular functions in JavaScript?",
    option_a: "Arrow functions have a shorter syntax",
    option_b:
      "Regular functions allow binding of 'this', arrow functions do not",
    option_c:
      "Arrow functions do not have their own 'this', regular functions do",
    option_d: "All of the above",
    correct_option: "D",
    language: "English",
    difficulty: "hard",
  },

  {
    question_text:
      "Explain the concept of promises and how they are used in JavaScript.",
    option_a: "Promises ensure that code runs in a single-threaded manner",
    option_b:
      "Promises represent a value that might be available now, or in the future, or never",
    option_c: "Promises are used for synchronous operations only",
    option_d: "Promises are an alternative to try...catch statements",
    correct_option: "B",
    language: "English",
    difficulty: "hard",
  },

  {
    question_text: "How does hoisting work in JavaScript?",
    option_a: "It lifts up elements in the DOM",
    option_b:
      "It allows access to variables and functions before they are declared",
    option_c: "It sorts variables based on priority",
    option_d: "It reorders code execution based on priority",
    correct_option: "B",
    language: "English",
    difficulty: "hard",
  },

  {
    question_text:
      "Describe the differences between the ES6 features: let, const, and class.",
    option_a: "They are all used for variable declaration",
    option_b:
      "let and const are used for variable declaration, class for creating objects",
    option_c:
      "let is used for iteration, const for constants, and class for object-oriented programming",
    option_d: "They are interchangeable and can be used in any context",
    correct_option: "B",
    language: "English",
    difficulty: "hard",
  },

  {
    question_text:
      "What is the significance of the use strict mode in JavaScript?",
    option_a: "It allows for loose typing in variables",
    option_b: "It enforces stricter parsing and error handling in code",
    option_c: "It enhances performance by removing error checks",
    option_d: "It is used for debugging purposes only",
    correct_option: "B",
    language: "English",
    difficulty: "hard",
  },

  {
    question_text:
      "Explain the differences between the call, apply, and bind methods in JavaScript.",
    option_a: "They are synonyms and can be used interchangeably",
    option_b: "They are used for calling functions with different arguments",
    option_c:
      "call is used for calling functions with a given this value, apply for an array of arguments, and bind for creating a new function with a fixed this value",
    option_d: "They are used for handling exceptions in JavaScript",
    correct_option: "C",
    language: "English",
    difficulty: "hard",
  },

  {
    question_text:
      "How does the JavaScript event loop handle tasks with different priorities?",
    option_a: "It executes tasks in the order they are added",
    option_b: "It prioritizes tasks based on their complexity",
    option_c:
      "It uses a priority queue to handle tasks with different priorities",
    option_d: "It randomly selects tasks to execute",
    correct_option: "C",
    language: "English",
    difficulty: "hard",
  },

  {
    question_text:
      "What are Web Workers in JavaScript, and how do they improve performance?",
    option_a: "Web Workers are used for styling web pages",
    option_b:
      "Web Workers are JavaScript scripts running in the background, improving performance by parallelizing tasks",
    option_c: "Web Workers are used for handling network requests",
    option_d: "Web Workers are responsible for creating new HTML elements",
    correct_option: "B",
    language: "English",
    difficulty: "hard",
  },

  {
    question_text:
      "Discuss the concept of 'currying' in JavaScript and provide an example.",
    option_a: "Currying is a method of preparing curry dishes in JavaScript",
    option_b:
      "Currying is a functional programming concept where a function is transformed into a sequence of unary functions",
    option_c:
      "Currying is the process of creating curry sauce using JavaScript",
    option_d: "Currying is a technique for creating arrays in JavaScript",
    correct_option: "B",
    language: "English",
    difficulty: "hard",
  },

  {
    question_text: "रिएक्ट क्या है?",
    option_a: "एक प्रोग्रामिंग भाषा",
    option_b: "एक जावास्क्रिप्ट लाइब्रेरी जो यूजर इंटरफेस बनाने के लिए है",
    option_c: "एक सर्वर-साइड फ़्रेमवर्क",
    option_d: "एक डेटाबेस प्रबंधन सिस्टम",
    correct_option: "B",
    language: "Hindi",
    difficulty: "easy",
  },
  {
    question_text: "रिएक्ट में JSX का क्या मतलब है?",
    option_a: "जावास्क्रिप्ट एक्सएमएल",
    option_b: "जावा एक्सएमएल",
    option_c: "जेसन एक्सएमएल",
    option_d: "जावास्क्रिप्ट एक्सटेंशन",
    correct_option: "A",
    language: "Hindi",
    difficulty: "easy",
  },
  {
    question_text: "रिएक्ट में 'स्थिति' का क्या उद्देश्य है?",
    option_a: "कॉम्पोनेंट के आंतरिक डेटा को संग्रहित और प्रबंधित करना",
    option_b: "एचटीटीपी अनुरोधों का संबोधन करना",
    option_c: "कॉम्पोनेंट के लिए शैलियां परिभाषित करना",
    option_d: "एप्लिकेशन में रूटिंग का संबोधन करना",
    correct_option: "A",
    language: "Hindi",
    difficulty: "easy",
  },
  {
    question_text: "Node.js का प्रमुख उपयोग क्या है?",
    option_a: "फ्रंट-एंड डेवेलपमेंट",
    option_b: "सर्वर-साइड डेवेलपमेंट",
    option_c: "मोबाइल एप्लिकेशन डेवेलपमेंट",
    option_d: "डेटाबेस प्रबंधन",
    correct_option: "B",
    language: "Hindi",
    difficulty: "easy",
  },
  {
    question_text:
      "Node.js के साथ सामान्यत: कौन-सा पैकेज मैनेजर उपयोग होता है?",
    option_a: "npm",
    option_b: "Yarn",
    option_c: "दोनों A और B",
    option_d: "इनमें से कोई नहीं",
    correct_option: "C",
    language: "Hindi",
    difficulty: "easy",
  },
  {
    question_text: "Node.js परियोजना में 'package.json' का क्या उद्देश्य है?",
    option_a: "परियोजना कॉन्फ़िगरेशन स्टोर करना",
    option_b: "परियोजना की डिपेंडेंसेज़ को प्रबंधित करना",
    option_c: "API रूट्स को परिभाषित करना",
    option_d: "CSS स्टाइल्स स्टोर करना",
    correct_option: "B",
    language: "Hindi",
    difficulty: "medium",
  },
  {
    question_text: "रिएक्ट एप्लिकेशन में Webpack का क्या कार्य है?",
    option_a: "सर्वर-साइड लॉजिक को प्रबंधित करना",
    option_b: "जावास्क्रिप्ट को बंडल और अनुकूलित करना",
    option_c: "डेटाबेस कनेक्शन को संबोधित करना",
    option_d: "API रूट्स को परिभाषित करना",
    correct_option: "B",
    language: "Hindi",
    difficulty: "medium",
  },
  {
    question_text: "रिएक्ट में 'useEffect' हुक का मुख्य उद्देश्य क्या है?",
    option_a: "फॉर्म सबमिशन का संबोधन करना",
    option_b: "फ़ंक्शनल कॉम्पोनेंट्स में साइड इफेक्ट्स को प्रदान करना",
    option_c: "API एंडपॉइंट्स को परिभाषित करना",
    option_d: "पुनर्निर्माणीय कॉम्पोनेंट्स बनाना",
    correct_option: "B",
    language: "Hindi",
    difficulty: "medium",
  },
  {
    question_text: "Node.js में 'npm start' कमांड का क्या उद्देश्य है?",
    option_a: "नोड मॉड्यूल्स को स्थापित करना",
    option_b: "एप्लिकेशन को शुरू करना",
    option_c: "टेस्ट चलाना",
    option_d: "एप्लिकेशन को डिप्लॉय करना",
    correct_option: "B",
    language: "Hindi",
    difficulty: "medium",
  },
  {
    question_text: "निम्नलिखित में से कौन-सा एक वैध HTTP मेथड नहीं है?",
    option_a: "GET",
    option_b: "POST",
    option_c: "अपडेट",
    option_d: "डिलीट",
    correct_option: "C",
    language: "Hindi",
    difficulty: "medium",
  },
  {
    question_text: "रिएक्ट में 'setState' का क्या उद्देश्य है?",
    option_a: "DOM को सीधे अपडेट करना",
    option_b: "कॉम्पोनेंट की स्थिति को अपडेट करना",
    option_c: "CSS स्टाइल्स की परिभाषा करना",
    option_d: "नए कॉम्पोनेंट बनाना",
    correct_option: "B",
    language: "Hindi",
    difficulty: "hard",
  },
  {
    question_text: "निम्नलिखित में से कौन-सा एक रूटिंग लाइब्रेरी है?",
    option_a: "रीडक्स",
    option_b: "एक्सप्रेस",
    option_c: "रिएक्ट राउटर",
    option_d: "एक्सियोस",
    correct_option: "C",
    language: "Hindi",
    difficulty: "hard",
  },
  {
    question_text: "Node.js में 'require' फ़ंक्शन का क्या कार्य है?",
    option_a: "बाह्य मॉड्यूल्स को शामिल करना",
    option_b: "CSS स्टाइल्स की परिभाषा करना",
    option_c: "डेटाबेस कनेक्शन्स संबोधित करना",
    option_d: "कॉम्पोनेंट्स बनाना",
    correct_option: "A",
    language: "Hindi",
    difficulty: "hard",
  },
  {
    question_text: "एक्सप्रेस.js में 'मिडलवेयर' का क्या कार्य है?",
    option_a: "सर्वर-साइड लॉजिक को प्रबंधित करना",
    option_b: "HTTP अनुरोधों का संबोधन करना",
    option_c: "API रूट्स की परिभाषा करना",
    option_d: "प्रमाणीकरण जाँचें बनाना",
    correct_option: "D",
    language: "Hindi",
    difficulty: "hard",
  },
  {
    question_text: "जावास्क्रिप्ट में 'एसिंक' कीवर्ड का क्या सूचित करता है?",
    option_a: "यह एक एसिंक्रोनस फ़ंक्शन की परिभाषा करता है",
    option_b: "यह एक सिंक्रोनस फ़ंक्शन की परिभाषा करता है",
    option_c: "यह एक ट्राई-कैच ब्लॉक में त्रुटियों को हैंडल करता है",
    option_d: "यह एक कॉलबैक फ़ंक्शन की परिभाषा करता है",
    correct_option: "A",
    language: "Hindi",
    difficulty: "hard",
  },
  {
    question_text: "HTML का पूरा नाम क्या है?",
    option_a: "हायपर टेक्स्ट मार्कअप लैंग्वेज",
    option_b: "हाई-लेवल टेक्स्ट मैनेजमेंट लैंग्वेज",
    option_c: "हायपर ट्रांसफरेबल लैंग्वेज",
    option_d: "हाई-लेवल ट्रांसफर मार्कअप",
    correct_option: "A",
    language: "Hindi",
    difficulty: "easy",
  },

  {
    question_text: "JavaScript में console.log() फ़ंक्शन का उद्देश्य क्या है?",
    option_a: "मैसेज बॉक्स दिखाएँ",
    option_b: "कॉन्सोल में आउटपुट प्रिंट करें",
    option_c: "नया वेरिएबल बनाएँ",
    option_d: "फ़ंक्शन को परिभाषित करें",
    correct_option: "B",
    language: "Hindi",
    difficulty: "easy",
  },

  {
    question_text: "JavaScript में आप एक वेरिएबल कैसे घोषित करेंगे?",
    option_a: "var variableName;",
    option_b: "let variableName;",
    option_c: "const variableName;",
    option_d: "उपरोक्त सभी",
    correct_option: "D",
    language: "Hindi",
    difficulty: "easy",
  },

  {
    question_text: "JavaScript में 2 + '2' का परिणाम क्या है?",
    option_a: "4",
    option_b: " '22'",
    option_c: "22",
    option_d: "त्रुटि",
    correct_option: "B",
    language: "Hindi",
    difficulty: "easy",
  },

  {
    question_text: "CSS का पूरा नाम क्या है?",
    option_a: "कंप्यूटर स्टाइल शीट्स",
    option_b: "क्रिएटिव स्टाइल शीट्स",
    option_c: "कास्केडिंग स्टाइल शीट्स",
    option_d: "कलरफ़ुल स्टाइल शीट्स",
    correct_option: "C",
    language: "Hindi",
    difficulty: "easy",
  },

  {
    question_text: "JavaScript में आप कैसे कमेंट करेंगे?",
    option_a: "<!-- यह एक कमेंट है -->",
    option_b: "// यह एक कमेंट है",
    option_c: "/* यह एक कमेंट है */",
    option_d: "# यह एक कमेंट है",
    correct_option: "B",
    language: "Hindi",
    difficulty: "easy",
  },

  {
    question_text: "document.getElementById() मेथड का उद्देश्य क्या है?",
    option_a: "क्लास के द्वारा HTML एलिमेंट तक पहुँचें",
    option_b: "ID के द्वारा HTML एलिमेंट तक पहुँचें",
    option_c: "टैग नाम के द्वारा HTML एलिमेंट तक पहुँचें",
    option_d: "नाम के द्वारा HTML एलिमेंट तक पहुँचें",
    correct_option: "B",
    language: "Hindi",
    difficulty: "easy",
  },

  {
    question_text: "JavaScript में आप कैसे एक शर्तानुसार बयान करेंगे?",
    option_a: "if/else",
    option_b: "स्विच",
    option_c: "फॉर",
    option_d: "A और B दोनों",
    correct_option: "D",
    language: "Hindi",
    difficulty: "easy",
  },

  {
    question_text: "addEventListener मेथड का क्या कार्य है JavaScript में?",
    option_a: "एक ईवेंट लिस्टनर हटाएँ",
    option_b: "एक नया HTML एलिमेंट जोड़ें",
    option_c: "एक एलिमेंट को एक्सेस करने के लिए एक ईवेंट हैंडलर जोड़ें",
    option_d: "एक नई फ़ंक्शन परिभाषित करें",
    correct_option: "C",
    language: "Hindi",
    difficulty: "easy",
  },

  {
    question_text: "JavaScript में typeof ऑपरेटर का उद्देश्य क्या है?",
    option_a: "एक वेरिएबल के परिभाषित होने की जाँच करें",
    option_b: "एक वेरिएबल के प्रकार को निर्धारित करें",
    option_c: "एक नया वेरिएबल बनाएँ",
    option_d: "दो स्ट्रिंग्स को जोड़ें",
    correct_option: "B",
    language: "Hindi",
    difficulty: "easy",
  },

  {
    question_text: "JavaScript में क्लोज़र का आदान-प्रदान समझाएँ.",
    option_a: "ब्राउज़र टैब को बंद करने का एक तरीका",
    option_b:
      "एक फ़ंक्शन जो दूसरे फ़ंक्शन में होता है और जिसे इसके बाहरी फ़ंक्शन की वेरिएबल्स का एक्सेस होता है",
    option_c: "JavaScript में अलर्ट्स को बंद करने का एक विधी",
    option_d: "JavaScript में एक प्रकार का लूप",
    correct_option: "B",
    language: "Hindi",
    difficulty: "medium",
  },

  {
    question_text: "JavaScript में प्रोटोटाइपल इनहेरिटेंस कैसे काम करता है?",
    option_a: "एक ऑब्जेक्ट से दूसरे ऑब्जेक्ट में गुण की प्रतिलिपि करना होता है",
    option_b:
      "यह ऑब्जेक्ट के प्रोटोटाइप से ऑब्जेक्ट शृंगारी करता है, हर ऑब्जेक्ट अपने प्रोटोटाइप से आता है",
    option_c: "यह एक मौजूदा ऑब्जेक्ट से एक नया ऑब्जेक्ट बनाता है",
    option_d: "इसमें इस्तेमाल होने वाले विवादों की परिभाषा में क्लासेस",
    correct_option: "B",
    language: "Hindi",
    difficulty: "medium",
  },

  {
    question_text: "JavaScript में let, const, और var के बीच अंतर क्या है?",
    option_a: "A) वे सभी एक दूसरे के लिए बदले जा सकते हैं",
    option_b:
      "B) var का ब्लॉक स्कोप है, let का फ़ंक्शन स्कोप है, और const का ब्लॉक स्कोप है",
    option_c:
      "C) let का ब्लॉक स्कोप है, const का फ़ंक्शन स्कोप है, और var का ग्लोबल स्कोप है",
    option_d:
      "D) const लूप्स में उपयोग होता है, let के लिए स्थायिता, और var के लिए चर",
    correct_option: "C",
    language: "Hindi",
    difficulty: "medium",
  },
  {
    question_text:
      "सिंक्रोनस और एसिंक्रोनस जावास्क्रिप्ट के बीच अंतर को वर्णित करें।",
    option_a: "सिंक्रोनस कोड अन्य कोड के साथ समकालिक रूप से चलता है",
    option_b: "एसिंक्रोनस कोड एक समय में एक कार्य को क्रियाशील करता है",
    option_c:
      "सिंक्रोनस कोड कार्यों को पूरा होने का इंतजार करता है पहले से बढ़कर",
    option_d:
      "एसिंक्रोनस कोड कार्यों का पूरा होने का इंतजार नहीं करता है पहले से बढ़कर",
    correct_option: "C",
    language: "Hindi",
    difficulty: "medium",
  },

  {
    question_text: "जावास्क्रिप्ट में 'this' की कैसे काम करती है?",
    option_a: "यह हमेशा ग्लोबल ऑब्जेक्ट को संदर्भित करता है",
    option_b: "यह वर्तमान कार्य के स्कोप को संदर्भित करता है",
    option_c:
      "यह वह ऑब्जेक्ट संदर्भित करता है जिस पर एक मेथड को कॉल किया जा रहा है",
    option_d: "यह पिछले ऑब्जेक्ट को चेन में पॉइंट करता है",
    correct_option: "C",
    language: "Hindi",
    difficulty: "medium",
  },

  {
    question_text:
      "जावास्क्रिप्ट में इवेंट डेलीगेशन की सीधी तरीके से व्याख्या करें।",
    option_a: "इवेंट्स को अन्य तत्वों को दलील देना",
    option_b: "एक तत्व को कई इवेंट्स को सौंपना",
    option_c: "डॉम में इवेंट्स को स्वचालित रूप से हैंडल करना",
    option_d: "इवेंट्स के निष्कर्ष को बाहरी फ़ंक्शन्स को दलील देना",
    correct_option: "A",
    language: "Hindi",
    difficulty: "medium",
  },

  {
    question_text: "जावास्क्रिप्ट में fetch फ़ंक्शन का उद्देश्य क्या है?",
    option_a: "दूरस्थ सर्वर से डेटा प्राप्त करने के लिए",
    option_b: "एक नए HTML तत्व बनाने के लिए",
    option_c: "जावास्क्रिप्ट में त्रुटियों को संबोधित करने के लिए",
    option_d: "एक कॉलबैक फ़ंक्शन को परिभाषित करने के लिए",
    correct_option: "A",
    language: "Hindi",
    difficulty: "medium",
  },

  {
    question_text: "जावास्क्रिप्ट में == और === के बीच अंतर क्या है?",
    option_a: "वे अन्यथा अनुक्रमित हैं",
    option_b:
      "== मूल्य और प्रकार दोनों की तुलना करता है, === केवल मूल्य की तुलना करता है",
    option_c:
      "== केवल मूल्य की तुलना करता है, === मूल्य और प्रकार दोनों की तुलना करता है",
    option_d:
      "== स्थानांतरण के लिए उपयोग होता है, === तुलना के लिए उपयोग होता है",
    correct_option: "C",
    language: "Hindi",
    difficulty: "medium",
  },

  {
    question_text:
      "आप जावास्क्रिप्ट में try...catch स्टेटमेंट का उपयोग करके त्रुटियों का सामना कैसे कर सकते हैं?",
    option_a: "पूर्णत: त्रुटियों से बचने के लिए",
    option_b: "if स्टेटमेंट का उपयोग करके",
    option_c: "संभावना से भरा होने वाले कोड को try ब्लॉक में छापने के लिए",
    option_d: "त्रुटियों को नज़रअंदाज करके",
    correct_option: "C",
    language: "Hindi",
    difficulty: "medium",
  },

  {
    question_text: "जावास्क्रिप्ट में map फ़ंक्शन का उद्देश्य क्या है?",
    option_a: "कुंजी-मूल्य जोड़ों का एक मानचित्र बनाने के लिए",
    option_b: "एक एरे को चरणबद्ध करने और इसके तत्वों को परिवर्तित करने के लिए",
    option_c: "ऑब्जेक्ट्स के लिए एक मैपिंग फ़ंक्शन को परिभाषित करने के लिए",
    option_d: "एक एरे में तत्वों को जोड़ने के लिए",
    correct_option: "B",
    language: "Hindi",
    difficulty: "medium",
  },

  {
    question_text:
      "जावास्क्रिप्ट में इवेंट लूप की व्याख्या करें और यह एसिंक्रोनस कार्यों का कैसे संभालता है।",
    option_a: "यह डॉम में घटनाओं का एक लूप बनाता है",
    option_b:
      "यह कॉल स्टैक और कॉलबैक क्यू का उपयोग करके एसिंक्रोनस कार्यों का प्रबंधन करता है",
    option_c: "यह घटनाओं को बाहरी फ़ंक्शन्स को स्वचालित रूप से हैंडल करता है",
    option_d: "यह घटनाओं को समकालिक रूप से हैंडल करता है",
    correct_option: "B",
    language: "Hindi",
    difficulty: "hard",
  },

  {
    question_text:
      "जावास्क्रिप्ट में एरो फ़ंक्शन्स और नियमित फ़ंक्शन्स के बीच अंतर क्या है?",
    option_a: "एरो फ़ंक्शन्स का एक छोटा सिंटैक्स है",
    option_b:
      "नियमित फ़ंक्शन्स 'this' को बाइंड करने की अनुमति देते हैं, एरो फ़ंक्शन्स नहीं करते",
    option_c:
      "एरो फ़ंक्शन्स को उनका अपना 'this' नहीं होता है, नियमित फ़ंक्शन्स होता है",
    option_d: "इनमें से सभी",
    correct_option: "D",
    language: "Hindi",
    difficulty: "hard",
  },
  {
    question_text:
      "JavaScript में promises की सिद्धांत को समझाएं और यह बताएं कि इसका कैसे उपयोग किया जाता है।",
    option_a:
      "Promises सुनिश्चित करते हैं कि कोड एक सिंगल-थ्रेड मैनर में चलता है",
    option_b:
      "Promises एक मूल्य को प्रतिष्ठित करते हैं जो शायद अब, भविष्य में, या कभी नहीं हो सकता है",
    option_c: "Promises का उपयोग समकालीन क्रियाओं के लिए होता है केवल",
    option_d: "Promises try...catch विधियों का विकल्प हैं",
    correct_option: "B",
    language: "Hindi",
    difficulty: "hard",
  },

  {
    question_text: "JavaScript में होइस्टिंग कैसे काम करता है?",
    option_a: "यह डॉम में तत्वों को उठा देता है",
    option_b:
      "इससे चर और फ़ंक्शन को घोषित किए जाने से पहले उनकी पहुंच की जाने की अनुमति देता है",
    option_c: "यह प्राथमिकता के आधार पर चर को क्रमबद्ध करता है",
    option_d: "यह प्राथमिकता के आधार पर कोड का क्रम बदलता है",
    correct_option: "B",
    language: "Hindi",
    difficulty: "hard",
  },

  {
    question_text:
      "ES6 सुविधाओं: let, const, और class के बीच अंतर को वर्णन करें।",
    option_a: "इन्हें सभी चरणीय घोषणा के लिए उपयोग किया जाता है",
    option_b:
      "let और const चरणीय घोषणा के लिए उपयोग किए जाते हैं, class ऑब्जेक्ट बनाने के लिए",
    option_c:
      "let का उपयोग इटरेशन के लिए होता है, const निर्देशित के लिए, और class ऑब्जेक्ट-अनुसार प्रोग्रामिंग के लिए",
    option_d:
      "वे अनुमति दिए जाते हैं और किसी भी संदर्भ में उपयोग किए जा सकते हैं",
    correct_option: "B",
    language: "Hindi",
    difficulty: "hard",
  },

  {
    question_text: "JavaScript में 'यूज़ स्ट्रिक्ट' मोड का महत्व क्या है?",
    option_a: "इसमें चीजों को ढीले रूप से टाइप करने की अनुमति है",
    option_b:
      "इसमें कोड के ठीक पार्सिंग और त्रुटि हैंडलिंग को मजबूत करने की शक्ति है",
    option_c: "यह त्रुटि की जाँचों को हटाकर प्रदर्शन को बढ़ाता है",
    option_d: "यह केवल डिबगिंग के लिए उपयोग होता है",
    correct_option: "B",
    language: "Hindi",
    difficulty: "hard",
  },
  {
    question_text:
      "JavaScript में 'call', 'apply', और 'bind' विधियों के बीच अंतर को समझाएं।",
    option_a:
      "वे पर्यायी शब्द हैं और इन्हें परिवर्तनीयता से उपयोग किया जा सकता है",
    option_b:
      "इन्हें विभिन्न तरीकों से तर्कों को कॉल करने के लिए इस्तेमाल किया जाता है",
    option_c:
      "'call' को एक निर्दिष्ट 'this' मूल्य के साथ फ़ंक्शन को कॉल करने के लिए, 'apply' को तत्वों की एक श्रृंग से तर्क करने के लिए, और 'bind' को एक निश्चित 'this' मूल्य के साथ एक नए फ़ंक्शन बनाने के लिए इस्तेमाल किया जाता है",
    option_d:
      "इन्हें जावास्क्रिप्ट में अपशिष्टता को संबोधित करने के लिए इस्तेमाल किया जाता है",
    correct_option: "C",
    language: "Hindi",
    difficulty: "hard",
  },

  {
    question_text:
      "JavaScript ईवेंट लूप विभिन्न प्राथमिकताओं के साथ कार्यों को कैसे संभालता है?",
    option_a: "यह कार्यों को उन्हें जोड़े गए क्रम में निष्पादित करता है",
    option_b: "यह कार्यों को उनकी जटिलता के आधार पर प्राथमिकता देता है",
    option_c:
      "यह विभिन्न प्राथमिकताओं के साथ कार्यों को संबोधित करने के लिए एक प्राथमिकता कतार का उपयोग करता है",
    option_d: "यह यादृच्छिक रूप से कार्यों को निष्पादित करता है",
    correct_option: "C",
    language: "Hindi",
    difficulty: "hard",
  },

  {
    question_text:
      "JavaScript में वेब वर्कर्स क्या हैं, और वे प्रदर्शन कौशल में कैसे सुधार करते हैं?",
    option_a: "वेब वर्कर्स वेब पृष्ठों को सजाने के लिए इस्तेमाल होते हैं",
    option_b:
      "वेब वर्कर्स जावास्क्रिप्ट स्क्रिप्ट हैं जो पृष्ठों को पृष्ठों को सजाने के लिए पृष्ठों को सजाते हैं, कार्यों को पृष्ठों को सजाने के लिए कार्यों को समय समय पर समय के साथ समय के साथ बढ़ाते हैं",
    option_c:
      "वेब वर्कर्स नेटवर्क अनुरोधों को संबोधित करने के लिए इस्तेमाल होते हैं",
    option_d: "वेब वर्कर्स नए HTML तत्व बनाने के लिए जिम्मेदार हैं",
    correct_option: "B",
    language: "Hindi",
    difficulty: "hard",
  },

  {
    question_text:
      "जावास्क्रिप्ट में 'करींग' की अवधारणा को व्याख्या करें और एक उदाहरण प्रदान करें।",
    option_a:
      "करींग जावास्क्रिप्ट में करी विविधियों को तैयार करने का एक तरीका है",
    option_b:
      "करींग एक कार्यात्मक प्रोग्रामिंग अवधारणा है जिसमें एक फ़ंक्शन को एक क्रमशः एकाधिक फ़ंक्शन में बदल दिया जाता है",
    option_c: "करींग जावास्क्रिप्ट का उपयोग करके करी सॉस बनाने की प्रक्रिया है",
    option_d: "करींग जावास्क्रिप्ट में एक्सरेस बनाने के लिए एक तकनीक है",
    correct_option: "B",
    language: "Hindi",
    difficulty: "hard",
  },
];

module.exports = questions;
