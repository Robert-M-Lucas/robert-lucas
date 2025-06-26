interface IconProps extends React.SVGProps<SVGSVGElement> {
    size?: string | number
    color?: string
}

const ReactIcon: React.FC<IconProps> = ({
    size = 16,
    color = "currentColor",
    ...props
}) => {
    return (
        <svg
            width={size}
            height={size}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-11.5 -10.23174 23 20.46348"
            {...props}
        >
            <title>React Logo</title>
            <circle cx="0" cy="0" r="2.05" fill={color} />
            <g stroke="#61dafb" stroke-width="1" fill="none">
                <ellipse rx="11" ry="4.2" />
                <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                <ellipse rx="11" ry="4.2" transform="rotate(120)" />
            </g>
        </svg>
    )
}

export default ReactIcon
