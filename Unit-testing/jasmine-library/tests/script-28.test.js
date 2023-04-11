describe('Should check if the theme is changed', () => {
  it('should add "my-theme" class and remove "main-theme" class when toggle is checked', () => {
    const body = document.querySelector('body');
    const toggle = document.querySelector('#toggle');
    toggle.checked = true;
    toggle.dispatchEvent(new Event('change'));
    expect(body.classList.contains('my-theme')).toBe(true);
    expect(body.classList.contains('main-theme')).toBe(false);
  });

  it('should remove "my-theme" class and add "main-theme" class when toggle is unchecked', () => {
    const body = document.querySelector('body');
    const toggle = document.querySelector('#toggle');
    toggle.checked = false;
    toggle.dispatchEvent(new Event('change'));
    expect(body.classList.contains('my-theme')).toBe(false);
    expect(body.classList.contains('main-theme')).toBe(true);
  });
});
describe('toggle img big', () => {
  it('should toggle the "personal-photo-hover" class on the "personalPhoto" element', () => {
    const personalPhoto = document.querySelector('.personal-photo');
    personalPhoto.classList.add('personal-photo-hover');

    // Check that class is removed
    toggleImg(personalPhoto);
    expect(personalPhoto.classList.contains('personal-photo-hover')).toBe(
      false
    );

    // Check that class is added back
    toggleImg(personalPhoto);
    expect(personalPhoto.classList.contains('personal-photo-hover')).toBe(true);

    // Check that class is toggled again
    toggleImg(personalPhoto);
    expect(personalPhoto.classList.contains('personal-photo-hover')).toBe(
      false
    );
  });
});
