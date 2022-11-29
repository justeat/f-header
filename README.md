<div align="center">
<h1>f-header</h1>

## This repo is being deprecated and is only used on sites that cannot currently render Vue components. We recommend switching to using the [Vue.js version of this component as soon as possible](https://github.com/justeat/fozzie-components/tree/master/packages/f-header).

<img width="125" alt="Fozzie Bear" src="bear.png" />

<p>Fozzie Header Component – allows any project to install and use a variation of the Just Eat header on their project.</p>
</div>

---

[![npm version](https://badge.fury.io/js/%40justeat%2Ff-header.svg)](https://badge.fury.io/js/%40justeat%2Ff-header)
[![Build Status](https://travis-ci.org/justeat/f-header.svg)](https://travis-ci.org/justeat/f-header)
[![Coverage Status](https://coveralls.io/repos/github/justeat/f-header/badge.svg)](https://coveralls.io/github/justeat/f-header)
[![Known Vulnerabilities](https://snyk.io/test/github/justeat/f-header/badge.svg?targetFile=package.json)](https://snyk.io/test/github/justeat/f-header?targetFile=package.json)


## Usage

1. The easiest way to use fozzie modules in your Sass setup is to use [Eyeglass](https://www.npmjs.com/package/eyeglass).

If you are using the [fozzie gulp build tasks](https://www.npmjs.com/package/@justeat/gulp-build-fozzie), then Eyeglass is automatically setup ready to use.  If not, you can use it in one of the following ways:

- [Gulp](https://github.com/sass-eyeglass/eyeglass/blob/master/site-src/docs/integrations/gulp.md)
- [WebPack](https://github.com/sass-eyeglass/eyeglass/issues/153#issuecomment-300895607)

2.  Install the f-header module using NPM or Yarn:

    ```bash
    yarn add @justeat/f-header
    ```

3.  Then within your Sass files, you will need to import this module.

    ```scss
    @import 'f-header';
    ```

You can then use the `f-header` fozzie header module styling.

Note that `f-header` uses a number of utility classes from `fozzie`, so in order to display the header as intended fozzie needs to be imported and the following code added to your SCSS:

```scss
@use '@justeat/fozzie/src/scss/fozzie';

@include f.trumps-utilities();
```
