# svg-external-sprite-redownloaded

Illustrative repo demonstrating SVG sprite being always downloaded when DOM is reconstructed. 

## Usage

- Run any kind of server to staticly serve assets, such as `npx serve`
- Hit browser, and watch network console
- Browsers will re-request the `sprite.svg` over the network _every single time_ the DOM is reconstructed, each second
- The pngs on the other hand get downloaded once (or sometimes twice?), and never again

### Chromium

![](https://up.jross.me/mvvfca19)
- `sprite.svg` can be seen to be requested every second, despite already been downloaded, and one version still present on the page
- https://bugs.chromium.org/p/chromium/issues/detail?id=1306881

### Safari

![](https://up.jross.me/7w3ws29i)
- Same as Chromium
- https://bugs.webkit.org/show_bug.cgi?id=237968

### Firefox
![](https://up.jross.me/w81d5yxj)
- `sprite.svg` only requested once. This is what I would consider to be the expected behaviour.