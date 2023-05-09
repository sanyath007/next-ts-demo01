import { useEffect } from 'react';
import * as ReactLeaflet from 'react-leaflet'
import * as Leaflet from 'leaflet'
import 'leaflet/dist/leaflet.css'

const { MapContainer } = ReactLeaflet;

export default function DynamicMap({ children, ...props }: { children: any }) {
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

    return (
        <MapContainer>
            {children(ReactLeaflet, Leaflet)}
        </MapContainer>
    )
}