function playMultipleVideos() {
  const url = document.getElementById('yt-url').value.trim();
  const count = parseInt(document.getElementById('view-count').value.trim());
  const videoId = extractVideoId(url);
  const container = document.getElementById('video-container');
  container.innerHTML = '';

  if (!videoId) {
    alert("Invalid YouTube URL");
    return;
  }

  if (isNaN(count) || count < 1 || count > 10001) {
    alert("Please enter a number between 1 and 10001.");
    return;
  }

  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`;

  for (let i = 0; i < count; i++) {
    const iframe = document.createElement('iframe');
    iframe.src = embedUrl;
    container.appendChild(iframe);
  }
}