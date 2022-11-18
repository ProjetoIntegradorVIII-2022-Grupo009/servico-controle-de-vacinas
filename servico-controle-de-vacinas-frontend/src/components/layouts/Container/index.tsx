import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react'
import './styles.css'

function Container(props: { customClass: string | number; children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined }) {
    return (
        <div className="container">{props.children}</div>
    )
}

export default Container