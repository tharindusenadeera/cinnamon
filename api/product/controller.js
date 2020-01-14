const { getProducts, getProduct } = require("../booking/service");

module.exports = {

    getAllProducts : (req, res) => {
        getProducts((err, result) => {
            if(err){
                return res.status(500).json({
                    error : true,
                    message: "Database Connection Error !"
                })
            } else if(!result){
                return res.status(400).json({
                    error: true,
                    message: "No Data Found !"
                })
            } else{
                return res.status(200).json({
                    error: false,
                    message: result
                })
            }
        })
    },

    getProductById : (req, res) => {
        const id = req.params.id;
        getProduct((err, result) => {
            if(err){
                return res.status(500).json({
                    error: true,
                    message: "Database Connection Error !"
                })
            } else if(!result){
                return res.status(400).json({
                    error: true,
                    message: "Record not found !"
                })
            } else {
                return res.status(200).json({
                    error: false,
                    message: result
                })
            }
        })
    }
}