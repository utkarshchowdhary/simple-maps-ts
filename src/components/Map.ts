import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = <string>process.env.MAPBOX_ACCESS_TOKEN;

export class Map {
  private mapbox: mapboxgl.Map;

  constructor(className: string) {
    this.mapbox = new mapboxgl.Map({
      container: <HTMLElement>document.querySelector(`.${className}`),
      style: "mapbox://styles/mapbox/streets-v11",
      center: { lng: 0, lat: 0 },
      zoom: 1,
    });
  }
}
