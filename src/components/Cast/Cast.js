
import './Cast.css';

const Cast = (props) => {
    return (
        <div className='cast__item'>
            <div className="thumb">
                <img src={props.path} alt={props.alt} />
            </div>
            <p key={props.key}>{props.name}</p>
        </div>
    )
}

export default Cast;