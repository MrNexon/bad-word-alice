import {GeneratorListInterface} from "./generator-list.interface";
import Axios from "axios";
import {transliterate} from "transliteration";

export class WordGenerator {
    static async generate(): Promise<GeneratorListInterface> {
        const request = await Axios({
            method: 'post',
            url: 'https://genmat.blindage.org/generator',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Content-Length': 494 },
            data: `text=%5BS%3A1%3AM%3AI%5D%3B%5BS%3A1%3AM%3AI%5D%3B%5BS%3A1%3AM%3AI%5D%3B%5BS%3A1%3AM%3AI%5D%3B%5BS%3A1%3AM%3AI%5D%3B%5BS%3A1%3AM%3AI%5D%3B%5BS%3A2%3AM%3AI%5D%3B%5BS%3A2%3AM%3AI%5D%3B%5BS%3A3%3AM%3AI%5D%0A%5BP%3A1%3AM%5D%3B%5BP%3A1%3AM%5D%3B%5BP%3A1%3AM%5D%3B%5BP%3A1%3AM%5D%3B%5BP%3A1%3AM%5D%3B%5BP%3A1%3AM%5D%3B%5BP%3A2%3AM%5D%3B%5BP%3A2%3AM%5D%3B%5BP%3A3%3AM%5D%0A%5BG%3A1%5D%3B%5BG%3A1%5D%3B%5BG%3A1%5D%3B%5BG%3A1%5D%3B%5BG%3A1%5D%3B%5BG%3A1%5D%3B%5BG%3A2%5D%3B%5BG%3A2%5D%3B%5BG%3A1%5D`
        });

        const data: string = request.data;
        const sepData = data.split('<br>');

        return {
            nouns: sepData[0].split(';').map((word) => this.transliteration(word)),
            adjective: sepData[1].split(';').map((word) => this.transliteration(word)),
            verbs: sepData[2].split(';').map((word) => this.transliteration(word))
        }
    }

    private static transliteration(text: string): string {
        let converter = {
            'а': 'a',    'б': 'б',    'в': 'в',    'г': 'г',    'д': 'd',
            'е': 'e',    'ё': 'e',    'ж': 'ж',   'з': 'з',    'и': 'i',
            'й': 'й',    'к': 'к',    'л': 'л',    'м': 'м',    'н': 'н',
            'о': 'o',    'п': 'п',    'р': 'р',    'с': 'с',    'т': 'т',
            'у': 'u',    'ф': 'ф',    'х': 'х',    'ц': 'ц',    'ч': 'с',
            'ш': 'ш',   'щ': 'щ',  'ь': 'ь',     'ы': 'у',    'ъ': 'ъ',
            'э': 'э',    'ю': 'ю',   'я': 'я'
        };

        text = text.toLowerCase();

        let answer = '';
        for (let i = 0; i < text.length; ++i ) {
            // @ts-ignore
            answer += converter[text[i]];
        }

        return text;
    }
}
