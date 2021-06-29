
        const link = document.querySelector(".contacts-link");
        const popup = document.querySelector(".modal");
        const close = document.querySelector(".modal-close");
        const name = popup.querySelector("[name=name]");
        const email = popup.querySelector("[name=email]");
        const form = popup.querySelector("form");
        const storage = localStorage.getItem("name");
        let isStorageSupport = true;
        let Storage = "";

        try {
          storage = localStorage.getItem("name");
        } catch (err) {
          isStorageSupport = false;
        }

        link.addEventListener("click" , function (evt) {
          evt.preventDefault();
          popup.classList.add("modal-show");
          if (storage) {
            name.value = storage;
            email.focus();
          } else {
            name.focus();
          }
        });

        close.addEventListener("click", function (evt) {
          evt.preventDefault();
          popup.classList.remove("modal-show");
          popup.classList.remove("modal-error");
        });

        form.addEventListener("submit", function (evt) {
          if (!name.value || !email.value) {
            evt.preventDefault();
            popup.classList.add("modal-error");
          } else {
              if (isStorageSupport) {
                localStorage.setItem("name", name.value);
              }
            }
        });

        window.addEventListener("keydown", function (evt){
          if (evt.key === "Esc" || evt.key === "Escape") {
            if (popup.classList.contains("modal-show")) {
              evt.preventDefault();
              popup.classList.remove("modal-show");
              popup.classList.remove("modal-error");
            }
          }
        });