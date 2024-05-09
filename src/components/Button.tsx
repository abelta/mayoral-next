import classnames from 'classnames'

const Button = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <button
        data-testid="button"
        className={
            classnames(
                'bg-blue-700 text-white px-4 py-2 rounded-md uppercase',
                className,
            )
        }
    >
        {children}
    </button>
)

export default Button
