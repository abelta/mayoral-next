import classnames from 'classnames'

const ImageMock = ({ className }: { className?: string }) => (
    <div
        className={
            classnames(
                'h-48 w-48 bg-slate-400 border-black border border-solid',
                className,
            )
        }
        data-testid="image-mock"
    />
)

export default ImageMock
