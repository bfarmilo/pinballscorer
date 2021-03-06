import { h } from 'preact';

const Circle = props => (
    <div>
        <svg width={props.width} height={props.height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <circle style={{ fill: props.color }} cx="240" cy="240" r="209.6"></circle>
            <path d="M240 24c115.2 0 209.6 94.4 209.6 209.6s-94.4 209.6-209.6 209.6-209.6-94.4-209.6-209.6 94.4-209.6 209.6-209.6zm0-30.4c-132.8 0-240 107.2-240 240s107.2 240 240 240 240-107.2 240-240-107.2-240-240-240zm80 256h-160c-9.6 0-16-6.4-16-16s6.4-16 16-16h160c9.6 0 16 6.4 16 16s-6.4 16-16 16zm-80 80c-9.6 0-16-6.4-16-16v-160c0-9.6 6.4-16 16-16s16 6.4 16 16v160c0 9.6-6.4 16-16 16z" />
        </svg>
    </div>
)

export default Circle;