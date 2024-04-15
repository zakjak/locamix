'use client'

import { useEffect, useState } from "react";
import { MdLocationPin } from "react-icons/md";


const Location = () => {
  const [coors, setCoors] = useState({})
  const [location, setLocation] = useState({})


  const getLocationCoors = async () => {
    const res = await fetch('https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyBvbF_reVMHKsqo-Douz2M_P9Hw6o3BsF4', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
    })
    const data = await res.json()
    if(res.ok){
      setCoors(data)
    }
  }

  useEffect(() => {
  getLocationCoors()
  getLocationDetails()
  }, [coors?.location?.lat, coors?.location?.lng])

  const getLocationDetails = async () => {
    if(coors){
      const res = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${coors?.location?.lat},${coors.location.lng}&key=AIzaSyBvbF_reVMHKsqo-Douz2M_P9Hw6o3BsF4`)
      const data = await res.json()
      if(res.ok){
        setLocation(data.results)
      }
    }
  }

  return (
    <div className="rounded-full w-[20rem] h-10 flex items-center gap-1">
      {
        location[0]?.formatted_address && (
          <>
            <p>{`${location[0]?.formatted_address.slice(0, 10)}...`}</p>
            <span className="text-lg"><MdLocationPin /></span>
          </>
        )
      }
    </div>
  )
}

export default Location