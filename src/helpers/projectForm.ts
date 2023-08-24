export const transformLabel = (label: string, required?: boolean) => {
    if (required) return label + "*"
    return label
}

export const transformPlaceholder = (subject: string) => {
    const telephoneList = ["ของพรีเมี่ยมชำรุด", "ของพรีเมี่ยมไม่ครบ", "ปัญหาอื่นๆ"]
    if (telephoneList.includes(subject)) return "เบอร์โทรศัพท์/เบอร์ไฟเบอร์"
    return "เบอร์โทรศัพท์"
}