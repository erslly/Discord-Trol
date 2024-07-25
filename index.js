const clientId = 'APPLICATION ID Girin.';
const DiscordRPC = require('discord-rpc');
const RPC = new DiscordRPC.Client({transport: 'ipc'});

DiscordRPC.register(clientId);

async function setActivity()
{
    if(!RPC) return;

    RPC.setActivity(
        {
            details: `Girmeniz Lazim.`,
            state: `Girmeniz Lazim.`,
            startTimestamp: 1507665886, // 21 Saat'e Tekabül Ediyor Değiştirebilirsiniz.
            largeImageKey: `Girmeniz Lazim`,
            largeImageText: `Girmeniz Lazim`,
           // smallImageKey: ``,
           // smallImageText: ``,
            partySize: 1,
            partyMax: 2,
            joinSecret: `https://www.youtube.com/watch?v=jD19PeS_nAg`,
            instance: false
        }
    );
};
RPC.on('ready', async () =>{
    setActivity();

    setInterval(()=>
    {
        setActivity();
    }, 15 * 1000)
});

RPC.login({clientId}).catch(err => console.error(err));