import classnames from 'classnames'
import { ButtonNav } from 'components'
import { Minus, Plus } from 'icons'

const OrderControl = (
    { className, onClickPlus, onClickMinus, order }
    : { className?: string, onClickPlus: () => void; onClickMinus: () => void, order: 'asc' | 'desc' | undefined }
) => {
    return (
        <nav
            data-testid="order-control"
            className={classnames('w-24 flex justify-between', className)}
        >
            <ButtonNav className="h-10 w-10" onClick={onClickMinus}>
                <Minus color={order === 'desc' ? 'darkgrey' : 'lightgrey'} />
            </ButtonNav>
            <ButtonNav className="h-10 w-10" onClick={onClickPlus}>
                <Plus color={order === 'asc' ? 'darkgrey' : 'lightgrey'} />
            </ButtonNav>
        </nav>
    )
}

export default OrderControl
