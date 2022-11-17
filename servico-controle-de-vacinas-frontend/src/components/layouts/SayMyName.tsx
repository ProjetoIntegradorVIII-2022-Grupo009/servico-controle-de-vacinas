import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react"

function SayMyName(props: { nome: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined }){

return(
    <div>
        <p>Olá {props.nome}!</p>
    </div>
)
}

export default SayMyName