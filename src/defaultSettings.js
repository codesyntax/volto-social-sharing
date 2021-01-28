export const DEFAULT_SOCIAL = [{
    name: "Facebook",
    fa_name: ["fab", "facebook-f"],
    color: "#3b5998",
    sharing_url: "http://www.facebook.com/sharer.php?u=",
    id: "fb",
}, {
    name: "Twitter",
    fa_name:["fab", "twitter"],
    color: "#00acee",
    sharing_url: "http://twitter.com/?status=",
    id: "tw"
}, {
    name: "Telegram",
    fa_name:["fab", "telegram-plane"],
    color: "#0088cc",
    sharing_url: "tg://msg?text=",
    only_mobile:true,
    id: "tg"
}, {
    name: "Whatsapp",
    fa_name:["fab", "whatsapp"],
    color: "#00bb2d",
    sharing_url: "whatsapp://send?text=",
    only_mobile:true,
    id: "wa"
}];


export const DEFAULT_POSITIONS = {
    "desktop": {
      position: 'fixed', right: '0', top: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: '9999'
    },
    "mobile": {
      position: 'fixed', left: '50%', bottom: '-23px',
      transform: 'translate(-50%, -50%)',
      width: "100%",
      zIndex: '9999'
    }
}

// OPTIONS:  "lg" | "xs" | "sm" | "2x" | "3x" | "4x" | "5x" | "6x" | "7x" | "8x" | "9x" | "10x"
export const DEFAULT_LOGO_SIZE = "lg";

export const DEFAULT_BUTTON_SIZE = "30px"