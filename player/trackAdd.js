module.exports = (client, queue, track) => {
    queue.metadata.channel.send(`🎵 | ${track.title} added to queue.`);
};