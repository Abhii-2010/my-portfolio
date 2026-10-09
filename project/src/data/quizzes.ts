export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  icon: string;
  questions: QuizQuestion[];
}

export const QUIZZES: Quiz[] = [
  {
    id: 'html-css',
    title: 'HTML & CSS Basics',
    description: 'Test your knowledge of HTML structure and CSS styling fundamentals.',
    icon: 'Layout',
    questions: [
      {
        question: 'What does HTML stand for?',
        options: [
          'HyperText Markup Language',
          'HighText Machine Language',
          'Hyperlinks and Text Markup Language',
          'Home Tool Markup Language',
        ],
        correctIndex: 0,
      },
      {
        question: 'Which CSS property is used to change the text color?',
        options: ['font-color', 'text-color', 'color', 'foreground'],
        correctIndex: 2,
      },
      {
        question: 'Which HTML tag is used to create a hyperlink?',
        options: ['<link>', '<a>', '<href>', '<url>'],
        correctIndex: 1,
      },
      {
        question: 'What is the default display value of a <div> element?',
        options: ['inline', 'block', 'flex', 'grid'],
        correctIndex: 1,
      },
      {
        question: 'Which CSS property controls the spacing between elements?',
        options: ['padding', 'spacing', 'margin', 'gap'],
        correctIndex: 2,
      },
    ],
  },
  {
    id: 'javascript',
    title: 'JavaScript Fundamentals',
    description: 'Challenge yourself with core JavaScript concepts and syntax.',
    icon: 'Code2',
    questions: [
      {
        question: 'Which keyword declares a block-scoped variable in JavaScript?',
        options: ['var', 'let', 'function', 'static'],
        correctIndex: 1,
      },
      {
        question: 'What is the output of: typeof null?',
        options: ['"null"', '"undefined"', '"object"', '"number"'],
        correctIndex: 2,
      },
      {
        question: 'Which method adds an element to the end of an array?',
        options: ['push()', 'add()', 'append()', 'insert()'],
        correctIndex: 0,
      },
      {
        question: 'What does "===" check for in JavaScript?',
        options: [
          'Only value equality',
          'Only type equality',
          'Both value and type equality',
          'Reference equality only',
        ],
        correctIndex: 2,
      },
      {
        question: 'Which of these is NOT a JavaScript data type?',
        options: ['string', 'boolean', 'float', 'number'],
        correctIndex: 2,
      },
    ],
  },
  {
    id: 'react',
    title: 'React Essentials',
    description: 'How well do you know React hooks, components, and patterns?',
    icon: 'Atom',
    questions: [
      {
        question: 'What hook is used to manage state in a functional component?',
        options: ['useEffect', 'useState', 'useContext', 'useReducer'],
        correctIndex: 1,
      },
      {
        question: 'What does JSX stand for?',
        options: [
          'JavaScript XML',
          'Java Syntax Extension',
          'JSON Extended',
          'JavaScript Extension',
        ],
        correctIndex: 0,
      },
      {
        question: 'Which hook runs side effects after render?',
        options: ['useMemo', 'useEffect', 'useRef', 'useCallback'],
        correctIndex: 1,
      },
      {
        question: 'How do you pass data from parent to child component?',
        options: ['State', 'Props', 'Context', 'Refs'],
        correctIndex: 1,
      },
      {
        question: 'What is the virtual DOM in React?',
        options: [
          'A backup of the real DOM',
          'A lightweight copy of the real DOM in memory',
          'A browser feature unrelated to React',
          'A type of CSS selector',
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    id: 'nodejs',
    title: 'Node.js & Backend',
    description: 'Test your understanding of server-side JavaScript and APIs.',
    icon: 'Server',
    questions: [
      {
        question: 'What runtime allows JavaScript to run on the server?',
        options: ['Browser Engine', 'Node.js', 'Deno only', 'WebAssembly'],
        correctIndex: 1,
      },
      {
        question: 'Which module is used to create an HTTP server in Node.js?',
        options: ['http', 'server', 'net', 'url'],
        correctIndex: 0,
      },
      {
        question: 'What is npm?',
        options: [
          'A JavaScript framework',
          'A package manager for Node.js',
          'A database tool',
          'A testing library',
        ],
        correctIndex: 1,
      },
      {
        question: 'What does Express.js do?',
        options: [
          'A frontend framework',
          'A database ORM',
          'A web application framework for Node.js',
          'A CSS preprocessor',
        ],
        correctIndex: 2,
      },
      {
        question: 'What is middleware in Express?',
        options: [
          'A type of database',
          'Functions that have access to req, res, and next',
          'A frontend library',
          'A deployment tool',
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    id: 'database',
    title: 'Databases & SQL',
    description: 'Check your knowledge of databases, SQL queries, and data modeling.',
    icon: 'Database',
    questions: [
      {
        question: 'What does SQL stand for?',
        options: [
          'Structured Query Language',
          'Simple Query Language',
          'Standard Query Logic',
          'System Query Language',
        ],
        correctIndex: 0,
      },
      {
        question: 'Which SQL command retrieves data from a table?',
        options: ['GET', 'FETCH', 'SELECT', 'RETRIEVE'],
        correctIndex: 2,
      },
      {
        question: 'Which clause filters rows in a SQL query?',
        options: ['FILTER', 'WHERE', 'IF', 'CONDITION'],
        correctIndex: 1,
      },
      {
        question: 'What type of database is MongoDB?',
        options: [
          'Relational',
          'Document-based (NoSQL)',
          'Graph',
          'Key-value only',
        ],
        correctIndex: 1,
      },
      {
        question: 'What does a primary key do?',
        options: [
          'Encrypts the table',
          'Uniquely identifies each row in a table',
          'Links two tables together',
          'Stores the first row only',
        ],
        correctIndex: 1,
      },
    ],
  },
];
