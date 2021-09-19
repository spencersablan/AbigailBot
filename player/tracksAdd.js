module.exports = (client, queue, track) => {
    queue.metadata.channel.send(`🎵 | Playlist added to queue.`);
};