import React, { useEffect, useRef } from "react";

const GoogleMap = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const loadGoogleMaps = () => {
      if (!window.google) {
        const script = document.createElement("script");
        script.src = `https://maps.gomaps.pro/maps/api/js?key=AlzaSyqcqHYuc5-lvm4BoU1NbgItE0HIxJ5SgTz&callback=initMap`;
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
        script.onload = () => initMap();
      } else {
        initMap();
      }
    };

    const initMap = () => {
      if (mapRef.current) {
        new window.google.maps.Map(mapRef.current, {
          center: {  lat: 21.1458, lng: 79.0882 }, // Default location (San Francisco)
          zoom: 12,
        });
      }
    };

    loadGoogleMaps();
  }, []);

  return <div ref={mapRef} style={{ width: "100%", height: "400px" }}></div>;
};

export default GoogleMap;
