import './button.scss';


const Button = ({ text, buttonType, onClick }) => {
    return (
        <button className={`${buttonType} button`} onClick={onClick}> {text}</ button>
    )
}
export default Button;

