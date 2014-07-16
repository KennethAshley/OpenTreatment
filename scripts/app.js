(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var initPage;

initPage = function() {
  var $animation, $navigator, $step1, $step2, $step3, navigator;
  $navigator = $('.navigator');
  $step1 = $('.step-1');
  $step2 = $('.step-2');
  $step3 = $('.step-3');
  $animation = $('.animation');
  navigator = function() {
    setTimeout((function() {
      return $step2.addClass('active').siblings().removeClass('active');
    }), 3000);
    return setTimeout((function() {
      return $step3.addClass('active').siblings().removeClass('active');
    }), 5000);
  };
  navigator();
  $step1.on("click", function() {
    clearTimeout();
    $animation.addClass("step1").removeClass("step2 step3");
    $step1.addClass('active').siblings().removeClass('active');
    return $('.content-1').addClass('active').siblings().removeClass('active');
  });
  $step2.on("click", function() {
    clearTimeout();
    $animation.addClass("step2").removeClass("step1 step3");
    $step2.addClass('active').siblings().removeClass('active');
    return $('.content-2').addClass('active').siblings().removeClass('active');
  });
  return $step3.on("click", function() {
    clearTimeout();
    $animation.addClass("step3").removeClass("step1 step2");
    $step3.addClass('active').siblings().removeClass('active');
    return $('.content-3').addClass('active').siblings().removeClass('active');
  });
};

exports.initPage = initPage;


},{}],2:[function(require,module,exports){
var animations;

animations = require("./animations");

$(animations.initPage);


},{"./animations":1}]},{},[2])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZW5uZXRobmljaG9sc29uL0RvY3VtZW50cy9TQi1Qcm9qZWN0cy9PcGVuVHJlYXRtZW50L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMva2VubmV0aG5pY2hvbHNvbi9Eb2N1bWVudHMvU0ItUHJvamVjdHMvT3BlblRyZWF0bWVudC9zcmMvc2NyaXB0cy9hbmltYXRpb25zLmNvZmZlZSIsIi9Vc2Vycy9rZW5uZXRobmljaG9sc29uL0RvY3VtZW50cy9TQi1Qcm9qZWN0cy9PcGVuVHJlYXRtZW50L3NyYy9zY3JpcHRzL21haW4uY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsSUFBQSxRQUFBOztBQUFBLFFBQUEsR0FBVyxTQUFBLEdBQUE7QUFDVCxNQUFBLHlEQUFBO0FBQUEsRUFBQSxVQUFBLEdBQWEsQ0FBQSxDQUFFLFlBQUYsQ0FBYixDQUFBO0FBQUEsRUFDQSxNQUFBLEdBQWEsQ0FBQSxDQUFFLFNBQUYsQ0FEYixDQUFBO0FBQUEsRUFFQSxNQUFBLEdBQWEsQ0FBQSxDQUFFLFNBQUYsQ0FGYixDQUFBO0FBQUEsRUFHQSxNQUFBLEdBQWEsQ0FBQSxDQUFFLFNBQUYsQ0FIYixDQUFBO0FBQUEsRUFJQSxVQUFBLEdBQWEsQ0FBQSxDQUFFLFlBQUYsQ0FKYixDQUFBO0FBQUEsRUFNQSxTQUFBLEdBQVksU0FBQSxHQUFBO0FBQ1YsSUFBQSxVQUFBLENBQVcsQ0FBRSxTQUFBLEdBQUE7YUFDWCxNQUFNLENBQUMsUUFBUCxDQUFnQixRQUFoQixDQUF5QixDQUFDLFFBQTFCLENBQUEsQ0FBb0MsQ0FBQyxXQUFyQyxDQUFpRCxRQUFqRCxFQURXO0lBQUEsQ0FBRixDQUFYLEVBRUcsSUFGSCxDQUFBLENBQUE7V0FJQSxVQUFBLENBQVcsQ0FBRSxTQUFBLEdBQUE7YUFDWCxNQUFNLENBQUMsUUFBUCxDQUFnQixRQUFoQixDQUF5QixDQUFDLFFBQTFCLENBQUEsQ0FBb0MsQ0FBQyxXQUFyQyxDQUFpRCxRQUFqRCxFQURXO0lBQUEsQ0FBRixDQUFYLEVBRUcsSUFGSCxFQUxVO0VBQUEsQ0FOWixDQUFBO0FBQUEsRUFlQSxTQUFBLENBQUEsQ0FmQSxDQUFBO0FBQUEsRUFpQkEsTUFBTSxDQUFDLEVBQVAsQ0FBVSxPQUFWLEVBQW1CLFNBQUEsR0FBQTtBQUNqQixJQUFBLFlBQUEsQ0FBQSxDQUFBLENBQUE7QUFBQSxJQUVBLFVBQ0UsQ0FBQyxRQURILENBQ1ksT0FEWixDQUVFLENBQUMsV0FGSCxDQUVlLGFBRmYsQ0FGQSxDQUFBO0FBQUEsSUFLQSxNQUNFLENBQUMsUUFESCxDQUNZLFFBRFosQ0FFRSxDQUFDLFFBRkgsQ0FBQSxDQUdFLENBQUMsV0FISCxDQUdlLFFBSGYsQ0FMQSxDQUFBO1dBU0EsQ0FBQSxDQUFFLFlBQUYsQ0FDRSxDQUFDLFFBREgsQ0FDWSxRQURaLENBRUUsQ0FBQyxRQUZILENBQUEsQ0FHRSxDQUFDLFdBSEgsQ0FHZSxRQUhmLEVBVmlCO0VBQUEsQ0FBbkIsQ0FqQkEsQ0FBQTtBQUFBLEVBZ0NBLE1BQU0sQ0FBQyxFQUFQLENBQVUsT0FBVixFQUFtQixTQUFBLEdBQUE7QUFDakIsSUFBQSxZQUFBLENBQUEsQ0FBQSxDQUFBO0FBQUEsSUFFQSxVQUNFLENBQUMsUUFESCxDQUNZLE9BRFosQ0FFRSxDQUFDLFdBRkgsQ0FFZSxhQUZmLENBRkEsQ0FBQTtBQUFBLElBS0EsTUFDRSxDQUFDLFFBREgsQ0FDWSxRQURaLENBRUUsQ0FBQyxRQUZILENBQUEsQ0FHRSxDQUFDLFdBSEgsQ0FHZSxRQUhmLENBTEEsQ0FBQTtXQVNBLENBQUEsQ0FBRSxZQUFGLENBQ0UsQ0FBQyxRQURILENBQ1ksUUFEWixDQUVFLENBQUMsUUFGSCxDQUFBLENBR0UsQ0FBQyxXQUhILENBR2UsUUFIZixFQVZpQjtFQUFBLENBQW5CLENBaENBLENBQUE7U0ErQ0EsTUFBTSxDQUFDLEVBQVAsQ0FBVSxPQUFWLEVBQW1CLFNBQUEsR0FBQTtBQUNqQixJQUFBLFlBQUEsQ0FBQSxDQUFBLENBQUE7QUFBQSxJQUVBLFVBQ0UsQ0FBQyxRQURILENBQ1ksT0FEWixDQUVFLENBQUMsV0FGSCxDQUVlLGFBRmYsQ0FGQSxDQUFBO0FBQUEsSUFLQSxNQUNFLENBQUMsUUFESCxDQUNZLFFBRFosQ0FFRSxDQUFDLFFBRkgsQ0FBQSxDQUdFLENBQUMsV0FISCxDQUdlLFFBSGYsQ0FMQSxDQUFBO1dBU0EsQ0FBQSxDQUFFLFlBQUYsQ0FDRSxDQUFDLFFBREgsQ0FDWSxRQURaLENBRUUsQ0FBQyxRQUZILENBQUEsQ0FHRSxDQUFDLFdBSEgsQ0FHZSxRQUhmLEVBVmlCO0VBQUEsQ0FBbkIsRUFoRFM7QUFBQSxDQUFYLENBQUE7O0FBQUEsT0FrRU8sQ0FBQyxRQUFSLEdBQW1CLFFBbEVuQixDQUFBOzs7O0FDQ0EsSUFBQSxVQUFBOztBQUFBLFVBQUEsR0FBYSxPQUFBLENBQVEsY0FBUixDQUFiLENBQUE7O0FBQUEsQ0FFQSxDQUFFLFVBQVUsQ0FBQyxRQUFiLENBRkEsQ0FBQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbml0UGFnZSA9IC0+XG4gICRuYXZpZ2F0b3IgPSAkKCcubmF2aWdhdG9yJylcbiAgJHN0ZXAxICAgICA9ICQoJy5zdGVwLTEnKVxuICAkc3RlcDIgICAgID0gJCgnLnN0ZXAtMicpXG4gICRzdGVwMyAgICAgPSAkKCcuc3RlcC0zJylcbiAgJGFuaW1hdGlvbiA9ICQoJy5hbmltYXRpb24nKVxuXG4gIG5hdmlnYXRvciA9IC0+XG4gICAgc2V0VGltZW91dCAoIC0+XG4gICAgICAkc3RlcDIuYWRkQ2xhc3MoJ2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG4gICAgKSwgMzAwMFxuXG4gICAgc2V0VGltZW91dCAoIC0+XG4gICAgICAkc3RlcDMuYWRkQ2xhc3MoJ2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG4gICAgKSwgNTAwMFxuXG4gIG5hdmlnYXRvcigpXG5cbiAgJHN0ZXAxLm9uIFwiY2xpY2tcIiwgLT5cbiAgICBjbGVhclRpbWVvdXQoKVxuXG4gICAgJGFuaW1hdGlvblxuICAgICAgLmFkZENsYXNzIFwic3RlcDFcIlxuICAgICAgLnJlbW92ZUNsYXNzIFwic3RlcDIgc3RlcDNcIlxuICAgICRzdGVwMVxuICAgICAgLmFkZENsYXNzKCdhY3RpdmUnKVxuICAgICAgLnNpYmxpbmdzKClcbiAgICAgIC5yZW1vdmVDbGFzcygnYWN0aXZlJylcbiAgICAkKCcuY29udGVudC0xJylcbiAgICAgIC5hZGRDbGFzcygnYWN0aXZlJylcbiAgICAgIC5zaWJsaW5ncygpXG4gICAgICAucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG5cbiAgJHN0ZXAyLm9uIFwiY2xpY2tcIiwgLT5cbiAgICBjbGVhclRpbWVvdXQoKVxuXG4gICAgJGFuaW1hdGlvblxuICAgICAgLmFkZENsYXNzIFwic3RlcDJcIlxuICAgICAgLnJlbW92ZUNsYXNzIFwic3RlcDEgc3RlcDNcIlxuICAgICRzdGVwMlxuICAgICAgLmFkZENsYXNzKCdhY3RpdmUnKVxuICAgICAgLnNpYmxpbmdzKClcbiAgICAgIC5yZW1vdmVDbGFzcygnYWN0aXZlJylcbiAgICAkKCcuY29udGVudC0yJylcbiAgICAgIC5hZGRDbGFzcygnYWN0aXZlJylcbiAgICAgIC5zaWJsaW5ncygpXG4gICAgICAucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG5cbiAgJHN0ZXAzLm9uIFwiY2xpY2tcIiwgLT5cbiAgICBjbGVhclRpbWVvdXQoKVxuXG4gICAgJGFuaW1hdGlvblxuICAgICAgLmFkZENsYXNzIFwic3RlcDNcIlxuICAgICAgLnJlbW92ZUNsYXNzIFwic3RlcDEgc3RlcDJcIlxuICAgICRzdGVwM1xuICAgICAgLmFkZENsYXNzKCdhY3RpdmUnKVxuICAgICAgLnNpYmxpbmdzKClcbiAgICAgIC5yZW1vdmVDbGFzcygnYWN0aXZlJylcbiAgICAkKCcuY29udGVudC0zJylcbiAgICAgIC5hZGRDbGFzcygnYWN0aXZlJylcbiAgICAgIC5zaWJsaW5ncygpXG4gICAgICAucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG5cblxuXG5cbmV4cG9ydHMuaW5pdFBhZ2UgPSBpbml0UGFnZSIsIiN0aGlzIGlzIHRoZSBtYWluIGZpbGUgdGhhdCBwdWxscyBpbiBhbGwgb3RoZXIgbW9kdWxlc1xuYW5pbWF0aW9ucyA9IHJlcXVpcmUoXCIuL2FuaW1hdGlvbnNcIilcblxuJChhbmltYXRpb25zLmluaXRQYWdlKSJdfQ==
