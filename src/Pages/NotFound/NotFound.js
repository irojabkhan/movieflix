import NotFoundSvg from '../../images/notfound.gif';

function NotFound() {
    return (
        <div className="text-center">
            <img src={NotFoundSvg} />
        </div>
    )
}

export default NotFound;