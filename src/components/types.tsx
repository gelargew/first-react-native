

export {componentType, ButtonType, globalStateType}

type globalStateType = {
    darkTheme: boolean,
    setDarkTheme: (darkTheme:boolean) => void
}

type componentType = {style: object, children: any}

type ButtonType = {
    title: string,
    onPress: () => void,
    backgroundColor?: string,
    color?: string
}