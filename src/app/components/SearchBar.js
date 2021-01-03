import React from 'react'
import { InputAdornment, Input } from '@material-ui/core';
import { Search } from '@material-ui/icons';

import './SearchBar.css';

const SearchBar = (props) => (
    <div className='inputSearch'>
        <Input 
            type='text'
            placeholder="Search"
            className="searchInput" 
            name="search" 
            value={ props.search } 
            onChange={ e => props.setSearch(e.target.value) }
            startAdornment={
                <InputAdornment position="start">
                    <Search/>
                </InputAdornment>
            }
        />
        <button type='button' className="searchButton" onClick={()=>props.setShowAdd(true)}>New</button>
    </div>
)

export default SearchBar