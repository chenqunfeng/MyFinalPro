isPicture = (file)->
    string = getFileEnding file
    if string?
        if ".JPG" is string or ".PNG" is string or ".GIF" is string or ".BMP" is string
            return true
        else
            return false
    else
        return false

isZIP = (file)->
    string = getFileEnding file
    if string?
        if ".ZIP" is string
            return true
        else
            return false
    else
        return false

isExcel = (file)->
    string = getFileEnding file
    if string?
        if ".XLS" is string or ".XLSX" is string
            return true
        else
            return false
    else
        return false

getFileEnding = (file) ->
    if file?
        fileName = file.name
        index = fileName.lastIndexOf(".")
        nameTemp = fileName.substr index
        tmp = nameTemp.toUpperCase()
        return tmp
    else
        return null

module.exports = {
    isPicture, isZIP, isExcel
}