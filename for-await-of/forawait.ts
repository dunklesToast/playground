async function* batch(iterable, batchSize: number) {
    let items = [];
    for await (const item of iterable) {
        items.push(item);
        if (items.length >= batchSize) {
            yield items;
            items = []
        }
    }
    if (items.length !== 0) {
        yield items;
    }
}

(async function() {
        const itemsPerBatch = 3;
        const tasks: Iterable<string> = ['a', 'b', 'c', 'd']
        const batchedIterable = batch(tasks, itemsPerBatch)
        for await (const items of batchedIterable) {
            console.log(items)
        }
})();