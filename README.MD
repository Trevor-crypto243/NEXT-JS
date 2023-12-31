Next Js Content
https://www.youtube.com/playlist?list=PL4cUxeGkcC9jZIVqmy_QhfQdi6mzQvJnT

Next Js Documentation

App Router

Pages router


app directory

Meta framework
Comes with extra features apart from react
    -Server side rendering
    -Pre rendering of components
    -Static site generation
    -Api routes
    -Server Components
    -Interact with the database directly
    -file based routing system

Prerequisites
    React
        -Hooks
        -States
        -Props 
        -Event handlers

Features Of Next 13
    Server Components
        -Dont need to be hydrated
        -reduces js bundles, large dependencies for components
        -Fetch data
        -API keys, Acces Tokens
        -Benefits of server components
        -Choosing between client components and server components
        -Why , how and when to use client components vs server components
        -Streaming and suspense
        -fetching data in server components
        -Font Module
        -Server Actions
        -Route Handlers

Structuring Next Js apps
    -App directory
        -Components
            -Client components
            -Server components

npx create-next-app@latest

npx create-next-app@13.4.9



The default behaviour of next js apps is server components
Static site generation

Client side rendering
    Html page from server
    Big Js Bundle from server
    Not good for SEO
    Bigger Load Times in the browser
    Lots of Js running in the browser

Server side rendering
    Html rendered on Server 
    Smaller js bundle sent to browser to hydrate 
            -add component reactivity and reactive behaviour
    Good for SEO
    Small Js bundle

    Static site generation
        caching prerendererd pages and distributing them on a cdn in realtime
    

    Server components
        rendered on the server but no hydration needed
        reduces js sent to the browser
        Can directly interact with the database
        Increases perfomance of site
        Access backend resources
        They are not interactive
        can be cached
        Fetch data

    Client componets
        Are interactive
        can be cached
        Add event listeners
        Life cycle effects
        Browser only API's
        Custom hooks
        class based components
        updating state

Interactive parts made with client components while the others made with server components
Using Server components wherever possible
    NEXt js docs shows q=when to use which


Pages and routes
naming conventions
    page.jsx == index.js
    folder name == route name

Nested routes
    nesting folders inside folders to create nested routes


Layout file
    -Contains Sections repetetive on every page

Tailwind strips of all the browser styles

Creating server components

Styles, fonts, Images
Applying custom fonts

Styles
    -global styles
    -Css modules to scope styles to components
    -Tailwind
        -tailwind.config.js
        -Using tailwind
        -Tailwind utility classes
        -check on sntax errors  

Images
    -Official docs
    -Props
    -Image component


Fetching and revalidating data
    -API endpoints
    -Direct database access
    -Json Server
        npm install json-server -g
        json-server --watch --port 4000 /path/to/json_file
    
    Fetch requests
        -Next caches api responses
        -It reuses the fethces
        -Great site speed
        -great user experince

        -Asking Next to refetch and revalidate the data for specific scenarios
            -adding an object to the fetch function with a revalidate property with a defined amount of time interval between the last fetch


Dynamic segments/dynamic routes
    -Folder name wrapped in Square brackets


Static rendering / static site geneartion
    Next serves from cache whenever possible
    Pages dont have to be rendered from the server every other time
    -read more on this


Custom 404 pages and Not found
    -not-found.jsx 
    -Must be called not found for it to work
    -Not found for nested routes
        -same as creating the nested pages

Loading UI and Suspense
    Suspense component to create a suspense boundary
    Gloabl Loading component - suspense fallback
    Local/Manual Suspense boundaries/componets
