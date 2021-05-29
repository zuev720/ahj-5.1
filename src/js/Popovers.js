export default class Popovers {
  constructor(element) {
    this.container = element;
    this.popover = this.container.querySelector('.popover');
    this.popover.addEventListener('click', (e) => this.onClick(e));
    this.init();
  }

  init() {
    this.container.style.position = 'relative';
    this.container.style.height = `${document.documentElement.clientHeight}px`;
    this.popover.style.left = `${Math.round(this.container.clientWidth / 2) - (this.popover.offsetWidth / 2)}px`;
    this.popover.style.top = `${Math.round(this.container.clientHeight / 2) - (this.popover.offsetHeight / 2)}px`;
    this.popover.style.position = 'absolute';
  }

  onClick(e) {
    const popover = e.target;
    popover.style.boxShadow = '0 0 0 .2rem rgba(225,83,97,.5)';
    const popoverTitleText = popover.dataset.originalTitle;
    const popoverContent = popover.dataset.content;

    if (!popover.classList.contains('popover-active')) {
      popover.classList.add('popover-active');
      const popoverInform = document.createElement('div');
      popoverInform.className = 'popover-inform';
      const popoverTitle = document.createElement('h3');
      popoverTitle.className = 'popover-title';
      popoverTitle.textContent = popoverTitleText;
      const popoverInformText = document.createElement('div');
      popoverInformText.className = 'popover-inform-text';
      popoverInformText.textContent = popoverContent;
      const arrow = document.createElement('div');
      arrow.className = 'arrow';
      popoverInform.insertAdjacentElement('afterbegin', popoverTitle);
      popoverInform.insertAdjacentElement('beforeend', popoverInformText);
      this.container.append(popoverInform);
      this.container.append(arrow);

      const {
        left, right, top, height, width,
      } = popover.getBoundingClientRect();

      arrow.style.bottom = `${top + height + (16 * 0.2)}px`;
      arrow.style.left = `${(left + (width / 2)) - (arrow.offsetWidth / 2)}px`;
      popoverInform.style.bottom = `${(top + height) + (arrow.offsetHeight - 1) + (16 * 0.2)}px`;
      popoverInform.style.left = `${left - 20}px`;
      popoverInform.style.right = `${(document.documentElement.offsetWidth - (right + 20))}px`;
    } else {
      popover.classList.remove('popover-active');
      this.container.querySelector('.popover-inform').remove();
      this.container.querySelector('.arrow').remove();
      popover.style.boxShadow = '';
    }
  }
}
