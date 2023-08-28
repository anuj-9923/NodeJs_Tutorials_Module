exports.getContactus = (req, res, next) => {
    //res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));//we can write it in this form
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));


};