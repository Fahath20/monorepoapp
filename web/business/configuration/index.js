import allConfig from '@universal/common/configuration/allPlatform'

export const rendering =  {
    renderCardsHorizantally: true,
    numberOfRows: 8
}

export const theme =  {
    lblColor: "",
    btnColor: "",
    btnTxtColor: "",
    bgColor: "#dd82ee",
}

export default {
    ...allConfig,
    rendering,
    theme
}