import NotFoundSvg from '../../images/notfound.gif';

function NotFound() {
    return (
        <div className="text-center">
            <img src={NotFoundSvg} alt="Not Found"/>
        </div>
    )
}

export default NotFound;