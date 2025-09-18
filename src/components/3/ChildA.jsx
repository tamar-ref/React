import Grandson from "./Grandson"

export default function ChildA({ value }) {
    return (
        <>
            <div className="child">
                <h3>child A</h3>
                <Grandson value={value} />
            </div>
        </>
    )
}