define('site', function () {
    require.config({
        enforceDefine: false,
        baseUrl: '/static/js/source',
        paths: {
            'underscore': 'lib/underscore',
            'jquery-private': 'lib/jquery-1.11.0.min'
        },
        shim: {
            'lib/jquery.random-plugin': ['jquery-private']
        }
    });
});

// Most jQuery plugins expect a global 'jQuery', and they usually modify that object
// Keeping track of this is a pain and unintuitive - I define a 'jquery' module to be shorthand for 'jquery + all my plugins'
define('jquery', ['jquery-private', 'lib/jquery.random-plugin'], function () {
    return $;
});

// when we build, this will let the compiler know what to include
require(['site', 'pages/global', 'pages/page1', 'pages/page2']);