import {useEffect, useState} from 'react'


export const useCurrentLocation = () => {
  const [lat, setLat] = useState<number | null>(null)
  const [lon, setLon] = useState<number | null>(null)

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude)
        setLon(position.coords.longitude)
      })
    }
  }, [])

  return {lat, lon}
}
