const responseHandler = async (res, callback) => {
    try {
        const payload = await callback;
        return res.status(payload?.status || 200).json({data:payload})
    } catch (e) {
        return res.status(e?.status || 500).json({})
    }
}
export default  responseHandler;