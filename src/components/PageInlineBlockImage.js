import { createElement } from '../utils/renderer'
import state from '../utils/state'

export default class PageInlineBlockImage{
    constructor(ib){
        this.ib = ib
        this.showImageResizer = false
    }

    render(){
        let image = this.ib.image
        let imageStyle = this.ib.imageStyle

        let img = createElement('img', {
            attrs: {
                src: image,
            },
            style: {
                display: 'inline-block',
                width: imageStyle.width + 'px',
                height: imageStyle.height + 'px',
                cursor: 'text',
            }
        })

        this.el = createElement('div', {
            class: 'page-inline-block-image',
            style: {
                display: 'inline-block',
                position: 'relative',
                height: this.ib.inlineHeight + 'px',
                verticalAlign: 'bottom',
            }
        }, [
            img
        ])

        window.goog.events.listen(this.el, window.goog.events.EventType.CLICK, this.clickImageHandler.bind(this));

        return this.el
    }

    clickImageHandler(e){
        let resizerTargetObj = state.document.imageResizer.obj.targetObj

        if(this.showImageResizer){
            state.mutations.hideImageResizer()
            this.showImageResizer = false
        }else{
            if(resizerTargetObj && resizerTargetObj !== this){
                resizerTargetObj.showImageResizer = false
            }
            state.mutations.showImageResizer(this)
            this.showImageResizer = true
        }
    }
}