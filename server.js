var express = require("express");
var app = express();
var MBTiles = require('mbtiles');

var port = 3000;

app.get('/tiles/:tileName/:z/:x/:y.*', function (req, res) {
  var mbtilesLocation = 'tiles/' + req.params.tileName + '.mbtiles';
  new MBTiles(mbtilesLocation, function(err, mbtiles) {
    if (err) throw err;
    var extension = req.param(0);
    switch (extension) {
      case "png": {
        mbtiles.getTile(req.param('z'), req.param('x'), req.param('y'), function(err, tile, headers) {
          if (err) {
            res.status(404).send('Tile rendering error: ' + err + '\n');
          } else {
            res.header("Content-Type", "image/png")
            res.send(tile);
          }
        });
        break;
      }
      case "grid.json": {
        mbtiles.getGrid(req.param('z'), req.param('x'), req.param('y'), function(err, grid, headers) {
          if (err) {
            res.status(404).send('Grid rendering error: ' + err + '\n');
          } else {
            res.header("Content-Type", "text/json")
            res.send(grid);
          }
        });
        break;
      }
    }
  });
});

// actually create the server
app.listen(port);
