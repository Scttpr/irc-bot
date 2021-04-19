import irc from 'irc';
import dotenv from 'dotenv';

import { getFormattedAnswer, calculateAnswer } from './tools.js';

dotenv.config();

const BOT_NAME = process.env.BOT_NAME;
const HOST = process.env.HOST;
const CHANNEL = `#${process.env.CHANNEL}`;
const TARGET = process.env.TARGET;
const INIT_MESSAGE = process.env.INIT_MESSAGE;

const client = new irc.Client(HOST, BOT_NAME, {
    channels: [CHANNEL],
});

client.addListener('registered', () => {
    client.say(TARGET, INIT_MESSAGE);
});

client.addListener('message', (from, to, text) => {
    console.log(`${from} says ${text} to ${to}`);

    if (from === TARGET) {
        const result = calculateAnswer(text);

        if (result) {
            const answerMessage = getFormattedAnswer(result);
            client.say(TARGET, answerMessage);
        }

    }
});



