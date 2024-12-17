const modals = document.querySelectorAll(".custom-modal");
const overlay = document.querySelector(".custom-modal-overlay");
let currentModal = null;

function openModal(modalId) {
  if (currentModal) {
    closeModal();
  }
  currentModal = document.getElementById(modalId);

  overlay.classList.add("visible");
  currentModal.classList.add("visible");

  if (window.matchMedia("(max-width: 768px)").matches) {
    currentModal.style.transform = "translateY(0)";
  } else {
    currentModal.style.transform = "translate(-50%, -50%) translateY(0)";
  }

  document.body.style.overflow = "hidden";
}

function closeModal() {
  overlay.classList.remove("visible");
  if (currentModal) {
    currentModal.classList.remove("visible");
    if (window.matchMedia("(max-width: 768px)").matches) {
      currentModal.style.transform = "translateY(110vh)";
    } else {
      currentModal.style.transform = "translate(-50%, -50%) translateY(110vh)";
    }

    document.body.style.overflow = "";
    currentModal = null;
  }
}

document.querySelectorAll(".connect").forEach((el) => {
  el.addEventListener("click", () => {
    openModal(el.dataset.modal);
  });
});

document.querySelectorAll("#close, .custom-modal-overlay").forEach((el) => {
  el.addEventListener("click", () => {
    closeModal();
  });
});

modals.forEach((modal) => {
  const header = modal.querySelector(".custom-modal-header");
  if (!header) return;

  let startY = 0;
  let endY = 0;

  header.addEventListener("touchstart", (e) => {
    startY = e.touches[0].clientY;
    modal.style.transition = "none";
  });

  header.addEventListener("touchmove", (e) => {
    endY = e.touches[0].clientY;
    if (endY > startY) {
      modal.style.transform = `translateY(${endY - startY}px)`;
      e.preventDefault();
    }
  });

  header.addEventListener("touchend", () => {
    modal.style.transition = "";
    if (endY - startY > 140) {
      closeModal();
    } else {
      modal.style.transform = "translateY(0)";
    }
  });
});
window.addEventListener("resize", () => {
  modals.forEach((modal) => {
    if (modal.classList.contains("visible")) {
      if (window.matchMedia("(max-width: 768px)").matches) {
        modal.style.transform = "translateY(0)";
      } else {
        modal.style.transform = "translate(-50%, -50%) translateY(0)";
      }
    }
  });
});



// УДАЛИТЬ ПРИ РЕЛИЗЕ. СКРИПТ ДЛЯ АВТОМАТИЧЕСКОГО ПОДСТАВЛЕНИЯ КНОПОК МОДАЛОК
const buttonsContainer = document.getElementById("modals-buttons");

if (buttonsContainer) {
  const modals = document.querySelectorAll(".custom-modal");

  buttonsContainer.innerHTML = "";

  modals.forEach((modal, index) => {
    const modalId = modal.id; 
    if (modalId) {
      const button = document.createElement("button");
      button.className = "btn btn-dark connect"; 
      button.dataset.modal = modalId; 
      button.textContent = modalId;; 

      buttonsContainer.appendChild(button);
    }
  });

  document.querySelectorAll(".connect").forEach((el) => {
    el.addEventListener("click", () => {
      openModal(el.dataset.modal);
    });
  });
} else {
  console.error("не найден контейнер");
}
