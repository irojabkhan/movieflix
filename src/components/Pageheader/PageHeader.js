import './PageHeader.css';

export default function PageHeader(props) {
    return (
        <div className="page__header">
            <h2>{props.title}</h2>
        </div>
    )
}
