const anki = require('../index.js');
const m = new anki.Model({
        name: 'Basic (and reversed card)',
        id: '1542906796044',
        flds: [{ name: 'Front' }, { name: 'Back' }],
        req: [
                [0, 'all', [0]],
                [1, 'all', [1]],
        ],
        tmpls: [
                {
                        name: 'Card 1',
                        qfmt: '{{Front}}',
                        afmt: '{{FrontSide}}\n\n<hr id=answer>\n\n{{Back}}',
                },
                {
                        name: 'Card 2',
                        qfmt: '{{Back}}',
                        afmt: '{{FrontSide}}\n\n<hr id=answer>\n\n{{Front}}',
                },
        ],
});

const d = new anki.Deck(1542998993960, 'hi');

d.addNote(m.note(['this is front', 'this is back']));

const p = new anki.Package();
p.addDeck(d);
p.writeToFile('deck.apkg');
