export default function ChildB({ value, setValue }) {
    return (
        <>
            <div className="child">
                <h3>child B</h3>
                <button onClick={() => setValue(value + 1)}>increment</button>
            </div>
        </>
    )
}