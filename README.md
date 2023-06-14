# PROJECT NAME: CAREER HUB

# React, Vite, React router, Rechart 
React is an open-source JavaScript library used for building user interfaces.
Vite is a build tool and development server created for modern web development.
React Router is a library for building single-page web applications with React. 
Recharts is a charting library for React that allows developers to create customizable and interactive charts and graphs. 

# Live Site: 
LINK: [Click here to see react router project](https://careerhub-asg-9-jazz.netlify.app/) 
## Installation

```Command Prompt
npm create vite@latest my-project -- --template react
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install react-router-dom localforage match-sorter sort-by
npm run dev
npm run build
npm install --save react-toastify
npm install @heroicons/react
```

## Description
This is a single page application. React, React Router dom, vite, React toastify are used in this project. Tailwind CSS framework is used for styling. It has four main routes Home, Statistics, Applied Jobs and Blogs and one dynamic route. Header and footer is common in each route. Home route has three sections banner, Job category and featured Jobs section. Featured section has a view detail btn which contains a dynamic route. By clicking on the btn one can go to job details page. There is also another btn in the bottom of the home page which has a toggle functionality to see required number of jobs. Job details page has two section one banner and another main section. This section has a apply now btn, by clicking on that specific job is added to the localStorage in job-cart. All selected jobs are shown in applied jobs route. In applied job route there is a filter option by selecting on remote job or onsite job job one can able to sort their selected jobs. In this section there is also a view detail btn in every card by clicking this btn we can also back to the job details page again. This project has also two other routes blogs and Statistics where one can show question answers and a chart respectively. A 404 page is also added to the project.
```



