//obtener el tiempo faltante
const getRemainTime = (deadline) => {
  let now = new Date();
  (remainTime = (new Date(deadline) - now + 1000) / 1000),
    (remainSeconds = ("0" + Math.floor(remainTime % 60)).slice(-2)),
    (remainMinut = ("0" + Math.floor((remainTime / 60) % 60)).slice(-2)),
    (remainHours = ("0" + Math.floor((remainTime / 3600) % 24)).slice(-2)),
    (remainDays = Math.floor(remainTime / (3600 * 24)));

  return {
    remainTime,
    remainSeconds,
    remainMinut,
    remainHours,
    remainDays,
  };
};

//pintar en pantalla el contador
const countdown = (deadline) => {
  const timerUpdate = setInterval(() => {
    let time = getRemainTime(deadline);
    let dias = document.getElementById("dias");
    let horas = document.getElementById("horas");
    let minutos = document.getElementById("minutos");
    let segundos = document.getElementById("segundos");

    dias.innerHTML = remainDays;
    horas.innerHTML = remainHours;
    minutos.innerHTML = remainMinut;
    segundos.innerHTML = remainSeconds;

    if (time.remainTime <= 1) {
      clearInterval(timerUpdate);
      dias.innerHTML = "--";
      horas.innerHTML = "--";
      minutos.innerHTML = "--";
      segundos.innerHTML = "--";
    }
  }, 1000);
};

countdown("11 08 2021 GMT-0300");
