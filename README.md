# Pookie !¡🐱💗 Md

WhatsApp Multi-Device bot. Fast, modular, ready for Optiklink panel hosting.

Version: `3.3.0`

Bot name: `Pookie !¡🐱💗 Md`

## Features

- Pair code login (8-digit, no SESSION_ID)
- Modular commands
- Fast antilink
- Group admin tools
- Media downloaders
- Owner controls

## Connect (8 Digit Pair Code)

No SESSION_ID needed.

Set your number in `config.js`:

```js
pairingNumber: '256789966218'
```

Or set `PAIRING_NUMBER` in the Optiklink panel.

Start the bot. Console and panel show an 8-digit code like `ABCD-EFGH`.

On your phone: WhatsApp > Linked Devices > Link with phone number > enter the code.

## Local Setup

```bash
npm install
node index.js
```

## Optiklink Panel

1. Create a Node.js / Discord JS Bot server on https://optiklink.com
2. Upload this project into `/home/container`
3. Startup command:

```bash
npm install && node index.js
```

4. Variables (no SESSION_ID):

```
PAIRING_NUMBER=256789966218
CONNECT_METHOD=pair
```

5. Start the server. Console shows an 8-digit pair code.
6. WhatsApp > Linked Devices > Link with phone number > enter the code.

## Config

Edit `config.js`:

- `botName`
- `ownerNumber`
- `pairingNumber`
- `prefix`
- `channelUrl`

Channel: https://whatsapp.com/channel/0029VbD8dTsLikgBwnv1Nq3c

## Commands

Prefix: `.`

Examples: `.menu` `.ping` `.antilink on`

## License

MIT
