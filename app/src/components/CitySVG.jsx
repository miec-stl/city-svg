import React, { Component } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'

const StlLatitude = 38.627003;
const StlLongitude = -90.199402

class CitySVG extends Component {
    constructor(props) {
        super(props);        
    }

    componentDidMount() {
        const MapObject = L.map(this.props.MapId).setView([StlLatitude, StlLongitude], 12);
        this.setState({Map:MapObject}, () => {
            this.ReadGeoJsonFile(this.props.GeoJsonData);
        });
    }

    ReadGeoJsonFile(GeoJsonData) {
        L.geoJSON(GeoJsonData, {
            style: (feature) => {
                const Ward = feature.properties.WARD10;

                // TODO: Find better way to randomize ward coloring
                // Also, this is where we'll do styling for turnout proportion etc.
                const Color_R = (Ward % 3 * 60);
                const Color_B = (Ward % 4 * 40);
                const Color_G = (Ward % 5 * 20);
                const RBGString = `rgb(${Color_R},${Color_G},${Color_B})`;

                return {weight:1, color:RBGString};
            },

            onEachFeature: (feature, layer) => {
                // TODO: Could add data pop-ups to each feature
            }
        }).addTo(this.state.Map);
    }

    render() {      
        const MapDivStyle = {
            width:'100%',
            height:'600px',
            border:'1px solid black',
            overflow:'none'
        } 

        if(this.props.GeoJsonData === undefined || this.props.MapId === undefined) {
            console.error("GeoJSONPath missing from CitySVG Component");
            return <div>Error</div>;
        }

        return <div>
            <div style={MapDivStyle} id={this.props.MapId}></div>
        </div>;
    }
}

export default CitySVG;