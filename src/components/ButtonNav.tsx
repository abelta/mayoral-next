import classnames from 'classnames'

const ButtonNav = (
    { active, onClick, className, children }:
    { active?: boolean; onClick?: () => void; className?: string; children?: React.ReactNode; }
) => {
    return (
        <button
            data-testid="button-nav"
            className={classnames(className, { 'opacity-100': active, 'opacity-50': !active })}
            onClick={onClick}>{children}
        </button>
    )
}

export default ButtonNav
