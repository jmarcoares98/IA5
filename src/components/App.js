import React from 'react';
import NavBar from './NavBar.js';
import AppMode from './../AppMode.js';

const modeTitle = {};
modeTitle[AppMode.LOGIN] = "welcome to IA5: login";
modeTitle[AppMode.DISPLAY] = "display data";
modeTitle[AppMode.DISPLAY_ADDDATA] = "add data";
modeTitle[AppMode.CONSTRUCTION] = "under construction";