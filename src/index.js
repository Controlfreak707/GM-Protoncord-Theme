let style;

export default {
  goosemodHandlers: {
    onImport: async () => {
      style = document
        .createElement("style")
        .appendChild(
          document.createTextNode(
            `@import url("https://giangamerino.github.io/protoncord/index.css")`
          )
        );
      document.head.appendChild(style);
    },

    onRemove: async () => {
      style.remove();
    },
  },
};
