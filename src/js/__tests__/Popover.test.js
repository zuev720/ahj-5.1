import Popovers from '../Popovers';

test('Компонент Popover должен корректно работать', () => {
  document.body.innerHTML = `
        <div class="container-popovers">
            <button type="button" class="popover" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="Popover title">
                Click to toggle popover
            </button>
        </div>`;
  const popover = new Popovers(document.querySelector('.container-popovers'));

  const event = new Event('click');
  const elem = popover.container.querySelector('.popover');
  elem.dispatchEvent(event);
  expect(popover.container.querySelector('.arrow')).toBeTruthy();
  expect(popover.container.querySelector('.popover-inform').innerHTML)
    .toBe('<h3 class="popover-title">Popover title</h3><div class="popover-inform-text">And here\'s some amazing content. It\'s very engaging. Right?</div>');
});
