
class AuthorInfoPlugin {
    constructor(opts) {
        console.log('opt:', opts);
    }
    apply(compiler) {
        compiler.plugin('emit', function(compilation, callback) {
            console.log('emit:', compilation.assets['index.html']);
            callback();
        });
    }
}

module.exports = AuthorInfoPlugin;