export type DirectionCommand = 'R' | 'L'
export type MovementCommand = 'M'
export type Command = DirectionCommand | MovementCommand

export const isMovementCommand = (c: Command): c is MovementCommand => c === 'M' as MovementCommand
export const isCommand = (c: any): c is Command => ['R', 'L', 'M'].includes(c)
export const isArrayOfCommands = (arr: any[]): arr is Command[] => arr.every(c => isCommand(c))
