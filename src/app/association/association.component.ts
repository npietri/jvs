import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-association",
  templateUrl: "./association.component.html",
  styleUrls: ["./association.component.scss"]
})
export class AssociationComponent implements OnInit {
  // lat: string = "6.969870090484619";
  // lng: string = "43.62046813964844";

  longitude = 6.96987009048461;
  latitude = 43.62046813964844;

  markers = [{ latitude: 43.62046813964844, longitude: 6.96987009048461 }];

  placeMarker(position: any) {
    const lat = position.coords.lat;
    const lng = position.coords.lng;

    this.markers.push({ latitude: lat, longitude: lng });
  }

  constructor() {}

  ngOnInit() {}
}
