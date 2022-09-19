import { Fragment } from 'react';
import { FaArrowRight } from 'react-icons/fa';

import bookables from '../../static.json';

export default function BookablesList() {
    const [group, setGroup] = useState('Kit');
    const [bookableIndex, setBookableIndex] = useState(0);
    const [hasDetails, setHasDetails] = useState(false);

    const bookablesInGroup = bookables.bookables.filter(
        (b) => b.group === group
    );
    const groups = [...new Set(bookables.bookables.map((b) => b.group))];

    const bookable = bookablesInGroup[bookableIndex];

    function changeGroup(event) {
        setGroup(event.target.value);
        setBookableIndex(0);
    }

    function nextBookable() {
        setBookableIndex((i) => (i + 1) % bookablesInGroup.length);
    }

    return (
        <Fragment>
            <div>
                <select value={group} onChange={changeGroup}>
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
            {bookable && (
                <div className='bookable-details'>
                    <div className='item'>
                        <div className='item-header'>
                            <h2>{bookable.title}</h2>
                            <span className='controls'>
                                <label>
                                    <input
                                        type='checkbox'
                                        checked={hasDetails}
                                        onChange={() =>
                                            setHasDetails((has) => !has)
                                        }
                                    />
                                    Show Details
                                </label>
                            </span>
                        </div>
                        <p>{bookable.notes}</p>

                        {hasDetails && (
                            <div className='item-details'>
                                <h3>Availability</h3>
                                <div className='bookable-availability'>
                                    <ul>
                                        {bookable.days.sort().map((d) => (
                                            <li key={d}>{bookables.days[d]}</li>
                                        ))}
                                    </ul>
                                    <ul>
                                        {bookable.sessions.map((s) => (
                                            <li key={s}>
                                                {bookables.sessions[s]}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </Fragment>
    );
}
