export default function Die(props) {
    return (
        <div onClick={() => props.hold(props.id)} className={`${props.isHeld && 'bg-lime-green'} font-inter rounded-md shadow-xl w-12 h-12 flex justify-center items-center`}>{props.value}</div>
    )
}