import "./Button.css";

function Button({text}) {
    return (
        <div className="custom-button-wrapper">
            <a className="btn btn-primary custom-button" href="#" role="button">{text}</a>
            
        </div>
    );
}

export default Button;
