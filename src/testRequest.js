import axios from "axios";

 const fetchData = async () => {
    const username = ' 11171026';
    const password = '60-dayfreetrial';
     const authString = `${username}:${password}`;
    const encodedAuthString = btoa(authString);
    try {
        const response = await axios.get('https://holly-molly-back.tyavd.net/api/test', {
            headers: {
                'Authorization': `Basic ${encodedAuthString}`
            }
        })
        if (response.data) {
          console.log(response.data);
        } else {
          console.log('No data received');
        }
        
    } catch (error) {
        console.error(error)
    }
  }