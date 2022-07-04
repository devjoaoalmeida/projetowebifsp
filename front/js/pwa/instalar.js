let deferredPrompt;

window.addEventListener("beforeinstallprompt", e => {
  console.log("beforeinstallprompt fired");
  deferredPrompt = e;
});

function installApp() {
    deferredPrompt.prompt();
  
    deferredPrompt.userChoice.then(choiceResult => {
      if (choiceResult.outcome === "accepted") {
        console.log("PWA setup accepted");
      } else {
        console.log("PWA setup rejected");
      }
      deferredPrompt = null;
    });
  }