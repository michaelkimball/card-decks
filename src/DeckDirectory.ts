import { Deck } from './Deck';
import { CardGame } from './CardGame';
export class DeckDirectory extends SidebarDirectory {
    static get entity() {
        return "Deck";
    }
  
    static get collection() {
      return (<CardGame>game).decks;
    }
  
      /* -------------------------------------------- */
  
    /**
     * Activate event listeners triggered within the Actor Directory HTML
     */
      activateListeners(html) {
      super.activateListeners(html);
  
      // Drag a token to the canvas
      html.find('li.deck').each((i, li) => {
        li.setAttribute("draggable", true);
        li.addEventListener('dragstart', ev => this._onDragStart(ev), false);
      });
    }
  
    /* -------------------------------------------- */
  
    getData() {
      const data = super.getData();
      data.folderPartial = "templates/sidebar/folder-partial.html";
      data.entityPartial = "templates/sidebar/deck-partial.html";
      return data;
    }
  
    /* -------------------------------------------- */
  
    /**
     * Get the set of ContextMenu options which should be used for Folders in a SidebarDirectory
     * Extend the default set of options provided by SidebarDirectory._getEntryContextOptions
     * @return {Array}   The Array of context options passed to the ContextMenu instance
     * @private
     */
    _getEntryContextOptions() {
      const options = super._getEntryContextOptions();
      return [
        {
          name: "SIDEBAR.CharArt",
          icon: '<i class="fas fa-image"></i>',
          condition: li => {
            const deck: Deck = (<CardGame>game).decks.get(li.data("entityId"));
            return deck.data.img !== CONST.DEFAULT_TOKEN;
          },
          callback: li => {
            const deck: Deck = (<CardGame>game).decks.get(li.data("entityId"));
            new ImagePopout(deck.data.img, {
              title: deck.name,
              shareable: true,
              entity: {type: "Deck", id: deck.id}
            }).render(true);
          }
        }
      ].concat(options);
    }
}