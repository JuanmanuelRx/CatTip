export async function getProductCat() {
    const product = require('../lib/productoscat.json');
    const rawData = await fetch(product);
    const json = await rawData.json();

    return json.map((item) => {
        const { id, name, image, size, quantity, price, rate, description } =
            item;

        return {
            id,
            name,
            image,
            size,
            quantity,
            price,
            rate,
            description,
        };
    });
}