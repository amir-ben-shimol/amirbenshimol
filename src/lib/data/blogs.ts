import { Blog } from '@/types/ui/blog';

export const blogs: Blog[] = [
	{
		path: 'first-blog-post',
		title: 'First Blog Post',
		description: 'Welcome to my first blog post! This post is all about introducing myself.',
		date: new Date('2024-08-09'),
		readingTime: '5 min read',
		content: `
## Introduction

I'm excited to share my journey and thoughts with you through this blog.

### Topics Covered

- Who I am
- What I do
- Why I started this blog

\`\`\`javascript
// Example JavaScript code snippet
function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet("World"));
\`\`\`

![Welcome Image](https://via.placeholder.com/800x400.png?text=Welcome+to+My+Blog)

Thank you for reading!
    `,
	},
	{
		path: 'mastering-javascript',
		title: 'Mastering JavaScript',
		description: 'In this post, I will share tips and tricks to become proficient in JavaScript.',
		date: new Date('2024-08-11'),
		readingTime: '15 min read',
		content: `
## Tips & Tricks

1. **Understand the basics**: Learn about variables, functions, and control flow.
2. **Practice**: Write code every day to improve your skills.
3. **Explore ES6+ features**: Use the latest syntax and features like arrow functions, destructuring, and more.

### Example: Arrow Functions

\`\`\`javascript
// Traditional function
function sum(a, b) {
  return a + b;
}

// Arrow function
const sum = (a, b) => a + b;
\`\`\`

![JavaScript Image](https://via.placeholder.com/800x400.png?text=Mastering+JavaScript)

Keep coding and exploring!
    `,
	},
	{
		path: 'understanding-react-hooks',
		title: 'Understanding React Hooks',
		description: 'A deep dive into React Hooks and how they can be used effectively in your projects.',
		date: new Date('2024-08-12'),
		readingTime: '20 min read',
		content: `
## Basic Hooks

- **useState**: Manage state in functional components.
- **useEffect**: Perform side effects in functional components.

### Example: useState Hook

\`\`\`javascript
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

![React Hooks Image](https://via.placeholder.com/800x400.png?text=Understanding+React+Hooks)

Explore more hooks in the [React documentation](https://reactjs.org/docs/hooks-intro.html).
    `,
	},
	{
		path: 'effective-git-workflows',
		title: 'Effective Git Workflows',
		description: 'Learn how to manage your code with Git and streamline your development process.',
		date: new Date('2024-08-13'),
		readingTime: '10 min read',
		content: `
## Key Commands

- \`git init\`: Initialize a new Git repository.
- \`git clone\`: Clone a repository from a remote source.
- \`git commit\`: Commit your changes with a message.

### Example: Creating a New Branch

\`\`\`bash
# Create a new branch
git checkout -b feature-branch

# Push the branch to remote
git push origin feature-branch
\`\`\`

![Git Workflow Image](https://via.placeholder.com/800x400.png?text=Effective+Git+Workflows)

Using Git effectively will streamline your development process.
    `,
	},
	{
		path: 'exploring-nextjs-features',
		title: 'Exploring Next.js Features',
		description: 'A comprehensive guide to the powerful features available in Next.js.',
		date: new Date('2024-08-14'),
		readingTime: '12 min read',
		content: `
## Key Features

1. **File-based Routing**: Define routes based on the file structure.
2. **API Routes**: Create API endpoints within your Next.js app.
3. **Server-side Rendering**: Render pages on the server for better SEO and performance.

### Example: Creating a New Page

\`\`\`javascript
// Create a new page in pages/about.js

import React from 'react';

const About = () => {
  return <h1>About Us</h1>;
};

export default About;
\`\`\`

![Next.js Features Image](https://via.placeholder.com/800x400.png?text=Exploring+Next.js+Features)

Check out the [Next.js documentation](https://nextjs.org/docs) for more details.
    `,
	},
];
