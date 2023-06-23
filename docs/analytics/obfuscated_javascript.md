---
title: Obfuscated Javascript
category: 629fb303c228520079bef218
hidden: false
---

# Description

In software development, [code obfuscation](<https://en.wikipedia.org/wiki/Obfuscation_(software)>) is the act of deliberately making source code difficult for humans to read or understand with the ultimate purpose of trying to conceal what the code is doing.

For example, here is a very simple JavaScript function that just prints "Hello World!" to the console:

```javascript
function hi() {
  console.log("Hello World!");
}
hi();
```

If published like that, it should be more than obvious to most developers exactly what that code is doing. However, that same code, once gone through obfuscation tools, looks like this:

```
(function(_0x26f70c,_0x4e6c92){var _0x3a9801=_0x4e03,_0x3e81f1=_0x26f70c();while(!![]){try{var _0x57c30a=parseInt(_0x3a9801(0x1e0))/0x1+-parseInt(_0x3a9801(0x1e1))/0x2*(parseInt(_0x3a9801(0x1e5))/0x3)+parseInt(_0x3a9801(0x1e7))/0x4+parseInt(_0x3a9801(0x1e4))/0x5+-parseInt(_0x3a9801(0x1ea))/0x6*(-parseInt(_0x3a9801(0x1e2))/0x7)+parseInt(_0x3a9801(0x1e6))/0x8*(-parseInt(_0x3a9801(0x1e9))/0x9)+-parseInt(_0x3a9801(0x1df))/0xa;if(_0x57c30a===_0x4e6c92)break;else _0x3e81f1['push'](_0x3e81f1['shift']());}catch(_0x5a2b26){_0x3e81f1['push'](_0x3e81f1['shift']());}}}(_0x3d1f,0xe9b9d));function _0x4e03(_0x55d606,_0x54117d){var _0x3d1f03=_0x3d1f();return _0x4e03=function(_0x4e031b,_0x106628){_0x4e031b=_0x4e031b-0x1df;var _0x5e4b7c=_0x3d1f03[_0x4e031b];return _0x5e4b7c;},_0x4e03(_0x55d606,_0x54117d);}function hi(){var _0x572c2c=_0x4e03;console[_0x572c2c(0x1e3)](_0x572c2c(0x1e8));}function _0x3d1f(){var _0x2c862a=['3988352DxkmDj','632512SZNfDd','Hello\x20World!','9NtNzQn','6WfYOmz','18643720nibnLE','1667797VhclOj','702KafXLL','13084400HKrzBf','log','145665eGCCHn','3453BajacZ'];_0x3d1f=function(){return _0x2c862a;};return _0x3d1f();}hi();
```

Without significant time and effort, it's impossible to tell what this code is doing by just looking at it.

# Importance

While there are a few legitimate use cases worthy of code obfuscation, finding obfuscated code in the open source ecosystem is noteworthy because it is atypical and goes against the grain of the spirit and purpose of the open source software community. If found it should be treated with caution because it could be hiding malicious intent.

# Examples

In the summer of 2022, researchers published details of a supply-chain attack on the NPM ecosystem that dated back to December of 2021. In this attack campaign, dubbed IconBurst, threat actors used typo-squatting to spread malicious and obfuscated JavaScript packages. Once installed, these packages would steal login and password information from embedded forms of websites the user visits. Even though the source code to these packages was published publicly, because it was obfuscated, even if the user looked at it, they wouldn't be able to tell they had malicious intent.
