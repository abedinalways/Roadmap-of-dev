import { TopicDetail } from '../../types';

export interface TopicPractice {
  title: string;
  goal: string;
  tasks: string[];
  miniProject: string;
  checklist: string[];
  commonMistakes: string[];
}

export type JsTopicSection = TopicDetail['sections'][number] & {
  practiceEn?: TopicPractice;
  practiceBn?: TopicPractice;
};

export type JsTopicDetail = Omit<TopicDetail, 'sections'> & {
  sections: JsTopicSection[];
};

export const jsTopic: JsTopicDetail = {
  id: 'js',
  titleEn: 'JavaScript',
  titleBn: 'জাভাস্ক্রিপ্ট',
  icon: '💛',

  descriptionEn:
    'JavaScript is the main programming language of the web. While HTML creates the structure and CSS handles the design, JavaScript adds logic, interactivity, dynamic behavior, form validation, data handling, API communication, and real application functionality. In this section, you will learn JavaScript from basic syntax and data types to DOM manipulation, events, asynchronous programming, APIs, and professional problem-solving patterns used in real-world web applications.',

  descriptionBn:
    'JavaScript হলো web এর প্রধান programming language। HTML যেখানে structure তৈরি করে এবং CSS যেখানে design control করে, JavaScript সেখানে logic, interactivity, dynamic behavior, form validation, data handling, API communication এবং real application functionality যোগ করে। এই section এ আপনি basic syntax এবং data type থেকে শুরু করে DOM manipulation, events, asynchronous programming, API এবং real-world web application এ ব্যবহৃত professional problem-solving pattern শিখবেন।',

  sections: [
    {
      level: 'Basic',
      titleEn: 'JavaScript Fundamentals, Variables, Data Types & Functions',
      titleBn: 'JavaScript ফান্ডামেন্টাল, ভেরিয়েবল, ডেটা টাইপ এবং ফাংশন',

      contentEn:
        'JavaScript fundamentals are the building blocks of every interactive website and web application. At the basic level, you need to understand how to store data, work with different data types, write conditions, create loops, and organize reusable logic using functions. These concepts are used everywhere — from showing a simple alert message to building complex applications like dashboards, e-commerce stores, booking systems, and learning platforms. A strong foundation in variables, data types, operators, arrays, objects, and functions will make advanced JavaScript much easier to understand later.',

      contentBn:
        'JavaScript fundamentals হলো প্রতিটি interactive website এবং web application এর মূল ভিত্তি। Basic level এ আপনাকে শিখতে হবে কীভাবে data store করতে হয়, বিভিন্ন data type নিয়ে কাজ করতে হয়, condition লিখতে হয়, loop তৈরি করতে হয় এবং function ব্যবহার করে reusable logic organize করতে হয়। এই concept গুলো সব জায়গায় ব্যবহৃত হয় — simple alert message দেখানো থেকে শুরু করে dashboard, e-commerce store, booking system এবং learning platform এর মতো complex application তৈরি পর্যন্ত। variable, data type, operator, array, object এবং function ভালোভাবে বুঝলে advanced JavaScript শেখা অনেক সহজ হয়ে যায়।',

      pointsEn: [
        'JavaScript allows websites to respond to user actions such as clicks, typing, form submission, filtering, searching, and button interactions.',
        'Use let when a value may change, and use const when a value should not be reassigned.',
        'Avoid var in modern JavaScript because it uses function scope and can create confusing bugs.',
        'Primitive data types include string, number, boolean, null, undefined, symbol, and bigint.',
        'Reference data types include objects, arrays, and functions.',
        'Use arrays to store ordered lists such as course names, users, products, or lessons.',
        'Use objects to store structured information such as a user profile, course details, or product data.',
        'Use functions to create reusable blocks of logic that can be called multiple times.',
        'Use template literals to create dynamic strings in a cleaner and more readable way.',
        'Use destructuring, spread, and rest operators to write cleaner and more modern JavaScript code.',
      ],

      pointsBn: [
        'JavaScript website কে user action এর response দিতে সাহায্য করে, যেমন click, typing, form submission, filtering, searching এবং button interaction।',
        'যে value পরিবর্তন হতে পারে তার জন্য let ব্যবহার করুন, আর যে value reassign করা উচিত নয় তার জন্য const ব্যবহার করুন।',
        'Modern JavaScript এ var avoid করুন, কারণ এটি function scope ব্যবহার করে এবং confusing bug তৈরি করতে পারে।',
        'Primitive data type হলো string, number, boolean, null, undefined, symbol এবং bigint।',
        'Reference data type হলো object, array এবং function।',
        'course name, user, product অথবা lesson এর মতো ordered list store করতে array ব্যবহার করুন।',
        'user profile, course details অথবা product data এর মতো structured information store করতে object ব্যবহার করুন।',
        'একই logic বারবার ব্যবহার করার জন্য function ব্যবহার করুন।',
        'dynamic string cleaner এবং readable ভাবে তৈরি করতে template literal ব্যবহার করুন।',
        'cleaner modern JavaScript লেখার জন্য destructuring, spread এবং rest operator ব্যবহার করুন।',
      ],

      code: `// ================================
// 1. Variables
// ================================
const platformName = 'WebLearn';
let totalStudents = 1200;

totalStudents = totalStudents + 100;

console.log(platformName);
console.log(totalStudents);

// ================================
// 2. Data Types
// ================================
const courseTitle = 'JavaScript Basics'; // string
const lessonCount = 25; // number
const isPublished = true; // boolean
const certificate = null; // null
let instructor; // undefined

// ================================
// 3. Object
// ================================
const course = {
  id: 1,
  title: 'JavaScript Fundamentals',
  level: 'Basic',
  duration: '4 weeks',
  isFree: true,
};

// ================================
// 4. Array
// ================================
const topics = ['Variables', 'Data Types', 'Functions', 'Arrays', 'Objects'];

// ================================
// 5. Function
// ================================
function getCourseSummary(courseName, totalLessons) {
  return \`\${courseName} includes \${totalLessons} lessons.\`;
}

const summary = getCourseSummary(course.title, lessonCount);
console.log(summary);

// ================================
// 6. Arrow Function
// ================================
const greetStudent = (studentName) => {
  return \`Hello, \${studentName}! Welcome to \${platformName}.\`;
};

console.log(greetStudent('Abedin'));

// ================================
// 7. Destructuring
// ================================
const { title, level, duration } = course;

console.log(title);
console.log(level);
console.log(duration);

// ================================
// 8. Spread Operator
// ================================
const basicTopics = ['Variables', 'Functions'];
const advancedTopics = [...basicTopics, 'DOM', 'Async/Await', 'APIs'];

console.log(advancedTopics);`,

      language: 'javascript',

      practiceEn: {
        title: 'Practice Session: Build a Course Information Script',
        goal:
          'Practice JavaScript fundamentals by creating variables, arrays, objects, functions, and dynamic messages for a learning platform.',
        tasks: [
          'Create a new file named script.js.',
          'Create variables for platform name, course title, total lessons, course level, and publication status.',
          'Create an object named course with id, title, level, duration, price, and isPublished properties.',
          'Create an array named topics with at least five JavaScript topics.',
          'Write a function that returns a course summary sentence.',
          'Write an arrow function that greets a student by name.',
          'Use destructuring to extract title, level, and duration from the course object.',
          'Use the spread operator to add new topics to the existing topics array.',
          'Use console.log() to display all results clearly.',
        ],
        miniProject:
          'Mini Project: Create a simple JavaScript course information system that stores course details, displays a course summary, lists topics, and greets a student.',
        checklist: [
          'Did you use const for values that do not change?',
          'Did you use let only for values that need to change?',
          'Did you avoid var?',
          'Did you use an object for structured course data?',
          'Did you use an array for topic lists?',
          'Did you create at least one normal function and one arrow function?',
          'Did you use template literals instead of string concatenation?',
        ],
        commonMistakes: [
          'Using var instead of let or const.',
          'Using const for a value that needs to be reassigned.',
          'Forgetting quotation marks around strings.',
          'Confusing arrays and objects.',
          'Forgetting to return a value from a function.',
          'Trying to access an object property with the wrong property name.',
        ],
      },

      practiceBn: {
        title: 'প্র্যাকটিস সেশন: Course Information Script তৈরি করুন',
        goal:
          'একটি learning platform এর জন্য variable, array, object, function এবং dynamic message তৈরি করে JavaScript fundamentals practice করুন।',
        tasks: [
          'script.js নামে একটি নতুন file তৈরি করুন।',
          'platform name, course title, total lessons, course level এবং publication status এর জন্য variable তৈরি করুন।',
          'id, title, level, duration, price এবং isPublished property সহ course নামে একটি object তৈরি করুন।',
          'অন্তত পাঁচটি JavaScript topic সহ topics নামে একটি array তৈরি করুন।',
          'course summary sentence return করে এমন একটি function লিখুন।',
          'student name দিয়ে greeting message return করে এমন একটি arrow function লিখুন।',
          'course object থেকে title, level এবং duration destructuring ব্যবহার করে বের করুন।',
          'existing topics array তে নতুন topic যোগ করতে spread operator ব্যবহার করুন।',
          'সব result পরিষ্কারভাবে দেখাতে console.log() ব্যবহার করুন।',
        ],
        miniProject:
          'Mini Project: একটি simple JavaScript course information system তৈরি করুন, যা course details store করবে, course summary দেখাবে, topics list করবে এবং student কে greet করবে।',
        checklist: [
          'যে value change হবে না সেখানে কি const ব্যবহার করেছেন?',
          'যে value change হতে পারে শুধু সেখানে কি let ব্যবহার করেছেন?',
          'আপনি কি var avoid করেছেন?',
          'structured course data এর জন্য কি object ব্যবহার করেছেন?',
          'topic list এর জন্য কি array ব্যবহার করেছেন?',
          'কমপক্ষে একটি normal function এবং একটি arrow function তৈরি করেছেন?',
          'string concatenation এর বদলে কি template literal ব্যবহার করেছেন?',
        ],
        commonMistakes: [
          'let বা const এর বদলে var ব্যবহার করা।',
          'যে value reassign করতে হবে সেখানে const ব্যবহার করা।',
          'string এর চারপাশে quotation mark দিতে ভুলে যাওয়া।',
          'array এবং object confuse করা।',
          'function থেকে value return করতে ভুলে যাওয়া।',
          'ভুল property name দিয়ে object property access করার চেষ্টা করা।',
        ],
      },
    },

    {
      level: 'Intermediate',
      titleEn: 'DOM Manipulation, Events, Forms & Interactive UI',
      titleBn: 'DOM Manipulation, Events, Forms এবং Interactive UI',

      contentEn:
        'The DOM, or Document Object Model, is the bridge between JavaScript and HTML. When a browser loads an HTML page, it creates a tree-like structure called the DOM. JavaScript can use the DOM to select elements, change text, update styles, add or remove classes, create new elements, handle form inputs, validate data, and respond to user actions. This is where JavaScript starts making your website truly interactive. At the intermediate level, you should learn how to build real UI behavior such as tabs, accordions, modals, dropdowns, todo lists, form validation, counters, filters, and dynamic course cards.',

      contentBn:
        'DOM বা Document Object Model হলো JavaScript এবং HTML এর মধ্যে bridge। Browser যখন একটি HTML page load করে, তখন এটি DOM নামে একটি tree-like structure তৈরি করে। JavaScript DOM ব্যবহার করে element select করতে পারে, text change করতে পারে, style update করতে পারে, class add/remove করতে পারে, নতুন element তৈরি করতে পারে, form input handle করতে পারে, data validate করতে পারে এবং user action এর response দিতে পারে। এখান থেকেই JavaScript আপনার website কে সত্যিকার অর্থে interactive করে তোলে। Intermediate level এ আপনাকে tabs, accordions, modals, dropdowns, todo lists, form validation, counters, filters এবং dynamic course cards এর মতো real UI behavior তৈরি করা শিখতে হবে।',

      pointsEn: [
        'Use document.querySelector() to select one element and document.querySelectorAll() to select multiple elements.',
        'Use textContent when you want to update plain text safely.',
        'Use innerHTML carefully because inserting untrusted HTML can create security risks.',
        'Use classList.add(), classList.remove(), and classList.toggle() to control UI states.',
        'Use addEventListener() to respond to clicks, typing, submitting forms, changing inputs, and keyboard events.',
        'Use event.preventDefault() to stop the browser from automatically submitting a form or refreshing the page.',
        'Use event delegation to handle events efficiently when working with dynamic lists or repeated items.',
        'Use dataset attributes to store small custom values directly on HTML elements.',
        'Validate forms before submitting data to improve user experience and prevent incomplete input.',
        'Keep DOM logic organized by separating selecting elements, handling events, updating UI, and validating data.',
      ],

      pointsBn: [
        'একটি element select করতে document.querySelector() এবং একাধিক element select করতে document.querySelectorAll() ব্যবহার করুন।',
        'plain text safely update করতে textContent ব্যবহার করুন।',
        'innerHTML সাবধানে ব্যবহার করুন, কারণ untrusted HTML insert করলে security risk তৈরি হতে পারে।',
        'UI state control করতে classList.add(), classList.remove() এবং classList.toggle() ব্যবহার করুন।',
        'click, typing, form submit, input change এবং keyboard event handle করতে addEventListener() ব্যবহার করুন।',
        'form automatically submit হওয়া বা page refresh হওয়া বন্ধ করতে event.preventDefault() ব্যবহার করুন।',
        'dynamic list অথবা repeated item এর সাথে efficient ভাবে কাজ করতে event delegation ব্যবহার করুন।',
        'HTML element এর মধ্যে small custom value store করতে dataset attribute ব্যবহার করুন।',
        'user experience improve এবং incomplete input prevent করতে form submit করার আগে validation করুন।',
        'element selection, event handling, UI update এবং data validation আলাদা রেখে DOM logic organized রাখুন।',
      ],

      code: `// ================================
// Course List with DOM Manipulation
// ================================

const courseForm = document.querySelector('#course-form');
const courseInput = document.querySelector('#course-name');
const courseList = document.querySelector('#course-list');
const errorMessage = document.querySelector('#error-message');

const courses = ['HTML Basics', 'CSS Fundamentals', 'JavaScript Basics'];

function renderCourses() {
  courseList.innerHTML = '';

  courses.forEach((course, index) => {
    const listItem = document.createElement('li');
    listItem.className = 'course-item';
    listItem.dataset.index = String(index);

    listItem.innerHTML = \`
      <span>\${course}</span>
      <button type="button" class="delete-btn">Delete</button>
    \`;

    courseList.appendChild(listItem);
  });
}

function showError(message) {
  errorMessage.textContent = message;
  errorMessage.classList.add('show');
}

function clearError() {
  errorMessage.textContent = '';
  errorMessage.classList.remove('show');
}

courseForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const courseName = courseInput.value.trim();

  if (courseName === '') {
    showError('Please enter a course name.');
    return;
  }

  courses.push(courseName);
  courseInput.value = '';
  clearError();
  renderCourses();
});

// Event Delegation
courseList.addEventListener('click', function (event) {
  const clickedElement = event.target;

  if (clickedElement.classList.contains('delete-btn')) {
    const listItem = clickedElement.closest('.course-item');
    const index = Number(listItem.dataset.index);

    courses.splice(index, 1);
    renderCourses();
  }
});

renderCourses();`,

      language: 'javascript',

      practiceEn: {
        title: 'Practice Session: Build an Interactive Course List',
        goal:
          'Practice DOM manipulation and events by creating a course list where users can add and delete course names dynamically.',
        tasks: [
          'Create an HTML form with one input field and one submit button.',
          'Create an empty unordered list where course names will appear.',
          'Create a paragraph element for showing validation errors.',
          'Use querySelector() to select the form, input, list, and error message.',
          'Create an array to store course names.',
          'Write a render function that displays all courses inside the list.',
          'Handle the form submit event using addEventListener().',
          'Use preventDefault() to stop the page from refreshing.',
          'Validate that the input is not empty before adding a course.',
          'Use event delegation to delete a course when the delete button is clicked.',
        ],
        miniProject:
          'Mini Project: Build a small course manager where users can add, display, and delete course topics from a list.',
        checklist: [
          'Did you select the correct DOM elements?',
          'Did you use preventDefault() on form submit?',
          'Did you validate empty input?',
          'Did you update the UI after adding a course?',
          'Did you use event delegation for delete buttons?',
          'Did you keep your code organized with functions?',
        ],
        commonMistakes: [
          'Forgetting to call preventDefault() and causing the page to refresh.',
          'Selecting the wrong element with querySelector().',
          'Using innerHTML with unsafe user input.',
          'Not clearing the input after adding a new item.',
          'Not re-rendering the list after deleting an item.',
          'Adding separate event listeners to every item instead of using event delegation.',
        ],
      },

      practiceBn: {
        title: 'প্র্যাকটিস সেশন: Interactive Course List তৈরি করুন',
        goal:
          'DOM manipulation এবং event practice করার জন্য এমন একটি course list তৈরি করুন যেখানে user dynamically course name add এবং delete করতে পারবে।',
        tasks: [
          'একটি input field এবং একটি submit button সহ HTML form তৈরি করুন।',
          'course name দেখানোর জন্য একটি empty unordered list তৈরি করুন।',
          'validation error দেখানোর জন্য একটি paragraph element তৈরি করুন।',
          'form, input, list এবং error message select করতে querySelector() ব্যবহার করুন।',
          'course name store করার জন্য একটি array তৈরি করুন।',
          'সব course list এর ভিতরে display করার জন্য একটি render function লিখুন।',
          'addEventListener() ব্যবহার করে form submit event handle করুন।',
          'page refresh বন্ধ করতে preventDefault() ব্যবহার করুন।',
          'course add করার আগে input empty কিনা validate করুন।',
          'delete button click করলে course delete করার জন্য event delegation ব্যবহার করুন।',
        ],
        miniProject:
          'Mini Project: একটি small course manager তৈরি করুন যেখানে user course topic add, display এবং delete করতে পারবে।',
        checklist: [
          'আপনি কি correct DOM element select করেছেন?',
          'form submit এ কি preventDefault() ব্যবহার করেছেন?',
          'empty input validate করেছেন কি?',
          'course add করার পর UI update হয়েছে কি?',
          'delete button এর জন্য event delegation ব্যবহার করেছেন কি?',
          'function ব্যবহার করে code organized রেখেছেন কি?',
        ],
        commonMistakes: [
          'preventDefault() না দেওয়ায় page refresh হয়ে যাওয়া।',
          'querySelector() দিয়ে ভুল element select করা।',
          'unsafe user input এর সাথে innerHTML ব্যবহার করা।',
          'new item add করার পর input clear না করা।',
          'item delete করার পর list re-render না করা।',
          'event delegation ব্যবহার না করে প্রতিটি item এ আলাদা event listener যোগ করা।',
        ],
      },
    },

    {
      level: 'Advanced',
      titleEn: 'Asynchronous JavaScript, APIs, Error Handling & Real App Data Flow',
      titleBn: 'Asynchronous JavaScript, APIs, Error Handling এবং Real App Data Flow',

      contentEn:
        'Asynchronous JavaScript is one of the most important topics for building real-world applications. Most modern websites need to communicate with servers, load data from APIs, submit forms, authenticate users, upload files, and update the UI without refreshing the page. Since JavaScript runs on a single main thread, asynchronous programming allows long-running tasks like network requests to happen without freezing the interface. At the advanced level, you should understand callbacks, promises, async/await, fetch, error handling, loading states, empty states, and how data flows from an API into the user interface.',

      contentBn:
        'Asynchronous JavaScript real-world application তৈরির অন্যতম গুরুত্বপূর্ণ topic। বেশিরভাগ modern website server এর সাথে communicate করে, API থেকে data load করে, form submit করে, user authenticate করে, file upload করে এবং page refresh ছাড়াই UI update করে। JavaScript single main thread এ চলে, তাই asynchronous programming network request এর মতো long-running task কে interface freeze না করেই execute করতে সাহায্য করে। Advanced level এ আপনাকে callback, promise, async/await, fetch, error handling, loading state, empty state এবং API থেকে data UI তে কীভাবে flow করে তা বুঝতে হবে।',

      pointsEn: [
        'Callbacks are functions passed into other functions, but deeply nested callbacks can become hard to read and maintain.',
        'Promises represent a future result that may either resolve successfully or reject with an error.',
        'Use .then(), .catch(), and .finally() to handle promise results, errors, and cleanup tasks.',
        'Use async/await to write asynchronous code that looks cleaner and easier to understand.',
        'Use try/catch inside async functions to handle API errors safely.',
        'Use the Fetch API to request data from REST endpoints.',
        'Always check response.ok before using response.json() so failed HTTP responses can be handled properly.',
        'Use loading states to tell users that data is being fetched.',
        'Use error states to show a helpful message when something goes wrong.',
        'Use Promise.all() when multiple independent API requests should run in parallel.',
      ],

      pointsBn: [
        'Callback হলো এমন function যা অন্য function এর ভিতরে argument হিসেবে pass করা হয়, কিন্তু deeply nested callback code read এবং maintain করা কঠিন করে তোলে।',
        'Promise এমন একটি future result represent করে যা successfully resolve হতে পারে অথবা error সহ reject হতে পারে।',
        'promise result, error এবং cleanup task handle করতে .then(), .catch() এবং .finally() ব্যবহার করুন।',
        'cleaner এবং সহজে বোঝার মতো asynchronous code লিখতে async/await ব্যবহার করুন।',
        'API error safely handle করতে async function এর ভিতরে try/catch ব্যবহার করুন।',
        'REST endpoint থেকে data request করতে Fetch API ব্যবহার করুন।',
        'response.json() ব্যবহার করার আগে সবসময় response.ok check করুন, যাতে failed HTTP response properly handle করা যায়।',
        'data fetch হচ্ছে বোঝাতে loading state ব্যবহার করুন।',
        'কিছু ভুল হলে helpful message দেখাতে error state ব্যবহার করুন।',
        'multiple independent API request parallel ভাবে চালাতে Promise.all() ব্যবহার করুন।',
      ],

      code: `// ================================
// Fetch Courses from an API
// ================================

const courseContainer = document.querySelector('#course-container');
const loadingMessage = document.querySelector('#loading-message');
const errorMessage = document.querySelector('#error-message');

function showLoading() {
  loadingMessage.textContent = 'Loading courses...';
  errorMessage.textContent = '';
}

function hideLoading() {
  loadingMessage.textContent = '';
}

function showError(message) {
  errorMessage.textContent = message;
}

function renderCourses(courses) {
  courseContainer.innerHTML = '';

  if (courses.length === 0) {
    courseContainer.innerHTML = '<p>No courses found.</p>';
    return;
  }

  courses.forEach((course) => {
    const card = document.createElement('article');
    card.className = 'course-card';

    card.innerHTML = \`
      <h3>\${course.title}</h3>
      <p>\${course.description}</p>
      <span>\${course.level}</span>
    \`;

    courseContainer.appendChild(card);
  });
}

async function fetchCourses() {
  try {
    showLoading();

    const response = await fetch('https://api.example.com/courses');

    if (!response.ok) {
      throw new Error('Failed to fetch courses. Please try again.');
    }

    const courses = await response.json();

    renderCourses(courses);
  } catch (error) {
    showError(error.message || 'Something went wrong.');
  } finally {
    hideLoading();
  }
}

fetchCourses();

// ================================
// Parallel API Requests
// ================================

async function fetchDashboardData() {
  try {
    const [coursesResponse, usersResponse] = await Promise.all([
      fetch('https://api.example.com/courses'),
      fetch('https://api.example.com/users'),
    ]);

    if (!coursesResponse.ok || !usersResponse.ok) {
      throw new Error('Failed to load dashboard data.');
    }

    const courses = await coursesResponse.json();
    const users = await usersResponse.json();

    return {
      courses,
      users,
    };
  } catch (error) {
    console.error('Dashboard Error:', error.message);
    throw error;
  }
}`,

      language: 'javascript',

      practiceEn: {
        title: 'Practice Session: Build an API-Based Course Loader',
        goal:
          'Practice asynchronous JavaScript by fetching course data from an API and showing loading, success, empty, and error states in the UI.',
        tasks: [
          'Create a course container in your HTML file.',
          'Create separate elements for loading message and error message.',
          'Write a showLoading() function.',
          'Write a hideLoading() function.',
          'Write a showError() function.',
          'Write a renderCourses() function that displays course cards.',
          'Create an async function named fetchCourses().',
          'Use fetch() to request course data from an API endpoint.',
          'Check response.ok before converting the response to JSON.',
          'Use try/catch/finally to handle success, error, and loading cleanup.',
          'Show an empty state message if the API returns an empty array.',
        ],
        miniProject:
          'Mini Project: Build a course catalog page that loads courses from an API, displays loading feedback, shows course cards, handles empty results, and displays a clear error message if the request fails.',
        checklist: [
          'Did you use async/await?',
          'Did you wrap the API request inside try/catch?',
          'Did you check response.ok?',
          'Did you show a loading message before the request finishes?',
          'Did you hide the loading message after the request finishes?',
          'Did you handle empty data?',
          'Did you show a useful error message if the request fails?',
        ],
        commonMistakes: [
          'Using await outside an async function.',
          'Forgetting to check response.ok.',
          'Assuming the API always returns valid data.',
          'Not using try/catch for API calls.',
          'Leaving the loading message visible after an error.',
          'Not handling empty arrays.',
          'Updating the UI before the data is ready.',
        ],
      },

      practiceBn: {
        title: 'প্র্যাকটিস সেশন: API-Based Course Loader তৈরি করুন',
        goal:
          'API থেকে course data fetch করে UI তে loading, success, empty এবং error state দেখানোর মাধ্যমে asynchronous JavaScript practice করুন।',
        tasks: [
          'HTML file এ একটি course container তৈরি করুন।',
          'loading message এবং error message এর জন্য আলাদা element তৈরি করুন।',
          'showLoading() function লিখুন।',
          'hideLoading() function লিখুন।',
          'showError() function লিখুন।',
          'course card display করার জন্য renderCourses() function লিখুন।',
          'fetchCourses() নামে একটি async function তৈরি করুন।',
          'API endpoint থেকে course data আনতে fetch() ব্যবহার করুন।',
          'response JSON এ convert করার আগে response.ok check করুন।',
          'success, error এবং loading cleanup handle করতে try/catch/finally ব্যবহার করুন।',
          'API empty array return করলে empty state message দেখান।',
        ],
        miniProject:
          'Mini Project: একটি course catalog page তৈরি করুন, যা API থেকে course load করবে, loading feedback দেখাবে, course card display করবে, empty result handle করবে এবং request fail হলে clear error message দেখাবে।',
        checklist: [
          'আপনি কি async/await ব্যবহার করেছেন?',
          'API request কি try/catch এর ভিতরে রেখেছেন?',
          'response.ok check করেছেন কি?',
          'request শেষ হওয়ার আগে loading message দেখিয়েছেন কি?',
          'request শেষ হওয়ার পর loading message hide করেছেন কি?',
          'empty data handle করেছেন কি?',
          'request fail করলে useful error message দেখিয়েছেন কি?',
        ],
        commonMistakes: [
          'async function এর বাইরে await ব্যবহার করা।',
          'response.ok check করতে ভুলে যাওয়া।',
          'API সবসময় valid data return করবে ধরে নেওয়া।',
          'API call এর জন্য try/catch ব্যবহার না করা।',
          'error হওয়ার পরেও loading message visible রাখা।',
          'empty array handle না করা।',
          'data ready হওয়ার আগে UI update করা।',
        ],
      },
    },
  ],
};