const modals = document.querySelectorAll(".custom-modal");
const overlay = document.querySelector(".custom-modal-overlay");
let currentModal = null;

function openModal(modalId) {
  currentModal = document.getElementById(modalId);

  overlay.classList.add("visible");
  currentModal.style.opacity = "1";

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
    if (window.matchMedia("(max-width: 768px)").matches) {
      currentModal.style.transform = "translateY(110vh)";
    } else {
      currentModal.style.transform =
        "translate(-50%, -50%) translateY(110vh)";
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
  let startY = 0;
  let endY = 0;

  modal.addEventListener("touchstart", (e) => {
    startY = e.touches[0].clientY;
    modal.style.transition = "none";
  });

  modal.addEventListener("touchmove", (e) => {
    endY = e.touches[0].clientY;
    if (endY > startY) {
      modal.style.transform = `translateY(${endY - startY}px)`;
    }
  });

  modal.addEventListener("touchend", () => {
    modal.style.transition = "";
    if (endY - startY > 140) {
      closeModal();
    } else {
      modal.style.transform = "translateY(0)";
    }
  });
});
