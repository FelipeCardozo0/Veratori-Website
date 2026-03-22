import fs from 'fs';
import { geoContains, geoAlbersUsa } from 'd3-geo';
import * as topojson from 'topojson-client';

const atlasRaw = fs.readFileSync('node_modules/us-atlas/nation-10m.json');
const atlas = JSON.parse(atlasRaw);
const nation = topojson.feature(atlas, atlas.objects.nation);

const projection = geoAlbersUsa()
  .scale(800)
  .translate([400, 250]);

const width = 800;
const height = 500;
const step = 8; // denser grid

const dots = [];

for (let y = 0; y < height; y += step) {
  for (let x = 0; x < width; x += step) {
    const coords = projection.invert([x, y]);
    if (coords && geoContains(nation, coords)) {
      dots.push([Math.round(x), Math.round(y)]);
    }
  }
}

// Compute standard coordinates for Austin, Atlanta, NY:
// [-97.7431, 30.2672] => Austin
// [-84.3880, 33.7490] => Atlanta
// [-74.0060, 40.7128] => NY
const austin = projection([-97.7431, 30.2672]);
const atlanta = projection([-84.3880, 33.7490]);
const newyork = projection([-74.0060, 40.7128]);

const output = {
  dots,
  cities: {
    austin: [Math.round(austin[0]), Math.round(austin[1])],
    atlanta: [Math.round(atlanta[0]), Math.round(atlanta[1])],
    newyork: [Math.round(newyork[0]), Math.round(newyork[1])]
  }
};

fs.mkdirSync('src/data', { recursive: true });
fs.writeFileSync('src/data/us-map-dots.json', JSON.stringify(output, null, 2));
console.log(`Saved ${dots.length} dots!`);
