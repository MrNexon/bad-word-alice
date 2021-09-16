import {WordGenerator} from "./word.generator";
import PhraseLibrary from "./phrase.library";
import {Reply} from "yandex-dialogs-sdk";
import {tts} from "alice-renderer";
import {BadWordLibrary} from "./bad-word.library";

const { reply } = require("alice-renderer");
const { Alice } = require("yandex-dialogs-sdk");

const alice = new Alice();

alice.command('', async (ctx) => {
    let words = new BadWordLibrary();
    return reply`${PhraseLibrary.hello(words)}`;
});

alice.any((ctx) => {
    let words = new BadWordLibrary();
    return reply`${PhraseLibrary.get(words)}`;

});

alice.on('response', data => {
    console.log(data);
})


const server = alice.listen(3000, "");
