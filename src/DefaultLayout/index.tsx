import { Outlet } from 'react-router-dom';
import './style.scss';
import { Sidebar } from '../components/Sidebar';

export function DefaultLayout() {
    return (
        <>
            <Sidebar />
            <div className="containerLayout">
                <Outlet />
            </div>
        </>
    )
}