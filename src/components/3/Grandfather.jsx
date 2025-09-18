import { useState } from "react"

import ChildA from "./ChildA"
import ChildB from "./ChildB"
import './style.css'

export default function Grandfather() {

    const [value, setValue] = useState(0)
    return (
        <>
            <div className="grandfather">
                <h2>grandfather</h2>
                <div className="children-row">
                    <ChildA value={value} />
                    <ChildB value={value} setValue={setValue} />
                </div>
            </div>
        </>
    )
}