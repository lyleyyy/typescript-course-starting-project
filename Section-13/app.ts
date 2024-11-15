import axios from "axios";

const form = document.querySelector("form")!;
const addressInput = <HTMLInputElement>document.getElementById("address");

const GOOGLE_API_KEY = `AIzaSyB6at91qvl0aGx-3epwkCtL-d9kCyDRNJw`;

type GoogleGeocodingResponse = {
  results: {
    formatted_address: string;
    geometry: { location: { lat: number; lng: number } };
  }[];
  status: "OK" | "ZERO_RESULTS";
};

function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput!.value;
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
    enteredAddress
  )}&key=${GOOGLE_API_KEY}`;

  (async () => {
    try {
      const res = await axios.get<GoogleGeocodingResponse>(url);
      if (res.data.status !== "OK") {
        throw new Error("Could not fetch location.");
      }

      const coordinates = res.data.results[0].geometry.location;
      const addressName = res.data.results[0].formatted_address;

      // Request needed libraries.
      //@ts-ignore
      const { Map } = (await google.maps.importLibrary(
        "maps"
      )) as google.maps.MapsLibrary;
      const { AdvancedMarkerElement } = (await google.maps.importLibrary(
        "marker"
      )) as google.maps.MarkerLibrary;

      // The map, centered at the coord
      const map = new Map(document.getElementById("map") as HTMLElement, {
        zoom: 13,
        center: coordinates,
        mapId: "DEMO_MAP_ID",
      });

      // the marker of coord
      new AdvancedMarkerElement({
        map: map,
        position: coordinates,
        title: addressName,
      });
    } catch (err) {
      console.log(err);
    }
  })();
}

form.addEventListener("submit", searchAddressHandler);
