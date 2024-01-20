export const scrollMy = (e) => {
  const link = e.target;
  const targetId = link.getAttribute('href'); // Obtém o ID do link
  const targetElement = document.querySelector(targetId); // Obtém o elemento alvo

  console.log(targetElement)

  if (targetElement) {
    e.preventDefault();
    const targetOffset = targetElement.offsetTop - 50;
    window.scrollTo({
      top: targetOffset,
      behavior: 'smooth' // Scroll suave
    });
  }
}