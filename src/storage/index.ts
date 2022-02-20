export const VolStorage = {
  load: () => {
    const vol = localStorage.getItem("vol");
    if (vol === null) {
      return 0.2;
    }
    return Number(vol);
  },
  save: (newVol: number) => {
    localStorage.setItem("vol", `${newVol}`);
  },
};
