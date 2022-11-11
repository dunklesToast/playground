import { IgApiClient, Feed } from 'instagram-private-api';

const ig = new IgApiClient();

ig.state.generateDevice('girlbicep');

(async () => {
    await ig.account.login('girlbicep', 'fabia16v');

    const followersFeed = ig.feed.accountFollowers(ig.state.cookieUserId);

    const following = await getAllItemsFromFeed(followersFeed);
    for (const user of following) {
        await ig.friendship.removeFollower(user.pk)
        console.log(`removed follower ${user.username}`);
    }
})();

/**
 * Source: https://github.com/dilame/instagram-private-api/issues/969#issuecomment-551436680
 * @param feed
 * @returns All items from the feed
 */

async function getAllItemsFromFeed<T>(feed: Feed<any, T>): Promise<T[]> {
    let items = [];
    do {
        items = items.concat(await feed.items());
    } while (feed.isMoreAvailable());
    return items;
}
