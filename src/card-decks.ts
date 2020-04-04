/**
 * This is your TypeScript entry file for Foundry VTT.
 * Register custom settings, sheets, and constants using the Foundry API.
 * Change this heading to be more descriptive to your module, or remove it.
 * Author: [your name]
 * Content License: [copyright and-or license] If using an existing system
 * 					you may want to put a (link to a) license or copyright
 * 					notice here (e.g. the OGL).
 * Software License: [your license] Put your desired license here, which
 * 					 determines how others may use and modify your module
 */
// Import TypeScript modules
// import { registerSettings } from './module/settings';
// import { preloadTemplates } from './module/preloadTemplates';
// import { ElapsedTime } from './module/ElapsedTime';
// import { PseudoClock } from './module/PseudoClock';
// import { DTMod } from './module/calendar/DTMod';
// import { runDateTimeTests } from "./module/calendar/DTSTests"
// import { DTCalc } from './module/calendar/DTCalc';
// import { calendars } from './module/calendar/DTCalc';
// import { DateTime } from './module/calendar/DateTime';
// import {SimpleCalendarDisplay} from "./module/display/Display"
// import { CountDown } from './module/display/CountDown';
// import { CalendarEditor } from './module/calendarEdtior/CalendarEdtitor';
// import 'foundry-pc-types'
/* ------------------------------------ */
/* Initialize module					*/
/* ------------------------------------ */
Hooks.once('init', async function () {
    CONFIG.ui.decks = DeckDirectory;
});
/* ------------------------------------ */
/* Setup module							*/
/* ------------------------------------ */
Hooks.once('setup', function () {
    // Do anything after initialization but before
    // ready
});
/* ------------------------------------ */
/* When ready							*/
/* ------------------------------------ */
Hooks.once('ready', function () {
    (<HTMLElement>document.querySelector("#sidebar-tabs > a.item[data-tab='items']")).style.border = '10px solid red';
});