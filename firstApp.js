
async function printOrder() {
    console.log('a');

    console.log('b');

    const letter = await new Promise((resolve, reject) => {
        setTimeout(() =>
            resolve(console.log('c'))
            , 3000);
    });

    const letterC = await new Promise((resolve, reject) => {
        setTimeout(() =>
            resolve(console.log('d'))
            , 0);
    });

    console.log('e');
}
printOrder();