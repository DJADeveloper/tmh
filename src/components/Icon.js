import React from "react";
import cn from "classnames";

const icons = {
  "arrow-right":
    "M10.39 3.153c.464-.428 1.187-.399 1.615.065l3.692 4c.404.438.404 1.113 0 1.55l-3.692 4c-.428.464-1.151.493-1.615.065s-.493-1.151-.065-1.615l1.922-2.082H1.143C.512 9.136 0 8.624 0 7.993S.512 6.85 1.143 6.85h11.104l-1.922-2.082c-.428-.464-.399-1.187.065-1.615z",
  "arrow-right-empty":
    "M5.551 15.665l-.1.089c-.449.355-1.102.326-1.517-.089-.446-.446-.446-1.17 0-1.616h0l6.048-6.05-6.048-6.048-.089-.1C3.491 1.403 3.52.749 3.935.335c.446-.446 1.17-.446 1.616 0h0l6.857 6.857.089.1c.355.449.326 1.102-.089 1.517h0l-6.857 6.857z",
  "arrow-down":
    "M12.833 10.39c.428.464.399 1.187-.065 1.615l-4 3.692c-.438.404-1.113.404-1.55 0l-4-3.692c-.464-.428-.493-1.151-.065-1.615s1.151-.493 1.615-.065l2.082 1.922V1.143C6.85.512 7.362 0 7.993 0s1.143.512 1.143 1.143v11.104l2.082-1.922c.464-.428 1.187-.399 1.615.065z",
  "arrow-prev":
    "M5.61 13.697c-.464.428-1.187.399-1.615-.065l-3.692-4c-.404-.438-.404-1.113 0-1.55l3.692-4c.428-.464 1.151-.493 1.615-.065s.493 1.151.065 1.615L3.753 7.714h11.104c.631 0 1.143.512 1.143 1.143S15.488 10 14.857 10H3.753l1.922 2.082c.428.464.399 1.187-.065 1.615z",
  "arrow-next":
    "M10.39 3.303c.464-.428 1.187-.399 1.615.065l3.692 4c.404.438.404 1.113 0 1.55l-3.692 4c-.428.464-1.151.493-1.615.065s-.493-1.151-.065-1.615l1.922-2.082H1.143C.512 9.286 0 8.774 0 8.143S.512 7 1.143 7h11.104l-1.922-2.082c-.428-.464-.399-1.187.065-1.615z",
  "arrow-bottom":
    "M15.039 3.961c-.653-.653-1.713-.653-2.366 0L8 8.634 3.327 3.961c-.653-.653-1.713-.653-2.366 0s-.653 1.713 0 2.366l5.856 5.856c.653.653 1.713.653 2.366 0l5.856-5.856c.653-.653.653-1.713 0-2.366z",
  "arrow-up":
    "M12.833 5.61c.428-.464.399-1.187-.065-1.615l-4-3.692c-.438-.404-1.113-.404-1.55 0l-4 3.692c-.464.428-.493 1.151-.065 1.615s1.151.493 1.615.065l2.082-1.922V14.857C6.85 15.488 7.362 16 7.993 16s1.143-.512 1.143-1.143V3.753l2.082 1.922c.464.428 1.187.399 1.615-.065z",

  instagram:
    "M11.2 0A4.8 4.8 0 0 1 16 4.8h0v6.4a4.8 4.8 0 0 1-4.8 4.8h0-6.4A4.8 4.8 0 0 1 0 11.2h0V4.8A4.8 4.8 0 0 1 4.8 0h0zm0 1.6H4.8a3.2 3.2 0 0 0-3.2 3.2v6.4a3.2 3.2 0 0 0 3.2 3.2h6.4a3.2 3.2 0 0 0 3.2-3.2V4.8a3.2 3.2 0 0 0-3.2-3.2zM8 4a4 4 0 1 1 0 8 4 4 0 1 1 0-8zm0 1.6a2.4 2.4 0 0 0 0 4.8 2.4 2.4 0 0 0 0-4.8zm4-2.4a.8.8 0 1 1 0 1.6.8.8 0 1 1 0-1.6z",
  facebook:
    "M7.967.017a8 8 0 1 1 0 16 8 8 0 1 1 0-16zm0 1.6a6.4 6.4 0 0 0-6.4 6.4c0 2.982 2.039 5.487 4.799 6.198l.001-4.598h-.8a.8.8 0 1 1 0-1.6h.8v-1.6a2.4 2.4 0 0 1 2.4-2.4h.8a.8.8 0 1 1 0 1.6h0-.8a.8.8 0 0 0-.8.8h0v1.6h1.6a.8.8 0 1 1 0 1.6h0-1.6v4.8a6.4 6.4 0 0 0 0-12.8z",
  twitter:
    "M2.121 9.233C1.018 9.236.306 10.492.986 11.444c.973 1.363 2.737 2.456 5.681 2.456 4.563 0 8.226-3.719 7.714-8.113l.751-1.503c.521-1.042-.384-2.227-1.527-1.999l-.993.198c-.263-.139-.535-.244-.768-.32-.454-.148-1.003-.265-1.511-.265-.913 0-1.701.234-2.327.704-.619.464-.968 1.075-1.159 1.635-.088.258-.147.518-.185.766-.354-.111-.715-.261-1.069-.445-.802-.415-1.451-.942-1.817-1.404-.614-.775-1.915-.717-2.371.29-.643 1.42-.467 3.102.111 4.462a6.57 6.57 0 0 0 .754 1.324l-.151.001zm4.546 3.333c-2.576 0-3.907-.933-4.596-1.898-.031-.043 0-.102.054-.103.701-.002 2.139-.035 3.087-.59.049-.029.038-.101-.016-.119-2.211-.743-3.467-3.891-2.575-5.86.02-.045.081-.051.112-.012C3.752 5.271 5.98 6.531 7.919 6.566c.042.001.074-.037.067-.079-.078-.507-.376-3.254 2.347-3.254.65 0 1.618.317 1.974.642a.07.07 0 0 0 .061.017l1.498-.3c.054-.011.098.046.073.095l-.929 1.858c-.006.013-.008.028-.006.042.651 3.658-2.345 6.978-6.337 6.978z",
  dribbble:
    "M8 0a7.97 7.97 0 0 1 5.441 2.135h0l.012.011.191.184-.203-.195.251.244.391.425.058.069.122.15.07.09a7.96 7.96 0 0 1 1.606 3.903l.021.186.002.015.01.111-.012-.127.024.299L16 8l-.004.249L16 8l-.025.632-.013.149-.002.02c-.248 2.499-1.647 4.659-3.658 5.945l-.017.011-.028.018-.236.143.264-.161-.307.186-.531.279-.114.053-.211.093-.034.014C10.138 15.78 9.095 16 8 16c-1.715 0-3.304-.54-4.606-1.458h0l-.033-.024-.468-.36-.025-.021-.186-.161-.062-.056-.414-.405-.024-.025C.829 12.057 0 10.125 0 8l.005-.297L0 7.993l.011-.415.013-.199.007-.09.02-.203.019-.156.027-.186.016-.1.04-.216.008-.037C.643 4.036 2.157 2.059 4.21.953l-.266.15.301-.169.27-.137.088-.042.154-.07.124-.054.536-.205.031-.011C6.25.146 7.108 0 8 0zm1.356 9.906c-1.362.66-2.858 1.732-4.775 3.502A6.35 6.35 0 0 0 8 14.4a6.38 6.38 0 0 0 2.504-.508 24.45 24.45 0 0 0-1.148-3.985zm4.991-1.08l-.04.001c-1.289.046-2.38.169-3.462.495a25.99 25.99 0 0 1 1.113 3.706 6.39 6.39 0 0 0 2.389-4.202zM7.942 6.86c-1.85.583-3.914.939-6.34 1.076A.85.85 0 0 0 1.6 8c0 1.695.659 3.237 1.735 4.382 2.086-1.945 3.78-3.18 5.397-3.951L7.942 6.86zm5.266-2.581l-.147.101c-1.136.761-2.314 1.406-3.597 1.931l.759 1.53c1.34-.425 2.665-.568 4.129-.616a6.34 6.34 0 0 0-1.144-2.946zM4.958 2.37l-.126.068c-1.459.833-2.558 2.223-3.009 3.88 2.028-.132 3.752-.426 5.288-.878-.639-1.026-1.357-2.042-2.153-3.07zM8 1.6a6.42 6.42 0 0 0-1.485.173l2.147 3.135c1.224-.484 2.349-1.087 3.444-1.816C10.995 2.16 9.563 1.6 8 1.6z",
  behance:
    "M12.667 5.367C14.508 5.367 16 6.86 16 8.701v.667c0 .368-.298.667-.667.667h-4.667a2 2 0 0 0 2 2 1.99 1.99 0 0 0 1.233-.425c.177-.139.387-.242.612-.242.571 0 .937.59.537.998-.605.618-1.449 1.002-2.382 1.002-1.841 0-3.333-1.492-3.333-3.333V8.701c0-1.841 1.492-3.333 3.333-3.333zm-8-2.667c1.473 0 2.667 1.194 2.667 2.667a2.66 2.66 0 0 1-.8 1.905A3.33 3.33 0 0 1 8 10.033c0 1.841-1.492 3.333-3.333 3.333h0-3.524C.512 13.367 0 12.855 0 12.224h0V3.767C0 3.178.478 2.7 1.067 2.7h0zm0 5.333H1.333v4h3.333a2 2 0 0 0 0-4zm8-1.333a2 2 0 0 0-2 2h4a2 2 0 0 0-2-2zm-8-2.667H1.333V6.7h3.333C5.403 6.7 6 6.103 6 5.367s-.597-1.333-1.333-1.333zM14 2.7c.368 0 .667.298.667.667s-.298.667-.667.667h0-2.667c-.368 0-.667-.298-.667-.667s.298-.667.667-.667h0z",
  linkedin:
    "M12.8.001a3.2 3.2 0 0 1 3.2 3.2h0v9.6a3.2 3.2 0 0 1-3.2 3.2h0-9.6a3.2 3.2 0 0 1-3.2-3.2h0v-9.6a3.2 3.2 0 0 1 3.2-3.2h0zm0 1.6H3.2a1.6 1.6 0 0 0-1.6 1.6v9.6a1.6 1.6 0 0 0 1.6 1.6h9.6a1.6 1.6 0 0 0 1.6-1.6v-9.6a1.6 1.6 0 0 0-1.6-1.6zM4 6.401a.8.8 0 0 1 .8.8h0v4.8a.8.8 0 0 1-1.6 0h0v-4.8a.8.8 0 0 1 .8-.8zm5.6 0a3.2 3.2 0 0 1 3.2 3.2v2.4a.8.8 0 1 1-1.6 0v-2.4a1.6 1.6 0 0 0-3.2 0v2.4a.8.8 0 0 1-1.6 0v-4.8a.8.8 0 0 1 1.529-.33c.486-.298 1.059-.47 1.671-.47zM4 3.201a.8.8 0 0 1 0 1.6.8.8 0 0 1 0-1.6z",
  play: "M1.509 2.463c0-1.71 1.876-2.755 3.33-1.855l8.945 5.538c1.378.853 1.378 2.857 0 3.711l-8.945 5.538c-1.454.899-3.33-.147-3.33-1.856V2.463z",
  info: "M8 0a1.6 1.6 0 1 0 0 3.2A1.6 1.6 0 1 0 8 0zm0 6.4A1.6 1.6 0 0 0 6.4 8v6.4a1.6 1.6 0 1 0 3.2 0V8A1.6 1.6 0 0 0 8 6.4z",
  check:
    "M14.049 2.635c.446-.446 1.17-.446 1.616 0 .412.412.444 1.06.095 1.509l-.095.108-9.143 9.143c-.412.412-1.06.444-1.509.095l-.108-.095L.335 8.822c-.446-.446-.446-1.17 0-1.616.412-.412 1.06-.444 1.509-.095l.108.095 3.763 3.762 8.335-8.334z",
  download:
    "M10.943 5.887l1.395.107c1.08.114 1.941.88 2.07 2.011.074.645.133 1.575.133 2.905l-.133 2.905c-.129 1.13-.988 1.897-2.069 2.011-.859.091-2.227.175-4.344.175s-3.485-.085-4.344-.175c-1.08-.114-1.939-.88-2.069-2.011-.074-.645-.133-1.575-.133-2.905l.133-2.905c.129-1.131.99-1.897 2.07-2.011l1.395-.107c.401-.021.744.286.765.688s-.286.744-.688.765l-1.32.101c-.455.048-.731.327-.777.729-.066.577-.123 1.451-.123 2.74l.123 2.74c.046.403.322.681.776.729.796.084 2.111.167 4.191.167l4.191-.167c.454-.048.73-.327.776-.729.066-.577.123-1.451.123-2.74l-.123-2.74c-.046-.402-.322-.682-.777-.729l-1.32-.101c-.401-.021-.709-.364-.688-.765s.364-.709.765-.688zM8.51.213l2.545 2.545a.73.73 0 0 1 0 1.029c-.284.284-.745.284-1.029 0L8.723 2.483v6.972c0 .402-.326.727-.727.727s-.727-.326-.727-.727V2.483L5.964 3.787c-.284.284-.745.284-1.029 0s-.284-.745 0-1.029L7.481.213c.284-.284.745-.284 1.029 0z",
  calendar:
    "M11.999 0a.8.8 0 0 1 .8.8h0l-.001.799.802.001a2.4 2.4 0 0 1 2.394 2.236L16 4v9.6a2.4 2.4 0 0 1-2.4 2.4h0H2.4A2.4 2.4 0 0 1 0 13.6h0V4a2.4 2.4 0 0 1 2.4-2.4h0l.798-.001L3.199.8a.8.8 0 0 1 .7-.794l.1-.006a.8.8 0 0 1 .8.8h0l-.001.799h6.4L11.199.8a.8.8 0 0 1 .7-.794zM13.6 3.2l-.802-.001.001.801a.8.8 0 0 1-.7.794l-.1.006a.8.8 0 0 1-.8-.8h0l-.001-.801h-6.4L4.799 4a.8.8 0 0 1-.7.794l-.1.006a.8.8 0 0 1-.8-.8h0l-.001-.801L2.4 3.2a.8.8 0 0 0-.8.8v9.6a.8.8 0 0 0 .8.8h11.2a.8.8 0 0 0 .8-.8V4a.8.8 0 0 0-.8-.8zm-4.801 8a.8.8 0 1 1 0 1.6h0-4.8a.8.8 0 1 1 0-1.6h0zm3.2-3.2a.8.8 0 1 1 0 1.6h0-5.6a.8.8 0 1 1 0-1.6h0z",
  scoreboard:
    "M13.333 2.65C14.806 2.65 16 3.844 16 5.317h0v5.333c0 1.473-1.194 2.667-2.667 2.667h0H2.667C1.194 13.317 0 12.123 0 10.65h0V5.317C0 3.844 1.194 2.65 2.667 2.65h0zm0 1.333H2.667c-.736 0-1.333.597-1.333 1.333v5.333c0 .736.597 1.333 1.333 1.333h10.667c.736 0 1.333-.597 1.333-1.333V5.317c0-.736-.597-1.333-1.333-1.333zm-1 1.333a1 1 0 0 1 1 1V7.65a1 1 0 0 1-1 1h-1v.667h1.333c.368 0 .667.298.667.667s-.298.667-.667.667H11a1 1 0 0 1-1-1V8.317a1 1 0 0 1 1-1h1V6.65h-1.333c-.368 0-.667-.298-.667-.667s.298-.667.667-.667h1.667zm-7.666 0c.368 0 .667.298.667.667v3.333c.368 0 .667.298.667.667s-.298.667-.667.667H4.001c-.368 0-.667-.298-.667-.667s.298-.667.667-.667V6.65c-.368 0-.667-.298-.667-.667s.298-.667.667-.667h.667zM8.001 8.65c.368 0 .667.298.667.667s-.298.667-.667.667-.667-.298-.667-.667.298-.667.667-.667zm0-2.667c.368 0 .667.298.667.667s-.298.667-.667.667-.667-.298-.667-.667.298-.667.667-.667z",
  clock:
    "M8 0a8 8 0 1 1 0 16A8 8 0 1 1 8 0zm0 1.6a6.4 6.4 0 0 0 0 12.8A6.4 6.4 0 1 0 8 1.6zm0 1.6a.8.8 0 0 1 .8.8v3.669l1.766 1.766a.8.8 0 0 1-1.131 1.131l-2-2A.8.8 0 0 1 7.2 8V4a.8.8 0 0 1 .8-.8z",
  candlesticks:
    "M7.833 4.409c.402 0 .727.326.727.727h0l.001 1.579c.846.3 1.453 1.108 1.453 2.057h0v2.182c0 .949-.606 1.757-1.453 2.057l-.001.852c0 .402-.326.727-.727.727s-.727-.326-.727-.727h0l-.001-.851c-.847-.299-1.455-1.107-1.455-2.057h0V8.772c0-.95.607-1.758 1.455-2.057l.001-1.578c0-.402.326-.727.727-.727zM2.015 1.5c.402 0 .727.326.727.727h0v.852c.847.3 1.454 1.108 1.454 2.057h0V6.59c0 .95-.607 1.757-1.454 2.057v3.76c0 .402-.326.727-.727.727s-.727-.326-.727-.727h0v-3.76C.44 8.349-.168 7.54-.168 6.59h0V5.136c0-.95.608-1.759 1.455-2.058v-.851c0-.402.326-.727.727-.727zm11.634 0c.402 0 .727.326.727.727h0v.851c.848.299 1.456 1.107 1.456 2.058h0v3.636c0 .951-.608 1.759-1.456 2.058v1.578c0 .402-.326.727-.727.727s-.727-.326-.727-.727h0l.001-1.579c-.846-.3-1.453-1.108-1.453-2.057h0V5.136c0-.949.606-1.757 1.453-2.057l-.001-.852c0-.402.326-.727.727-.727zM7.832 8.045c-.402 0-.727.326-.727.727v2.182c0 .402.326.727.727.727s.727-.326.727-.727V8.772c0-.402-.326-.727-.727-.727zm5.819-3.636c-.402 0-.727.326-.727.727v3.636c0 .402.326.727.727.727s.727-.326.727-.727V5.136c0-.402-.326-.727-.727-.727zm-11.637 0c-.402 0-.727.326-.727.727V6.59c0 .402.326.727.727.727s.727-.326.727-.727V5.136c0-.402-.326-.727-.727-.727z",
  lock: "M7.995 0c2.008 0 3.636 1.628 3.636 3.636v2.306c1.532.176 2.716 1.396 2.828 2.951l.081 2.015-.081 2.015c-.117 1.612-1.384 2.863-2.997 2.966L7.995 16a54.94 54.94 0 0 1-3.468-.11c-1.613-.103-2.88-1.354-2.997-2.966l-.081-2.015.081-2.015c.117-1.612 1.384-2.863 2.997-2.966l-.168.014V3.636C4.359 1.628 5.987 0 7.995 0zm0 7.273l-3.376.107a1.73 1.73 0 0 0-1.638 1.619l-.077 1.911.077 1.911a1.73 1.73 0 0 0 1.638 1.619l3.376.107 3.376-.107a1.73 1.73 0 0 0 1.638-1.619l.077-1.911-.077-1.911a1.73 1.73 0 0 0-1.638-1.619l-3.376-.107zm0 1.455c.803 0 1.455.651 1.455 1.455 0 .538-.293 1.008-.727 1.26h0v.922c0 .402-.326.727-.727.727s-.727-.326-.727-.727h0v-.922c-.435-.251-.727-.722-.727-1.26 0-.803.651-1.455 1.455-1.455zm0-7.273a2.18 2.18 0 0 0-2.182 2.182l-.002 2.225 2.184-.043 2.184.043-.002-2.225a2.18 2.18 0 0 0-2.182-2.182z",
  user: "M7.995 0c2.41 0 4.364 1.954 4.364 4.364 0 1.347-.61 2.551-1.569 3.351l-.145.116c2.295 1.017 3.896 3.315 3.896 5.987v1.454c0 .402-.326.727-.727.727s-.727-.326-.727-.727v-1.454a5.09 5.09 0 1 0-10.182 0v1.454c0 .402-.326.727-.727.727s-.727-.326-.727-.727v-1.454c0-2.672 1.601-4.971 3.897-5.987-1.043-.797-1.715-2.054-1.715-3.467C3.632 1.954 5.585 0 7.995 0zm0 1.455a2.91 2.91 0 0 0-2.909 2.909 2.91 2.91 0 0 0 2.909 2.909 2.91 2.91 0 0 0 2.909-2.909 2.91 2.91 0 0 0-2.909-2.909z",
  "button-play":
    "M8 1.45c1.87 0 3.473.134 4.694.286a3.5 3.5 0 0 1 3.058 3.013c.136.965.248 2.106.248 3.246a23.73 23.73 0 0 1-.248 3.246 3.5 3.5 0 0 1-3.058 3.013A38.07 38.07 0 0 1 8 14.541a38.07 38.07 0 0 1-4.694-.286 3.5 3.5 0 0 1-3.058-3.013C.112 10.276 0 9.136 0 7.995s.112-2.281.248-3.246a3.5 3.5 0 0 1 3.058-3.013C4.527 1.584 6.13 1.45 8 1.45zm0 1.455c-1.802 0-3.344.129-4.514.275a2.05 2.05 0 0 0-1.798 1.773c-.13.923-.233 1.992-.233 3.043s.104 2.121.233 3.043a2.05 2.05 0 0 0 1.798 1.773c1.17.146 2.712.275 4.514.275s3.344-.129 4.514-.275a2.05 2.05 0 0 0 1.798-1.773 22.28 22.28 0 0 0 .233-3.043c0-1.052-.104-2.121-.233-3.043a2.05 2.05 0 0 0-1.798-1.773c-1.17-.146-2.712-.275-4.514-.275zm-1.07 2.15l3.719 2.324a.73.73 0 0 1 0 1.233L6.93 10.936a.73.73 0 0 1-1.113-.617V5.671a.73.73 0 0 1 1.113-.617z",
  search:
    "M6.609 0a6.61 6.61 0 0 1 6.609 6.609 6.58 6.58 0 0 1-1.256 3.877l3.733 3.733c.408.408.408 1.068 0 1.476-.376.376-.968.405-1.377.087l-.098-.087-3.732-3.733a6.58 6.58 0 0 1-3.877 1.256A6.61 6.61 0 0 1 0 6.609 6.61 6.61 0 0 1 6.609 0zm0 2.087c-2.497 0-4.522 2.025-4.522 4.522s2.025 4.522 4.522 4.522 4.522-2.025 4.522-4.522-2.025-4.522-4.522-4.522z",
  close:
    "M.335.335c.446-.446 1.17-.446 1.616 0L8 6.384 14.049.335c.446-.446 1.17-.446 1.616 0s.446 1.17 0 1.616L9.616 8l6.049 6.049c.446.446.446 1.17 0 1.616s-1.17.446-1.616 0L8 9.616l-6.049 6.049c-.446.446-1.17.446-1.616 0s-.446-1.17 0-1.616L6.384 8 .335 1.951c-.446-.446-.446-1.17 0-1.616",
  moon: "M6.584.005c.576-.116 1.012.512.703 1.012-1.596 2.578-1.209 5.997.97 8.23 1.668 1.608 3.979 2.285 6.273 1.903a.67.67 0 0 1 .694.996c-.279.488-.687.989-1.182 1.484-3.158 3.148-8.268 3.148-11.427 0-3.15-3.15-3.15-8.277-.015-11.411h0l.183-.188A7.44 7.44 0 0 1 6.584.005zM5.433 1.79l-.148.071a6.17 6.17 0 0 0-1.721 1.292h0l-.141.145a6.75 6.75 0 0 0 .14 9.382 6.75 6.75 0 0 0 9.527 0h0l.083-.085-.142-.001a8.57 8.57 0 0 1-5.539-2.216h0l-.183-.172C5.104 7.933 4.424 4.665 5.416 1.835h0l.016-.046.001.001zm9.194.159c.631-.523 1.506.39.891 1.003h0l-.078.086c-.599.728-.573 2.343.078 2.993h0l.054.058c.523.631-.39 1.506-1.003.891h0l-.086-.078c-.728-.599-2.343-.573-2.993.078h0l-.058.054c-.631.523-1.506-.39-.891-1.003h0l.078-.086c.599-.728.573-2.343-.078-2.993h0l-.054-.058c-.523-.631.39-1.506 1.003-.891h0l.086.078c.728.599 2.343.573 2.993-.078h0l.058-.054zm-.905 1.849l-.095.015a4.42 4.42 0 0 1-1.195 0h0l-.096-.015.015.097a4.42 4.42 0 0 1 0 1.195h0l-.015.096.096-.015a4.42 4.42 0 0 1 1.195 0h0l.095.015-.021-.097a4.42 4.42 0 0 1 0-1.195h0l.015-.097.007.001z",
  sun: "M8.001 14.001c.338 0 .623.253.662.589l.005.078v.667c0 .353-.275.644-.628.665s-.659-.237-.701-.587l-.005-.078v-.667c0-.368.299-.667.667-.667zm5.142-1.8l.063.055.467.467c.248.249.26.648.028.912s-.63.302-.908.086l-.063-.055-.467-.467c-.248-.249-.26-.648-.028-.912s.63-.302.908-.086zm-9.405.055c.238.238.261.615.055.88l-.055.063-.467.467c-.249.248-.648.26-.912.028s-.302-.63-.086-.908l.055-.063.467-.467c.26-.26.682-.26.943 0h0zM8.001 4a4 4 0 1 1 0 8.001 4 4 0 1 1 0-8.001zm0 1.333a2.67 2.67 0 0 0-2.667 2.667 2.67 2.67 0 0 0 2.667 2.667 2.67 2.67 0 0 0 2.667-2.667 2.67 2.67 0 0 0-2.667-2.667zm-6.667 2c.353 0 .644.275.665.628s-.237.659-.587.701l-.078.005H.667c-.353 0-.644-.275-.665-.628s.237-.659.587-.701l.078-.005h.667zm14.001 0c.353 0 .644.275.665.628s-.237.659-.587.701l-.078.005h-.667c-.353 0-.644-.275-.665-.628s.237-.659.587-.701l.078-.005h.667zM3.209 2.267l.063.055.467.467c.248.249.26.648.028.912s-.63.302-.908.086l-.063-.055-.467-.467c-.248-.249-.26-.648-.028-.912s.63-.302.908-.086zm10.464.055c.238.238.261.615.055.88l-.055.063-.467.467c-.249.248-.648.26-.912.028s-.302-.63-.086-.908l.055-.063.467-.467c.26-.26.682-.26.943 0h0zM8.001 0c.338 0 .623.253.662.589l.005.078v.667c0 .353-.275.644-.628.665s-.659-.237-.701-.587l-.005-.078V.667c0-.368.299-.667.667-.667z",
};

const Icon = (props) => {
  const size = props.size ? props.size : 16;
  return (
    <svg
      className={cn(props.className)}
      width={size}
      height={size}
      viewBox="0 0 16 16"
    >
      <path d={icons[props.name]}></path>
    </svg>
  );
};

export default Icon;
