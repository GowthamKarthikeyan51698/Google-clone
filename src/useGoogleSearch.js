import {useState , useEffect } from "react"
import API_KEY from "./keys";

const CONTEXT_KEY = "41af3629de8547508"

const useGoogleSearch = (term) => {
    const [data , setData] = useState(null);

    useEffect(() => {
        const fetchData = async() => {
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
                )
            .then(response => response.json())
            .then(result => {
                setData(result)
            })
        }

        fetchData();

    }, [term])

    return { data }
};

export default useGoogleSearch

// term : data layer variable

// useEffect : gets all the search results using google and takes us to
// the search results page

// line:12  ,  q : query

// when we hit enter in our search engine , it pushes the search term into the data
// layer and we pull it by using useStateValues then we use a custom hook to pass that
// term to google-custom-search-API and we return data as an object.