window.addEventListener("DOMContentLoaded", function () {
  const dropdownButtons = document.querySelectorAll(".dd");
  const dropdownMenus = document.querySelectorAll(".dd-menu");
  const overlay = document.querySelector(".custom-dd-overlay");

  window.closeAllDropdowns = function(exceptIndex = null) {
    dropdownMenus.forEach(function (dropdownMenu, index) {
      if (index !== exceptIndex) {
        dropdownButtons[index].classList.remove("visible");
        dropdownMenu.classList.remove("active");
      }
    });
    overlay.classList.remove("visible");
  };

  function openDropdown(dropdownIndex) {
    dropdownButtons[dropdownIndex].classList.add("visible");
    dropdownMenus[dropdownIndex].classList.add("active");
    overlay.classList.add("visible");
  }

  dropdownButtons.forEach(function (dropdownButton, i) {
    dropdownButton.addEventListener("click", function (event) {
      event.stopPropagation();
      if (window.innerWidth < 900) {
        window.closeAllDropdowns(i);
      }
      openDropdown(i);
    });
  });

  document.addEventListener("click", function (event) {
    dropdownButtons.forEach(function (dropdownButton, i) {
      if (
        !dropdownButton.contains(event.target) &&
        !dropdownMenus[i].contains(event.target)
      ) {
        window.closeAllDropdowns();
      }
    });
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth >= 900) {
      dropdownMenus.forEach(function (dropdownMenu) {
        dropdownMenu.classList.remove("active");
      });
      overlay.classList.remove("visible");
    }
  });
});
