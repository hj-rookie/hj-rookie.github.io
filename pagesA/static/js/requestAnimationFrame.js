// 模拟 web端的requestAnimationFrame

// lastFrameTime为上次更新时间
var lastFrameTime = 0;
var doAnimationFrame = function(callback) {
  //当前毫秒数
  var currTime = new Date().getTime();
  //设置执行该函数的等待时间，如果上次执行时间和当前时间间隔大于16ms，则设置timeToCall=0立即执行，否则则取16-(currTime - lastFrameTime)，确保16ms后执行动画更新的函数
  var timeToCall = Math.max(0, 16 - (currTime - lastFrameTime));
  var id = setTimeout(function() {
    callback(currTime + timeToCall);
    //确保每次动画执行时间间隔为16ms
  }, timeToCall);
  //timeToCall小于等于16ms，lastFrameTime为上次更新时间
  lastFrameTime = currTime + timeToCall;
  return id;
};
// 模拟 cancelAnimationFrame
var abortAnimationFrame = function(id) {
  clearTimeout(id)
}
export default {
  doAnimationFrame: doAnimationFrame,
  abortAnimationFrame: abortAnimationFrame
}
