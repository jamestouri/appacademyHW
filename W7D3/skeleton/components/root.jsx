import React from 'react';
import { Provider } from 'react-redux';
import fetchSearchGiphys from '../util/api_util';

import GiphysSearchContainer from './giphys_search_container';

const Root = () => (
  
    <h1>Hi</h1>
    window.fetch = fetchSearchGiphys;


)
