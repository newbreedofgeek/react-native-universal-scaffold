# React Native Universal Scaffold
This is a starter kit I use for some of my commercial projects. It's got the tooling and code structure to enable you to build Web, iOS and Android Apps. The goal is to share as much code as possible between the various apps but be flexible enough to diverge code for platform specific use cases.  It's also future proofed so it can be extended into a Desktop app via Electron.

*The project supports Hot Loading across Web and Native Apps*

## Influence
This project is heavily influenced by this awesome project https://github.com/benoitvallon/react-native-nw-react-calculator.

## Project Components
### Model Controller - Flux
Currently supports Flux for unidirectional data flow.

### Task Runner - Grunt
Used with WebPack to launch the `Web` development environment, build the `dist` package and run the unit tests.

### Testing - Jasmine + Jest
Currently supports the Karma, Jasmine and Jest stack. I will review and update stack as needed.

### Code Coverage - Jest + lcov
Code coverage is supports via Jest and lcov. It analyses each time you test your app, physical report is located in the "coverage" folder.

## Documentation
*Detailed Documentation will follow, but there is a sample web and iOS app to show you how it works. use `grunt server-web` to launch the web app and use xCode to launch the iOS app.*
