var tileAtlas = new Image();
tileAtlas.src = './assets/atlas.png';
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var map = {
  cols: 10,
  rows: 10,
  tsize: 48,
  tiles: [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2
  ],
  getTile: function (row, col) {
    return this.tiles[col * map.rows + row];
  }
}


tileAtlas.onload = function () {
  for (var r = 0; r < map.rows; r++) {
    for (var c = 0; c < map.cols; c++) {
      var tile = map.getTile(r, c);
      if (tile !== 0) {
        console.log((tile - 1) * map.tsize);
        context.drawImage(
          tileAtlas,
          (tile - 1) * map.tsize,
          0,
          map.tsize,
          map.tsize,
          r * map.tsize,
          c * map.tsize,
          map.tsize,
          map.tsize
        );
      }
    }
  }
};