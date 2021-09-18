module.exports = (client, queue, track) => {
    queue.metadata.channel.send(`🎵 | Now playing ${track.title}`);
};