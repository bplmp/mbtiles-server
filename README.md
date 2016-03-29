mbtiles-server
==============
(This fork makes it easier to add mbtiles-server into your own server.)

Wow. It's really easy to serve mbtiles files without having to host them with Mapbox, just serve them yourself.

First, just create an mbtiles file (via [https://www.mapbox.com/tilemill/](Tilemill) probably cause it's freaking amazing).

Then, place your tiles under a folder `tiles` in the root of your server.

Add whatever logic you want to your server. Then install packages and run the server:

1. `npm install`
1. `node server.js`

Visit [http://localhost:3000/tiles/mysampletiles/3/1/2.png](http://localhost:3000/tiles/mysampletiles/3/1/2.png) to see your tiles.

(Note: the `mysampletiles.mbtiles` file I've included is just an empty file for clarification purposes.)

If you're using Leaflet on your webpage you can serve the tiles like this:

    var map = L.map('map').setView([40.742258, -74.002756], 11);

    var mySampleTiles = L.tileLayer('/tiles/mysampletiles/{z}/{x}/{y}.png', {
      maxZoom: 18
    });
    mySampleTiles.addTo(map)
