// We're going to use this to give instructions on maps use
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
};



export class CustomMap {
  // Marking this as private lets us hide its functions...
  private googleMap: google.maps.Map;

  // The document.getElementById to map here refers to
  // the index.html file's HTML element
  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId)!, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    });
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent()
      })

      infoWindow.open(this.googleMap, marker);
    })
  }
};