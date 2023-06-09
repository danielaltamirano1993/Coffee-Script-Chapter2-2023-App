// Generated by CoffeeScript 1.4.0
(function () {
  var game, gfx;

  gfx = {
    init: function () {
      var canvas;
      canvas = document.querySelector("#game");
      this.ctx =
        canvas != null
          ? typeof canvas.getContext === "function"
            ? canvas.getContext("2d")
            : void 0
          : void 0;
      if (!this.ctx) {
        return false;
      }
      this.w = canvas.width;
      this.h = canvas.height;
      return true;
    },
    clear: function () {
      return this.ctx.clearRect(0, 0, this.w, this.h);
    },
    load: function (onload) {
      this.sprites = new Image();
      this.sprites.src = "resources/sprites.png";
      return (this.sprites.onload = function () {
        return onload();
      });
    },
    drawSprite: function (col, row, x, y) {
      return this.ctx.drawImage(
        this.sprites,
        col * 24,
        row * 24,
        24,
        24,
        x,
        y,
        24,
        24
      );
    },
  };

  game = {
    init: function () {
      if (!gfx.init()) {
        alert("Could not set up game canvas!");
        return;
      }
      gfx.clear();
      return gfx.load(function () {
        var c, col, rand, row, x, y, _i, _results;
        c = gfx.ctx;
        rand = function (max) {
          return Math.floor(Math.random() * max);
        };
        _results = [];
        for (y = _i = 0; _i <= 19; y = ++_i) {
          _results.push(
            (function () {
              var _j, _results1;
              _results1 = [];
              for (x = _j = 0; _j <= 23; x = ++_j) {
                col = rand(7);
                row = rand(2);
                _results1.push(gfx.drawSprite(col, row, x * 24, y * 24));
              }
              return _results1;
            })()
          );
        }
        return _results;
      });
    },
  };

  game.init();
}.call(this));
