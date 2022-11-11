const { Telegraf } = require('telegraf')

const chatId = '239439098';
const bot = new Telegraf('387976822:AAHgov0N100HopCWYlSG-kC3vzQ6Pshucow');
let latestPollId;
let snooze;

const pollOptions = ['Good', 'OK', 'Bad'];
const snoozeDelay = 1000 * 10;

function setReminder() {
    snooze = setInterval(async () => {
        await bot.telegram.sendMessage(chatId, 'Reminder that you still haven\'t filled out the poll today.');
    }, snoozeDelay);
}

async function sendPoll() {
    const poll = await bot.telegram.sendPoll(chatId, 'How are you doing today?', pollOptions, {is_anonymous: false});
    latestPollId = poll.poll.id;
    setReminder();
}

bot.on('poll_answer', async (ctx) => {
    if(ctx.update.poll_answer.poll_id !== latestPollId) {
        return bot.telegram.sendMessage(chatId, 'This Poll is already closed. Please use the latest one.');
    }
    if(snooze) {
        clearInterval(snooze);
    }
    const answer = pollOptions[ctx.update.poll_answer.option_ids[0]];
    if(answer === 'Good') {
        return bot.telegram.sendMessage(chatId, 'Thats awesome. Hope you\'re doing Good tomorrow as well :)');
    }
    await bot.telegram.sendMessage(chatId, 'Thanks, hope tomorrow is a better day for you!');
});

(async () => {
    await bot.launch();
    await sendPoll();
})();
