import Image from 'next/image';
import { MovieType } from '@/app/models/MovieModels';

export default function MovieCard({ movie }: {movie: MovieType}) {
    return (
        <div className="relative w-[15vw] h-[20vw] flex items-center justify-center rounded-lg overflow-hidden" style={{backgroundColor:movie.color}}>
            <Image src={`/posters/${movie.id}.jpg`} alt={movie.id} width={400} height={600} />
            <div
                className={`absolute bottom-0 left-0 w-full h-[50%] bg-red-500h-1/2 bg-gradient-to-t to-transparent`}
                style={{ '--tw-gradient-from': movie.color, '--tw-gradient-to': 'transparent' } as React.CSSProperties}
            ></div>
            <div className={`absolute bottom-0 left-0 w-full text-center pb-[0.7vw]`}>
                <h1 className="text-[2vw] px-[0.5vw] leading-none mb-[0.25vw]">{movie.title.original}</h1>
                <h2 className="text-[1vw] opacity-[0.8]">{movie.year}</h2>
            </div>
        </div>
    )
}