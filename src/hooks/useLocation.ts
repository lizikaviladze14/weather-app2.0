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

export const useLocation = (address: string): LocationData => {
  const [locationData, setLocationData] = useState<LocationData>({
    lat: 0,
    lon: 0,
    cityName: "",
    countryName: "",
    isLoading: false,
    error: null,
  });

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        setLocationData((prevState) => ({
          ...prevState,
          isLoading: true,
        }));

        if (!address) {
          setLocationData({
            lat: mockData.lat,
            lon: mockData.lon,
            cityName: mockData.cityName,
            countryName: mockData.countryName,
            isLoading: false,
            error: null,
          });
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
  }, [address]);

  return locationData;
};
