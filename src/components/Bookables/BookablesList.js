import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

import bookables from '../../static.json';

export default function BookablesList() {
    const [group, setGroup] = useState('Kit');
    const [bookableIndex, setBookableIndex] = useState(0);

    const bookablesInGroup = bookables.bookables.filter(
        (b) => b.group === group
    );
    const groups = [...new Set(bookables.bookables.map((b) => b.group))];

    function nextBookable() {
        setBookableIndex((i) => (i + 1) % bookablesInGroup.length);
    }



    return (
        <div>
            <select value={group} onChange={(e) => setGroup(e.target.value)}>
                {groups.map((g) => (
                    <option value={g} key={g}>
                        {g}
                    </option>
                ))}
            </select>
            <ul className='bookables items-list-nav'>
                {bookablesInGroup.map((b, i) => (
                    <li
                        key={b.id}
                        className={i === bookableIndex ? 'selected' : null}
                    >
                        <button
                            className='btn'
                            onClick={() => setBookableIndex(i)}
                        >
                            {b.title}
                        </button>
                    </li>
                ))}
            </ul>
            <p>
                <button className='btn' onClick={nextBookable} autoFocus>
                    <FaArrowRight />
                    <span>Next</span>
                </button>
            </p>
        </div>
    );
}
