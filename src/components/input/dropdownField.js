import './dropdownField.scss';


const DropdownField = ({ label, sublabel, style, required, change }) => {
    return (
        <div className='dropdown-field' style={style}>
            <label className='label'>{label}<span className='required' >{required ? ' *' : ''}</span></label>
            <span className='sublabel'>{sublabel}</span>
            <select className='input' onChange={change}>
                <option value="lagos">Lagos</option>
                <option value="abuja">Abuja</option>
                <option value="kano">Kano</option>
            </select>
        </div>
    )
}
export default DropdownField