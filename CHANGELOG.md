# Changelog

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).


v0.41.0
------------------------------
*October 4, 2018*

### Fixed
- Header button `z-index` value updated so that it displays above elements.

v0.40.0
------------------------------
*October 2, 2018*

### Changed
- Moved base header styles into `_header.scss` file for better separation
- Changed utils dependencies onto `@justeat/f-utils` module rather than using `kickoff/utils`
- Updated package dependencies


v0.39.0
------------------------------
*October 1, 2018*

### Fixed
- Header `z-index` value updated so that it displays above elements.
- Transparent header nav text link colour should always be white.

### Added
- Header CSS class variable to template.


v0.38.1
------------------------------
*September 27, 2018*

### Fixed
- Slack build notifications for Travis.


v0.38.0
------------------------------
*September 27, 2018*

### Added
- Added transparent header modifier.
- Slack build notifications from Travis.

### Changed
- Updated `.gitignore`.
- Tweaked the unit test npm scripts.
- Updated readme.
- eslint auto fixed changes in JS modules.

### Fixed
- Removed extra padding top from nav which was causing a very slight jump when the nav opened on small screens.


v0.37.0
------------------------------
*September 13, 2018*

### Changed
- Updated `c-header-button` click area.


v0.36.0
------------------------------
*September 11, 2018*

### Fixed
- Fixed positioning on `c-header-button`.

### Changed
- Changed targetting on `c-header-buttonIcon` SVG to apply fill.
- Updates `c-header` border.


v0.35.0
------------------------------
*August 29, 2018*

### Changed
- Added pseudo-locale `qps-ploc` for localisation testing on Windows.


v0.34.0
------------------------------
*August 23, 2018*

### Changed
- Updated burger menu icon to be consistent with JustEats current icon pack

v0.33.0
------------------------------
*August 23, 2018*

### Added
- `data-sticky-element` attribute to header
- Addition of `c-header-button` styles

v0.32.0
------------------------------
*August 10, 2018*

### Added
- Peer dependency to `f-icons` added to `package.json`
- CODEOWNERS file added

### Changed
- Chevron icon in language switcher now inlined using inlineSVG helper
- Tidied up some class names in the language switcher
- Updated PR template with new links and updated browsers

### Fixed
- The body container now doesn't jump around when the menu is opened.
- The navigation height is now correct when multi language versions of the site are viewed (it previously overlapped the header/logo when open).
- Fixed persistent scrollbar which was visible on narrow viewports.


v0.31.0
------------------------------
*July 23, 2018*

### Added
- Logo alt text added


v0.30.0
------------------------------
*June 18, 2018*

### Added
- Added basic menulog support for OrderWeb


v0.29.0
------------------------------
*June 15, 2018*

### Added
- rimraf dev dependency.
- Script to clean the `dist` directory before transpiling code which runs before compile script.
- snyk badge.

### Changed
- Prevent adding unit test files to the `dist` directory.

### Removed
- Removed the gemnasium badge from the readme.


v0.28.0
------------------------------
*June 15, 2018*

### Changed
- Updated DangerJS config.


v0.27.0
------------------------------
*May 11, 2018*

### Changed
- Updating package dependencies


v0.26.0
------------------------------
*April 25, 2018*

### Changed
- Support server-side rendering of the user menu without needing to use `checkForUser()` client-side.


v0.25.0
------------------------------
*April 24, 2018*

### Changed
- `$nav-text-size` to use new `base--scaleUp` property from the `fozzie` `$type` map.


v0.24.0
------------------------------
*April 17, 2018*

### Added
- Render language-switcher partial based on `isMultiLingual` flag


v0.23.0
------------------------------
*April 16, 2018*

### Added
- Conditional `target="_blank"` for the help menu link


v0.22.1
------------------------------
*April 12, 2018*

### Added
- Re-added some properties to docs data to fix the language switcher text.


v0.22.0
------------------------------
*April 11, 2018*

### Added
- Added localisation for en-AU and en-NZ.


v0.21.3
------------------------------
*April 11, 2018*

### Removed
- Removed links and unnecessary properties from docs data.


v0.21.2
------------------------------
*April 9, 2018*

### Fixed
- Fix typo in link.


v0.21.1
------------------------------
*April 5, 2018*

### Changed
- Undo renaming of templates and translations. Clashing of names shouldn't be an issue.


v0.21.0
------------------------------
*April 4, 2018*

### Changed
- Prepend template filenames with `header-`.
- Prepend translations with `header-`.

### Added
- `header-docs-data.json` containing the data for the header docs.


v0.20.5
------------------------------
*February 20, 2018*

### Changed
- Updated alternative language url property name.


v0.20.4
------------------------------
*February 20, 2018*

### Fixed
- Fixed issue when opening the mobile navigation and content still allowed to scroll.


v0.20.3
------------------------------
*February 19, 2018*

### Changed
- Made popover style prettier to match consumerweb uk.


v0.20.2
------------------------------
*February 19, 2018*

### Changed
- Moved all JavaScript unit tests under a single directory.


v0.20.1
------------------------------
*February 15, 2018*

### Changed
- Package bump.


v0.20.0
------------------------------
*February 15, 2018*

### Changed
- Change default exports to named exports
- Exporting `checkForUser` function.
- Ignore eslint rule for using default exports.
- Moved all JavaScript unit tests into the same directory.
- Moved jest modules into `devDependencies`.
- Updated Travis config.

### Removed
- Removed the `ordercountlink` link element.


v0.19.0
------------------------------
*February 14, 2018*

### Changed
- Added class `is-navInView` to `nav` partial.
- Added toggling funcionality of class `is-navInView` to html element to prevent users scrolling page when navigation is in viev.
- Added tests for the toggling of class to the HTML element.


v0.18.0
------------------------------
*February 14, 2018*

### Added
- Handlebars template for order count elements

### Changed
- checkForUser is no longer a default export


v0.17.0
------------------------------
*February 8, 2018*

### Added
- userAuth module from GlobalWeb (including `index.js`, `userData.js` and their unit tests).
- `jest.setup.js` file.
- Dependencies `jest-fetch-mock` and `jest-localstorage-mock`.


v0.16.0
------------------------------
*February 1, 2018*

### Changed
- Renamed alternate language links partial.

### Fixed
- Fixed variable name for alternate language links.


v0.15.0
------------------------------
*January 30, 2018*

### Added
- Added new shared header handlebars templates.
- Added header translations file.

### Changed
- Updated `f-copy-assets` config to output files to different directories.
- Updated `gulp-build-fozzie` to lates version.
- Included templates directory in published package.

### Removed
- Removed existing placeholder header template.


v0.14.0
------------------------------
*January 29, 2018*

### Changed
- Updated `browserslist`
- Updated package dependencies (minor updates)


v0.13.0
------------------------------
*January 22, 2018*

### Added
- Added `skipTo` SCSS partial.

### Changed
- Prefixed component classes with `c-`.


v0.12.0
------------------------------
*January 17, 2018*

### Added
- `dangerfile.js` added to check PRs via Travis

### Changed
- Updated `gulp-build-fozzie` and `fozzie-colour-palette` versions
- Updated `js-test-buddy` and associated test references


v0.11.4
------------------------------
*January 16, 2018*

### Changed
- Changed `concurrently` task to use escaped quotes as single quotes do not work on Windows.


v0.11.3
------------------------------
*January 12, 2018*

### Added
- Using concurrently to run npm scripts concurrently...!


v0.11.2
------------------------------
*January 9, 2018*

### Added
- Added the changelog.

### Changed
- Replaced babel ES2015 preset with env preset.


v0.11.1
------------------------------
*September 27, 2017*

### Fixed
- Fixed "files" values in package.json.


v0.11.0
------------------------------
*September 27, 2017*

### Changed
- Added `"files"` property to `package.json` to explicitly state which files should be published.
- Optimised and moved images to `img` directory.
- Configured images so that they will be copied out to consuming projects.


v0.10.0
------------------------------
*September 26, 2017*

### Added
- Added is-open state style.


v0.9.0
------------------------------
*September 26, 2017*

### Changed
- Kickoff utils is correctly listed as a dependency.
- Duplicated nav styles moved into mixin.


v0.8.0
------------------------------
*September 26, 2017*

### Changed
- Updated Travis config.
- Only display the nav trigger on small screens.

### Added
- Added compile npm script for JavaScript.
- Added JS module for the header which handles click events on the navigation trigger element.
- Added JS unit tests for new JS modules.


v0.1.0
------------------------------
*August 29, 2017*

### Added
- Added initial project files.
