import{r as o,h as t,H as r}from"./p-1bd7f655.js";const e=class{constructor(t){o(this,t),this.size="md",this.color="default"}render(){return t(r,{key:"805e867c110dd65bed79d9cd3555f7042e9a645b",class:{"text-base":!0,[`text-${this.size}`]:!0,[`color-${this.color}`]:!0}},t("slot",{key:"2a48bd06a4638d9a1375f71cd2b1ed5d7b27c513"}))}};e.style='@charset "UTF-8";body.light-theme{--background-color:grey;--text-color:rgb(138, 138, 255);--border-color:rgb(138, 138, 255);--text-color-default:rgb(138, 138, 255);--text-color-inverse:#fff}body.dark-theme{--background-color:#000;--text-color:#fff;--border-color:#fff;--text-color-default:#fff;--text-color-inverse:#fff}body.custom-theme{--background-color:pink;--text-color:purple;--border-color:purple;--text-color-default:purple;--text-color-inverse:#fff;}body{background-color:var(--background-color);padding:300px 50px}button{background-color:var(--background-color);color:var(--text-color-default);border:1px solid var(--border-color);padding:10px 20px;margin-right:10px;cursor:pointer;transition:background-color 0.3s, color 0.3s}:host{display:block;font-family:Arial, sans-serif;color:var(--text-color, var(--text-color-default, #000))}:host([theme=light]){--text-color:#000;--text-color-default:#000;--text-color-inverse:#fff}:host([theme=dark]){--text-color:#fff;--text-color-default:#fff;--text-color-inverse:#fff}::slotted(*){font-size:inherit;color:inherit}:host(.text-base){line-height:normal}:host(.text-sm){font-size:12px}:host(.text-md){font-size:16px}:host(.text-lg){font-size:20px}:host(.color-default){color:var(--text-color-default, #000)}:host(.color-inverse){color:var(--text-color-inverse, #fff)}';export{e as text_base}