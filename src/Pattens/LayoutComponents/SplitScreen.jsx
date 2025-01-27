import React from 'react'

export default function SplitScreen({ children, LeftWeight, RightWeight }) {
    const [left, right] = children;
    const leftWeight = `${LeftWeight}vw`;
    const rightWeight = `${RightWeight}vw`;
    return (
        <section className=' flex flex-1'>
            <div style={{ width: leftWeight }} className=' p-4'>{left}</div>
            <div style={{ width: rightWeight }} className=' p-4'>{right}</div>
        </section>
    )
}
