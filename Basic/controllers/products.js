const getProducts = async (req, res) => {
    res.status(200).json({ msg: "I am product Home Page" })
};

const getProductsTesting = async (req, res) => {
    res.status(200).json({ msg: "I am product Testing Page" })
};

module.exports = { getProducts, getProductsTesting }