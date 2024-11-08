
const Option = ({answer,i,handleClick,isDisabled}) =>{
    return (
        <button key={i} className={`answers`}cid="myDiv" onClick={(e) => handleClick(e,i)} disabled={isDisabled}>
            {`${i + 1}) ${answer}`}
        </button>
    )
}
export default Option