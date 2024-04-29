enum Orientation {
    N = 0,
    W = 1,
    S = 2,
    E = 3
}

export const isOrientation = (c: any): c is number => c >= 0 && c <= 4
export const isOrientationKey = (c: any): c is Orientation => 'NSWE'.split('').includes(c)

export default Orientation