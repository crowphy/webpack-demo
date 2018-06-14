
class InjectDiv {
    constructor(opts) {
        console.log('opt:', opts);
        this.options = opts;
    }
    apply(compiler) {
        const { options } = this;
        compiler.plugin('emit', function(compilation, done) {
            console.log('emit:', typeof compilation.assets['index.html'].source());
            var fileContent = compilation.assets['index.html'].source().replace(/(<body>)/, `$1\n<div id="${options.eleId || 'app'}"></div>`);
            compilation.assets['index.html'] = {
                source: () => {
                    return fileContent;
                },
                size: () => {
                    return Buffer.byteLength(fileContent, 'utf8');
                }
            };
            done();
        });
    }
}

module.exports = InjectDiv;