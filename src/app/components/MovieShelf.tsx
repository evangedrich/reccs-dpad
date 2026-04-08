'use client';

import { FocusableElement } from './FocusableElement';
import MovieCard from '@/app/components/MovieCard';
import { MovieType } from '@/app/models/MovieModels';
import { useRouter } from 'next/navigation';
import styles from '@/app/ui/main.module.css';

export default function MovieShelf({ movies }: { movies: MovieType[] }) {
    const router = useRouter();
    const focusChange = (el: HTMLElement | null) => {
        return el?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    };
    return (
        <div className={`${styles.shelf} flex gap-[2vw] overflow-auto pl-[7.5vw] pr-[calc(100vw_-_15rem)] pt-[0.75vw] pb-[2vw]`}>
            {movies.map((movie) => (
                <FocusableElement 
                    key={movie.id} 
                    onEnter={() => router.push(`/${movie.id}`)}
                    onFocus={(el) => focusChange(el)}
                >
                    <MovieCard movie={movie} />
                </FocusableElement>
            ))}
        </div>
    )
}