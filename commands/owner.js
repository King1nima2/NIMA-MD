const settings = require('../settings');

async function ownerCommand(sock, chatId) {
    const vcard = `
CREATER:D.M.NIMNA DULSHAN(KING NIMA)
WA NUMBER:94769268470,94740250759
BEGIN:VCARD
VERSION:3.0
FN:${settings.botOwner}
TEL;waid=${settings.ownerNumber}:${settings.ownerNumber}
END:VCARD
`;

    await sock.sendMessage(chatId, {
        contacts: { displayName: settings.botOwner, contacts: [{ vcard }] },
    });
}

module.exports = ownerCommand;
