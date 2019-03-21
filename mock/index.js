module.exports = {
    init : function(app){
        app.get('/user', (req, res) => {
            res.json({name: 'zhaokai'})
        });
        // app.get('/login', (req, res) => {
        //    res.json({success: false, msg: '登录失败'})
        // });
    }
};
