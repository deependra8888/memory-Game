

export const InitialBoard = () => {
    function shuffle(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }
const intialBoard = [
    [1, 8, 2, 7],
    [2, 3, 6, 8],
    [7, 1, 3, 4],
    [5, 4, 6, 5],
  ].map(e => {
    return shuffle(e)
  })
  
  return InitialBoard
}
