import GhostContentAPI from '@tryghost/content-api';

const api = new GhostContentAPI({
    url: 'API_URL_HERE',
    key: 'API_KEY_HERE',
    version: "v5.0"
})

export default async function () {
    try {
        const posts = await api.posts.browse({
        include: 'tags,authors',
            limit: 'all'
        });
        return posts;
    }
    catch (err) {
        console.error('Ghost API error', err);
        return[];
    }
}