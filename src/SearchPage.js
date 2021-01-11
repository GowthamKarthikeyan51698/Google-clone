import React from "react";
import "./SearchPage.css"
import { useStateValue } from "./StateProvider";
import useGoogleSearch from "./useGoogleSearch";
import response from "./response.js";
import { Link } from "react-router-dom";
import Search from "./pages/Search"
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";

function SearchPage() {
    const[{ term }] = useStateValue();
    // LIVE API CALL
    const { data } = useGoogleSearch(term);

    // Mock API CALL
    //const data = Response;


    console.log(data)
    return (
        <div className = "searchPage">
            <div className='searchPage_header'>
                <Link to="/">
                <img className = "searchPage_logo" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt=""/>
                </Link>
                <div className='searchPage_headerBody'>
                    <Search hideButtons />

                <div className='searchPage_options'>
                    <div className = "searchPage_optionsLeft">
                        <div className = 'searchPage_options'>
                            <SearchIcon />
                            <Link to= "/all">All</Link>
                        </div>
                        <div className = 'searchPage_options'>
                            <DescriptionIcon />
                            <Link to= "/news">News</Link>
                        </div>
                        <div className = 'searchPage_options'>
                            <ImageIcon />
                            <Link to= "/images">Images</Link>
                        </div>
                        <div className = 'searchPage_options'>
                            <LocalOfferIcon />
                            <Link to= "/shopping">Shopping</Link>
                        </div>
                        <div className = 'searchPage_options'>
                            <RoomIcon />
                            <Link to= "/maps">Maps</Link>
                        </div>
                        <div className = 'searchPage_options'>
                            <MoreVertIcon />
                            <Link to= "/more">more</Link>
                        </div>
                    </div>
                    <div className = "searchPage_optionsRight">
                        <div className = 'searchPage_options'>
                            <Link to="/settings">Settings</Link>
                        </div>
                        <div className = 'searchPage_options'>
                            <Link to="/tools">Tools</Link>
                    </div>

                  </div>
                </div>
              </div>
            </div>
        {term && (
        <div class="searchPage_results">
          <p className="searchPage_resultCount">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime}
            seconds) for {term}
          </p>
          {data?.items.map(item => (
            <div className = "searchPage_result">
                <a href={item.link}>
                {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src &&(
                    <img className = "searchPage_resultImage" src={item.pagemap?.cse_image[0]?.src} alt="" />
                )}

                {item.displayLink}
                </a>
                <a className = "searchPage_resultTitle" href={item.link}>
                    <h2>{item.title}</h2>
                </a>
                <p className = "searchPage_resultSnippet">
                    {item.snippet}
                </p>
            </div>
          ))}

        </div>
      )}
    </div>
  );
}

export default SearchPage;


// To create custom search
// // https://developers.google.com/custom-search/v1/using_rest


//to fix a site to search
// // https://cse.google.com/cse/create/new

