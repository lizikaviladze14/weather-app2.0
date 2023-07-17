import { useEffect, useState } from "react";
import { mockData } from "../mockdata";

interface LocationData {
  lat: number;
  lon: number;
  cityName: string;
  countryName: string;
  isLoading: boolean;
  error: string | null;
}

const getMockData = (): LocationData => {
  return {
    lat: mockData.lat,
    lon: mockData.lon,
    cityName: mockData.cityName,
    countryName: mockData.countryName,
    isLoading: false,
    error: null,
  };
};

export const useLocation = (
  address: string,
  isMockData = true,
): {
  isLoading: boolean;
  cityName: string;
  isAppLoading: boolean;
  lon: number | null;
  countryName: string;
  error: string | null;
  lat: number | null;
} => {
  const [locationData, setLocationData] = useState<LocationData>({
    lat: 0,
    lon: 0,
    cityName: "",
    countryName: "",
    isLoading: false,
    error: null,
  });
  const [isAppLoading, setIsAppLoading] = useState(true);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        setLocationData((prevState) => ({
          ...prevState,
          isLoading: true,
        }));

        if (isMockData) {
          setLocationData(getMockData());
          setIsAppLoading(false);
        } else {
          let latitude = null;
          let longitude = null;

          if (!address) {
            if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(
                async function (position) {
                  latitude = position.coords.latitude;
                  longitude = position.coords.longitude;

                  const response = await fetch(
                    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${
                      import.meta.env.VITE_LOCATION_API_KEY
                    }`,
                  );
                  const data = await response.json();
                  if (data.error_message) {
                    setLocationData((prevState) => ({
                      ...prevState,
                      error: "Fetch Location: " + data.error_message,
                    }));
                    setIsAppLoading(false);
                    return;
                  }
                  if (data.results.length > 0) {
                    const addressComponents =
                      data.results[0].address_components;
                    const cityComponent = addressComponents.find(
                      (component: { types: string[] }) =>
                        component.types.includes("locality"),
                    );
                    const countryComponent = addressComponents.find(
                      (component: { types: string[] }) =>
                        component.types.includes("country"),
                    );

                    if (cityComponent && countryComponent) {
                      const city = cityComponent.long_name;
                      const country = countryComponent.long_name;
                      setLocationData({
                        lat: latitude,
                        lon: longitude,
                        cityName: city,
                        countryName: country,
                        isLoading: false,
                        error: null,
                      });
                    } else {
                      console.log("City or country not found");
                    }
                  } else {
                    console.log("City not found");
                  }
                  setIsAppLoading(false);
                },
                function () {
                  setLocationData(getMockData());
                  setIsAppLoading(false);
                },
              );
            }
          } else {
            const response = await fetch(
              `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
                address,
              )}&key=${import.meta.env.VITE_LOCATION_API_KEY}`,
            );
            const data = await response.json();

            if (data.status === "OK" && data.results.length > 0) {
              const { lat, lng } = data.results[0].geometry.location;
              setLocationData({
                lat,
                lon: lng,
                cityName: data.results[0].address_components[0].short_name,
                countryName:
                  data.results[0].address_components[
                    data.results[0].address_components.length - 1
                  ].long_name,
                isLoading: false,
                error: null,
              });
            } else {
              setLocationData((prevState) => ({
                ...prevState,
                isLoading: false,
                error: "Failed to retrieve location data.",
              }));
            }
          }
        }
      } catch (error) {
        setLocationData((prevState) => ({
          ...prevState,
          isLoading: false,
          error: "An error occurred while fetching location data.",
        }));
        console.error(error);
      }
    };

    fetchLocation();
  }, [address, isMockData]);

  return { ...locationData, isAppLoading };
};
