import React, { useState } from 'react';

const SearchBar = (props) => {
    const [term, setTerm] = useState('');

    const onFormSubmit = (event) => {
        event.preventDefault();

        props.onSubmit(term);
    }

    return (
        <div className="search-bar ui segment" style={{backgroundColor: 'red'}}>
            <form className="ui form" onSubmit={onFormSubmit} style={{backgroundColor:'red'}}>
                <div className="field">
                    <label style={{color:'white'}}> <h2>VideoHooks</h2> </label>
                    <input 
                        type="text"
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                    />
                </div>
            </form>
        </div>
    )
}

export default SearchBar;