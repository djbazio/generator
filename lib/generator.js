'use babel';

import GeneratorView from './generator-view';
import { CompositeDisposable } from 'atom';

export default {

  generatorView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.generatorView = new GeneratorView(state.generatorViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.generatorView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'generator:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.generatorView.destroy();
  },

  serialize() {
    return {
      generatorViewState: this.generatorView.serialize()
    };
  },

  toggle() {
  let editor
  if (editor = atom.workspace.getActiveTextEditor()) {
    let selection = editor.getSelectedText()
    let reversed = selection.split('').reverse().join('')
    editor.insertText(revered)
    }
  }

};
