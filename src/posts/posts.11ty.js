export default class {
    data() {
        return {
            pagination: {
                data: 'posts',
                size: 1,
                alias:'post'
            },
            permalink: data => `posts/${data.post.slug}/index.html`,
            layout: "post.html",
            eleventyComputed: {
                title: data => data.post.title
            }
        };
    }
};