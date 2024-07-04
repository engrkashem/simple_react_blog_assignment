# Simple Blogs (React)

## Description

This is a React-based news blog application that fetches and displays news articles based on a selected category. The application uses the NewsAPI to retrieve articles and provides navigation between different pages such as the home page, articles list, and article details.

## Table of Contents

- Description
- Table of Contents
- Installation
- Usage
- Project Structure
- Components
- API
- Styling
- Context
- Routes

## Installation

1.  Clone the repository:

    ```sh
      git clone https://github.com/engrkashem/simple_react_blog_assignment.git

      cd simple_react_blog_assignment
    ```

2.  Install dependencies:

    ```sh
     npm install
    ```

3.  Create a .env file in the root directory and add the following:

    ```sh
     VITE_NEWS_API_KEY=your_api_key_here
    ```

4.  Start the server:

    ```sh
     npm run dev
    ```

Open your browser and navigate to http://localhost:5173 to see the application in action.

## Project Structure

```sh
  ├── public
│   └── index.html
├── src
│   ├── components
│   │   ├── Footer.tsx
│   │   └── NavBar.tsx
│   ├── context
│   │   └── storeContext.tsx
│   ├── hooks
│   │   └── useFetch.ts
│   ├── layout
│   │   └── MainLayout.tsx
│   ├── pages
│   │   ├── Article.tsx
│   │   ├── ArticleDetails.tsx
│   │   └── Home.tsx
│   ├── routes
│   │   └── routes.tsx
│   ├── styles
│   │   └── mainLayout.module.css
│   ├── types
│   │   └── index.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── package.json
├── README.md
├── tsconfig.json
└── vite.config.ts

```

## Components

- **NavBar**: Navigation bar component.
- **Footer**: Footer component for the application.
- **BlogCard**: Navigation bar component.
- **Search**: Searching article by user input.
- **Loader**: To be visible when app is loading data.

## API

The application uses the [NewsAPI](https://newsapi.org/docs) to fetch news articles. Ensure you have an API key from NewsAPI and add it to the .env file.

## Styling

- **CSS Modules**: Used for component-specific styles (e.g., mainLayout.module.css).

## Context

- **StoreContext**: Provides global state management for the application. Stores data such as the list of blogs, the selected blog, pagination details, and the selected category.

## Routes

- **"/"**: Home page displaying a list of articles.
- **"/article"**: Page displaying articles based on the searched category or default.
- **"/article/:title"**: Page displaying detailed information about a specific article.
