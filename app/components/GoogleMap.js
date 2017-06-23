var React = require('react');

var map;
function initGoogleMap(){
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
    });
}

function Marker(props){
    var marker =  new google.maps.Marker({
        position: {lat: props.lat, lng: props.lng},
        map: map
    });
    marker.addListener(function(){
        console.log('click...');
    });
    return null;
}

class GoogleMap extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        initGoogleMap();
    }

    render() {
        return (
            <div id='map'>
                <Marker lat={-25.363} lng={131.044}/>
            </div>
        )
    }
}

module.exports = GoogleMap;





