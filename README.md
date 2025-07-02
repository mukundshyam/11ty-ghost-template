# 11ty-ghost-template
A website template that uses 11ty as a frontend with Ghost running as a headless CMS. 

###  © Mukund Shyam, 2025 

This website pulls posts from a Ghost instance using the Ghost API, and structures it using 11ty and Liquid into pages. 
It includes a number of useful pages: home, contact, about, gallery (for images), writing (posts), music. 
It also implements a search function for written posts using FuseJS. 

Finally, it has a minimal CSS template with a monospaced font and a hover-animation for links. 

Overall, it's a basic template that can be modified to create your own website. 

## What to do to make this functional. 

1. [Install Ghost]([url](https://ghost.org/docs/install/)) and run it (either locally or on Ghost Pro).
2. Obtain the correct API keys and add it to /src/_data/posts.js.
3. Add images to the images folder (/src/images).
4. Edit the layout files at /src/_includes.
5. Edit the domain names in the post layout at /src/_includes/post.html
6. Add data to all the "text" pages: about, contact, index, music. Everything ending with .md.
7. Optional: Edit the CSS to your liking (the CSS is at /src/_site/style).
8. Deploy the website locally using `npm start`.
