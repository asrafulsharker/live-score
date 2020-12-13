const API_KEY="xBjAZp45FYOM4Zw4yQj6995hC8E3";
// GET ALL THE UPCOMING MATCH

export const getMatches=()=>{
    const url=`https://cricapi.com/api/matches?apikey=${API_KEY}`;
    return fetch(url)
    .then((response)=> response.json())
    .catch((error) =>console.log("ERROR: ",error));
}