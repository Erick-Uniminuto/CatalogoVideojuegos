// Componente para el text area

import './TextArea.css'

function TextArea({ text }){
  return(
    <div className="mb-3">
      <label htmlFor="exampleFormControlTextarea1" className="form-label">
        {text}
      </label>
      <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" maxLength={300}/>
    </div>
  )
};

export default TextArea;