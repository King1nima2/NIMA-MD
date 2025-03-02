async function aliveCommand(sock, chatId) {
    try {
        const message = `*🤖 NIMA MD BOT IS ALIVE NOW*\n\n` +
                       `*Version:* 1.0.0\n\n` +
                       `*Status:* Online\n\n` +
                       `*prefix:* .\n\n` +
                       `*🌟 Features:*\n` +
                       `*• Group Management*\n` +
                       `*• Antilink Protection*\n` +
                       `*• Fun Commands*\n` +
                       `*• And more!*\n\n` +
                       `Type *.menu* for full command list\n\n` +
                       `*creater name:* Nimna Dulshan(king nima)\n\n` +
                       `*Contac creater:* 94769268470,94740250759\n\n\n` +
                       `> *_© Powered By NIMA MD_*`;

        await sock.sendMessage(chatId, {
            text: message,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '@newsletter',
                    newsletterName: 'NIMA MD',
                    serverMessageId: -1
                }
            }
        });
    } catch (error) {
        console.error('Error in alive command:', error);
        await sock.sendMessage(chatId, { text: 'NIMA MD Bot is alive and running!' });
    }
}

module.exports = aliveCommand;