import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = <string>process.env.MAPBOX_ACCESS_TOKEN;

export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  displayContent(): string;
}

export class Map {
  private map: mapboxgl.Map;
  private bounds: mapboxgl.LngLatBounds;

  constructor(className: string) {
    this.map = new mapboxgl.Map({
      container: <HTMLElement>document.querySelector(`.${className}`),
      style: "mapbox://styles/mapbox/streets-v11",
    });
    this.bounds = new mapboxgl.LngLatBounds();

    this.config();
  }

  private config() {
    this.map.addControl(new mapboxgl.NavigationControl(), "top-right");
  }

  addMarker(mappable: Mappable): void {
    new mapboxgl.Marker()
      .setLngLat(mappable.location)
      .setPopup(
        new mapboxgl.Popup({ offset: 30 }).setText(mappable.displayContent())
      )
      .addTo(this.map);

    this.bounds.extend([mappable.location.lng, mappable.location.lat]);

    this.map.fitBounds(this.bounds, {
      padding: {
        top: 200,
        bottom: 150,
        left: 100,
        right: 100,
      },
    });
  }
}
