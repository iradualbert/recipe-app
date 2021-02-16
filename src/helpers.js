const print = console.log

export const allOf = (name, value) => {
    print(name, value, typeof value)
    switch (typeof value) {
        case "object":
            const entries = Object.entries(value)
            for (const entry of entries) {
                print(entry[0], entry[1], typeof entry[1])
                // allOf(entry[0], entry[1])
            }
        default:
            return
        
    }
};

function shuffleArray(arr) {
  if (arr === null) return null;
  for (let t = 0; t < arr.length; t++){
    const [i, j] = [Math.floor(Math.random() * arr.length), Math.floor(Math.random() * arr.length)]
    const i_el = arr[i]
    const j_el = arr[j]
    // swap
    arr[i] = j_el
    arr[j] = i_el
  }
  return arr
}
