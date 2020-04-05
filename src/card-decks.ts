/**
 * This is your TypeScript entry file for Foundry VTT.
 * Register custom settings, sheets, and constants using the Foundry API.
 * Change this heading to be more descriptive to your module, or remove it.
 * Author: Michael Kimball
 * Software License: MIT
 */
import { DeckDirectory } from './DeckDirectory';
import { Deck } from './Deck';
import { Decks } from './Decks';
import { CardGame } from './CardGame';
/* ------------------------------------ */
/* Initialize module					*/
/* ------------------------------------ */
Hooks.once('init', async function () {
    CONFIG.ui.decks = DeckDirectory;
    CONFIG.Deck = {
        entityClass: Deck,
        collection: Decks,
        sheetClasses: {},
        sidebarIcon: "fas fa-user"
    };
    if(game.data.decks === undefined){
        game.data.decks = [];
    }
    (<CardGame> game).decks = new Decks(game.data.decks).initialize();
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