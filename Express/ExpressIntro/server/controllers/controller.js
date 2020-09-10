module.exports = {
    generic: (req,res) => {
        res.json([1,2,3,4,5]);
    },
    allData: (req,res) => {
        res.json({ message: "success", data: [[1,2,3], [4,5,6], [7,8,9]]});
    },
    newData: (req,res) => {
        console.log(req.body);
        res.json({ message: "success", data: req.body });
    }
}