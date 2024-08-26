import React from "react";
import SearchCSS from './../Search/Search.module.css'

function Search() {
    return (
        <div className={`${SearchCSS.search_wrapper} section`} id="searches">
            <h2> Popular Searches </h2>

            <div className={SearchCSS.cards}>
                <div className={SearchCSS.card}>
                    <i className="ri-search-line"></i>
                    <h3>Sample search, <span>try to come up with something better!</span></h3>
                </div>
                <div className={SearchCSS.card}>
                    <i className="ri-search-line"></i>
                    <h3>Sample search, <span>try to come up with something better!</span></h3>
                </div>
                <div className={SearchCSS.card}>
                    <i className="ri-search-line"></i>
                    <h3>Sample search, <span>try to come up with something better!</span></h3>
                </div>
                <div className={SearchCSS.card}>
                    <i className="ri-search-line"></i>
                    <h3>Sampl search, <span>try to come up with something better!</span></h3>
                </div>
                <div className={SearchCSS.card}>
                    <i className="ri-search-line"></i>
                    <h3>Sample search, <span>try to come up with something better!</span></h3>
                </div>
                <div className={SearchCSS.card}>
                    <i className="ri-search-line"></i>
                    <h3>Sample search, <span>try to come up with something better!</span></h3>
                </div>
            </div>
        </div>
    )
}
export default Search;