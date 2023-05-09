import { useEffect, useState } from "react"
import { Polygon } from "react-leaflet"
import { Coordinate } from "../../models/Coordinate"

export default function BorderLine({ province, ...props }: { province: any }) {
    const [coordinates, setCoordinates] = useState<Coordinate[]>([])

    useEffect(() => {
        if (province) {
            const coords = province.geometry.coordinates[0][0].map((co: any) => ({ lng: co[0], lat: co[1] }))

            setCoordinates(coords);
        }
    }, [province])

    return coordinates.length > 0
        ? (
            <Polygon
                positions={coordinates}
                fillColor={province.color && province.color}
            />
        ) : null
}