module.exports = (client, queue, error) => {
    queue.metadata.channel.send(`❌ | There was an error!\n"\`${error.message}\`"\n... whatever that means."`);
};