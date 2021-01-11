    import React from 'react'
    import './Home.css'
    import { Link } from "react-router-dom";
    import AppsIcon from "@material-ui/icons/Apps";
    import { Avatar} from "@material-ui/core";
    import Search from "./Search"

    function Home() {
        return (
            <div className ='home'>
                <div className = "Home_header">
                    <div className="Home_HeaderLeft">
                        <Link to = 'about'>About</Link>
                        <Link to = 'Store'>Store</Link>
                    </div>
                    <div className="Home_HeaderRight">
                        <Link to = 'Gmail'>Gmail</Link>
                        <Link to = 'Images'>Images</Link>
                        <AppsIcon />
                        <Avatar/>
                    </div>
                </div>
                <div className = "Home_body">
                    <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt=""/>
                    <div className = "Home_inputContainer">
                        <Search />
                    </div>
                </div>

            </div>
        );
    }
    export default Home