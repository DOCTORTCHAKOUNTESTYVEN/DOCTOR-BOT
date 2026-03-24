async function bug(message, client, texts, num) {
    try {
        const remoteJid = message.key?.remoteJid;
        await client.sendMessage(remoteJid, {
            image: { url: `database/${num}.jpg` },
            caption: `> ${texts}`,
            contextInfo: {
                externalAdReply: {
                    title: "Join Our WhatsApp Channel",
                    body: " 𓆩 𝐃OCTOR STYVEN 𝟐37 𓆪 ",
                    mediaType: 1,
                    thumbnailUrl: `https://whatsapp.com/channel/0029Vb7IF85K0IBicyPfXR2e`,
                    renderLargerThumbnail: false,
                    mediaUrl: `${num}.jpg`,
                    sourceUrl: `${num}.jpg`
                }
            }
        });
    } catch (e) {
        console.log(e);
    }
}

export default bug;
