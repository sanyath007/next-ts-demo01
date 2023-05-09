import { useEffect, useState } from "react"
import { MapContainer, TileLayer, Marker, Polygon, useMap } from "react-leaflet"
import Leaflet from 'leaflet'
import 'leaflet/dist/leaflet.css'
import mapsData from '../../maps/gadm41_THA_1.json'
import { Coordinate } from "../../models/Coordinate"
import BorderLine from "./border-line"

export function ChangeView({ coordinates }: { coordinates: Coordinate }) {
    const map = useMap()

    map.setView(coordinates, 8)

    return null
}
export default function MapArea(props: any) {
    const [center, setCenter] = useState<Coordinate>({ lat: 15.345690726270774, lng: 102.44428383273782 })
    const [areas, setAreas] = useState<any[]>([])

    useEffect(() => {
        const areas = mapsData.features
                        .filter(province => ["30","31","32","36"].includes(province.properties.CC_1))
                        .map(province => {
                            let color: string = setDefaultColor(province)
                            return { color, ...province }
                        })

        setAreas(areas)
    }, [])

    useEffect(() => {
        (async function init() {
            // delete Leaflet.Icon.Default.prototype._getIconUrl;

            Leaflet.Icon.Default.mergeOptions({
                iconRetinaUrl: 'leaflet/images/marker-icon-2x.png',
                iconUrl: 'leaflet/images/marker-icon.png',
                shadowUrl: 'leaflet/images/marker-shadow.png',
            });
        })();
    }, []);

    const setDefaultColor = (province: any): string => {
        switch(province.properties.CC_1) {
            case "30":
                return ""
                break;
            case "31":
                return "#f6003c"
                break;
            case "32":
                return "#1f640a"
                break;
            case "36":
                return "#fff1ac"
                break;
            default:
                return ""
                break;
        }
    }

    return (
        <div className="p-2">
            <h1 className="title text-3xl">พื้นที่รับผิดชอบ</h1>

            <hr className="my-2" />

            <MapContainer center={[center.lat, center.lng]} zoom={8} style={{ height: '640px' }}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {/* {center.lat && center.lng && (
                    <Marker position={[center.lat, center.lng]} />
                )} */}

                {areas && areas.map((area: any, index: number) => <BorderLine key={index} province={area} />)}

                <ChangeView coordinates={center} />
            </MapContainer>
        </div>
    )
}
