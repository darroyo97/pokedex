let load = (initData) => {
    console.log("pokemon datat from dispatch", initData)
    return {
        type: 'InitialData',
        data: initData
    }
}

export default load