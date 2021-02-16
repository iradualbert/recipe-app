import React from "react";

const SearchBar = ({
    handleSubmit,
    query,
    isLoading,
    setQuery
}) => {
    return (
        <form onSubmit={handleSubmit}>
            <input 
                value={query}
                className="form-control"
                placeholder="Search Recipe"
                name="query"
                disabled={isLoading}
                onChange={(event) => setQuery(event.target.value)}
            />   
            <input
                disabled={isLoading}
                type="submit"
                className="btn"
            />
        </form>
    )
};

export default SearchBar;