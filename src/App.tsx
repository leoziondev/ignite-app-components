import { MoviesProvider } from './hooks/useMovies';

import { Content } from './components/Content';
import { SideBar } from './components/SideBar';

import './styles/sidebar.scss';
import './styles/content.scss';
import './styles/global.scss';

export function App() {
  return (
    <MoviesProvider>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <SideBar/>

        <Content/>
      </div>
    </MoviesProvider>
  )
}