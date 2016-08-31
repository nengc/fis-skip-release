# fis-skip-release

## Features
- Compile but not release
- Especially when you use '__inline' , and do not want to release the original file

## Install
```
npm install fis-skip-release -g
```

## How to Use

### Import the module
```js
fis.require('skip-release');
```
### Match the files that compile but not release
```js
fis.match('**/js/config/config.*.js', {
    compileButNotRelease: true
});
```
### That's all, enjoy it
