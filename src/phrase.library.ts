import {GeneratorListInterface} from "./generator-list.interface";
import {BadWordLibrary} from "./bad-word.library";



export default class PhraseLibrary {
    static get(list: BadWordLibrary): string {
        const Library = [
            `${list.nouns[this.randomInt(0, list.nouns.length - 1)]}, ${list.verbs[this.randomInt(0, list.verbs.length - 1)]}!`,
            `${list.verbs[this.randomInt(0, list.verbs.length - 1)]}, ${list.nouns[this.randomInt(0, list.nouns.length - 1)]}!`,
            `Ты ${list.adjective[this.randomInt(0, list.adjective.length - 1)]} ${list.nouns[this.randomInt(0, list.nouns.length - 1)]}, ${list.verbs[this.randomInt(0, list.verbs.length - 1)]}!`,
            `${list.nouns[this.randomInt(0, list.nouns.length - 1)]}!`,
            `${list.verbs[this.randomInt(0, list.verbs.length - 1)]}!`,
            `${list.adjective[this.randomInt(0, list.adjective.length - 1)]}!`
        ]

        return Library[this.randomInt(0, Library.length - 1)];
    }

    static hello(list: BadWordLibrary): string {
        const HelloLibrary = [
            `Привет ${list.nouns[this.randomInt(0, list.nouns.length - 1)]}, что, blyat', поиграем?`,
            `Все понял, ${list.nouns[this.randomInt(0, list.nouns.length - 1)]}?`,
            `Значит так, слушай сюда, ${list.nouns[this.randomInt(0, list.nouns.length - 1)]}, я тут главная!`,
            `Моя база содержит больше тысячи матов, и ты думаешь меня обыграть ${list.nouns[this.randomInt(0, list.nouns.length - 1)]}?`,
            `${list.nouns[this.randomInt(0, list.nouns.length - 1)]}, ${list.adjective[this.randomInt(0, list.adjective.length - 1)]}!`,
            `${list.nouns[this.randomInt(0, list.nouns.length - 1)]}, ${list.verbs[this.randomInt(0, list.verbs.length - 1)]}!`
        ];

        return HelloLibrary[this.randomInt(0, HelloLibrary.length - 1)];
    }

    private static randomInt(min: number, max: number): number {
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
    }
}
