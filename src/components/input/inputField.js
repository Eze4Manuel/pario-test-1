import './inputField.scss';


const InputField = ({ label, sublabel, value, required, change, style }) => {
    return (
        <div className='input-field' style={style}>
            <label className='label'>{label}<span className='required' >{required ? ' *' : ''}</span></label>
            <span className='sublabel'>{sublabel}</span>
            <input className='input'
                type="text"
                defaultValue={value}
                onChange={change} />
        </div>
    )
}
export default InputField