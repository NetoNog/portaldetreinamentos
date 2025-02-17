// Dados dos vídeos - Referências relativas para os vídeos e miniaturas
const videos = [
    { id: 'video1', title: 'Vídeo 1', videoPath: 'videos/video1.mp4', thumbnailPath: 'images/video1-thumbnail.jpg' },
    { id: 'video2', title: 'Vídeo 2', videoPath: 'videos/video2.mp4', thumbnailPath: 'images/video2-thumbnail.jpg' },
    // Adicione mais vídeos conforme necessário
  ];
  
  // Função para carregar as miniaturas
  function loadThumbnails() {
    const thumbnailsContainer = document.getElementById('thumbnails');
    thumbnailsContainer.innerHTML = ''; // Limpa as miniaturas antes de carregar novamente
  
    videos.forEach(video => {
      const thumbnail = document.createElement('div');
      thumbnail.classList.add('thumbnail');
      thumbnail.innerHTML = `<img src="${video.thumbnailPath}" alt="${video.title}" onclick="openModal('${video.videoPath}')">`;
      thumbnailsContainer.appendChild(thumbnail);
    });
  }
  
  // Função para abrir o modal e exibir o vídeo
  function openModal(videoPath) {
    const modal = document.getElementById('video-modal');
    const videoPlayer = document.getElementById('video-player');
    const videoSource = document.getElementById('video-source');
  
    // Configura o vídeo no modal
    videoSource.src = videoPath;
    videoPlayer.load(); // Recarrega o vídeo
    videoPlayer.play(); // Começa a reprodução do vídeo
  
    // Exibe o modal
    modal.style.display = 'block';
  }
  
  // Função para fechar o modal
  document.getElementById('close-modal').addEventListener('click', () => {
    const modal = document.getElementById('video-modal');
    const videoPlayer = document.getElementById('video-player');
  
    // Pausa o vídeo e reinicia o src para evitar reprodução continuada
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
    modal.style.display = 'none'; // Fecha o modal
  });
  
  // Função para filtrar vídeos pela pesquisa
  document.getElementById('search-input').addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const filteredVideos = videos.filter(video => video.title.toLowerCase().includes(query));
    
    // Atualiza as miniaturas conforme o filtro
    const thumbnailsContainer = document.getElementById('thumbnails');
    thumbnailsContainer.innerHTML = '';
    filteredVideos.forEach(video => {
      const thumbnail = document.createElement('div');
      thumbnail.classList.add('thumbnail');
      thumbnail.innerHTML = `<img src="${video.thumbnailPath}" alt="${video.title}" onclick="openModal('${video.videoPath}')">`;
      thumbnailsContainer.appendChild(thumbnail);
    });
  });
  
  // Inicializa as miniaturas ao carregar a página
  window.onload = loadThumbnails;
  