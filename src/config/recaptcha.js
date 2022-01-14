export const loadRecaptcha = (id, key, callback) => {
  const isScriptExist = document.getElementById(id);

  if (!isScriptExist) {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = `https://www.google.com/recaptcha/enterprise.js?render=${key}`;
    script.id = id;
    script.onload = function () {
      if (callback) callback();
    };
    document.body.appendChild(script);
  }
  if (isScriptExist && callback) callback();
};
