const gulp = require('gulp');
const { build } = require('@justeat/gulp-build-fozzie');

build(gulp, {
    js: {
        lintPaths: ['{src,test}/**/*.js']
    }
});
