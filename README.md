# React Native Universal Scaffold
This is a starter kit I use for some of my commercial projects. It's got the tooling and code structure to enable you to build Web, iOS and Android Apps. The goal is to share as much code as possible between the various apps but be flexible enough to diverge code for platform specific use cases.  It's also future proofed so it can be extended into a Desktop app via Electron.

The example used a simple sample Dentist Appointments App to show how it all fits together.

*The project supports Hot Loading across Web and Native Apps*

## Influence
This project is heavily influenced by this awesome project https://github.com/benoitvallon/react-native-nw-react-calculator.

## Project Components
### Model Controller - Flux
Currently supports Flux for unidirectional data flow.

### Task Runner - Grunt + Webpack
Grunt has been used with WebPack to launch the `Web` development environment, build the `dist` package and run the unit tests.

### Testing - Jasmine + Jest
Currently supports the Karma, Jasmine and Jest stack. I will review and update stack as needed.

### Code Coverage - Jest + lcov
Code coverage is supports via Jest and lcov. It analyses each time you test your app, physical report is located in the "coverage" folder.

## Detailed Documentation
*Detailed Documentation will follow, but there is a sample web and iOS app to show you how it works. use `grunt serve-web` to launch the web app and use xCode to launch the iOS app. `grunt build` can be used to build your React web app.*

## TODO
- Add a Android app to show how it all fits together
- Refactor the AJAX calls to live in the Flux Action Creator instead of the React Comps which is the better design.
- Switch to SASS

## Change Log

### 0.0.2

**Implemented enhancements:**
- removed electron-prebuilt dependency as it's not needed right now and too large.
- removed the weird splash screen, it not boots into the appointments list.
- Cleaned up the AJAX call to get appointments.

**Closed issues:**

**Merged pull requests:**
