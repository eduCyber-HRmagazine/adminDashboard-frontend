let inputs = document.querySelectorAll("input");
let userPicIcon = document.getElementById("user_pic_change_icon");
let companyPicIcon = document.getElementById("company_pic_change_icon");
let socialMediaForm = document.getElementById("social_media");
let paddingPic = document.getElementById("padding_pic");
let submitPannel = document.getElementById("submit_pannel");
let userPic = document.getElementById("user-pic");
let companyPic = document.getElementById("company_pic");
let userPicInput = document.getElementById("user_pic_input");
let companyCard = document.getElementById("companyCard");
let userCVInput = document.getElementById("user_cv_input");

let form_edit = false;

document
  .getElementById("edit_user_button")
  .addEventListener("click", function () {
    form_edit = !form_edit;

    inputs.forEach((input) => {
      if (form_edit) {
        input.classList.remove("border-0");
        input.disabled = false;
      } else {
        input.classList.add("border-0");
        input.disabled = true;
      }
    });

    if (form_edit) {
      if (userPicInput) {
        userPicIcon.classList.remove("d-none");

        // user pic
        document
          .getElementById("change-pic")
          .addEventListener("click", function () {
            userPicInput.click();
          });
        userPicInput.addEventListener("change", function () {
          let file = this.files[0];
          const reader = new FileReader();
          reader.readAsDataURL(file);

          reader.onload = function (e) {
            console.log("uploaded");
            userPic.src = e.target.result;
          };
        });
      }
      if (companyCard) {
        companyPicIcon.classList.remove("d-none");

        // company pic
        document
          .getElementById("change_company_pic")
          .addEventListener("click", function () {
            document.getElementById("company_pic_input").click();
          });

        document
          .getElementById("company_pic_input")
          .addEventListener("change", function () {
            let companyFile = this.files[0];
            const comapnyReader = new FileReader();
            comapnyReader.readAsDataURL(companyFile);

            comapnyReader.onload = function (e) {
              companyPic.src = e.target.result;
            };
          });
      }

      if (socialMediaForm) {
        socialMediaForm.classList.remove("d-none");
      }

      if (userCVInput) {
        // user cv
        document
          .getElementById("user_cv_button")
          .addEventListener("click", function () {
            userCVInput.click();
          });

        userCVInput.addEventListener("change", function () {
          document.getElementById("cv_text").innerHTML = this.files[0].name;
        });
      }

      submitPannel.classList.remove("d-none");
      paddingPic.classList.add("d-none");
    } else {
      userPicIcon.classList.add("d-none");
      companyPicIcon.classList.add("d-none");
      socialMediaForm.classList.add("d-none");
      submitPannel.classList.add("d-none");

      paddingPic.classList.remove("d-none");
    }
  });
