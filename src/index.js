//âm thanh
let tatam = false;
const nutamthanh = document.getElementById("nutamthanha");
const amthanh = document.getElementById("amthanh");
const thaydoiamthanh =()=> {
    if (!tatam) {
        nutamthanh.src = "../asset/soundoff.png"
        amthanh.muted = true;
        tatam = !tatam;
    }else {
        nutamthanh.src = "../asset/soundon.png"
        amthanh.src = "../asset/nhacnen.mp3"
        amthanh.muted = false;
        amthanh.play();
        tatam = !tatam;
    }
}
//hạt hiệu ứng
particlesJS("hathieuung", {
  particles: {
    number: {
      value: 100,
      density: { enable: true, value_area: 800 }
    },
    color: { value: ["#edfaac", "#d0d07a", "#c0c06e"]},
    shape: { type: "circle" },
    opacity: {
      value: 0.8,
      random: true,
      anim: {
        enable: true,
        speed: 0.8,
        opacity_min: 0.2
        }
    },
    size: {
      value: 10,
      random: true
    },
    move: {
      enable: true,
      speed: 0.8,
      direction: "none",
      random: true,
      out_mode: "out"
    },
    line_linked: {
    enable: false
  },
  },


  retina_detect: true
});
