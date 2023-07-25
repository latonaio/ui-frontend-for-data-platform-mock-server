
// module.exports = function (req, next) {
//     if (req.method !== 'GET') {
//         req.method = 'GET'
//     }
//     // next()
// }

module.exports = (req, res, next) => {

    res.header('X-Hello', 'World')
    next()
}
