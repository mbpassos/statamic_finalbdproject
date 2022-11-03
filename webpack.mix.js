/*WEBPACK BUNDLE
*
* -> WATCH | COMPILE AND MINIFY CSS AND JS
* -> RUN: 'yarn mix' ONLY FOR COMPILE ASSETS
* -> RUN: 'yarn mix watch' FOR COMPILE AND WATCH ASSETS CHANGES
* -> RUN: 'yarn mix --production 'FOR COMPILE AND MINIFY ALL ASSETS FOR PRODUCTION'
*
 */

let mix = require('laravel-mix');
var LiveReloadPlugin = require('webpack-livereload-plugin');

/*SCSS AND JS FILES*/
mix.sass('resources/assets/scss/app.scss', 'dist/css')
    .options({
        autoprefixer: {
            options: {
                browsers: [
                    'last 3 versions',
                ]
            }
        }
    })
    .sourceMaps()
    .setPublicPath('public');
/*mix.minify('public/dist/css/app.css');*/


/*JS FILES*/
mix.js('resources/assets/js/app.js', 'dist/js')
    .sourceMaps()
    .setPublicPath('public');

/*mix.minify('public/dist/js/app.js');*/

/*WATCH FILES CHANGES*/
module.exports = {
    plugins: [
        new LiveReloadPlugin()
    ]
}

