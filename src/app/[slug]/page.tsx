import movies from '@/app/lib/movies.json';
import subregions from '@/app/lib/subregions';
import Image from 'next/image';

export async function generateStaticParams() {
    return movies.map(movie => ({
        slug: movie.id,
    }));
}

export default async function MovieDetailView({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const movie = movies.find(movie => movie.id===slug);
    return (
        <div className="fixed w-full h-full top-0 left-0 flex items-center justify-center" style={{backgroundColor:movie?.color}}>
            <div className="w-[48vw] mr-[2vw] flex flex-col flex-start">
                <h1 className="text-[5vw] font-black leading-none mb-[1vw]">{movie?.title.original}</h1>
                {movie?.title.transliteration || movie?.title.translation 
                    ? <h2 className="text-[2vw] opacity-[0.9] leading-none  mb-[1vw]">
                        {movie?.title.transliteration ?? ""}
                        {movie?.title.transliteration && movie?.title.translation ? ", " : ""}
                        {movie?.title.translation ? `“${movie?.title.translation}”` : ""}
                    </h2> 
                    : <></>
                }
                <h2 className="text-[1.8vw] opacity-[0.7]">
                    {movie?.year ?? ""}&nbsp;•&nbsp;
                    {movie?.runtime ?? ""}&nbsp;min&nbsp;•&nbsp;
                    {subregions.find(subr => subr.id===movie?.id.slice(0,4))?.name}
                </h2>
            </div>
            <div className="w-[25vw] rounded-xl overflow-hidden">
                <Image src={`/posters/${movie?.id}.jpg`} alt={movie?.id ?? ""} width={400} height={600} />
            </div>
        </div>
    )
}