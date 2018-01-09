# Changelog

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).


v0.11.2
------------------------------
*January 09, 2018*

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