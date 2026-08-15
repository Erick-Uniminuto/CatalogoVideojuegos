import './InputFormulario.css'

function InputFormulario({ label, tipo, id }){
  return(
    <>
    <div className="mb-3">
      <label htmlFor={id} className="form-label">{label}</label>
      <input type={tipo} className="input-componente form-control" id={id}/>
    </div>
    </>
  )
};


export default InputFormulario;