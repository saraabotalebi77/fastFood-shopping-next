const SelectInput = ({options,disabled_option})=>{
    return(
        <select >
            {disabled_option? <option disabled selected>{disabled_option}</option> : null}
            {options.map((option,index)=>(
                <option value={index}>{option}</option>
            ))}
        </select>
    )
}
export default SelectInput;