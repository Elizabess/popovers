class Popover {
    constructor(triggerElement, title, content) {
        this.triggerElement = triggerElement;
        this.title = title;
        this.content = content;
        this.popoverElement = this.createPopover();
        this.bindEvents();
    }

    createPopover() {
        const popover = document.createElement('div');
        popover.className = 'popover';
        popover.innerHTML =
            <div> 
                <div class="popover-header">`${this.title}`</div>
                <div class="popover-body">`${this.content}`</div>
            </div>;
        document.body.appendChild(popover);
        return popover;
    }

    bindEvents() {
        this.triggerElement.addEventListener('mouseenter', () => this.show());
        this.triggerElement.addEventListener('mouseleave', () => this.hide());
    }

    show() {
        const rect = this.triggerElement.getBoundingClientRect();
        const popoverRect = this.popoverElement.getBoundingClientRect();

        this.popoverElement.style.top = `${rect.top - popoverRect.height}px`;
        this.popoverElement.style.left = `${rect.left + (rect.width - popoverRect.width) / 2}px`;
        this.popoverElement.style.display = 'block';
    }

    hide() {
        this.popoverElement.style.display = 'none';
    }
}

export default Popover;

