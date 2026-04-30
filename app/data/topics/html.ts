import { TopicDetail } from '../../types';

export interface TopicPractice {
  title: string;
  goal: string;
  tasks: string[];
  miniProject: string;
  checklist: string[];
  commonMistakes: string[];
}

export type HtmlTopicSection = TopicDetail['sections'][number] & {
  practiceEn?: TopicPractice;
  practiceBn?: TopicPractice;
};

export type HtmlTopicDetail = Omit<TopicDetail, 'sections'> & {
  sections: HtmlTopicSection[];
};

export const htmlTopic: HtmlTopicDetail = {
  id: 'html',
  titleEn: 'HTML & CSS',
  titleBn: 'HTML ও CSS',
  icon: '🎨',

  descriptionEn:
    'HTML and CSS are the first and most important skills for anyone who wants to learn web development. HTML is used to create the structure and meaning of a web page, while CSS is used to design, style, and make that page responsive. In this section, you will learn how real websites are built from the ground up — starting from simple page structure, then moving into layouts, responsive design, accessibility, and modern CSS architecture.',

  descriptionBn:
    'HTML এবং CSS হলো web development শেখার প্রথম এবং সবচেয়ে গুরুত্বপূর্ণ skill। HTML ব্যবহার করা হয় একটি web page এর structure এবং meaning তৈরি করার জন্য, আর CSS ব্যবহার করা হয় সেই page কে সুন্দরভাবে design, style এবং responsive করার জন্য। এই section এ আপনি শিখবেন কীভাবে real website একদম basic structure থেকে তৈরি হয় — simple page structure থেকে শুরু করে layout, responsive design, accessibility এবং modern CSS architecture পর্যন্ত।',

  sections: [
    {
      level: 'Basic',
      titleEn: 'HTML Basics, Semantic Structure & Accessibility',
      titleBn: 'HTML বেসিক, সিম্যান্টিক স্ট্রাকচার এবং অ্যাক্সেসিবিলিটি',

      contentEn:
        'HTML stands for HyperText Markup Language. It is not a programming language; it is a markup language used to define the structure of web pages. Every website you visit uses HTML to organize content such as headings, paragraphs, images, buttons, links, forms, navigation menus, blog posts, product cards, and footer sections. At the basic level, your main goal is to understand how to create clean, meaningful, and accessible page structure. Good HTML helps browsers display content correctly, helps search engines understand your website, and helps users with screen readers navigate the page properly.',

      contentBn:
        'HTML এর পূর্ণরূপ HyperText Markup Language। এটি programming language নয়; এটি একটি markup language, যা web page এর structure তৈরি করতে ব্যবহৃত হয়। আপনি যেকোনো website visit করলে সেখানে heading, paragraph, image, button, link, form, navigation menu, blog post, product card এবং footer section সাজানোর জন্য HTML ব্যবহার করা হয়। Basic level এ আপনার মূল লক্ষ্য হলো পরিষ্কার, অর্থপূর্ণ এবং accessible page structure তৈরি করা শেখা। ভালো HTML browser কে content সঠিকভাবে দেখাতে সাহায্য করে, search engine কে website বুঝতে সাহায্য করে এবং screen reader ব্যবহারকারী user দের page navigate করতে সাহায্য করে।',

      pointsEn: [
        'HTML creates the skeleton of a website. Without HTML, a browser has no meaningful content to display.',
        'A proper HTML document starts with <!DOCTYPE html>, then uses <html>, <head>, and <body> sections.',
        'The <head> section contains hidden information such as page title, meta description, character encoding, responsive viewport settings, and linked CSS files.',
        'The <body> section contains everything visible to users, such as text, images, buttons, forms, navigation, and page sections.',
        'Semantic HTML means using tags based on meaning. For example, use <nav> for navigation, <main> for main content, <article> for independent content, and <footer> for footer information.',
        'Use only one main <h1> per page for the primary page title, then organize sub-sections with <h2>, <h3>, and lower heading levels.',
        'Use <button> when something performs an action, such as opening a modal or submitting a form. Use <a> when the user needs to navigate to another page or section.',
        'Every image should have an alt attribute. If the image is meaningful, describe it clearly. If the image is decorative, use an empty alt attribute.',
        'Every form input should have a connected <label> so users and screen readers can understand what information is required.',
        'Clean HTML is easier to style with CSS, easier to debug, easier to maintain, and better for SEO.',
      ],

      pointsBn: [
        'HTML একটি website এর skeleton তৈরি করে। HTML ছাড়া browser meaningful content display করতে পারে না।',
        'একটি proper HTML document <!DOCTYPE html> দিয়ে শুরু হয়, এরপর <html>, <head> এবং <body> section থাকে।',
        '<head> section এ page title, meta description, character encoding, responsive viewport setting এবং linked CSS file এর মতো hidden information থাকে।',
        '<body> section এ user যা দেখতে পায় সব থাকে, যেমন text, image, button, form, navigation এবং page section।',
        'Semantic HTML মানে হলো tag এর meaning অনুযায়ী tag ব্যবহার করা। যেমন navigation এর জন্য <nav>, main content এর জন্য <main>, independent content এর জন্য <article> এবং footer information এর জন্য <footer> ব্যবহার করা।',
        'একটি page এ primary title এর জন্য সাধারণত একটি <h1> ব্যবহার করুন, এরপর sub-section সাজানোর জন্য <h2>, <h3> এবং lower heading level ব্যবহার করুন।',
        'কোনো action করার জন্য <button> ব্যবহার করুন, যেমন modal open করা বা form submit করা। অন্য page বা section এ navigate করার জন্য <a> ব্যবহার করুন।',
        'প্রতিটি image এর alt attribute থাকা উচিত। image meaningful হলে পরিষ্কারভাবে describe করুন, আর decorative হলে empty alt attribute ব্যবহার করুন।',
        'প্রতিটি form input এর সাথে connected <label> থাকা উচিত, যাতে user এবং screen reader বুঝতে পারে কী information দিতে হবে।',
        'Clean HTML CSS দিয়ে style করা সহজ, debug করা সহজ, maintain করা সহজ এবং SEO এর জন্য ভালো।',
      ],

      code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />

    <!-- Makes the website responsive on mobile devices -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- Page title shown in browser tab and search result -->
    <title>Learn Web Development</title>

    <!-- Short description for search engines -->
    <meta
      name="description"
      content="A beginner-friendly web development learning platform."
    />
  </head>

  <body>
    <header>
      <nav aria-label="Main navigation">
        <a href="/">WebLearn</a>

        <ul>
          <li><a href="/courses">Courses</a></li>
          <li><a href="/practice">Practice</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>

    <main>
      <section aria-labelledby="hero-title">
        <h1 id="hero-title">Learn Web Development from Basic to Advanced</h1>
        <p>
          Start with HTML and CSS, then move step by step into modern frontend
          development.
        </p>
        <a href="/courses">Start Learning</a>
      </section>

      <section aria-labelledby="features-title">
        <h2 id="features-title">What You Will Learn</h2>

        <article>
          <h3>HTML Structure</h3>
          <p>Learn how to create meaningful page structure.</p>
        </article>

        <article>
          <h3>CSS Styling</h3>
          <p>Learn how to design beautiful and responsive layouts.</p>
        </article>
      </section>

      <section aria-labelledby="contact-title">
        <h2 id="contact-title">Contact Us</h2>

        <form>
          <div>
            <label for="name">Full Name</label>
            <input id="name" name="name" type="text" required />
          </div>

          <div>
            <label for="email">Email Address</label>
            <input id="email" name="email" type="email" required />
          </div>

          <button type="submit">Submit</button>
        </form>
      </section>
    </main>

    <footer>
      <p>&copy; 2026 WebLearn. All rights reserved.</p>
    </footer>
  </body>
</html>`,

      language: 'html',

      practiceEn: {
        title: 'Practice Session: Build a Simple Semantic Homepage',
        goal:
          'Create a clean homepage structure using semantic HTML elements. Focus on meaning, accessibility, and proper document structure before adding any CSS.',
        tasks: [
          'Create a new file named index.html.',
          'Add the basic HTML document structure using <!DOCTYPE html>, <html>, <head>, and <body>.',
          'Add a page title and meta description inside the <head> section.',
          'Create a <header> with a logo text and navigation menu.',
          'Create a <main> section with a hero section, course section, and contact section.',
          'Use only one <h1> for the main page title.',
          'Add at least three course cards using <article> elements.',
          'Create a contact form with name, email, message, and submit button.',
          'Connect every form input with a proper <label>.',
          'Add a <footer> with copyright text.',
        ],
        miniProject:
          'Mini Project: Build the HTML structure for a learning platform homepage. The page should include navigation, hero section, course overview, learning benefits, contact form, and footer.',
        checklist: [
          'Did you use semantic tags instead of too many generic <div> elements?',
          'Did you use only one <h1>?',
          'Are headings organized in a logical order?',
          'Does every form input have a label?',
          'Do all links use meaningful text?',
          'Does the HTML pass basic accessibility rules?',
        ],
        commonMistakes: [
          'Using <div> for everything instead of semantic elements.',
          'Using multiple <h1> tags without a clear reason.',
          'Using <button> for navigation instead of <a>.',
          'Using <a> for actions instead of <button>.',
          'Forgetting labels in forms.',
          'Using image alt text like “image” or “photo” instead of a useful description.',
        ],
      },

      practiceBn: {
        title: 'প্র্যাকটিস সেশন: একটি Simple Semantic Homepage তৈরি করুন',
        goal:
          'Semantic HTML element ব্যবহার করে একটি পরিষ্কার homepage structure তৈরি করুন। CSS যোগ করার আগে meaning, accessibility এবং proper document structure এর উপর focus করুন।',
        tasks: [
          'index.html নামে একটি নতুন file তৈরি করুন।',
          '<!DOCTYPE html>, <html>, <head> এবং <body> ব্যবহার করে basic HTML document structure তৈরি করুন।',
          '<head> section এর ভিতরে page title এবং meta description যোগ করুন।',
          'logo text এবং navigation menu সহ একটি <header> তৈরি করুন।',
          'hero section, course section এবং contact section সহ একটি <main> section তৈরি করুন।',
          'main page title এর জন্য শুধুমাত্র একটি <h1> ব্যবহার করুন।',
          '<article> element ব্যবহার করে অন্তত তিনটি course card তৈরি করুন।',
          'name, email, message এবং submit button সহ একটি contact form তৈরি করুন।',
          'প্রতিটি form input এর সাথে proper <label> connect করুন।',
          'copyright text সহ একটি <footer> তৈরি করুন।',
        ],
        miniProject:
          'Mini Project: একটি learning platform homepage এর HTML structure তৈরি করুন। page এ navigation, hero section, course overview, learning benefits, contact form এবং footer থাকতে হবে।',
        checklist: [
          'আপনি কি অতিরিক্ত <div> ব্যবহার না করে semantic tag ব্যবহার করেছেন?',
          'আপনি কি শুধুমাত্র একটি <h1> ব্যবহার করেছেন?',
          'heading গুলো কি logical order এ আছে?',
          'প্রতিটি form input এর label আছে কি?',
          'সব link text কি meaningful?',
          'HTML কি basic accessibility rule follow করছে?',
        ],
        commonMistakes: [
          'সবকিছুর জন্য <div> ব্যবহার করা।',
          'clear reason ছাড়া multiple <h1> ব্যবহার করা।',
          'navigation এর জন্য <button> ব্যবহার করা।',
          'action এর জন্য <a> ব্যবহার করা।',
          'form input এর label ভুলে যাওয়া।',
          'image alt text এ শুধু “image” বা “photo” লেখা।',
        ],
      },
    },

    {
      level: 'Intermediate',
      titleEn: 'CSS Styling, Responsive Design, Flexbox & Grid',
      titleBn: 'CSS স্টাইলিং, রেসপনসিভ ডিজাইন, ফ্লেক্সবক্স এবং গ্রিড',

      contentEn:
        'CSS stands for Cascading Style Sheets. It controls how HTML elements look on the screen. With CSS, you can change colors, fonts, spacing, layouts, button styles, card designs, responsive behavior, hover effects, and overall visual appearance. At the intermediate level, you should understand how to convert a plain HTML page into a polished, user-friendly interface. This includes learning the box model, selectors, specificity, Flexbox, CSS Grid, media queries, and reusable design values.',

      contentBn:
        'CSS এর পূর্ণরূপ Cascading Style Sheets। এটি screen এ HTML element কীভাবে দেখাবে তা control করে। CSS দিয়ে আপনি color, font, spacing, layout, button style, card design, responsive behavior, hover effect এবং overall visual appearance পরিবর্তন করতে পারেন। Intermediate level এ আপনার শেখা উচিত কীভাবে একটি plain HTML page কে polished এবং user-friendly interface এ convert করতে হয়। এর মধ্যে box model, selector, specificity, Flexbox, CSS Grid, media query এবং reusable design value শেখা অন্তর্ভুক্ত।',

      pointsEn: [
        'CSS connects with HTML using inline styles, internal styles, or external stylesheets. In real projects, external stylesheets are preferred.',
        'The box model explains how every element takes space using content, padding, border, and margin.',
        'Selectors are used to target HTML elements. Common selectors include element selectors, class selectors, id selectors, attribute selectors, and pseudo-class selectors.',
        'Specificity decides which CSS rule wins when multiple rules target the same element.',
        'Flexbox is best for one-direction layouts such as navbar alignment, button groups, card content alignment, and horizontal or vertical stacking.',
        'CSS Grid is best for two-direction layouts such as full page sections, dashboards, galleries, pricing tables, and complex page structures.',
        'Responsive design means your website should look good on mobile, tablet, laptop, and desktop screens.',
        'Media queries help you change layout and styling based on screen width.',
        'A mobile-first approach means writing styles for mobile screens first, then improving the layout for larger screens.',
        'Reusable variables help you keep colors, spacing, shadows, and border-radius consistent across the whole website.',
      ],

      pointsBn: [
        'CSS inline style, internal style অথবা external stylesheet এর মাধ্যমে HTML এর সাথে connect করা যায়। real project এ external stylesheet বেশি preferred।',
        'Box model ব্যাখ্যা করে একটি element কীভাবে content, padding, border এবং margin দিয়ে space নেয়।',
        'Selector ব্যবহার করে HTML element target করা হয়। common selector হলো element selector, class selector, id selector, attribute selector এবং pseudo-class selector।',
        'একই element এ multiple CSS rule থাকলে কোন rule apply হবে তা specificity decide করে।',
        'Flexbox navbar alignment, button group, card content alignment এবং horizontal বা vertical stacking এর মতো one-direction layout এর জন্য best।',
        'CSS Grid full page section, dashboard, gallery, pricing table এবং complex page structure এর মতো two-direction layout এর জন্য best।',
        'Responsive design মানে আপনার website mobile, tablet, laptop এবং desktop screen এ ভালো দেখাতে হবে।',
        'Media query screen width অনুযায়ী layout এবং style পরিবর্তন করতে সাহায্য করে।',
        'Mobile-first approach মানে প্রথমে mobile screen এর জন্য style লেখা, তারপর বড় screen এর জন্য layout improve করা।',
        'Reusable variable color, spacing, shadow এবং border-radius পুরো website এ consistent রাখতে সাহায্য করে।',
      ],

      code: `/* =========================
   1. Global Reset
========================= */
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #f8fafc;
  color: #0f172a;
  line-height: 1.6;
}

/* =========================
   2. Reusable Design Tokens
========================= */
:root {
  --color-primary: #2563eb;
  --color-primary-dark: #1d4ed8;
  --color-surface: #ffffff;
  --color-muted: #64748b;

  --space-sm: 0.75rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;

  --radius-md: 0.75rem;
  --radius-lg: 1rem;

  --shadow-card: 0 10px 25px rgba(15, 23, 42, 0.08);
}

/* =========================
   3. Header Layout with Flexbox
========================= */
.header {
  background: var(--color-surface);
  padding: var(--space-md) var(--space-xl);
  box-shadow: var(--shadow-card);
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--space-md);
}

.nav-links {
  display: flex;
  gap: var(--space-md);
  list-style: none;
  margin: 0;
  padding: 0;
}

/* =========================
   4. Hero Section
========================= */
.hero {
  padding: 4rem var(--space-xl);
  text-align: center;
}

.hero h1 {
  font-size: clamp(2rem, 5vw, 4rem);
  margin-bottom: var(--space-md);
}

.hero p {
  max-width: 680px;
  margin: 0 auto var(--space-lg);
  color: var(--color-muted);
}

/* =========================
   5. Course Grid Layout
========================= */
.course-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-lg);
  padding: var(--space-xl);
}

.course-card {
  background: var(--color-surface);
  padding: var(--space-lg);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-card);
}

.course-card h3 {
  margin-top: 0;
}

.course-card p {
  color: var(--color-muted);
}

/* =========================
   6. Button Style
========================= */
.btn {
  display: inline-block;
  padding: 0.875rem 1.25rem;
  border-radius: var(--radius-md);
  background: var(--color-primary);
  color: white;
  text-decoration: none;
  font-weight: 600;
}

.btn:hover {
  background: var(--color-primary-dark);
}

/* =========================
   7. Responsive Design
========================= */
@media (min-width: 768px) {
  .course-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .course-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}`,

      language: 'css',

      practiceEn: {
        title: 'Practice Session: Style the Homepage with CSS',
        goal:
          'Take the semantic HTML homepage from the basic section and turn it into a clean, responsive, and user-friendly webpage using CSS.',
        tasks: [
          'Create a style.css file and link it with your index.html file.',
          'Add a global reset using box-sizing: border-box.',
          'Set a clean font, background color, text color, and line-height for the body.',
          'Create CSS variables for primary color, text color, spacing, border radius, and shadow.',
          'Style the header and navigation using Flexbox.',
          'Create a visually clear hero section with large heading, short paragraph, and call-to-action button.',
          'Create a responsive course grid using CSS Grid.',
          'Style each course card with padding, border-radius, background color, and shadow.',
          'Add hover effect to buttons and course cards.',
          'Use media queries to show one column on mobile, two columns on tablet, and three columns on desktop.',
        ],
        miniProject:
          'Mini Project: Design a responsive course listing page using Flexbox for the navigation and CSS Grid for the course cards.',
        checklist: [
          'Is your page readable on mobile?',
          'Is the spacing consistent?',
          'Are buttons easy to identify?',
          'Does the navigation align properly?',
          'Do the course cards look consistent?',
          'Does the layout change correctly on tablet and desktop?',
          'Are colors and typography visually clear?',
        ],
        commonMistakes: [
          'Using fixed widths that break on mobile screens.',
          'Adding too many random colors without a design system.',
          'Forgetting box-sizing: border-box.',
          'Using margin and padding inconsistently.',
          'Using Flexbox for complex two-dimensional layouts where Grid would be better.',
          'Writing desktop styles first and struggling to fix mobile layout later.',
        ],
      },

      practiceBn: {
        title: 'প্র্যাকটিস সেশন: CSS দিয়ে Homepage Style করুন',
        goal:
          'Basic section এর semantic HTML homepage কে CSS ব্যবহার করে clean, responsive এবং user-friendly webpage এ convert করুন।',
        tasks: [
          'style.css নামে একটি file তৈরি করুন এবং index.html file এর সাথে link করুন।',
          'box-sizing: border-box ব্যবহার করে global reset যোগ করুন।',
          'body এর জন্য clean font, background color, text color এবং line-height set করুন।',
          'primary color, text color, spacing, border radius এবং shadow এর জন্য CSS variable তৈরি করুন।',
          'Flexbox ব্যবহার করে header এবং navigation style করুন।',
          'large heading, short paragraph এবং call-to-action button সহ visually clear hero section তৈরি করুন।',
          'CSS Grid ব্যবহার করে responsive course grid তৈরি করুন।',
          'প্রতিটি course card padding, border-radius, background color এবং shadow দিয়ে style করুন।',
          'button এবং course card এ hover effect যোগ করুন।',
          'media query ব্যবহার করে mobile এ one column, tablet এ two columns এবং desktop এ three columns দেখান।',
        ],
        miniProject:
          'Mini Project: navigation এর জন্য Flexbox এবং course card এর জন্য CSS Grid ব্যবহার করে একটি responsive course listing page design করুন।',
        checklist: [
          'আপনার page mobile এ readable কি?',
          'spacing consistent কি?',
          'button সহজে identify করা যাচ্ছে কি?',
          'navigation properly align হয়েছে কি?',
          'course card গুলো consistent দেখাচ্ছে কি?',
          'tablet এবং desktop এ layout ঠিকভাবে change হচ্ছে কি?',
          'color এবং typography visually clear কি?',
        ],
        commonMistakes: [
          'fixed width ব্যবহার করা, যা mobile screen এ layout break করে।',
          'design system ছাড়া অনেক random color ব্যবহার করা।',
          'box-sizing: border-box ভুলে যাওয়া।',
          'margin এবং padding inconsistent ভাবে ব্যবহার করা।',
          'complex two-dimensional layout এর জন্য Grid এর বদলে Flexbox ব্যবহার করা।',
          'প্রথমে desktop style লিখে পরে mobile layout fix করতে struggle করা।',
        ],
      },
    },

    {
      level: 'Advanced',
      titleEn: 'Modern CSS Architecture, Component Styling & Professional UI Systems',
      titleBn: 'মডার্ন CSS আর্কিটেকচার, কম্পোনেন্ট স্টাইলিং এবং প্রফেশনাল UI সিস্টেম',

      contentEn:
        'Advanced HTML and CSS are about building scalable, maintainable, accessible, and production-ready interfaces. At this stage, you move beyond simply making a page look good. You start thinking like a professional frontend developer: how styles are organized, how components behave in different containers, how design tokens keep the UI consistent, how animations improve user experience, and how accessibility is maintained across the whole interface. This level prepares you to work on real-world websites, dashboards, landing pages, SaaS products, and design systems.',

      contentBn:
        'Advanced HTML এবং CSS এর মূল লক্ষ্য হলো scalable, maintainable, accessible এবং production-ready interface তৈরি করা। এই stage এ আপনি শুধু page সুন্দর করার বাইরে চিন্তা করবেন। আপনি professional frontend developer এর মতো ভাবতে শুরু করবেন: style কীভাবে organize করা হবে, component ভিন্ন container এ কীভাবে behave করবে, design token কীভাবে UI consistent রাখবে, animation কীভাবে user experience improve করবে এবং পুরো interface জুড়ে accessibility কীভাবে maintain হবে। এই level আপনাকে real-world website, dashboard, landing page, SaaS product এবং design system এ কাজ করার জন্য প্রস্তুত করবে।',

      pointsEn: [
        'Use a CSS architecture approach such as BEM, utility-first CSS, component-based CSS, or design-token-based styling.',
        'Organize CSS so that global styles, layout styles, component styles, and utility classes are easy to find and maintain.',
        'Use BEM naming to make class names more predictable, such as .card, .card__title, and .card--featured.',
        'Use CSS custom properties as design tokens for colors, typography, spacing, border radius, shadows, and layout values.',
        'Use container queries when a component should respond to the size of its parent instead of the whole browser window.',
        'Use modern selectors like :has(), :is(), :where(), and :not() to write cleaner and more powerful CSS.',
        'Use clamp(), min(), max(), minmax(), auto-fit, and auto-fill to create fluid layouts without writing too many breakpoints.',
        'Design accessible focus states using :focus-visible so keyboard users can clearly see where they are.',
        'Use prefers-reduced-motion to respect users who prefer less animation.',
        'Create professional micro-interactions with transition, transform, opacity, and keyframe animations.',
      ],

      pointsBn: [
        'BEM, utility-first CSS, component-based CSS অথবা design-token-based styling এর মতো CSS architecture approach ব্যবহার করুন।',
        'global style, layout style, component style এবং utility class এমনভাবে organize করুন যাতে খুঁজে পাওয়া ও maintain করা সহজ হয়।',
        'class name predictable রাখতে BEM naming ব্যবহার করুন, যেমন .card, .card__title এবং .card--featured।',
        'color, typography, spacing, border radius, shadow এবং layout value এর জন্য design token হিসেবে CSS custom property ব্যবহার করুন।',
        'component যদি browser window এর বদলে parent container এর size অনুযায়ী responsive হওয়া দরকার হয়, তাহলে container query ব্যবহার করুন।',
        ':has(), :is(), :where() এবং :not() এর মতো modern selector ব্যবহার করে cleaner এবং powerful CSS লিখুন।',
        'অনেক breakpoint না লিখে fluid layout তৈরি করতে clamp(), min(), max(), minmax(), auto-fit এবং auto-fill ব্যবহার করুন।',
        'keyboard user যেন clearly বুঝতে পারে কোথায় focus আছে, এজন্য :focus-visible ব্যবহার করে accessible focus state design করুন।',
        'যেসব user কম animation prefer করে, তাদের জন্য prefers-reduced-motion ব্যবহার করুন।',
        'transition, transform, opacity এবং keyframe animation ব্যবহার করে professional micro-interaction তৈরি করুন।',
      ],

      code: `/* =========================
   1. Design Tokens
========================= */
:root {
  --font-base: Inter, system-ui, sans-serif;

  --color-brand: #2563eb;
  --color-brand-dark: #1d4ed8;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-border: #e2e8f0;
  --color-surface: #ffffff;

  --space-1: 0.5rem;
  --space-2: 1rem;
  --space-3: 1.5rem;
  --space-4: 2rem;

  --radius-md: 0.75rem;
  --radius-lg: 1.25rem;

  --shadow-soft: 0 12px 30px rgba(15, 23, 42, 0.08);
}

/* =========================
   2. Component: Course Card
   BEM Naming Example
========================= */
.course-card {
  container-type: inline-size;
  display: grid;
  gap: var(--space-2);
  padding: var(--space-3);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background: var(--color-surface);
  box-shadow: var(--shadow-soft);
  transition:
    transform 200ms ease,
    box-shadow 200ms ease,
    border-color 200ms ease;
}

.course-card:hover {
  transform: translateY(-4px);
  border-color: var(--color-brand);
}

.course-card__level {
  width: fit-content;
  padding: 0.35rem 0.75rem;
  border-radius: 999px;
  background: #dbeafe;
  color: var(--color-brand-dark);
  font-size: 0.875rem;
  font-weight: 700;
}

.course-card__title {
  margin: 0;
  font-size: clamp(1.25rem, 2vw, 1.75rem);
  color: var(--color-text);
}

.course-card__description {
  margin: 0;
  color: var(--color-muted);
  line-height: 1.7;
}

.course-card__actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-1);
  margin-block-start: var(--space-2);
}

.course-card__button {
  border: 0;
  border-radius: var(--radius-md);
  padding-block: 0.75rem;
  padding-inline: 1rem;
  background: var(--color-brand);
  color: white;
  font-weight: 700;
  cursor: pointer;
}

.course-card__button:focus-visible {
  outline: 3px solid var(--color-brand);
  outline-offset: 4px;
}

/* =========================
   3. Modifier Class
========================= */
.course-card--featured {
  border-width: 2px;
  background:
    linear-gradient(white, white) padding-box,
    linear-gradient(135deg, #2563eb, #7c3aed) border-box;
}

/* =========================
   4. Modern Selector
========================= */
.course-card:has(.course-card__level) {
  padding-block-start: var(--space-4);
}

/* =========================
   5. Container Query
========================= */
@container (min-width: 460px) {
  .course-card {
    grid-template-columns: 1fr auto;
    align-items: start;
  }

  .course-card__actions {
    grid-column: 1 / -1;
  }
}

/* =========================
   6. Reduced Motion Support
========================= */
@media (prefers-reduced-motion: reduce) {
  .course-card {
    transition: none;
  }

  .course-card:hover {
    transform: none;
  }
}`,

      language: 'css',

      practiceEn: {
        title: 'Practice Session: Build a Professional Course Card System',
        goal:
          'Create a reusable, responsive, accessible, and professional course card component using modern CSS architecture.',
        tasks: [
          'Create a course card component using semantic HTML.',
          'Use BEM-style class names such as course-card, course-card__title, course-card__description, and course-card--featured.',
          'Create design tokens using CSS variables for colors, spacing, radius, and shadows.',
          'Add a level badge such as Basic, Intermediate, or Advanced.',
          'Add a title, short description, lesson count, and action button.',
          'Use hover effects to slightly lift the card.',
          'Use :focus-visible to create a clear keyboard focus state for the button.',
          'Use clamp() for responsive title size.',
          'Use container query so the card layout changes based on its own width.',
          'Add prefers-reduced-motion support to remove animation for users who prefer less motion.',
        ],
        miniProject:
          'Mini Project: Build a full “HTML & CSS Learning Path” page with three professional course cards: Basic, Intermediate, and Advanced. Each card should include lesson count, skill level, description, and a start button.',
        checklist: [
          'Are class names consistent and easy to understand?',
          'Are design tokens used instead of repeated random values?',
          'Does the component look good in both narrow and wide containers?',
          'Is keyboard focus clearly visible?',
          'Are hover effects smooth but not distracting?',
          'Does the UI still work when animation is reduced?',
          'Can the card be reused in another page without rewriting the CSS?',
        ],
        commonMistakes: [
          'Writing CSS that only works for one specific page.',
          'Using random class names that become hard to maintain.',
          'Repeating the same color, spacing, and shadow values everywhere.',
          'Adding animations without reduced-motion support.',
          'Removing outline from buttons without adding a custom focus style.',
          'Using media queries when a container query would solve the component-level problem better.',
        ],
      },

      practiceBn: {
        title: 'প্র্যাকটিস সেশন: Professional Course Card System তৈরি করুন',
        goal:
          'Modern CSS architecture ব্যবহার করে reusable, responsive, accessible এবং professional course card component তৈরি করুন।',
        tasks: [
          'Semantic HTML ব্যবহার করে একটি course card component তৈরি করুন।',
          'course-card, course-card__title, course-card__description এবং course-card--featured এর মতো BEM-style class name ব্যবহার করুন।',
          'color, spacing, radius এবং shadow এর জন্য CSS variable দিয়ে design token তৈরি করুন।',
          'Basic, Intermediate অথবা Advanced এর মতো level badge যোগ করুন।',
          'title, short description, lesson count এবং action button যোগ করুন।',
          'hover effect ব্যবহার করে card সামান্য lift করুন।',
          'button এর জন্য clear keyboard focus state তৈরি করতে :focus-visible ব্যবহার করুন।',
          'responsive title size এর জন্য clamp() ব্যবহার করুন।',
          'card নিজের width অনুযায়ী layout change করার জন্য container query ব্যবহার করুন।',
          'যেসব user কম motion prefer করে তাদের জন্য prefers-reduced-motion support যোগ করুন।',
        ],
        miniProject:
          'Mini Project: তিনটি professional course card দিয়ে একটি “HTML & CSS Learning Path” page তৈরি করুন: Basic, Intermediate এবং Advanced। প্রতিটি card এ lesson count, skill level, description এবং start button থাকতে হবে।',
        checklist: [
          'class name গুলো কি consistent এবং সহজে বোঝা যায়?',
          'repeated random value এর বদলে design token ব্যবহার করা হয়েছে কি?',
          'component কি narrow এবং wide container দুই জায়গাতেই ভালো দেখায়?',
          'keyboard focus কি clearly visible?',
          'hover effect কি smooth কিন্তু distracting নয়?',
          'animation reduce করলে UI কি ঠিকভাবে কাজ করে?',
          'CSS rewrite না করে card কি অন্য page এ reuse করা যাবে?',
        ],
        commonMistakes: [
          'এমন CSS লেখা যা শুধু একটি specific page এ কাজ করে।',
          'random class name ব্যবহার করা, যা পরে maintain করা কঠিন হয়।',
          'একই color, spacing এবং shadow value বারবার repeat করা।',
          'reduced-motion support ছাড়া animation যোগ করা।',
          'custom focus style ছাড়া button এর outline remove করা।',
          'component-level problem এর জন্য container query ভালো হলেও media query ব্যবহার করা।',
        ],
      },
    },
  ],
};