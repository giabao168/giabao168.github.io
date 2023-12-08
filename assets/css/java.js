// Lấy đối tượng body và nút chuyển đổi theme
const body = document.body;
const changeThemeButton = document.querySelector('.change-theme');

// Hàm chuyển đổi theme
function toggleDarkMode() {
  body.classList.toggle('dark-theme');

  // Kiểm tra xem hiện tại có đang ở chế độ tối hay không
  const isDarkMode = body.classList.contains('dark-theme');

  // Thay đổi màu chữ và nền dựa vào chế độ tối hay sáng
  if (isDarkMode) {
    // Chế độ tối: nền đen, chữ trắng
    body.style.backgroundColor = 'hsl(var(--hue), 40%, 8%)';
    body.style.color = 'var(--title-color)';
    changeThemeButton.classList.add('dark-mode');
  } else {
    // Chế độ sáng: nền trắng, chữ đen
    body.style.backgroundColor = 'var(--body-color)';
    body.style.color = 'var(--text-color)';
    changeThemeButton.classList.remove('dark-mode');
  }
}
