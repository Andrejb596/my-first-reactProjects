import './scss/square.scss';

export default function Square({value, onClick}) {
    return (
        <div className='squareContainer'>
            <button className='square' onClick={onClick}>{value}</button>
        </div>
    )
}
