# Changelog

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).


v0.16.0
------------------------------
*February 1, 2018*

### Changed
- Renamed alternate language links partial.

### Foxed
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
*January 09, 2018*

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
