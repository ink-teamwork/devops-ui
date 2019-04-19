const mock = require('./mock');
module.exports = {
    runtimeCompiler: true,
    devServer: {
        hot: true,
        hotOnly: false,
        port: 4000,
        before(app) {
            mock.init(app);
        }
    },
};
