async function bug(message, client, texts, num) {

    try {
        
            const remoteJid = message.key?.remoteJid;

            await client.sendMessage(remoteJid, {

                image: { url: `database/${num}.jpg` },

                caption: `> ${texts}`,

                contextInfo: {

                    externalAdReply: {

                        title: "Join Our WhatsApp Channel",

                        body: " DOCTOR STYVEN-X ",

                        mediaType: 1, // Image preview

                        thumbnailUrl: `https://whatsapp.com/channel/0029Vb7IF85K0IBicyPfXR2e`,

                        renderLargerThumbnail: false,

                        mediaUrl: `${num}.jpg`,

                        sourceUrl: `${num}.jpg`
                    }
                }
            });

    } catch (e) {
     console.log(e)

    }
}




            /*const remoteJid = message.key.remoteJid;

            await client.sendMessage(remoteJid, {

                image: { url: `${num}.jpg` },

                caption: `> ${texts}`,

                contextInfo: {

                    externalAdReply: {

                        title: "Join Our WhatsApp Channel",

                        body: " sᴛʏᴠᴇɴ-s dєv | ᴄʀᴇᴀᴛᴏʀ-ʙᴏᴛ dєv  ",

                        mediaType: 1, // Image preview

                        thumbnailUrl: `https://whatsapp.com/channel/0029Vb7IF85K0IBicyPfXR2e`,

                        renderLargerThumbnail: false,

                        mediaUrl: `${num}.jpg`,

                        sourceUrl: `${num}.jpg`
                    }
                }
            });
        }
        */
        export default bug;