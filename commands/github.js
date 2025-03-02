async function githubCommand(sock, chatId) {
    const repoInfo = `*🤖 NIMA MD*\n\n` +
                      `*📂 GitHub Repository:*\n` +
                      `Not created by repository\n\n` +
                      `*Bot Creator:*\n` +
                      `D.M.Nimna Dulshan(king nima)\n\n` +
                      `*📢 Support Wa Channel:*\n` +
                      `https://whatsapp.com/channel/0029Vb1o91L72WTvgO0aay0e\n\n` +
                      `_follow please my whatsapp channel!_`;

    try {
        await sock.sendMessage(chatId, {
            text: repoInfo,
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
        console.error('Error in github command:', error);
        await sock.sendMessage(chatId, { 
            text: '❌ Error fetching repository information.' 
        });
    }
}

module.exports = githubCommand; 