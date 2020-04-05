import { Deck } from './Deck';
export class Decks extends Collection {
    constructor(...args) {
        super(...args);
    }
    /* -------------------------------------------- */

    /** @override */
    get object() {
        return CONFIG.Deck.entityClass;
    }

    /* -------------------------------------------- */
    /*  Sheet Registration Methods                  */
    /* -------------------------------------------- */

    /**
     * Register an Actor sheet class as a candidate which can be used to display Actors of a given type
     * See EntitySheetConfig.registerSheet for details
     * @static
     *
     * @example <caption>Register a new ActorSheet subclass for use with certain Actor types.</caption>
     * Actors.registerSheet("dnd5e", ActorSheet5eCharacter, { types: ["character"], makeDefault: true });
     */
    static registerSheet(...args) {
        EntitySheetConfig.registerSheet(Deck, ...args);
    }

    /* -------------------------------------------- */

    /**
     * Unregister an Actor sheet class, removing it from the list of avaliable sheet Applications to use
     * See EntitySheetConfig.unregisterSheet for details
     * @static
     *
     * @example <caption>Deregister the default ActorSheet subclass to replace it with others.</caption>
     * Actors.unregisterSheet("core", ActorSheet);
     */
    static unregisterSheet(...args) {
        EntitySheetConfig.unregisterSheet(Deck, ...args);
    }

    /* -------------------------------------------- */

    /**
     * Return an Array of currently registered sheet classes for this Entity type
     * @type {Array}
     */
    static get registeredSheets() {
        // TODO: implement registered sheets on Decks
        // return Object.values(CONFIG.Item.sheetClasses).reduce((arr, classes) => {
        //   return arr.concat(Object.values(classes).map(c => c.cls));
        // }, []);
        return [];
    }
}