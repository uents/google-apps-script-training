const jsonify = (obj) => {
    const payload = ContentService.createTextOutput(
        JSON.stringify(obj)
    ).setMimeType(ContentService.MimeType.JSON)
    return payload
};

const doGet = (props) => {
    res = {
        status: 'ok',
        method: 'get',
        props: props
    }
    return jsonify(res)
};

const doPost = (props) => {
    res = {
        status: 'ok',
        method: 'post',
        props: props
    }
    return jsonify(res)
};

