import React from 'react'


const HeadPainel = (props) => {

  React.useEffect(()=>{
    document.title =  props.title + " | Painel ABEA";
    document.querySelector("meta[name=description]").setAttribute('content', props.description || "");
  },[props])

  return <></>

}

export default HeadPainel;