

export {componentType, ButtonType, globalStateType}

interface globalStateType {
    darkTheme: boolean,
    setDarkTheme: (darkTheme:boolean) => void,
    user: any,
    setUser: (user:any) => void
}

interface componentType {style: object, children: any}

interface ButtonType {
    title: string,
    onPress: () => void,
    backgroundColor?: string,
    color?: string
}