import { type ReactNode, forwardRef } from 'react'

type InputFieldProps = {
    className: string
    children: ReactNode
    onClick?: () => void
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    id: string
    className: string
    name: string
}

export const InputField = (props: InputFieldProps) => {
    return <div className={props.className}>{props.children}</div>
}

// https://react.dev/reference/react/forwardRef
// forwardRef<T, P = {}>

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
    props: InputProps,
    ref
) {
    return <input {...props} ref={ref} />
})
