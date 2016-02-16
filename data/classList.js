var classes = [
  {
    id: 'umass',
    name: 'University of Massachusetts Amherst',
    info: 'Bachelors in Economics & Computer Science | 2014-2016',
    subjects: [
      {
        name: 'Computer Science',
        courses: [
          {id: 'CMPSCI-121', date: 'Spring 2014', name: 'Introduction to Problem Solving with Computer', language: 'java', desc: 'Introduction to basic concepts in Object Oriented Programming. \n Concepts include data types, expressions, objects, methods, data abstraction, conditionals, iterations/loops, interfaces, inheritance, lists and arrays.'},
          {id: 'CMPSCI-187', date: 'Fall 2014', name: 'Programming with Data Structures', language: 'java', desc: 'Inroductory course on basic data structures and algorithms. Concepts include linked lists, trees, heaps, graphs, stacks, queues, hash tables, Big-O notation, and basic search algorithms.'},
          {id: 'CMPSCI-220', date: 'Spring 2015', name: 'Programming Methodology', language: 'scala', desc: 'Introduction to basic concepts and practices in Functional Programming. Concepts include regular expressions, singleton pattern, exception handling, concurrency, and high-order functions.'},
          {id: 'CMPSCI-240', date: 'Spring 2015', name: 'Reasoning Under Uncertainty', language: 'java', desc: 'Introduction to probablistic models. Concepts include counting, probability, Naive Bayes Classifiers, Markov Chains, and Game Theory.'},
          {id: 'CMPSCI-250', date: 'Fall 2015', name: 'Introduction to Computation', language: 'java', desc: 'Basic introduction to discrete mathematics. Concepts include set theory, formal language theory, propositional and predicate calculus, basic number theory, Kleene theorem, finite state machines, and induction'},
          {id: 'CMPSCI-325', date: 'Fall 2015', name: 'Usability', language: 'html/css', desc: 'Introduction to HCI. Concepts include UI prototyping methods, storyboarding, and design principles'}
        ]
      },
      {
        name: 'Mathematics',
        courses: [
          {id: 'MATH-132', date: 'Fall 2014', name: 'Calculus II', desc: 'Second course in the calculus track. Concepts include integrals, methods of integration, sequences, and Taylor series'},
          {id: 'MATH-132', date: 'Fall 2014', name: 'Calculus II', desc: 'Second course in the calculus track. Concepts include integrals, methods of integration, sequences, and Taylor series'},
          {id: 'MATH-233', date: 'Spring 2014', name: 'Multivariate Calculus', desc: 'Calculus in 2 and 3 dimensions. Concepts include vectors, partial derivatives, and line integrals'}
        ]
      },
      {
        name: 'Economics',
        courses: [
          {id: 'ECON-305', date: 'Fall 2014', name: 'Marxian Economics', desc: 'Introduction to Marxian theory. Concepts include historical materialism, capital accumulation, and dialects.'},
          {id: 'ECON-311', date: 'Fall 2014', name: 'Money & Banking', desc: 'Introduction to Financial Markets and Financial Instruments. Concepts include present/future value, derivates, stocks/bonds, externalities, game theory, tragedy of the commons, and Minsky\'s financial instability hypothesis.'},
          {id: 'ECON-341H', date: 'Spring 2014', name: 'Honors Labor Economics', language: 'stata', desc: 'Introduction to Labor Economics using statistical tools and econometrics. Concepts include regressions, returns to education, labor market discrimination, and wage differentials.'}
        ]
      }
    ]
  },
  {
    id: 'nyu',
    name: 'New York University',
    info: 'Bachelors in Jazz Studies | 2011-2014',
    subjects: [

    ]
  }
];

var prg_languages = [
  {
    name: 'Javascript',
    level: 'intermediate',
    scale: '60%',
    info: 'Solid understanding of basic syntax. Extensive experience via personal web projects. Frameworks and libraries used include JQuery, Angular, React, Node, and Express.'
  },
  {
    name: 'Java',
    level: 'intermediate',
    scale: '55%',
    info: 'Solid understanding of basic syntax. Extensive experience via academic settings.'
  },
  {
    name: 'Scala',
    level: 'intermediate',
    scale: '50%',
    info: 'Similarities to java and python allows for solid understanding of basic syntax and concepts. Minimal experience via academic settings.'
  },
  {
    name: 'C',
    level: 'novice',
    classAttr: 'progress-bar-warning',
    scale: '30%',
    info: 'Strong understanding of basic syntax and strong understanding of basic concepts. Minimal experience via the academic setting. Experience includes bit manipulation, cacheing, and web programming'
  },
  {
    name: 'R',
    level: 'novice',
    classAttr: 'progress-bar-warning',
    scale: '30%',
    info: 'Strong understanding of basic syntax. Minimal experience via the academic setting. Experience includes clustering, regressions, and classifications.'
  },
  {
    name: 'Python',
    level: 'novice',
    classAttr: 'progress-bar-warning',
    scale: '25%',
    info: 'An intermediate understanding of basic syntax. Minimal experience via personal projects. Experience is mainly with well-defined apis such as PRAW (Python Reddit API Wrapper)'
  },
  {
    name: 'Stata',
    level: 'novice',
    classAttr: 'progress-bar-warning',
    scale: '20%',
    info: 'Strong understanding of basic syntax. Minimal experience via the academic setting. Experience includes running regressions on economic models.'
  },
  {
    name: 'Swift',
    level: 'beginner',
    classAttr: 'progress-bar-danger',
    scale: '10%',
    info: 'Strong understanding of basic syntax. Minimal experience via personal projects.'
  },
];

var mrkup_languages = [
  {
    name: 'Html/CSS',
    level: 'intermediate',
    scale: '60%',
    info: 'Solid understanding of syntax. Extensive experience via personal web projects. Frameworks and libraries used include Bootstrap.'
  },
  {
    name: 'LaTeX',
    level: 'intermediate',
    scale: '35%',
    info: 'Solid understanding of basic syntax. Minimal experience via personal projects.'
  }
];

var foreign_languages = [
  {
    name: 'Japanese',
    level: 'advanced',
    classAttr: 'progress-bar-success',
    scale: '85%',
    info: 'Fluent in conversational. Solid foundation in formal. Experience as a translator.'
  },
  {
    name: 'English',
    level: 'advanced',
    classAttr: 'progress-bar-success',
    scale: '92%',
    info: 'Fluent. Can read and write. Experience as a tutor.'
  }
];

var employment_history = {

};
