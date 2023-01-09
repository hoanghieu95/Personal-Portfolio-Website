var typed = new Typed(".typing", {
    strings:["", "Web Designer", "Graphic Designer", "Youtuber"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

const list = document.querySelectorAll(".list");
      function activeLink() {
        list.forEach((item) => item.classList.remove("active"));
        this.classList.add("active");
      }
      list.forEach((item) => item.addEventListener("click", activeLink));