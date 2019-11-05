import React, { Component } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'

const StlLatitude = 38.627003;
const StlLongitude = -90.199402

const TurnoutData = {
    Ward1:21.3,
    Ward2:24.4,
    Ward3:20.5,
    Ward4:20.7,
    Ward5:19.4,
    Ward6:26.6,
    Ward7:25.1,
    Ward8:31.8,
    Ward9:22.7,
    Ward10:24,
    Ward11:21.4,
    Ward12:29.5,
    Ward13:23.8,
    Ward14:22.9,
    Ward15:30.9,
    Ward16:33.0,
    Ward17:21.3,
    Ward18:21.1,
    Ward19:19.7,
    Ward20:19.8,
    Ward21:23.4,
    Ward22:19.4,
    Ward23:29.0,
    Ward24:26.4,
    Ward25:17.7,
    Ward26:25,
    Ward27:20.4,
    Ward28:29.4
}

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
                const WardNum = feature.properties.WARD10;

                // TODO: Find better way to randomize ward coloring
                // Also, this is where we'll do styling for turnout proportion etc.
                const Color_R = (WardNum % 3 * 60);
                const Color_B = (WardNum % 4 * 40);
                const Color_G = (WardNum % 7 * 20);
                const RBGString = `rgb(${Color_R},${Color_G},${Color_B})`;

                return {
                    color:RBGString,
                    weight:1, 
                    stroke: true
                };
            },

            onEachFeature: (feature, layer) => {
                const WardNum = feature.properties.WARD10;
                const PrecinctNum = feature.properties.PREC10;
                const ThisWardTurnout = TurnoutData["Ward"+WardNum];

                let WardInfo = "<div style='font-weight:bold;'>Ward "+WardNum+" Precinct "+PrecinctNum+"</div>"
                let TurnoutLine = "<p>Turnout in Ward "+WardNum+" was "+ThisWardTurnout+"%</p>";
                let PopupText = WardInfo.concat(TurnoutLine);
                layer.bindPopup(PopupText);
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