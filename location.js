try {
    // Replace with your actual API key
    const apiKey = 'f7519bd179544a6381a60a7e40e43163';

    // Get the public IP address of the user (you can skip this step if you already have the IP)
    const ipResponse = await axios.get('https://api.ipify.org?format=json');
    const ipAddress = ipResponse.data.ip;

    // Call the geolocation API with the IP address
    const locationResponse = await axios.get(`https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}&ip=${ipAddress}`);
    const locationData = locationResponse.data;

    console.log(locationData);
} catch (error) {
    console.error('Error fetching location details:', error.message);
}