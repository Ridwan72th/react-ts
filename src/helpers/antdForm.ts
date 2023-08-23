export const transformLabel = (label: string, required?: boolean) => {
    if (required) return label + "*"
    return label
}