import axios from 'axios';


export async function routeCalc(start, end, gas) {
    const codeURL = `https://api.openrouteservice.org/geocode/search?api_key=5b3ce3597851110001cf62484a9f7a73c79d42aeb1ed6d621defc8ef&text=`;
    const routeURL = `https://api.openrouteservice.org/v2/directions/driving-car?api_key=5b3ce3597851110001cf62484a9f7a73c79d42aeb1ed6d621defc8ef&start=`

    try {
        const startLatLongResponse = await axios.get(codeURL + start);
        const startLatLong = startLatLongResponse.data.features[0].geometry.coordinates;

        const endLatLongResponse = await axios.get(codeURL + end);
        const endLatLong = endLatLongResponse.data.features[0].geometry.coordinates;

        console.log(startLatLong);
        console.log(endLatLong);

        const routeRes = await axios.get(routeURL + startLatLong[0] + ',' + startLatLong[1] + '&end=' + endLatLong[0] + ',' + endLatLong[1]);
        console.log(routeRes.data);

        return routeRes.data;
    } catch (error) {
        console.error('There was an error', error);
        throw error;
    }
}