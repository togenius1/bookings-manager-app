import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaCalendarAlt, FaDoorOpen, FaUsers } from 'react-icons/fa';

import './App.css';

import BookablesPage from './components/Bookables/BookablesPage';
import BookingsPage from './components/Bookings/BookingsPage';
import UsersPage from './components/Users/UsersPage';
import UserPicker from './components/Users/UserPicker';

export default function App() {
    return (
        <Router>
            <div className='App'>
                <header>
                    <nav>
                        <ul>
                            <li>
                                <Link to='/bookings' className='btn btn-header'>
                                    <FaCalendarAlt />
                                    <span>Bookings</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='/bookables'
                                    className='btn btn-header'
                                >
                                    <FaDoorOpen />
                                    <span>Bookables</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='/users' className='btn btn-header'>
                                    <FaUsers />
                                    <span>Users</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    <UserPicker />
                </header>

                <Routes>
                    <Route path='/bookings' element={<BookingsPage />} />
                    <Route path='/bookables' element={<BookablesPage />} />
                    <Route path='/users' element={<UsersPage />} />
                </Routes>
            </div>
        </Router>
    );
}
