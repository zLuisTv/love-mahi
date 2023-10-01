export function MusicPlayer() {
    return (
        <audio controls loop autoPlay className="w-48 p-2 rounded-lg bg-gray-800 text-white">
            <source
                src="/audio/music.mp3"
                type="audio/mpeg" />
            Tu navegador no soporta la reproducción de audio.
        </audio>
    )
}