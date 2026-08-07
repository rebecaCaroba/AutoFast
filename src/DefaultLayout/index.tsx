import { Outlet } from 'react-router-dom';
import './style.scss';
import { Header } from '../components/Header';

export function DefaultLayout() {
    return (
        <>
            <Header />
            <div className="containerLayout">
                <Outlet />
            </div>
        </>
    )
}