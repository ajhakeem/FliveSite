'use strict';

importScripts('/workbox.js');

const workbox = new this.goog.SWLib();

// Static precaching of images
workbox.precache(/* START_PRECACHE_MANIFEST */[{"url":"/static/img/arrow-blue.svg","revision":"a6f33901d01705a565a2e723f840c436"},{"url":"/static/img/arrow.svg","revision":"52ec66cadebd140286fb6eaf764bfe33"},{"url":"/static/img/background.jpg","revision":"a9540a85f5a325c214e7acc7886ffffb"},{"url":"/static/img/blog-icon.svg","revision":"52069b075f99fa3e8fb0c0dd6dd5818f"},{"url":"/static/img/cheveron-down.svg","revision":"db8205481910116f1bd30a958c623b56"},{"url":"/static/img/close.svg","revision":"e2c01bb46e2dfc13ba65497cf7b76dca"},{"url":"/static/img/comment.png","revision":"1abb6e5b10e15472043340558c81842a"},{"url":"/static/img/enforce-comment.png","revision":"40158f294ee8a0e72462cd9e7638bee5"},{"url":"/static/img/F.svg","revision":"3ce13e0115f48287f701ddb603352acb"},{"url":"/static/img/github.png","revision":"0f101d83a8e372272757124af24b6281"},{"url":"/static/img/hamburger.svg","revision":"168ec7289539feef81f1bb8a62178e23"},{"url":"/static/img/hollywood.png","revision":"9e8f5f5ef49d51230eedb8cfcb34598c"},{"url":"/static/img/hollywoodinsider.jpg","revision":"f4484f1cf70a24f773e2819743a400d6"},{"url":"/static/img/home-screenshot.png","revision":"e7963f30d64c3de45f8b936e10737a31"},{"url":"/static/img/howto.png","revision":"66e5e9ccedb1859a43beb96ddb4691d6"},{"url":"/static/img/ic_open_in_new_black.svg","revision":"0885970e0da2d1654c6fbf91369329b1"},{"url":"/static/img/ic_open_in_new_blue.svg","revision":"afe567cf51f984ce2cc85b4a3cb08ebe"},{"url":"/static/img/ic_open_in_new_white.svg","revision":"d3135d08a28aab1229ff50d7e7699790"},{"url":"/static/img/iPhone 6.svg","revision":"b15a719f443ca0248dd0daf52a860424"},{"url":"/static/img/liveblog-pagination.png","revision":"39909080be61fc4f63f9346529c770ff"},{"url":"/static/img/login-button.png","revision":"d4768905fffcb85e44f2e52528995cda"},{"url":"/static/img/logo-blue.svg","revision":"6a1c9f1bb3e4ebd91341da58f97a80a7"},{"url":"/static/img/logo.svg","revision":"b15a719f443ca0248dd0daf52a860424"},{"url":"/static/img/logout-button.png","revision":"037c1906eb940120f3fb19c8468e1a07"},{"url":"/static/img/malte.jpg","revision":"7b23d38c5a0795ca25909780a0ccdb0b"},{"url":"/static/img/Rectangle 1.svg","revision":"99438e67f26389715a002c34ff6096c7"},{"url":"/static/img/return-parameter.png","revision":"ef6f0e7ce0e9787f9f5da8a7d00f2118"},{"url":"/static/img/sprite.svg","revision":"e6d70508e708996150a5d8e5a09e2a40"},{"url":"/static/img/twitter.png","revision":"c073b0d05f4dee6dceb910848444a81a"},{"url":"/static/img/nav/back_arrow.png","revision":"ba07a190770fc636310cc3d98beadd0e"},{"url":"/static/img/nav/back_arrow.svg","revision":"3d5a2874d9b47343fa993e2348695a74"},{"url":"/static/img/nav/close.png","revision":"7d87190576b5979c3f85e0cf3507ba1f"},{"url":"/static/img/nav/close.svg","revision":"17009be9ac59de19d031339c7542b862"},{"url":"/static/img/nav/next_level.png","revision":"441fe94efecf15ee82a9bd9d2d3edbad"},{"url":"/static/img/nav/next_level.svg","revision":"d9c40735c6c5d41f0ed9ae369db0a4c4"}]/* END_PRECACHE_MANIFEST */);

// Runtime caching
const staleWhileRevalidate = workbox.strategies.staleWhileRevalidate();
workbox.router.registerRoute(/https:\/\/fonts\.googleapis\.com\/.*/, staleWhileRevalidate);
workbox.router.registerRoute(/https:\/\/cdn\.ampproject\.org\/.*/, staleWhileRevalidate);

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', () => {
  // immediately claim the currently connected clients
  self.clients.claim();
});
