import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

import useStyle from './style';

function Map() {
    const classes = useStyle();
    const mobileDv = useMediaQuery('(min-width:600px)')
    const cordinates = { lat: 0, lang: 0 }
    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyCLH-T0h7aKVyJPsxARfF8-hvPbsl71aQI' }}
                defaultCenter={cordinates}
                center={cordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={''}
                onChildClick={''}>

            </GoogleMapReact>

        </div>
    )
}

export default Map