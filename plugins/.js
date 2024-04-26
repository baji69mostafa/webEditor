const express = require('express');
const bodyParser = require('body-parser');
const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode');

const app = express();
const port = 8080;

// Set up body parser middleware
app.use(bodyParser.json());

// Create a new WhatsApp client
const client = new Client();

// Handle incoming messages
client.on('message', async (message) => {
  const chat = await message.getChat();
    // Check if the message is from a group
      if (chat.isGroup) {
          // Respond only if the message is a direct mention
              if (message.mentionedIds.includes(client.info.wid.user)) {
                    chat.reply(`Hi there! I'm a bot.`);
                        }
                          } else {
                              // Respond to direct messages
                                  message.reply(`Hi there! I'm a bot.`);
                                    }
                                    });

                                    // Set up POST route to receive messages
                                    app.post('/webhook', (req, res) => {
                                      const body = req.body;
                                        // Check if the request is a message notification
                                          if (body.event === 'message') {
                                              const message = body.data;
                                                  // Process the message with the WhatsApp client
                                                      client.handleMessage(message);
                                                        }
                                                          res.end();
                                                          });

                                                          // Generate QR code for authentication
                                                          app.get('/login', async (req, res) => {
                                                            const qr = await qrcode.toDataURL(client.generateInviteCode());
                                                              res.send(`<img src="${qr}" alt="QR Code"/>`);
                                                              });

                                                              // Start the Express server
                                                              app.listen(port, () => {
                                                                console.log(`Server is running on port ${port}`);
                                                                });