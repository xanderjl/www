import type { FeatureCollection, LineString } from "geojson";

export type GeoJSON = FeatureCollection<
  LineString,
  {
    coordTimes: string[];
    name: string;
    time: string;
  }
>;

export const getGeoData = (geoJSON: GeoJSON) => {
  const coordinates = geoJSON.features[0].geometry.coordinates;
  const coordTimes = geoJSON.features[0].properties.coordTimes;
  const name = geoJSON.features[0].properties.name;
  const time = geoJSON.features[0].properties.time;
  const minX = Math.min(...coordinates.map((c) => c[0]));
  const maxX = Math.max(...coordinates.map((c) => c[0]));
  const minY = Math.min(...coordinates.map((c) => c[1]));
  const maxY = Math.max(...coordinates.map((c) => c[1]));
  const minZ = Math.min(...coordinates.map((c) => c[2]));
  const maxZ = Math.max(...coordinates.map((c) => c[2]));

  return {
    coordTimes,
    coordinates,
    maxX,
    maxY,
    maxZ,
    minX,
    minY,
    minZ,
    name,
    time,
  };
};
