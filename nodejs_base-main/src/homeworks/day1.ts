console.log('******** Home work day 1! ********')

export const ptb2: (a: number, b: number, c: number) => void = (a, b, c) => {
  // TODO
}

ptb2(1, 2, 1)

export const ptb22: (a: number, b: number, c: number) => number = (a, b, c) => {
  // TODO
  return 1
}

const a = ptb22(1, 2, 2)

export const funcPromise: () => Promise<number> = () => {
  return new Promise(resolve => {
    resolve(1)
  })
}

const testPro = async () => {
  const c = await funcPromise()
}

type Address = {
  province: string
}

// never, unknown, null

const user: UserInterface = {
  name: 'Hung',
  age: 18,
  addresses: [
    {
      province: '',
    },
  ],
  emails: ['hungdv@gmail.com', ''],
  favorite: '1',
}
type UserType = {
  name: string
  age: number
  addresses: Address[]
  emails: string[]
  phone?: number
  favorite: number | string
}
interface UserInterface {
  name: string
  age: number
  addresses: Address[]
  emails: string[]
  phone?: number
  favorite: number | string
}
class User implements UserInterface {
  name: string

  age: number

  addresses: Address[]

  emails: string[]

  phone?: number | undefined

  favorite: string | number
}

export const name: string = 'Hung'

interface UserInterface2<Gender> {
  name: string

  gender: Gender
}

type UserTypeGeneric<T> = {
  name: T
}

const user2: UserInterface2<number> = {
  name: '',
  gender: 1,
}
