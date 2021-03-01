'use strict';

import React from 'react';
import { render } from 'react-dom';
import Router from './routers';
import 'normalize.css';

import '~Sass/style.scss';

render(
    <Router />, document.getElementById('root')
);