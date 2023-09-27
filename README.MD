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

Interactive parts made with client components while the others made with server components
Using Server components wherever possible
    NEXt js docs shows q=when to use which


