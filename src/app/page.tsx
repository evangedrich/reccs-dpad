'use client';

import { useEffect } from 'react';
import { FocusContext, useFocusable } from '@noriginmedia/norigin-spatial-navigation';
import MovieShelf from './components/MovieShelf';
import Nav from './components/Nav';
import movies from '@/app/lib/movies.json';
import styles from '@/app/ui/main.module.css';

export default function Home() {
  const { ref, focusKey, focusSelf } = useFocusable({
    trackChildren: true,
    saveLastFocusedChild: true,
  });

  useEffect(() => {
    focusSelf();
  }, [focusSelf]);

  return (
    <div>
      <FocusContext.Provider value={focusKey}>
        <main ref={ref} className={styles.main}>
          <Nav />
          <h2>American Cinema</h2>
          <MovieShelf movies={movies.filter(movie => movie.id.startsWith('AM') )} />
          <h2>Eurasian Cinema</h2>
          <MovieShelf movies={movies.filter(movie => movie.id.startsWith('AS') || movie.id.startsWith('EU') )} />
          <h2>African Cinema</h2>
          <MovieShelf movies={movies.filter(movie => movie.id.startsWith('AF') )} />
          <h2>Oceanian Cinema</h2>
          <MovieShelf movies={movies.filter(movie => movie.id.startsWith('OC') )} />
        </main>
      </FocusContext.Provider>
    </div>
  );
}
